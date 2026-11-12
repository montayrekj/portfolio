---
name: King Joshua Montayre · Portfolio
description: A press proof, with the work pulled in four process inks and locked in register.
colors:
  press-margin: "#e6e4de"
  proof-stock: "#ffffff"
  key-ink: "#141414"
  second-ink: "#4b4c50"
  hairline: "#d6d4cd"
  process-cyan: "#00a0e3"
  process-magenta: "#e4007c"
  process-yellow: "#ffed00"
  overprint-cm: "#2e3192"
  overprint-cy: "#00a651"
  overprint-my: "#ed1c24"
  cyan-50: "#80cff1"
  cyan-25: "#bfe7f8"
  magenta-50: "#f17fbd"
  magenta-25: "#f8bfde"
  yellow-50: "#fff680"
  yellow-25: "#fffabf"
  key-75: "#4f4f4f"
  key-50: "#8a8a8a"
  key-25: "#c4c4c4"
  key-10: "#ececea"
  on-key-2: "#c9c8c2"
  ticket-magenta: "#f8bfde"
  ticket-magenta-ink: "#5c1236"
  ticket-yellow: "#fff680"
  ticket-yellow-ink: "#4a4400"
  ticket-cyan: "#bfe7f8"
  ticket-cyan-ink: "#0b3a52"
  ticket-key: "#ececea"
  ticket-key-ink: "#4b4c50"
  ticket-current-ink: "#082636"
  screen-margin: "#0b0b0d"
  screen-stock: "#141416"
  screen-ink: "#f3f2ec"
  screen-second-ink: "#b2b1aa"
  screen-hairline: "#2f2f34"
  screen-key-10: "#232327"
  screen-name-red: "#ff3b3b"
  screen-name-green: "#22d96a"
  screen-name-blue: "#3b6bff"
  screen-yellow-field: "#19170a"
  screen-link-hover: "#ff5aa8"
  screen-ticket-magenta: "#3a0f26"
  screen-ticket-magenta-ink: "#f4bcd8"
  screen-ticket-yellow: "#2b2805"
  screen-ticket-yellow-ink: "#ebe28e"
  screen-ticket-cyan: "#0b2e3f"
  screen-ticket-cyan-ink: "#a3dbf3"
  screen-ticket-key: "#232327"
  screen-ticket-key-ink: "#b8b7b0"
typography:
  display-name:
    fontFamily: "Anybody Variable, sans-serif"
    fontSize: "min(9.3cqi, 156px, max(8cqi, calc((100svh - 575px) / 2.52)))"
    fontWeight: 900
    lineHeight: 0.84
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 118"
  display:
    fontFamily: "Anybody Variable, Archivo Variable, sans-serif"
    fontSize: "clamp(40px, 6.2vw, 92px)"
    fontWeight: 850
    lineHeight: 0.9
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 116"
  display-sm:
    fontFamily: "Anybody Variable, Archivo Variable, sans-serif"
    fontSize: "clamp(32px, 4.2vw, 60px)"
    fontWeight: 850
    lineHeight: 0.9
    letterSpacing: "-0.03em"
    fontVariation: "'wdth' 116"
  plate-letter:
    fontFamily: "Anybody Variable, sans-serif"
    fontSize: "clamp(110px, 13vw, 210px)"
    fontWeight: 900
    lineHeight: 0.74
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 125"
  ticket-year:
    fontFamily: "Anybody Variable, sans-serif"
    fontSize: "clamp(40px, 4.2vw, 60px)"
    fontWeight: 900
    lineHeight: 0.86
    letterSpacing: "-0.03em"
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 100"
  headline:
    fontFamily: "Anybody Variable, sans-serif"
    fontSize: "clamp(32px, 3.6vw, 52px)"
    fontWeight: 850
    lineHeight: 0.95
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Anybody Variable, sans-serif"
    fontSize: "clamp(28px, 2.9vw, 40px)"
    fontWeight: 850
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  title-sm:
    fontFamily: "Anybody Variable, sans-serif"
    fontSize: "22px"
    fontWeight: 820
    lineHeight: 1.05
    fontVariation: "'wdth' 110"
  body-lead:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 680
    lineHeight: 1
  slug:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "11.5px"
    fontWeight: 620
    letterSpacing: "0.06em"
    fontFeature: "'tnum' 1"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(10px, 2.1vw, 30px)"
  pad: "clamp(20px, 4.4vw, 72px)"
  pad-y: "clamp(64px, 8vw, 128px)"
  bar-h: "54px"
  trap: "clamp(18px, 2vw, 30px)"
  head-gap: "clamp(32px, 4.4vw, 64px)"
  feature-gap: "clamp(56px, 7vw, 112px)"
