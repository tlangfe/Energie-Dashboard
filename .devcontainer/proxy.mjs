#!/usr/bin/env node
// Kleiner Zwischen-Proxy fuer den Codespaces-Test: nimmt Anfragen auf Port 8123 an und reicht sie an
// Home Assistant (Port 8125) weiter. Er entfernt X-Forwarded-*-Kopfzeilen, denn Home Assistant lehnt
// Anfragen ueber den GitHub-Weiterleitungs-Proxy sonst mit "400: Bad Request" ab. Websockets werden durchgereicht.
// Nur fuer die Testumgebung, ohne Abhaengigkeiten (Node 22).
import http from 'node:http';
import net from 'node:net';

const ZIEL_HOST = '127.0.0.1', ZIEL_PORT = +(process.env.HA_PORT || 8125), PORT = +(process.env.PROXY_PORT || 8123);
const ohneWeiterleitung = h => { const o = {}; for (const [k, v] of Object.entries(h)) if (!/^(x-forwarded-.*|forwarded|x-real-ip)$/i.test(k)) o[k] = v; return o; };

const server = http.createServer((req, res) => {
  const p = http.request({ host: ZIEL_HOST, port: ZIEL_PORT, method: req.method, path: req.url, headers: ohneWeiterleitung(req.headers) }, r => {
    res.writeHead(r.statusCode || 502, { ...r.headers, 'x-energie-proxy': '1' }); r.pipe(res);
  });
  p.on('error', () => { if (!res.headersSent) res.writeHead(502, { 'content-type': 'text/html; charset=utf-8', 'x-energie-proxy': '1', 'retry-after': '10' }); res.end('<!doctype html><meta http-equiv="refresh" content="10"><p style="font-family:sans-serif">Home Assistant startet noch. Diese Seite lädt sich in 10 Sekunden neu.</p>'); });
  req.pipe(p);
});
server.on('upgrade', (req, sock, head) => {
  const z = net.connect(ZIEL_PORT, ZIEL_HOST, () => {
    let kopf = `${req.method} ${req.url} HTTP/1.1\r\n`;
    for (const [k, v] of Object.entries(ohneWeiterleitung(req.headers))) for (const w of [].concat(v)) kopf += `${k}: ${w}\r\n`;
    z.write(kopf + '\r\n'); if (head && head.length) z.write(head);
    z.pipe(sock); sock.pipe(z);
  });
  z.on('error', () => sock.destroy()); sock.on('error', () => z.destroy());
});
server.on('error', e => { console.error(`[energie-proxy] ${e.code === 'EADDRINUSE' ? `Port ${PORT} ist schon belegt` : e.message}`); process.exit(e.code === 'EADDRINUSE' ? 0 : 1); });
server.listen(PORT, '0.0.0.0', () => console.log(`[energie-proxy] Port ${PORT} -> Home Assistant ${ZIEL_HOST}:${ZIEL_PORT}`));
