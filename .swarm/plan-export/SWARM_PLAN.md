<!--
AUTO-GENERATED EXPORT/CHECKPOINT SNAPSHOT — DO NOT EDIT
This file is NOT the live plan. It is a derived export artifact.
- .swarm/plan-ledger.jsonl is the authoritative source of plan state.
- .swarm/plan.json and .swarm/plan.md are derived projections.
Regenerated on: save_plan and phase_complete.
-->
# Portfolio Visual Presentation & Screenshot Pipeline
Swarm: portfolio
Phase: 1 [PENDING] | Updated: 2026-08-26T02:54:14.329Z

---
## Execution Profile
- Parallelization: disabled
- Max Concurrent Tasks: 1
- Council Parallel: no
- Locked: yes
- Auto Proceed: yes
- Commit After Each Completed Task: no
- Planning Profile: balanced

---
## Phase 1: Spacious Layout & Screenshot Pipeline [PENDING]
- [ ] 1.1: Scale up the portfolio layout in src/App.tsx (with any needed tokens in src/index.css): widen every content container from max-w-6xl to max-w-7xl; raise section vertical padding from py-20 to py-24 md:py-28 across hero, stack, skills, experience, education, projects, contact, footer; increase hero top padding pt-28 to pt-36 and hero heading text-4xl md:text-5xl to text-5xl md:text-6xl; enlarge stat-card padding p-5 to p-7; enlarge project card media box h-48 to h-56 on narrow viewports while keeping object-cover fill. Must preserve usability at 360px width: no horizontal overflow, nav and two-column stat grid intact. [MEDIUM] (files_touched: ["src/App.tsx","src/index.css"])
- [ ] 1.2: Implement the local-screenshot pipeline in src/App.tsx: add a ProjectImage component whose src resolves base-aware as import.meta.env.BASE_URL + 'screenshots/<slug>.png' using the normative slugs pos-accessories-cli.png, elevator-visual-analyze.png, ldplayer-automation.png, artiflow-article-management.png, joy-journal-daily.png, grimhill.png; on load error silently fall back to the existing images.unsplash.com stock URL per project with no user-visible error UI, no unhandled exceptions, and no layout shift beyond the normal image box; create public/screenshots/.gitkeep so the target directory exists. Also make the existing hero CV anchor href '/NHEB_Tinarith_CV.docx' base-aware (reality-check-008: root-absolute href breaks under prefixed FIGMA_PUBLIC_URL deployments). Production build must exit zero after this task. [MEDIUM] (files_touched: ["public/screenshots/.gitkeep","src/App.tsx"])
- [ ] 1.3: Author docs/SCREENSHOT_CHECKLIST.md (markdown) listing every project in the featured-projects data with: exact target filename from the normative table (pos-accessories-cli.png, elevator-visual-analyze.png, ldplayer-automation.png, artiflow-article-management.png, joy-journal-daily.png, grimhill.png); exact destination directory public/screenshots/ matching FR-004 references; precisely what to capture for each (POS CLI: main menu + product listing terminal views; Elevator simulator: main visualization window mid-simulation; LDPlayer tool: GUI with multiple emulator instances visible; ArtiFlow: article list + editor views in browser; Joy Journal: live site home + entry view from https://joy-journey-daily.vercel.app; GrimHill: encryption/decryption terminal session); concrete capture steps per platform (Linux GNOME Screenshot/flameshot, Windows Win+Shift+S, macOS Cmd+Shift+4); recommended ~5:3 landscape dimensions around 1600x960; file-size budget under 500KB; exact lowercase .png extension with case-sensitivity warning for deployment hosts; center-crop note explaining that non-matching aspect ratios are cropped from the center so key content must stay centered. [SMALL] (files_touched: ["docs/SCREENSHOT_CHECKLIST.md"])