components:
  button-key:
    backgroundColor: "{colors.key-ink}"
    textColor: "{colors.proof-stock}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "15px 20px"
  button-key-hover:
    backgroundColor: "{colors.process-magenta}"
    textColor: "{colors.proof-stock}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.key-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "15px 20px"
  button-line-hover:
    backgroundColor: "{colors.process-yellow}"
    textColor: "{colors.key-ink}"
  nav-patch-cyan:
    backgroundColor: "{colors.process-cyan}"
    textColor: "{colors.key-ink}"
    typography: "{typography.label}"
    padding: "0 12px 7px"
    height: "{spacing.bar-h}"
  nav-patch-magenta:
    backgroundColor: "{colors.process-magenta}"
    textColor: "{colors.proof-stock}"
    padding: "0 12px 7px"
    height: "{spacing.bar-h}"
  nav-patch-yellow:
    backgroundColor: "{colors.process-yellow}"
    textColor: "{colors.key-ink}"
    padding: "0 12px 7px"
    height: "{spacing.bar-h}"
  nav-patch-key:
    backgroundColor: "{colors.key-ink}"
    textColor: "{colors.proof-stock}"
    padding: "0 12px 7px"
    height: "{spacing.bar-h}"
  theme-segment-on:
    backgroundColor: "{colors.key-ink}"
    textColor: "{colors.proof-stock}"
    padding: "0 14px"
  theme-segment-hover:
    backgroundColor: "{colors.process-yellow}"
    textColor: "{colors.key-ink}"
  plate-chip:
    backgroundColor: "{colors.proof-stock}"
    textColor: "{colors.key-ink}"
    rounded: "{rounded.none}"
    padding: "8px 10px"
  press-tag:
    backgroundColor: "{colors.process-magenta}"
    textColor: "{colors.proof-stock}"
    padding: "5px 9px 4px"
  stamp-live:
    backgroundColor: "{colors.process-magenta}"
    textColor: "{colors.proof-stock}"
    padding: "7px 11px 6px"
  stamp-done:
    backgroundColor: "transparent"
    textColor: "{colors.key-ink}"
    padding: "7px 11px 6px"
  ink-tag:
    backgroundColor: "transparent"
    textColor: "{colors.key-ink}"
    padding: "4px 8px 3px"
  ticket-current:
    backgroundColor: "{colors.process-cyan}"
    textColor: "{colors.key-ink}"
    padding: "34px var(--pad) 40px"
  ticket-magenta:
    backgroundColor: "{colors.ticket-magenta}"
    textColor: "{colors.key-ink}"
  ticket-yellow:
    backgroundColor: "{colors.ticket-yellow}"
    textColor: "{colors.key-ink}"
  ticket-cyan:
    backgroundColor: "{colors.ticket-cyan}"
    textColor: "{colors.key-ink}"
  ticket-key:
    backgroundColor: "{colors.ticket-key}"
    textColor: "{colors.key-ink}"
  contact-way-mail:
    backgroundColor: "{colors.process-magenta}"
    textColor: "{colors.proof-stock}"
    padding: "clamp(24px, 3vw, 40px)"
  contact-way-linkedin:
    backgroundColor: "{colors.process-cyan}"
    textColor: "{colors.key-ink}"
    padding: "clamp(24px, 3vw, 40px)"
  way-button-solid:
    backgroundColor: "{colors.proof-stock}"
    textColor: "{colors.key-ink}"
    padding: "12px 16px"
  way-button-solid-hover:
    backgroundColor: "{colors.key-ink}"
    textColor: "{colors.proof-stock}"
---

# Design System: King Joshua Montayre · Portfolio

## Overview

**Creative North Star: "The Press Proof"**

