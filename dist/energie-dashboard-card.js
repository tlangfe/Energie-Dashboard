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
const VERSION = '1.0.0-beta.4';
const TXT = {
  de: {
    title: 'Energie', solar: 'Solar', akku: 'Akku', bezug: 'Bezug', eingespeist: 'eingespeist', gas: 'Gas', wasser: 'Wasser', heute: 'heute', Heute: 'Heute',
    laedt: 'lädt', gibt: 'gibt', zuHaus: '→ Haus', zuAkku: '→ Akku', zuHausAkku: '→ Haus + Akku', zuNetz: '→ Netz',
    dash: 'Energie-Dashboard', verlauf: 'Stromverlauf', tagWaehlen: 'Tag wählen', zurueck: 'Einen Tag zurück', vor: 'Einen Tag vor', zuHeute: 'Zurück zu heute',
    pvAkt: 'PV Leistung aktuell', sd: 'Solar direkt ins Haus', inhalt: 'Inhalt', rein: 'rein', raus: 'raus', verlust: 'Verlust', vonRein: 'vom Durchsatz',
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
    pvAkt: 'Solar power now', sd: 'Solar directly to home', inhalt: 'Stored', rein: 'in', raus: 'out', verlust: 'Loss', vonRein: 'of throughput',
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
// Bezug fuer die Prozentangabe: Ladung plus Entnahme aus dem Vorrat, sonst waere ein Tag, der den Vorrat vom Vortag abgibt, scheinbar 100 %
const durchsatz = (rein, k0, k1) => [rein, k0, k1].every(istZahl) ? rein + Math.max(k0 - k1, 0) : null;
// HA liefert beim Hochladen Pfade mit /./; die signierte Adresse dazu lehnt HA mit 401 ab
const medienId = id => String(id).replace(/\/\.\//g, '/');
const verlust = (rein, raus, k0, k1) => [rein, raus, k0, k1].every(istZahl) ? Math.max(rein - raus - (k1 - k0), 0) : null;

// Kreise: feste Positionen in viewBox 0 0 1000 H
const K = { solar: [469, 107], akku: [880, 120], haus: [118, 430], netz: [882, 430], gas: [130, 775], wasser: [870, 775] };
const KREIS_R = 100; // Linien beginnen am Kreisrand
const FLF = { sh: '#c9930a', sa: '#ffc14d', solar: '#ffc14d', dach: '#ffc14d', akku: '#ff9d5c', ac: '#ff9d5c', haus: '#a98cff', netz: '#5db2ff', gas: '#ff7a45', wasser: '#38c6ff' };
const TEMPO = 45; // Gas/Wasser: Einheiten pro Sekunde, bewusst langsam
const tempoW = w => clamp(4 + 2.2 * Math.sqrt(Math.max(w, 0)), 6, 45); // Strom: 7 W = 10, 110 W = 27, ab 340 W = 45
const RUNDE_MIN = 4; // Sekunden je Runde mindestens, sonst zucken kurze Linien
const NUR_BLASE = { sa: 1 }; // Weg liegt auf vorhandenen Punktlinien
const WATT_AN = { sh: 1, sa: 1, akku: 1, gas: 1, wasser: 1 }; // Linien mit Wattzahl ueber der Blase
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
.w.fest .sw,.w.fest .dr,.w.fest .we,.w.fest .pf,.w.fest .kn ha-icon,.w.fest .ri .d,.w.fest .bil::before{animation:none!important}
.w.fest .kn.zw b:first-of-type,.w.fest .t small.lv{display:none}
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
    if (an.solar) halb.push(`<div class="t" ${e(c.solar_power)}>${sonne}<div class="x"><span class="n" id="t_pvn">${esc(T.pvAkt)}</span><b id="t_pv">–</b>${strings.length ? `<small class="lv">${strings.map((s, i) => `<span id="t_s${i}" ${e(s.entity)}></span>`).join(' · ')}</small>` : ''}<small class="ges sd" ${e(c.solar_energy)}>${esc(T.sd)}<span id="t_sd">–</span></small></div></div>`);
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
      const r = await this._hass.callWS({ type: 'media_source/resolve_media', media_content_id: medienId(id), expires: 86400 });
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
      this._tagD = { solar: sum(c.solar_energy), bezug: sum(c.grid_import_energy), einsp: sum(c.grid_export_energy), rein, raus, gas: sum(c.gas_energy), wasser: sum(c.water_energy), inhalt: k1, soc: mittel(c.battery_soc, false), socMax, verlust: verlust(rein, raus, k0, k1), durchsatz: durchsatz(rein, k0, k1) };
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
    return { lab: T.heute, heute: true, solar: this._heute('solar_energy'), bezug: this._heute('grid_import_energy'), einsp: this._heute('grid_export_energy'), rein, raus, gas: this._heute('gas_energy'), wasser: this._heute('water_energy'), inhalt: k, soc, socMax: istZahl(this._socMaxH) ? Math.max(this._socMaxH, soc ?? 0) : null, verlust: verlust(rein, raus, this._inhaltMitternacht(), k), durchsatz: durchsatz(rein, this._inhaltMitternacht(), k) };
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
    if (v) v.innerHTML = `${esc(T.verlust)} <b>${!istZahl(w.verlust) ? '–' : F.whk(w.verlust) + (w.durchsatz >= 0.05 ? ` (${F.zahl(Math.min(w.verlust / w.durchsatz * 100, 100), 0)} % ${esc(T.vonRein)})` : '')}</b>`;
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
    if (!this._d || !this._e || !this._e('ver') || this._e('ver').hidden || this._tag) return; const ch = this._e('chart'), W = ch.clientWidth; if (!W) return;
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
  _fluss(k, an, p, rev, farbe, text) {
    const f = this._e('f_' + k), l = this._e('l_' + k); if (!l) return;
    l.classList.toggle('an', an); if (farbe) l.setAttribute('stroke', farbe);
    if (!f) return; f.classList.toggle('an', an);
    const fz = farbe || FLF[k];
    if (this._tier[k + 'f'] !== fz) { this._tier[k + 'f'] = fz; f.querySelectorAll('.bf').forEach(c => c.setAttribute('fill', fz)); }
    const b = this._fb[k]; if (!b) return;
    const r = !!rev; if (b.rev !== r) { b.rev = r; b.pos = b.rng ? b.rng - b.pos : 0; }
    b.an = an; b.v = k === 'gas' || k === 'wasser' ? TEMPO : tempoW(p);
    // Wattzahl hoechstens alle 3 s aendern, damit sie ruhig bleibt
    if (b.t && an && Date.now() - b.tz > 3000) { b.tz = Date.now(); const w = text ?? this._fmt.watt(p); if (b.t.textContent !== w) b.t.textContent = w; }
  }
  _kn(id, an) { const e = this._e('n_' + id); if (e) e.classList.toggle('ak', !!an); }
  // Durchfluss fuer die Anzeige ueber der Blase; Wasser aus m3/h in L/min, sonst Einheit des Sensors
  _rate(id, liter) {
    const s = id && this._hass.states[id], v = s ? parseFloat(s.state) : NaN; if (!Number.isFinite(v)) return { anz: 0, text: '' };
    const u = s.attributes.unit_of_measurement || '', l = liter && u === 'm³/h', x = l ? v * 1000 / 60 : v, d = l ? (x < 10 ? 1 : 0) : (x < 10 ? 2 : 1);
    return { anz: +x.toFixed(d), text: this._fmt.zahl(x, d) + (l ? ' L/min' : u ? ' ' + u : '') };
  }
  // Gas/Wasser aktiv: angezeigter Durchfluss > 0 und Messwert aktuell; ohne Durchflusssensor: Zaehler hat sich gerade geaendert
  _aktiv(rate, zaehler, maxMin, liter) {
    const h = this._hass;
    if (rate) { const s = h.states[rate]; if (!s || !(this._rate(rate, liter).anz > 0)) return false; return Date.now() - Math.max(Date.parse(s.last_updated), Date.parse(s.last_reported || 0) || 0) < maxMin * 60e3; }
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
    const gasAn = an.gas && this._aktiv(c.gas_rate, c.gas_energy, +c.gas_rate_max_age || 20), wasAn = an.wasser && this._aktiv(c.water_rate, c.water_energy, +c.water_rate_max_age || 15, true);
    const TW = this._tw(); this._akkuGrafik(TW);
    // Kreise
    if (an.solar) { this._txt('v_solar', F.watt(pv)); this._txt('v2_solar', F.kwh(TW.solar)); this._kn('solar', pv > 5); }
    if (an.akku) {
      this._txt('v_akku', soc === null ? '–' : F.zahl(soc, 0) + ' %'); this._txt('u_akku', lad ? T.laedt + ' ' + F.watt(q.chg) : ent ? T.gibt + ' ' + F.watt(q.dis) : T.akku); this._kn('akku', lad || ent);
      { const mx = istZahl(TW.socMax) ? TW.socMax : null, gm = this._e('g_mx'); if (gm) { const L = 2 * Math.PI * 53, d = mx === null ? 0 : clamp(mx, 0, 100) / 100 * L; gm.style.strokeDasharray = `${d.toFixed(1)} ${(L - d).toFixed(1)}`; gm.style.opacity = mx === null ? 0 : 1; } this._txt('t_mx', mx === null ? '' : 'max ' + F.zahl(mx, 0) + ' %'); }
      const arc = this._e('g_arc'); if (arc && soc !== null) { const L = 2 * Math.PI * 43, d = clamp(soc, 0, 100) / 100 * L; arc.style.strokeDasharray = `${d.toFixed(1)} ${(L - d).toFixed(1)}`; arc.style.stroke = soc < 20 ? '#ff6b4a' : soc < 50 ? '#ffc14d' : '#3fe09f'; }
      const ic = this._e('i_akku'); if (ic && soc !== null && !this._tag) { const st = lad ? 'mdi:battery-charging-' : 'mdi:battery-'; const lv = clamp(Math.round(soc / 10) * 10, 10, 100); const nm = lv === 100 && !lad ? 'mdi:battery' : st + lv; if (ic.getAttribute('icon') !== nm) ic.setAttribute('icon', nm); }
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
    if (an.gas) this._fluss('gas', gasAn, 200, false, null, this._rate(c.gas_rate).text); if (an.wasser) this._fluss('wasser', wasAn, 200, false, null, this._rate(c.water_rate, true).text);
    // Kachel PV
    if (an.solar) {
      this._txt('t_pvn', T.pvAkt); this._txt('t_pv', F.watt(pv)); (this._strings || []).forEach((s, i) => this._txt('t_s' + i, s.name + ' ' + F.watt(g(s.entity))));
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
    const wr = this.shadowRoot.querySelector('.w'); if (wr) wr.classList.toggle('fest', !!this._tag);
    if (this._tag) this._festAnzeige(TW);
  }
  // Frueherer Tag: keine Bewegung, keine Live-Werte, nur die gespeicherten Werte dieses Tages
  _festAnzeige(w) {
    const c = this._c, an = this._an, F = this._fmt, T = this._t, z = v => istZahl(v) ? v : null;
    ['sh', 'sa', 'solar', 'dach', 'akku', 'ac', 'haus', 'netz', 'gas', 'wasser'].forEach(k => this._fluss(k, false, 0));
    ['solar', 'akku', 'haus', 'netz', 'gas', 'wasser'].forEach(k => this._kn(k, false));
    const soc = z(w.soc), rein = z(w.rein), raus = z(w.raus), bezug = z(w.bezug), einsp = z(w.einsp), solar = z(w.solar);
    this._txt('stand', w.lab);
    if (an.solar) {
      this._txt('u_solar', T.solar + ' ' + w.lab); this._txt('t_pvn', T.solar + ' ' + w.lab); this._txt('t_pv', F.kwh(solar));
      const dr = this._e('g_sonne'), sk = this._e('g_sk'), hell = (solar || 0) > 0; if (dr) dr.style.opacity = hell ? 1 : .25; if (sk) { sk.setAttribute('fill', hell ? '#f4b81f' : '#4a5763'); sk.setAttribute('stroke', hell ? '#c98500' : '#6e7f8c'); }
    }
    if (an.akku) {
      const fb = soc === null ? '#5b6b7c' : soc < 20 ? '#e4573d' : soc < 50 ? '#eab530' : '#23b27c';
      this._txt('v_akku', soc === null ? '–' : F.zahl(soc, 0) + ' %'); this._txt('u_akku', T.akku + ' ' + w.lab);
      const ua = this._e('u_akku'); if (ua && c.battery_soc) ua.dataset.e = c.battery_soc;
      const arc = this._e('g_arc'); if (arc) { const L = 2 * Math.PI * 43, d = soc === null ? 0 : clamp(soc, 0, 100) / 100 * L; arc.style.strokeDasharray = `${d.toFixed(1)} ${(L - d).toFixed(1)}`; arc.style.stroke = soc === null ? 'transparent' : soc < 20 ? '#ff6b4a' : soc < 50 ? '#ffc14d' : '#3fe09f'; }
      const ic = this._e('i_akku'); if (ic && soc !== null) { const lv = clamp(Math.round(soc / 10) * 10, 10, 100), nm = lv === 100 ? 'mdi:battery' : 'mdi:battery-' + lv; if (ic.getAttribute('icon') !== nm) ic.setAttribute('icon', nm); }
      this._txt('t_akn', T.akku + ' ' + (soc === null ? w.lab : F.zahl(soc, 0) + ' %')); this._txt('t_ak', z(w.socMax) === null ? '–' : 'max ' + F.zahl(w.socMax, 0) + ' %'); this._txt('t_aks', T.inhalt + ' ' + F.kwh(z(w.inhalt)));
      const fl = this._e('g_fl'), we = this._e('g_we'); if (fl) fl.style.transform = `translateY(${42 - clamp(soc ?? 0, 0, 100) * .44}px)`; if (we) we.setAttribute('fill', fb);
    }
    const sd = solar === null ? null : Math.max(solar - (an.akku ? (rein || 0) : 0) - Math.max((einsp || 0) - (an.akku ? (raus || 0) : 0), 0), 0);
    if (an.solar && an.akku) { this._txt('t_ge', sd === null ? '–' : F.kwh(sd + (raus || 0))); [['g_p1', sd > 0], ['g_p2', raus > 0]].forEach(([id, a]) => { const e = this._e(id); if (e) e.style.opacity = a ? 1 : .15; }); }
    this._txt('t_ne', bezug === null ? '–' : F.kwh(bezug) + ' ' + T.bezug); const zg = this._e('g_z'); if (zg) zg.style.transform = 'rotate(0deg)';
    const haus = bezug === null ? null : Math.max(bezug + (an.solar ? (solar || 0) : 0) - (einsp || 0) - (an.akku ? (rein || 0) - (raus || 0) : 0), 0), netto = an.akku && (rein !== null || raus !== null) ? (raus || 0) - (rein || 0) : null;
    const wer = { bezug: bezug || 0, pv: solar || 0, akku: Math.abs(netto || 0), haus: haus || 0, einsp: einsp || 0 }, mx = Math.max(.1, ...Object.values(wer));
    for (const [k, v] of Object.entries(wer)) { const u = this._e('ba_' + k); if (u) u.style.width = (v / mx * 100).toFixed(1) + '%'; }
    this._txt('bv_bezug', F.kwh(bezug)); this._txt('bv_pv', F.kwh(solar)); this._txt('bv_akku', netto === null ? '–' : netto > 0 ? F.whk(netto) + ' ' + T.raus : netto < 0 ? F.whk(-netto) + ' ' + T.rein : '0 Wh'); this._txt('bv_haus', F.kwh(haus)); this._txt('bv_einsp', F.kwh(einsp));
    this._txt('t_bin', T.bilanz + ' ' + w.lab); const bk = this._e('t_bil'); if (bk) bk.classList.remove('def');
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
    sec: { vorhanden: 'Was ist vorhanden', strom: 'Strom (Netz und Haus)', solar: 'Solar', akku: 'Akku', gas: 'Gas', wasser: 'Wasser', bild: 'Hausbild', anzeige: 'Anzeige', auswertung: 'Auswertung und Speichern' },
    gespeichert: 'Gespeicherte Auswertung', gespeichertText: 'Mit „Auswertung in Home Assistant speichern“ legt die Karte Langzeitwerte mit der Kennung energie_auswertung:* an. Ohne diesen Schalter schreibt sie nichts. Hier lassen sich alle gespeicherten Werte wieder löschen (auch unter Entwicklerwerkzeuge › Statistik).', loeschen: 'Gespeicherte Auswertungswerte löschen', loeschenFrage: 'Alle gespeicherten Werte energie_auswertung:* endgültig löschen?', geloescht: 'Gelöscht.',
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
    sec: { vorhanden: 'What do you have', strom: 'Power (grid and home)', solar: 'Solar', akku: 'Battery', gas: 'Gas', wasser: 'Water', bild: 'House image', anzeige: 'Display', auswertung: 'Analysis and saving' },
    gespeichert: 'Stored analysis', gespeichertText: 'With “Save analysis in Home Assistant” the card creates long-term statistics with the id energie_auswertung:*. Without this switch it writes nothing. All stored values can be deleted here (also under Developer tools › Statistics).', loeschen: 'Delete stored analysis values', loeschenFrage: 'Permanently delete all stored values energie_auswertung:*?', geloescht: 'Deleted.',
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
    output_power: ['Ausgang des Speichers (W/kW)', 'Optional, nur Auswertung: Leistung, mit der der Speicher regelt (z. B. Wechselrichter-Ausgang). Leer = Entlade-Leistung. Linie „Akku-Ausgang“ und Bewertung der Lastsprünge.'],
    store_statistics: ['Auswertung in Home Assistant speichern', 'Zustimmung: Die Karte speichert für jeden abgeschlossenen Tag Auswertungswerte als Langzeitstatistik (energie_auswertung:*), damit sie die Sekundenwerte überdauern. Ausgeschaltet schreibt sie nichts.'],
    raw_days: ['Sekundenwerte vorhanden (Tage)', 'Wie lange Home Assistant Rohdaten aufhebt (recorder: purge_keep_days, Standard 10). Ältere Tage werden nicht mehr ausgewertet.'],
    start_date: ['Auswertung ab', 'Optional: erster Tag der Auswertung, z. B. nach einem Zählerwechsel. Leer = letzte 30 Tage.'],
    show_regulation: ['Regelung bewerten', 'Nur sinnvoll für Akkus mit Nulleinspeisungs-Regelung. Aus: nur Einspeisung, Akku-Bilanz und Verlauf.'],
    band_w: ['Toleranzband (W)', 'Netz gilt als ausgeregelt innerhalb ±diesem Wert; Einspeisung darunter zählt als Spitze. Standard 50.'], jump_w: ['Lastsprung ab (W)', 'Ab dieser Änderung in 3 s wird ein Lastsprung gewertet. Standard 120.'],
    inverter_max_w: ['Höchstleistung Speicher (W)', 'Größte Ausgangsleistung des Speichers; nötig, um „ging mit“ zu bewerten.'], max_rate_s: ['Netz-Sensor höchstens alle (s)', 'Liefert der Netz-Sensor seltener, werden Reaktionszeiten ausgeblendet. Standard 2,5.'],
    show_cause: ['Vermutete Ursache anzeigen (Test)', 'Ordnet Einspeise-Spitzen grob einer Ursache zu (Akku-Start, Last weg, Schwankung). Nur ein Anhaltspunkt, für andere Geräte nicht geprüft.'],
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
    output_power: ['Storage output (W/kW)', 'Optional, analysis only: power the storage regulates with (e.g. inverter output). Empty = discharge power. Line “Battery output” and rating of load steps.'],
    store_statistics: ['Save analysis in Home Assistant', 'Consent: the card stores analysis values for every completed day as long-term statistics (energie_auswertung:*) so they outlive the second values. When off it writes nothing.'],
    raw_days: ['Second values kept (days)', 'How long Home Assistant keeps raw data (recorder: purge_keep_days, default 10). Older days are not analysed any more.'],
    start_date: ['Analyse from', 'Optional: first day of the analysis, e.g. after a meter change. Empty = last 30 days.'],
    show_regulation: ['Rate regulation', 'Only useful for batteries with zero-export regulation. Off: only export, battery balance and history.'],
    band_w: ['Tolerance band (W)', 'The grid counts as settled within ± this value; export below counts as a peak. Default 50.'], jump_w: ['Load step from (W)', 'A change of at least this within 3 s counts as a load step. Default 120.'],
    inverter_max_w: ['Storage maximum power (W)', 'Largest output of the storage; needed to rate “followed”.'], max_rate_s: ['Grid sensor at most every (s)', 'If the grid sensor reports less often, reaction times are hidden. Default 2.5.'],
    show_cause: ['Show probable cause (test)', 'Roughly assigns export peaks to a cause (battery start, load dropped, fluctuation). Only a hint, not checked for other devices.'],
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
  get _auswertung() { return String((this._config || {}).type || '').includes('auswertung'); }
  get _x() { return ED[this._l]; }
  _daten() {
    const c = { ...DEFAULTS, ...(this._auswertung ? A_DEFAULTS : {}), ...this._config }, d = { ...c };
    (Array.isArray(c.solar_strings) ? c.solar_strings : []).slice(0, 4).forEach((s, i) => { d['solar_string_' + (i + 1)] = typeof s === 'string' ? s : s.entity; d['solar_string_' + (i + 1) + '_name'] = typeof s === 'string' ? '' : s.name || ''; });
    delete d.solar_strings; delete d.type;
    // Fuer den Fall, dass ha-form "flatten" nicht kennt: Bereiche zusaetzlich verschachtelt fuellen
    const flach = { ...d }; for (const s of this._schema()) if (s.type === 'expandable' && s.name) d[s.name] = flach;
    return d;
  }
  _schema() {
    const c = { ...DEFAULTS, ...(this._config || {}) }, x = this._x.sec, sec = (name, title, icon, schema, offen) => ({ type: 'expandable', name, title, icon, flatten: true, expanded: !!offen, schema });
    const AW = this._auswertung;
    const s = [
      sec('sec_vorhanden', x.vorhanden, 'mdi:toggle-switch-outline', [{ type: 'grid', name: '', schema: (AW ? ['show_solar', 'show_battery'] : ['show_solar', 'show_battery', 'show_gas', 'show_water']).map(n => ({ name: n, selector: BOOL })) }], true),
      sec('sec_strom', x.strom, 'mdi:transmission-tower', [{ name: 'grid_power', selector: ENT }, { name: 'grid_invert', selector: BOOL }, { name: 'grid_import_energy', selector: ENT }, { name: 'grid_export_energy', selector: ENT }, { name: 'home_power', selector: ENT }, { name: 'grid_import_power', selector: ENT }, { name: 'grid_export_power', selector: ENT }]),
    ];
    if (c.show_solar !== false) s.push(sec('sec_solar', x.solar, 'mdi:solar-power-variant-outline', [{ name: 'solar_power', selector: ENT }, { name: 'solar_energy', selector: ENT }, ...[1, 2, 3, 4].map(i => ({ type: 'grid', name: '', schema: [{ name: 'solar_string_' + i, selector: ENT }, { name: 'solar_string_' + i + '_name', selector: { text: {} } }] }))]));
    if (c.show_battery !== false) s.push(sec('sec_akku', x.akku, 'mdi:battery-outline', [{ name: 'battery_soc', selector: ENT }, { name: 'battery_power', selector: ENT }, { name: 'battery_invert', selector: BOOL }, { name: 'battery_charge_power', selector: ENT }, { name: 'battery_discharge_power', selector: ENT }, { name: 'battery_energy_in', selector: ENT }, { name: 'battery_energy_out', selector: ENT }, { name: 'battery_capacity', selector: { number: { min: 0, max: 200, step: 0.01, mode: 'box', unit_of_measurement: 'kWh' } } }, { name: 'battery_content', selector: ENT }, ...(AW ? [{ name: 'output_power', selector: ENT }] : [])]));
    if (AW) {
      s.push(sec('sec_auswertung', x.auswertung, 'mdi:chart-timeline-variant', [{ name: 'store_statistics', selector: BOOL }, { name: 'raw_days', selector: { number: { min: 1, max: 60, step: 1, mode: 'box', unit_of_measurement: this._l === 'de' ? 'Tage' : 'days' } } }, { name: 'start_date', selector: { date: {} } },
        { name: 'show_regulation', selector: BOOL }, { type: 'grid', name: '', schema: [{ name: 'band_w', selector: { number: { min: 5, max: 500, step: 5, mode: 'box', unit_of_measurement: 'W' } } }, { name: 'jump_w', selector: { number: { min: 20, max: 2000, step: 10, mode: 'box', unit_of_measurement: 'W' } } }, { name: 'inverter_max_w', selector: { number: { min: 50, max: 20000, step: 50, mode: 'box', unit_of_measurement: 'W' } } }, { name: 'max_rate_s', selector: { number: { min: 0.5, max: 30, step: 0.5, mode: 'box', unit_of_measurement: 's' } } }] }, { name: 'show_cause', selector: BOOL }]));
      s.push(sec('sec_anzeige', x.anzeige, 'mdi:palette-outline', [{ name: 'title', selector: { text: {} } }, { name: 'language', selector: { select: { mode: 'dropdown', options: [{ value: 'auto', label: 'Auto' }, { value: 'de', label: 'Deutsch' }, { value: 'en', label: 'English' }] } } }]));
      return s;
    }
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
    if (this._auswertung) { for (const [k, d] of Object.entries(A_DEFAULTS)) if (n[k] === d) delete n[k]; for (const k of ['show_gas', 'show_water', 'image', 'image_shape', 'image_size', 'image_x', 'image_y', 'dashboard_link', 'dashboard_link_text', 'max_width', 'solar_max', 'grid_max']) delete n[k]; for (const k of Object.keys(n)) if (k.startsWith('anchor_')) delete n[k]; }
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
    const u = el.querySelector('#ueb'); if (u) u.onclick = () => { const n = { ...this._config, ...v.config }; if (this._auswertung) for (const k of ['show_gas', 'show_water', 'gas_energy', 'gas_rate', 'water_energy', 'water_rate']) delete n[k]; this._vorschlag = null; this._hinweisNeu = false; this._melde(n); this._einrichtung(); };
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
    const zeilen = prueflisteZeilen(this._auswertung ? { ...c, show_gas: false, show_water: false } : c);
    if (this._auswertung && c.output_power) zeilen.push(['output_power', 'o']);
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
    if (this._auswertung) { if (el.dataset.fertig) return; el.dataset.fertig = 1;
      el.innerHTML = `<h3>${esc(X.gespeichert)}</h3><p>${esc(X.gespeichertText)}</p><div class="reihe"><button class="knopf zweit" id="loesch">${esc(X.loeschen)}</button></div><div class="st" id="lst"></div>`;
      el.querySelector('#loesch').onclick = async () => { if (!confirm(X.loeschenFrage)) return; const st = el.querySelector('#lst'); try { await this._hass.callWS({ type: 'recorder/clear_statistics', statistic_ids: A_IDS }); st.textContent = X.geloescht; } catch (e) { st.textContent = X.hochFehler + ' ' + (e.message || e.code || e); } };
      return; }
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
      this._melde({ ...this._config, image: medienId(j.media_content_id) });
      this._medienListe(medienId(j.media_content_id));
    } catch (e) { st.textContent = X.hochFehler + ' ' + (e.message || e); }
  }
}
// ===================== Zweite Karte: Energie Auswertung (Pro) =====================
// Schreibt nur mit store_statistics: true eigene Langzeitwerte (energie_auswertung:*) ueber recorder/import_statistics.
const A_QUELLE = 'energie_auswertung';
const A_DEFAULTS = { store_statistics: false, raw_days: 10, start_date: '', band_w: 50, jump_w: 120, show_regulation: true, output_power: '', inverter_max_w: 800, show_cause: false, max_rate_s: 2.5 };
const A_STAND = 3; // Version der gespeicherten Tagesauswertung
const A_STATS = { aktiv_h: 'h', band_pct: '%', reaktion_s: 's', ausregel_s: 's', ereignisse: 'Stk', tiefste_w: 'W', laengste_s: 's', anz_spitzen: 'Stk', stand: 'Stk' };
const A_STUNDE = { spitze_w: 'W', spitze_s: 's', sprung_w: 'W', sprung_s: 's' };
const A_IDS = [...Object.keys(A_STATS), ...Object.keys(A_STUNDE)].map(k => `${A_QUELLE}:${k}`);
const A_FARBE = { netz: '#5db2ff', ac: '#2fd08f', haus: '#ffb020', rein: '#b69cff', raus: '#ff8a5c', einsp: '#d55181' };
const TXT_A = {
  de: {
    titel: 'Energie Auswertung', sub: 'Wie gut der Akku deinen Stromverbrauch ausregelt und was trotzdem ins Netz geht.', subOhne: 'Was ins Netz geht und wie Netz und Haus verlaufen.',
    einsp: 'Trotzdem eingespeist', einspOhne: 'Eingespeist', heute: 'Heute', woche: 'Diese Woche', monat: 'Dieser Monat', seitMn: 'seit Mitternacht', seit: 'seit',
    akku: 'Akku: rein und raus', reinRaus: 'rein / raus', verlust: 'Verlust', vonRein: 'vom Durchsatz',
    verlustText: 'Verlust = Akku rein − Akku raus − Änderung des Akku-Inhalts, aus denselben Zählern wie in der Hauptkarte. Der Prozentwert bezieht sich auf alles, was durch den Akku ging: rein plus Entnahme aus dem Vorrat. Er enthält auch den Eigenverbrauch des Geräts; bei kleinen Tageswerten schwankt er, weil der Inhalt meist in 1-%-Schritten gemeldet wird.',
    verlauf: 'Netz, Akku und Haus', verlaufOhne: 'Netz und Haus', tagWaehlen: 'Tag wählen', zurueck: 'Einen Tag zurück', vor: 'Einen Tag vor',
    f15: '15 Min', f1: '1 Std', f6: '6 Std', fH: 'Heute', fW: 'Woche', fM: 'Monat',
    netz: 'Netz', ac: 'Akku-Ausgang', haus: 'Haus', rein: 'Akku rein', raus: 'Akku raus', reinraus: 'Akku rein / raus', unterNull: 'Einspeisung (unter null)', zurueckRaus: 'raus',
    hRoh: 'Jede Linie zeigt den tiefsten und höchsten Wert je Abschnitt, keine Spitze geht verloren. Rot ist Einspeisung. Hinweise: oben Lastsprung und Zeit bis ausgeregelt (grau: Akku ging nicht mit), unten Einspeisung und Dauer.',
    hStat: 'Pro Stunde: Die Netzlinie zeigt tiefsten und höchsten Wert, die anderen Linien den Mittelwert.', hStatGesp: ' Hinweise: stärkste Spitze und stärkster gewerteter Lastsprung je Stunde aus den gespeicherten Auswertungen.',
    hTag: '{d}, ganzer Tag. Tippe unten auf eine Spitze, dann siehst du sie sekundengenau.', hAlt: 'Für den {d} hat HA keine Sekundenwerte mehr. Du siehst Stundenwerte.', hZoom: 'Ausschnitt um {t} Uhr, sekundengenau. Mit den Tasten oben geht es zurück.',
    lade: 'Lade …', fehler: 'Konnte nicht geladen werden.',
    regel: 'Wie schnell wird geregelt?', rB: 'Reaktion beginnt nach', rF: 'Ausgeregelt nach', rQ: 'Netz innerhalb ±{b} W', rE: 'Takt Netz-Sensor', rT: 'Tiefste Einspeisung', rL: 'Längste Einspeisung',
    gewertet: '{n} Lastsprünge gewertet', gewertet1: '1 Lastsprung gewertet', keinSprung: 'kein gewerteter Sprung', nichtFertig: '{n} × nicht in 2 Min', kurz: '{n} kurze Spitzen nicht gewertet', waehrend: 'während {h} h Akku-Betrieb', akkuNicht: 'Akku hat nicht geliefert',
    taktS: 'neuer Netzwert in HA; Akku etwa alle {a} s', keine: 'keine', nichtsUnter: 'nichts unter −{b} W', um: 'um {t}', spitzenZus: '{n} Spitzen, zusammen {s} s',
    zuLangsam: 'Der Netz-Sensor liefert nur etwa alle {t} s einen Wert. Reaktions- und Ausregelzeiten brauchen etwa einen Wert pro Sekunde und werden deshalb nicht angezeigt.',
    lastspr: 'Lastsprünge im Akku-Betrieb', spitzen: 'Einspeise-Spitzen', uhr: 'Uhrzeit', sprung: 'Sprung', reaktion: 'Reaktion', ausgeregelt: 'Ausgeregelt', akkuSp: 'Akku', tiefster: 'Tiefster Wert', dauer: 'Dauer', eingespeist: 'Eingespeist', vermutlich: 'Vermutlich',
    gingMit: 'ging mit', gingNicht: 'ging nicht mit', nichtIn2: 'nicht in 2 Min', keinLs: 'kein Lastsprung im Akku-Betrieb.', keineEin: 'keine Einspeisung unter −{b} W.', keineSek: 'Für diesen Tag keine Sekundenwerte.',
    lsText: 'Spitzen, während der Akku nichts liefert, stehen hier nicht: Dann regelt nichts, also gibt es keine Zeit zu messen. „Ging nicht mit“ heißt meist, dass das Gerät von selbst wieder ausging.',
    spText: 'Dauer: so lange ging Strom ins Netz, bis die Regelung es abgefangen hat. Tippe auf eine Zeile, dann springt das Diagramm zu dieser Stelle. Gezählt wird alles unter −{b} W.',
    artStart: 'Akku-Start', artWeg: 'Last weg', artSchw: 'Schwankung',
    tage: 'Tagesverlauf', wischen: 'Mehr Spalten: Tabelle seitlich wischen.', tag: 'Tag', aktiv: 'Akku aktiv', innerhalb: 'innerhalb ±{b} W', tiefste: 'Tiefste', laengste: 'Längste', anz: 'Spitzen', nochKeine: 'Noch keine Tageswerte.',
    tabText: 'Reaktion: bis das Netz nach einem Lastsprung um 20 % fällt. Ausgeregelt: bis es 5 Sekunden innerhalb von ±{b} W bleibt. Tippe auf einen Tag, dann zeigt ihn das Diagramm.',
    speichernAn: 'Speichern ist eingeschaltet: Abgeschlossene Tage werden beim Öffnen der Karte ausgewertet und in Home Assistant als energie_auswertung:* gespeichert. Das geht nur für Tage, für die HA noch Sekundenwerte hat (etwa {r} Tage). Wird die Karte länger nicht geöffnet, fehlen diese Tage.',
    speichernAus: 'Speichern ist ausgeschaltet: Regelwerte vergangener Tage gibt es nur, solange Home Assistant ihre Sekundenwerte hat (etwa {r} Tage). Dauerhaft speichern lässt sich die Auswertung im Karteneditor einschalten.',
    keinAkku: 'Ohne Akku gibt es keine Regelung zu bewerten. Einspeisung und Verlauf werden trotzdem gezeigt.',
    willkommen: 'Die Auswertung ist noch nicht eingerichtet. Karte bearbeiten und „Sensoren automatisch erkennen“ wählen.',
    netzRaus: 'raus', alt: 'Ältere Tage', speichert: 'Speichere {d} …', weitere: '… und {n} ältere. Im Diagramm (Heute) sind alle markiert.',
  },
  en: {
    titel: 'Energy analysis', sub: 'How well the battery balances your consumption and what still goes to the grid.', subOhne: 'What goes to the grid and how grid and home develop.',
    einsp: 'Still exported', einspOhne: 'Exported', heute: 'Today', woche: 'This week', monat: 'This month', seitMn: 'since midnight', seit: 'since',
    akku: 'Battery: in and out', reinRaus: 'in / out', verlust: 'Loss', vonRein: 'of throughput',
    verlustText: 'Loss = battery in − battery out − change of stored energy, from the same meters as the main card. The percentage is relative to everything that went through the battery: in plus energy taken from storage. It includes the device’s own consumption; small daily values fluctuate because the content is usually reported in 1 % steps.',
    verlauf: 'Grid, battery and home', verlaufOhne: 'Grid and home', tagWaehlen: 'Choose day', zurueck: 'One day back', vor: 'One day forward',
    f15: '15 min', f1: '1 h', f6: '6 h', fH: 'Today', fW: 'Week', fM: 'Month',
    netz: 'Grid', ac: 'Battery output', haus: 'Home', rein: 'Battery in', raus: 'Battery out', reinraus: 'Battery in / out', unterNull: 'Export (below zero)', zurueckRaus: 'out',
    hRoh: 'Each line shows the lowest and highest value per segment, no peak gets lost. Red is export. Labels: above load step and time until settled (grey: battery did not follow), below export and duration.',
    hStat: 'Per hour: the grid line shows lowest and highest value, the other lines the mean.', hStatGesp: ' Labels: strongest peak and strongest rated load step per hour from the stored analysis.',
    hTag: '{d}, whole day. Tap a peak below to see it second by second.', hAlt: 'Home Assistant no longer has second values for {d}. You see hourly values.', hZoom: 'Detail around {t}, second by second. Use the buttons above to go back.',
    lade: 'Loading …', fehler: 'Could not be loaded.',
    regel: 'How fast is it regulated?', rB: 'Reaction starts after', rF: 'Settled after', rQ: 'Grid within ±{b} W', rE: 'Grid sensor rate', rT: 'Lowest export', rL: 'Longest export',
    gewertet: '{n} load steps rated', gewertet1: '1 load step rated', keinSprung: 'no rated step', nichtFertig: '{n} × not within 2 min', kurz: '{n} short peaks not rated', waehrend: 'during {h} h battery operation', akkuNicht: 'battery did not deliver',
    taktS: 'new grid value in HA; battery about every {a} s', keine: 'none', nichtsUnter: 'nothing below −{b} W', um: 'at {t}', spitzenZus: '{n} peaks, {s} s in total',
    zuLangsam: 'The grid sensor only reports about every {t} s. Reaction and settling times need about one value per second and are therefore not shown.',
    lastspr: 'Load steps during battery operation', spitzen: 'Export peaks', uhr: 'Time', sprung: 'Step', reaktion: 'Reaction', ausgeregelt: 'Settled', akkuSp: 'Battery', tiefster: 'Lowest', dauer: 'Duration', eingespeist: 'Exported', vermutlich: 'Probably',
    gingMit: 'followed', gingNicht: 'did not follow', nichtIn2: 'not within 2 min', keinLs: 'no load step during battery operation.', keineEin: 'no export below −{b} W.', keineSek: 'No second values for this day.',
    lsText: 'Peaks while the battery delivers nothing are not listed: nothing regulates then, so there is no time to measure. “Did not follow” usually means the appliance switched off by itself.',
    spText: 'Duration: how long power went to the grid until regulation caught it. Tap a row to jump the chart there. Everything below −{b} W counts.',
    artStart: 'battery start', artWeg: 'load dropped', artSchw: 'fluctuation',
    tage: 'Daily overview', wischen: 'More columns: swipe the table sideways.', tag: 'Day', aktiv: 'Battery active', innerhalb: 'within ±{b} W', tiefste: 'Lowest', laengste: 'Longest', anz: 'Peaks', nochKeine: 'No daily values yet.',
    tabText: 'Reaction: until the grid drops by 20 % after a load step. Settled: until it stays within ±{b} W for 5 seconds. Tap a day to show it in the chart.',
    speichernAn: 'Saving is on: completed days are analysed when the card is opened and stored in Home Assistant as energie_auswertung:*. This only works for days Home Assistant still has second values for (about {r} days). If the card is not opened for longer, those days are missing.',
    speichernAus: 'Saving is off: regulation values of past days are only available while Home Assistant keeps their second values (about {r} days). Permanent saving can be turned on in the card editor.',
    keinAkku: 'Without a battery there is no regulation to rate. Export and history are still shown.',
    willkommen: 'The analysis is not set up yet. Edit the card and choose “Detect sensors automatically”.',
    netzRaus: 'out', alt: 'Older days', speichert: 'Saving {d} …', weitere: '… and {n} older ones. All are marked in the chart (Today).',
  },
};
const tpl = (s, o) => String(s).replace(/\{(\w+)\}/g, (_, k) => o[k] ?? '');
const median = a => { if (!a.length) return null; const s = [...a].sort((x, y) => x - y), m = s.length >> 1; return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2; };
const montag = () => { const x = mitternacht(); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x; };
const monatsanfang = () => { const x = mitternacht(); x.setDate(1); return x; };
// Sekundenraster: letzter bekannter Wert gilt weiter
function raster(a, von, n) { const o = new Array(n).fill(null); let i = 0, cur = null; for (let s = 0; s < n; s++) { const t = von + s; while (i < a.length && a[i][0] <= t) { cur = a[i][1]; i++; } o[s] = cur; } return o; }
// Mehrere Reihen zu einer verknuepfen (Stufenfunktion): fn bekommt die jeweils letzten Werte
function verknuepfe(reihen, fn) {
  const ts = [...new Set(reihen.flatMap(r => r.map(p => p[0])))].sort((a, b) => a - b), idx = reihen.map(() => 0), cur = reihen.map(() => null), o = [];
  for (const t of ts) { reihen.forEach((r, k) => { while (idx[k] < r.length && r[idx[k]][0] <= t) { cur[k] = r[idx[k]][1]; idx[k]++; } }); const v = fn(cur); o.push([t, v === undefined ? null : v]); }
  return o;
}
const taktVon = (a, von) => { const d = []; for (let i = 1; i < a.length; i++) if (a[i][1] !== null && a[i - 1][1] !== null && a[i][0] >= von) d.push(a[i][0] - a[i - 1][0]); return median(d); };
// Jede Einspeisung unter -band aus den Rohwerten: Beginn, tiefster Wert, Dauer, vermutliche Art
function einspeiseSpitzen(netz, ac, von, bis, band) {
  const o = []; let cur = null, vorher = null, ai = 0, av = null;
  const acBei = t => { while (ai < ac.length && ac[ai][0] <= t) { av = ac[ai][1]; ai++; } return av; };
  for (let i = 0; i < netz.length; i++) {
    const [t, v] = netz[i]; if (t < von || t > bis || v === null) continue;
    if (cur) { const dt = Math.min(t - cur.ende, 120); if (cur.letzt < 0) cur.wh += -cur.letzt * dt / 3600; }
    if (v < -band) { if (!cur) cur = { t, tief: v, vorher, a: acBei(t), ende: t, wh: 0, letzt: v }; if (v < cur.tief) cur.tief = v; cur.ende = t; cur.letzt = v; }
    else if (cur) { cur.dauer = t - cur.t; o.push(cur); cur = null; }
    vorher = v;
  }
  if (cur) { cur.dauer = bis - cur.t; cur.laeuft = true; o.push(cur); }
  for (const e of o) e.art = e.a === null || e.a === undefined || e.a <= 5 ? 'artStart' : e.vorher !== null && e.vorher - e.tief >= 300 ? 'artWeg' : 'artSchw';
  return o;
}
// Regelverhalten aus Sekundenwerten. Gewertet wird ein Lastsprung nur, wenn der Akku-Ausgang mitgeht.
function auswerten(netz, ac, von, bis, op) {
  const BAND = op.band, SPRUNG = op.sprung; von = Math.floor(von); bis = Math.floor(bis); const n = Math.max(bis - von, 0);
  const res = { ein: [], aktiv_s: 0, imBand: 0, reaktion: [], ausregel: [], gewertet: 0, spitzen: 0, nichtFertig: 0, liste: [], takt: taktVon(netz, von), taktA: taktVon(ac, von) };
  if (n < 10) return res;
  const G = raster(netz, von, n), A = raster(ac, von, n);
  for (let s = 0; s < n; s++) if (A[s] !== null && A[s] > 5 && G[s] !== null) { res.aktiv_s++; if (Math.abs(G[s]) <= BAND) res.imBand++; }
  res.ein = einspeiseSpitzen(netz, ac, von, bis, BAND);
  res.schnell = res.takt !== null && res.takt <= op.maxTakt;
  if (!res.schnell) return res; // zu langsamer Sensor: keine erfundenen Reaktionszeiten
  const fenster = clamp(Math.round((res.taktA || 20) * 2.25), 10, 90);
  let letzt = -999;
  for (let s = 10; s < n - 130; s++) {
    if (s - letzt <= 60 || G[s] === null || G[s - 3] === null || !(A[s] > 5) || !(A[s - 3] > 5)) continue;
    const sp = G[s] - G[s - 3];
    if (Math.abs(sp) < SPRUNG || Math.abs(G[s - 3]) > BAND * 1.6) continue;
    const vz = sp > 0 ? 1 : -1; let pk = 0, tp = 0;
    for (let k = 0; k <= 6; k++) { const v = (G[s + k] ?? 0) * vz; if (v > pk) { pk = v; tp = k; } }
    if (pk < SPRUNG * .8) continue;
    letzt = s;
    const a0 = A[s - 3] ?? 0, frei = vz > 0 ? Math.max(op.maxW - a0, 0) : a0; let am = 0;
    for (let k = 5; k <= fenster; k++) { const d = ((A[s + k] ?? a0) - a0) * vz; if (d > am) am = d; }
    const kurz = am < Math.min(pk, frei) * .4;
    let begin = null, fertig = null;
    for (let k = tp; k <= 120; k++) { if (begin === null && (G[s + k] ?? pk) * vz <= pk * .8) begin = k; let ok = true; for (let j = 0; j < 5; j++) { const v = G[s + k + j]; if (v === null || v === undefined || Math.abs(v) > BAND) { ok = false; break; } } if (ok) { fertig = k; break; } }
    res.liste.push({ t: von + s, pk, begin, fertig, vz, kurz });
    if (kurz) { res.spitzen++; continue; }
    res.gewertet++; if (begin !== null) res.reaktion.push(begin); if (fertig !== null) res.ausregel.push(fertig); else res.nichtFertig++;
  }
  return res;
}
const CSS_A = `
:host{display:block}
.w{--ink:#eef3f8;--mut:#a7b6c5;--wei:#172232;--lin:rgba(255,255,255,.1);background:radial-gradient(120% 70% at 50% 0,#1c2a3c 0,#141e2c 60%,#0f1723 100%);color:var(--ink);border-radius:18px;padding:clamp(10px,2cqw,18px);margin:0 auto;max-width:1040px;box-sizing:border-box;width:100%;border:1px solid rgba(255,255,255,.08);font-family:var(--ha-font-family-body,Roboto,system-ui,sans-serif);container-type:inline-size;font-variant-numeric:tabular-nums;display:flex;flex-direction:column;gap:12px}
h1{margin:0;font-size:clamp(17px,3cqw,22px);font-weight:700;line-height:1.2}
h2{margin:0;font-size:14px;font-weight:700}
.sub{font-size:12px;color:var(--mut);margin:0;line-height:1.4;max-width:75ch}
.bx{background:var(--wei);border:1px solid var(--lin);border-radius:13px;padding:12px;display:flex;flex-direction:column;gap:10px;min-width:0}
.k3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
@container (max-width:420px){.k3{grid-template-columns:1fr}}
.kp{background:rgba(255,255,255,.05);border-radius:10px;padding:9px 10px;min-width:0;display:flex;flex-direction:column;gap:2px}
.kp span{font-size:12px;color:var(--mut)}
.kp b{font-size:clamp(17px,3.6cqw,24px);font-weight:800;line-height:1.15;overflow-wrap:anywhere}
.kp small{font-size:11px;color:var(--mut);line-height:1.25}
.k5{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
@container (min-width:640px){.k5{grid-template-columns:repeat(3,minmax(0,1fr))}}
.ko{display:flex;flex-wrap:wrap;gap:6px 10px;align-items:center;justify-content:space-between}
.tabs{display:flex;flex-wrap:wrap;gap:3px}
.tabs button{all:unset;cursor:pointer;font-size:12px;padding:4px 9px;border-radius:7px;color:var(--mut)}
.tabs button[aria-pressed=true]{background:#e7eef5;color:#101a2e}
.tabs button:focus-visible{outline:2px solid #5db2ff;outline-offset:1px}
.kal{display:flex;align-items:center;gap:6px;flex-wrap:wrap}
.kal label{display:flex;align-items:center;gap:7px;font-size:12px;color:var(--mut)}
.kal input{color-scheme:dark;background:#0f1826;color:var(--ink);border:1px solid var(--lin);border-radius:8px;padding:5px 8px;font:inherit;font-size:13px;min-height:30px}
.kal button{all:unset;cursor:pointer;width:32px;height:32px;line-height:30px;text-align:center;font-size:20px;border-radius:8px;background:rgba(255,255,255,.07);color:var(--ink)}
.kal button[disabled]{opacity:.3;cursor:default}
.kal input:focus-visible,.kal button:focus-visible{outline:2px solid #5db2ff;outline-offset:1px}
tr[data-z],tr[data-t]{cursor:pointer}
tr[data-z]:hover td,tr[data-t]:hover td{background:rgba(255,255,255,.06)}
tr[data-z]:focus-visible,tr[data-t]:focus-visible{outline:2px solid #5db2ff;outline-offset:-2px}
.leg{display:flex;flex-wrap:wrap;gap:4px 14px;font-size:12px;color:var(--mut)}
.leg span{display:inline-flex;align-items:center;gap:5px;white-space:nowrap}
.leg i{width:14px;height:3px;border-radius:2px;display:block}
.leg i.fl{height:9px;width:9px;border-radius:2px}
.leg em{font-style:normal;color:var(--ink);font-weight:600}
.ch{position:relative;touch-action:pan-y;min-height:220px}
.ch svg{display:block;width:100%}
.ch text{font-size:10.5px;fill:var(--mut)}
.mk{pointer-events:none}
.tip{position:absolute;top:4px;pointer-events:none;background:#0a111c;border:1px solid var(--lin);border-radius:8px;padding:7px 9px;font-size:12px;line-height:1.5;display:none;z-index:2;white-space:nowrap;box-shadow:0 5px 16px rgba(0,0,0,.5)}
.tip b{display:block}
.tip span{display:flex;justify-content:space-between;gap:14px;color:var(--mut)}
.tip em{font-style:normal;color:var(--ink);font-weight:700}
.tw{overflow-x:auto;-webkit-overflow-scrolling:touch}
table{border-collapse:collapse;width:100%;font-size:12.5px}
table.gross{min-width:640px}
th{color:var(--mut);font-weight:600;text-align:right;padding:5px 7px;border-bottom:1px solid var(--lin);white-space:nowrap}
td{text-align:right;padding:5px 7px;border-bottom:1px solid rgba(255,255,255,.05);white-space:nowrap}
th:first-child,td:first-child{text-align:left;position:sticky;left:0;background:#172232;z-index:1}
.tip2{display:none}
@container (max-width:700px){.tip2{display:block}}
.lade{font-size:12px;color:var(--mut)}
.hin{font-size:12px;color:#ffb38a;margin:0;line-height:1.4}
.info{font-size:12px;color:var(--mut);margin:0;line-height:1.4;border-left:3px solid #5db2ff;padding-left:8px}
[hidden]{display:none!important}
`;
class EnergieDashboardAuswertungCard extends HTMLElement {
  static getConfigElement() { return document.createElement('energie-dashboard-card-editor'); }
  static async getStubConfig(hass) { try { const r = await sensorenErkennen(hass); const c = { ...r.config }; delete c.show_gas; delete c.show_water; for (const k of ['gas_energy', 'gas_rate', 'water_energy', 'water_rate']) delete c[k]; return c; } catch (e) { return {}; } }
  setConfig(c) {
    if (!c || typeof c !== 'object') throw new Error('Invalid configuration');
    this._c = { ...DEFAULTS, ...A_DEFAULTS, ...c, show_gas: false, show_water: false }; this._an = teileAn(this._c);
    this._regel = this._an.akku && this._c.show_regulation !== false;
    this._d = null; this._tag = null; this._lokal = {}; this._stat = null; this._gestartet = false;
    if (this._hass) this._lang = sprache(this._c, this._hass);
    this._bau(); if (this._hass) this._start();
  }
  getCardSize() { return 16; }
  getGridOptions() { return { columns: 'full' }; }
  connectedCallback() {
    this._t1 = setInterval(() => { this._zeichne(); this._zeigeTages(); }, 10000);
    this._t2 = setInterval(() => { if (this._hass && eingerichtet(this._c)) { if (!this._tag) this._ladeHeute(); this._ladeEnergie(); } }, 300000);
    if (!this._ro) this._ro = new ResizeObserver(() => { this._zeichne(); this._balken(); });
    if (this._e && this._e('ch')) { this._ro.observe(this._e('ch')); this._ro.observe(this._e('ba')); }
  }
  disconnectedCallback() { clearInterval(this._t1); clearInterval(this._t2); if (this._ro) this._ro.disconnect(); }
  get _T() { return TXT_A[this._lang || 'de']; }
  get _F() { return this._fmt || (this._fmt = format(this._lang || 'de')); }
  _op() { const c = this._c; return { band: +c.band_w || 50, sprung: +c.jump_w || 120, maxW: +c.inverter_max_w || 800, maxTakt: +c.max_rate_s || 2.5 }; }
  _seit() { const c = this._c; if (c.start_date) { const [y, m, d] = String(c.start_date).split('-').map(Number); if (y && m && d) return new Date(y, m - 1, d).getTime() / 1000; } const x = mitternacht(); x.setDate(x.getDate() - 30); return x.getTime() / 1000; }
  _bau() {
    const c = this._c, T = this._T, an = this._an, R = this._regel, b = this._op().band;
    if (!this.shadowRoot) this.attachShadow({ mode: 'open' });
    this._e = id => this.shadowRoot.getElementById(id);
    if (!eingerichtet(c)) { this.shadowRoot.innerHTML = `<style>${CSS_A}</style><div class="w"><h1>${esc(c.title || T.titel)}</h1><p class="sub">${esc(T.willkommen)}</p></div>`; return; }
    const kp = (id, n) => `<div class="kp"><span>${esc(n)}</span><b id="${id}">–</b><small id="${id}s"></small></div>`;
    const fenster = this._fenster = [[T.f15, 900, 0], [T.f1, 3600, 0], [T.f6, 21600, 0], [T.fH, 0, 0], [T.fW, 7 * 86400, 1], [T.fM, 30 * 86400, 1]];
    const leg = (f, n, id, fl) => `<span><i${fl ? ' class="fl"' : ''} style="background:${f}"></i>${esc(n)}${id ? ` <em id="${id}">–</em>` : ''}</span>`;
    const spalten = [T.tag, ...(an.akku ? [T.rein, T.raus, T.verlust] : []), T.eingespeist, ...(R ? [T.aktiv, tpl(T.innerhalb, { b }), T.reaktion, T.ausgeregelt, T.tiefste, T.laengste, T.anz] : [])];
    this._spalten = spalten.length;
    this.shadowRoot.innerHTML = `<style>${CSS_A}</style><div class="w"><div><h1>${esc(c.title || T.titel)}</h1><p class="sub">${esc(an.akku ? T.sub : T.subOhne)}</p></div>
      <section class="bx"><h2>${esc(an.akku ? T.einsp : T.einspOhne)}</h2><div class="k3">${kp('e_t', T.heute)}${kp('e_w', T.woche)}${kp('e_m', T.monat)}</div>
        <div class="ch" id="ba" style="min-height:120px"><svg id="bs" role="img" aria-label="${esc(T.eingespeist)}"></svg><div class="tip" id="bt"></div></div></section>
      ${an.akku ? `<section class="bx"><h2>${esc(T.akku)}</h2><div class="k3">${kp('a_t', T.heute)}${kp('a_w', T.woche)}${kp('a_m', T.monat)}</div><p class="sub">${esc(T.verlustText)}</p></section>` : ''}
      <section class="bx"><div class="ko"><h2>${esc(an.akku ? T.verlauf : T.verlaufOhne)}</h2><div class="tabs" id="tabs">${fenster.map(([n], i) => `<button type="button" data-i="${i}" aria-pressed="${i === 1}">${esc(n)}</button>`).join('')}</div></div>
        <div class="kal"><button type="button" id="k_v" aria-label="${esc(T.zurueck)}">‹</button><label><span>${esc(T.tagWaehlen)}</span><input type="date" id="k_d"></label><button type="button" id="k_n" aria-label="${esc(T.vor)}" disabled>›</button></div>
        <div class="ch" id="ch"><svg id="sv" role="img" aria-label="${esc(T.verlauf)}"></svg><div class="tip" id="tip"></div></div>
        <div class="leg">${leg(A_FARBE.netz, T.netz, 'l_n')}${an.akku ? leg(A_FARBE.ac, T.ac, 'l_a') : ''}${leg(A_FARBE.haus, T.haus, 'l_h')}${an.akku ? leg(A_FARBE.rein, T.rein, 'l_r') + leg(A_FARBE.raus, T.raus, 'l_u') : ''}${leg(A_FARBE.einsp, T.unterNull, null, true)}</div>
        <p class="sub" id="ch_h"></p></section>
      <section class="bx">
        ${R ? `<h2 id="t_r">${esc(T.regel)}</h2><p class="hin" id="r_slow" hidden></p><div class="k5">${kp('r_b', T.rB)}${kp('r_f', T.rF)}${kp('r_q', tpl(T.rQ, { b }))}${kp('r_e', T.rE)}${kp('r_t', T.rT)}${kp('r_l', T.rL)}</div>
        <div id="ls_box"><h2 id="t_l">${esc(T.lastspr)}</h2><div class="tw"><table><thead><tr><th>${esc(T.uhr)}</th><th>${esc(T.sprung)}</th><th>${esc(T.reaktion)}</th><th>${esc(T.ausgeregelt)}</th><th>${esc(T.akkuSp)}</th></tr></thead><tbody id="ls"></tbody></table></div><p class="sub">${esc(T.lsText)}</p></div>
        <h2 id="t_s">${esc(T.spitzen)}</h2><div class="tw"><table><thead><tr><th>${esc(T.uhr)}</th><th>${esc(T.tiefster)}</th><th>${esc(T.dauer)}</th><th>${esc(T.eingespeist)}</th>${c.show_cause ? `<th>${esc(T.vermutlich)}</th>` : ''}</tr></thead><tbody id="sp"></tbody></table></div>
        <p class="sub">${esc(tpl(T.spText, { b }))}</p><p class="sub" id="r_h"></p>` : `<p class="info">${esc(an.akku ? '' : T.keinAkku)}</p>`}
        <h2>${esc(T.tage)}</h2><p class="sub tip2">${esc(T.wischen)}</p><div class="tw"><table class="${spalten.length > 6 ? 'gross' : ''}"><thead><tr>${spalten.map(s => `<th>${esc(s)}</th>`).join('')}</tr></thead><tbody id="tb"></tbody></table></div>
        <p class="sub">${esc(tpl(T.tabText, { b }))}</p>${R ? `<p class="info" id="st_h">${esc(tpl(c.store_statistics ? T.speichernAn : T.speichernAus, { r: +c.raw_days || 10 }))}</p>` : ''}</section></div>`;
    this._fi = 1;
    for (const id of ['sp', 'ls']) { const el = this._e(id); if (!el) continue; el.addEventListener('click', ev => { const r = ev.target.closest('tr[data-z]'); if (r) this._zoom(+r.dataset.z); }); el.addEventListener('keydown', ev => { const r = ev.target.closest && ev.target.closest('tr[data-z]'); if (r && (ev.key === 'Enter' || ev.key === ' ')) { ev.preventDefault(); this._zoom(+r.dataset.z); } }); }
    const iso = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    this._iso = iso; const kd = this._e('k_d'); kd.max = iso(new Date()); kd.value = iso(new Date());
    kd.addEventListener('change', () => { if (!kd.value) return; const [y, m, d] = kd.value.split('-').map(Number); this._tagWahl(new Date(y, m - 1, d)); });
    const schritt = n => { const d = this._tag ? new Date(this._tag) : mitternacht(); d.setDate(d.getDate() + n); this._tagWahl(d); };
    this._e('k_v').addEventListener('click', () => schritt(-1)); this._e('k_n').addEventListener('click', () => schritt(1));
    const tb = this._e('tb'), zeigeTag = ev => { const r = ev.target.closest && ev.target.closest('tr[data-t]'); if (r) { this._tagWahl(new Date(+r.dataset.t * 1000)); this._e('ch').scrollIntoView({ block: 'center', behavior: 'smooth' }); } };
    tb.addEventListener('click', zeigeTag); tb.addEventListener('keydown', ev => { if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); zeigeTag(ev); } });
    this._e('tabs').addEventListener('click', ev => { const b2 = ev.target.closest('button'); if (!b2) return; this._fi = +b2.dataset.i; this._heuteAnsicht(); this.shadowRoot.querySelectorAll('#tabs button').forEach(x => x.setAttribute('aria-pressed', x === b2)); this._lade(); });
    const ch = this._e('ch');
    ch.addEventListener('pointermove', ev => { const r = ch.getBoundingClientRect(); this._hx = ev.clientX - r.left; this._zeichne(); });
    ch.addEventListener('pointerleave', () => { this._hx = null; this._e('tip').style.display = 'none'; this._zeichne(); });
    const ba = this._e('ba'); ba.addEventListener('pointermove', ev => this._bHover(ev)); ba.addEventListener('pointerleave', () => { this._e('bt').style.display = 'none'; });
    if (this._ro) { this._ro.observe(ch); this._ro.observe(ba); }
  }
  set hass(h) {
    this._hass = h; if (!this._c) return;
    const l = sprache(this._c, h); if (l !== this._lang) { this._lang = l; this._fmt = format(l); this._bau(); this._gestartet = false; }
    if (!eingerichtet(this._c)) return;
    if (!this._gestartet) this._start();
    this._live();
  }
  _start() { if (!this._hass || !eingerichtet(this._c) || !this._e('ch')) return; this._gestartet = true; this._lade(); this._ladeEnergie(); if (this._regel) { this._ladeHeute(); this._ladeTage(); } }
  _ws(m) { return this._hass.callWS(m); }
  // ---------- Sensoren als Reihen in W ----------
  _rohIds() { const c = this._c, an = this._an; return [c.grid_power, c.grid_import_power, c.grid_export_power, an.solar && c.solar_power, an.akku && c.battery_power, an.akku && c.battery_charge_power, an.akku && c.battery_discharge_power, an.akku && c.output_power, c.home_power].filter(Boolean); }
  _fak(id) { const s = this._hass.states[id], u = s && s.attributes.unit_of_measurement; return u in FAKTOR.power ? FAKTOR.power[u] : 1; }
  // r: { id: [[t, v_W], ...] } -> { netz, ac, lad, ent, haus }
  _reihen(r) {
    const c = this._c, an = this._an, g = id => id ? (r[id] || []) : [];
    const netz = c.grid_power ? g(c.grid_power).map(([t, v]) => [t, v === null ? null : c.grid_invert ? -v : v]) : verknuepfe([g(c.grid_import_power), g(c.grid_export_power)], ([i, e]) => i === null && e === null ? null : (i || 0) - (e || 0));
    let lad = [], ent = [], bat = [];
    if (an.akku) {
      if (c.battery_power) { bat = g(c.battery_power).map(([t, v]) => [t, v === null ? null : c.battery_invert ? -v : v]); ent = bat.map(([t, v]) => [t, v === null ? null : Math.max(v, 0)]); lad = bat.map(([t, v]) => [t, v === null ? null : Math.max(-v, 0)]); }
      else { lad = g(c.battery_charge_power); ent = g(c.battery_discharge_power); bat = verknuepfe([ent, lad], ([e, l]) => e === null && l === null ? null : (e || 0) - (l || 0)); }
    }
    const ac = an.akku ? (c.output_power ? g(c.output_power) : ent) : [];
    const pv = an.solar ? g(c.solar_power) : [];
    const haus = c.home_power ? g(c.home_power) : c.output_power ? verknuepfe([netz, ac], ([n, a]) => n === null || a === null ? null : Math.max(n + a, 0)) : verknuepfe([netz, pv, bat], ([n, p, b]) => n === null ? null : Math.max(n + (p || 0) + (b || 0), 0));
    return { netz, ac, lad, ent, haus };
  }
  async _hist(von, bis) {
    const ids = [...new Set(this._rohIds())];
    const r = await this._ws({ type: 'history/history_during_period', start_time: new Date(von * 1000).toISOString(), end_time: new Date(bis * 1000).toISOString(), entity_ids: ids, minimal_response: true, no_attributes: true, significant_changes_only: false });
    const o = {}; for (const id of ids) { const f = this._fak(id); o[id] = (r[id] || []).map(x => { const v = parseFloat(x.s); return [x.lu !== undefined ? x.lu : x.lc, Number.isFinite(v) ? v * f : null]; }); }
    return this._reihen(o);
  }
  async _statReihen(von, bis) {
    const ids = [...new Set(this._rohIds())];
    const r = await this._ws({ type: 'recorder/statistics_during_period', start_time: new Date(von * 1000).toISOString(), end_time: new Date(bis * 1000).toISOString(), statistic_ids: ids, period: 'hour', types: ['mean', 'min', 'max'], units: { power: 'W' } });
    const art = k => { const o = {}; for (const id of ids) o[id] = (r[id] || []).map(x => [ts(x.start) / 1000, istZahl(x[k]) ? x[k] : null]); return this._reihen(o); };
    const m = art('mean'), lo = art('min'), hi = art('max'), c = this._c;
    // Netz min/max: bei getrennten Sensoren angenaehert
    let nLo = lo.netz, nHi = hi.netz;
    if (!c.grid_power) { const imp = id => (r[id] || []).map(x => [ts(x.start) / 1000, x]); nLo = verknuepfe([imp(c.grid_import_power), imp(c.grid_export_power)], ([i, e]) => (i ? i.min : 0) - (e ? e.max : 0)); nHi = verknuepfe([imp(c.grid_import_power), imp(c.grid_export_power)], ([i, e]) => (i ? i.max : 0) - (e ? e.min : 0)); }
    return { ...m, netzMin: c.grid_invert ? hi.netz : nLo, netzMax: c.grid_invert ? lo.netz : nHi };
  }
  // ---------- Energie aus Zaehlern (wie Hauptkarte) ----------
  async _ladeEnergie() {
    const c = this._c, an = this._an, m = mitternacht(), mon = monatsanfang(), wo = montag(), seit = new Date(Math.min(mon.getTime(), wo.getTime(), m.getTime() - 29 * 864e5));
    const ids = [c.grid_export_energy, an.akku && c.battery_energy_in, an.akku && c.battery_energy_out, an.akku && (c.battery_content || c.battery_soc)].filter(Boolean);
    if (!ids.length) return;
    try {
      this._eSt = await this._ws({ type: 'recorder/statistics_during_period', start_time: new Date(seit.getTime() - 3600e3).toISOString(), end_time: new Date().toISOString(), statistic_ids: [...new Set(ids)], period: 'hour', types: ['change', 'state', 'mean'], units: { energy: 'kWh' } });
      this._eSeit = seit.getTime(); this._zeigeEnergie(); this._balken(); this._zeigeTages();
    } catch (e) { console.warn('energie-dashboard-auswertung: energy', e); }
  }
  // Energie eines Zaehlers zwischen von und bis (ms); heute mit Live-Anteil wie in der Hauptkarte
  _energie(key, von, bis) {
    const id = this._c[key]; if (!id || !this._eSt) return null; const rows = this._eSt[id] || [], jetzt = Date.now();
    if (bis <= jetzt) return summeChange(rows, von, bis);
    const vorher = von < mitternacht().getTime() ? summeChange(rows, von, mitternacht().getTime()) || 0 : 0;
    const heute = tagesWert(rows.filter(z => ts(z.start) >= mitternacht().getTime() - 3600e3), wert(this._hass, id, 'energy'), mitternacht().getTime());
    return heute === null ? (rows.length ? vorher : null) : vorher + heute;
  }
  _inhalt(t) { // Akku-Inhalt in kWh zu Beginn der Stunde t (ms), aus dem Stundenmittel davor; t = jetzt: live
    const c = this._c, id = c.battery_content || c.battery_soc; if (!id) return null;
    const umr = v => c.battery_content ? v : (+c.battery_capacity ? v / 100 * c.battery_capacity : null);
    if (t >= Date.now() - 60e3) { const v = wert(this._hass, id, c.battery_content ? 'energy' : 'soc'); return istZahl(v) ? umr(v) : null; }
    const a = ((this._eSt || {})[id] || []).filter(z => ts(z.start) < t && istZahl(z.mean)); return a.length ? umr(a[a.length - 1].mean) : null;
  }
  _bilanz(von, bis) { const rein = this._energie('battery_energy_in', von, bis), raus = this._energie('battery_energy_out', von, bis), k0 = this._inhalt(von), k1 = this._inhalt(Math.min(bis, Date.now())); return { rein, raus, verlust: verlust(rein, raus, k0, k1), durchsatz: durchsatz(rein, k0, k1) }; }
  _vText(x) { const F = this._F; if (!x || !istZahl(x.verlust)) return '–'; return F.whk(x.verlust) + (x.durchsatz >= 0.05 ? ` (${F.zahl(Math.min(x.verlust / x.durchsatz * 100, 100), 0)} % ${this._T.vonRein})` : ''); }
  _zeigeEnergie() {
    if (!this._eSt) return; const F = this._F, T = this._T, j = Date.now() + 1, perioden = [['t', mitternacht()], ['w', montag()], ['m', monatsanfang()]];
    for (const [k, d] of perioden) {
      const e = this._energie('grid_export_energy', d.getTime(), j); this._txt('e_' + k, F.whk(e)); this._txt('e_' + k + 's', k === 't' ? T.seitMn : T.seit + ' ' + F.datum(d));
      if (this._an.akku) { const x = this._bilanz(d.getTime(), j); this._txt('a_' + k, `${F.whk(x.rein)} / ${F.whk(x.raus)}`); this._txt('a_' + k + 's', `${T.reinRaus} · ${T.verlust} ${this._vText(x)}`); }
    }
  }
  _tageListe() { const o = [], h = mitternacht(); for (let i = 29; i >= 0; i--) { const d = new Date(h); d.setDate(d.getDate() - i); o.push(d); } return o; }
  _balken() {
    if (!this._eSt || !this._e || !this._e('ba')) return; const box = this._e('ba'), W = box.clientWidth; if (!W) return; const F = this._F;
    const H = 120, L = 44, R = 4, T = 8, B = 18, iw = W - L - R, ih = H - T - B;
    const tage = this._tageListe().map(d => ({ t: d.getTime() / 1000, wh: (this._energie('grid_export_energy', d.getTime(), naechsterTag(d).getTime()) || 0) * 1000 }));
    const mx = Math.max(10, ...tage.map(x => x.wh)), p = Math.pow(10, Math.floor(Math.log10(mx))), oben = Math.ceil(mx / p) * p, n = tage.length, bw = iw / n;
    let g = ''; for (const f of [0, .5, 1]) { const y = T + ih * (1 - f); g += `<line x1="${L}" x2="${W - R}" y1="${y}" y2="${y}" stroke="${f === 0 ? '#71839a' : '#2a3950'}"/><text x="${L - 4}" y="${y + 3.5}" text-anchor="end">${oben * f >= 1000 ? F.zahl(oben * f / 1000, 1) + ' kWh' : F.zahl(oben * f, 0) + ' Wh'}</text>`; }
    tage.forEach((x, i) => { const h = x.wh / oben * ih, xp = L + i * bw + 1, br = Math.max(bw - 2, 2); if (h > 0.5) g += `<path d="M${xp} ${T + ih} V${T + ih - h + 2} q0 -2 2 -2 H${xp + br - 2} q2 0 2 2 V${T + ih}Z" fill="${A_FARBE.einsp}"/>`; if (i % Math.ceil(n / (W < 420 ? 4 : 6)) === 0 || i === n - 1) g += `<text x="${xp + br / 2}" y="${H - 5}" text-anchor="middle">${F.datum(new Date(x.t * 1000))}</text>`; });
    const s = this._e('bs'); s.setAttribute('viewBox', `0 0 ${W} ${H}`); s.setAttribute('height', H); s.innerHTML = g; this._bG = { tage, L, bw, W };
  }
  _bHover(ev) { if (!this._bG) return; const F = this._F, r = this._e('ba').getBoundingClientRect(), x = ev.clientX - r.left, t = this._bG.tage[Math.floor((x - this._bG.L) / this._bG.bw)], tip = this._e('bt'); if (!t) { tip.style.display = 'none'; return; } tip.innerHTML = `<b>${F.datum(new Date(t.t * 1000))}</b><span>${esc(this._T.eingespeist)} <em>${F.whk(t.wh / 1000)}</em></span>`; tip.style.display = 'block'; const tw = tip.offsetWidth; tip.style.left = (x + 12 + tw > this._bG.W ? x - 12 - tw : x + 12) + 'px'; }
  // ---------- Liniendiagramm ----------
  _heuteAnsicht() { this._tag = null; const kd = this._e('k_d'); kd.value = this._iso(new Date()); this._e('k_n').disabled = true; if (this._regel) this._ladeHeute(); }
  async _tagWahl(d) {
    const h = mitternacht(), T = this._T, F = this._F; d = mitternacht(d); if (d > h) d = h;
    if (d.getTime() === h.getTime()) { this._fi = 3; this.shadowRoot.querySelectorAll('#tabs button').forEach(x => x.setAttribute('aria-pressed', x.dataset.i === '3')); this._heuteAnsicht(); return this._lade(); }
    this._tag = d; this._e('k_d').value = this._iso(d); this._e('k_n').disabled = false;
    this.shadowRoot.querySelectorAll('#tabs button').forEach(x => x.setAttribute('aria-pressed', 'false'));
    const von = d.getTime() / 1000, bis = naechsterTag(d).getTime() / 1000, nr = this._nr = (this._nr || 0) + 1;
    this._txt('ch_h', T.lade);
    try {
      const r = await this._hist(von, bis); if (nr !== this._nr) return;
      if (r.netz.length > 200) { this._d = { ...r, von, bis, stat: false }; this._txt('ch_h', tpl(T.hTag, { d: F.datum(d) })); if (this._regel) this._ladeHeute(d, r); }
      else { const s = await this._statReihen(von, bis); if (nr !== this._nr) return; this._d = { ...s, von, bis, stat: true }; this._txt('ch_h', tpl(T.hAlt, { d: F.datum(d) })); if (this._regel) this._ladeHeute(d, null); }
      this._zeichne();
    } catch (err) { console.warn('energie-dashboard-auswertung: day', err); this._txt('ch_h', T.fehler); }
  }
  async _zoom(t) {
    const von = t - 90, bis = t + 150, nr = this._nr = (this._nr || 0) + 1, T = this._T;
    this.shadowRoot.querySelectorAll('#tabs button').forEach(x => x.setAttribute('aria-pressed', 'false'));
    this._txt('ch_h', T.lade); this._e('ch').scrollIntoView({ block: 'center', behavior: 'smooth' });
    try { const r = await this._hist(von, bis); if (nr !== this._nr) return; this._d = { ...r, von, bis, stat: false }; this._txt('ch_h', tpl(T.hZoom, { t: new Date(t * 1000).toLocaleTimeString(this._F.loc) })); this._zeichne(); }
    catch (e) { console.warn('energie-dashboard-auswertung: zoom', e); this._txt('ch_h', T.fehler); }
  }
  async _lade() {
    const [, f, st] = this._fenster[this._fi], jetzt = Date.now() / 1000, von = f ? jetzt - f : mitternacht().getTime() / 1000, nr = this._nr = (this._nr || 0) + 1, T = this._T;
    this._txt('ch_h', T.lade);
    try {
      if (st) { const s = await this._statReihen(von, jetzt); if (nr !== this._nr) return; this._d = { ...s, von, stat: true }; this._txt('ch_h', T.hStat + (this._c.store_statistics && this._regel ? T.hStatGesp : '')); if (this._c.store_statistics && this._regel && !this._stat) this._leseGespeichert(); }
      else { const r = await this._hist(von, jetzt); if (nr !== this._nr) return; this._d = { ...r, von, stat: false }; this._txt('ch_h', T.hRoh); }
      this._zeichne();
    } catch (e) { console.warn('energie-dashboard-auswertung: history', e); this._txt('ch_h', T.fehler); }
  }
  _live() {
    const h = this._hass, c = this._c, an = this._an, F = this._F, T = this._T, g = id => wert(h, id, 'power');
    const netz = netzW(c, g), bat = an.akku ? akkuW(c, g) : null, ac = an.akku ? (c.output_power ? g(c.output_power) : bat === null ? null : Math.max(bat, 0)) : null;
    const pv = an.solar ? g(c.solar_power) : 0, haus = c.home_power ? g(c.home_power) : netz === null ? null : c.output_power ? Math.max(netz + (ac || 0), 0) : Math.max(netz + (pv || 0) + (bat || 0), 0);
    this._txt('l_n', netz === null ? '–' : netz < 0 ? F.watt(-netz) + ' ' + T.netzRaus : F.watt(netz)); this._txt('l_a', F.watt(ac)); this._txt('l_h', F.watt(haus));
    this._txt('l_r', bat === null ? '–' : F.watt(Math.max(-bat, 0))); this._txt('l_u', bat === null ? '–' : F.watt(Math.max(bat, 0)));
    this._zeigeEnergie();
    // Live-Werte an die laufende Ansicht anhaengen
    if (this._d && !this._d.stat && !this._d.bis) {
      const t = Date.now() / 1000, neu = { netz, ac, lad: bat === null ? null : Math.max(-bat, 0), ent: bat === null ? null : Math.max(bat, 0), haus };
      for (const [k, v] of Object.entries(neu)) { const a = this._d[k]; if (!a) continue; const l = a[a.length - 1]; if (!l || t - l[0] >= 1 || l[1] !== v) a.push([t, v]); }
    }
  }
  _buckets(a, von, bis, n) {
    const m = new Array(n).fill(null), lo = new Array(n).fill(null), hi = new Array(n).fill(null), dt = (bis - von) / n; if (!a || !a.length) return { m, lo, hi };
    let i = 0;
    for (let b = 0; b < n; b++) {
      const t0 = von + b * dt, t1 = t0 + dt; let su = 0, ge = 0, mn = null, mx = null;
      while (i + 1 < a.length && a[i + 1][0] <= t0) i++;
      for (let j = i; j < a.length && a[j][0] < t1; j++) { const s = Math.max(a[j][0], t0), e = Math.min(j + 1 < a.length ? a[j + 1][0] : bis, t1), v = a[j][1]; if (e > s && v !== null) { su += v * (e - s); ge += e - s; mn = mn === null ? v : Math.min(mn, v); mx = mx === null ? v : Math.max(mx, v); } }
      if (ge > 0) { m[b] = su / ge; lo[b] = mn; hi[b] = mx; }
    }
    return { m, lo, hi };
  }
  _zeichne() {
    if (!this._d || !this._e || !this._e('ch')) return; const ch = this._e('ch'), W = ch.clientWidth; if (!W) return;
    const F = this._F, T = this._T, an = this._an, op = this._op();
    const klein = W < 520, L = 46, R = 8, Tp = 6, B = 22, LUECKE = 14, iw = W - L - R, bis = this._d.bis || Date.now() / 1000, von = this._d.von, stat = this._d.stat;
    const n = stat ? clamp(Math.round((bis - von) / 3600), 24, 760) : clamp(Math.round(iw / 1.5), 40, 800);
    const N = this._buckets(this._d.netz, von, bis, n), A = this._buckets(this._d.ac, von, bis, n), RN = this._buckets(this._d.lad, von, bis, n), UN = this._buckets(this._d.ent, von, bis, n), HS = this._buckets(this._d.haus, von, bis, n);
    if (stat) { N.lo = this._buckets(this._d.netzMin, von, bis, n).m; N.hi = this._buckets(this._d.netzMax, von, bis, n).m; }
    const hN = klein ? 210 : 240, hA = an.akku ? (klein ? 80 : 90) : 0, hR = an.akku ? (klein ? 80 : 90) : 0, hH = klein ? 100 : 110, RES = 42;
    const H = Tp + hN + LUECKE + (an.akku ? hA + LUECKE + hR + LUECKE : 0) + hH + B;
    const nett = (lo, hi, anz) => { const roh = Math.max(hi - lo, 50) / anz, p = Math.pow(10, Math.floor(Math.log10(roh))), st = [1, 2, 2.5, 5, 10].map(k => k * p).find(k => k >= roh); return { st, lo: Math.floor(lo / st) * st, hi: Math.ceil(hi / st) * st }; };
    let nLo = 0, nHi = 50, aHi = 50, hHi = 50, rHi = 50;
    for (let i = 0; i < n; i++) { if (N.hi[i] !== null) { nHi = Math.max(nHi, N.hi[i]); nLo = Math.min(nLo, N.lo[i] ?? 0); } if (A.m[i] !== null) aHi = Math.max(aHi, A.hi[i] ?? A.m[i]); const hh = HS.hi[i] ?? HS.m[i]; if (hh !== null) hHi = Math.max(hHi, hh); for (const q of [RN, UN]) { const w = q.hi[i] ?? q.m[i]; if (w !== null) rHi = Math.max(rHi, w); } }
    const pN = { top: Tp + RES, h: hN - 2 * RES, ...nett(nLo, nHi, 4) };
    let y0 = Tp + hN + LUECKE; const pA = an.akku ? { top: y0, h: hA, ...nett(0, aHi, 2) } : null; if (an.akku) y0 += hA + LUECKE;
    const pR = an.akku ? { top: y0, h: hR, ...nett(0, rHi, 2) } : null; if (an.akku) y0 += hR + LUECKE;
    const pH = { top: y0, h: hH, ...nett(0, hHi, 2) };
    const Y = (p, v) => p.top + (p.hi - v) / (p.hi - p.lo) * p.h, x = i => L + (i + .5) / n * iw, X = t => L + (t - von) / (bis - von) * iw;
    const lbl = v => Math.abs(v) >= 1000 ? F.zahl(v / 1000, Math.abs(v) % 1000 ? 1 : 0) + ' kW' : F.zahl(v, 0) + ' W';
    let g = '';
    const gitter = (p, titel, farbe) => {
      for (let w = p.lo; w <= p.hi + 1e-6; w += p.st) { const v = Math.abs(w) < 1e-6 ? 0 : w, yy = Y(p, v).toFixed(1); g += v === 0 ? `<line x1="${L}" x2="${W - R}" y1="${yy}" y2="${yy}" stroke="#eef3f8" stroke-width="1.3"/><text x="${L - 5}" y="${(+yy + 3.5).toFixed(1)}" text-anchor="end" style="fill:#eef3f8;font-weight:700">0 W</text>` : `<line x1="${L}" x2="${W - R}" y1="${yy}" y2="${yy}" stroke="#2a3950"/><text x="${L - 5}" y="${(+yy + 3.5).toFixed(1)}" text-anchor="end">${lbl(v)}</text>`; }
      g += `<text x="${L + 4}" y="${(p === pN ? Tp + 11 : p.top + 11).toFixed(1)}" style="fill:${farbe};font-weight:700;font-size:11px">${esc(titel)}</text>`;
    };
    gitter(pN, T.netz, A_FARBE.netz); if (an.akku) { gitter(pA, T.ac, A_FARBE.ac); gitter(pR, T.reinraus, '#eef3f8'); } gitter(pH, T.haus, A_FARBE.haus);
    const xn = klein ? 3 : 6, fmt = s => bis - von > 2 * 86400 ? F.datum(new Date(s * 1000)) : bis - von < 900 ? new Date(s * 1000).toLocaleTimeString(F.loc) : F.hhmm(s * 1000);
    for (let k = 0; k <= xn; k++) { const xx = L + iw * k / xn; g += `<line x1="${xx.toFixed(1)}" x2="${xx.toFixed(1)}" y1="${Tp}" y2="${H - B}" stroke="#222f44"/><text x="${xx.toFixed(1)}" y="${H - 6}" text-anchor="${k === 0 ? 'start' : k === xn ? 'end' : 'middle'}">${fmt(von + (bis - von) * k / xn)}</text>`; }
    { const bw = Math.max(iw / n, 2); for (let i = 0; i < n; i++) if (N.lo[i] !== null && N.lo[i] < 0) g += `<rect x="${(x(i) - bw / 2).toFixed(1)}" y="${Y(pN, 0).toFixed(1)}" width="${bw.toFixed(1)}" height="${(Y(pN, N.lo[i]) - Y(pN, 0)).toFixed(1)}" fill="${A_FARBE.einsp}" opacity=".75"/>`; }
    const huelle = (p, Q, farbe, nurMittel) => { let d = '', auf = false; for (let i = 0; i < n; i++) { const a = nurMittel ? Q.m[i] : (Q.lo[i] ?? Q.m[i]), b = nurMittel ? Q.m[i] : (Q.hi[i] ?? Q.m[i]); if (a === null || b === null) { auf = false; continue; } const vor = i > 0 && Q.m[i - 1] !== null ? Q.m[i - 1] : Q.m[i], [p1, p2] = Math.abs(a - vor) < Math.abs(b - vor) ? [a, b] : [b, a]; d += `${auf ? 'L' : 'M'}${x(i).toFixed(1)} ${Y(p, p1).toFixed(1)}`; if (p2 !== p1) d += `L${x(i).toFixed(1)} ${Y(p, p2).toFixed(1)}`; auf = true; } g += `<path d="${d}" fill="none" stroke="${farbe}" stroke-width="1.1" stroke-linejoin="round"/>`; };
    huelle(pN, N, A_FARBE.netz, false);
    if (an.akku) { huelle(pA, A, A_FARBE.ac, stat); huelle(pR, RN, A_FARBE.rein, stat); huelle(pR, UN, A_FARBE.raus, stat); }
    huelle(pH, HS, A_FARBE.haus, stat);
    // Hinweise in den freien Streifen ueber und unter dem Netzbereich
    if (this._regel) {
      const bx = [], frei = (li, ob, re, un) => !bx.some(q => li < q[2] + 3 && re > q[0] - 3 && ob < q[3] + 1 && un > q[1] - 1), bh = 15;
      const marke = (xp, ypk, text, farbe, unten) => {
        const bw = text.length * (klein ? 5 : 5.4) + 8;
        for (const r of [0, 1]) for (const sx of [0, -1, 1, -2, 2, -3, 3]) {
          const x0 = clamp(xp - bw / 2 + sx * (bw + 3), L + 1, W - R - bw - 1), y1 = unten ? pN.top + pN.h + RES - bh - 2 - r * (bh + 2) : pN.top - RES + 4 + r * (bh + 2) + (r === 0 ? 13 : 0);
          if (!frei(x0, y1, x0 + bw, y1 + bh)) continue;
          bx.push([x0, y1, x0 + bw, y1 + bh]);
          const xz = clamp(xp, x0 + 3, x0 + bw - 3), yz = unten ? y1 : y1 + bh;
          g += `<g class="mk"><path d="M${xp.toFixed(1)} ${ypk.toFixed(1)} L${xz.toFixed(1)} ${yz.toFixed(1)}" stroke="${farbe}" stroke-width=".8" stroke-opacity=".7" fill="none"/><rect x="${x0.toFixed(1)}" y="${y1.toFixed(1)}" width="${bw.toFixed(1)}" height="${bh}" rx="3" fill="#0a111c" fill-opacity=".45" stroke="${farbe}" stroke-opacity=".7" stroke-width=".8"/><text x="${(x0 + bw / 2).toFixed(1)}" y="${(y1 + 11).toFixed(1)}" text-anchor="middle" style="fill:#eef3f8;font-size:${klein ? 9.5 : 10}px;font-weight:600">${esc(text)}</text></g>`;
          return;
        }
      };
      const sek = s => s === undefined || s === null ? '–' : F.zahl(s, 0) + ' s';
      if (!stat) {
        const mind = bis - von <= 1800 ? op.band : 100, ev = einspeiseSpitzen(this._d.netz, [], von, bis, op.band).filter(e => e.tief <= -mind).sort((a, b) => a.tief - b.tief).slice(0, 12);
        for (const e of ev) marke(X(e.t + e.dauer / 2), Y(pN, e.tief), `${F.watt(e.tief)} · ${sek(e.dauer)}`, A_FARBE.einsp, true);
        if (this._ausw && this._ausw.schnell) for (const e of this._ausw.liste) { if (e.t < von || e.t > bis || e.vz < 0) continue; marke(X(e.t), Y(pN, e.pk), `+${F.watt(e.pk)} · ${e.fertig !== null ? e.fertig + ' s' : (e.begin ?? '–') + ' s …'}`, e.kurz ? '#a7b6c5' : A_FARBE.netz, false); }
      } else if (this._stat) {
        const reihe = k => (this._stat[`${A_QUELLE}:${k}`] || []).map(q => [ts(q.start) / 1000, q.mean]), s2 = new Map(reihe('spitze_s')), j2 = new Map(reihe('sprung_s')), ev = [], jp = [];
        for (const [t, w] of reihe('spitze_w')) if (t >= von && t <= bis && w <= -100) ev.push({ t: t + 1800, w, s: s2.get(t) });
        for (const [t, w] of reihe('sprung_w')) if (t >= von && t <= bis) jp.push({ t: t + 1800, w, s: j2.get(t) });
        ev.sort((a, b) => a.w - b.w).slice(0, 14).forEach(e => marke(X(e.t), Y(pN, e.w), `${F.watt(e.w)} · ${sek(e.s)}`, A_FARBE.einsp, true));
        jp.sort((a, b) => b.w - a.w).slice(0, 8).forEach(e => marke(X(e.t), Y(pN, e.w), `+${F.watt(e.w)} · ${sek(e.s)}`, A_FARBE.netz, false));
      }
    }
    if (this._hx !== null && this._hx !== undefined) {
      const i = clamp(Math.round((this._hx - L) / iw * n - .5), 0, n - 1), tip = this._e('tip'), t = von + (i + .5) * (bis - von) / n;
      if (N.m[i] !== null || A.m[i] !== null) {
        g += `<line x1="${x(i).toFixed(1)}" x2="${x(i).toFixed(1)}" y1="${Tp}" y2="${H - B}" stroke="#eef3f8" stroke-opacity=".45"/>`;
        const z = (n2, v) => `<span>${esc(n2)} <em>${F.watt(v)}</em></span>`;
        tip.innerHTML = `<b>${stat ? F.datum(new Date(t * 1000)) + ' ' : ''}${bis - von < 900 ? new Date(t * 1000).toLocaleTimeString(F.loc) : F.hhmm(t * 1000)}</b>${z(T.netz, N.m[i])}${N.lo[i] !== N.hi[i] && N.lo[i] !== null ? `<span>min / max <em>${F.watt(N.lo[i])} / ${F.watt(N.hi[i])}</em></span>` : ''}${an.akku ? z(T.ac, A.m[i]) + z(T.rein, RN.m[i]) + z(T.raus, UN.m[i]) : ''}${z(T.haus, HS.m[i])}`;
        tip.style.display = 'block'; const tw = tip.offsetWidth; tip.style.left = (x(i) + 12 + tw > W ? x(i) - 12 - tw : x(i) + 12) + 'px';
      } else tip.style.display = 'none';
    }
    const sv = this._e('sv'); sv.setAttribute('viewBox', `0 0 ${W} ${H}`); sv.setAttribute('height', H); sv.innerHTML = g;
  }
  // ---------- Regelverhalten ----------
  async _ladeHeute(tag = null, vorhanden) {
    if (!this._regel) return;
    const T = this._T, F = this._F, op = this._op(), heute = !tag, st = tag ? tag.getTime() / 1000 : mitternacht().getTime() / 1000, von = Math.max(st, this._seit()), bis = tag ? naechsterTag(tag).getTime() / 1000 : Date.now() / 1000, nr = this._an2 = (this._an2 || 0) + 1;
    const wort = heute ? T.heute : F.datum(tag), b = op.band;
    this._txt('t_r', T.regel + ' ' + wort); this._txt('t_l', T.lastspr + ' · ' + wort); this._txt('t_s', T.spitzen + ' · ' + wort);
    try {
      const ohne = vorhanden === null || bis <= von, r = ohne ? { netz: [], ac: [] } : vorhanden || await this._hist(von, bis); if (nr !== this._an2) return;
      const a = auswerten(r.netz, r.ac, von, bis, op); this._ausw = a; if (heute) this._heute = a; else this._lokal[st] = this._tagWerte(a);
      const s = (v, e) => v === null ? '–' : F.zahl(v, v < 10 && v % 1 ? 1 : 0) + ' ' + e, mb = median(a.reaktion), mf = median(a.ausregel);
      const slow = this._e('r_slow'); if (slow) { slow.hidden = ohne || a.schnell || a.takt === null; slow.textContent = a.takt === null ? '' : tpl(T.zuLangsam, { t: F.zahl(a.takt, a.takt < 10 ? 1 : 0) }); }
      const lsBox = this._e('ls_box'); if (lsBox) lsBox.hidden = !ohne && !a.schnell;
      this._txt('r_b', a.schnell ? s(mb, 's') : '–'); this._txt('r_bs', !a.schnell ? '' : a.gewertet ? (a.gewertet === 1 ? T.gewertet1 : tpl(T.gewertet, { n: a.gewertet })) : T.keinSprung);
      this._txt('r_f', a.schnell ? s(mf, 's') : '–'); this._txt('r_fs', !a.schnell ? '' : a.nichtFertig ? tpl(T.nichtFertig, { n: a.nichtFertig }) : a.spitzen ? tpl(T.kurz, { n: a.spitzen }) : '');
      this._txt('r_q', a.aktiv_s ? F.zahl(a.imBand / a.aktiv_s * 100, 1) + ' %' : '–'); this._txt('r_qs', a.aktiv_s ? tpl(T.waehrend, { h: F.zahl(a.aktiv_s / 3600, 1) }) : T.akkuNicht);
      this._txt('r_e', a.takt === null ? '–' : '≈ ' + F.zahl(a.takt, a.takt < 2 ? 1 : 0) + ' s'); this._txt('r_es', tpl(T.taktS, { a: a.taktA === null ? '–' : F.zahl(a.taktA, 0) }));
      const sp = a.ein, tief = sp.length ? Math.min(...sp.map(x => x.tief)) : null, lang = sp.length ? Math.max(...sp.map(x => x.dauer)) : null, uhrS = t => new Date(t * 1000).toLocaleTimeString(F.loc);
      this._txt('r_t', ohne ? '–' : tief === null ? T.keine : F.watt(tief)); this._txt('r_ts', ohne ? '' : tief === null ? tpl(T.nichtsUnter, { b }) : tpl(T.um, { t: uhrS(sp.find(x => x.tief === tief).t) }));
      this._txt('r_l', ohne ? '–' : lang === null ? T.keine : F.zahl(lang, 0) + ' s'); this._txt('r_ls', lang === null ? '' : tpl(T.spitzenZus, { n: sp.length, s: F.zahl(sp.reduce((q, x) => q + x.dauer, 0), 0) }));
      const mehr = n2 => n2 > 20 ? `<tr><td colspan="5" class="lade">${esc(tpl(T.weitere, { n: n2 - 20 }))}</td></tr>` : '';
      const tb = this._e('sp'), html = sp.slice().sort((x, y) => y.t - x.t).slice(0, 20).map(x => `<tr data-z="${Math.round(x.t)}" tabindex="0" role="button"><td>${uhrS(x.t)}</td><td>${F.watt(x.tief)}</td><td>${F.zahl(x.dauer, 0)} s${x.laeuft ? ' …' : ''}</td><td>${F.zahl(x.wh, x.wh < 10 ? 1 : 0)} Wh</td>${this._c.show_cause ? `<td>${esc(T[x.art])}</td>` : ''}</tr>`).join('') + mehr(sp.length);
      if (tb && tb.dataset.h !== html) { tb.dataset.h = html; tb.innerHTML = html || `<tr><td colspan="5" class="lade">${esc(ohne ? T.keineSek : wort + ': ' + tpl(T.keineEin, { b }))}</td></tr>`; }
      const lb = this._e('ls'), lh = a.liste.slice().sort((x, y) => y.t - x.t).slice(0, 20).map(x => `<tr data-z="${Math.round(x.t)}" tabindex="0" role="button"><td>${uhrS(x.t)}</td><td>${x.vz > 0 ? '+' : '−'}${F.watt(x.pk)}</td><td>${x.begin === null ? '–' : x.begin + ' s'}</td><td>${x.fertig === null ? esc(T.nichtIn2) : x.fertig + ' s'}</td><td>${esc(x.kurz ? T.gingNicht : T.gingMit)}</td></tr>`).join('') + mehr(a.liste.length);
      if (lb && lb.dataset.h !== lh) { lb.dataset.h = lh; lb.innerHTML = lh || `<tr><td colspan="5" class="lade">${esc(ohne ? T.keineSek : wort + ': ' + T.keinLs)}</td></tr>`; }
      this._zeigeTages(); this._zeichne();
    } catch (e) { console.warn('energie-dashboard-auswertung: regulation', e); this._txt('r_h', T.fehler); }
  }
  _tagWerte(a) {
    const sch = a.schnell;
    return { aktiv_h: a.aktiv_s / 3600, ereignisse: sch ? a.gewertet : null, band_pct: a.aktiv_s ? a.imBand / a.aktiv_s * 100 : null, reaktion_s: sch ? median(a.reaktion) : null, ausregel_s: sch ? median(a.ausregel) : null, tiefste_w: a.ein.length ? Math.min(...a.ein.map(x => x.tief)) : 0, laengste_s: a.ein.length ? Math.max(...a.ein.map(x => x.dauer)) : 0, anz_spitzen: a.ein.length, stand: A_STAND };
  }
  async _leseGespeichert() {
    try { this._stat = await this._ws({ type: 'recorder/statistics_during_period', start_time: new Date(this._seit() * 1000 - 864e5).toISOString(), statistic_ids: A_IDS, period: 'hour', types: ['mean'] }); this._zeigeTages(); this._zeichne(); }
    catch (e) { console.warn('energie-dashboard-auswertung: stored', e); }
  }
  // Abgeschlossene Tage auswerten. Gespeichert wird NUR mit store_statistics: true (Zustimmung im Editor).
  async _ladeTage() {
    if (this._tl) return; this._tl = true; const c = this._c, op = this._op(), speichern = c.store_statistics === true;
    try {
      if (speichern) await this._leseGespeichert();
      const fertig = new Set(((this._stat || {})[`${A_QUELLE}:stand`] || []).filter(x => x.mean >= A_STAND).map(x => ts(x.start) / 1000));
      const grenze = Date.now() / 1000 - (Math.max(+c.raw_days || 10, 1) - 0.5) * 86400, seit = this._seit(), heute = mitternacht();
      for (const d = mitternacht(new Date(seit * 1000)); d < heute; d.setDate(d.getDate() + 1)) {
        const t = d.getTime() / 1000, bis = naechsterTag(d).getTime() / 1000; if (fertig.has(t) || t < grenze || this._lokal[t]) continue;
        const r = await this._hist(Math.max(t, seit), bis); if (r.netz.length < 50) continue;
        const a = auswerten(r.netz, r.ac, Math.max(t, seit), bis, op), w = this._tagWerte(a);
        this._lokal[t] = w; this._zeigeTages();
        if (!speichern) continue;
        this._txt('st_h', tpl(this._T.speichert, { d: this._F.datum(d) }));
        const meta = (k, unit, name) => ({ has_mean: true, mean_type: 1, has_sum: false, name: 'Energie Auswertung ' + name, source: A_QUELLE, statistic_id: `${A_QUELLE}:${k}`, unit_of_measurement: unit, unit_class: null });
        for (const [k, v] of Object.entries(w)) { if (v === null) continue; await this._ws({ type: 'recorder/import_statistics', metadata: meta(k, A_STATS[k], k), stats: [{ start: new Date(t * 1000).toISOString(), mean: v, min: v, max: v }] }); }
        const std = { spitze_w: [], spitze_s: [], sprung_w: [], sprung_s: [] }, h1 = {}, h2 = {}, voll = s => Math.floor(s / 3600) * 3600, zeile = (s, v) => ({ start: new Date(s * 1000).toISOString(), mean: v, min: v, max: v });
        for (const e of a.ein) { const k = voll(e.t); if (!h1[k] || e.tief < h1[k].tief) h1[k] = e; }
        if (a.schnell) for (const e of a.liste) { if (e.kurz || e.vz < 0) continue; const k = voll(e.t), s = e.fertig ?? e.begin; if (s === null) continue; if (!h2[k] || e.pk > h2[k].pk) h2[k] = { ...e, s }; }
        for (const [k, e] of Object.entries(h1)) { std.spitze_w.push(zeile(+k, e.tief)); std.spitze_s.push(zeile(+k, e.dauer)); }
        for (const [k, e] of Object.entries(h2)) { std.sprung_w.push(zeile(+k, e.pk)); std.sprung_s.push(zeile(+k, e.s)); }
        for (const [k, st] of Object.entries(std)) { if (st.length) await this._ws({ type: 'recorder/import_statistics', metadata: meta(k, A_STUNDE[k], k), stats: st }); }
        await new Promise(z => setTimeout(z, 500));
      }
      if (speichern) { this._txt('st_h', tpl(this._T.speichernAn, { r: +c.raw_days || 10 })); await new Promise(z => setTimeout(z, 1000)); await this._leseGespeichert(); }
    } catch (e) { console.warn('energie-dashboard-auswertung: days', e); } finally { this._tl = false; }
  }
  _zeigeTages() {
    const tb = this._e && this._e('tb'); if (!tb) return; const F = this._F, T = this._T, an = this._an, R = this._regel, heute = mitternacht().getTime() / 1000, zeilen = {};
    const leg = (t, k, v) => { (zeilen[t] = zeilen[t] || {})[k] = v; };
    for (const d of this._tageListe()) if (d.getTime() / 1000 >= this._seit() - 1) zeilen[d.getTime() / 1000] = zeilen[d.getTime() / 1000] || {};
    if (this._stat) for (const k of Object.keys(A_STATS)) for (const x of this._stat[`${A_QUELLE}:${k}`] || []) leg(ts(x.start) / 1000, k, x.mean);
    for (const [t, w] of Object.entries(this._lokal || {})) for (const [k, v] of Object.entries(w)) if (v !== null) leg(+t, k, v);
    if (this._heute) for (const [k, v] of Object.entries(this._tagWerte(this._heute))) if (v !== null) leg(heute, k, v);
    const f = (v, d, e) => v === undefined || v === null ? '–' : F.zahl(v, d) + e;
    const html = Object.keys(zeilen).map(Number).sort((a, b) => b - a).map(t => {
      const z = zeilen[t], von = t * 1000, bis = naechsterTag(new Date(von)).getTime() + (t === heute ? 0 : 0), ende = t === heute ? Date.now() + 1 : bis;
      const ak = an.akku ? (() => { const x = this._bilanz(von, ende); return `<td>${F.whk(x.rein)}</td><td>${F.whk(x.raus)}</td><td>${this._vText(x)}</td>`; })() : '';
      const rg = R ? `<td>${f(z.aktiv_h, 1, ' h')}</td><td>${f(z.band_pct, 1, ' %')}</td><td>${f(z.reaktion_s, 0, ' s')}</td><td>${f(z.ausregel_s, 0, ' s')}</td><td>${z.tiefste_w === undefined ? '–' : F.watt(z.tiefste_w)}</td><td>${f(z.laengste_s, 0, ' s')}</td><td>${f(z.anz_spitzen, 0, '')}</td>` : '';
      return `<tr data-t="${t}" tabindex="0" role="button"><td>${t === heute ? esc(T.heute) : F.datum(new Date(von))}</td>${ak}<td>${F.whk(this._energie('grid_export_energy', von, ende))}</td>${rg}</tr>`;
    }).join('');
    if (tb.dataset.h !== html) { tb.dataset.h = html; tb.innerHTML = html || `<tr><td colspan="${this._spalten}" class="lade">${esc(T.nochKeine)}</td></tr>`; }
  }
  _txt(id, t) { const e = this._e && this._e(id); if (e && e.textContent !== t) e.textContent = t; }
}

if (!customElements.get('energie-dashboard-card')) customElements.define('energie-dashboard-card', EnergieDashboardCard);
if (!customElements.get('energie-dashboard-auswertung-card')) customElements.define('energie-dashboard-auswertung-card', EnergieDashboardAuswertungCard);
if (!customElements.get('energie-dashboard-card-editor')) customElements.define('energie-dashboard-card-editor', EnergieDashboardCardEditor);
window.customCards = window.customCards || [];
if (!window.customCards.some(k => k.type === 'energie-dashboard-card')) window.customCards.push({ type: 'energie-dashboard-card', name: 'Energie Dashboard Card', description: 'Haus als Insel mit Strom, Solar, Akku, Gas und Wasser: live und als Tageswerte', preview: true, documentationURL: 'https://github.com/tlangfe/energie-dashboard' });
if (!window.customCards.some(k => k.type === 'energie-dashboard-auswertung-card')) window.customCards.push({ type: 'energie-dashboard-auswertung-card', name: 'Energie Dashboard Auswertung (Pro)', description: 'Einspeisung, Akku rein/raus, Verlauf und Regelverhalten des Akkus nach Tag, Woche und Monat', preview: false, documentationURL: 'https://github.com/tlangfe/energie-dashboard#energie-auswertung-pro' });
console.info(`%c ENERGIE-DASHBOARD-CARD %c ${VERSION} `, 'color:#fff;background:#128f65;font-weight:700', 'color:#128f65;background:#fff;font-weight:700');
