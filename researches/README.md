# Competitor research — AI consultant & coach personal sites

Research run: 2026-08-08. Purpose: benchmark `moha.expert` against the best personal
sites of independent AI consultants, coaches and advisors across the EU and US.

## Method

Eight parallel research agents, one per market segment. Each agent searched, then
actually loaded ≥20 real sites and scored every one it could fetch on four axes,
1–10, harsh, against a global bar (not a local one):

| Axis | What it measures |
|---|---|
| **Design** | Visual craft, typography, grid, colour restraint, motion, custom vs template, mobile |
| **Success** | Named clients, case studies with numbers, real testimonials, books, stages, press, pricing transparency |
| **Quality** | Copy clarity, information architecture, trust elements, conversion path, speed |
| **Expertise** | Depth of proof — publications, technical writing, specific niche, AI substance vs buzzwords |

Sites that failed to fetch were dropped rather than guessed at. Agents were
instructed not to inflate scores and to name template fingerprints (Elementor,
Wix, stock Framer) where visible.

## Segments

| # | Segment | File |
|---|---|---|
| 1 | US solo AI consultants | [`01-us-solo-consultants.md`](01-us-solo-consultants.md) |
| 2 | DACH (DE/AT/CH) AI consultants | [`02-dach-consultants.md`](02-dach-consultants.md) |
| 3 | UK & Ireland AI consultants | [`03-uk-ireland-consultants.md`](03-uk-ireland-consultants.md) |
| 4 | Rest of continental EU | [`04-eu-continental-consultants.md`](04-eu-continental-consultants.md) |
| 5 | AI coaches & corporate trainers | [`05-coaches-trainers.md`](05-coaches-trainers.md) |
| 6 | Keynote speakers & fractional CAIOs | [`06-speakers-fractional-caios.md`](06-speakers-fractional-caios.md) |
| 7 | Design-excellent practitioner sites | [`07-design-excellence.md`](07-design-excellence.md) |
| 8 | Boutique AI studios & automation shops | [`08-boutique-studios.md`](08-boutique-studios.md) |

## Output

- [`TOP-10.md`](TOP-10.md) — the ranked cross-segment top 10 with reasoning
- [`top-10.html`](top-10.html) — the same, as a browsable page
- [`STEAL-LIST.md`](STEAL-LIST.md) — concrete patterns worth porting to moha.expert

## Baseline: what moha.expert is today

SvelteKit + adapter-static, no backend. Dark warm-black `#0e0e0c`, text `#eceae4`,
single gold accent `#d4a54a`, Fraunces serif headings over Inter body, one 44rem
editorial column, hairline rules between sections, fade-and-rise on scroll with a
`prefers-reduced-motion` escape.

Positioning: AI coaching for working professionals — dentists, lawyers, researchers,
marketers — in plain language. Berlin, English and German, direct contact only.
Free first conversation, deliberately no price list. Testimonials section is built
but empty pending real quotes.