The site is a sheet pulled off an offset press and laid on the bench for approval. White proof stock (Proof Stock) sits inside a warm-gray press margin (Press Margin). Crop marks, registration targets, colour bars, slug lines and halftone ramps belong to the sheet. The content is printed in four process inks, cyan, magenta, yellow and key, and each ink owns whole regions as a flat field: the yellow hero field, the cyan current-job ticket, the four separation plates, the key-plate contact field. Where inks cross, they multiply into true overprint colours. They are never faked with opacity.

The full stack is told as four separations: Interface (C), Mobile (M), Services & data (Y), Delivery (K). Each one is partial by itself, and together they make the full-colour image. The live CMYK halftone portrait shows this directly. It is drawn on canvas at classic screen angles (C 15°, M 75°, Y 0°, K 45°), so the four dot grids form a rosette instead of a moiré. The visitor can pull any plate out of the print, and the About section's progressive proofs (Y, +M, +C, +K) lay the plates down in press order.

The system has two themes. **Print** (light) is subtractive CMYK on white stock. **Screen** (dark) is an RGB proof on a near-black ground: the name's plates become red, green and blue and composite additively, the yellow field becomes a yellow dot screen on a dark olive ground, and the key-ink roles invert. Density is high: heavy ink coverage, a wide-black display face, and tabular figures. The world explicitly rejects the "dark hero, gradient name, skill-icon grid, three equal project cards" portfolio template.

**Key Characteristics:**
- Four process inks as flat, unshadowed fields that own whole regions.
- Real overprints made with `mix-blend-mode: multiply` (Print) or `screen` (Screen): the name over the yellow field, trapped plate joins, trapped contact plates.
- Press furniture as structure: crop marks, registration targets, colour-bar strips, slug lines, halftone ramps.
- A live CMYK halftone portrait with plate isolation, and progressive proofs.
- A colour-bar nav whose patches carry ink readouts (C 100, M 100, Y 100, K 100).
- Square corners everywhere. Strokes are ink rules (1–3px), not soft borders.

## Colors

The palette is four process inks at full strength, plus their printed overprints and tint steps, on a white stock and a warm-gray margin.

### Primary
- **Process Cyan** (process-cyan): The Experience section's ink. It is the current-job ticket field, the C nav patch, the C separation plate, the LinkedIn contact plate, and the first feature plate. Text on it is Key Ink.
- **Process Yellow** (process-yellow): The About section's ink and the hero's field. It is also the shared hover ink for secondary actions (the line button, theme segments, the résumé cell). Text on it is always Key Ink, in both themes.

### Secondary
- **Process Magenta** (process-magenta): The Builds ink, and the only signal for *live / on press / focus*. It is used for the focus ring (3px outline, 3px offset), text selection, the "On press" tag, the live stamp, the key button's hover, live-link underlines, the Email contact plate, and the contact field's halftone ramp. Text on it is white.

### Tertiary
- **Overprints** (overprint-cm navy, overprint-cy green, overprint-my red): These are what two solid inks print as when they cross. They appear as colour-bar patches. On the page itself they are produced by blending the inks, never painted as flat fills.
- **Tint steps** (cyan/magenta/yellow at 50 and 25, key at 75/50/25/10): Used in colour bars, the nav tint ramp, and as the source for the ticket tints.

### Neutral
- **Key Ink** (key-ink): The body text, rules, and key plate in Print. In Screen, the ink role becomes **Screen Ink** (screen-ink), and the key field and key plate become light.
- **Second Ink** (second-ink / screen-second-ink): Ledes, metadata, slug text.
- **Hairline** (hairline / screen-hairline): 1px dividers inside lists and slug rules.
- **Press Margin** (press-margin / screen-margin): The page ground around the sheet, and the `theme-color`.
- **Proof Stock** (proof-stock / screen-stock): The sheet itself, the nav ground, and the plate chips.

### Theme map (Print → Screen)
These tokens change with the theme: margin, stock, ink, second ink, hairline, key, key field, on-key, key plate, key-10, and all ticket tints. The name plates change from C/M/Y to **Screen Name Red / Green / Blue**, and the name's blend mode changes from `multiply` to `screen`. These stay fixed in both themes: the process inks C/M/Y, the overprints, the tint steps, and the text colours printed *on* process fields (#141414 on cyan and yellow, #ffffff on magenta and the K patch). The proof card and progressive proofs always stay white stock, because a proof is printed paper.

