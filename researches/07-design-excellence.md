# Segment 7 — Design-excellent solo-practitioner sites

59 sites loaded successfully. Design excellence was the primary filter; success and
expertise were scored but secondary. This is the richest segment of the sweep.

## Method note (important — these numbers are verified, not guessed)

Design galleries were largely unusable: **godly.website** 301s to `recent.design`,
**land-book.com** returns 403, and searching "best consultant websites" surfaced only
SEO listicles about AI website builders.

So discovery was direct, and to get past WebFetch's markdown conversion (which strips
all CSS), each site's HTML **plus its linked stylesheets** were curled and parsed for
`font-family`, `@font-face`, custom-property palettes, `clamp()` counts, grid
declarations and dark-mode queries. **The type stacks and hex values below are read
from source.** Where a site is JS-heavy and only CSS could be verified, it says so.

Two failures: `nabeelqu.co` (HTTP 429, Vercel checkpoint) and `exponentialview.co`
(connection timeout).

## All sites visited

| Name | URL | Region | Design | Success | Quality | Expertise | Note |
|---|---|---|---|---|---|---|---|
| Maggie Appleton | maggieappleton.com | UK | 9.5 | 8 | 9.5 | 9 | Licensed Canela Deck/Text serif; cream system (`#fcfbf7`/`#f6f5f1`) + crimson `#960462`; full token palette, dark mode, 10 grid contexts |
| Emil Kowalski | emilkowal.ski | EU | 9.5 | 8 | 9.5 | 9 | Self-hosted Sans/Serif/Mono each with metric-matched `Fallback` faces (zero CLS); `data-theme` dark; near-monochrome `#0b0b09`→`#f8f8f8` |
| Rauno Freiberg | rauno.me | EU (EE) | 9.5 | 8.5 | 9.5 | 9.5 | Custom typeface literally named "X" + JetBrains Mono; Radix 12-step gray, dark-first. JS-heavy — CSS verified, layout not |
| Ethan Marcotte | ethanmarcotte.com | US | 9 | 8 | 9 | 9 | Vesterbro + Cambon + Untitled Sans; warm `#FFF8F4` paper, oxblood `#BD222E` masthead, amber `#F9A31A` accent in dark. WebFetch 403 — CSS only |
| Matt Ström-Awn | mattstromawn.com | US | 9 | 7.5 | 9.5 | 8.5 | charterVariable + Inter + Geist Mono; **39 `clamp()`** = fully fluid type/space scale; namespaced tokens (`--t--`, `--c--`) |
| Paul Robert Lloyd | paulrobertlloyd.com | UK | 9 | 7 | 9.5 | 8.5 | Söhne + Söhne Mono; entire neutral ramp derived from one `oklch(56% .0075 288)` via relative colour; electric `#10e` accent |
| Craig Mod | craigmod.com | JP/US | 9 | 9 | 9 | 8.5 | FF Meta Serif Web Pro + Goodlife Sans; `data-theme` dark; 13 grid contexts; writing→membership funnel |
| Gwern Branwen | gwern.net | US | 9 | 8 | 9.5 | 9.5 | Source Serif 4 + Source Sans 3 + four historical initial-cap faces (Yinit, Goudy Initialen); sidenotes, link popups, multi-column index |
| Lynn Fisher | lynnandtonic.com | US | 9 | 7 | 9 | 8.5 | Custom SydoniaAtramentiqua serif + Hubano-Rough; two-colour scheme (`#e4e2d7` / `#ff3b3b`) via native `light-dark()` |
| Set.Studio (Andy Bell) | set.studio | UK | 9 | 8 | 9 | 9 | Haffer + Saans; **32 `clamp()`** (Utopia scale); warm `#f8f3ec` + single red `#e01616`. 4-person studio, not solo |
| Bartosz Ciechanowski | ciechanow.ski | EU (PL) | 9 | 8.5 | 10 | 10 | IBM Plex Sans + Inter; near-zero chrome, all design budget spent on inline interactive WebGL diagrams |
| Christoph Locher | christophlocher.com | DE | 8.5 | 6 | 9 | 8 | Untitled Sans + iA Writer Duospace; dedicated `--aside-*` marginalia token set, 17 grid contexts; Hamburg interaction designer |
| Josh W. Comeau | joshwcomeau.com | CA | 8.5 | 9.5 | 9 | 9 | Wotfard + Cartograph CF + Sriracha; oklch accents, playful physics-y motion |
| Piccalilli | piccalil.li | UK | 8.5 | 8 | 9 | 9 | Moderat + Rosart + Family; **43 `clamp()`**; heavy per-component token layering (`--post-heading-font-family` etc.) |
| Ilya Birman | ilyabirman.net | EU | 8.5 | 7.5 | 9 | 9 | Bespoke i8serif / i8sans / i8mono trio; hover-state colour pairs for every link state; dark mode |
| Andy Matuschak | andymatuschak.org | US | 8.5 | 8 | 9 | 9.5 | Spartan MB only; stacked sliding note panes; amber `#ffdd99` + electric `#3b0aff` |
| Paco Coursey | paco.me | US | 8.5 | 8 | 9 | 9 | Inter + Newsreader + Söhne; `--fg`/`--bg` single-swap theming over Radix mono scales |
| Steph Ango | stephango.com | US | 8.5 | 9 | 9 | 8.5 | Flexoki palette (`#FFFCF0` paper / `#100f0f` ink); semantic `--color-tx-normal/muted/faint` naming |
| Rasmus Andersson | rsms.me | SE/US | 8 | 9 | 9 | 9.5 | Inter + InterDisplay (his own); `color(display-p3 …)` wide-gamut accents |
| Arun Venkatesan | arun.is | US | 8 | 7 | 8.5 | 8 | Space Grotesk + Space Mono + Inter; Tachyons-derived palette; plain vertical writing list, no cards |
| Frank Chimero | frankchimero.com | US | 8 | 8.5 | 8.5 | 9 | Single licensed serif (Lyon) for everything; desaturated green-grey (`#3d4340`/`#eeeeee`/`#5e786d`); ~3KB page |
| Nikita Prokopov | tonsky.me | EU | 8 | 8 | 8.5 | 9 | IBM Plex Sans/Mono only; single acid-yellow `#FDDB29` page background as the entire brand |
| Una Kravets | una.im | US | 8 | 8.5 | 8.5 | 9 | Peach `#fff6f5` + deep pink `#c61f72`; 15 clamps, 13 grid contexts, full dark theme |
| Jhey Tompkins | jhey.dev | UK | 8 | 8 | 8.5 | 8.5 | Inter + DM Serif Text + Doto (dot-matrix display face); oklch, `data-theme`, 6 `mix-blend` |
| Manuel Moreale | manuelmoreale.com | EU (IT) | 8 | 6 | 8.5 | 7 | Iowan serif; measure set in **`rlh` units** (`--text-column: 20rlh`) — vertical rhythm as the grid |
| Tobias van Schneider | vanschneider.com | DE/US | 8 | 9 | 8 | 8.5 | Maison Neue family + NB Akademie/Architekt; black/white/`#ffd300`; GSAP. 1.1MB page |
| Dan Mall | danmall.com | US | 8 | 9 | 8 | 8.5 | Framer; Heebo + Fragment Mono; lime `#c7ff1f` on `#26211d`; 15+ testimonials as the spine of the page |
| Robin Rendle | robinrendle.com | US | 7.5 | 6.5 | 8 | 8 | Custom "MD UI" face; Radix-style 12-step neutral/primary ramps |
| Alexander Obenauer | alexanderobenauer.com | US | 7.5 | 6.5 | 8.5 | 8.5 | Crimson Pro + Inter; single yellow `#F7C409` accent; pure black/white inversion for dark |
| Kilian Valkhof | kilianvalkhof.com | NL | 7.5 | 7.5 | 8 | 8 | Asturias display + Haboro Serif; olive `#597530` on `#f0f1e8` |
| Tobias Ahlin | tobiasahlin.com | SE | 7.5 | 8 | 8 | 8.5 | Inter + Baskerville; single crimson `#d01040` accent |
| Linus Lee | thesephist.com | US | 7.5 | 8.5 | 8 | 9.5 | IBM Plex Serif + mono only; teal `#11b6a5`; "paper" component tokens; Hugo, 8KB page |
| Amelia Wattenberger | wattenberger.com | US | 7.5 | 8 | 8 | 9 | Inter + custom Parclo serif; Tailwind/shadcn base; pastel data-viz palette |
| Harry Roberts | csswizardry.com | UK | 7.5 | 9 | 8 | 9.5 | System UI + Hoefler Text; one hot pink `#f43059`; homepage IS the services page |
| Andy Bell | bell.bz | UK | 7.5 | 8 | 8 | 9 | Same token system as Set.Studio, stripped back; `#089ce7` accent; avatar hero |
| Brad Frost | bradfrost.com | US | 7 | 8.5 | 8 | 9 | League Gothic + Montserrat; mustard/brown 9-step brand ramps (`--ed-color-brand-*`) |
| Anthony Hobday | anthonyhobday.com | UK | 7 | 6.5 | 8 | 8 | **Monospace only, 3.3KB of CSS**, two colours; radical-restraint case study |
| Sebastian De Deyne | sebastiandedeyne.com | BE | 7 | 6 | 8 | 7.5 | Berkeley Mono + Tailwind v4 oklch defaults |
| Cassie Evans | cassie.codes | UK | 7 | 7.5 | 8 | 8.5 | System UI + 2KB CSS; all expression in GSAP-animated inline SVG |
| Julian Lehr | julian.digital | EU/US | 7 | 7.5 | 8 | 8.5 | Inter + Roboto Mono; terminal-prompt `>` hero; WordPress under a very clean skin |
| Alex M H Smith | basicarts.org | UK | 6.5 | 8.5 | 7 | 8.5 | EB Garamond hero on Elementor; 88 grid declarations = builder bloat |
| Benedict Evans | ben-evans.com | UK | 6.5 | 9.5 | 7 | 9.5 | Squarespace; near-zero custom CSS. Authority carried entirely by content |
| Matt Webb | interconnected.org | UK | 6.5 | 8 | 7.5 | 9 | Tachyons + Archivo 700; sells via "Unoffice Hours" + Acts Not Facts |
| James Bridle | jamesbridle.com | EU/UK | 6.5 | 8 | 7 | 9 | Work Sans + Courier; 2.8KB index page, deliberately austere |
| Geoffrey Litt | geoffreylitt.com | US | 6.5 | 8 | 7 | 9.5 | Paralucent + Expo Serif Pro; otherwise plain academic layout |
| Shreya Shankar | sh-reya.com | US | 6.5 | 8 | 7 | 9 | Inter + Libre Baskerville; cream `#fdfcfa` + `--ink` naming + brown `#8b5a3c` accent |
| Tom Critchlow | tomcritchlow.com | US | 6 | 7.5 | 7 | 8.5 | Tachyons + Libre Franklin; consulting woven into bio, no services page |
| Simon Willison | simonwillison.net | US | 6 | 9.5 | 7 | 10 | Georgia/Helvetica, no webfonts; tokenised purple accent; dark mode. Pure content velocity |
| Nate B Jones | natebjones.com | US | 6 | 8 | 6.5 | 7.5 | Astro + Tailwind v4 defaults; cyan `#12faf6` on `#0f172a`; unmistakably template-grade |
| Acts Not Facts (Matt Webb) | actsnotfacts.com | UK | 6 | 7 | 6.5 | 9 | Tailwind defaults, Inter var only, zero custom tokens |
| swyx | swyx.io | US/SG | 6 | 9 | 7 | 9 | Tailwind + system sans; per-page `--page-accent` token is the one nice idea |
| Eugene Yan | eugeneyan.com | US | 5.5 | 9 | 7 | 9.5 | Merriweather + Raleway; light/dark token pair; otherwise stock Jekyll |
| Parlance Labs (Hamel) | parlance-labs.com | US | 5.5 | 9 | 6.5 | 9.5 | Quarto with Space Grotesk + JetBrains Mono bolted on; genuine solo AI consultancy |
| Drew Breunig | dbreunig.com | US | 5.5 | 7.5 | 6.5 | 8.5 | Jekyll + Charter; one blue `#6face8` |
| Jason Liu | jxnl.co | US | 4.5 | 9 | 6 | 9.5 | MkDocs Material, Roboto, untouched theme. Top-tier AI consultant, template site |
| Hamel Husain | hamel.dev | US | 4 | 9.5 | 6 | 10 | Quarto default Bootstrap. Design is not the moat here |
| Chip Huyen | huyenchip.com | US | 4 | 9.5 | 6 | 9.5 | Jekyll Minima + Font Awesome; no custom properties at all |
| Vicki Boykis | vickiboykis.com | US | 4 | 8 | 6 | 9 | **Verdana**, 4KB CSS, intentionally anti-design |
| Luke Wroblewski | lukew.com | US | 4 | 9 | 5.5 | 9.5 | Verdana/Georgia, ~2005 markup. Enormous authority, zero design investment |

