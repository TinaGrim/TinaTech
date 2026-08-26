# Portfolio Typography Scale-Up

## WHAT
Make every piece of text on the portfolio website substantially larger while preserving layout integrity and visual hierarchy.

## WHY
The owner finds the current type too small for comfortable reading after the spacing overhaul; text should read "much bigger" across nav, hero, sections, cards, and footer.

## Recorded Baseline (pre-change)
- Root font-size: browser default 16px (no override in src/index.css)
- Section headings (h2): text-2xl md:text-3xl
- Contact heading: text-3xl md:text-4xl
- Hero h1: text-5xl md:text-6xl (post previous loop)
- Stat values: text-3xl
- Dense body copy (points, summaries, meta): text-xs / text-[11px]
- Nav links & buttons: text-xs

## Functional Requirements

### FR-001 — Larger root scale
The site SHALL render at a root font-size of at least 18px so all rem-based Tailwind sizes scale up globally.

### FR-002 — Larger section headings
Every section heading SHALL use at least text-3xl on mobile and text-4xl on desktop viewports; the contact heading shall exceed this by one step.

### FR-003 — Larger body copy
No primary reading content (experience points, project summaries/feature lists, education details, contact lines) SHALL remain below text-sm; the smallest decorative labels may be text-xs but never text-[10px] or smaller.

### FR-004 — Larger hero and stats
Hero supporting paragraphs SHALL be at least text-base; stat card values SHALL be at least text-5xl.

### FR-005 — Layout preservation
The type increase SHALL NOT introduce horizontal overflow at 360px viewport width or break single-column stacking.

### FR-006 — Build integrity
Production build and TypeScript check SHALL both exit zero.

## Success Criteria

- SC-001: index.css sets html font-size >= 18px.
- SC-002: grep shows zero remaining `text-xs` inside primary content lists/paragraphs of App.tsx main sections; smallest size present is `text-xs` for chips/meta only.
- SC-003: SectionHeading renders text-3xl md:text-4xl minimum; Contact heading one step larger.
- SC-004: Hero paragraphs >= text-base; stat values >= text-5xl.
- SC-005: bun run build exits 0 AND bunx tsc --noEmit exits 0.
- SC-006: No horizontal-overflow class patterns introduced (no fixed px widths).

## Assumptions
- "Much bigger" = global ~12.5% root bump plus one-to-two Tailwind steps per role, not a doubling.
- Chips/tags may stay visually small (text-[10px]/[11px] bumped one step to preserve hierarchy).

## Scope Boundaries
- Typography classes and root font-size ONLY.
- No spacing/layout changes beyond what rem-scaling inherently causes.
- No content/copy/data changes; no new dependencies; governance files out of scope.
