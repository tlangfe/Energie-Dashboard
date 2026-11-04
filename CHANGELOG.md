# Changelog / Versionsverlauf

All notable changes are listed here. Versions follow [Semantic Versioning](https://semver.org/).
Alle Änderungen stehen hier. Versionen mit Bindestrich (z. B. `1.0.0-beta.1`) sind Vorab-Versionen; HACS zeigt sie nur, wenn „Beta-Versionen anzeigen“ eingeschaltet ist.

## [Unreleased]

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

[Unreleased]: https://github.com/tlangfe/energie-dashboard/compare/v1.0.0-beta.1...HEAD
[1.0.0-beta.1]: https://github.com/tlangfe/energie-dashboard/releases/tag/v1.0.0-beta.1