## Top 6 — what to steal, concretely

### 1. Maggie Appleton — maggieappleton.com (design 9.5)

The single closest analogue to an AI-consultant site that is also genuinely beautiful.
The whole thing rests on a licensed display serif (**Canela Deck** for headings, **Canela
Text** for body) against a warm three-step paper ramp — `--color-light-cream #fcfbf7`,
`--color-cream #f6f5f1`, `--color-tinted-cream #e6e3e1` — never pure white, which is why
it reads as printed rather than shipped. Ink is `#353534`, not black, and there is
exactly one loud colour: `--color-bright-crimson #960462` for links and emphasis, with
`--color-sea-blue #04a5bb` held in reserve for diagram accents only.

**Steal:** the *content-type taxonomy as navigation* — Essays / Notes / Patterns /
Smidgeons / Talks / Library are separate indexes with different card densities, which
lets a half-finished thought ship as a "Note" without polluting the essay index. Best
structural answer to "I need to publish often but everything must look considered."
Also: a commissioned illustration per essay in the same limited palette, so the grid
reads as one body of work rather than a blog roll.

### 2. Emil Kowalski — emilkowal.ski (design 9.5)

The benchmark for restraint, and the most directly copyable engineering detail on this
list: he self-hosts three families named simply `Sans`, `Serif`, `Mono`, and ships a
**metric-matched `Sans Fallback` / `Serif Fallback` / `Mono Fallback` `@font-face` for
each** — a local-font override with tuned `size-adjust`, so there is literally zero
layout shift between fallback and webfont. Implement that and your LCP text never jumps.

