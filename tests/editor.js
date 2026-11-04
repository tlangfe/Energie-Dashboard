// Editor-Test mit nachgebautem ha-form (das echte gibt es nur in Home Assistant). Aufruf: node tests/editor.js [ausgabeordner]
const { chromium } = require('playwright'); const path = require('path'), fs = require('fs');
const OUT = process.argv[2] || path.join(__dirname, 'out'); fs.mkdirSync(OUT, { recursive: true });
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 560, height: 2600 }, timezoneId: 'Europe/Berlin' });
  const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
  await p.setContent('<!doctype html><body style="font-family:sans-serif;margin:8px;--primary-color:#03a9f4;--secondary-text-color:#666"></body>');
  await p.addScriptTag({ content: `
    customElements.define('ha-entity-picker', class extends HTMLElement {});
    customElements.define('ha-form', class extends HTMLElement {
      set schema(s) { this._s = s; this.r(); } get schema() { return this._s; }
      set data(d) { this._d = d; this.r(); } get data() { return this._d; }
      r() { if (!this._s || !this._d || !this.computeLabel) return; const z = []; const walk = (s, tief) => s.forEach(x => { if (x.schema) { z.push('<h4 style="margin:8px 0 2px">' + (x.title || '') + '</h4>'); walk(x.schema, tief + 1); } else z.push('<div style="font-size:12px;border-bottom:1px solid #eee;padding:2px"><b>' + this.computeLabel(x) + '</b>: ' + (this._d[x.name] ?? '') + '<br><i style="color:#777">' + (this.computeHelper(x) || '') + '</i></div>'); }); walk(this._s, 0); this.innerHTML = z.join(''); }
    });` });
  await p.addScriptTag({ path: path.join(__dirname, 'mock-hass.js') }); await p.addScriptTag({ path: path.join(__dirname, '..', 'dist', 'energie-dashboard-card.js') });
  const r = await p.evaluate(async () => {
    const warte = ms => new Promise(r => setTimeout(r, ms)), erg = {};
    // 1) Stub-Konfiguration beim Hinzufuegen (neues Format)
    erg.stub = await customElements.get('energie-dashboard-card').getStubConfig(mockHass());
    // 2) altes Format ohne Leistungssensoren: Rest nur aus demselben Geraet
    const alt = { energy_sources: [{ type: 'grid', flow_from: [{ stat_energy_from: 'sensor.grid_import' }], flow_to: [{ stat_energy_to: 'sensor.grid_export' }], cost_adjustment_day: 0 }, { type: 'solar', stat_energy_from: 'sensor.solar_energy' }, { type: 'battery', stat_energy_from: 'sensor.battery_out', stat_energy_to: 'sensor.battery_in' }] };
    erg.altFormat = (await sensorenErkennen(mockHass({}, { prefs: alt }))).config;
    erg.keinePrefs = await sensorenErkennen(mockHass({}, { prefs: { energy_sources: [] } }));
    // 3) Editor mit leerer Karte: Erkennung startet selbst, nur als Vorschlag
    const ed = document.createElement('energie-dashboard-card-editor'); document.body.appendChild(ed);
    let zuletzt = null; ed.addEventListener('config-changed', e => { zuletzt = e.detail.config; });
    ed.setConfig({ type: 'custom:energie-dashboard-card' }); ed.hass = mockHass();
    for (let i = 0; i < 50 && !ed.shadowRoot?.getElementById('ueb'); i++) await warte(100);
    const R = ed.shadowRoot;
    erg.vorschlagZeilen = R.querySelectorAll('#einr li').length; erg.vorAnwenden = zuletzt;
    R.getElementById('ueb').click(); await warte(300);
    erg.nachAnwenden = zuletzt;
    ed.setConfig(zuletzt); await warte(500);
    erg.pruef = [...R.querySelectorAll('#pruef tr')].map(t => t.children[0].textContent + ' ' + t.children[1].querySelector('b').textContent + ' | ' + t.children[2].textContent);
    // 4) Sensor von Hand aendern (falscher Sensor gefunden) und PV-Eingang mit Namen
    const f = R.querySelector('ha-form');
    f.dispatchEvent(new CustomEvent('value-changed', { detail: { value: { ...f.data, grid_power: 'sensor.battery_soc', solar_string_1: 'sensor.pv1_power', solar_string_1_name: 'Süd', image_size: 56 } } }));
    await warte(500);
    erg.manuell = zuletzt; ed.setConfig(zuletzt); await warte(400);
    erg.pruefFalscheEinheit = [...R.querySelectorAll('#pruef tr')].map(t => t.children[2].textContent).find(t => /Einheit/.test(t));
    // 5) Bild hochladen in Medien
    await ed._hochladen(new File(['x'], 'haus.png', { type: 'image/png' })); await warte(200);
    erg.bild = zuletzt.image; erg.bildStatus = R.getElementById('bst').textContent; erg.medien = R.getElementById('medien').options.length;
    return erg;
  });
  await p.screenshot({ path: path.join(OUT, 'editor.png'), fullPage: true });
  console.log(JSON.stringify(r, null, 1));
  let f = errs.length; const pruefe = (n, ok) => { console.log((ok ? 'OK   ' : 'FEHL ') + n); if (!ok) f++; };
  const s = r.stub;
  pruefe('Stub: Netz/Solar/Akku/Gas/Wasser erkannt', s.grid_power === 'sensor.grid_power' && s.solar_power === 'sensor.solar_power' && s.battery_charge_power === 'sensor.battery_charge_power' && s.battery_discharge_power === 'sensor.battery_discharge_power' && s.battery_soc === 'sensor.battery_soc' && s.battery_capacity === 2.56 && s.gas_energy === 'sensor.gas_meter' && s.water_energy === 'sensor.water_meter');
  pruefe('Stub: Durchfluss aus demselben Geraet', s.gas_rate === 'sensor.gas_flow' && s.water_rate === 'sensor.water_flow');
  pruefe('Stub: stillgelegte Solarquelle nicht gewaehlt', s.solar_energy === 'sensor.solar_energy');
  pruefe('Stub: PV-Eingaenge erkannt', Array.isArray(s.solar_strings) && s.solar_strings.length === 2);
  pruefe('Nie den Handy-Akku', !JSON.stringify(r).includes('phone_battery'));
  const a = r.altFormat;
  pruefe('Altes Format: Zaehler', a.grid_import_energy === 'sensor.grid_import' && a.grid_export_energy === 'sensor.grid_export');
  pruefe('Altes Format: Leistung aus Geraet', a.grid_power === 'sensor.grid_power' && a.solar_power === 'sensor.solar_power' && a.battery_soc === 'sensor.battery_soc' && a.battery_charge_power === 'sensor.battery_charge_power' && a.battery_discharge_power === 'sensor.battery_discharge_power');
  pruefe('Leere Energie-Einstellungen: nichts geraten', Object.keys(r.keinePrefs.config).filter(k => !k.startsWith('show_')).length === 0 && r.keinePrefs.hinweise.includes('leer'));
  pruefe('Editor: Vorschlag sichtbar, nicht still uebernommen', r.vorschlagZeilen >= 10 && r.vorAnwenden === null);
  pruefe('Editor: Uebernehmen schreibt Konfiguration', r.nachAnwenden && r.nachAnwenden.grid_power === 'sensor.grid_power');
  pruefe('Pruefliste: alles in Ordnung', r.pruef.length >= 10 && r.pruef.every(z => z.startsWith('✓')));
  pruefe('Manuell geaendert, PV-Name, keine Hilfsschluessel', r.manuell.grid_power === 'sensor.battery_soc' && r.manuell.solar_strings[0].name === 'Süd' && !Object.keys(r.manuell).some(k => k.startsWith('sec_') || k.startsWith('solar_string_')) && !('image_size' in r.manuell));
  pruefe('Pruefliste: falsche Einheit erkannt', !!r.pruefFalscheEinheit);
  pruefe('Upload in Medien', r.bild === 'media-source://media_source/local/neu.png');
  if (errs.length) console.log(errs);
  console.log('Fehler gesamt: ' + f); await b.close(); process.exit(f ? 1 : 0);
})();
