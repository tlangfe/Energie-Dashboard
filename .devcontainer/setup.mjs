#!/usr/bin/env node
// Richtet das Test-Home-Assistant im Codespace ein. Laeuft bei jedem Start, Schritte sind wiederholbar.
// 1. wartet auf Home Assistant, 2. Ersteinrichtung mit Testbenutzer, 3. Energie-Einstellungen,
// 4. Ressource der Karte, 5. Dashboard "Energie Test", 6. zwei Tage Beispiel-Statistik (einmalig).
// Nur fuer die Testumgebung gedacht, nicht fuer ein echtes Home Assistant.
import { statSync, readFileSync, existsSync } from 'node:fs';

const HA = 'http://localhost:8123', CLIENT = `${HA}/`, USER = 'test', PASS = 'test1234';
const KARTE = new URL('../dist/energie-dashboard-card.js', import.meta.url);
const log = m => console.log(`[energie-test] ${m}`);
const HA_LOG = new URL('./ha-config/home-assistant.log', import.meta.url);
// Letzte Zeilen des HA-Protokolls und der wahrscheinliche Grund, wenn HA nicht hochkommt
function protokoll(n = 40) {
  if (!existsSync(HA_LOG)) { log('Noch kein Protokoll von Home Assistant (.devcontainer/ha-config/home-assistant.log). Der Container startet vermutlich noch oder wurde nicht gestartet.'); return; }
  const z = readFileSync(HA_LOG, 'utf8').split('\n');
  const grund = z.filter(l => /Invalid config|recovery mode|safe mode|ERROR \(MainThread\) \[homeassistant\.(bootstrap|config|core_config)\]/i.test(l)).slice(-5);
  if (grund.length) { log('Wahrscheinlicher Grund:'); grund.forEach(l => console.log('  ' + l.slice(0, 300))); }
  log(`Letzte ${n} Zeilen aus .devcontainer/ha-config/home-assistant.log:`); z.slice(-n).forEach(l => console.log('  ' + l.slice(0, 300)));
}
if (process.argv[2] === 'log') { protokoll(80); process.exit(0); }
const warte = ms => new Promise(r => setTimeout(r, ms));

