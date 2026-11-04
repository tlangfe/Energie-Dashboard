#!/usr/bin/env node
// Energie Dashboard Card: Testdashboard anlegen, Original ersetzen (mit Sicherung) und zuruecksetzen.
// Braucht Node 22 oder neuer (eingebautes WebSocket), sonst nichts.
//
//   export HA_URL=http://homeassistant.local:8123
//   export HA_TOKEN=<Langzeit-Token aus dem HA-Profil>
//
//   node tools/ha-dashboard.mjs test     [--config karte.json] [--resource /local/energie-dashboard-card.js]
//   node tools/ha-dashboard.mjs ersetzen --dashboard <url_path|lovelace> [--alt custom:energie-haus-card] [--config karte.json]
//   node tools/ha-dashboard.mjs zurueck  --dashboard <url_path|lovelace> [--sicherung <url_path>]
//   node tools/ha-dashboard.mjs liste
//
// "test" legt das Dashboard "Energie Test" (/energie-test) an und setzt dort die neue Karte ein. Bestehende Dashboards bleiben unberuehrt.
// "ersetzen" kopiert das Dashboard zuerst vollstaendig in ein neues Sicherungs-Dashboard und in eine JSON-Datei,
//   danach wird jede alte Karte (Standard custom:energie-haus-card) durch die neue ersetzt. Die alte Karte, ihre Datei und Ressource werden nicht geloescht.
// "zurueck" stellt das Dashboard aus der neuesten (oder angegebenen) Sicherung wieder her.
import { readFileSync, writeFileSync } from 'node:fs';

const VERSION = '1.0.0-beta.2';
const TEST_PFAD = 'energie-test';
const args = process.argv.slice(2), befehl = args[0];
const opt = n => { const i = args.indexOf('--' + n); return i > 0 ? args[i + 1] : undefined; };
const url = (process.env.HA_URL || '').replace(/\/$/, ''), token = process.env.HA_TOKEN;
if (!['test', 'ersetzen', 'zurueck', 'liste'].includes(befehl)) { console.log(readFileSync(new URL(import.meta.url), 'utf8').split('\n').slice(1, 19).map(z => z.replace(/^\/\/ ?/, '')).join('\n')); process.exit(1); }
if (!url || !token) { console.error('Bitte HA_URL und HA_TOKEN setzen (Token: HA › Profil › Sicherheit › Langzeit-Zugriffstoken).'); process.exit(1); }
if (typeof WebSocket === 'undefined') { console.error('Node 22 oder neuer wird gebraucht (eingebautes WebSocket).'); process.exit(1); }

let nr = 0; const offen = new Map();
const ws = new WebSocket(url.replace(/^http/, 'ws') + '/api/websocket');
const ruf = (type, daten = {}) => new Promise((ok, fehl) => { const id = ++nr; offen.set(id, { ok, fehl }); ws.send(JSON.stringify({ id, type, ...daten })); });
ws.onmessage = ev => {
  const m = JSON.parse(ev.data);
  if (m.type === 'auth_required') ws.send(JSON.stringify({ type: 'auth', access_token: token }));
  else if (m.type === 'auth_invalid') { console.error('Anmeldung abgelehnt: ' + m.message); process.exit(1); }
  else if (m.type === 'auth_ok') start().then(() => ws.close(), e => { console.error('Fehler: ' + (e.message || JSON.stringify(e))); ws.close(); process.exitCode = 1; });
  else if (m.type === 'result' && offen.has(m.id)) { const p = offen.get(m.id); offen.delete(m.id); m.success ? p.ok(m.result) : p.fehl(m.error); }
};
ws.onerror = () => { console.error('Keine Verbindung zu ' + url); process.exit(1); };

