# Growth research — search, AI visibility, ads, monetisation

Research run 2026-08-08. Five parallel agents, each citing sources. Not published —
this folder sits outside `static/` and never enters the build.

**Start here:** [`00-free-plan.md`](00-free-plan.md) — the zero-cost plan, ordered,
with what's already shipped and what needs your hands.

| File | What's in it |
|---|---|
| [`00-free-plan.md`](00-free-plan.md) | The plan. Everything that costs €0, sequenced. |
| [`01-german-seo.md`](01-german-seo.md) | German keywords with real commercial intent, who ranks now, local SEO rules for a coworking address, directories worth the time, and the funding levers (Bildungszeit, INQA, Coaching BONUS, QCG, AZAV) sequenced by cost-to-unlock. |
| [`02-llm-visibility.md`](02-llm-visibility.md) | How ChatGPT, Claude, Perplexity, Gemini and AI Overviews actually pick sources. Evidence-graded, with the folklore labelled. Includes the llms.txt verdict and the crawler allow/block table. |
| [`03-advertising-rates.md`](03-advertising-rates.md) | Real German CPCs and CPMs, why LinkedIn doesn't work at this ticket size, and the trade-press rate cards that beat every platform on cost-per-decision-maker. |
| [`04-monetisation.md`](04-monetisation.md) | The BDVT 2026 fee floor, DACH-vs-US arbitrage, revenue models ranked by effective hourly rate, the productisation ladder, and a 90-day sequence. |
| [`05-technical-seo.md`](05-technical-seo.md) | Measured audit of the live site with a prioritised build list. Most of P0/P1 is already implemented. |

## The four findings that matter most

1. **The site is `noindex` and the blocker is five draft testimonials.** No search work
   counts until that flips.
2. **`KI Berater` is a trap** — nine of ten German autocompletes for it are people who want
   to *become* one. The winnable terms are profession × intent.
3. **EU AI Act Art. 4** turns AI training into a compliance purchase, and enforcement began
   2 August 2026. But Art. 4 alone carries **no direct fine** — don't sell it with one.
4. **Paid ads don't clear the CAC at a €2,000 ticket.** A classified ad reaching 78,000
   dentists costs ~€350 (≈€4.70 CPM) against LinkedIn's €100–200 CPM in this category — and
   Kammer speaking has *negative* CAC because they pay an honorarium.

## Migration notes

| File | What's in it |
|---|---|
| [`06-cloudflare-preflight.md`](06-cloudflare-preflight.md) | Live DNS captured before any change, the exact records to recreate, safe order of operations, rollback, and the email-outage risk that a nameserver switch creates. |
