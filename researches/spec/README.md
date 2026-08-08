# Project spec

Two live documents. Everything else that was here has been dropped — see the end.

| File | What it's for |
|---|---|
| [`TESTIMONIALS.md`](TESTIMONIALS.md) | **The only open item.** Tailored asks in EN and DE for the four clients, ten follow-up prompts that get specific answers, and the bar for publishing. |
| [`CONCEPT.md`](CONCEPT.md) | Positioning and audience. Still the reference for who the site talks to. |

## Current state of the site

- **Design** — Anton / Geist / Geist Mono on `#060606`, acid lime `#e1f435` accent,
  `rgb(255 255 255 / 0.1)` hairlines as the structural workhorse.
- **Structure** — hero, rotating tool rail, 2×2 use-case grid, three figure tiles,
  3×2 audience grid, offset process grid with crosshair intersections, about,
  quotes, FAQ, split reach-out. Six prerendered case pages per language at
  `/work/[slug]` with a sticky metadata rail.
- **Figures** — 70+ helped through a job search, 6 years, 18 professions.
- **Booking** — Cal.com `mohaaghanouri/discovery-call`, in a left drawer, script
  loaded only on first open.
- **Contact** — booking, email, and the form. WhatsApp and Telegram were removed.
- **Deploys** — push to `main` → GitHub Actions → `gh-pages`. No manual step.
- **`src/lib/preview.js`** — `PLACEHOLDERS` still `true`, which suppresses the FAQ
  structured data and keeps `noindex` on while the testimonial drafts are unapproved.
  The visible preview banner has been removed; the drafts carry their own labels.

## Dropped from this folder

- `BUILD-PROMPT.md` — specced the original gold-and-Fraunces design. Following it
  would have undone the current site, so it was actively misleading rather than
  merely stale.
- `NEXT-STEPS.md` — its go-live checklist was complete; the surviving items are
  listed below.
- `TESTIMONIALS-original.md` — fully absorbed into the rewritten version.

## Still worth doing, in order

1. **Real testimonials.** Five labelled drafts are live as a starting point; send
   them to the four clients for correction. Everything else is finished.
2. **Native-German read-through** before spending on ads for `/de`. The copy was
   written to be reviewed, not shipped blind — watch Sie-form consistency.
3. **Datenschutz regeneration** with the e-recht24 generator: no cookies, no
   analytics, GitHub Pages as host, Formspree and Cal.com as processors.
4. **Ten remaining tool wordmarks** — any vendor SVG dropped into `static/logos/`
   plus one line in `contact.js` turns a wordmark into a mark.
5. **Per-profession pages** (`/for/dentists`) only once there's a channel to share
   targeted links into.
6. **Analytics** only if a decision depends on it. Privacy-friendly keeps the
   Datenschutz short.
