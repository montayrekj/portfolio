---
version: 1
slug: "src-home-tsx"
primary_target: "src/Home.tsx"
related_targets: ["src/layout.tsx"]
---

# Surface brief: portfolio home (single page)

Scope: the whole one-page portfolio (src/Home.tsx and everything it renders, plus layout chrome). Visitor mode: Experience — the site's own craft is the first proof; the professional record backs it.

Audience and job: hiring managers and freelance clients, equal weight (PRODUCT.md). First belief after ten seconds: "this person is an obvious craftsman." Action: contact (form/email) or download the résumé.

Must survive: dark/light toggle, portrait photo. The contact form was removed at the owner's request (2026-11-13); contact is email (kmontayre07@gmail.com) and LinkedIn, set as two overlapping ink plates. The old `</>` logo is not kept.
Must not feel: template-looking, slow or heavy, too stark or minimal. User feedback on the static sample: "too plain" — the build must carry far more ink coverage, texture, and live craft than that sample.

## Direction contract

THESIS: The portfolio is a press proof — King's work pulled in four process inks and locked in register; full stack shown as four separations that only make a full-color image together. It refuses the dark hero + gradient name + skill-icon grid + three equal project cards template.

OWN-WORLD: White proof stock inside a warm-gray press margin with crop marks, registration targets, color-bar strips, halftone tint ramps and slug lines. Process cyan #00a0e3, magenta #e4007c (reserved for live / on press / focus), yellow #ffed00, key #141414 own whole regions as flat fields; overlaps multiply into real overprint colors. Anybody (wide, black) display, Archivo text, tabular figures. No shadows, gradients-as-decoration, glass, or rounded cards. Dark theme = "Screen" proof: RGB on near-black, name composited additively.

STORY: The visitor watches the name print into register, reads Full Stack Developer and what King is shipping now, pulls apart the live halftone portrait into the four plates of his stack, scans five job tickets of real shipped work, clicks live builds, then emails or messages King on LinkedIn, or takes the résumé.

FIRST VIEWPORT: Sticky color-bar nav (name cell, Experience C / Builds M / About Y / Contact K patches, tint ramp, Print/Screen toggle, résumé). Left ~55%: KING / JOSHUA / MONTAYRE ~130px in three lines, C/M/Y layers registering under K on load; role line, lede, magenta "On press" line naming the GoRuck rebrand, Start a project (K) + Download résumé. Right ~45%: a full-height yellow field holding a white proof card with King's portrait as a live CMYK halftone (canvas, true screen angles), its color bar, and four plate chips (Interface, Mobile, Services & data, Delivery). Crop marks + registration targets in the margin.

FORM: Press Proof — Impeccable's pick, #1 of my 7 grounded candidates; seed key 2acb410c. Signature interaction: hover/focus a plate chip to isolate that ink in the live halftone. Motion grammar: one registration on load; pointer velocity knocks the name's plates out of register and they spring back; theme switch wipes like a sheet feeding through the press. Reduced motion: all registered, no movement.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- None blocking. Project ordering keeps the existing constants order (TopFrame, Dink Up, TaraTakbo featured).