The palette is nine greys and nothing else (`#0b0b09` ink → `#f8f8f8` paper, one green
`#23863a` for success states), themed via `data-theme` so the toggle beats the OS
preference in both directions. Structurally: name + one-line role, four projects as
plain titled links with a one-clause description, ten writing links, newsletter, done —
**no hero image, no section headings larger than 20px, no cards**. Proof that for a
technical solo practitioner, hierarchy from weight and spacing alone outperforms any
visual system you could add.

### 3. Rauno Freiberg — rauno.me (design 9.5)

The craft ceiling. Custom typeface registered under the single-letter family name `X`,
paired with JetBrains Mono for metadata — nothing on the page can be identified as a
template. Colour is a **12-step Radix-style dark ramp** (`--colors-gray1: hsl(0 0% 8.5%)`
→ `--colors-gray12: hsl(0 0% 93%)`) plus a parallel 12-step **alpha ramp**
(`--colors-grayA1…A12`). The alpha ramp is the thing to steal: it lets every border,
hover fill and overlay composite correctly over any background without a second palette.

Content splits into **Projects / Craft / Field Notes**, where "Craft" is a gallery of
isolated interaction details (a toggle, an easing curve, a focus ring) — a genius format
for a consultant, because it demonstrates judgement at component scale without needing a
client to sign off on a case study. *Caveat: JS-rendered, so type stack and colour system
verified from CSS; motion and layout not confirmed.*