### Named Rules
**The Whole-Region Rule.** An ink is a field, not an accent. Cyan, magenta, yellow and key cover whole regions (a hero half, a ticket, a plate, a section) as flat fills. They are not used as thin decoration on gray UI.

**The Magenta Means Live Rule.** Magenta marks what is live, on press, or focused, and nothing else carries those meanings. Magenta is also the Builds ink, but it is never a generic accent for headings or icons.

**The Real Overprint Rule.** Where two inks overlap, they overlap with `mix-blend-mode: multiply` on a white backing (`isolation: isolate`), so the trap prints the true overprint colour (cyan over magenta gives navy). Don't simulate overlaps with opacity or a third hand-picked fill.

**The Fixed-Ink Rule.** Text on a process field uses a literal ink that does not flip with the theme: Key Ink on cyan and yellow, white on magenta. A process field cannot invert, so its text must not invert either.

## Typography

**Display Font:** Anybody Variable (wide, black; `font-stretch` 100–125%)
**Body Font:** Archivo Variable (with Archivo, system-ui)
**Label/Mono Font:** Archivo with `tabular-nums` for every figure (years, readouts, periods)

**Character:** The display face is a wide, heavy grotesque, set tight and stretched, like a poster headline locked up on press. Archivo is the quiet job-ticket text. Both are self-hosted via `@fontsource-variable` with the width axis.

### Hierarchy
- **Display Name** (900, wdth 118, uppercase, line-height 0.84): Used only for KING / JOSHUA / MONTAYRE. It is sized with container units so it crosses into the yellow field without colliding with the plate chips. The C/M/Y plates sit under K and run into register on load.
- **Display** (850, wdth 116, clamp 40–92px, line-height 0.9): Section titles. The contact title uses clamp 40–70px. **Display Small** (clamp 32–60px) is used for sub-section titles.
- **Plate Letter** (900, wdth 125, clamp 110–210px, line-height 0.74): The giant C / M / Y / K on the separation plates.
- **Ticket Year** (900, wdth 100, clamp 40–60px, tabular): The start year on each job ticket.
- **Headline** (850, wdth 112, clamp 32–52px): Feature build titles. **Title** (clamp 28–40px): Ticket company names. **Hero role** (800, wdth 112, clamp 24–34px). **Title Small** (820, wdth 110, 22px): Gang-run names.
- **Body** (400, 17px, line-height 1.55): Running text. Lead paragraphs are 19px / 1.45. Measure is 44–68ch (ledes 50ch, ticket summaries 60ch, bullet lists 68ch).
- **Label** (620–720, 13–16px): Buttons, nav patches, chips, ink tags, fact terms.
- **Slug** (620, 11.5px, uppercase, +0.06em, tabular): Press slug lines only.

### Named Rules
**The Figures-in-Register Rule.** Every number (years, periods, C 100 readouts, proof dates) is set with `tabular-nums`.

**The Width-Is-Rank Rule.** Hierarchy comes from Anybody's width and weight together. The bigger the role, the wider it is set (100 for figures, up to 125 for plate letters). Body copy never uses Anybody.

## Layout

The page is a press sheet. The margin pads the sheet by `gutter` on each side. The sheet (`stock`) is a single white block with crop marks at its foot. A fixed 10px margin strip and the sticky colour-bar nav (`bar-h`: 54px, or 50px under 760px) sit on the sheet's top trim. Sections pad with `pad` horizontally and `pad-y` vertically. Section heads put the display title and a metadata line on one baseline row, then leave `head-gap` before the content.

Regions bleed: job tickets, the plates band and the contact field run edge to edge across the sheet, using negative `pad` margins. Colour-bar strips and slug lines join the sections like the edges of a press sheet. Sheet 2 opens the work history and sheet 4 opens About.

- **Hero:** two columns, 1.3fr copy and 1fr yellow field, min-height `clamp(620px, 100svh − 96px, 980px)`. It stacks into one column under 900px, with the plate chips in a 2-up grid (1-up under 420px).
- **Job tickets:** a 168px / 1fr / 250px grid (year, body, stamp and inks). It becomes 120px / 1fr with the meta column wrapping below at 1080px, then a single column at 760px.
- **Features:** 7fr / 5fr, alternating sides. One column under 900px. The gang run is a 3 / 2 / 1-column dashed-rule sheet.
- **Plates band:** four trapped columns, then 2 at 1080px, then 1 at 420px. The trap is preserved at every step (horizontal joins become vertical).
- **Contact:** a 5fr / 6fr key field. One column under 900px.