const pfad = d => (!d || d === 'lovelace') ? null : d;
const ladeConfig = async d => { try { return await ruf('lovelace/config', { url_path: pfad(d), force: true }); } catch (e) { if (e.code === 'config_not_found') return null; throw e; } };
const speichere = (d, config) => ruf('lovelace/config/save', { url_path: pfad(d), config });
const zeit = () => new Date().toISOString().slice(0, 16).replace(/[-:T]/g, '').replace(/^(\d{8})/, '$1-');
function karteAusDatei() {
  const f = opt('config'); if (!f) return null;
  const k = JSON.parse(readFileSync(f, 'utf8')); k.type = 'custom:energie-dashboard-card'; return k;
}
async function ressource() {
  const soll = opt('resource');
  const liste = await ruf('lovelace/resources').catch(() => null);
  if (!liste) { console.log('Hinweis: Ressourcen sind im YAML-Modus und koennen hier nicht gesetzt werden.'); return; }
  const da = liste.find(r => /energie-dashboard-card\.js/.test(r.url));
  if (da && !soll) { console.log('Ressource vorhanden: ' + da.url); return; }
  const neu = (soll || '/local/energie-dashboard-card.js') + (/\?/.test(soll || '') ? '' : '?v=' + VERSION);
  if (da) { await ruf('lovelace/resources/update', { resource_id: da.id, res_type: 'module', url: neu }); console.log('Ressource aktualisiert: ' + neu); }
  else { await ruf('lovelace/resources/create', { res_type: 'module', url: neu }); console.log('Ressource angelegt: ' + neu); }
  if (neu.startsWith('/local/')) console.log('  Datei dist/energie-dashboard-card.js nach /config/www/energie-dashboard-card.js kopieren (ohne HACS).');
}
function ersetzeKarten(knoten, alt, neu, zaehler) {
  if (Array.isArray(knoten)) return knoten.map(k => ersetzeKarten(k, alt, neu, zaehler));
  if (knoten && typeof knoten === 'object') {
    if (knoten.type === alt) { zaehler.n++; return { ...neu, ...(knoten.grid_options ? { grid_options: knoten.grid_options } : {}), ...(knoten.view_layout ? { view_layout: knoten.view_layout } : {}), ...(knoten.visibility ? { visibility: knoten.visibility } : {}) }; }
    return Object.fromEntries(Object.entries(knoten).map(([k, v]) => [k, ersetzeKarten(v, alt, neu, zaehler)]));
  }
  return knoten;
}
function findeKarte(knoten) {
  if (Array.isArray(knoten)) { for (const k of knoten) { const r = findeKarte(k); if (r) return r; } return null; }
  if (knoten && typeof knoten === 'object') { if (knoten.type === 'custom:energie-dashboard-card') return knoten; for (const v of Object.values(knoten)) { const r = findeKarte(v); if (r) return r; } }
  return null;
}
async function start() {
  const dashboards = await ruf('lovelace/dashboards/list');
  if (befehl === 'liste') { console.log('lovelace (Standard)'); for (const d of dashboards) console.log(d.url_path + '  ' + d.title); return; }
  if (befehl === 'test') {
    await ressource();
    if (!dashboards.some(d => d.url_path === TEST_PFAD)) { await ruf('lovelace/dashboards/create', { url_path: TEST_PFAD, title: 'Energie Test', icon: 'mdi:flask-outline', show_in_sidebar: true, require_admin: false, mode: 'storage' }); console.log('Dashboard angelegt: /' + TEST_PFAD); }
    const alt = await ladeConfig(TEST_PFAD), karte = karteAusDatei() || findeKarte(alt) || { type: 'custom:energie-dashboard-card' };
    await speichere(TEST_PFAD, { title: 'Energie Test', views: [{ title: 'Energie Test', path: 'energie', cards: [karte] }] });
    console.log(`Testdashboard gespeichert: ${url}/${TEST_PFAD}/energie`);
    console.log(Object.keys(karte).length <= 1 ? 'Die Karte ist noch leer: Dashboard öffnen › Bearbeiten › Karte bearbeiten › „Sensoren automatisch erkennen“.' : 'Karte mit Konfiguration eingesetzt.');
    return;
  }
  const ziel = opt('dashboard'); if (!ziel) throw new Error('--dashboard fehlt (z. B. lovelace oder dashboard-energie). Mit "liste" alle anzeigen.');
  if (befehl === 'ersetzen') {
    const original = await ladeConfig(ziel); if (!original) throw new Error('Dashboard ' + ziel + ' hat keine gespeicherte Konfiguration (YAML-Modus?).');
    const neu = karteAusDatei() || findeKarte(await ladeConfig(TEST_PFAD));
    if (!neu || Object.keys(neu).length <= 1) throw new Error('Keine eingerichtete neue Karte gefunden. Erst "test" ausführen und die Karte im Testdashboard einrichten, oder --config angeben.');
    // 1. Sicherung: Datei und eigenes Dashboard
    const sPfad = `${(pfad(ziel) || 'start')}-sicherung-${zeit()}`.toLowerCase().replace(/[^a-z0-9-]/g, '-');
    const datei = `sicherung-${sPfad}.json`; writeFileSync(datei, JSON.stringify(original, null, 2));
    await ruf('lovelace/dashboards/create', { url_path: sPfad, title: `${original.title || ziel} (Sicherung)`, icon: 'mdi:backup-restore', show_in_sidebar: true, require_admin: true, mode: 'storage' });
    await speichere(sPfad, original);
    const pruef = await ladeConfig(sPfad); if (JSON.stringify(pruef) !== JSON.stringify(original)) throw new Error('Sicherung konnte nicht bestätigt werden, es wurde nichts ersetzt.');
    console.log(`Sicherung: Dashboard /${sPfad} und Datei ${datei}`);
    // 2. Ersetzen
    const z = { n: 0 }, ergebnis = ersetzeKarten(original, opt('alt') || 'custom:energie-haus-card', neu, z);
    if (!z.n) { console.log('Keine alte Karte gefunden, nichts geändert. Die Sicherung bleibt bestehen.'); return; }
    await speichere(ziel, ergebnis);
    console.log(`${z.n} Karte(n) in ${ziel} ersetzt. Alte Karte und Ressource bleiben installiert.`);
    console.log(`Zurück: node tools/ha-dashboard.mjs zurueck --dashboard ${ziel} --sicherung ${sPfad}`);
    return;
  }
  if (befehl === 'zurueck') {
    const basis = (pfad(ziel) || 'start') + '-sicherung-';
    const s = opt('sicherung') || dashboards.map(d => d.url_path).filter(p => p.startsWith(basis)).sort().pop();
    if (!s) throw new Error('Keine Sicherung für ' + ziel + ' gefunden.');
    const cfg = await ladeConfig(s); if (!cfg) throw new Error('Sicherung ' + s + ' ist leer.');
    await speichere(ziel, cfg); console.log(`${ziel} aus /${s} wiederhergestellt. Die Sicherung bleibt bestehen.`);
  }
}