### 4. Ethan Marcotte — ethanmarcotte.com (design 9)

The best example of a *solo services consultant* with a real brand rather than a blog
theme. Four licensed faces do distinct jobs: **Vesterbro** (display), **Cambon** (serif),
**Untitled Sans** (UI), plus adjusted Palatino/Georgia fallbacks declared as their own
`@font-face` entries.

The move to steal is the **oxblood masthead**: `--header-bg: #BD222E` as a full-bleed band
above a warm `--page-bg: #FFF8F4` page, so the site has a recognisable colour signature
visible in a thumbnail — and in dark mode the accent flips from oxblood to amber
`#F9A31A` against `#303030`, keeping contrast legal without keeping the hue. He also
drives a watercolour background texture through a token
(`--bg-watercolor-size: clamp(400px, 80vw, 889px)`) so the decorative layer scales with
the viewport instead of being a fixed image. *WebFetch 403'd — design system verified
from stylesheets, not rendered layout.*

### 5. Matt Ström-Awn — mattstromawn.com (design 9)

The most rigorous *system* on the list and the easiest to port into an existing codebase.
**39 `clamp()` declarations** means every type size and every spacing step is fluid
between two viewport bounds — effectively no breakpoints for typography, which is why it
holds at every width without media-query patchwork. Tokens are namespaced by role
(`--t--family-serif`, `--c--theme-bg`, `--c--theme-text-secondary`), and theme values
alias to a numbered grey scale rather than hardcoding, so re-theming is a five-line diff.
Type is **charterVariable** (with a considered Palatino → Book Antiqua → Baskerville →
Bookman fallback chain), Inter for UI, Geist Mono for code.

