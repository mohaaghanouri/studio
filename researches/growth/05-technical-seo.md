# Technical SEO build list for moha.expert

Research run 2026-08-08, measured against the live site with a Chrome trace.

## Measured baseline

Desktop, unthrottled, Fastly `fra` edge, warm cache:

| Metric | Value |
|---|---|
| LCP | **142 ms** (TTFB 2 ms + 140 ms render delay); element is the `<h1>` text |
| CLS | **0.00** |
| Requests (home) | 40 |
| Bytes on the wire | **~330 KB, zero compression** |
| HTML | 27,543 B (would gzip to ~8 KB) |
| CSS | 65,969 B in 2 files, **both render-blocking** (34,200 B gzipped) |
| JS | 155,078 B across 21 files / 19 `modulepreload` (57,948 B gzipped) |
| Fonts | 4 × woff2 = 54,728 B **plus 32,760 B base64 inside the render-blocking CSS** |
| Protocol | **HTTP/1.1** — no h2, no h3 |
| `Cache-Control` | **`max-age=600` on content-hashed immutable assets** |
| `Content-Encoding` | **absent** for html/css/js/svg even with `Accept-Encoding` |

**Already correct, no action:** `www`→apex 301, `http`→`https` 301,
`mohaaghanouri.github.io/studio/`→apex 301 (no duplicate mirror), `/nope/`→real 404,
absolute canonicals, `#cal-inline` has `min-height: 34rem` so the Cal iframe cannot shift
layout, all `<img>` carry `width`/`height`, below-fold images `loading="lazy"`.

## P0 — blocking

**P0.1 The `noindex` has exactly one blocker.** Everything below is worth building now
(crawlers must be let in to *read* a `noindex`), but the ranking clock starts at
`PLACEHOLDERS = false`. Related: **do not add `aggregateRating`/`Review` JSON-LD** when
testimonials land without written permission per quote — invented review markup is both a
Google manual action and a §5b UWG problem.

**P0.2 Bug: all six English case pages declared `<html lang="de">`.** `hooks.server.js`
treated only `'/'` as English. Cost of leaving it: Bing uses `lang` for language targeting,
it contradicts the `hreflang` being added, and six English pages get read in a German voice
by screen readers. ✅ **Fixed.**

**P0.3 All 12 case pages were missing `hreflang`**, and had no language switcher — a
visitor on `/de/work/research/` could not reach the English version. The case pairs share
slugs, so the mapping is mechanical. ✅ **Fixed.**

**P0.4 `robots.txt`** — created. Notes that matter:
- robots.txt **defaults to allow**, so the functional content is four lines; per-bot `Allow`
  entries are documentation.
- **Footgun:** a named user-agent group replaces the `*` group entirely for that bot. If a
  `Disallow:` is ever added under `User-agent: *`, every named bot silently keeps full access.
- **Never "help" a `noindex` with a `Disallow`.** A blocked page can't be crawled, so its
  `noindex` is never read, so Google can index it URL-only from external links. `noindex`
  requires `Allow`. This is the classic way to make a temporary de-index permanent.

**P0.5 `sitemap.xml`** — generated at build time from the route list. Verified: an endpoint
at `src/routes/sitemap.xml/+server.js` with `prerender = true` emits `build/sitemap.xml`
correctly despite `trailingSlash: 'always'`. 16 URLs. **No `lastmod`, `changefreq` or
`priority`** — Google ignores the last two and discounts untrustworthy `lastmod`, and a
build-time `new Date()` would mark all 16 URLs changed on every deploy. ✅ **Done.**

## P1 — high impact

**P1.1 No compression, HTTP/1.1, 10-minute cache on immutable assets.** ~330 KB served
where ~130 KB would do. The 142 ms LCP is a *lab* number on a warm cache at the Frankfurt
edge; it hides 21 JS files over six HTTP/1.1 connections, fonts undiscoverable until 66 KB
of uncompressed CSS parses, and a returning visitor re-downloading everything after ten
minutes despite content-hashed filenames. **None of it is fixable on GitHub Pages.**
→ **Put Cloudflare (free tier) in front of the apex.** Gives Brotli, HTTP/2 + HTTP/3, and a
cache rule pinning `/_app/immutable/*` to `max-age=31536000, immutable`. Also unlocks
Cloudflare Web Analytics (P2.3) and AI-crawler visibility. **One change, three problems.**

**P1.2 32.7 KB of base64 fonts inside render-blocking CSS, for alphabets never used.**
70% of the main CSS file was base64. Seven `@font-face` blocks were inlined because each
woff2 is under Vite's 4096-byte `assetsInlineLimit`, and base64 grows them 33%: Geist and
Geist Mono **Cyrillic-ext, Vietnamese and box-drawing** subsets. German umlauts and ß all
live in `U+0000–00FF`, covered by `latin`. 19 `@font-face` rules existed; 4 were used.
✅ **Fixed** by importing `latin-400`/`latin-500` variants — render-blocking CSS drops from
46.8 KB to ~14 KB. **Highest impact-to-diff ratio on the whole list.**

