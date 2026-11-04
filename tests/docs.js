// Erzeugt die Vorschaubilder in docs/ (Beispielhaus, Beispielwerte). Aufruf: MDI_JS=<pfad zu icons.js> node tests/docs.js
const { chromium } = require('playwright'); const path = require('path'), fs = require('fs');
const DOCS = path.join(__dirname, '..', 'docs');
const VOLL = { type: 'custom:energie-dashboard-card', grid_power: 'sensor.grid_power', grid_import_energy: 'sensor.grid_import', grid_export_energy: 'sensor.grid_export', solar_power: 'sensor.solar_power', solar_energy: 'sensor.solar_energy', solar_strings: [{ entity: 'sensor.pv1_power', name: 'PV1' }, { entity: 'sensor.pv2_power', name: 'PV2' }], battery_power: 'sensor.battery_power', battery_soc: 'sensor.battery_soc', battery_energy_in: 'sensor.battery_in', battery_energy_out: 'sensor.battery_out', battery_capacity: 2.56, gas_energy: 'sensor.gas_meter', gas_rate: 'sensor.gas_flow', water_energy: 'sensor.water_meter', water_rate: 'sensor.water_flow' };
const BILDER = [
  ['vorschau.png', VOLL, {}, 'de', 375], ['preview-en.png', VOLL, {}, 'en', 375],
  ['variante-ohne-akku.png', { ...VOLL, show_battery: false }, { batt: 0, grid: -150 }, 'de', 375],
  ['variante-nur-netz.png', { type: VOLL.type, grid_power: 'sensor.grid_power', grid_import_energy: 'sensor.grid_import', grid_export_energy: 'sensor.grid_export', show_gas: false, show_water: false }, { grid: 640 }, 'de', 375],
  ['variante-netz-laedt-akku.png', VOLL, { pv: 0, batt: -500, grid: 700 }, 'de', 375],
];
(async () => {
  const b = await chromium.launch();
  for (const [datei, cfg, werte, lang, breite] of BILDER) {
    const p = await b.newPage({ viewport: { width: breite, height: 1600 }, deviceScaleFactor: 2, timezoneId: 'Europe/Berlin', locale: 'de-DE' });
    await p.setContent('<!doctype html><body style="margin:0;padding:8px;background:#0b1018"></body>');
    if (process.env.MDI_JS) await p.addScriptTag({ path: process.env.MDI_JS });
    await p.addScriptTag({ path: path.join(__dirname, 'mock-hass.js') }); await p.addScriptTag({ path: path.join(__dirname, '..', 'dist', 'energie-dashboard-card.js') });
    const h = await p.evaluate(async ([cfg, werte, lang, breite]) => {
      const k = document.createElement('energie-dashboard-card'); k.style.cssText = `display:block;width:${breite - 16}px`; document.body.appendChild(k);
      k.setConfig(cfg); k.hass = mockHass(werte, { language: lang }); await new Promise(r => setTimeout(r, 1200)); k.hass = k._hass; await new Promise(r => setTimeout(r, 6500));
      return Math.ceil(k.getBoundingClientRect().height) + 16;
    }, [cfg, werte, lang, breite]);
    await p.screenshot({ path: path.join(DOCS, datei), clip: { x: 0, y: 0, width: breite, height: h } }); await p.close(); console.log('docs/' + datei);
  }
  await b.close();
})();
