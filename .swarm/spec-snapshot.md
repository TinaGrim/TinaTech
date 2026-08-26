# Portfolio Visual Presentation & Screenshot Pipeline

## WHAT
Make the portfolio website visibly larger and more spacious, switch project imagery to a local-screenshot pipeline with automatic fallback, and provide the owner a checklist of exactly which screenshots to capture for projects that have no deployable UI.

## WHY
The site currently uses compact spacing and generic stock photos. The owner wants a roomier visual presentation and a path to authentic project screenshots they will supply themselves (most projects are CLI/desktop apps with no live URL).

## Recorded Baseline (pre-change measurements)
- Content container: `max-w-6xl` = 1152px
- Section vertical padding: `py-20` (80px)
- Hero top padding: `pt-28`; hero heading: `text-4xl` / `md:text-5xl`
- Project card media area: `h-48` (192px) on mobile, full-height column on desktop
- Stat card padding: `p-5`

## Functional Requirements

### FR-001 — Spacious layout scale
The site SHALL render all page sections inside a content container of at least 1280px maximum width, with section vertical padding of at least 96px on desktop viewports, applied consistently across hero, stack, skills, experience, education, projects, contact, and footer.

### FR-002 — Larger hero and stat presentation
The hero heading SHALL render at a larger type scale than the recorded baseline at both mobile and desktop widths, and stat cards SHALL use more inner padding than the recorded baseline.

### FR-003 — Larger project imagery
Each featured-project card SHALL display its image in a media area at least 224px tall on narrow viewports (up from the 192px baseline), preserving the fill-and-cover presentation.

### FR-004 — Local screenshot source of truth
Every featured project SHALL reference its primary image from a local static screenshot file. The exact filenames are normative:

| Project | Screenshot filename |
| --- | --- |
| POS Accessories CLI System | pos-accessories-cli.png |
| Elevator Visual & Analyze | elevator-visual-analyze.png |
| LDPlayer Automation Tool | ldplayer-automation.png |
| ArtiFlow Article Management | artiflow-article-management.png |
| Joy Journal Daily | joy-journal-daily.png |
| GrimHill | grimhill.png |

Screenshot URLs SHALL resolve correctly under any deployment base path configuration (root or prefixed).

### FR-005 — Automatic fallback
When a referenced screenshot is absent or unreadable (missing file, corrupt encoding), the UI SHALL silently fall back to the current stock photograph with no user-visible error UI, no unhandled exceptions, and no layout shift beyond the normal image box.

### FR-006 — Screenshot checklist document
A markdown checklist document at `docs/SCREENSHOT_CHECKLIST.md` SHALL list every project in the featured-projects data with: its exact target filename from the FR-004 table, the exact destination directory where each screenshot must be placed (matching the paths referenced per FR-004), precisely what to capture (screen/view/state), concrete capture steps, recommended dimensions matching the rendered media-area aspect ratio (~5:3 landscape), a file-size budget, exact lowercase `.png` extension with a case-sensitivity warning, and an acceptable-crop note explaining center-crop behavior for non-matching aspect ratios.

### FR-007 — Small-viewport preservation
After the spacing increases, the site SHALL remain usable at 360px viewport width: no horizontal overflow, and the two-column stat grid and navigation remain functional.

### FR-008 — Build integrity
The production build SHALL pass after all changes.

## Success Criteria

- SC-001: Given a desktop viewport ≥1280px, when any section is viewed, then the container maximum width is ≥1280px and section padding is ≥96px (vs 1152px / 80px baseline).
- SC-002: Given every project card in the featured-projects data is rendered, then each card's media area measures ≥224px tall on narrow viewports (vs 192px baseline).
- SC-003: Given none of the screenshot files exist, when the projects section renders, then every card shows its fallback image with no broken-image glyph and no unhandled exceptions.
- SC-004: Given exactly one valid PNG exists at its expected path, when the page reloads, then only that project's card shows the real screenshot while all other cards still show fallbacks (independent per-card behavior).
- SC-005: Given a present-but-corrupt image file at an expected path, when the card renders, then the fallback displays instead of a broken image.
- SC-006: Given the checklist document is opened at docs/SCREENSHOT_CHECKLIST.md, then every project in the featured-projects data appears with filename, destination path, capture subject, capture steps, ~5:3 dimension guidance, size budget, lowercase-.png/case-sensitivity warning, and the center-crop note.
- SC-007: Given a 360px-wide viewport, when the full page is rendered, then there is no horizontal scroll and all sections remain usable.
- SC-008: Given the build command runs, then it exits zero.

## Assumptions
- Fallback images remain remote stock-photo URLs; offline/blocked CDN contexts may show empty media boxes (accepted).
- Adding a per-project screenshot path field to the project data is permitted within scope.
- No screenshot-capture tooling is available in this environment; all real screenshots are owner-supplied via the checklist.

## Scope Boundaries
- No new runtime dependencies.
- No changes to personal data, copy text, or project metadata beyond the image path fields noted above.
- Single-page frontend only; no routing, backend, or CMS.
- Governance files (AGENTS.md, CLAUDE.md) are out of scope.
