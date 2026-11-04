// Simuliertes Home Assistant fuer Tests im Browser: Zustaende, Statistik, Verlauf, Energie-Einstellungen.
// Alle Werte sind Beispielwerte (Beispielhaus), keine echten Daten.
(function () {
  if (!customElements.get('ha-icon')) customElements.define('ha-icon', class extends HTMLElement {
    static get observedAttributes() { return ['icon']; }
    // Mit window.MDI (Symbolpfade, nur fuer Vorschaubilder geladen) echte Symbole, sonst ein Punkt als Platzhalter
    attributeChangedCallback() {
      const p = window.MDI && window.MDI[this.getAttribute('icon')];
      if (p) { this.innerHTML = `<svg viewBox="0 0 24 24" style="width:100%;height:100%;fill:currentColor;display:block"><path d="${p}"/></svg>`; this.style.display = 'inline-flex'; this.style.width = this.style.height = 'var(--mdc-icon-size,24px)'; }
      else { this.textContent = ''; this.style.cssText += ';display:inline-flex;width:20px;height:20px;border-radius:50%;background:currentColor;opacity:.75'; }
    }
  });
  const st = (id, state, unit, dc, name, extra) => [id, { entity_id: id, state: String(state), attributes: { unit_of_measurement: unit, device_class: dc, friendly_name: name, state_class: dc === 'energy' || dc === 'gas' || dc === 'water' ? 'total_increasing' : 'measurement', ...(extra || {}) }, last_changed: new Date(Date.now() - 60e3).toISOString(), last_updated: new Date(Date.now() - 5e3).toISOString() }];
  window.mockStates = (w = {}) => Object.fromEntries([
    st('sensor.grid_power', w.grid ?? 35, 'W', 'power', 'Grid power'),
    st('sensor.grid_import', w.gridImp ?? 1250.4, 'kWh', 'energy', 'Grid import'),
    st('sensor.grid_export', w.gridExp ?? 310.2, 'kWh', 'energy', 'Grid export'),
    st('sensor.solar_power', w.pv ?? 420, 'W', 'power', 'Solar power'),
    st('sensor.solar_energy', w.pvE ?? 812.5, 'kWh', 'energy', 'Solar energy'),
    st('sensor.pv1_power', 210, 'W', 'power', 'PV1 power'), st('sensor.pv2_power', 210, 'W', 'power', 'PV2 power'),
    st('sensor.battery_power', w.batt ?? -240, 'W', 'power', 'Battery net power'),
    st('sensor.battery_charge_power', Math.max(-(w.batt ?? -240), 0), 'W', 'power', 'Battery charge power'),
    st('sensor.battery_discharge_power', Math.max(w.batt ?? -240, 0), 'W', 'power', 'Battery discharge power'),
    st('sensor.battery_soc', w.soc ?? 62, '%', 'battery', 'Battery SoC'),
    st('sensor.battery_in', 402.1, 'kWh', 'energy', 'Battery in'), st('sensor.battery_out', 380.0, 'kWh', 'energy', 'Battery out'),
    st('sensor.gas_meter', 4021.37, 'm³', 'gas', 'Gas meter'), st('sensor.gas_flow', w.gasFlow ?? 0.4, 'm³/h', 'volume_flow_rate', 'Gas flow'),
    st('sensor.water_meter', 812.118, 'm³', 'water', 'Water meter'), st('sensor.water_flow', w.waterFlow ?? 0, 'L/min', 'volume_flow_rate', 'Water flow'),
    st('sensor.phone_battery', 80, '%', 'battery', 'Phone battery'),
    st('sensor.daily_reset_kwh', w.daily ?? 1.5, 'kWh', 'energy', 'Daily reset counter'),
  ]);
  window.mockEntities = () => ({
    'sensor.grid_power': { entity_id: 'sensor.grid_power', device_id: 'meter' }, 'sensor.grid_import': { entity_id: 'sensor.grid_import', device_id: 'meter' }, 'sensor.grid_export': { entity_id: 'sensor.grid_export', device_id: 'meter' },
    'sensor.solar_power': { entity_id: 'sensor.solar_power', device_id: 'inv' }, 'sensor.solar_energy': { entity_id: 'sensor.solar_energy', device_id: 'inv' }, 'sensor.pv1_power': { entity_id: 'sensor.pv1_power', device_id: 'inv' }, 'sensor.pv2_power': { entity_id: 'sensor.pv2_power', device_id: 'inv' },
    'sensor.battery_power': { entity_id: 'sensor.battery_power', device_id: 'bat' }, 'sensor.battery_charge_power': { entity_id: 'sensor.battery_charge_power', device_id: 'bat' }, 'sensor.battery_discharge_power': { entity_id: 'sensor.battery_discharge_power', device_id: 'bat' }, 'sensor.battery_soc': { entity_id: 'sensor.battery_soc', device_id: 'bat' }, 'sensor.battery_in': { entity_id: 'sensor.battery_in', device_id: 'bat' }, 'sensor.battery_out': { entity_id: 'sensor.battery_out', device_id: 'bat' },
    'sensor.gas_meter': { entity_id: 'sensor.gas_meter', device_id: 'gas' }, 'sensor.gas_flow': { entity_id: 'sensor.gas_flow', device_id: 'gas' }, 'sensor.water_meter': { entity_id: 'sensor.water_meter', device_id: 'wat' }, 'sensor.water_flow': { entity_id: 'sensor.water_flow', device_id: 'wat' },
    'sensor.phone_battery': { entity_id: 'sensor.phone_battery', device_id: 'phone' },
  });
  // Stundenstatistik: Zaehler steigt gleichmaessig; "daily_reset_kwh" springt um Mitternacht auf 0
  const proStunde = { 'sensor.grid_import': 0.1, 'sensor.grid_export': 0.007, 'sensor.solar_energy': 0.093, 'sensor.battery_in': 0.045, 'sensor.battery_out': 0.02, 'sensor.gas_meter': 0.062, 'sensor.water_meter': 0.0059, 'sensor.daily_reset_kwh': 0.1 };
  window.mockStats = (msg, states) => {
    const out = {}, von = Date.parse(msg.start_time), bis = Date.parse(msg.end_time || new Date().toISOString());
    for (const id of msg.statistic_ids) {
      const rows = []; const live = parseFloat((states[id] || {}).state);
      for (let t = von; t + 3600e3 <= Math.min(bis, Date.now() - 600e3); t += 3600e3) {
        const r = { start: t, end: t + 3600e3 };
        if (id === 'sensor.battery_soc') { r.mean = 55; r.max = 64; r.min = 40; }
        else if (proStunde[id]) {
          r.change = proStunde[id];
          if (id === 'sensor.daily_reset_kwh') { const m = new Date(t + 3600e3); const h = m.getHours() || 24; r.state = 0.1 * h; }
          else r.state = (Number.isFinite(live) ? live : 100) - (Date.now() - (t + 3600e3)) / 3600e3 * proStunde[id];
        }
        rows.push(r);
      }
      if (rows.length) out[id] = rows;
    }
    return out;
  };
  window.mockPrefs = {
    energy_sources: [
      { type: 'grid', stat_energy_from: 'sensor.grid_import', stat_energy_to: 'sensor.grid_export', power_config: { stat_rate: 'sensor.grid_power' }, stat_rate: 'sensor.grid_power' },
      { type: 'solar', stat_energy_from: 'sensor.solar_energy', stat_rate: 'sensor.solar_power' },
      { type: 'solar', stat_energy_from: 'sensor.old_inverter_energy' },
      { type: 'battery', stat_energy_from: 'sensor.battery_out', stat_energy_to: 'sensor.battery_in', power_config: { stat_rate_from: 'sensor.battery_discharge_power', stat_rate_to: 'sensor.battery_charge_power' }, stat_rate: 'sensor.battery_power', stat_soc: 'sensor.battery_soc', capacity: 2.56 },
      { type: 'gas', stat_energy_from: 'sensor.gas_meter' },
      { type: 'water', stat_energy_from: 'sensor.water_meter' },
    ],
  };
  window.mockHass = (w = {}, opts = {}) => {
    const states = mockStates(w);
    const h = {
      states, entities: mockEntities(), language: opts.language || 'de', locale: { language: opts.language || 'de' },
      calls: [],
      async callWS(msg) {
        h.calls.push(msg.type);
        if (msg.type === 'recorder/statistics_during_period') return mockStats(msg, states);
        if (msg.type === 'history/history_during_period') {
          const out = {}; const von = Date.parse(msg.start_time) / 1000, jetzt = Date.now() / 1000;
          for (const id of msg.entity_ids) { const base = parseFloat((states[id] || {}).state) || 0; out[id] = []; for (let t = von; t < jetzt; t += 300) out[id].push({ s: String(Math.round(base * (0.6 + 0.4 * Math.sin(t / 3000) ** 2))), lu: t }); }
          return out;
        }
        if (msg.type === 'energy/get_prefs') return opts.prefs === undefined ? mockPrefs : opts.prefs;
        if (msg.type === 'recorder/get_statistics_metadata') return msg.statistic_ids.filter(i => proStunde[i]).map(i => ({ statistic_id: i }));
        if (msg.type === 'media_source/browse_media') return { children: [{ title: 'haus.png', media_class: 'image', media_content_type: 'image/png', media_content_id: 'media-source://media_source/local/haus.png' }] };
        if (msg.type === 'media_source/resolve_media') return { url: opts.mediaUrl || 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="#357"/></svg>') };
        throw new Error('unknown ' + msg.type);
      },
      fetchWithAuth: async () => new Response(JSON.stringify({ media_content_id: 'media-source://media_source/local/neu.png' }), { status: 200 }),
    };
    return h;
  };
})();