Breakpoints: 1240, 1080, 900, 760 and 420px.

## Elevation & Depth

The system is flat. Nothing casts a shadow, and there is no blur, glass, or decorative gradient. Depth is printed: inks overprint each other (`multiply` in Print, `screen` for the name in Screen), plates trap over their neighbours by `trap`, and the proof card sits on the yellow field as paper on paper, framed by crop marks. Halftone dot screens (the canvas portrait, the SVG ramp in the contact field, and the Screen theme's radial-gradient dot field) are the world's native texture. They are not decorative gradients.

### Shadow Vocabulary
`box-shadow` is used only as an inset ink stroke that reports state. It never lifts anything:
- **Patch hover** (`inset 0 0 0 3px var(--stock)`): A stock-coloured inner rule on a hovered nav patch.
- **Patch active** (`inset 0 -5px 0 0 var(--on-patch)`): A 5px underline bar on the current section's patch.
- **Chip pulled** (`inset 0 0 0 1.5px var(--ink)`): Doubles the chip's rule when a plate is pulled.

### Named Rules
**The Flat Ink Rule.** Process fields are flat and unshadowed. If something needs to read as "on top", it overprints or traps. It never floats.

## Shapes

Every corner is square (0px). The only circles are the live dot in the press tag, halftone dots, and registration targets. Edges are ink rules: 1.5px for the nav, chips, tickets and ink tags, 2px for buttons and fact rules, 2.5px for stamps, and 3px for the ticket stack's top rule. Hairlines (1px) divide items inside a list. Dashed 1.5px rules mark the gang-run sheet as a cutting layout. Crop marks are 1px strokes, 14–16px long, set off the corner by a 6–7px gap. Stamps are the one rotated form (−2.5°), like a rubber stamp on a ticket.

## Components

### Buttons
Buttons are solid rectangles with inked edges.
- **Shape:** square (0px), 2px border in the button's own ink.
- **Key:** Key Ink fill with stock text, 15px 20px padding, label type 16px/680. On hover it turns magenta with white text.
- **Line:** transparent with a Key Ink rule. On hover it fills yellow with #141414 text and border.
- **Icon motion:** the trailing arrow nudges 3px right on hover (0.35s, ease-out).
- **Contact plate buttons:** a solid white button (white fill, #141414 text) that inverts to #141414 on hover. The outline variant fills white on hover.

### Chips (plate chips)
- **Style:** stock ground, 1.5px Key Ink rule, a 44px ink swatch cell holding the plate letter (Anybody 900, 22px), and a two-line label.
- **State:** on hover, focus or pressed, the chip slides 10px left (4px up when stacked), its rule doubles, and the matching plate isolates in the halftone. The other plates drop to 7% opacity. `aria-pressed` reflects the pulled state.

### Ink tags and stamps
- **Ink tags:** 1.5px-ruled square tags (13px/620) that list the tools used on a job or build.
- **Stamps:** Anybody 900, uppercase, a 2.5px rule, rotated −2.5°. The live stamp is filled magenta; the done stamp is outlined in ink.
- **Press tag:** a square magenta tag (12px/760, uppercase, +0.08em) with a pulsing white dot (2.4s) that marks what is on press now.

### Cards / Containers (job tickets and plates)
- **Job tickets:** full-bleed bands separated by 1.5px ink rules, under a 3px top rule. The current job is solid cyan. Past jobs cycle through the tint fields magenta → yellow → cyan → key (ticket-* tokens). Each tint redefines the second ink, so metadata stays legible on its own field. Square bullets (8px) are printed in the ticket's ink.
- **Feature plates:** a solid ink field (C, M, Y, K in order) with padding `clamp(14px, 2.2vw, 30px)`, framing a screenshot with a 1px outline. On hover the image scales to 1.012 over 0.6s.
- **Separation plates:** four columns on a white backing, each a multiplied ink field (min-height 460px) that traps over its neighbour. Hovering a plate isolates it: the other plates drop to 32% opacity and 0.4 saturation.
- **Shadow strategy:** none (see Elevation & Depth).

### Navigation (colour-bar nav)
A sticky colour bar that sits on the sheet's top trim. It is a single row of cells divided by 1.5px rules: name cell, four ink patches, a five-step tint ramp, the Print/Screen segmented control, and a résumé cell. Each patch is a solid process ink with its label bottom-left and an ink readout (C 100, M 100, Y 100, K 100, tabular, 11px) at top-right. The section in view gets a 5px underline bar and a registration mark that spins in (0.5s). Theme segments show a CMYK·light / RGB·dark subline. The "on" segment is filled with ink, and the others hover yellow. Under 760px the bar collapses to the four patches plus a theme-flip button. The readouts, ramp and subline are dropped at narrower widths.

### Halftone portrait (signature)
A canvas proof drawn from a live CMYK separation of the portrait (GCR 0.85, with a light cyan ground screen). Each plate is an amplitude-modulated dot screen at its press angle, dot radius at most 0.72 × cell (cell 4.2px in the hero, 3.8px in progressive proofs). The plates are stacked with `multiply` and fade in over 0.5s. The proof card is always white stock with a 12px border, crop marks, a seven-patch colour bar, and a caption that reads "Four-color process", or "<Ink> plate only" while a plate is isolated.

### Press furniture
- **Slug line:** registration mark, job name, C/M/Y/K plate swatches and proof date, set as 11.5px uppercase slug type over a hairline.
- **Colour strip:** 14px tall (10px in the footer). A repeating run of 17 patches: solids, overprints, then tint steps.
- **Crop marks and registration targets:** 1px and 1.25px strokes in the current ink. Targets flank the hero at mid-height.
- **Halftone ramp:** an SVG amplitude-modulated magenta dot ramp rotated 15°, printed across the top of the contact field.

### Contact plates
Two trapped ink plates on a white backing over the key field. Email is magenta; LinkedIn is cyan. LinkedIn overlaps Email by `trap` and multiplies, so the join prints navy. The whole LinkedIn plate is a link. Its "go" line underlines on hover, and the email address underlines at 3px.

### Motion
- **Easing:** one ease-out curve, `cubic-bezier(0.16, 1, 0.3, 1)`, for all state changes.
- **Registration:** on load, the name's C/M/Y plates run into register (1.3s, staggered 0.2s / 0.26s / 0.32s).
- **Slip:** fast pointer movement knocks the plates out of register by up to 9px, and a damped spring returns them. This only runs on fine pointers.
- **Theme switch:** a View Transition that wipes the new sheet in from the top, like a sheet feeding through the press (0.8s, `cubic-bezier(0.65, 0, 0.35, 1)`).
- **Reduced motion:** with `prefers-reduced-motion`, everything is registered and static. The plates don't animate, the dot doesn't pulse, there is no wipe, and there are no transitions on plates, chips or images.

## Do's and Don'ts

### Do:
- **Do** give each section its process ink as a whole flat field: Experience C, Builds M, About Y, Contact K.
- **Do** make overlaps real. Put `mix-blend-mode: multiply` on a white, `isolation: isolate` backing, and trap neighbouring plates by `clamp(18px, 2vw, 30px)`.
- **Do** reserve magenta for live, on-press and focus states, and keep the 3px magenta focus outline at a 3px offset.
- **Do** set every figure with `tabular-nums`, and give press furniture (slug lines, colour strips, crop marks, registration targets) real structural jobs at section joins and trims.
- **Do** keep text on process fields fixed (#141414 on cyan and yellow, white on magenta) in both themes, and keep proofs on white stock.
- **Do** route every new state through the `cubic-bezier(0.16, 1, 0.3, 1)` ease-out and provide a reduced-motion fallback that leaves everything registered.

### Don't:
- **Don't** add drop shadows, blur, glass, or rounded corners. Depth comes from overprint and trap.
- **Don't** use colour gradients as decoration. Tonal change is a halftone dot screen or a stepped tint.
- **Don't** use magenta as a generic accent on headings, icons or borders.
- **Don't** fake an overprint with opacity or a hand-picked third colour.
- **Don't** set body copy in Anybody, or set display lines in Archivo.
- **Don't** fall back to the portfolio template: dark hero with gradient name, skill-icon grid, three equal project cards.
