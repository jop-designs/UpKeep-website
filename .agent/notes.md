# Implementation Notes

## Visual Notes
- Home hero uses provided bike cutout and places messaging to align with reference composition.
- Color tokens extracted from `general_notes/color_scheme.jpg` and used sitewide.
- Graphic style includes sticker labels, dotted surfaces, and bold section hierarchy inspired by provided references.

## Content Notes
- Messaging emphasizes emotional degradation of bikes and preventive part-making.
- Missing copy was generated from `general_notes/general_context_info.md`, `Home_page.md`, and `make_a_part_page.md`.

## Map Notes
- Leaflet map used for static-host compatibility and editable fictional data.
- Part pages display filtered workshop markers based on part relevance.
- Clicking marker or workshop selector button updates workshop info card and photo.

## Asset Notes
- Local Unsplash files downloaded to `Assets/stock`.
- Attributions listed in `Assets/stock/attribution.md`.

## Verification Notes
- Command-run validation completed:
  - `npm install`
  - `npx playwright install chromium`
  - `npm run test:e2e`
- Result: 8/8 Playwright tests passed (smoke + visuals).
- Screenshots generated:
  - `tests/screenshots/desktop/home.png`
  - `tests/screenshots/desktop/make-a-part.png`
  - `tests/screenshots/mobile/home.png`
  - `tests/screenshots/mobile/make-a-part.png`
