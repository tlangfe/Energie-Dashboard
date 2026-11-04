// Tests der Auswertungskarte mit simuliertem Home Assistant. Aufruf: node tests/auswertung.js [ausgabeordner]
// Erzeugt Sekundenwerte mit Lastspruengen (Akku regelt nach ca. 4 s nach) und Einspeise-Spitzen.
const { chromium } = require('playwright'); const path = require('path'), fs = require('fs');
const OUT = process.argv[2] || path.join(__dirname, 'out'); fs.mkdirSync(OUT, { recursive: true });
const BASIS = { type: 'custom:energie-dashboard-auswertung-card', grid_power: 'sensor.grid_power', grid_export_energy: 'sensor.grid_export', grid_import_energy: 'sensor.grid_import', battery_charge_power: 'sensor.battery_charge_power', battery_discharge_power: 'sensor.battery_discharge_power', battery_soc: 'sensor.battery_soc', battery_capacity: 2.56, battery_energy_in: 'sensor.battery_in', battery_energy_out: 'sensor.battery_out', show_solar: false };
const FAELLE = {
  schnell_ohne_zustimmung: [{ ...BASIS }, { takt: 1 }],
  schnell_mit_zustimmung: [{ ...BASIS, store_statistics: true, raw_days: 3 }, { takt: 1 }],
  langsamer_sensor: [{ ...BASIS }, { takt: 6 }],
  ohne_akku: [{ type: BASIS.type, grid_power: 'sensor.grid_power', grid_export_energy: 'sensor.grid_export', grid_import_energy: 'sensor.grid_import', show_battery: false, show_solar: false }, { takt: 1 }],
  englisch: [{ ...BASIS, language: 'en' }, { takt: 1 }],
};
(async () => {
  const b = await chromium.launch(); let fehler = 0; const pruefe = (n, ok, info) => { console.log((ok ? 'OK   ' : 'FEHL ') + n + (ok ? '' : ' ' + JSON.stringify(info))); if (!ok) fehler++; };
  for (const [name, [cfg, opt]] of Object.entries(FAELLE)) for (const breite of [375, 1000]) {
    const p = await b.newPage({ viewport: { width: breite, height: 2400 }, deviceScaleFactor: breite === 1000 ? 1 : 2, timezoneId: 'Europe/Berlin', locale: 'de-DE' });
    const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', m => { if (m.type() === 'error') errs.push(m.text()); });
    await p.setContent('<!doctype html><body style="margin:0;padding:8px;background:#0b1018"></body>');
    await p.addScriptTag({ path: path.join(__dirname, 'mock-hass.js') }); await p.addScriptTag({ path: path.join(__dirname, '..', 'dist', 'energie-dashboard-card.js') });
    const r = await p.evaluate(async ([cfg, opt, breite]) => {
      const h = mockHass({ grid: 12, batt: 230 }, { language: cfg.language === 'en' ? 'en' : 'de' }), wsAlt = h.callWS.bind(h), schreib = [];
      // Simulierte Anlage: Last mit Spruengen, Akku folgt nach 4 s, Akku-Sensor meldet nur alle 20 s
      const last = t => 220 + ((Math.floor(t / 600) % 3 === 1 && t % 600 < 240) ? 380 : 0) + 25 * Math.sin(t / 37);
      const akku = t => Math.min(Math.max(last(t - 4), 0), 800), rausch = t => ((Math.sin(t * 12.9898) * 43758.5453) % 1) * 18;
      h.callWS = async m => {
        if (m.type === 'recorder/import_statistics') { schreib.push(m.metadata.statistic_id); return null; }
        if (m.type === 'recorder/clear_statistics') return null;
        if (m.type === 'history/history_during_period') {
          const von = Math.floor(Date.parse(m.start_time) / 1000), bis = Math.floor(Math.min(Date.parse(m.end_time || new Date().toISOString()), Date.now()) / 1000), o = {};
          const dt = bis - von > 3 * 3600 ? Math.max(opt.takt, 2) : opt.takt;
          for (const id of m.entity_ids) {
            const a = o[id] = [];
            if (id === 'sensor.grid_power') for (let t = von; t < bis; t += dt) a.push({ s: (last(t) - akku(t) + rausch(t)).toFixed(0), lu: t });
            else if (id === 'sensor.battery_discharge_power') for (let t = von - (von % 20); t < bis; t += 20) a.push({ s: akku(t).toFixed(0), lu: Math.max(t, von) });
            else if (id === 'sensor.battery_charge_power') a.push({ s: '0', lu: von });
            else a.push({ s: '0', lu: von });
          }
          return o;
        }
        return wsAlt(m);
      };
      const k = document.createElement('energie-dashboard-auswertung-card'); k.style.cssText = `display:block;width:${breite - 16}px`; document.body.appendChild(k);
      k.setConfig(cfg); k.hass = h;
      await new Promise(z => setTimeout(z, 9000)); k.hass = h; await new Promise(z => setTimeout(z, 500));
      const R = k.shadowRoot, t = id => { const e = R.getElementById(id); return e ? e.textContent : null; };
      const tab = R.querySelector('#tb').closest('.tw'), tabelle = tab.querySelector('table');
      return { schreib: schreib.length, schreibIds: [...new Set(schreib)].length, rb: t('r_b'), rf: t('r_f'), rq: t('r_q'), re: t('r_e'), slow: R.getElementById('r_slow') ? !R.getElementById('r_slow').hidden : null, slowText: t('r_slow'), lsVersteckt: R.getElementById('ls_box') ? R.getElementById('ls_box').hidden : null, ls: R.querySelectorAll('#ls tr[data-z]').length, sp: R.querySelectorAll('#sp tr[data-z]').length, et: t('e_t'), ew: t('e_w'), at: t('a_t'), ats: t('a_ts'), tage: R.querySelectorAll('#tb tr[data-t]').length, regelTeil: !!R.getElementById('r_b'), tabScroll: tab.scrollWidth > tab.clientWidth, ersteSpalteSticky: getComputedStyle(tabelle.querySelector('td')).position, schrift: parseFloat(getComputedStyle(tabelle).fontSize), hoehe: Math.ceil(k.getBoundingClientRect().height) + 16, st: t('st_h'), seitenUeberlauf: document.documentElement.scrollWidth > window.innerWidth };
    }, [cfg, opt, breite]);
    await p.screenshot({ path: path.join(OUT, `auswertung_${name}_${breite}.png`), clip: { x: 0, y: 0, width: breite, height: Math.min(r.hoehe, 2400) } });
    console.log(`\n## ${name} ${breite}: ` + JSON.stringify(r));
    if (errs.length) { console.log(errs); fehler += errs.length; }
    if (breite === 375) {
      if (name === 'schnell_ohne_zustimmung') { pruefe('Ohne Zustimmung kein import_statistics', r.schreib === 0, r); pruefe('Reaktionszeit gemessen', r.rb && r.rb !== '–', r.rb); pruefe('Lastspruenge gelistet', r.ls > 0, r.ls); pruefe('Einspeise-Spitzen gelistet', r.sp > 0, r.sp); pruefe('Tagestabelle gefuellt', r.tage >= 5, r.tage); pruefe('Handy: Tabelle wischbar, erste Spalte fest, kein Seitenueberlauf', r.tabScroll && r.ersteSpalteSticky === 'sticky' && !r.seitenUeberlauf && r.schrift >= 12, r); }
      if (name === 'schnell_mit_zustimmung') pruefe('Mit Zustimmung wird gespeichert', r.schreib > 0, r.schreib);
      if (name === 'langsamer_sensor') { pruefe('Langsamer Sensor: Hinweis sichtbar', r.slow === true && /6/.test(r.slowText), r.slowText); pruefe('Langsamer Sensor: keine erfundenen Zeiten', r.rb === '–' && r.rf === '–' && r.lsVersteckt === true, r); pruefe('Langsamer Sensor: kein Schreiben ohne Zustimmung', r.schreib === 0, r.schreib); }
      if (name === 'ohne_akku') { pruefe('Ohne Akku: kein Regelteil', r.regelTeil === false && r.at === null, r); pruefe('Ohne Akku: Einspeisung da', r.et && r.et !== '–', r.et); }
    }
    await p.close();
  }
  await b.close(); console.log('\nFehler gesamt: ' + fehler); process.exit(fehler ? 1 : 0);
})();