The homepage lesson is contrarian and worth taking seriously: 50+ essays listed as **bare
hyperlinks with no dates, no cards, no excerpts** — the density of titles is itself the
credibility argument, and it loads instantly.

### 6. Paul Robert Lloyd — paulrobertlloyd.com (design 9)

A genuinely solo independent consultant (Brighton; sells to public-sector organisations)
with the most modern CSS colour architecture found. The entire neutral ramp is **derived
from one seed** — `--color-neutral: oklch(56% .0075 288)` — with every other step
generated via relative colour syntax (`oklch(from var(--color-neutral) …)`). Change one
line, the whole site re-tones. That is the correct way to build a palette in 2026 and
almost nobody here does it.

Type is **Söhne + Söhne Mono** and nothing else, one saturated accent `#10e`, plus a
separate `--color-focus: oklch(80% .1667 72)` so focus rings are a deliberate design
decision rather than a browser default. Steal also the hero copy pattern: `Hi, I'm Paul—`
then a single sentence naming *who he partners with and what outcome he delivers* — the
shortest, least-hyped positioning statement of anything loaded, doing the job of three
paragraphs.

## Near misses worth a look

- **Craig Mod** (craigmod.com) — writing→paid-membership funnel wrapped in FF Meta Serif Pro
- **Set.Studio** (set.studio) — 32-`clamp()` Utopia fluid scale, one red `#e01616` on `#f8f3ec`; but a four-person studio, not solo
- **Christoph Locher** (christophlocher.com, Hamburg) — dedicated `--aside-*` token set making margin notes a first-class layout primitive
- **Gwern** (gwern.net) — sidenotes, hover link-popups, historical drop-cap faces, if essay pages should out-typeset a book