On `font-display`/`size-adjust`: all rules carry `font-display: swap`, which is right here
because the LCP element is `<h1>` text. There's no metric-matched fallback, so swap does
reflow — CLS measured 0.00 only because Anton arrived at ~142 ms. On slow mobile that margin
vanishes. **Don't build fallback-metrics machinery speculatively;** check field CLS in Search
Console after P1.1 and P1.2, and only then tune `size-adjust`/`ascent-override`.

**P1.3 Cal.com loading is already optimal.** No third-party bytes for the ~97% who never
open the drawer, and the queueing stub before `embed.js` is the right order. Optional
refinement: `preconnect` to `app.cal.com` on button hover to cut the 1–2 s click→calendar
latency. Skipped prefetching `embed.js` itself.

**P1.4 Redundant `modulepreload` chain** — 21 JS requests for fully prerendered content.
After P1.1 it's 58 KB Brotli'd on one h2 connection and stops mattering. Don't hand-tune
chunking. `export const csr = false` on the two legal pages is a legitimate later win.

**P1.5 Structured data** — `FAQPage` existed but sat inside the `PLACEHOLDERS` guard, so the
built HTML shipped **zero** JSON-LD. Moved outside the guard: the FAQ copy is real and the
entity markup contains no misleading claims, so a `noindex` page with correct JSON-LD costs
nothing and is already right on flip day. ✅ **Done.**

Architecture: **one `@graph` per home page, entities cross-referenced by `@id`, exactly one
`ProfessionalService` node site-wide.** Identical `@id`s across EN and DE are correct — the
homes are hreflang alternates, so Google resolves one entity described in two languages. The
conflict to avoid is a *second* business node on the case pages, or nesting the business as a
full object inside `Person.worksFor` while also declaring it top-level. Reference by `@id`.

Case pages get `BreadcrumbList` only, two levels — **`/work/` returns 404**, so don't invent
an intermediate crumb pointing at a non-page. Resist `Article` (no byline, no date, no
editorial standing).

### What Google actually does with each type in 2026

| Type | Reality |
|---|---|
| `BreadcrumbList` | **Renders.** The only one that changes SERP appearance. Highest priority. |
| `Person` / `ProfessionalService` | No rich result. Entity resolution and Knowledge-Panel candidacy. **`sameAs` is where this earns its keep — and it's absent, which is the single biggest E-E-A-T gap on the site.** |
| `Service` / `OfferCatalog` | Google shows nothing. Kept because LLM retrieval parses it. **AI-visibility work, not Google-SERP work.** |
| `FAQPage` | **Rich results deprecated** — docs notice 7 May 2026, Search Console and Rich Results Test support removed June 2026, API August 2026. Markup still valid and still parsed by non-Google systems. Keep; expect zero Google SERP impact. |
| `LocalBusiness` map features | Schema doesn't produce these — a Google Business Profile does. |

**Deliberately omitted:** `priceRange` (no price list, and Google stopped displaying it);
`openingHoursSpecification` (fiction for a non-storefront); `geo` (unverified coordinates);
`aggregateRating`/`Review` (see P0.1); `WebSite`/`WebPage` (sitelinks searchbox died 2023, no
site search).

**Note on `telephone`:** the mobile number is already public via the `wa.me` link, but putting
it in JSON-LD makes it trivially scrapeable at volume. Defensible for a solo consultant who
wants to be reachable — **make it a decision, not a default.**

## P2 — worth doing

**P2.1 Bilingual implementation is right.** `x-default` on the English home is correct.
**Keep bare `de`, not `de-DE`** — the German reads correctly in Vienna and Zurich, and
`de-DE` would take AT/CH searchers out of the alternate set for no gain. Return-tag
reciprocity is automatic because both sides generate from the same constants — the usual
hreflang failure, dodged structurally. **No cross-language duplicate risk;** the real
near-duplicate risk is *within* each language (P2.2).

**P2.2 On-page gaps**

- **Case-page `meta description` is the H1.** `content={item.headline}` is also the `<h1>`
  *and* the rail "Overview" — 50 characters against ~150 usable. Add a dedicated
  `metaDescription` per case, 140–155 chars, naming profession and outcome.
- **Case-page titles target nothing.** `"Research — Moha Aghanoori"` is not a query. Pattern:
  `{label}: {concrete outcome} — AI consulting Berlin`.
