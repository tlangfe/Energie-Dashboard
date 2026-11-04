/* Energie Dashboard Card: https://github.com/tlangfe/energie-dashboard
 * Haus als schwebende Insel mit Strom, Solar, Akku, Gas und Wasser: live und als Tageswerte.
 * Eine Datei ohne Build-Schritt und ohne Abhaengigkeiten. Lizenz: MIT. */
const HOUSE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="560" height="560" viewBox="0 0 560 560"><defs><linearGradient id="e" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7a5636"/><stop offset=".55" stop-color="#4a3322"/><stop offset="1" stop-color="#21170f"/></linearGradient><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#4d7a4a"/><stop offset="1" stop-color="#2c5233"/></linearGradient><linearGradient id="gl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#9fc4e0"/><stop offset="1" stop-color="#2f4a66"/></linearGradient><linearGradient id="fl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6f7884"/><stop offset="1" stop-color="#525b67"/></linearGradient><pattern id="tA" width="9" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(26.57)"><path d="M0 6.5H9M4.5 0V6.5" stroke="#5c1e13" stroke-opacity=".55" stroke-width=".9"/></pattern><pattern id="tB" width="9" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(-26.57)"><path d="M0 6.5H9M4.5 0V6.5" stroke="#4d170e" stroke-opacity=".55" stroke-width=".9"/></pattern><pattern id="bA" width="10" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(26.57)"><path d="M0 5.5H10M0 2.7H10M3 0V2.7M8 2.7V5.5" stroke="#3b1a14" stroke-opacity=".5" stroke-width=".6"/></pattern><pattern id="bB" width="10" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(-26.57)"><path d="M0 5.5H10M0 2.7H10M3 0V2.7M8 2.7V5.5" stroke="#2a120e" stroke-opacity=".55" stroke-width=".6"/></pattern><pattern id="pv" width="9" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(-26.57)"><path d="M0 0H9M0 0V9" stroke="#8fb3e0" stroke-opacity=".55" stroke-width=".6"/></pattern><pattern id="pa" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(26.57)"><path d="M0 0H12M0 0V12" stroke="#5b6068" stroke-opacity=".5" stroke-width=".7"/></pattern><filter id="s" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="7"/></filter></defs> <path d="M26 335 C70 470 190 560 285 556 C380 552 490 465 534 335Z" fill="url(#e)"/><path d="M90 430 l24 20 -8 14Zm120 70 l26 14 -14 16Zm180 -14 l22 -14 8 20Zm76 -66 l14 -12 4 18Z" fill="#2a1d14" opacity=".6"/> <ellipse cx="280" cy="340" rx="254" ry="152" fill="#2a4a2e"/><ellipse cx="280" cy="333" rx="252" ry="150" fill="url(#g)"/> <ellipse cx="290" cy="372" rx="190" ry="78" fill="#10241a" opacity=".45" filter="url(#s)"/> <path d="M322 396 372 421 340 452 282 428Z" fill="#a8acb2"/><path d="M322 396 372 421 340 452 282 428Z" fill="url(#pa)"/> <path d="M92 388 130 350 190 380 152 418Z" fill="#a39d92"/><path d="M92 388 130 350 190 380 152 418Z" fill="url(#pa)"/> <path d="M450 325 350 275V205L450 255Z" fill="#8c4a3a"/><path d="M450 325 350 275V205L450 255Z" fill="url(#bA)"/><path d="M450 325 520 290V220L450 255Z" fill="#6f3a2e"/><path d="M450 325 520 290V220L450 255Z" fill="url(#bB)"/><path d="M450 262 343 208 420 164 528 218Z" fill="url(#fl)"/><path d="M450 262 343 208 420 164 528 218Z" fill="none" stroke="#c7ccd3" stroke-width="2"/> <path d="M476 300 504 286V246L476 260Z" fill="url(#gl)" stroke="#e9edf1" stroke-width="2"/> <path d="M382 206 414 190 458 212 426 228Z" fill="#14305c" stroke="#c7d6ea" stroke-width="1.4"/><path d="M382 206 414 190 458 212 426 228Z" fill="url(#pv)"/><path d="M414 186 446 170 490 192 458 208Z" fill="#14305c" stroke="#c7d6ea" stroke-width="1.4"/><path d="M414 186 446 170 490 192 458 208Z" fill="url(#pv)"/> <path d="M470 213 486 205 500 212 484 220Z" fill="#eef2f6"/><path d="M470 213 484 220V236L470 229Z" fill="#aeb9c5"/><path d="M484 220 500 212V228L484 236Z" fill="#cdd6df"/><circle cx="491" cy="221" r="2" fill="#3fe09f"/> <path d="M280 425 130 350V262L280 337Z" fill="#9a5140"/><path d="M280 425 130 350V262L280 337Z" fill="url(#bA)"/><path d="M280 425 410 360V272L280 337Z" fill="#7b4033"/><path d="M280 425 410 360V272L280 337Z" fill="url(#bB)"/> <path d="M156 352 190 369V323L156 306Z" fill="url(#gl)" stroke="#f0f2f5" stroke-width="2.4"/><path d="M173 360V315M156 329 190 346" stroke="#f0f2f5" stroke-width="1.4"/><path d="M222 386 256 403V357L222 340Z" fill="url(#gl)" stroke="#f0f2f5" stroke-width="2.4"/><path d="M239 394V349M222 363 256 380" stroke="#f0f2f5" stroke-width="1.4"/> <path d="M300 415 332 399V332L300 348Z" fill="#e8ebee" stroke="#b9bfc6" stroke-width="1.6"/><path d="M305 372 327 361V342L305 353Z" fill="url(#gl)"/><circle cx="326" cy="376" r="1.8" fill="#6b7178"/> <path d="M362 378 392 363V320L362 335Z" fill="url(#gl)" stroke="#f0f2f5" stroke-width="2.4"/><path d="M377 370V327" stroke="#f0f2f5" stroke-width="1.4"/> <path d="M280 351 106 264 248 158 296 182 434 272Z" fill="#6a2518"/> <path d="M260 183 106 264 248 158Z" fill="#a83f2a"/><path d="M260 183 106 264 248 158Z" fill="url(#tA)"/><path d="M260 183 434 272 296 182 248 158Z" fill="#8c3322"/><path d="M260 183 434 272 296 182 248 158Z" fill="url(#tB)"/> <path d="M280 351 106 264 248 158 296 182Z" fill="#c9513a"/><path d="M280 351 106 264 248 158 296 182Z" fill="url(#tA)"/><path d="M280 351 434 272 296 182Z" fill="#a33e2b"/><path d="M280 351 434 272 296 182Z" fill="url(#tB)"/> <path d="M248 158 296 182M296 182 280 351M296 182 434 272M248 158 106 264" stroke="#e8a48f" stroke-opacity=".55" stroke-width="2.2" fill="none"/><path d="M280 351 106 264M280 351 434 272" stroke="#f0ebe3" stroke-width="2.6" fill="none"/> <path d="M190 268 222 284 240 262 208 246Z" fill="url(#gl)" stroke="#2b2f36" stroke-width="2"/><path d="M360 190 382 201V176L360 165Z" fill="#7a4033"/><path d="M360 165 382 176 390 172 368 161Z" fill="#b6bcc4"/> <ellipse cx="70" cy="356" rx="30" ry="12" fill="#10241a" opacity=".5" filter="url(#s)"/><rect x="65" y="316" width="9" height="40" fill="#4f3625"/><circle cx="70" cy="298" r="33" fill="#28522f"/><circle cx="58" cy="288" r="22" fill="#376a3e"/><circle cx="82" cy="282" r="19" fill="#44804b"/> <ellipse cx="470" cy="398" rx="26" ry="10" fill="#10241a" opacity=".5"/><circle cx="470" cy="382" r="20" fill="#2c5a33"/><circle cx="462" cy="374" r="13" fill="#44804b"/> <path d="M386 420 q14 -18 30 -8 q16 -10 26 6 q10 14 -10 18 q-30 8 -46 -16Z" fill="#2c5a33"/><path d="M120 430 q10 -16 28 -8 q18 -6 24 10 q4 14 -18 14 q-30 2 -34 -16Z" fill="#35683c"/><circle cx="412" cy="414" r="3" fill="#e8a33f"/><circle cx="426" cy="420" r="3" fill="#e8c23f"/><circle cx="148" cy="428" r="3" fill="#e8739a"/></svg>`;
const DEFAULT_IMAGE = 'data:image/svg+xml,' + encodeURIComponent(HOUSE_SVG);
// Ankerpunkte des Beispielhauses in Prozent des Bilds (x von der Breite, y von der Hoehe)
const ANKER_STANDARD = { solar: [77.9, 34.6], battery: [86.4, 39.6], home: [51.8, 52] };
const DEFAULTS = {
  title: '', max_width: 420, language: 'auto', dashboard_link: '/energy', dashboard_link_text: '',
  show_solar: true, show_battery: true, show_gas: true, show_water: true,
  grid_invert: false, battery_invert: false,
  image: '', image_shape: 'free', image_size: 56, image_x: 50, image_y: 15,
  anchor_solar_x: ANKER_STANDARD.solar[0], anchor_solar_y: ANKER_STANDARD.solar[1],
  anchor_battery_x: ANKER_STANDARD.battery[0], anchor_battery_y: ANKER_STANDARD.battery[1],
  anchor_home_x: ANKER_STANDARD.home[0], anchor_home_y: ANKER_STANDARD.home[1],
  solar_max: 1000, grid_max: 2000,
};
// Alle Sensor-Optionen mit Art (fuer Einheiten-Pruefung und Umrechnung)
const SENSOREN = {
  grid_power: 'power', grid_import_power: 'power', grid_export_power: 'power', grid_import_energy: 'energy', grid_export_energy: 'energy', home_power: 'power',
  solar_power: 'power', solar_energy: 'energy',
  battery_power: 'power', battery_charge_power: 'power', battery_discharge_power: 'power', battery_soc: 'soc', battery_content: 'energy', battery_energy_in: 'energy', battery_energy_out: 'energy',
  gas_energy: 'gas', gas_rate: 'rate', water_energy: 'volume', water_rate: 'rate',
};
const FAKTOR = {
  power: { W: 1, kW: 1e3, MW: 1e6, mW: 1e-3 },
  energy: { Wh: 1e-3, kWh: 1, MWh: 1e3, GWh: 1e6 },
  volume: { 'm³': 1, m3: 1, L: 1e-3, l: 1e-3, 'ft³': 0.0283168, ft3: 0.0283168, CCF: 2.83168, gal: 0.00378541 },
};
const VERSION = '1.0.0-beta.1';
const TXT = {
  de: {
    title: 'Energie', solar: 'Solar', akku: 'Akku', bezug: 'Bezug', eingespeist: 'eingespeist', gas: 'Gas', wasser: 'Wasser', heute: 'heute', Heute: 'Heute',
    laedt: 'lädt', gibt: 'gibt', zuHaus: '→ Haus', zuAkku: '→ Akku', zuHausAkku: '→ Haus + Akku', zuNetz: '→ Netz',
    dash: 'Energie-Dashboard', verlauf: 'Stromverlauf', tagWaehlen: 'Tag wählen', zurueck: 'Einen Tag zurück', vor: 'Einen Tag vor', zuHeute: 'Zurück zu heute',
    pvAkt: 'PV Leistung aktuell', sd: 'Solar direkt ins Haus', inhalt: 'Inhalt', rein: 'rein', raus: 'raus', verlust: 'Verlust', vonRein: 'von rein',
    gesamt: 'Solar + Akku gesamt', insHaus: 'ins Haus', zaehler: 'Stromfluss am Zähler', ein: 'ein', bilanz: 'Energiebilanz', defizit: 'Defizit', ueber: 'Überschuss', ausgl: 'ausgeglichen',
    pv: 'PV', haus: 'Haus', einsp: 'Einspeisung', netzbezug: 'Netzbezug', hausverbrauch: 'Hausverbrauch', akkuRaus: 'Akku raus', akkuRein: 'Akku rein',
    f15: '15 Min', f1: '1 Std', f6: '6 Std', keineDaten: 'Der Akku meldet gerade keine Daten.', fehlt: 'Sensor nicht gefunden:', bildFehler: 'Das Hausbild konnte nicht geladen werden, die Standardzeichnung wird gezeigt.',
    willkommen: 'Energie Dashboard Card', willkommenText: 'Die Karte ist noch nicht eingerichtet. Karte bearbeiten und „Sensoren automatisch erkennen“ wählen oder die Sensoren im Editor selbst auswählen.',
    verlaufAria: 'Gestapelter Stromverlauf', bildAlt: 'Haus mit Solar und Akku', akkuAria: 'Akku rein und raus', lade: 'lädt …',
  },
  en: {
    title: 'Energy', solar: 'Solar', akku: 'Battery', bezug: 'Import', eingespeist: 'exported', gas: 'Gas', wasser: 'Water', heute: 'today', Heute: 'Today',
    laedt: 'charging', gibt: 'discharging', zuHaus: '→ Home', zuAkku: '→ Battery', zuHausAkku: '→ Home + Battery', zuNetz: '→ Grid',
    dash: 'Energy dashboard', verlauf: 'Power history', tagWaehlen: 'Choose day', zurueck: 'One day back', vor: 'One day forward', zuHeute: 'Back to today',
    pvAkt: 'Solar power now', sd: 'Solar directly to home', inhalt: 'Stored', rein: 'in', raus: 'out', verlust: 'Loss', vonRein: 'of in',
    gesamt: 'Solar + battery total', insHaus: 'to home', zaehler: 'Grid meter', ein: 'export', bilanz: 'Energy balance', defizit: 'deficit', ueber: 'surplus', ausgl: 'balanced',
    pv: 'Solar', haus: 'Home', einsp: 'Export', netzbezug: 'Grid import', hausverbrauch: 'Home consumption', akkuRaus: 'Battery out', akkuRein: 'Battery in',
    f15: '15 min', f1: '1 h', f6: '6 h', keineDaten: 'The battery is not reporting data right now.', fehlt: 'Sensor not found:', bildFehler: 'The house image could not be loaded, showing the default drawing.',
    willkommen: 'Energie Dashboard Card', willkommenText: 'This card is not set up yet. Edit the card and choose “Detect sensors automatically”, or pick the sensors in the editor yourself.',
    verlaufAria: 'Stacked power history', bildAlt: 'House with solar and battery', akkuAria: 'Battery in and out', lade: 'loading …',
  },
};
const FARBE = { pv: '#c98500', akku: '#128f65', netz: '#3a86e6', einsp: '#d55181' };
const esc = s => String(s ?? '').replace(/[&<>"']/g, z => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[z]));
const clamp = (x, a, b) => Math.min(b, Math.max(a, x));
const istZahl = x => x !== null && x !== undefined && Number.isFinite(x);
const ts = x => typeof x === 'number' ? (x < 1e11 ? x * 1000 : x) : Date.parse(x);
const mitternacht = (d = new Date()) => { const m = new Date(d); m.setHours(0, 0, 0, 0); return m; };
const naechsterTag = d => { const m = new Date(d); m.setDate(m.getDate() + 1); m.setHours(0, 0, 0, 0); return m; };
function sprache(c, hass) { const l = c && c.language && c.language !== 'auto' ? c.language : (hass && (hass.locale && hass.locale.language || hass.language)) || navigator.language || 'de'; return String(l).toLowerCase().startsWith('de') ? 'de' : 'en'; }
function format(lang) {
  const loc = lang === 'de' ? 'de-DE' : 'en-GB';
  const zahl = (x, d) => x.toLocaleString(loc, { minimumFractionDigits: d, maximumFractionDigits: d });
  return {
    loc, zahl,
    watt: x => !istZahl(x) ? '–' : Math.abs(x) >= 1000 ? zahl(x / 1000, 2) + ' kW' : zahl(x, 0) + ' W',
    kwh: x => !istZahl(x) ? '–' : zahl(x, 2) + ' kWh',
    whk: x => !istZahl(x) ? '–' : x < 1 ? zahl(x * 1000, 0) + ' Wh' : zahl(x, 2) + ' kWh',
    hhmm: t => new Date(t).toLocaleTimeString(loc, { hour: '2-digit', minute: '2-digit' }),
    datum: d => d.toLocaleDateString(loc, { day: '2-digit', month: '2-digit' }),
  };
}
// Zahl eines Sensors in Grundeinheit: Leistung W, Energie kWh, Volumen m³; Gas je nach Einheit kWh oder m³
function wert(hass, id, art) {
  if (!id || !hass) return null; const s = hass.states[id]; if (!s) return null;
  const x = parseFloat(s.state); if (!Number.isFinite(x)) return null;
  const u = s.attributes && s.attributes.unit_of_measurement;
  if (art === 'gas') { if (u in FAKTOR.energy) return x * FAKTOR.energy[u]; if (u in FAKTOR.volume) return x * FAKTOR.volume[u]; return x; }
  const t = FAKTOR[art]; if (t && u in t) return x * t[u];
  return x;
}
const gasIstEnergie = (hass, id) => { const s = hass && id && hass.states[id]; const u = s && s.attributes.unit_of_measurement; return !!u && u in FAKTOR.energy; };
// Welche Teile sind sichtbar? Schalter an und Hauptsensor gesetzt
function teileAn(c) {
  return {
    solar: c.show_solar !== false && !!c.solar_power,
    akku: c.show_battery !== false && !!(c.battery_soc || c.battery_power || c.battery_charge_power || c.battery_discharge_power),
    gas: c.show_gas !== false && !!c.gas_energy,
    wasser: c.show_water !== false && !!c.water_energy,
  };
}
const eingerichtet = c => !!(c.grid_power || c.grid_import_power || c.grid_export_power);
// Netz (+ Bezug, - Einspeisung) und Akku (+ Entladen, - Laden) aus den konfigurierten Sensoren, in W
function netzW(c, g) {
  if (c.grid_power) { const v = g(c.grid_power); return v === null ? null : c.grid_invert ? -v : v; }
  const i = g(c.grid_import_power), e = g(c.grid_export_power); if (i === null && e === null) return null; return (i || 0) - (e || 0);
}
function akkuW(c, g) {
  if (c.battery_power) { const v = g(c.battery_power); return v === null ? null : c.battery_invert ? -v : v; }
  const l = g(c.battery_charge_power), e = g(c.battery_discharge_power); if (l === null && e === null) return null; return (e || 0) - (l || 0);
}
// Live-Fluesse nach AUFTRAG Abschnitt 9
function fluesse(pv, grid, batt) {
  const p = Math.max(pv || 0, 0), imp = Math.max(grid || 0, 0), exp = Math.max(-(grid || 0), 0);
  const chg = Math.max(-(batt || 0), 0), dis = Math.max(batt || 0, 0);
  const s2b = Math.min(p, chg), s2g = Math.min(p - s2b, exp), s2h = p - s2b - s2g;
  const b2g = Math.max(Math.min(dis, exp - s2g), 0), b2h = dis - b2g;
  const g2b = Math.max(Math.min(chg - s2b, imp), 0), g2h = imp - g2b;
  return { p, imp, exp, chg, dis, s2b, s2g, s2h, b2g, b2h, g2b, g2h, home: s2h + b2h + g2h };
}
// Tageswert aus Stundenstatistik: Summe "change" seit Mitternacht plus Live-Anteil seit dem letzten Stundenstand
function tagesWert(zeilen, live, m) {
  if (!zeilen || !zeilen.length) return null;
  let sum = 0, heute = 0; for (const z of zeilen) if (ts(z.start) >= m && istZahl(z.change)) { sum += z.change; heute++; }
  const letzte = [...zeilen].reverse().find(z => istZahl(z.state));
  if (!istZahl(live) || !letzte) return Math.max(sum, 0);
  return Math.max(sum + (live >= letzte.state ? live - letzte.state : live), 0);
}
const summeChange = (zeilen, von, bis) => { if (!zeilen || !zeilen.length) return null; let s = 0, n = 0; for (const z of zeilen) { const t = ts(z.start); if (t >= von && t < bis && istZahl(z.change)) { s += z.change; n++; } } return n ? Math.max(s, 0) : null; };
const verlust = (rein, raus, k0, k1) => [rein, raus, k0, k1].every(istZahl) ? Math.max(rein - raus - (k1 - k0), 0) : null;

// Kreise: feste Positionen in viewBox 0 0 1000 H
const K = { solar: [469, 107], akku: [880, 120], haus: [118, 430], netz: [882, 430], gas: [130, 775], wasser: [870, 775] };
const KREIS_R = 100; // Linien beginnen am Kreisrand
const FLF = { sh: '#c9930a', sa: '#ffc14d', solar: '#ffc14d', dach: '#ffc14d', akku: '#ff9d5c', ac: '#ff9d5c', haus: '#a98cff', netz: '#5db2ff', gas: '#ff7a45', wasser: '#38c6ff' };
const TEMPO = 45; // Gas/Wasser: Einheiten pro Sekunde, bewusst langsam
const tempoW = w => clamp(4 + 2.2 * Math.sqrt(Math.max(w, 0)), 6, 45); // Strom: 7 W = 10, 110 W = 27, ab 340 W = 45
const RUNDE_MIN = 4; // Sekunden je Runde mindestens, sonst zucken kurze Linien
const NUR_BLASE = { sa: 1 }; // Weg liegt auf vorhandenen Punktlinien
const WATT_AN = { sh: 1, sa: 1, akku: 1 }; // Linien mit Wattzahl ueber der Blase
// Kubische Kurve von a nach b, leicht nach aussen gebogen (weg vom Mittelpunkt mz)
function kurve(a, b, biege, kA, kB, mz) {
  let [x1, y1] = a, [x2, y2] = b; const L = Math.hypot(x2 - x1, y2 - y1) || 1, ux = (x2 - x1) / L, uy = (y2 - y1) / L;
  x1 += ux * kA; y1 += uy * kA; x2 -= ux * kB; y2 -= uy * kB;
  const L2 = Math.hypot(x2 - x1, y2 - y1); let nx = -uy, ny = ux;
  if (mz && ((x1 + x2) / 2 - mz[0]) * nx + ((y1 + y2) / 2 - mz[1]) * ny < 0) { nx = -nx; ny = -ny; }
  const o = biege * L2;
  return [[x1, y1], [x1 + (x2 - x1) / 3 + nx * o, y1 + (y2 - y1) / 3 + ny * o], [x1 + 2 * (x2 - x1) / 3 + nx * o, y1 + 2 * (y2 - y1) / 3 + ny * o], [x2, y2]];
}
const rueck = k => [k[3], k[2], k[1], k[0]];
const f1 = v => v.toFixed(1);
const dPfad = (...ks) => ks.map((k, i) => (i ? '' : `M${f1(k[0][0])} ${f1(k[0][1])}`) + ` C${f1(k[1][0])} ${f1(k[1][1])} ${f1(k[2][0])} ${f1(k[2][1])} ${f1(k[3][0])} ${f1(k[3][1])}`).join('');
// Bildlage und Ankerpunkte in viewBox-Koordinaten
function bildBox(c, aspekt) {
  const w = clamp(+c.image_size || 56, 10, 120) * 10, kreis = c.image_shape === 'circle', h = w * (kreis ? 1 : (aspekt || 1));
  const x = clamp(+c.image_x, -50, 150) * 10 - w / 2, y = (+c.image_y || 0) * 10;
  return { x, y, w, h };
}
function anker(c, box) {
  const p = k => [box.x + clamp(+c[`anchor_${k}_x`], 0, 100) / 100 * box.w, box.y + clamp(+c[`anchor_${k}_y`], 0, 100) / 100 * box.h];
  return { solar: p('solar'), akku: p('battery'), haus: p('home') };
}
function flussPfade(c, an, box) {
  const A = anker(c, box), mz = [box.x + box.w / 2, box.y + box.h / 2], P = {};
  const seg = { solar: kurve(K.solar, A.solar, .12, KREIS_R, 0, mz), sb: kurve(A.solar, A.akku, .1, 0, 0, mz), akku: kurve(K.akku, A.akku, .12, KREIS_R, 0, mz), ac: kurve(A.akku, A.haus, .1, 0, 0, mz), dach: kurve(A.solar, A.haus, .1, 0, 0, mz) };
  if (an.solar) { P.sh = dPfad(kurve(K.solar, K.haus, .22, KREIS_R, KREIS_R, mz)); P.solar = dPfad(seg.solar); P.dach = dPfad(seg.dach); }
  if (an.solar && an.akku) { P.sa = dPfad(seg.solar, seg.sb, rueck(seg.akku)); P.sb = dPfad(seg.sb); }
  if (an.akku) { P.akku = dPfad(seg.akku); P.ac = dPfad(seg.ac); }
  P.haus = dPfad(rueck(kurve(K.haus, A.haus, .1, KREIS_R, 0, mz)));
  P.netz = dPfad(kurve(K.netz, A.haus, .1, KREIS_R, 0, mz));
  if (an.gas) P.gas = dPfad(kurve(K.gas, A.haus, .1, KREIS_R, 0, mz));
  if (an.wasser) P.wasser = dPfad(kurve(K.wasser, A.haus, .1, KREIS_R, 0, mz));
  return P;
}
const NUR_BASIS = { sb: 1 }; // nur gepunktete Linie, keine Blase
const CSS = `
:host{display:block}
.w{--ink:#eef3f8;--mut:#a7b6c5;--wei:rgba(255,255,255,.055);--lin:rgba(255,255,255,.1);
 background:radial-gradient(110% 80% at 50% 36%,#1c2a3c 0,#141e2c 60%,#0f1723 100%);color:var(--ink);border-radius:18px;padding:clamp(8px,2.4cqw,12px);margin:0 auto;box-sizing:border-box;width:100%;border:1px solid rgba(255,255,255,.08);
 font-family:var(--ha-font-family-body,Roboto,system-ui,sans-serif);container-type:inline-size;font-variant-numeric:tabular-nums;overflow:hidden;-webkit-text-size-adjust:100%;text-size-adjust:100%}
.bue{position:relative;width:100%;aspect-ratio:1000/880}
.ko{position:absolute;left:1%;top:0;z-index:2}
h1{margin:0;font-size:clamp(14px,4cqw,18px);font-weight:700;line-height:1.15}
.stand{font-size:clamp(10.5px,2.6cqw,12px);color:var(--mut)}
.sw{position:absolute;inset:0;animation:schweb 7s ease-in-out infinite}
@keyframes schweb{50%{transform:translateY(-.4%)}}
.sw img{position:absolute;left:22%;top:17.05%;width:56%;height:auto;display:block;filter:drop-shadow(0 10px 16px rgba(0,0,0,.55))}
.sw svg{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.ba{fill:none;stroke-width:2.6;stroke:rgba(255,255,255,.3);stroke-dasharray:3 9;stroke-linecap:round}
.gl{fill:none;stroke-linecap:round;stroke-width:12;stroke-opacity:.2;opacity:0;transition:opacity .4s}
.bb{opacity:0;transition:opacity .4s}
.bw{fill:#fff;font-size:30px;font-weight:700;text-anchor:middle;paint-order:stroke;stroke:rgba(8,14,24,.85);stroke-width:6px;stroke-linejoin:round}
.an{opacity:1}
.kn{position:absolute;width:21%;aspect-ratio:1;transform:translate(-50%,-50%);border-radius:50%;background:rgba(13,21,34,.8);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;line-height:1.08;z-index:1}
.kn svg.ri{position:absolute;inset:0;width:100%;height:100%;overflow:visible}
.ri circle{fill:none}
.ri .d{stroke:rgba(255,255,255,.42);stroke-width:1.7;stroke-dasharray:5 5;transform-origin:50% 50%;transform-box:fill-box}
.kn.ak .ri .d{stroke:var(--c);stroke-width:2.2;animation:dreh 40s linear infinite}
.ri .mxs{fill:none;stroke:rgba(124,194,255,.18);stroke-width:2.6}
.ri .mxr{fill:none;stroke:#7cc2ff;stroke-width:2.6;stroke-linecap:round;transform:rotate(-90deg);transform-origin:50% 50%;transition:stroke-dasharray .8s}
.mxt{position:absolute;right:86%;top:0;font-size:clamp(9.5px,2.4cqw,11px);font-weight:700;color:#7cc2ff;white-space:nowrap;pointer-events:none;text-shadow:0 0 3px #0d1522,0 0 3px #0d1522}
.ri .arc{stroke:var(--c);stroke-width:5;stroke-linecap:round;transform:rotate(-90deg);transform-origin:50% 50%;transition:stroke-dasharray .8s}
@keyframes dreh{to{transform:rotate(360deg)}}
.kn ha-icon{--mdc-icon-size:20px;width:20px;height:20px;flex:none;display:flex;align-items:center;justify-content:center;color:var(--c);margin-bottom:2px}
.kn.ak ha-icon{animation:pul 6s ease-in-out infinite}
@keyframes pul{50%{transform:scale(1.07)}}
.kn b{font-size:clamp(12.5px,3.9cqw,17px);font-weight:800;white-space:nowrap;margin-top:1px}
.kn.zw ha-icon{--mdc-icon-size:16px;width:16px;height:16px;margin-bottom:4px}
.kn.zw{padding-bottom:3px;box-sizing:border-box}
.kn.zw b{margin-top:0}
.ges,.t small.ges,.bl em.ges{color:#7cc2ff}
[data-e]{cursor:pointer}
[data-e]:focus-visible{outline:2px solid #7cc2ff;outline-offset:1px;border-radius:5px}
b[data-e]:hover,small[data-e]:hover,.t em[data-e]:hover,.bl span[data-e]:hover{text-decoration:underline}
.kn svg.ri{pointer-events:none}
.kn.zw small{margin-top:1px;font-size:clamp(8px,2.2cqw,9.5px)}
.kn small{font-size:clamp(8.5px,2.35cqw,10.5px);color:var(--mut);white-space:nowrap}
.split{display:flex;margin-top:2px;border-radius:9px;background:rgba(255,255,255,.07);overflow:hidden}
.split>a,.split>button{all:unset;box-sizing:border-box;flex:1 1 0;min-width:0;min-height:34px;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:4px;padding:5px 4px;color:#7cc2ff;font-size:clamp(12px,3.1cqw,13.5px);font-weight:600;white-space:nowrap}
.split>button{border-left:1px solid rgba(255,255,255,.14)}
.split ha-icon{--mdc-icon-size:16px;width:16px;height:16px;flex:none;display:flex}
.split>a:hover,.split>button:hover{background:rgba(255,255,255,.06)}
.split>a:focus-visible,.split>button:focus-visible{outline:2px solid #5db2ff;outline-offset:-2px;border-radius:9px}
#verk ha-icon:last-child{transition:transform .2s}
#verk[aria-expanded="true"] ha-icon:last-child{transform:rotate(180deg)}
.nav{display:flex;align-items:center;justify-content:center;gap:6px;margin-top:2px}
.nav button{all:unset;cursor:pointer;min-width:36px;height:32px;line-height:32px;text-align:center;border-radius:9px;background:rgba(255,255,255,.07);color:var(--ink);font-size:20px}
.nav button.tg{font-size:13px;font-weight:700;padding:0 14px;min-width:88px}
.nav button[disabled]{opacity:.3;cursor:default}
.nav button:focus-visible{outline:2px solid #7cc2ff;outline-offset:1px}
.agr{grid-column:1/-1}
.t.sp.agr{padding:6px 9px;gap:2px}
.t.sp.agr>svg{width:100%;max-width:330px;height:auto;margin:0 auto}
#ag text{font-family:inherit}
.ag2{display:flex;flex-wrap:wrap;justify-content:space-between;gap:0 8px;font-size:clamp(10.5px,2.6cqw,11.5px);color:var(--mut);line-height:1.3}
.ag2 .n{font-size:inherit!important}
.t .ag2 b{color:#7cc2ff;font-weight:700;font-size:inherit;display:inline}
.gr{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:6px;margin-top:4px}
.t{background:var(--wei);border:1px solid var(--lin);border-radius:11px;padding:7px 8px;min-width:0;display:flex;gap:7px;align-items:center}
.t>svg{flex:none;width:clamp(34px,10cqw,44px);height:clamp(34px,10cqw,44px);overflow:visible}
.t>svg.bt{height:clamp(54px,15.5cqw,68px)}
.t div.x{min-width:0;display:flex;flex-direction:column;gap:1px;flex:1}
.t span.n{font-size:clamp(10px,2.5cqw,11.5px);color:var(--mut);line-height:1.15}
.t b{font-size:clamp(13.5px,3.8cqw,16.5px);font-weight:800;line-height:1.12}
.t small{font-size:clamp(9.5px,2.35cqw,10.5px);color:var(--mut);line-height:1.2}
.t small.sd{font-size:clamp(10.5px,2.7cqw,11.5px);font-weight:700;margin-top:1px}
.t small.sd span{display:block}
.dr{transform-origin:30px 30px;animation:dreh var(--t,16s) linear infinite}
.we{animation:welle 2.6s linear infinite}
@keyframes welle{to{transform:translateX(-24px)}}
.z{transition:transform .9s cubic-bezier(.3,1.3,.5,1);transform-origin:30px 40px}
.pf{fill:none;stroke-linecap:round;stroke-width:4;stroke-dasharray:.5 11;animation:lauf2 var(--t,1.5s) linear infinite}
@keyframes lauf2{to{stroke-dashoffset:-11.5}}
.bl{display:grid;grid-template-columns:auto 1fr auto;gap:4px 10px;align-items:center;font-size:clamp(13px,3.6cqw,15px);color:var(--ink);width:100%}
.bl em{font-style:normal;color:var(--ink);font-weight:700;text-align:right;white-space:nowrap;font-size:clamp(14px,4cqw,17px)}
.bl i{height:6px;border-radius:3px;background:rgba(255,255,255,.1);overflow:hidden;display:block;min-width:10px}
.bl i u{display:block;height:100%;width:0;border-radius:3px;transition:width .7s}
.t.sp{align-items:stretch;flex-direction:column;gap:3px}
.bil{grid-column:1/-1;position:relative;overflow:hidden;transition:border-color 2s;padding:9px 11px}
.bil #t_bin{font-size:clamp(13px,3.6cqw,15px);font-weight:700;color:var(--ink);margin-bottom:2px}
.bil>*{position:relative}
.bil::before{content:"";position:absolute;inset:0;background:#e5372a;opacity:0;transition:opacity 2s;pointer-events:none}
.bil.def{border-color:rgba(255,99,82,.65)}
.bil.def::before{opacity:.3;animation:rotpuls 7s ease-in-out infinite}
.bil.def #t_bin{color:#ff9d90;font-weight:700}
@keyframes rotpuls{0%,100%{opacity:.12}50%{opacity:.36}}
.t.sp>svg{height:auto;width:clamp(44px,14cqw,60px)}
.ver{background:var(--wei);border:1px solid var(--lin);border-radius:11px;margin-top:6px}
.tabs button:focus-visible{outline:2px solid #5db2ff;outline-offset:1px;border-radius:8px}
.vi{padding:9px;display:flex;flex-direction:column;gap:6px}
.tabs{display:flex;gap:3px}
.tabs button{all:unset;cursor:pointer;font-size:11.5px;padding:3px 8px;border-radius:7px;color:var(--mut)}
.tabs button[aria-pressed=true]{background:#e7eef5;color:#101a2e}
.chart{position:relative;touch-action:pan-y;min-height:150px}
.chart svg{display:block;width:100%}
.chart text{font-size:10px;fill:var(--mut)}
.tip{position:absolute;top:3px;pointer-events:none;background:#0a111c;border:1px solid var(--lin);border-radius:8px;padding:6px 8px;font-size:11.5px;line-height:1.45;display:none;z-index:2;white-space:nowrap;box-shadow:0 5px 16px rgba(0,0,0,.5)}
.tip b{display:block}
.tip span{display:flex;justify-content:space-between;gap:12px;color:var(--mut)}
.tip em{font-style:normal;color:var(--ink);font-weight:700}
.leg{display:flex;flex-wrap:wrap;gap:3px 9px;font-size:11px;color:var(--mut)}
.leg span{display:inline-flex;align-items:center;gap:4px;white-space:nowrap}
.leg i{width:9px;height:9px;border-radius:3px}
.leg i.li{height:2px;background:var(--ink)}
.hinw{margin:3px 2px 0;font-size:11.5px;color:#ff9d7a;display:none}
/* Handy/App: Kreise groesser, zum Rand hin eingerueckt */
@container (max-width:385px){
 .kn{width:27%}
 #n_solar{margin-top:3.4%}
 #n_akku{margin:2.2% 0 0 -2.4%}
 #n_haus{margin-left:2.2%}
 #n_netz{margin-left:-2.2%}
 #n_gas{margin:-3.6% 0 0 1%}
 #n_wasser{margin:-3.6% 0 0 -1%}
 .kn b{font-size:13.5px}
 .kn small{font-size:9.5px}
 .kn.zw small{font-size:9px}
 .bue{margin-bottom:2px}
}
@media (prefers-reduced-motion:reduce){.bil.def::before{animation:none}.pf{animation:none;stroke-dasharray:none}.sw,.dr,.we,.kn.ak ha-icon,.kn.ak .ri .d{animation:none}}
.sw img.rund{border-radius:50%;object-fit:cover;aspect-ratio:1}
.gr>.voll{grid-column:1/-1}
#ag_v{margin-left:auto;text-align:right}
.t small>span{white-space:nowrap}
.hinw{white-space:normal}
.willk{display:flex;flex-direction:column;align-items:center;text-align:center;gap:8px;padding:18px 10px}
.willk img{width:58%;max-width:220px;filter:drop-shadow(0 8px 14px rgba(0,0,0,.5))}
.willk b{font-size:17px}
.willk p{margin:0;color:var(--mut);font-size:13.5px;line-height:1.4}
`;
const sonne = `<svg viewBox="0 0 60 60" aria-hidden="true"><g class="dr" id="g_sonne">${[0, 45, 90, 135, 180, 225, 270, 315].map(a => `<line x1="30" y1="6" x2="30" y2="14" stroke="#e09a00" stroke-width="3.4" stroke-linecap="round" transform="rotate(${a} 30 30)"/>`).join('')}</g><circle id="g_sk" cx="30" cy="30" r="11" fill="#f4b81f" stroke="#c98500" stroke-width="1.5"/></svg>`;
const batt = `<svg class="bt" viewBox="12 1 36 58" aria-hidden="true"><defs><clipPath id="cb"><rect x="17" y="10" width="26" height="44" rx="4"/></clipPath></defs><rect x="25" y="3" width="10" height="6" rx="2" fill="#dfe7ef"/><rect x="15" y="8" width="30" height="48" rx="6" fill="#0d1522" stroke="#dfe7ef" stroke-width="2"/><g clip-path="url(#cb)"><g id="g_fl" style="transition:transform 1s"><path class="we" id="g_we" d="M0 12 q6 -2.4 12 0 t12 0 t12 0 t12 0 t12 0 t12 0 V70 H0Z" fill="#23b27c"/></g></g><path d="M17 43H43M17 32H43M17 21H43" stroke="#fff" stroke-opacity=".3" stroke-width="1"/></svg>`;
const flussT = `<svg viewBox="0 0 60 60" aria-hidden="true"><circle cx="9" cy="16" r="6" fill="#f4b81f"/><rect x="4" y="38" width="10" height="15" rx="2" fill="#23b27c"/><path d="M41 28 L52 18 63 28 V46 H41Z" transform="translate(-6 0)" fill="#e0620f"/><path id="g_p1" class="pf" d="M16 17 C26 18 28 28 34 32" stroke="#e09a00"/><path id="g_p2" class="pf" d="M15 44 C24 44 28 38 34 36" stroke="#0f9d6c"/></svg>`;
const uhr = `<svg viewBox="0 0 60 44" aria-hidden="true" style="height:auto"><path d="M6 40 A24 24 0 0 1 30 16" fill="none" stroke="#e0628d" stroke-width="6" stroke-linecap="round"/><path d="M30 16 A24 24 0 0 1 54 40" fill="none" stroke="#3a86e6" stroke-width="6" stroke-linecap="round"/><line x1="30" y1="10" x2="30" y2="20" stroke="#dfe7ef" stroke-width="1.5"/><g class="z" id="g_z"><line x1="30" y1="40" x2="30" y2="20" stroke="#eef3f8" stroke-width="3" stroke-linecap="round"/></g><circle cx="30" cy="40" r="4" fill="#eef3f8"/></svg>`;
class EnergieDashboardCard extends HTMLElement {
  static getConfigElement() { return document.createElement('energie-dashboard-card-editor'); }
  static async getStubConfig(hass) {
    try { const r = await sensorenErkennen(hass); return { ...r.config }; } catch (e) { return {}; }
  }
  setConfig(c) {
    if (!c || typeof c !== 'object') throw new Error('Invalid configuration');
    this._roh = c; this._c = { ...DEFAULTS, ...c }; this._an = teileAn(this._c);
    this._basisTag = null; this._tag = null; this._tagD = null; this._d = null; this._aspekt = null; this._bildFehler = false;
    this._bau();
  }
  getCardSize() { return eingerichtet(this._c || {}) ? 12 : 4; }
  getGridOptions() { return { columns: 'full' }; }
  connectedCallback() {
    this._tick = setInterval(() => { this._zeichne(); if (this._hass && this._c && Date.now() - (this._basisZeit || 0) > 300e3) this._ladeBasis(); }, 5000);
    if (!this._raf) this._raf = requestAnimationFrame(z => this._lauf(z));
    if (!this._ro) this._ro = new ResizeObserver(() => { this._zeichne(); this._ts = -1e9; });
    const ch = this.shadowRoot && this.shadowRoot.getElementById('chart'); if (ch) this._ro.observe(ch);
  }
  disconnectedCallback() { clearInterval(this._tick); if (this._ro) this._ro.disconnect(); cancelAnimationFrame(this._raf); this._raf = 0; }
  get _t() { return TXT[this._lang || 'de']; }
  // Blasen selbst bewegen: Tempo aendert sich weich, ohne Spruenge (ca. 30 Bilder/s)
  _lauf(z) {
    this._raf = requestAnimationFrame(x => this._lauf(x));
    const dt = (z - (this._tl || 0)) / 1000; if (dt < .03) return; this._tl = z;
    const d = Math.min(dt, .2);
    if (z - (this._ts || -1e9) > 4000 && this._sicht()) this._ts = z;
    for (const b of Object.values(this._fb || {})) {
      if (!b.an || !b.pts || b.rng < 25) { if (b.g) b.g.setAttribute('opacity', 0); continue; }
      const soll = Math.min(b.v, b.rng / RUNDE_MIN);
      b.vi += (soll - b.vi) * Math.min(d * 1.2, 1);
      b.pos = (b.pos + b.vi * d) % b.rng;
      const m = b.rev ? b.a + b.rng - b.pos : b.a + b.pos, u = clamp(m / b.len * 80, 0, 80), i = Math.min(Math.floor(u), 79), f = u - i, A = b.pts[i], B = b.pts[i + 1];
      const r = Math.min(b.rng * .2, 30), o = clamp(Math.min(b.pos, b.rng - b.pos) / r, 0, 1);
      b.g.setAttribute('transform', `translate(${(A[0] + (B[0] - A[0]) * f).toFixed(1)} ${(A[1] + (B[1] - A[1]) * f).toFixed(1)})`);
      b.g.setAttribute('opacity', o.toFixed(2));
    }
  }
  // Sichtbaren Teil jeder Linie bestimmen: Stueck ausserhalb der Kreise (die Kreise sind auf dem Handy groesser)
  _sicht() {
    const sw = this.shadowRoot && this.shadowRoot.querySelector('.sw svg'); if (!sw) return false;
    const R = sw.getBoundingClientRect(); if (!R.width) return false;
    const sk = 1000 / R.width, kr = [...this.shadowRoot.querySelectorAll('.kn')].map(e => { const q = e.getBoundingClientRect(); return [(q.left + q.width / 2 - R.left) * sk, (q.top + q.height / 2 - R.top) * sk, q.width / 2 * sk + 6]; });
    for (const b of Object.values(this._fb || {})) {
      if (!b.pts) { try { b.len = b.p.getTotalLength(); } catch (e) { continue; } if (!b.len) continue; b.pts = []; for (let i = 0; i <= 80; i++) { const q = b.p.getPointAtLength(b.len * i / 80); b.pts.push([q.x, q.y]); } }
      const frei = b.pts.map(([x, y]) => kr.every(([cx, cy, r]) => Math.hypot(x - cx, y - cy) > r));
      const i0 = frei.indexOf(true), i1 = frei.lastIndexOf(true);
      const a = i0 < 0 ? 0 : b.len * i0 / 80, rng = i0 < 0 ? 0 : b.len * (i1 - i0) / 80;
      if (Math.abs(rng - b.rng) > 1 || Math.abs(a - b.a) > 1) { b.a = a; b.rng = rng; if (rng) b.pos %= rng; b.vi = Math.min(b.v, rng / RUNDE_MIN); }
    }
    return true;
  }
  _knoten(id, name, icon, c, arc, e1, e2, H) {
    if (!K[id]) return '';
    const [x, y] = K[id], zw = !!e2, klick = e => e ? `data-e="${esc(e)}" role="button" tabindex="0"` : '';
    const ges = id === 'gas' || id === 'wasser';
    return `<div class="kn${zw ? ' zw' : ''}" id="n_${id}" ${klick(e1)} style="left:${x / 10}%;top:${(y / H * 100).toFixed(3)}%;--c:${c}"><svg class="ri" viewBox="0 0 100 100" aria-hidden="true"><circle class="d" cx="50" cy="50" r="48"/>${arc ? '<circle class="arc" id="g_arc" cx="50" cy="50" r="43" stroke-dasharray="0 270"/><circle class="mxs" cx="50" cy="50" r="53"/><circle class="mxr" id="g_mx" cx="50" cy="50" r="53" stroke-dasharray="0 333"/>' : ''}</svg>${arc ? '<span class="mxt" id="t_mx"></span>' : ''}<ha-icon icon="${icon}" id="i_${id}"></ha-icon><b id="v_${id}"${ges ? ' class="ges"' : ''} ${klick(e1)}>–</b>${zw ? `<b id="v2_${id}" class="ges" ${klick(e2)}>–</b>` : ''}<small id="u_${id}" ${klick(e2 || e1)}>${esc(name)}</small></div>`;
  }
  _bau() {
    const c = this._c, an = this._an, T = this._t;
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    this._fb = {}; this._e = id => this.shadowRoot.getElementById(id);
    if (!eingerichtet(c)) {
      this.shadowRoot.innerHTML = `<style>${CSS}</style><div class="w" style="max-width:${+c.max_width || 420}px"><div class="willk"><img src="${DEFAULT_IMAGE}" alt=""><b>${esc(T.willkommen)}</b><p>${esc(T.willkommenText)}</p></div></div>`;
      return;
    }
    const H = this._H = an.gas || an.wasser ? 880 : 720;
    const still = window.matchMedia && matchMedia('(prefers-reduced-motion:reduce)').matches;
    const box = bildBox(c, this._bildAspekt()), P = flussPfade(c, an, box);
    const blase = k => `<g><circle r="14" class="bf" fill="${FLF[k]}" opacity=".22"/><circle r="8.5" class="bf" fill="${FLF[k]}" fill-opacity=".78" stroke="#fff" stroke-opacity=".6" stroke-width="1.2"/><circle cx="-2.6" cy="-2.8" r="2.4" fill="#fff" opacity=".9"/>${WATT_AN[k] ? '<text class="bw" y="-22"></text>' : ''}</g>`;
    const lin = Object.entries(P).map(([k, d]) => `${NUR_BLASE[k] ? '' : `<path class="ba" id="b_${k}" d="${d}"/>`}` + (NUR_BASIS[k] ? '' : `<path class="gl" id="l_${k}" d="${d}" stroke="${FLF[k]}"/>` + (still ? '' : `<g class="bb" id="f_${k}">${blase(k)}</g>`))).join('');
    const lg = (n, f) => `<span><i style="background:${f}"></i>${esc(n)}</span>`;
    const bild = this._bildSrc(), rund = c.image_shape === 'circle' && !this._bildFehler && c.image;
    const e = id => id ? `data-e="${esc(id)}" tabindex="0" role="button"` : '';
    const akkuKlick = c.battery_power || c.battery_soc;
    const strings = Array.isArray(c.solar_strings) ? c.solar_strings.filter(s => s && (s.entity || typeof s === 'string')).map((s, i) => typeof s === 'string' ? { entity: s, name: 'PV' + (i + 1) } : { entity: s.entity, name: s.name || 'PV' + (i + 1) }) : [];
    this._strings = strings;
    // Kacheln: halbe Breite, bei ungerader Anzahl wird die letzte breit
    const halb = [];
    if (an.solar) halb.push(`<div class="t" ${e(c.solar_power)}>${sonne}<div class="x"><span class="n">${esc(T.pvAkt)}</span><b id="t_pv">–</b>${strings.length ? `<small>${strings.map((s, i) => `<span id="t_s${i}" ${e(s.entity)}></span>`).join(' · ')}</small>` : ''}<small class="ges sd" ${e(c.solar_energy)}>${esc(T.sd)}<span id="t_sd">–</span></small></div></div>`);
    if (an.akku) halb.push(`<div class="t" ${e(c.battery_soc)}>${batt}<div class="x"><span class="n" id="t_akn">${esc(T.akku)}</span><b id="t_ak" ${e(akkuKlick)}>–</b><small id="t_aks" ${e(c.battery_content || c.battery_soc)}></small><small class="ges"><span id="t_ar" ${e(c.battery_energy_in)}></span> · <span id="t_au" ${e(c.battery_energy_out)}></span></small></div></div>`);
    if (an.solar && an.akku) halb.push(`<div class="t" ${e(c.solar_power)}>${flussT}<div class="x"><span class="n">${esc(T.gesamt)}</span><b id="t_ge">–</b><small>${esc(T.insHaus)}</small></div></div>`);
    halb.push(`<div class="t" ${e(c.grid_power || c.grid_import_power)}>${uhr}<div class="x"><span class="n">${esc(T.zaehler)}</span><b id="t_ne">–</b><small class="ges"><span id="t_nb" ${e(c.grid_import_energy)}></span> · <span id="t_ne2" ${e(c.grid_export_energy)}></span></small></div></div>`);
    if (halb.length % 2) halb[halb.length - 1] = halb[halb.length - 1].replace('<div class="t"', '<div class="t voll"');
    const bilZeilen = [['bezug', T.bezug, '#5db2ff', c.grid_power || c.grid_import_power], an.solar && ['pv', T.pv, '#e0a020', c.solar_power], an.akku && ['akku', T.akku, '#2cc48a', akkuKlick], ['haus', T.haus, '#a98cff', c.home_power || c.grid_power], ['einsp', T.einsp, '#e0628d', c.grid_export_energy || c.grid_power]].filter(Boolean);
    const fenster = [[T.f15, 900], [T.f1, 3600], [T.f6, 21600], [T.Heute, 0]];
    this._fenster = fenster;
    const titel = c.title || T.title, linkText = c.dashboard_link_text || T.dash;
    this.shadowRoot.innerHTML = `<style>${CSS}</style><div class="w" style="max-width:${+c.max_width || 420}px">
      <div class="bue" style="aspect-ratio:1000/${H}"><div class="ko"><h1>${esc(titel)}</h1><span class="stand" id="stand"></span></div><div class="sw"><img id="bild" class="${rund ? 'rund' : ''}"${bild ? ` src="${esc(bild)}"` : ''} alt="${esc(T.bildAlt)}" style="left:${(box.x / 10).toFixed(2)}%;top:${(box.y / H * 100).toFixed(2)}%;width:${(box.w / 10).toFixed(2)}%"><svg viewBox="0 0 1000 ${H}" aria-hidden="true">${lin}</svg></div>
        ${an.solar ? this._knoten('solar', T.solar + ' ' + T.heute, 'mdi:solar-power-variant-outline', '#ffc14d', false, c.solar_power, c.solar_energy, H) : ''}
        ${an.akku ? this._knoten('akku', T.akku, 'mdi:battery-outline', '#3fe09f', true, c.battery_soc || akkuKlick, null, H) : ''}
        ${this._knoten('haus', T.bezug + ' ' + T.heute, 'mdi:home-lightning-bolt-outline', '#a98cff', false, c.home_power || c.grid_power || c.grid_import_power, c.grid_import_energy || '', H)}
        ${this._knoten('netz', T.eingespeist, 'mdi:transmission-tower', '#5db2ff', false, c.grid_power || c.grid_export_power || c.grid_import_power, c.grid_export_energy || '', H)}
        ${an.gas ? this._knoten('gas', T.gas + ' ' + T.heute, 'mdi:fire', '#ff7a45', false, c.gas_energy, null, H) : ''}
        ${an.wasser ? this._knoten('wasser', T.wasser + ' ' + T.heute, 'mdi:water-outline', '#38c6ff', false, c.water_energy, null, H) : ''}
      </div>
      <div class="split"><a id="dash" href="${esc(c.dashboard_link || '/energy')}"><ha-icon icon="mdi:chart-donut"></ha-icon>${esc(linkText)}</a><button type="button" id="verk" aria-expanded="false" aria-controls="ver"><ha-icon icon="mdi:chart-areaspline"></ha-icon>${esc(T.verlauf)}<ha-icon icon="mdi:chevron-down"></ha-icon></button></div>
      <div class="ver" id="ver" hidden><div class="vi">
        <div class="tabs" id="tabs">${fenster.map(([n], i) => `<button type="button" data-i="${i}" aria-pressed="${i === 1}">${esc(n)}</button>`).join('')}</div>
        <div class="chart" id="chart"><svg id="sv" role="img" aria-label="${esc(T.verlaufAria)}"></svg><div class="tip" id="tip"></div></div>
        <div class="leg">${an.solar ? lg(T.solar, FARBE.pv) : ''}${an.akku ? lg(T.akku, FARBE.akku) : ''}${lg(T.netzbezug, FARBE.netz)}${lg(T.einsp, FARBE.einsp)}<span><i class="li"></i>${esc(T.hausverbrauch)}</span></div>
      </div></div>
      <div class="nav" role="group" aria-label="${esc(T.tagWaehlen)}"><button type="button" id="nv_v" aria-label="${esc(T.zurueck)}">‹</button><button type="button" id="nv_h" class="tg" aria-label="${esc(T.zuHeute)}">${esc(T.Heute)}</button><button type="button" id="nv_n" aria-label="${esc(T.vor)}" disabled>›</button></div>
      <p class="hinw" id="hinw"></p>
      <div class="gr">
        ${an.akku ? `<div class="t sp agr"><div class="ag2"><span class="n" id="ag_t">${esc(T.akku)}</span><span id="ag_i"></span><span id="ag_v"></span></div><svg id="ag" viewBox="0 0 300 30" role="img" aria-label="${esc(T.akkuAria)}"></svg></div>` : ''}
        ${halb.join('')}
        <div class="t sp bil" id="t_bil"><span class="n" id="t_bin">${esc(T.bilanz)}</span><div class="bl" id="t_bl">${bilZeilen.map(([k, n, f, id]) => `<span ${e(id)}>${esc(n)}</span><i ${e(id)}><u id="ba_${k}" style="background:${f}"></u></i><em id="bv_${k}" ${e(id)}>–</em>`).join('')}</div></div>
      </div></div>`;
    this._fi = 1; this._tier = {};
    this.shadowRoot.querySelectorAll('.bb').forEach(g => { const k = g.id.slice(2); this._fb[k] = { g: g.firstElementChild, p: this._e('l_' + k), t: g.querySelector('.bw'), an: false, rev: false, v: TEMPO, vi: 0, pos: 0, pts: null, len: 0, a: 0, rng: 0, tz: 0 }; });
    const img = this._e('bild');
    img.addEventListener('load', () => { if (!rund && img.naturalWidth) { const a = img.naturalHeight / img.naturalWidth; if (!this._aspekt || Math.abs(a - this._aspekt) > .01) { this._aspekt = a; this._pfadeNeu(); } } });
    img.addEventListener('error', () => {
      if (!img.getAttribute('src') || this._bildFehler || !c.image) return;
      if (String(c.image).startsWith('media-source://') && !this._mediaNochmal) { this._mediaNochmal = true; this._media = null; this._loeseMedia(); return; }
      this._bildFehler = true; this._aspekt = null; this._bau();
    });
    this._e('dash').addEventListener('click', ev => {
      const z = this._c.dashboard_link || '/energy'; if (!z.startsWith('/')) return;
      ev.preventDefault(); history.pushState(null, '', z); window.dispatchEvent(new CustomEvent('location-changed', { detail: { replace: false } }));
    });
    const oeffne = ev => { const el = ev.target.closest && ev.target.closest('[data-e]'); if (!el || !el.dataset.e) return; ev.stopPropagation(); if (this._hass && !this._hass.states[el.dataset.e]) return; this.dispatchEvent(new CustomEvent('hass-more-info', { bubbles: true, composed: true, detail: { entityId: el.dataset.e } })); };
    this.shadowRoot.addEventListener('click', oeffne);
    this.shadowRoot.addEventListener('keydown', ev => { if ((ev.key === 'Enter' || ev.key === ' ') && ev.target.dataset && ev.target.dataset.e) { ev.preventDefault(); oeffne(ev); } });
    this._e('nv_v').addEventListener('click', () => this._tagSchritt(-1)); this._e('nv_n').addEventListener('click', () => this._tagSchritt(1)); this._e('nv_h').addEventListener('click', () => this._tagSetz(null));
    this._e('verk').addEventListener('click', () => { const v = this._e('ver'); v.hidden = !v.hidden; this._e('verk').setAttribute('aria-expanded', String(!v.hidden)); if (!v.hidden && this._hass) this._ladeHist(); });
    this._e('tabs').addEventListener('click', ev => {
      const b = ev.target.closest('button'); if (!b) return;
      this._fi = +b.dataset.i;
      this.shadowRoot.querySelectorAll('#tabs button').forEach(x => x.setAttribute('aria-pressed', x === b));
      this._ladeHist();
    });
    const ch = this._e('chart');
    ch.addEventListener('pointermove', ev => { const r = ch.getBoundingClientRect(); this._hx = ev.clientX - r.left; this._zeichne(); });
    ch.addEventListener('pointerleave', () => { this._hx = null; this._e('tip').style.display = 'none'; this._zeichne(); });
    if (this._ro) this._ro.observe(ch);
    if (this._hass) this._zeig();
  }
  // Bildquelle: leer = Beispielhaus; media-source:// wird ueber Home Assistant in eine signierte Adresse aufgeloest
  _bildSrc() {
    const c = this._c; if (this._bildFehler || !c.image) return DEFAULT_IMAGE;
    if (!String(c.image).startsWith('media-source://')) return c.image;
    if (this._media && this._media.id === c.image && Date.now() - this._media.zeit < 12 * 3600e3) return this._media.url;
    this._loeseMedia(); return '';
  }
  async _loeseMedia() {
    if (!this._hass || this._mediaLaeuft) return; const id = this._c.image; this._mediaLaeuft = true;
    try {
      const r = await this._hass.callWS({ type: 'media_source/resolve_media', media_content_id: id, expires: 86400 });
      if (id !== this._c.image) return;
      this._media = { id, url: r.url, zeit: Date.now() }; const img = this._e && this._e('bild'); if (img) img.src = r.url;
    } catch (e) { console.warn('energie-dashboard-card: image', e); if (id === this._c.image) { this._bildFehler = true; this._bau(); } }
    finally { this._mediaLaeuft = false; }
  }
  _bildAspekt() { if (this._c.image_shape === 'circle' && this._c.image && !this._bildFehler) return 1; if (this._aspekt) return this._aspekt; return !this._c.image || this._bildFehler ? 1 : 1; }
  // Bildseitenverhaeltnis bekannt: Bildlage und Linien neu setzen, ohne die Karte neu aufzubauen
  _pfadeNeu() {
    const c = this._c, box = bildBox(c, this._bildAspekt()), P = flussPfade(c, this._an, box);
    for (const [k, d] of Object.entries(P)) { const a = this._e('b_' + k), l = this._e('l_' + k); if (a) a.setAttribute('d', d); if (l) l.setAttribute('d', d); }
    for (const b of Object.values(this._fb || {})) { b.pts = null; b.rng = 0; }
    this._ts = -1e9;
  }
  set hass(h) {
    this._hass = h; if (!this._c) return;
    const l = sprache(this._c, h); if (l !== this._lang) { this._lang = l; this._fmt = format(l); this._bau(); }
    if (!eingerichtet(this._c)) return;
    if (this._c.image && String(this._c.image).startsWith('media-source://') && !this._bildFehler && (!this._media || Date.now() - this._media.zeit > 12 * 3600e3)) this._loeseMedia();
    this._zeig(); this._live();
    const tag = mitternacht().getTime();
    if (this._basisTag !== tag) { this._basisTag = tag; this._ladeBasis(); }
  }
  _g(id, art) { return wert(this._hass, id, art || SENSOREN[Object.keys(SENSOREN).find(k => this._c[k] === id)] || 'power'); }
  async _ladeSocMax(m) {
    const id = this._c.battery_soc; if (!id || !this._hass.states[id]) { this._socMaxH = null; return; }
    try {
      const r = await this._hass.callWS({ type: 'history/history_during_period', start_time: m.toISOString(), entity_ids: [id], minimal_response: true, no_attributes: true, significant_changes_only: false });
      const w = (r[id] || []).map(x => parseFloat(x.s)).filter(Number.isFinite);
      this._socMaxH = w.length ? Math.max(...w) : null; this._zeig();
    } catch (e) { console.warn('energie-dashboard-card: SoC max', e); }
  }
  _statIds() { const c = this._c; return ['grid_import_energy', 'grid_export_energy', 'solar_energy', 'battery_energy_in', 'battery_energy_out', 'battery_content', 'battery_soc', 'gas_energy', 'water_energy'].map(k => c[k]).filter(Boolean); }
  async _stat(von, bis) {
    const ids = [...new Set(this._statIds())]; if (!ids.length) return {};
    return this._hass.callWS({ type: 'recorder/statistics_during_period', start_time: von.toISOString(), end_time: bis.toISOString(), statistic_ids: ids, period: 'hour', types: ['change', 'state', 'mean', 'max'], units: { energy: 'kWh', volume: 'm³' } });
  }
  async _ladeBasis() {
    this._basisZeit = Date.now();
    const m = mitternacht(); if (this._socMaxH === undefined || this._basisM !== m.getTime()) { this._socMaxH = undefined; this._ladeSocMax(m); }
    this._basisM = m.getTime();
    try { this._st = await this._stat(new Date(m.getTime() - 3600e3), new Date()); this._zeig(); } catch (e) { console.warn('energie-dashboard-card: statistics', e); this._st = {}; }
  }
  _tagSchritt(n) { const d = this._tag ? new Date(this._tag) : mitternacht(); d.setDate(d.getDate() + n); d.setHours(0, 0, 0, 0); this._tagSetz(d >= mitternacht() ? null : d); }
  async _tagSetz(d) {
    this._tag = d; this._tagD = null; this._e('nv_n').disabled = !d; this._txt('nv_h', d ? this._fmt.datum(d) : this._t.Heute); this._zeig(); if (!d) return;
    const c = this._c, t = d.getTime(), bis = naechsterTag(d).getTime(), nr = this._nrT = (this._nrT || 0) + 1;
    try {
      const r = await this._stat(new Date(t - 3600e3), new Date(bis));
      if (nr !== this._nrT) return;
      const sum = id => id ? summeChange(r[id], t, bis) : null;
      const mittel = (id, vorn) => { const a = (r[id] || []).filter(x => istZahl(x.mean) && (vorn ? ts(x.start) < t : ts(x.start) < bis)); return a.length ? a[a.length - 1].mean : null; };
      const inhalt = vorn => c.battery_content ? mittel(c.battery_content, vorn) : (c.battery_soc && +c.battery_capacity ? (v => istZahl(v) ? v / 100 * c.battery_capacity : null)(mittel(c.battery_soc, vorn)) : null);
      const socMax = (() => { const w = (r[c.battery_soc] || []).filter(x => ts(x.start) >= t && ts(x.start) < bis && istZahl(x.max)).map(x => x.max); return w.length ? Math.max(...w) : null; })();
      const rein = sum(c.battery_energy_in), raus = sum(c.battery_energy_out), k0 = inhalt(true), k1 = inhalt(false);
      this._tagD = { solar: sum(c.solar_energy), bezug: sum(c.grid_import_energy), einsp: sum(c.grid_export_energy), rein, raus, gas: sum(c.gas_energy), wasser: sum(c.water_energy), inhalt: k1, soc: mittel(c.battery_soc, false), socMax, verlust: verlust(rein, raus, k0, k1) };
      this._zeig();
    } catch (e) { console.warn('energie-dashboard-card: day', e); this._tagD = {}; this._zeig(); }
  }
  _heute(key) { const c = this._c, id = c[key]; if (!id) return null; const art = SENSOREN[key]; return tagesWert(this._st && this._st[id], wert(this._hass, id, art === 'gas' ? 'gas' : art), this._basisM || mitternacht().getTime()); }
  _inhaltLive() { const c = this._c; if (c.battery_content) return wert(this._hass, c.battery_content, 'energy'); const s = wert(this._hass, c.battery_soc, 'soc'); return istZahl(s) && +c.battery_capacity ? s / 100 * c.battery_capacity : null; }
  _inhaltMitternacht() {
    const c = this._c, m = this._basisM, id = c.battery_content || c.battery_soc; const a = ((this._st || {})[id] || []).filter(x => ts(x.start) < m && istZahl(x.mean)); if (!a.length) return null;
    const v = a[a.length - 1].mean; return c.battery_content ? v : (+c.battery_capacity ? v / 100 * c.battery_capacity : null);
  }
  // Tageswerte: heute aus Statistik plus Live-Anteil, sonst aus der Statistik des gewaehlten Tags
  _tw() {
    const T = this._t;
    if (this._tag) return { lab: this._fmt.datum(this._tag), heute: false, ...(this._tagD || {}) };
    const soc = wert(this._hass, this._c.battery_soc, 'soc'), k = this._inhaltLive(), rein = this._heute('battery_energy_in'), raus = this._heute('battery_energy_out');
    return { lab: T.heute, heute: true, solar: this._heute('solar_energy'), bezug: this._heute('grid_import_energy'), einsp: this._heute('grid_export_energy'), rein, raus, gas: this._heute('gas_energy'), wasser: this._heute('water_energy'), inhalt: k, soc, socMax: istZahl(this._socMaxH) ? Math.max(this._socMaxH, soc ?? 0) : null, verlust: verlust(rein, raus, this._inhaltMitternacht(), k) };
  }
  _akkuGrafik(w) {
    const s = this._e('ag'), c = this._c, F = this._fmt, T = this._t; if (!s) return; const rein = istZahl(w.rein) ? w.rein : null, raus = istZahl(w.raus) ? w.raus : null, mx = Math.max(rein || 0, raus || 0, 0.05), soc = istZahl(w.soc) ? clamp(w.soc, 0, 100) : null;
    const FR = rein > 0.0005 ? '#2fd08f' : '#5b6b7c', FU = raus > 0.0005 ? '#ff8a5c' : '#5b6b7c', fb = soc === null ? '#5b6b7c' : soc < 20 ? '#e4573d' : soc < 50 ? '#eab530' : '#23b27c';
    const pfeil = (x1, x2, y, d, f) => `<line x1="${x1}" y1="${y}" x2="${x2 - 7}" y2="${y}" stroke="${f}" stroke-width="${d.toFixed(1)}" stroke-linecap="round"/><path d="M${x2 - 9} ${y - d / 2 - 3.5} L${x2} ${y} L${x2 - 9} ${y + d / 2 + 3.5}Z" fill="${f}"/>`;
    const y = 15, dk = v => v === null || v <= 0.0005 ? 1.2 : 1.8 + 3.2 * Math.min(v / mx, 1), bw = 52, bx = 124, bb = soc === null ? 0 : (bw - 6) * soc / 100;
    const de = id => id ? ` data-e="${esc(id)}"` : '';
    s.innerHTML = `<text x="0" y="19.5" style="font-size:12px;fill:#a7b6c5">${esc(T.rein)}</text><text x="27" y="20"${de(c.battery_energy_in)} style="cursor:pointer;fill:#7cc2ff;font-size:13.5px;font-weight:800">${F.whk(rein)}</text>` + pfeil(90, 120, y, dk(rein), FR)
      + `<g${de(c.battery_soc)} style="cursor:pointer"><rect x="${bx}" y="6" width="${bw}" height="18" rx="4" fill="#0d1522" stroke="#dfe7ef" stroke-width="1.5"/><rect x="${bx + bw}" y="11" width="3" height="8" rx="1" fill="#dfe7ef"/><rect x="${bx + 3}" y="9" width="${bb.toFixed(1)}" height="12" rx="2" fill="${fb}"/>${[.25, .5, .75].map(a => `<line x1="${bx + 3 + (bw - 6) * a}" y1="9" x2="${bx + 3 + (bw - 6) * a}" y2="21" stroke="#fff" stroke-opacity=".3" stroke-width="1"/>`).join('')}</g>`
      + pfeil(183, 213, y, dk(raus), FU) + `<text x="218" y="20"${de(c.battery_energy_out)} style="cursor:pointer;fill:#7cc2ff;font-size:13.5px;font-weight:800">${F.whk(raus)}</text><text x="300" y="19.5" text-anchor="end" style="font-size:12px;fill:#a7b6c5">${esc(T.raus)}</text>`;
    this._txt('ag_t', T.akku + ' ' + w.lab + (soc === null ? '' : ' · ' + F.zahl(soc, 0) + ' %')); const i = this._e('ag_i'), v = this._e('ag_v');
    if (i) i.innerHTML = `${esc(T.inhalt)} <b>${F.whk(w.inhalt)}</b>`;
    if (v) v.innerHTML = `${esc(T.verlust)} <b>${!istZahl(w.verlust) ? '–' : F.whk(w.verlust) + (w.rein >= 0.05 ? ` (${F.zahl(Math.min(w.verlust / w.rein * 100, 100), 0)} % ${esc(T.vonRein)})` : '')}</b>`;
  }
  // Rohsensoren fuer Verlauf und Diagramm
  _rohIds() { const c = this._c, an = this._an; return [an.solar && c.solar_power, c.grid_power, c.grid_import_power, c.grid_export_power, an.akku && c.battery_power, an.akku && c.battery_charge_power, an.akku && c.battery_discharge_power].filter(Boolean); }
  async _ladeHist() {
    const f = this._fenster[this._fi][1], jetzt = Date.now() / 1000, von = f ? jetzt - f : mitternacht().getTime() / 1000;
    const nr = this._hn = (this._hn || 0) + 1, ids = [...new Set(this._rohIds())];
    try {
      const r = await this._hass.callWS({ type: 'history/history_during_period', start_time: new Date(von * 1000).toISOString(), end_time: new Date().toISOString(), entity_ids: ids, minimal_response: true, no_attributes: true, significant_changes_only: false });
      if (nr !== this._hn) return;
      const d = {};
      for (const id of ids) { const fk = this._faktor(id); d[id] = (r[id] || []).map(x => { const v = parseFloat(x.s); return [x.lu !== undefined ? x.lu : x.lc, Number.isFinite(v) ? v * fk : null]; }); }
      this._d = d; this._zeichne();
    } catch (e) { console.warn('energie-dashboard-card: history', e); this._d = {}; this._zeichne(); }
  }
  _faktor(id) { const s = this._hass.states[id], u = s && s.attributes.unit_of_measurement; return u in FAKTOR.power ? FAKTOR.power[u] : 1; }
  _live() {
    if (!this._d) return;
    for (const id of this._rohIds()) {
      const s = this._hass.states[id]; if (!s || !this._d[id]) continue;
      const t = Date.parse(s.last_updated) / 1000, a = this._d[id], last = a[a.length - 1];
      if (!last || t > last[0]) { const v = parseFloat(s.state); a.push([t, Number.isFinite(v) ? v * this._faktor(id) : null]); }
    }
  }
  _bucket(a, von, bis, n) {
    const o = new Array(n).fill(null), dt = (bis - von) / n; if (!a || !a.length) return o;
    let i = 0;
    for (let b = 0; b < n; b++) {
      const t0 = von + b * dt, t1 = t0 + dt; let sum = 0, gew = 0;
      while (i + 1 < a.length && a[i + 1][0] <= t0) i++;
      for (let j = i; j < a.length && a[j][0] < t1; j++) {
        const s = Math.max(a[j][0], t0), e = Math.min(j + 1 < a.length ? a[j + 1][0] : bis, t1);
        if (e > s && a[j][1] !== null) { sum += a[j][1] * (e - s); gew += e - s; }
      }
      o[b] = gew > 0 ? sum / gew : null;
    }
    return o;
  }
  _zeichne() {
    if (!this._d || !this._e || !this._e('ver') || this._e('ver').hidden) return; const ch = this._e('chart'), W = ch.clientWidth; if (!W) return;
    const c = this._c, an = this._an, F = this._fmt, T = this._t;
    const H = 165, L = 42, R = 6, Tp = 8, B = 20, iw = W - L - R, ih = H - Tp - B;
    const f = this._fenster[this._fi][1], bis = Date.now() / 1000, von = f ? bis - f : mitternacht().getTime() / 1000;
    const n = clamp(Math.round(iw / 3), 30, 320), bk = {};
    for (const id of new Set(this._rohIds())) bk[id] = this._bucket(this._d[id], von, bis, n);
    const S = []; for (let i = 0; i < n; i++) {
      const g = id => bk[id] ? bk[id][i] : null;
      const grid = netzW(c, g), pv = an.solar ? g(c.solar_power) : 0, bat = an.akku ? akkuW(c, g) : 0;
      if (grid === null || (an.solar && pv === null)) { S.push(null); continue; }
      const q = fluesse(pv, grid, bat);
      S.push({ a: q.p, b: q.dis, c: q.imp, d: q.chg, e: q.exp, haus: q.home, t: (von + (i + .5) * (bis - von) / n) * 1000 });
    }
    let top = 100, bot = 0; for (const s of S) if (s) { top = Math.max(top, s.a + s.b + s.c); bot = Math.max(bot, s.d + s.e); }
    const roh = (top + bot) / 4, p = Math.pow(10, Math.floor(Math.log10(roh))), st = [1, 2, 2.5, 5, 10].map(k => k * p).find(k => k >= roh);
    if (bot < st * .1) bot = 0;
    top = Math.ceil(top / st) * st; bot = Math.ceil(bot / st) * st;
    const y = v => Tp + (top - v) / (top + bot) * ih, x = i => L + (i + .5) / n * iw;
    let g = '';
    for (let w = -bot; w <= top + 1e-6; w += st) {
      const v = Math.abs(w) < 1e-6 ? 0 : w, yy = y(v).toFixed(1);
      g += `<line x1="${L}" x2="${W - R}" y1="${yy}" y2="${yy}" stroke="${v === 0 ? '#71839a' : '#2a3950'}"/><text x="${L - 5}" y="${(+yy + 3.5).toFixed(1)}" text-anchor="end">${Math.abs(v) >= 1000 ? F.zahl(v / 1000, Math.abs(v) % 1000 ? 1 : 0) + ' kW' : F.zahl(v, 0) + ' W'}</text>`;
    }
    const xn = W < 420 ? 3 : 5;
    for (let k = 0; k <= xn; k++) g += `<text x="${(L + iw * k / xn).toFixed(1)}" y="${H - 5}" text-anchor="${k === 0 ? 'start' : k === xn ? 'end' : 'middle'}">${F.hhmm((von + (bis - von) * k / xn) * 1000)}</text>`;
    const fl = (lo, hi, farbe) => {
      let out = '', i = 0;
      while (i < n) {
        if (!S[i]) { i++; continue; }
        let j = i; while (j + 1 < n && S[j + 1]) j++;
        let d = ''; for (let k = i; k <= j; k++) d += `${k === i ? 'M' : 'L'}${x(k).toFixed(1)} ${y(hi(S[k])).toFixed(1)}`;
        for (let k = j; k >= i; k--) d += `L${x(k).toFixed(1)} ${y(lo(S[k])).toFixed(1)}`;
        out += `<path d="${d}Z" fill="${farbe}" stroke="#172232" stroke-width=".8" stroke-linejoin="round"/>`; i = j + 1;
      }
      return out;
    };
    g += fl(() => 0, s => s.a, FARBE.pv) + fl(s => s.a, s => s.a + s.b, FARBE.akku) + fl(s => s.a + s.b, s => s.a + s.b + s.c, FARBE.netz) + fl(s => -s.d, () => 0, FARBE.akku) + fl(s => -s.d - s.e, s => -s.d, FARBE.einsp);
    let li = '', auf = false; for (let i = 0; i < n; i++) { if (S[i]) { li += `${auf ? 'L' : 'M'}${x(i).toFixed(1)} ${y(S[i].haus).toFixed(1)}`; auf = true; } else auf = false; }
    if (li) g += `<path d="${li}" fill="none" stroke="#eef3f8" stroke-width="1.8" stroke-linejoin="round"/>`;
    if (this._hx !== null && this._hx !== undefined) {
      const i = clamp(Math.round((this._hx - L) / iw * n - .5), 0, n - 1), s = S[i], tip = this._e('tip');
      if (s) {
        g += `<line x1="${x(i).toFixed(1)}" x2="${x(i).toFixed(1)}" y1="${Tp}" y2="${Tp + ih}" stroke="#eef3f8" stroke-opacity=".45"/><circle cx="${x(i).toFixed(1)}" cy="${y(s.haus).toFixed(1)}" r="4" fill="#eef3f8" stroke="#172232" stroke-width="2"/>`;
        const z = (a, v) => v > .5 ? `<span>${esc(a)} <em>${F.watt(v)}</em></span>` : '';
        tip.innerHTML = `<b>${F.hhmm(s.t)} · ${esc(T.haus)} ${F.watt(s.haus)}</b>` + z(T.solar, s.a) + z(T.akkuRaus, s.b) + z(T.netzbezug, s.c) + z(T.akkuRein, s.d) + z(T.einsp, s.e);
        tip.style.display = 'block'; const tw = tip.offsetWidth; tip.style.left = (x(i) + 12 + tw > W ? x(i) - 12 - tw : x(i) + 12) + 'px';
      } else tip.style.display = 'none';
    }
    const sv = this._e('sv'); sv.setAttribute('viewBox', `0 0 ${W} ${H}`); sv.setAttribute('height', H); sv.innerHTML = g;
  }
  _txt(id, t) { const e = this._e(id); if (e && e.textContent !== t) e.textContent = t; }
  // Blasen an/aus; Tempo und Richtung nur bei Aenderung setzen, sonst springen sie
  _fluss(k, an, p, rev, farbe) {
    const f = this._e('f_' + k), l = this._e('l_' + k); if (!l) return;
    l.classList.toggle('an', an); if (farbe) l.setAttribute('stroke', farbe);
    if (!f) return; f.classList.toggle('an', an);
    const fz = farbe || FLF[k];
    if (this._tier[k + 'f'] !== fz) { this._tier[k + 'f'] = fz; f.querySelectorAll('.bf').forEach(c => c.setAttribute('fill', fz)); }
    const b = this._fb[k]; if (!b) return;
    const r = !!rev; if (b.rev !== r) { b.rev = r; b.pos = b.rng ? b.rng - b.pos : 0; }
    b.an = an; b.v = k === 'gas' || k === 'wasser' ? TEMPO : tempoW(p);
    // Wattzahl hoechstens alle 3 s aendern, damit sie ruhig bleibt
    if (b.t && an && Date.now() - b.tz > 3000) { b.tz = Date.now(); const w = this._fmt.watt(p); if (b.t.textContent !== w) b.t.textContent = w; }
  }
  _kn(id, an) { const e = this._e('n_' + id); if (e) e.classList.toggle('ak', !!an); }
  // Gas/Wasser aktiv: Durchfluss > 0 und aktuell; ohne Durchflusssensor: Zaehler hat sich gerade geaendert
  _aktiv(rate, zaehler, maxMin) {
    const h = this._hass;
    if (rate) { const s = h.states[rate]; if (!s) return false; const v = parseFloat(s.state); return Number.isFinite(v) && v > 0 && Date.now() - Date.parse(s.last_updated) < maxMin * 60e3; }
    const s = h.states[zaehler]; return !!s && Number.isFinite(parseFloat(s.state)) && Date.now() - Date.parse(s.last_changed) < 10 * 60e3;
  }
  _zeig() {
    if (!this._e || !this._e('hinw') || !this._hass) return;
    const c = this._c, h = this._hass, an = this._an, F = this._fmt, T = this._t, g = id => wert(h, id, 'power');
    const pv = an.solar ? g(c.solar_power) : 0, grid = netzW(c, g), bat = an.akku ? akkuW(c, g) : 0, soc = an.akku ? wert(h, c.battery_soc, 'soc') : null;
    const ok = grid !== null, q = fluesse(pv, grid, bat), hausLive = c.home_power ? g(c.home_power) : ok ? q.home : null;
    const lad = an.akku && q.chg > 3, ent = an.akku && q.dis > 3;
    // Hinweise: fehlende Sensoren, Akku ohne Daten, Bild
    const fehl = Object.keys(SENSOREN).filter(k => c[k] && !h.states[c[k]] && !(SENSOREN[k] === 'energy' || SENSOREN[k] === 'gas' || SENSOREN[k] === 'volume') && (k.startsWith('battery') ? an.akku : k.startsWith('solar') ? an.solar : true)).map(k => c[k]);
    const hw = []; if (fehl.length) hw.push(T.fehlt + ' ' + fehl.join(', ')); if (an.akku && c.battery_soc && h.states[c.battery_soc] && soc === null) hw.push(T.keineDaten); if (this._bildFehler) hw.push(T.bildFehler);
    const hi = this._e('hinw'); hi.textContent = hw.join(' '); hi.style.display = hw.length ? 'block' : 'none';
    const gasE = gasIstEnergie(h, c.gas_energy);
    const gasAn = an.gas && this._aktiv(c.gas_rate, c.gas_energy, 20), wasAn = an.wasser && this._aktiv(c.water_rate, c.water_energy, 45);
    const TW = this._tw(); this._akkuGrafik(TW);
    // Kreise
    if (an.solar) { this._txt('v_solar', F.watt(pv)); this._txt('v2_solar', F.kwh(TW.solar)); this._kn('solar', pv > 5); }
    if (an.akku) {
      this._txt('v_akku', soc === null ? '–' : F.zahl(soc, 0) + ' %'); this._txt('u_akku', lad ? T.laedt + ' ' + F.watt(q.chg) : ent ? T.gibt + ' ' + F.watt(q.dis) : T.akku); this._kn('akku', lad || ent);
      { const mx = istZahl(TW.socMax) ? TW.socMax : null, gm = this._e('g_mx'); if (gm) { const L = 2 * Math.PI * 53, d = mx === null ? 0 : clamp(mx, 0, 100) / 100 * L; gm.style.strokeDasharray = `${d.toFixed(1)} ${(L - d).toFixed(1)}`; gm.style.opacity = mx === null ? 0 : 1; } this._txt('t_mx', mx === null ? '' : 'max ' + F.zahl(mx, 0) + ' %'); }
      const arc = this._e('g_arc'); if (arc && soc !== null) { const L = 2 * Math.PI * 43, d = clamp(soc, 0, 100) / 100 * L; arc.style.strokeDasharray = `${d.toFixed(1)} ${(L - d).toFixed(1)}`; arc.style.stroke = soc < 20 ? '#ff6b4a' : soc < 50 ? '#ffc14d' : '#3fe09f'; }
      const ic = this._e('i_akku'); if (ic && soc !== null) { const st = lad ? 'mdi:battery-charging-' : 'mdi:battery-'; const lv = clamp(Math.round(soc / 10) * 10, 10, 100); const nm = lv === 100 && !lad ? 'mdi:battery' : st + lv; if (ic.getAttribute('icon') !== nm) ic.setAttribute('icon', nm); }
      const ua = this._e('u_akku'); if (ua) { const z = lad ? (c.battery_charge_power || c.battery_power) : ent ? (c.battery_discharge_power || c.battery_power) : c.battery_soc; if (z) ua.dataset.e = z; }
    }
    this._txt('v_haus', F.watt(hausLive)); this._txt('v2_haus', F.kwh(TW.bezug)); this._txt('u_haus', T.bezug + ' ' + TW.lab); this._kn('haus', hausLive > 5);
    this._txt('v_netz', grid === null ? '–' : F.watt(Math.abs(grid))); this._txt('v2_netz', F.kwh(TW.einsp)); this._kn('netz', grid !== null && Math.abs(grid) > 5);
    if (an.gas) { const v = istZahl(TW.gas) ? TW.gas : null; this._txt('v_gas', v === null ? '–' : gasE ? F.kwh(v) : F.zahl(v, 2) + ' m³'); this._txt('u_gas', T.gas + ' ' + TW.lab); this._kn('gas', gasAn); }
    if (an.wasser) { const v = istZahl(TW.wasser) ? TW.wasser : null; this._txt('v_wasser', v === null ? '–' : F.zahl(v * 1000, 0) + ' L'); this._txt('u_wasser', T.wasser + ' ' + TW.lab); this._kn('wasser', wasAn); }
    // Fluesse
    if (an.solar) {
      this._txt('u_solar', !TW.heute || q.p <= 5 ? T.solar + ' ' + TW.lab : q.s2h > 5 && q.s2b > 5 ? T.zuHausAkku : q.s2h > 5 ? T.zuHaus : q.s2b > 5 ? T.zuAkku : q.s2g > 5 ? T.zuNetz : T.solar + ' ' + TW.lab);
      this._fluss('sh', ok && q.s2h > 5, q.s2h);
      this._fluss('sa', ok && q.s2b > 5, q.s2b);
      this._fluss('solar', ok && q.s2g > 5, q.s2g); this._fluss('dach', ok && q.s2g > 5, q.s2g);
    }
    if (an.akku) {
      const ausNetz = ok && q.g2b > 5;
      this._fluss('akku', ok && (q.dis > 5 || ausNetz), ausNetz ? q.g2b : q.dis, ausNetz, ausNetz ? '#5db2ff' : '#ff9d5c');
      this._fluss('ac', ok && (q.dis > 5 || ausNetz), ausNetz ? q.g2b : q.dis, ausNetz, ausNetz ? '#5db2ff' : '#ff9d5c');
    }
    const insHaus = q.g2h + q.b2h;
    this._fluss('haus', ok && insHaus > 5, insHaus);
    this._fluss('netz', ok && Math.abs(grid) > 5, Math.abs(grid || 0), grid < 0, grid < 0 ? '#ff6f9f' : '#5db2ff');
    if (an.gas) this._fluss('gas', gasAn, 200); if (an.wasser) this._fluss('wasser', wasAn, 200);
    // Kachel PV
    if (an.solar) {
      this._txt('t_pv', F.watt(pv)); (this._strings || []).forEach((s, i) => this._txt('t_s' + i, s.name + ' ' + F.watt(g(s.entity))));
      // Solar direkt ins Haus = Solar minus Akku-Ladung; Einspeisung nur abziehen, soweit sie nicht aus dem Akku stammen kann
      const w = TW; let sd = null; if (istZahl(w.solar)) sd = Math.max(w.solar - (an.akku ? (w.rein || 0) : 0) - Math.max((w.einsp || 0) - (an.akku ? (w.raus || 0) : 0), 0), 0);
      this._txt('t_sd', sd === null ? '–' : w.lab + ' ' + F.whk(sd));
      const dr = this._e('g_sonne'); if (dr) { const a = pv > 5; const d = a ? (pv > 400 ? 5 : pv > 100 ? 10 : 18) : 0; dr.style.animationPlayState = a ? 'running' : 'paused'; dr.style.opacity = a ? clamp(.45 + pv / (+c.solar_max || 1000), .45, 1) : .25; if (a && this._tier.so !== d) { this._tier.so = d; dr.style.setProperty('--t', d + 's'); } }
      const sk = this._e('g_sk'); if (sk) { sk.setAttribute('fill', pv > 5 ? '#f4b81f' : '#4a5763'); sk.setAttribute('stroke', pv > 5 ? '#c98500' : '#6e7f8c'); }
    }
    // Kachel Akku
    if (an.akku) {
      this._txt('t_akn', T.akku + ' ' + (soc === null ? '' : F.zahl(soc, 0) + ' %')); this._txt('t_ak', lad ? F.watt(q.chg) + ' ' + T.laedt : ent ? F.watt(q.dis) + ' ' + T.raus : '0 W'); this._txt('t_aks', T.inhalt + ' ' + F.kwh(this._inhaltLive())); this._txt('t_ar', TW.lab + ' ' + T.rein + ' ' + F.kwh(TW.rein)); this._txt('t_au', T.raus + ' ' + F.kwh(TW.raus));
      const fl = this._e('g_fl'), we = this._e('g_we'); if (fl && soc !== null) { fl.style.transform = `translateY(${42 - clamp(soc, 0, 100) * .44}px)`; we.setAttribute('fill', soc < 20 ? '#e4573d' : soc < 50 ? '#eab530' : '#23b27c'); we.style.animationPlayState = (lad || ent) ? 'running' : 'paused'; }
    }
    // Kachel Solar + Akku
    if (an.solar && an.akku) {
      this._txt('t_ge', ok ? F.watt(q.s2h + q.b2h) : '–');
      [['g_p1', q.s2h > 5], ['g_p2', q.b2h > 5]].forEach(([id, a]) => { const e = this._e(id); if (e) { e.style.opacity = a ? 1 : .15; e.style.animationPlayState = a ? 'running' : 'paused'; } });
    }
    // Kachel Zaehler
    this._txt('t_ne', grid === null ? '–' : grid > 0 ? F.watt(grid) + ' ' + T.bezug : grid < 0 ? F.watt(-grid) + ' ' + T.raus : '0 W');
    this._txt('t_nb', TW.lab + ' ' + F.kwh(TW.bezug)); this._txt('t_ne2', T.ein + ' ' + F.kwh(TW.einsp));
    const z = this._e('g_z'); if (z && grid !== null) z.style.transform = `rotate(${clamp(grid / (+c.grid_max || 2000), -1, 1) * 88}deg)`;
    // Kachel Bilanz
    const akk = q.dis - q.chg, wer = { bezug: q.imp, pv: q.p, akku: Math.abs(akk), haus: hausLive || 0, einsp: q.exp }, mx = Math.max(100, ...Object.values(wer));
    for (const [k, v] of Object.entries(wer)) { const u = this._e('ba_' + k); if (u) u.style.width = (ok ? v / mx * 100 : 0).toFixed(1) + '%'; }
    this._txt('bv_bezug', ok ? F.watt(q.imp) : '–'); this._txt('bv_pv', F.watt(pv)); this._txt('bv_akku', ok ? (akk > 0 ? F.watt(akk) + ' ' + T.raus : akk < 0 ? F.watt(-akk) + ' ' + T.rein : '0 W') : '–'); this._txt('bv_haus', F.watt(hausLive)); this._txt('bv_einsp', ok ? F.watt(q.exp) : '–');
    if (grid === null) this._bil = null;
    else if (grid > 30) this._bil = 'd'; else if (grid < -30) this._bil = 'u'; else if (Math.abs(grid) < 5) this._bil = 'a';
    this._txt('t_bin', this._bil === 'd' ? T.bilanz + ': ' + T.defizit : this._bil === 'u' ? T.bilanz + ': ' + T.ueber : this._bil === 'a' ? T.bilanz + ': ' + T.ausgl : T.bilanz);
    const bk = this._e('t_bil'); if (bk) bk.classList.toggle('def', this._bil === 'd');
    this._txt('stand', new Date().toLocaleTimeString(F.loc, { hour: '2-digit', minute: '2-digit' }));
  }
}
// ---------- Automatische Erkennung aus den Energie-Einstellungen ----------
const zahlDa = (hass, id) => !!id && !!hass.states[id] && Number.isFinite(parseFloat(hass.states[id].state));
const einheit = (hass, id) => { const s = hass.states[id]; return s && s.attributes ? s.attributes.unit_of_measurement : undefined; };
const istLeistung = (hass, id) => { const s = hass.states[id]; return !!s && (s.attributes.device_class === 'power' || einheit(hass, id) in FAKTOR.power); };
function geschwister(hass, id, pred) {
  const reg = hass.entities || {}, dev = id && reg[id] && reg[id].device_id; if (!dev) return [];
  return Object.values(reg).filter(e => e.device_id === dev && e.entity_id !== id && e.entity_id.startsWith('sensor.') && hass.states[e.entity_id] && pred(e.entity_id, hass.states[e.entity_id])).map(e => e.entity_id);
}
const nameVon = (hass, id) => ((hass.states[id] && hass.states[id].attributes.friendly_name) || '') + ' ' + id;
function besterLeistung(hass, nachbarVon, plus, minus) {
  const kand = []; for (const v of nachbarVon.filter(Boolean)) for (const id of geschwister(hass, v, x => istLeistung(hass, x))) if (!kand.includes(id)) kand.push(id);
  const sc = id => { const n = nameVon(hass, id).toLowerCase(); return (plus && plus.test(n) ? 2 : 0) - (minus && minus.test(n) ? 5 : 0) + (zahlDa(hass, id) ? 1 : 0); };
  const b = kand.sort((a, c) => sc(c) - sc(a))[0]; return b && sc(b) > 0 ? b : undefined;
}
async function sensorenErkennen(hass) {
  const cfg = {}, quelle = {}, hinweise = [];
  const setz = (k, v, q) => { if (v && !cfg[k]) { cfg[k] = v; quelle[k] = q; } };
  let prefs = null;
  try { prefs = await hass.callWS({ type: 'energy/get_prefs' }); } catch (e) { hinweise.push('energy'); }
  const src = (prefs && prefs.energy_sources) || [];
  // power_config steht ab 2026.x direkt in der Quelle, bei aelteren Netz-Quellen in power[0]
  const pc = s => s.power_config || (Array.isArray(s.power) && s.power[0] && s.power[0].power_config) || {};
  const rate = s => pc(s).stat_rate || s.stat_rate || (Array.isArray(s.power) && s.power[0] && s.power[0].stat_rate);
  const best = (typ, energie) => src.filter(s => s.type === typ).map(s => ({ s, p: (zahlDa(hass, energie(s)) || (energie(s) && !hass.states[energie(s)]) ? 2 : 0) + (rate(s) || pc(s).stat_rate_from || pc(s).stat_rate_to ? 1 : 0) })).sort((a, b) => b.p - a.p).map(x => x.s)[0];
  // Netz (neues und altes Format)
  const gImp = s => s.stat_energy_from || (s.flow_from || []).map(f => f.stat_energy_from).find(Boolean);
  const gExp = s => s.stat_energy_to || (s.flow_to || []).map(f => f.stat_energy_to).find(Boolean);
  const g = best('grid', gImp);
  if (g) {
    setz('grid_import_energy', gImp(g), 'energy'); setz('grid_export_energy', gExp(g), 'energy');
    if (pc(g).stat_rate_from || pc(g).stat_rate_to) { setz('grid_import_power', pc(g).stat_rate_from, 'energy'); setz('grid_export_power', pc(g).stat_rate_to, 'energy'); }
    else if (pc(g).stat_rate_inverted) { setz('grid_power', pc(g).stat_rate_inverted, 'energy'); cfg.grid_invert = true; }
    else setz('grid_power', rate(g), 'energy');
  }
  const s = best('solar', x => x.stat_energy_from);
  if (s) { setz('solar_energy', s.stat_energy_from, 'energy'); setz('solar_power', rate(s), 'energy'); }
  const b = best('battery', x => x.stat_energy_from);
  if (b) {
    setz('battery_energy_out', b.stat_energy_from, 'energy'); setz('battery_energy_in', b.stat_energy_to, 'energy');
    if (pc(b).stat_rate_from || pc(b).stat_rate_to) { setz('battery_discharge_power', pc(b).stat_rate_from, 'energy'); setz('battery_charge_power', pc(b).stat_rate_to, 'energy'); }
    else if (pc(b).stat_rate_inverted) { setz('battery_power', pc(b).stat_rate_inverted, 'energy'); cfg.battery_invert = true; }
    else if (rate(b)) setz('battery_power', rate(b), 'energy'); // HA: positiv = Entladen, wie in der Karte
    setz('battery_soc', b.stat_soc, 'energy'); if (+b.capacity > 0) { cfg.battery_capacity = +b.capacity; quelle.battery_capacity = 'energy'; }
  }
  const ga = best('gas', x => x.stat_energy_from); if (ga) { setz('gas_energy', ga.stat_energy_from, 'energy'); setz('gas_rate', rate(ga), 'energy'); }
  const wa = best('water', x => x.stat_energy_from); if (wa) { setz('water_energy', wa.stat_energy_from, 'energy'); setz('water_rate', rate(wa), 'energy'); }
  // Fehlendes nur im selben Geraet suchen, nie in fremden Geraeten raten
  if (!cfg.grid_power && !cfg.grid_import_power) setz('grid_power', besterLeistung(hass, [cfg.grid_import_energy, cfg.grid_export_energy], /(grid|netz|power|leistung|meter|zähler|zaehler)/, /(l1|l2|l3|phase|reactive|blind|schein|apparent)/), 'geraet');
  if (s && !cfg.solar_power) setz('solar_power', besterLeistung(hass, [cfg.solar_energy], /(pv|solar|photo|input|eingang|power)/, /(l1|l2|l3|phase|grid|netz|batter|akku|output|ausgang|pv\s?\d|string|mppt)/), 'geraet');
  if (cfg.solar_power) {
    const st = geschwister(hass, cfg.solar_power, x => istLeistung(hass, x) && /(pv\s?_?\d|string\s?_?\d|mppt\s?_?\d)/i.test(nameVon(hass, x)));
    if (st.length > 1 && st.length <= 6) { cfg.solar_strings = st.sort().map((e, i) => ({ entity: e, name: 'PV' + (i + 1) })); quelle.solar_strings = 'geraet'; }
  }
  if (b) {
    const nb = [cfg.battery_energy_in, cfg.battery_energy_out, cfg.battery_soc];
    if (!cfg.battery_soc) setz('battery_soc', nb.flatMap(v => geschwister(hass, v, (x, st) => st.attributes.device_class === 'battery' || (einheit(hass, x) === '%' && /(soc|state_of_charge|ladezustand|batter|akku)/i.test(nameVon(hass, x)))))[0], 'geraet');
    if (!cfg.battery_power && !cfg.battery_charge_power && !cfg.battery_discharge_power) {
      const lade = besterLeistung(hass, nb, /(charg|lade)/i, /(discharg|entlade)/i), entl = besterLeistung(hass, nb, /(discharg|entlade)/i, null);
      if (lade && entl && lade !== entl) { setz('battery_charge_power', lade, 'geraet'); setz('battery_discharge_power', entl, 'geraet'); }
      else { setz('battery_power', besterLeistung(hass, nb, /(batter|akku|net|power)/i, /(pv|solar|grid|netz)/i), 'geraet'); if (cfg.battery_power) hinweise.push('vorzeichen'); }
    }
  }
  const fluss = (zaehler) => geschwister(hass, zaehler, (x, st) => st.attributes.device_class === 'volume_flow_rate')[0];
  if (cfg.gas_energy && !cfg.gas_rate) setz('gas_rate', fluss(cfg.gas_energy), 'geraet');
  if (cfg.water_energy && !cfg.water_rate) setz('water_rate', fluss(cfg.water_energy), 'geraet');
  cfg.show_solar = !!cfg.solar_power || !!cfg.solar_energy; cfg.show_battery = !!(cfg.battery_soc || cfg.battery_power || cfg.battery_charge_power); cfg.show_gas = !!cfg.gas_energy; cfg.show_water = !!cfg.water_energy;
  if (!src.length) hinweise.push('leer');
  return { config: cfg, quelle, hinweise };
}

// ---------- Editor ----------
const ED = {
  de: {
    sec: { vorhanden: 'Was ist vorhanden', strom: 'Strom (Netz und Haus)', solar: 'Solar', akku: 'Akku', gas: 'Gas', wasser: 'Wasser', bild: 'Hausbild', anzeige: 'Anzeige' },
    erkennen: 'Sensoren automatisch erkennen', uebernehmen: 'Vorschlag übernehmen', verwerfen: 'Verwerfen', erkannt: 'Vorschlag der automatischen Erkennung', ausEnergie: 'aus den Energie-Einstellungen', ausGeraet: 'aus demselben Gerät',
    nichts: 'Es wurde nichts gefunden. In den Energie-Einstellungen von Home Assistant (Einstellungen › Dashboards › Energie) Netz, Solar und Akku eintragen oder die Sensoren unten selbst auswählen.',
    keinEnergie: 'Die Energie-Einstellungen konnten nicht gelesen werden.', vorzeichen: 'Akku-Leistung als ein Sensor übernommen: bitte prüfen, ob beim Laden die Linie zum Akku läuft, sonst „Vorzeichen umdrehen“ einschalten.',
    neu: 'Die Sensoren wurden beim Hinzufügen automatisch eingetragen. Bitte die Prüfliste ansehen und falsche Sensoren unten ändern.',
    pruef: 'Prüfliste', pruefText: 'Welcher Sensor wo erscheint und ob er funktioniert. Jeder Sensor lässt sich unten frei ändern.',
    ok: 'in Ordnung', fehlt: 'nicht ausgewählt', gibtsNicht: 'existiert nicht', keineZahl: 'liefert gerade keine Zahl', einheitFalsch: 'falsche Einheit', keineStat: 'keine Langzeitstatistik, Tageswert bleibt leer', optional: 'optional',
    hochladen: 'Bild hochladen (in Medien speichern)', ausMedien: 'Bild aus Medien wählen', beispiel: 'Beispielhaus verwenden', laedtHoch: 'Wird hochgeladen …', hochFehler: 'Hochladen fehlgeschlagen:', hochOk: 'Gespeichert in Medien:', medienLeer: 'keine Bilder in Medien gefunden', medienWahl: '– Bild wählen –',
    bildTipp: 'Freigestellte PNG/WebP (ohne Hintergrund) mit Form „frei“ sehen am besten aus. Normale Fotos mit Form „rund“ zuschneiden. Danach die Ankerpunkte auf Solarmodule, Akku und Hausmitte schieben.',
  },
  en: {
    sec: { vorhanden: 'What do you have', strom: 'Power (grid and home)', solar: 'Solar', akku: 'Battery', gas: 'Gas', wasser: 'Water', bild: 'House image', anzeige: 'Display' },
    erkennen: 'Detect sensors automatically', uebernehmen: 'Apply suggestion', verwerfen: 'Discard', erkannt: 'Suggestion from automatic detection', ausEnergie: 'from energy settings', ausGeraet: 'from the same device',
    nichts: 'Nothing was found. Add grid, solar and battery in the Home Assistant energy settings (Settings › Dashboards › Energy) or pick the sensors below yourself.',
    keinEnergie: 'The energy settings could not be read.', vorzeichen: 'Battery power was taken as a single sensor: check that the line runs towards the battery while charging, otherwise turn on “Invert sign”.',
    neu: 'The sensors were filled in automatically when the card was added. Please check the list and change wrong sensors below.',
    pruef: 'Checklist', pruefText: 'Which sensor appears where and whether it works. Every sensor can be changed freely below.',
    ok: 'OK', fehlt: 'not selected', gibtsNicht: 'does not exist', keineZahl: 'is not reporting a number', einheitFalsch: 'wrong unit', keineStat: 'no long-term statistics, daily value stays empty', optional: 'optional',
    hochladen: 'Upload image (save to media)', ausMedien: 'Pick image from media', beispiel: 'Use example house', laedtHoch: 'Uploading …', hochFehler: 'Upload failed:', hochOk: 'Saved to media:', medienLeer: 'no images found in media', medienWahl: '– choose image –',
    bildTipp: 'Cut-out PNG/WebP (no background) with shape “free” look best. Crop normal photos with shape “circle”. Then move the anchor points onto solar panels, battery and the house centre.',
  },
};
// Beschriftung und Hilfetext je Feld: Hilfetext sagt, wo der Wert auf der Karte erscheint
const FELD = {
  de: {
    show_solar: ['Solar vorhanden', 'Schaltet Solar-Kreis, Solar-Linien und PV-Kachel ein.'], show_battery: ['Akku vorhanden', 'Schaltet Akku-Kreis, Akku-Linien, Akku-Grafik und Akku-Kachel ein.'], show_gas: ['Gas vorhanden', 'Schaltet den Gas-Kreis unten links ein.'], show_water: ['Wasser vorhanden', 'Schaltet den Wasser-Kreis unten rechts ein.'],
    grid_power: ['Netz-Leistung (W/kW)', 'Pflicht, ein Sensor mit Vorzeichen: + Bezug, − Einspeisung. Erscheint im Netz-Kreis, in der Zähler-Kachel, in der Energiebilanz und im Verlauf. Alternativ unten zwei getrennte Sensoren.'],
    grid_invert: ['Vorzeichen Netz umdrehen', 'Einschalten, wenn Einspeisung positiv gemeldet wird (Pfeile laufen sonst falsch herum).'],
    grid_import_power: ['Bezugs-Leistung (statt Netz-Leistung)', 'Nur wenn es keinen Sensor mit Vorzeichen gibt: Leistung aus dem Netz, immer positiv.'], grid_export_power: ['Einspeise-Leistung (statt Netz-Leistung)', 'Nur zusammen mit der Bezugs-Leistung: Leistung ins Netz, immer positiv.'],
    grid_import_energy: ['Zähler Netzbezug (kWh)', 'Empfohlen. Blau im Haus-Kreis: „Bezug heute“, in der Zähler-Kachel und für frühere Tage.'], grid_export_energy: ['Zähler Einspeisung (kWh)', 'Empfohlen. Blau im Netz-Kreis: „eingespeist“, in der Zähler-Kachel und in „Solar direkt ins Haus“.'],
    home_power: ['Hausverbrauch (W/kW)', 'Optional. Wert im Haus-Kreis und in der Energiebilanz. Ohne Sensor wird er aus Netz, Solar und Akku berechnet.'],
    solar_power: ['Solar-Leistung (W/kW)', 'Pflicht mit Solar. Oben im Solar-Kreis, in der PV-Kachel, der Energiebilanz und im Verlauf.'], solar_energy: ['Solar-Zähler (kWh)', 'Pflicht mit Solar. Blau im Solar-Kreis („heute“) und für „Solar direkt ins Haus“.'],
    solar_string_1: ['PV-Eingang 1', 'Optional. Zeile unter der PV-Leistung in der PV-Kachel.'], solar_string_2: ['PV-Eingang 2', ''], solar_string_3: ['PV-Eingang 3', ''], solar_string_4: ['PV-Eingang 4', ''],
    solar_string_1_name: ['Name', 'z. B. PV1, Süd'], solar_string_2_name: ['Name', ''], solar_string_3_name: ['Name', ''], solar_string_4_name: ['Name', ''],
    battery_soc: ['Ladestand (%)', 'Pflicht mit Akku. Zahl und Bogen im Akku-Kreis, Akku-Symbole, äußerer Ring = Tageshöchststand.'],
    battery_power: ['Akku-Leistung (W/kW, ein Sensor)', 'Ein Sensor mit Vorzeichen: + Entladen, − Laden. Bewegt die Akku-Linien und erscheint im Akku-Kreis und in der Akku-Kachel. Alternativ unten zwei getrennte Sensoren.'],
    battery_invert: ['Vorzeichen Akku umdrehen', 'Einschalten, wenn der Sensor beim Laden positiv ist.'],
    battery_charge_power: ['Lade-Leistung (statt Akku-Leistung)', 'Leistung in den Akku, immer positiv.'], battery_discharge_power: ['Entlade-Leistung (statt Akku-Leistung)', 'Leistung aus dem Akku, immer positiv.'],
    battery_capacity: ['Akku-Kapazität (kWh)', 'Empfohlen. Für „Inhalt“ und „Verlust“, wenn es keinen Sensor für den Inhalt gibt.'], battery_content: ['Akku-Inhalt (kWh)', 'Optional. „Inhalt“ in der Akku-Grafik und Akku-Kachel.'],
    battery_energy_in: ['Zähler Akku rein (kWh)', 'Empfohlen. Grafik „rein“, Verlust und „Solar direkt ins Haus“.'], battery_energy_out: ['Zähler Akku raus (kWh)', 'Empfohlen. Grafik „raus“ und Verlust.'],
    gas_energy: ['Gaszähler (m³ oder kWh)', 'Pflicht mit Gas. Blau im Gas-Kreis: Verbrauch heute.'], gas_rate: ['Gas-Durchfluss', 'Optional. Die Blase zum Gas-Kreis läuft, solange der Wert größer 0 ist. Ohne Sensor: wenn sich der Zähler gerade geändert hat.'],
    water_energy: ['Wasserzähler (m³ oder L)', 'Pflicht mit Wasser. Blau im Wasser-Kreis: Verbrauch heute in Litern.'], water_rate: ['Wasser-Durchfluss', 'Optional. Die Blase zum Wasser-Kreis läuft, solange der Wert größer 0 ist.'],
    image: ['Bildpfad', 'Leer = Beispielhaus. Erlaubt: /local/haus.png (Ordner config/www), media-source://… (Medien) oder https://…'],
    image_shape: ['Form', '„frei“ für freigestellte Bilder, „rund“ schneidet normale Fotos kreisrund zu.'], image_size: ['Größe (% der Breite)', ''], image_x: ['Position links ↔ rechts (%)', ''], image_y: ['Position oben ↕ unten (%)', ''],
    anchor_solar_x: ['Anker Solarmodule ↔ (%)', 'Wo die Solar-Linien im Bild ankommen.'], anchor_solar_y: ['Anker Solarmodule ↕ (%)', ''], anchor_battery_x: ['Anker Akku ↔ (%)', 'Wo die Akku-Linien im Bild ankommen.'], anchor_battery_y: ['Anker Akku ↕ (%)', ''], anchor_home_x: ['Anker Hausmitte ↔ (%)', 'Treffpunkt von Netz, Haus, Gas und Wasser.'], anchor_home_y: ['Anker Hausmitte ↕ (%)', ''],
    title: ['Titel', 'Oben links auf der Karte. Leer = „Energie“.'], max_width: ['Größte Breite (px)', 'Empfohlen 420.'], language: ['Sprache', ''], dashboard_link: ['Link links unter dem Bild', 'Standard /energy'], dashboard_link_text: ['Text des Links', 'Leer = „Energie-Dashboard“'],
    solar_max: ['Solar-Spitzenleistung (W)', 'Nur für die Helligkeit der Sonne in der PV-Kachel.'], grid_max: ['Netz-Vollausschlag (W)', 'Nur für den Zeiger in der Zähler-Kachel.'],
  },
  en: {
    show_solar: ['Solar installed', 'Turns on solar circle, solar lines and solar tile.'], show_battery: ['Battery installed', 'Turns on battery circle, battery lines, battery graphic and tile.'], show_gas: ['Gas', 'Turns on the gas circle at the bottom left.'], show_water: ['Water', 'Turns on the water circle at the bottom right.'],
    grid_power: ['Grid power (W/kW)', 'Required, one signed sensor: + import, − export. Shown in the grid circle, grid meter tile, energy balance and history. Alternatively two separate sensors below.'],
    grid_invert: ['Invert grid sign', 'Turn on if export is reported as positive (arrows point the wrong way otherwise).'],
    grid_import_power: ['Import power (instead of grid power)', 'Only if there is no signed sensor: power from the grid, always positive.'], grid_export_power: ['Export power (instead of grid power)', 'Only together with import power: power to the grid, always positive.'],
    grid_import_energy: ['Grid import meter (kWh)', 'Recommended. Blue in the home circle: “Import today”, grid meter tile and past days.'], grid_export_energy: ['Grid export meter (kWh)', 'Recommended. Blue in the grid circle: “exported”, grid meter tile and “Solar directly to home”.'],
    home_power: ['Home consumption (W/kW)', 'Optional. Value in the home circle and energy balance. Calculated from grid, solar and battery if empty.'],
    solar_power: ['Solar power (W/kW)', 'Required with solar. Top of the solar circle, solar tile, energy balance and history.'], solar_energy: ['Solar meter (kWh)', 'Required with solar. Blue in the solar circle (“today”) and for “Solar directly to home”.'],
    solar_string_1: ['Solar input 1', 'Optional. Line below the solar power in the solar tile.'], solar_string_2: ['Solar input 2', ''], solar_string_3: ['Solar input 3', ''], solar_string_4: ['Solar input 4', ''],
    solar_string_1_name: ['Name', 'e.g. PV1, South'], solar_string_2_name: ['Name', ''], solar_string_3_name: ['Name', ''], solar_string_4_name: ['Name', ''],
    battery_soc: ['State of charge (%)', 'Required with battery. Number and arc in the battery circle, battery icons, outer ring = daily maximum.'],
    battery_power: ['Battery power (W/kW, one sensor)', 'One signed sensor: + discharging, − charging. Drives the battery lines, battery circle and tile. Alternatively two separate sensors below.'],
    battery_invert: ['Invert battery sign', 'Turn on if the sensor is positive while charging.'],
    battery_charge_power: ['Charge power (instead of battery power)', 'Power into the battery, always positive.'], battery_discharge_power: ['Discharge power (instead of battery power)', 'Power out of the battery, always positive.'],
    battery_capacity: ['Battery capacity (kWh)', 'Recommended. For “Stored” and “Loss” if there is no content sensor.'], battery_content: ['Battery content (kWh)', 'Optional. “Stored” in the battery graphic and tile.'],
    battery_energy_in: ['Battery in meter (kWh)', 'Recommended. Graphic “in”, loss and “Solar directly to home”.'], battery_energy_out: ['Battery out meter (kWh)', 'Recommended. Graphic “out” and loss.'],
    gas_energy: ['Gas meter (m³ or kWh)', 'Required with gas. Blue in the gas circle: usage today.'], gas_rate: ['Gas flow rate', 'Optional. The gas bubble runs while the value is above 0. Without it: when the meter just changed.'],
    water_energy: ['Water meter (m³ or L)', 'Required with water. Blue in the water circle: usage today in litres.'], water_rate: ['Water flow rate', 'Optional. The water bubble runs while the value is above 0.'],
    image: ['Image path', 'Empty = example house. Allowed: /local/house.png (folder config/www), media-source://… (media) or https://…'],
    image_shape: ['Shape', '“free” for cut-out images, “circle” crops normal photos round.'], image_size: ['Size (% of width)', ''], image_x: ['Position left ↔ right (%)', ''], image_y: ['Position top ↕ bottom (%)', ''],
    anchor_solar_x: ['Anchor solar panels ↔ (%)', 'Where the solar lines meet the image.'], anchor_solar_y: ['Anchor solar panels ↕ (%)', ''], anchor_battery_x: ['Anchor battery ↔ (%)', 'Where the battery lines meet the image.'], anchor_battery_y: ['Anchor battery ↕ (%)', ''], anchor_home_x: ['Anchor house centre ↔ (%)', 'Meeting point of grid, home, gas and water.'], anchor_home_y: ['Anchor house centre ↕ (%)', ''],
    title: ['Title', 'Top left of the card. Empty = “Energy”.'], max_width: ['Maximum width (px)', 'Recommended 420.'], language: ['Language', ''], dashboard_link: ['Link below the image', 'Default /energy'], dashboard_link_text: ['Link text', 'Empty = “Energy dashboard”'],
    solar_max: ['Solar peak power (W)', 'Only for the brightness of the sun in the solar tile.'], grid_max: ['Grid full scale (W)', 'Only for the needle in the grid meter tile.'],
  },
};
const ENT = { entity: { filter: { domain: ['sensor', 'input_number'] } } };
const slider = (min, max, step = 0.5) => ({ number: { min, max, step, mode: 'slider' } });
const BOOL = { boolean: {} };
// Pruefliste: welche Sensoren je nach Ausstattung gebraucht werden. Stufe: p = Pflicht, e = empfohlen, o = optional
function prueflisteZeilen(c) {
  const an = teileAn({ ...c, solar_power: c.show_solar !== false ? (c.solar_power || 'x') : '', battery_soc: c.show_battery !== false ? (c.battery_soc || 'x') : '', gas_energy: c.show_gas !== false ? (c.gas_energy || 'x') : '', water_energy: c.show_water !== false ? (c.water_energy || 'x') : '' });
  const z = [];
  if (c.grid_import_power || c.grid_export_power) { z.push(['grid_import_power', 'p'], ['grid_export_power', 'e']); } else z.push(['grid_power', 'p']);
  z.push(['grid_import_energy', 'e'], ['grid_export_energy', 'e'], ['home_power', 'o']);
  if (an.solar) z.push(['solar_power', 'p'], ['solar_energy', 'p']);
  if (an.akku) { z.push(['battery_soc', 'p']); if (c.battery_charge_power || c.battery_discharge_power) z.push(['battery_charge_power', 'p'], ['battery_discharge_power', 'p']); else z.push(['battery_power', 'p']); z.push(['battery_energy_in', 'e'], ['battery_energy_out', 'e'], ['battery_content', 'o']); }
  if (an.gas) z.push(['gas_energy', 'p'], ['gas_rate', 'o']);
  if (an.wasser) z.push(['water_energy', 'p'], ['water_rate', 'o']);
  return z.filter(([k, s]) => s !== 'o' || c[k]);
}
const EINHEIT_OK = { power: u => u in FAKTOR.power, energy: u => u in FAKTOR.energy, soc: u => u === '%', gas: u => u in FAKTOR.energy || u in FAKTOR.volume, volume: u => u in FAKTOR.volume, rate: () => true };
let haGeladen = null;
function haElementeLaden() {
  if (!haGeladen) haGeladen = (async () => {
    if (customElements.get('ha-form') && customElements.get('ha-entity-picker')) return;
    try { const h = await window.loadCardHelpers(); const k = await h.createCardElement({ type: 'entities', entities: [] }); if (k && k.constructor.getConfigElement) await k.constructor.getConfigElement(); } catch (e) { console.warn('energie-dashboard-card: editor helpers', e); }
    await Promise.race([customElements.whenDefined('ha-form'), new Promise(r => setTimeout(r, 5000))]);
  })();
  return haGeladen;
}
const ED_CSS = `
:host{display:block}
.box{border:1px solid var(--divider-color,#ddd);border-radius:12px;padding:12px;margin-bottom:12px;background:var(--card-background-color)}
.box h3{margin:0 0 6px;font-size:15px}
.box p{margin:4px 0;color:var(--secondary-text-color);font-size:13px;line-height:1.4}
.knopf{display:inline-flex;align-items:center;gap:6px;border:none;border-radius:18px;padding:8px 14px;font:inherit;font-size:14px;cursor:pointer;background:var(--primary-color);color:var(--text-primary-color,#fff);margin:4px 6px 4px 0}
.knopf.zweit{background:transparent;color:var(--primary-color);border:1px solid var(--primary-color)}
.knopf[disabled]{opacity:.5;cursor:default}
.vor{border-left:4px solid var(--primary-color);padding-left:10px;margin-top:8px}
.vor li{font-size:13px;margin:2px 0;word-break:break-all}
.warn{color:var(--warning-color,#b26a00)}
table{width:100%;border-collapse:collapse;font-size:13px}
td{padding:5px 4px;border-top:1px solid var(--divider-color,#eee);vertical-align:top}
td.s{width:22px;font-size:15px;text-align:center}
td small{display:block;color:var(--secondary-text-color);word-break:break-all}
.ok{color:var(--success-color,#2e7d32)}.x{color:var(--error-color,#c62828)}.w{color:var(--warning-color,#b26a00)}
.reihe{display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:6px 0}
select{font:inherit;padding:6px;border-radius:8px;max-width:100%}
.st{font-size:13px;margin:4px 0;color:var(--secondary-text-color);word-break:break-all}
`;
class EnergieDashboardCardEditor extends HTMLElement {
  set hass(h) { const erst = !this._hass; this._hass = h; if (this._form) this._form.hass = h; if (erst) this._render(); else this._pruefliste(); }
  setConfig(c) {
    const alt = this._config; this._config = { ...c }; if (!this._root) return this._render();
    if (this._form) this._form.data = this._daten(); if (!alt || teileAn({ ...DEFAULTS, ...alt, solar_power: 1, battery_soc: 1, gas_energy: 1, water_energy: 1 }) && ['show_solar', 'show_battery', 'show_gas', 'show_water'].some(k => (alt[k] !== false) !== (c[k] !== false))) this._form && (this._form.schema = this._schema());
    this._pruefliste();
  }
  connectedCallback() { this._render(); }
  get _l() { return sprache(this._config, this._hass); }
  get _x() { return ED[this._l]; }
  _daten() {
    const c = { ...DEFAULTS, ...this._config }, d = { ...c };
    (Array.isArray(c.solar_strings) ? c.solar_strings : []).slice(0, 4).forEach((s, i) => { d['solar_string_' + (i + 1)] = typeof s === 'string' ? s : s.entity; d['solar_string_' + (i + 1) + '_name'] = typeof s === 'string' ? '' : s.name || ''; });
    delete d.solar_strings; delete d.type;
    // Fuer den Fall, dass ha-form "flatten" nicht kennt: Bereiche zusaetzlich verschachtelt fuellen
    const flach = { ...d }; for (const s of this._schema()) if (s.type === 'expandable' && s.name) d[s.name] = flach;
    return d;
  }
  _schema() {
    const c = { ...DEFAULTS, ...(this._config || {}) }, x = this._x.sec, sec = (name, title, icon, schema, offen) => ({ type: 'expandable', name, title, icon, flatten: true, expanded: !!offen, schema });
    const s = [
      sec('sec_vorhanden', x.vorhanden, 'mdi:toggle-switch-outline', [{ type: 'grid', name: '', schema: ['show_solar', 'show_battery', 'show_gas', 'show_water'].map(n => ({ name: n, selector: BOOL })) }], true),
      sec('sec_strom', x.strom, 'mdi:transmission-tower', [{ name: 'grid_power', selector: ENT }, { name: 'grid_invert', selector: BOOL }, { name: 'grid_import_energy', selector: ENT }, { name: 'grid_export_energy', selector: ENT }, { name: 'home_power', selector: ENT }, { name: 'grid_import_power', selector: ENT }, { name: 'grid_export_power', selector: ENT }]),
    ];
    if (c.show_solar !== false) s.push(sec('sec_solar', x.solar, 'mdi:solar-power-variant-outline', [{ name: 'solar_power', selector: ENT }, { name: 'solar_energy', selector: ENT }, ...[1, 2, 3, 4].map(i => ({ type: 'grid', name: '', schema: [{ name: 'solar_string_' + i, selector: ENT }, { name: 'solar_string_' + i + '_name', selector: { text: {} } }] }))]));
    if (c.show_battery !== false) s.push(sec('sec_akku', x.akku, 'mdi:battery-outline', [{ name: 'battery_soc', selector: ENT }, { name: 'battery_power', selector: ENT }, { name: 'battery_invert', selector: BOOL }, { name: 'battery_charge_power', selector: ENT }, { name: 'battery_discharge_power', selector: ENT }, { name: 'battery_energy_in', selector: ENT }, { name: 'battery_energy_out', selector: ENT }, { name: 'battery_capacity', selector: { number: { min: 0, max: 200, step: 0.01, mode: 'box', unit_of_measurement: 'kWh' } } }, { name: 'battery_content', selector: ENT }]));
    if (c.show_gas !== false) s.push(sec('sec_gas', x.gas, 'mdi:fire', [{ name: 'gas_energy', selector: ENT }, { name: 'gas_rate', selector: ENT }]));
    if (c.show_water !== false) s.push(sec('sec_wasser', x.wasser, 'mdi:water-outline', [{ name: 'water_energy', selector: ENT }, { name: 'water_rate', selector: ENT }]));
    const shape = this._l === 'de' ? [{ value: 'free', label: 'frei (freigestellt)' }, { value: 'circle', label: 'rund (Foto)' }] : [{ value: 'free', label: 'free (cut-out)' }, { value: 'circle', label: 'circle (photo)' }];
    s.push(sec('sec_bild', x.bild, 'mdi:home-outline', [{ name: 'image', selector: { text: {} } }, { name: 'image_shape', selector: { select: { mode: 'dropdown', options: shape } } }, { name: 'image_size', selector: slider(20, 100) }, { name: 'image_x', selector: slider(10, 90) }, { name: 'image_y', selector: slider(-10, 60) },
      { type: 'grid', name: '', schema: [{ name: 'anchor_solar_x', selector: slider(0, 100) }, { name: 'anchor_solar_y', selector: slider(0, 100) }, { name: 'anchor_battery_x', selector: slider(0, 100) }, { name: 'anchor_battery_y', selector: slider(0, 100) }, { name: 'anchor_home_x', selector: slider(0, 100) }, { name: 'anchor_home_y', selector: slider(0, 100) }] }]));
    const spr = [{ value: 'auto', label: 'Auto' }, { value: 'de', label: 'Deutsch' }, { value: 'en', label: 'English' }];
    s.push(sec('sec_anzeige', x.anzeige, 'mdi:palette-outline', [{ name: 'title', selector: { text: {} } }, { name: 'language', selector: { select: { mode: 'dropdown', options: spr } } }, { name: 'max_width', selector: { number: { min: 280, max: 800, step: 10, mode: 'box', unit_of_measurement: 'px' } } }, { name: 'dashboard_link', selector: { text: {} } }, { name: 'dashboard_link_text', selector: { text: {} } }, { name: 'solar_max', selector: { number: { min: 100, max: 50000, step: 100, mode: 'box', unit_of_measurement: 'W' } } }, { name: 'grid_max', selector: { number: { min: 100, max: 50000, step: 100, mode: 'box', unit_of_measurement: 'W' } } }]));
    return s;
  }
  async _render() {
    if (!this._hass || !this._config) return;
    if (!this._root) {
      this._root = this.attachShadow({ mode: 'open' });
      this._root.innerHTML = `<style>${ED_CSS}</style><div class="box" id="einr"></div><div class="box" id="pruef"></div><div id="formplatz"></div><div class="box" id="bildbox"></div>`;
      await haElementeLaden();
      const f = this._form = document.createElement('ha-form');
      f.computeLabel = s => (FELD[this._l][s.name] || [s.name])[0];
      f.computeHelper = s => (FELD[this._l][s.name] || [])[1] || undefined;
      f.hass = this._hass; f.schema = this._schema(); f.data = this._daten();
      f.addEventListener('value-changed', ev => this._geaendert(ev.detail.value));
      this._root.getElementById('formplatz').appendChild(f);
      // Leere Karte: Erkennung beim ersten Oeffnen starten, Ergebnis nur als Vorschlag zeigen
      if (!eingerichtet(this._config) && !this._erkannt) this._erkennen();
      else if (this._config._detected) this._hinweisNeu = true;
    }
    this._einrichtung(); this._pruefliste(); this._bildbox();
  }
  _geaendert(v) {
    const n = { ...v };
    for (const k of Object.keys(n)) if (k.startsWith('sec_')) { const sub = n[k]; delete n[k]; if (sub && typeof sub === 'object') for (const [a, b] of Object.entries(sub)) if (!(a in v) || v[a] === this._daten()[a]) n[a] = b; }
    const strings = []; for (let i = 1; i <= 4; i++) { const e = n['solar_string_' + i], nm = n['solar_string_' + i + '_name']; if (e) strings.push({ entity: e, name: nm || 'PV' + i }); delete n['solar_string_' + i]; delete n['solar_string_' + i + '_name']; }
    if (strings.length) n.solar_strings = strings; else delete n.solar_strings;
    // Standardwerte und leere Felder nicht in die YAML schreiben
    for (const [k, d] of Object.entries(DEFAULTS)) if (n[k] === d) delete n[k];
    for (const k of Object.keys(n)) if (n[k] === '' || n[k] === undefined || n[k] === null) delete n[k];
    delete n._detected;
    this._melde({ type: this._config.type, ...n });
  }
  _melde(c) { this._config = c; this.dispatchEvent(new CustomEvent('config-changed', { detail: { config: c }, bubbles: true, composed: true })); if (this._form) { this._form.schema = this._schema(); this._form.data = this._daten(); } this._pruefliste(); this._bildbox(); }
  async _erkennen() {
    this._erkannt = true; this._vorschlag = { laeuft: true }; this._einrichtung();
    try { this._vorschlag = await sensorenErkennen(this._hass); } catch (e) { this._vorschlag = { config: {}, quelle: {}, hinweise: ['energy'] }; }
    this._einrichtung();
  }
  _einrichtung() {
    const el = this._root && this._root.getElementById('einr'); if (!el) return; const X = this._x, v = this._vorschlag, L = FELD[this._l];
    let h = `<h3>${esc(X.erkennen)}</h3>`;
    if (this._hinweisNeu) h += `<p>${esc(X.neu)}</p>`;
    h += `<button class="knopf" id="erk" ${v && v.laeuft ? 'disabled' : ''}>${esc(v && v.laeuft ? '…' : X.erkennen)}</button>`;
    if (v && !v.laeuft) {
      const eintr = Object.entries(v.config).filter(([k, w]) => k in SENSOREN || k === 'battery_capacity' || k === 'solar_strings');
      h += `<div class="vor"><p><b>${esc(X.erkannt)}</b></p>`;
      if (!eintr.length) h += `<p class="warn">${esc(v.hinweise.includes('energy') ? X.keinEnergie + ' ' + X.nichts : X.nichts)}</p>`;
      else h += `<ul>${eintr.map(([k, w]) => `<li><b>${esc((L[k] || [k])[0])}</b>: ${esc(k === 'solar_strings' ? w.map(s => s.entity).join(', ') : w)} <small>(${esc(v.quelle[k] === 'geraet' ? X.ausGeraet : X.ausEnergie)})</small></li>`).join('')}</ul>`;
      if (v.hinweise.includes('vorzeichen')) h += `<p class="warn">${esc(X.vorzeichen)}</p>`;
      if (eintr.length) h += `<button class="knopf" id="ueb">${esc(X.uebernehmen)}</button>`;
      h += `<button class="knopf zweit" id="verw">${esc(X.verwerfen)}</button></div>`;
    }
    el.innerHTML = h;
    el.querySelector('#erk').onclick = () => this._erkennen();
    const u = el.querySelector('#ueb'); if (u) u.onclick = () => { const n = { ...this._config, ...v.config }; this._vorschlag = null; this._hinweisNeu = false; this._melde(n); this._einrichtung(); };
    const w = el.querySelector('#verw'); if (w) w.onclick = () => { this._vorschlag = null; this._einrichtung(); };
  }
  async _statMeta(ids) {
    const key = ids.slice().sort().join(','); if (this._metaKey === key) return this._meta; this._metaKey = key;
    try { const r = await this._hass.callWS({ type: 'recorder/get_statistics_metadata', statistic_ids: ids }); this._meta = new Set(r.map(m => m.statistic_id)); } catch (e) { this._meta = null; }
    return this._meta;
  }
  async _pruefliste() {
    const el = this._root && this._root.getElementById('pruef'); if (!el || !this._hass) return;
    const c = { ...DEFAULTS, ...this._config }, X = this._x, L = FELD[this._l], h = this._hass, F = format(this._l);
    const zeilen = prueflisteZeilen(c);
    const energieIds = zeilen.filter(([k]) => ['energy', 'gas', 'volume'].includes(SENSOREN[k]) && c[k]).map(([k]) => c[k]);
    const meta = energieIds.length ? await this._statMeta(energieIds) : new Set();
    const rows = zeilen.map(([k, stufe]) => {
      const id = c[k], art = SENSOREN[k], s = id && h.states[id];
      let st = 'ok', txt = X.ok;
      if (!id) { st = stufe === 'p' ? 'x' : 'w'; txt = X.fehlt; }
      else if (!s && !(meta && meta.has(id))) { st = 'x'; txt = X.gibtsNicht; }
      else if (s && !Number.isFinite(parseFloat(s.state))) { st = 'w'; txt = X.keineZahl + ` (${s.state})`; }
      else if (s && !EINHEIT_OK[art](s.attributes.unit_of_measurement)) { st = 'w'; txt = X.einheitFalsch + ` (${s.attributes.unit_of_measurement || '–'})`; }
      else if (['energy', 'gas', 'volume'].includes(art) && meta && !meta.has(id)) { st = 'w'; txt = X.keineStat; }
      else if (s) txt = X.ok + ' · ' + (art === 'power' ? F.watt(wert(h, id, 'power')) : s.state + ' ' + (s.attributes.unit_of_measurement || ''));
      const sym = st === 'ok' ? '✓' : st === 'x' ? '✗' : '⚠';
      return `<tr><td class="s ${st}">${sym}</td><td><b>${esc((L[k] || [k])[0])}</b>${stufe === 'o' ? ' <small style="display:inline">(' + esc(X.optional) + ')</small>' : ''}<small>${esc(id || '')}</small><small>${esc((L[k] || [])[1] || '')}</small></td><td class="${st}">${esc(txt)}</td></tr>`;
    }).join('');
    el.innerHTML = `<h3>${esc(X.pruef)}</h3><p>${esc(X.pruefText)}</p><table>${rows}</table>`;
  }
  async _bildbox() {
    const el = this._root && this._root.getElementById('bildbox'); if (!el) return; const X = this._x;
    if (!el.dataset.fertig) {
      el.dataset.fertig = 1;
      el.innerHTML = `<h3>${esc(this._x.sec.bild)}</h3><p>${esc(X.bildTipp)}</p><div class="reihe"><label class="knopf" tabindex="0">${esc(X.hochladen)}<input type="file" accept="image/*" id="datei" hidden></label><button class="knopf zweit" id="bsp">${esc(X.beispiel)}</button></div><div class="reihe"><select id="medien"><option value="">${esc(X.ausMedien)}</option></select></div><div class="st" id="bst"></div>`;
      el.querySelector('#datei').addEventListener('change', ev => this._hochladen(ev.target.files && ev.target.files[0]));
      el.querySelector('#bsp').onclick = () => { const n = { ...this._config }; delete n.image; delete n.image_shape; for (const k of Object.keys(DEFAULTS)) if (k.startsWith('anchor_') || k.startsWith('image_')) delete n[k]; this._melde(n); };
      el.querySelector('#medien').addEventListener('change', ev => { if (ev.target.value) this._melde({ ...this._config, image: ev.target.value }); });
      this._medienListe();
    }
  }
  async _medienListe(neu) {
    const sel = this._root.getElementById('medien'); if (!sel) return;
    try {
      const r = await this._hass.callWS({ type: 'media_source/browse_media', media_content_id: 'media-source://media_source/local/.' });
      const bilder = (r.children || []).filter(k => k.media_class === 'image' || /^image\//.test(k.media_content_type || ''));
      sel.innerHTML = `<option value="">${esc(bilder.length ? this._x.ausMedien : this._x.medienLeer)}</option>` + bilder.map(b => `<option value="${esc(b.media_content_id)}"${b.media_content_id === (neu || this._config.image) ? ' selected' : ''}>${esc(b.title)}</option>`).join('');
    } catch (e) { sel.innerHTML = `<option value="">${esc(this._x.medienLeer)}</option>`; }
  }
  async _hochladen(datei) {
    if (!datei) return; const st = this._root.getElementById('bst'), X = this._x; st.textContent = X.laedtHoch;
    try {
      const fd = new FormData(); fd.append('media_content_id', 'media-source://media_source/local/.'); fd.append('file', datei);
      const r = await this._hass.fetchWithAuth('/api/media_source/local_source/upload', { method: 'POST', body: fd });
      if (!r.ok) throw new Error(r.status + ' ' + (await r.text()).slice(0, 200));
      const j = await r.json(); st.textContent = X.hochOk + ' ' + datei.name;
      this._melde({ ...this._config, image: j.media_content_id });
      this._medienListe(j.media_content_id);
    } catch (e) { st.textContent = X.hochFehler + ' ' + (e.message || e); }
  }
}
if (!customElements.get('energie-dashboard-card')) customElements.define('energie-dashboard-card', EnergieDashboardCard);
if (!customElements.get('energie-dashboard-card-editor')) customElements.define('energie-dashboard-card-editor', EnergieDashboardCardEditor);
window.customCards = window.customCards || [];
if (!window.customCards.some(k => k.type === 'energie-dashboard-card')) window.customCards.push({ type: 'energie-dashboard-card', name: 'Energie Dashboard Card', description: 'Haus als Insel mit Strom, Solar, Akku, Gas und Wasser: live und als Tageswerte', preview: true, documentationURL: 'https://github.com/tlangfe/energie-dashboard' });
console.info(`%c ENERGIE-DASHBOARD-CARD %c ${VERSION} `, 'color:#fff;background:#128f65;font-weight:700', 'color:#128f65;background:#fff;font-weight:700');
