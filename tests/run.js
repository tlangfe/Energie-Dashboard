// Browser-Tests mit simuliertem Home Assistant. Aufruf: node tests/run.js [ausgabeordner]
// Prueft Rechenlogik, alle Varianten in Handy- und Desktop-Groesse und sammelt Konsolenfehler.
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
const OUT = process.argv[2] || path.join(__dirname, 'out'); fs.mkdirSync(OUT, { recursive: true });
const KARTE = path.join(__dirname, '..', 'dist', 'energie-dashboard-card.js');
const VOLL = { type: 'custom:energie-dashboard-card', grid_power: 'sensor.grid_power', grid_import_energy: 'sensor.grid_import', grid_export_energy: 'sensor.grid_export', solar_power: 'sensor.solar_power', solar_energy: 'sensor.solar_energy', solar_strings: [{ entity: 'sensor.pv1_power', name: 'PV1' }, { entity: 'sensor.pv2_power', name: 'PV2' }], battery_power: 'sensor.battery_power', battery_soc: 'sensor.battery_soc', battery_energy_in: 'sensor.battery_in', battery_energy_out: 'sensor.battery_out', battery_capacity: 2.56, gas_energy: 'sensor.gas_meter', gas_rate: 'sensor.gas_flow', water_energy: 'sensor.water_meter', water_rate: 'sensor.water_flow' };
const VARIANTEN = {
  voll: [VOLL, {}],
  nur_solar: [{ ...VOLL, show_battery: false }, { batt: 0, grid: -150 }],
  nur_akku: [{ ...VOLL, show_solar: false }, { pv: 0, batt: 300, grid: 50 }],
  nur_netz: [{ type: VOLL.type, grid_power: 'sensor.grid_power', grid_import_energy: 'sensor.grid_import', grid_export_energy: 'sensor.grid_export' }, { grid: 640 }],
  ohne_gas_wasser: [{ ...VOLL, show_gas: false, show_water: false }, {}],
  nur_gas: [{ ...VOLL, show_water: false }, {}],
  laden_aus_netz: [VOLL, { pv: 0, batt: -500, grid: 700 }],
  entladen_einspeisen: [VOLL, { pv: 0, batt: 800, grid: -300 }],
  getrennte_sensoren: [{ ...VOLL, battery_power: undefined, battery_charge_power: 'sensor.battery_charge_power', battery_discharge_power: 'sensor.battery_discharge_power', grid_power: undefined, grid_import_power: 'sensor.grid_power', grid_export_power: 'sensor.phone_battery' }, {}],
  fehlender_sensor: [{ ...VOLL, solar_power: 'sensor.gibt_es_nicht' }, {}],
  englisch: [{ ...VOLL, language: 'en' }, {}],
  medienbild_rund: [{ ...VOLL, image: 'media-source://media_source/local/haus.png', image_shape: 'circle' }, {}],
  bild_kaputt: [{ ...VOLL, image: '/local/gibt-es-nicht.png' }, {}],
  leer: [{ type: VOLL.type }, {}],
};
(async () => {
  const b = await chromium.launch(); let fehler = 0; const bericht = {};
  const neueSeite = async (breite) => {
    const p = await b.newPage({ viewport: { width: breite, height: 1700 }, deviceScaleFactor: 1, timezoneId: 'Europe/Berlin', locale: 'de-DE' });
    const errs = []; p.on('pageerror', e => errs.push('pageerror: ' + e.message)); p.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
    await p.setContent('<!doctype html><html><body style="margin:0;background:#111;padding:8px"></body></html>');
    await p.addScriptTag({ path: path.join(__dirname, 'mock-hass.js') }); await p.addScriptTag({ path: KARTE });
    return { p, errs };
  };
  // 1) Rechenlogik
  {
    const { p, errs } = await neueSeite(500);
    const r = await p.evaluate(() => {
      const f = (pv, g, b) => { const q = fluesse(pv, g, b); return [q.s2h, q.s2b, q.s2g, q.b2h, q.b2g, q.g2b, q.g2h, q.home].map(x => Math.round(x)); };
      const m = mitternacht().getTime(), H = 3600e3;
      const steigend = [{ start: m - H, state: 100, change: .1 }, { start: m, state: 100.5, change: .5 }, { start: m + H, state: 101, change: .5 }];
      const reset = [{ start: m - H, state: 7.3, change: .2 }, { start: m, state: 0.4, change: .4 }, { start: m + H, state: 0.9, change: .5 }];
      const resetFrueh = [{ start: m - H, state: 7.3, change: .2 }];
      return {
        laden_solar: f(420, 35, -240), // Solar 180 ins Haus, 240 in Akku, 35 Bezug
        einspeisen: f(1000, -300, -200), // 500 Haus, 200 Akku, 300 Netz
        laden_netz: f(0, 700, -500), // Netz 500 in Akku, 200 Haus
        entladen_haus: f(0, 0, 400), // Akku 400 ins Haus
        entladen_einsp: f(0, -300, 800), // Akku 500 Haus, 300 Netz
        solar_und_akku_ins_netz: f(500, -700, 300), // Solar 500 Netz, Akku 200 Netz, 100 Haus
        tag_steigend: +tagesWert(steigend, 101.3, m).toFixed(3), // 0.5+0.5 + 0.3 = 1.3
        tag_reset: +tagesWert(reset, 1.2, m).toFixed(3), // 0.4+0.5 + 0.3 = 1.2
        tag_reset_kurz_nach_mitternacht: +tagesWert(resetFrueh, 0.1, m).toFixed(3), // live < Stand vor Mitternacht => 0.1
        tag_nur_statistik: +tagesWert(steigend, null, m).toFixed(3), // 1.0
        summe_tag: summeChange(steigend, m, naechsterTag(new Date(m)).getTime()),
        dst: (() => { const d = new Date(2026, 2, 29); return (naechsterTag(d) - mitternacht(d)) / 3600e3; })(),
        verlust: verlust(0.9, 0.4, 1.1, 1.59),
        esc: esc('<b onclick="x">'),
        einheit_kw: wert({ states: { a: { state: '1.5', attributes: { unit_of_measurement: 'kW' } } } }, 'a', 'power'),
        einheit_wh: wert({ states: { a: { state: '1500', attributes: { unit_of_measurement: 'Wh' } } } }, 'a', 'energy'),
        einheit_l: wert({ states: { a: { state: '1500', attributes: { unit_of_measurement: 'L' } } } }, 'a', 'volume'),
      };
    });
    const soll = { laden_solar: [180, 240, 0, 0, 0, 0, 35, 215], einspeisen: [500, 200, 300, 0, 0, 0, 0, 500], laden_netz: [0, 0, 0, 0, 0, 500, 200, 200], entladen_haus: [0, 0, 0, 400, 0, 0, 0, 400], entladen_einsp: [0, 0, 0, 500, 300, 0, 0, 500], solar_und_akku_ins_netz: [0, 0, 500, 100, 200, 0, 0, 100], tag_steigend: 1.3, tag_reset: 1.2, tag_reset_kurz_nach_mitternacht: 0.1, tag_nur_statistik: 1, summe_tag: 1, dst: 23, verlust: 0.010000000000000009, esc: '&lt;b onclick=&quot;x&quot;&gt;', einheit_kw: 1500, einheit_wh: 1.5, einheit_l: 1.5 };
    for (const [k, v] of Object.entries(soll)) { const ok = JSON.stringify(r[k]) === JSON.stringify(v) || (typeof v === 'number' && Math.abs(r[k] - v) < 1e-6); if (!ok) fehler++; console.log((ok ? 'OK   ' : 'FEHL ') + k + ' = ' + JSON.stringify(r[k]) + (ok ? '' : ' soll ' + JSON.stringify(v))); }
    if (errs.length) { fehler += errs.length; console.log(errs); } await p.close();
  }
  // 2) Varianten in Handy- und Desktopgroesse
  for (const [name, [cfg, werte]] of Object.entries(VARIANTEN)) for (const breite of [375, 900]) {
    const { p, errs } = await neueSeite(breite);
    const info = await p.evaluate(async ([cfg, werte, breite]) => {
      const k = document.createElement('energie-dashboard-card'); k.style.cssText = `display:block;width:${breite === 375 ? 359 : 420}px`;
      document.body.appendChild(k); k.setConfig(JSON.parse(JSON.stringify(cfg))); k.hass = mockHass(werte, { language: cfg.language === 'en' ? 'en' : 'de' });
      await new Promise(r => setTimeout(r, 1500)); k.hass = k._hass; await new Promise(r => setTimeout(r, 4600));
      const R = k.shadowRoot, t = id => { const e = R.getElementById(id); return e ? e.textContent : null; };
      const an = Object.entries(k._fb || {}).filter(([, b]) => b.an).map(([n, b]) => n + (b.rev ? '<' : '') + (b.t ? ':' + b.t.textContent : '')).join(' ');
      const kn = [...R.querySelectorAll('.kn')].map(e => e.id.slice(2)).join(',');
      const kacheln = [...R.querySelectorAll('.gr>.t')].map(e => (e.className.includes('voll') || e.className.includes('agr') || e.className.includes('bil') ? 'V:' : 'H:') + (e.querySelector('.n') || {}).textContent).join(' | ');
      const g = R.querySelector('.gr'), luecke = g ? (() => { const r = [...g.children].map(c => c.getBoundingClientRect()); const W = g.getBoundingClientRect(); return r.some(x => x.width < W.width * 0.4); })() : null;
      const img = R.getElementById('bild');
      return { kn, an, kacheln, luecke, solar: [t('v_solar'), t('v2_solar'), t('u_solar')], akku: [t('v_akku'), t('u_akku'), t('t_mx')], haus: [t('v_haus'), t('v2_haus')], netz: [t('v_netz'), t('v2_netz')], gas: t('v_gas'), wasser: t('v_wasser'), sd: t('t_sd'), ag: [t('ag_t'), t('ag_i'), t('ag_v')], bil: t('t_bin'), hinw: t('hinw'), img: img ? [img.complete, img.naturalWidth, img.className, (img.getAttribute('src') || '').slice(0, 30)] : null, willk: !!R.querySelector('.willk'), hoehe: Math.round(k.getBoundingClientRect().height) };
    }, [cfg, werte, breite]);
    await p.waitForTimeout(300);
    await p.screenshot({ path: path.join(OUT, `${name}_${breite}.png`), clip: { x: 0, y: 0, width: breite === 375 ? 375 : 440, height: Math.min(info.hoehe + 16, 1700) } });
    bericht[name + '_' + breite] = info;
    if (errs.length) { fehler += errs.length; console.log('FEHLER ' + name + ' ' + breite, errs); }
    await p.close();
  }
  for (const [k, v] of Object.entries(bericht)) if (k.endsWith('_375')) console.log('\n## ' + k.replace('_375', '') + '\n' + JSON.stringify(v));
  // Breite 900 nur auf Konsolenfehler und gleiche Texte pruefen
  for (const k of Object.keys(bericht)) if (k.endsWith('_900')) { const a = bericht[k], c = bericht[k.replace('_900', '_375')]; if (a.kn !== c.kn || a.kacheln !== c.kacheln) { fehler++; console.log('Abweichung Desktop/Handy ' + k); } }
  await b.close();
  console.log('\nFehler gesamt: ' + fehler); process.exit(fehler ? 1 : 0);
})();
