# UpKeep Static Website Implementation Plan (Updated)

## Summary
- Build a fully static multi-page UpKeep website (HTML/CSS/JS) aligned to `general_notes/style_guide.md`, `general_context_info.md`, and the reference images.
- Match the home hero as closely as possible to `main_landing_page_example_design.jpeg`, using `Assets/bike_without_background.png`.
- Implement full sitemap pages, including interactive Make a Part flow and part detail pages with Leaflet maps and fictional Netherlands workshop locations.
- Create and populate agent note files, including a dedicated `initial_implementation_plan.md` containing this full plan.

## Public Interfaces and Data Contracts
- `scripts/data.js` exports:
  - `PARTS`: `{ slug, name, heroTitle, summary, whyItMatters, workshops[] }`
  - `WORKSHOPS`: `{ id, name, city, lat, lng, address, website, image, specialties[] }`
- `scripts/map.js` exports:
  - `initWorkshopMap({ mapElementId, workshops, onSelect, initialId })`
- `scripts/part-page.js` uses URL slug and renders:
  - Part content
  - Marker set
  - Selected workshop details/photo panel
- `scripts/make-a-part.js` uses:
  - Hotspot coordinates for clickable part labels/arrows over `Assets/Bike vector.svg`

## Site Scope
- `index.html` (Home)
- `make-a-part.html`
- `host-a-workshop.html`
- `about.html`
- `parts/saddle.html`
- `parts/handlebars.html`
- `parts/chain-guard.html`
- `parts/fender.html`
- `parts/lights.html`
- `parts/pedals.html`
- `parts/rack.html`

## Design and Content Rules
- Typography:
  - Body: Geist Mono
  - Subtitle: Quicksand Medium
  - Main title: Work Sans Medium, uppercase
- Color palette:
  - Extract exact hex codes from `general_notes/color_scheme.jpg`
  - Add them under `general_notes/style_guide.md` with `-A:` lines below changed lines
- Visual direction:
  - Top menu on all pages
  - Playful graphic accents inspired by `inspiration (1).jpeg` and `inspiration (2).jpeg`
  - Consistent mobile + desktop behavior
- Content:
  - Use provided markdown content
  - Generate missing copy in-context for UpKeep goals
  - Use Unsplash images for missing visuals and store attribution in-repo

## `.agents` and `.agent` Population (Required)
- Create and populate root `.agents` file as an index/manifest for agent notes and instructions.
- Create and populate:
  - `.agent/agents.md`
  - `.agent/planning.md`
  - `.agent/notes.md`
  - `.agent/initial_implementation_plan.md`
- `.agent/initial_implementation_plan.md` will include the full implementation plan (this plan).
- Capture all user instruction requirements in the agent notes files.

## Implementation Steps
1. Scaffold folders: `styles`, `scripts`, `parts`, `assets/stock`, `tests/e2e`, `tests/screenshots/desktop`, `tests/screenshots/mobile`, `.agent`.
2. Build shared header/nav and responsive menu behavior.
3. Implement global stylesheet and design tokens from style guide + color extraction.
4. Build Home page to match provided landing reference closely.
5. Build Make a Part page with bike-vector hotspot/arrows and part navigation.
6. Build all 7 part subpages with per-part copy and map + location detail panel.
7. Build Host a Workshop and About pages from sitemap/context docs.
8. Add Unsplash context images and attribution markdown.
9. Create and populate `.agents` and `.agent/*` files, including `initial_implementation_plan.md`.
10. Update edited `general_notes/*.md` with `-A:` lines under changed lines only.

## Playwright Testing Plan
- Configure Playwright for local static serving.
- Smoke tests:
  - Core page loads
  - Top nav links
  - Mobile nav open/close
  - Make a Part hotspot click-through
  - Part page marker selection updates info/photo panel
- Visual captures:
  - Desktop and mobile screenshots for Home and Make a Part
  - Store under `tests/screenshots/desktop` and `tests/screenshots/mobile`

## Acceptance Criteria
- Home hero closely matches reference composition and tone.
- All pages are navigable and responsive on mobile/desktop.
- Make a Part interactive diagram works and routes correctly.
- Each part page map is interactive with fictional Netherlands workshop markers and detail cards.
- No broken links or console errors in primary flows.
- Agent-note files are present and populated, including `.agent/initial_implementation_plan.md`.
- `general_notes` updates follow the `-A:` annotation rule.

## Assumptions and Defaults
- Leaflet + OSM is the mapping stack for editable fictional markers now.
- Full sitemap is in scope in this iteration.
- Both root `.agents` and `.agent/*` notes are required.
- Unsplash assets are downloaded/stored locally with attribution for static hosting.
