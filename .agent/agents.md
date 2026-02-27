# Agent Instruction Log

## Project Intent
- Build a static UpKeep bicycles website for an open-source DIY bike-part community.
- Encourage users to repair and upgrade key bicycle parts before full bike abandonment.

## Mandatory Requirements Captured
- Follow `general_notes/style_guide.md`.
- Match home hero as closely as possible to `general_notes/main_landing_page_example_design.jpeg`.
- Use `Assets/bike_without_background.png` on main landing page.
- Use `general_notes/inspiration (1).jpeg` and `general_notes/inspiration (2).jpeg` for visual direction.
- Use `Assets/Bike vector.svg` for Make a Part page interactive diagram.
- Build top menu bar and maintain strong mobile + desktop support.
- Generate missing text content in project context where needed.
- Use Unsplash stock imagery for missing visual assets.
- Implement Make a Part interactions:
  - Bike with arrows to clickable part labels.
  - Part labels route to dedicated subpages.
  - Part subpages include map with locations.
  - Highlighting a location shows info and workspace photo.
- Create and populate:
  - Root `.agents`
  - `.agent/agents.md`
  - `.agent/planning.md`
  - `.agent/notes.md`
  - `.agent/initial_implementation_plan.md`
- Add all instruction context into `.agent` files.
- Implement Playwright testing plan with folder for saved screenshots.
- If editing markdown in `general_notes`, add agent-created lines using `-A:` (under changed lines).

## Chosen Defaults (from planning decisions)
- Map stack: Leaflet + OpenStreetMap (real map, fictional editable markers).
- Location scope: Netherlands-wide fictional workshop dataset.
- Page scope: full sitemap plus seven part pages.
- Playwright scope: smoke + visuals.
