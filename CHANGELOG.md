# Changelog / Versionsverlauf

All notable changes are listed here. Versions follow [Semantic Versioning](https://semver.org/).
Alle Änderungen stehen hier. Versionen mit Bindestrich (z. B. `1.0.0-beta.1`) sind Vorab-Versionen; HACS zeigt sie nur, wenn „Beta-Versionen anzeigen“ eingeschaltet ist.

## [Unreleased]

## [1.0.0-beta.4] - 2026-11-09

### Fixed / Behoben
- Uploaded house images were saved but not displayed (401 from Home Assistant, path contained `/./`); images that are already saved work again too. / Hochgeladene Hausbilder wurden gespeichert, aber nicht angezeigt; auch bereits gespeicherte Bilder gehen wieder.

## [1.0.0-beta.3] - 2026-11-09

### Added / Neu
- Gas and water bubbles show the current flow above the bubble (m³/h, water as L/min). / Gas- und Wasser-Blase zeigen den aktuellen Durchfluss.
- Past days are frozen: no bubbles, no animation, no live values; circles and tiles show that day's amounts. / Frühere Tage stehen still und zeigen nur Tagesmengen.
- Options `gas_rate_max_age` (default 20 min) and `water_rate_max_age` (default 15 min).

### Changed / Geändert
- A bubble only runs when the displayed flow is above 0 and the reading is recent. / Blase nur, wenn der angezeigte Wert über 0 liegt und aktuell ist.
- Loss percentage now refers to throughput (in plus energy taken from storage), so a day that hands out the previous day's charge no longer shows a false 100 %. / Verlust-Prozent bezieht sich auf den Durchsatz.

## [1.0.0-beta.2] - 2026-11-04

### Added / Neu
- Second card **Energie Auswertung (Pro)** `custom:energie-dashboard-auswertung-card` in the same file: export per day/week/month, battery in/out and loss, history of grid, battery and home (also by calendar day, week, month), regulation behaviour (reaction and settling time after load steps, time inside tolerance band, export peaks) and a daily table.
- The analysis writes long-term statistics (`energie_auswertung:*`) **only** with `store_statistics: true` (consent switch in the editor); stored values can be deleted from the editor.
- Grid sensor rate is measured; reaction times are hidden for sensors slower than `max_rate_s`.
- New options for the analysis: `raw_days`, `start_date`, `band_w`, `jump_w`, `inverter_max_w`, `output_power`, `show_regulation`, `show_cause`, `max_rate_s`.
- `.devcontainer/` for GitHub Codespaces: test Home Assistant with sliders, template sensors, energy settings, both cards and example statistics.
- Event tables show the 20 newest entries.

### Changed / Geändert
- Loss is calculated the same way in both cards (in − out − change of content, percent of “in”).


## [1.0.0-beta.1] - 2026-11-04

First public pre-release. Erste öffentliche Vorab-Version.

### Added / Neu
- Installable via HACS (custom repository), element name `energie-dashboard-card`, runs alongside the private predecessor `energie-haus-card`.
- Visual editor with collapsible sections, help text for every field (where the value appears on the card) and a live checklist (✓ / ✗ / ⚠ for missing sensor, no number, wrong unit, no long-term statistics).
- Automatic detection from the Home Assistant energy settings (`energy/get_prefs`, new and old format), missing power sensors only from the same device. The result is shown as a suggestion and is only applied after confirming; every sensor can be changed manually.
- Variants: with/without solar, battery, gas, water; grid only; battery charging from the grid is drawn grid → home → battery.
- Example house drawing as default image; own image by upload into Home Assistant media, from media, or by path (`/local/…`); shape free/circle, size, position and anchor points (solar panels, battery, house centre) as sliders. Falls back to the drawing if the image cannot be loaded.
- Flow calculation from grid, solar and battery only (no template sensors or Riemann helpers needed). Unit conversion W/kW, Wh/kWh/MWh, m³/L.
- Daily values from hourly statistics plus live part: works with ever-increasing and daily-resetting meters; past days between two local midnights (daylight saving safe).
- German and English, number and time format by language.
- `tools/ha-dashboard.mjs`: create a test dashboard, replace the old card in an existing dashboard after a full backup, restore.

### Kept from the predecessor / Übernommen
- Calm animation (one slow bubble per line, ≥ 4 s per round, fade in/out), blue daily values, day selector, power history, energy balance with slow red pulse, battery graphic with exact fill level.

### History before this repository / Vorgeschichte
- Up to v31 (`energie-haus-card`, private): single-house card with fixed sensors, fixed flow paths and template helpers. Not published.

[Unreleased]: https://github.com/tlangfe/energie-dashboard/compare/v1.0.0-beta.2...HEAD
[1.0.0-beta.2]: https://github.com/tlangfe/energie-dashboard/releases/tag/v1.0.0-beta.2
[1.0.0-beta.1]: https://github.com/tlangfe/energie-dashboard/releases/tag/v1.0.0-beta.1