async function json(pfad, opt = {}) {
  const r = await fetch(HA + pfad, opt); const t = await r.text();
  if (!r.ok) throw new Error(`${opt.method || 'GET'} ${pfad}: ${r.status} ${t.slice(0, 200)}`);
  try { return JSON.parse(t); } catch { return t; }
}
async function token(code) {
  const body = new URLSearchParams({ grant_type: 'authorization_code', code, client_id: CLIENT });
  return (await json('/auth/token', { method: 'POST', body })).access_token;
}
async function anmelden() {
  const f = await json('/auth/login_flow', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ client_id: CLIENT, handler: ['homeassistant', null], redirect_uri: CLIENT }) });
  const r = await json(`/auth/login_flow/${f.flow_id}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ client_id: CLIENT, username: USER, password: PASS }) });
  if (r.type !== 'create_entry') throw new Error('Anmeldung als Testbenutzer fehlgeschlagen (Passwort geaendert?)');
  return token(r.result);
}
async function ersteinrichtung() {
  let schritte;
  for (let i = 0; i < 120; i++) {
    try { schritte = await json('/api/onboarding'); break; }
    catch (e) {
      if (i % 6 === 0) log(`warte auf Home Assistant … (${i * 5} s${/404/.test(e.message) ? ', HA antwortet, aber ohne Ersteinrichtung' : ''})`);
      if (i === 36) protokoll(15);
      await warte(5000);
    }
  }
  if (!schritte) { protokoll(); throw new Error('Home Assistant ist nach 10 Minuten nicht bereit. Protokoll oben; erneut versuchen: node .devcontainer/setup.mjs'); }
  if (!Array.isArray(schritte)) { protokoll(); throw new Error('Home Assistant laeuft im Notfallmodus (Konfiguration ungueltig). Protokoll oben.'); }
  const offen = s => schritte.some(x => x.step === s && !x.done);
  let tok;
  if (offen('user')) {
    log('Ersteinrichtung: Benutzer test / test1234');
    const r = await json('/api/onboarding/users', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ client_id: CLIENT, name: 'Test', username: USER, password: PASS, language: 'de' }) });
    tok = await token(r.auth_code);
  } else tok = await anmelden();
  const auth = { Authorization: `Bearer ${tok}`, 'Content-Type': 'application/json' };
  for (const [s, body] of [['core_config', {}], ['analytics', {}], ['integration', { client_id: CLIENT, redirect_uri: CLIENT }]]) if (offen(s)) await json(`/api/onboarding/${s}`, { method: 'POST', headers: auth, body: JSON.stringify(body) }).catch(e => log('Hinweis: ' + e.message));
  return tok;
}
function verbinde(tok) {
  return new Promise((ok, fehl) => {
    const ws = new WebSocket(HA.replace('http', 'ws') + '/api/websocket'); let nr = 0; const offen = new Map();
    const ruf = (type, d = {}) => new Promise((a, b) => { const id = ++nr; offen.set(id, { a, b }); ws.send(JSON.stringify({ id, type, ...d })); });
    ws.onmessage = ev => { const m = JSON.parse(ev.data); if (m.type === 'auth_required') ws.send(JSON.stringify({ type: 'auth', access_token: tok })); else if (m.type === 'auth_ok') ok({ ruf, zu: () => ws.close() }); else if (m.type === 'auth_invalid') fehl(new Error(m.message)); else if (m.type === 'result' && offen.has(m.id)) { const p = offen.get(m.id); offen.delete(m.id); m.success ? p.a(m.result) : p.b(new Error(JSON.stringify(m.error))); } };
    ws.onerror = () => fehl(new Error('WebSocket-Verbindung fehlgeschlagen'));
  });
}
const S = {
  netz: 'sensor.test_netz_leistung', solar: 'sensor.test_solar_leistung', akku: 'sensor.test_akku_leistung', soc: 'sensor.test_akku_ladestand',
  bezug: 'sensor.test_netz_bezug', einsp: 'sensor.test_netz_einspeisung', solarE: 'sensor.test_solar_energie', rein: 'sensor.test_akku_rein', raus: 'sensor.test_akku_raus',
  gas: 'sensor.test_gaszaehler', gasF: 'sensor.test_gas_durchfluss', wasser: 'sensor.test_wasserzaehler', wasserF: 'sensor.test_wasser_durchfluss',
};
async function energie(ha) {
  const p = await ha.ruf('energy/get_prefs').catch(() => null);
  if (p && p.energy_sources && p.energy_sources.length) { log('Energie-Einstellungen vorhanden, bleiben unveraendert'); return; }
  const neu = [{ type: 'solar', stat_energy_from: S.solarE, stat_rate: S.solar, config_entry_solar_forecast: null }, { type: 'battery', stat_energy_from: S.raus, stat_energy_to: S.rein, power_config: { stat_rate: S.akku } }, { type: 'gas', stat_energy_from: S.gas, stat_cost: null, entity_energy_price: null, number_energy_price: null }, { type: 'water', stat_energy_from: S.wasser, stat_cost: null, entity_energy_price: null, number_energy_price: null }];
  // Netz: neues Format (2026.x) zuerst, sonst das aeltere mit flow_from/flow_to
  const netzNeu = { type: 'grid', stat_energy_from: S.bezug, stat_energy_to: S.einsp, power_config: { stat_rate: S.netz }, cost_adjustment_day: 0 };
  const netzAlt = { type: 'grid', flow_from: [{ stat_energy_from: S.bezug, stat_cost: null, entity_energy_price: null, number_energy_price: null }], flow_to: [{ stat_energy_to: S.einsp, stat_compensation: null, entity_energy_price: null, number_energy_price: null }], power: [{ power_config: { stat_rate: S.netz } }], cost_adjustment_day: 0 };
  for (const [name, netz] of [['neu', netzNeu], ['alt', netzAlt]]) {
    for (const quellen of [[netz, ...neu], [netz, ...neu.map(q => { const k = { ...q }; delete k.power_config; if (q.power_config) k.stat_rate = q.power_config.stat_rate; return k; })]]) {
      try { await ha.ruf('energy/save_prefs', { energy_sources: quellen, device_consumption: [] }); log(`Energie-Einstellungen eingetragen (Format ${name})`); return; } catch (e) { /* naechstes Format */ }
    }
  }
  try { await ha.ruf('energy/save_prefs', { energy_sources: [netzAlt.power ? { ...netzAlt, power: undefined } : netzAlt, ...neu.map(q => { const k = { ...q }; delete k.power_config; delete k.stat_rate; return k; })], device_consumption: [] }); log('Energie-Einstellungen eingetragen (ohne Leistungssensoren)'); }
  catch (e) { log('Energie-Einstellungen konnten nicht gespeichert werden: ' + e.message + ' – bitte von Hand unter Einstellungen › Dashboards › Energie eintragen.'); }
}
async function ressource(ha) {
  const v = Math.floor(statSync(KARTE).mtimeMs / 1000), url = `/local/energie-dashboard-card/energie-dashboard-card.js?v=${v}`;
  const liste = await ha.ruf('lovelace/resources'), da = liste.find(r => r.url.includes('energie-dashboard-card.js'));
  if (da) { if (da.url !== url) await ha.ruf('lovelace/resources/update', { resource_id: da.id, res_type: 'module', url }); }
  else await ha.ruf('lovelace/resources/create', { res_type: 'module', url });
  log('Ressource: ' + url);
}
async function dashboard(ha) {
  const liste = await ha.ruf('lovelace/dashboards/list');
  if (!liste.some(d => d.url_path === 'energie-test')) await ha.ruf('lovelace/dashboards/create', { url_path: 'energie-test', title: 'Energie Test', icon: 'mdi:flask-outline', show_in_sidebar: true, require_admin: false, mode: 'storage' });
  const regler = { type: 'entities', title: 'Testwerte (Schieberegler)', entities: ['input_number.test_solar', 'input_number.test_haus', 'input_number.test_akku', 'input_number.test_ladestand', 'input_number.test_gas_durchfluss', 'input_number.test_wasser_durchfluss', S.netz], footer: undefined };
  const karte = { type: 'custom:energie-dashboard-card', grid_power: S.netz, grid_import_energy: S.bezug, grid_export_energy: S.einsp, solar_power: S.solar, solar_energy: S.solarE, battery_power: S.akku, battery_soc: S.soc, battery_capacity: 2.56, battery_energy_in: S.rein, battery_energy_out: S.raus, gas_energy: S.gas, gas_rate: S.gasF, water_energy: S.wasser, water_rate: S.wasserF };
  const pro = { type: 'custom:energie-dashboard-auswertung-card', grid_power: S.netz, grid_import_energy: S.bezug, grid_export_energy: S.einsp, solar_power: S.solar, solar_energy: S.solarE, battery_power: S.akku, battery_soc: S.soc, battery_capacity: 2.56, battery_energy_in: S.rein, battery_energy_out: S.raus };
  const leer = { type: 'custom:energie-dashboard-card' };
  await ha.ruf('lovelace/config/save', { url_path: 'energie-test', config: { title: 'Energie Test', views: [
    { title: 'Energie', path: 'energie', icon: 'mdi:home-lightning-bolt-outline', type: 'sections', max_columns: 2, sections: [{ type: 'grid', cards: [karte] }, { type: 'grid', cards: [regler, { type: 'markdown', content: 'Schieberegler bewegen: Die Karte links reagiert sofort. Das Netz ergibt sich aus **Haus − Solar − Akku**.\n\nZum Testen der Einrichtung: Ansicht **Neu einrichten** öffnen, Karte bearbeiten und **Sensoren automatisch erkennen** drücken.' }] }] },
    { title: 'Auswertung (Pro)', path: 'auswertung', icon: 'mdi:chart-timeline-variant', type: 'panel', cards: [pro] },
    { title: 'Neu einrichten', path: 'neu', icon: 'mdi:auto-fix', type: 'sections', sections: [{ type: 'grid', cards: [leer] }] },
  ] } });
  log('Dashboard "Energie Test" gespeichert');
}
// Zwei Tage Stundenwerte fuer die Zaehler, damit Tageswerte und fruehere Tage sofort etwas zeigen (nur einmal)
async function statistik(ha) {
  const ids = [S.bezug, S.einsp, S.solarE, S.rein, S.raus, S.gas, S.wasser];
  const meta = await ha.ruf('recorder/get_statistics_metadata', { statistic_ids: ids }).catch(() => []);
  if (meta.length) { log('Statistik vorhanden, keine Beispielwerte eingespielt'); return; }
  const jetzt = new Date(); jetzt.setMinutes(0, 0, 0); const start = new Date(jetzt.getTime() - 48 * 3600e3);
  const proStunde = h => ({ [S.bezug]: h < 7 || h > 20 ? 0.18 : 0.04, [S.einsp]: h >= 11 && h <= 14 ? 0.02 : 0, [S.solarE]: Math.max(0, Math.sin((h - 6) / 14 * Math.PI)) * 0.35, [S.rein]: h >= 9 && h <= 15 ? 0.12 : 0, [S.raus]: h >= 18 || h <= 1 ? 0.09 : 0, [S.gas]: h >= 6 && h <= 8 || h >= 18 && h <= 21 ? 0.15 : 0.01, [S.wasser]: h === 7 || h === 19 ? 0.06 : 0.002 });
  const einheit = { [S.gas]: 'm³', [S.wasser]: 'm³' };
  for (const id of ids) {
    let sum = 0; const stats = [];
    for (let t = start.getTime(); t < jetzt.getTime(); t += 3600e3) { sum += proStunde(new Date(t).getHours())[id]; stats.push({ start: new Date(t).toISOString(), state: +sum.toFixed(4), sum: +sum.toFixed(4) }); }
    await ha.ruf('recorder/import_statistics', { metadata: { has_mean: false, mean_type: 0, has_sum: true, name: null, source: 'recorder', statistic_id: id, unit_of_measurement: einheit[id] || 'kWh', unit_class: einheit[id] ? 'volume' : 'energy' }, stats }).catch(e => log('Statistik ' + id + ': ' + e.message));
  }
  log('Beispiel-Statistik fuer 48 Stunden eingespielt');
}
try {
  const tok = await ersteinrichtung(), ha = await verbinde(tok);
  await energie(ha); await ressource(ha); await dashboard(ha); await statistik(ha); ha.zu();
  log('Fertig. Home Assistant oeffnen (Port 8123), anmelden mit test / test1234, links "Energie Test" waehlen.');
} catch (e) { log('Fehler: ' + e.message); log('Hilfe: Protokoll anzeigen mit  node .devcontainer/setup.mjs log'); process.exitCode = 0; }
