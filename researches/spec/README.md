# Project spec — migrated from `Marekt/studio/`

Copied 2026-08-08. Originals were left in place in `~/Desktop/Personal/Marekt/studio/`,
so delete that folder yourself once you're happy with what came across.

| File | Status | Why it's here |
|---|---|---|
| [`TESTIMONIALS.md`](TESTIMONIALS.md) | **Current — act on this** | The collection worklist: who to ask, the exact WhatsApp/Telegram message in EN and DE, and the rules (real quotes only, first name + profession, explicit OK to publish). This is the unblocker for the last placeholder on the site. |
| [`CONCEPT.md`](CONCEPT.md) | **Current** | Positioning and audience. Still the reference for who the site talks to. |
| [`NEXT-STEPS.md`](NEXT-STEPS.md) | **Partly stale** | Its "before go-live" list is done (domain, HTTPS, Formspree, Impressum, German pass). Its *deferred* list is still live: native-German read-through, e-recht24 Datenschutz regeneration, proof numbers, per-profession pages, analytics, productising the teaching offer. |
| [`BUILD-PROMPT.md`](BUILD-PROMPT.md) | **Superseded** | The build spec for the original gold-and-Fraunces single-column design. The site has been rebuilt twice since (Ace-derived palette and type, then the studio restructure). Kept as history, not as instructions — following it would undo the current site. |

## Not copied

`mohaaghanouri.png` (2.0 MB) — the source photo. `static/moha.webp` is the 30 KB
derivative the site actually serves, and a 2 MB original doesn't belong in a web
repo. It stays where it was.

## What changed since NEXT-STEPS.md was written

Worth knowing before you act on it, because it describes the v1 site:

- Design is now Anton / Geist / Geist Mono on `#060606` with an acid-lime accent,
  derived from acedesign.io's system.
- Structure is studio-shaped: hero, rotating tool rail, 2×2 use-case grid, figures
  row, audience index, offset process grid, about, FAQ, split reach-out.
- The long case-study prose referenced there has been **deleted** from the copy
  files; the four work cards carry `label` + `headline` only.
- Booking runs through Cal.com (`mohaaghanouri/discovery-call`) in a left drawer.
- Deploys are automatic: push to `main` → GitHub Actions → `gh-pages`.
- Placeholder mode (`src/lib/preview.js`) gates the banner, `noindex` and FAQ
  structured data together.