- **Thin content is real.** Case pages render 218–237 words *including* rail, CTA and sibling
  links; the unique story is ~150 words. Six per language sharing identical rail, CTA and
  "more use cases" nav is the classic near-duplicate doorway shape — **the one on-page issue
  with actual ranking consequence.** Two honest options: (1) take three of six to 600+ words
  with the specifics only he has and leave three as teasers; (2) **collapse to a single
  `/work/` index page**, turning twelve thin URLs into two substantial ones and fixing the
  `/work/` 404 in passing. **Option 2 is lazier and probably better** for a solo consultant
  with no case pipeline.
- **`alt=""` on the case illustrations is correct — don't change it.** The adjacent `<h3>`
  names the case on cards, and the detail-page illustration is abstract art conveying nothing
  the `<h1>` doesn't. No `role="presentation"` needed.
- **The marquee duplicates all 20 logos** for the seamless loop, so screen readers read the
  vendor list twice and crawlers see doubled brand names that aren't his. ✅ **Fixed** — the
  duplicate half already carries `aria-hidden`.
- **The card `<h3>` included the `↗` arrow** in heading text, the link's accessible name and
  any Google snippet built from the heading. ✅ **Fixed** with `aria-hidden`.
- **Heading structure is clean** — one `<h1>` per page, no skipped levels. Content note:
  neither `<h1>` nor any `<h2>` contains "AI consultant Berlin" / "KI-Berater Berlin".
  **Do not wreck the hero headline** — put the head term in the About `<h2>` or the hero note.
- **Internal linking:** `featured(items, 4)` means `marketing-product` and `language-exams`
  are linked from nowhere on either home. They're in `entries()` so they build and appear in
  the sitemap, and every case links to all five siblings, so the graph is strongly connected
  once a crawler reaches any case. Still an odd hub — one-character fix to `6` if wanted.

**P2.3 Measurement**

- **Google Search Console: use a Domain property**, verified by DNS TXT. One property covers
  apex + `www` + `http` + `https`; a URL-prefix property would fragment data since `www` and
  `http` both 301. GitHub Pages gives no header control, and the HTML-file method only
  verifies URL-prefix. **Expect all 16 URLs to report "Excluded by 'noindex' tag"** while
  `PLACEHOLDERS = true` — correct, not a bug, and having the property connected means
  indexing starts on flip day rather than a week later.
- **Bing Webmaster Tools:** import from GSC, one click. Worth it in Germany for non-trivial
  desktop share and because its index feeds several AI retrieval paths.
- **IndexNow:** key file in `static/`, then a manual `curl` on publish. **Skip the CI step** —
  16 URLs changing a few times a year don't justify a workflow job. (Google doesn't consume
  IndexNow; this is Bing/Yandex/Seznam/Naver.)
- **Analytics without a cookie banner.** The test is TDDDG §25: consent needed for *any*
  non-essential device storage — cookie or not, `localStorage` included. Banner-free options
  store nothing client-side: **Cloudflare Web Analytics** (free, needs P1.1 anyway — best fit),
  **Plausible/Simple Analytics EU-hosted** (~€9/mo, shortest defensible Datenschutz
  paragraph), **GoatCounter** (watch the non-commercial term — this site is commercial).
  **GA4 requires a banner. Don't.**

**Three Datenschutz gaps** — it names Formspree and GitHub but not these:
- **Cal.com is not mentioned.** Clicking "Book a call" loads `app.cal.com/embed/embed.js` then
  a `cal.com` iframe — a third-country transfer that must be disclosed. The user's click is a
  reasonable consent basis; the disclosure still has to exist.
- **`localStorage` is not mentioned.** `sound.js` writes `sound: 'on'|'off'`. A
  user-initiated preference is the textbook §25 "strictly necessary" exemption, so no banner
  — but one sentence naming it belongs there.
- **Fonts are correctly self-hosted**, so there's no Google Fonts transfer. That's the German
  privacy landmine already avoided, and it deserves an explicit line
  ("Schriftarten werden von unserem Server geladen; keine Verbindung zu Google Fonts")
  because it's the first thing a German visitor's lawyer checks.

## Build order

1. Approve testimonials → `PLACEHOLDERS = false`. Everything else can ship before this.
2. ✅ `hooks.server.js` lang fix · `hreflang` + switcher on case pages.
3. ✅ `robots.txt` · `sitemap.xml` endpoint.
4. ✅ Four `latin-400/500` font imports.
5. **Cloudflare in front of the apex** — Brotli, HTTP/3, year-long immutable cache. *(yours)*
6. ✅ JSON-LD `@graph` + `BreadcrumbList` — **needs real `sameAs` URLs from you.**
7. **GSC domain property + Bing import + sitemap submission.** *(yours)*
8. Case-page titles and descriptions; decide index-page vs depth on thin content.

**Skipped deliberately:** font metric-override fallbacks, manual chunk tuning, an IndexNow CI
job, `WebSite`/`WebPage` nodes, a branded 404.
