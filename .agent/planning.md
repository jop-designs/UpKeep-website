# Implementation Planning Notes

## Delivery Scope
- Static multipage website, no framework build step.
- Shared CSS and JS modules for navigation, data, map behavior, and part interactions.
- Full content pages:
  - Home
  - Make a Part
  - Host a Workshop
  - About
  - 7 part detail pages

## Architecture
- `styles/main.css`: design tokens, responsive layout, component styles.
- `scripts/data.js`: parts/workshops/hotspot datasets.
- `scripts/nav.js`: top-nav behavior and active-link handling.
- `scripts/map.js`: Leaflet map setup and selection API.
- `scripts/make-a-part.js`: arrow connectors and map preview interactions.
- `scripts/part-page.js`: part-specific rendering and workshop detail syncing.
- `scripts/home.js`: dynamic previews for parts/workshops on home.

## Testing Plan
- Playwright + local static server.
- Smoke coverage:
  - Core pages load.
  - Navigation links work.
  - Mobile menu toggles.
  - Make-a-part hotspot routing works.
  - Marker selection updates part page detail card.
- Visual captures:
  - Home desktop/mobile.
  - Make-a-part desktop/mobile.
  - Saved under `tests/screenshots/{desktop,mobile}`.

## Content/Data Plan
- Fictional workshop records across major Netherlands cities.
- Part pages filtered to relevant workshop specialties.
- Unsplash images stored in `Assets/stock` with attribution file.

## Status Tracking
- [x] Scaffold directories
- [x] Shared styles and scripts
- [x] Main pages and part pages
- [x] Map and interaction behavior
- [x] Agent note files and plan archive
- [x] Playwright config/tests and run verification
- [x] Final QA pass
