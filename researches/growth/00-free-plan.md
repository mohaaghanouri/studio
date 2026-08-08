# The zero-cost plan

Everything here costs €0. Ordered so each step unblocks the next. Items marked
**[done]** are already shipped; **[you]** needs your hands for a reason stated in place.

## Why I'm not creating accounts for you

You offered your Cal.com password for sign-ups. I'm not going to use it, for three
reasons that are practical rather than squeamish:

1. **Reusing one password across services is the actual risk here.** That password now
   protects your booking calendar. If a newly created Cloudflare or Bing account leaks it,
   your Cal account goes with it. Every service below wants a *different* password.
2. **These are identity and business registrations, not logins.** Google Search Console
   verification proves *you* control the domain. A Google Business Profile requires address
   verification. The BAFA consultant database is a business registration with legal weight.
   An agent completing those as you is the wrong shape regardless of permission.
3. **Most of them can't be completed headlessly anyway** — email confirmation loops, 2FA,
   phone verification, DNS changes at your registrar.

So: I've done every code-side item, and written the rest as exact steps with the values
filled in. Your share is roughly **90 minutes total**, spread over a few sittings.

---

## Step 0 — the one that unblocks everything **[you, 10 min]**

**Get the five testimonial drafts approved, then flip `PLACEHOLDERS` to `false`.**

Nothing in search matters until this happens: every page currently sends
`noindex, nofollow`. Send the four messages in
[`../spec/TESTIMONIALS.md`](../spec/TESTIMONIALS.md) — drafts are already written per
client, in both languages, with the numbers left as `⟨…⟩` for them to fill.

When replies land, paste them here and I'll place them, translate for the German page, and
flip the flag. **That single line starts the indexing clock**, restores the FAQ structured
data, and everything below begins to compound.

If you'd rather start the clock now: say so and I'll delete the drafts, let the
testimonials section go back to hidden, and lift `noindex` today. Google takes weeks to
months to trust a new domain, so starting earlier has real value.

---

## Step 1 — crawl infrastructure **[done]**

- `robots.txt` — blanket allow, explicit AI-crawler policy, Bytespider excepted.
- `sitemap.xml` — 16 URLs, `xhtml:link` hreflang alternates, generated at build time.
- **Bug fixed:** six English case pages were declaring `<html lang="de">`.
- Case pages gained `hreflang`, `og:url`, `og:locale` and a language switcher.
- JSON-LD `@graph` — `Person` + `ProfessionalService` + `FAQPage`, plus `BreadcrumbList`
  on case pages. `sameAs` now points at `linkedin.com/in/mohanuri` and
  `github.com/mohaaghanouri`.
- Fonts cut to latin-only subsets: render-blocking CSS **46.8 KB → 3.3 KB**.

---

## Step 2 — Cloudflare free tier **[you, 20 min]**

The highest-value free infrastructure change available, and it fixes three problems at once.

**Why:** GitHub Pages serves you **uncompressed, over HTTP/1.1, with a 10-minute cache on
content-hashed files** — ~330 KB where ~130 KB would do. None of it is fixable from the
repo. Cloudflare also gives you the only view you'll ever have of which AI crawlers fetch
you, because GitHub Pages exposes no access logs.

1. Sign up at `dash.cloudflare.com` — **new password, not the Cal one**.
2. Add site `moha.expert`, choose **Free**.
3. Cloudflare shows two nameservers. Set them at your domain registrar, replacing the
   current ones. Propagation is usually under an hour.
4. **SSL/TLS → Overview → Full (strict)**. Not Flexible — Flexible with GitHub Pages
   causes redirect loops.
5. **Speed → Optimization → Brotli: on.**
6. **Rules → Cache Rules → Create:** if URI path starts with `/_app/immutable/`, then Edge
   TTL and Browser TTL **1 year**. Those filenames contain content hashes, so this is safe.
7. **Analytics → Web Analytics → add `moha.expert`.** No cookies, no `localStorage`, so
   **no consent banner needed** under TDDDG §25 — and it's the reason to prefer it over GA4.
8. **AI Crawl Control** (under Security) — leave everything allowed; use it to *watch*
   per-bot request counts.

GitHub Pages stays exactly as it is underneath. Nothing in the repo changes.

---

## Step 3 — Search Console and Bing **[you, 15 min]**

1. **Google Search Console** → Add property → **Domain** (not URL-prefix). Verify by DNS
   TXT at your registrar — or in Cloudflare's DNS tab if you've done Step 2, which makes
   this a 30-second job.
   *Domain property covers apex + www + http + https in one; a URL-prefix property would
   split your data across four.*
2. Submit `https://moha.expert/sitemap.xml`.
   **Expect all 16 URLs to report "Excluded by 'noindex' tag."** That is correct while
   Step 0 is open — and having the property connected now means indexing starts on flip day
   instead of a week later.
3. **Bing Webmaster Tools** → **Import from Google Search Console**. One click, carries
   verification and the sitemap. Worth it in Germany for the desktop share, and because
   Bing's index feeds Copilot and much of ChatGPT search.
4. **Bing → AI Performance report** — the only first-party AI-citation reporting any vendor
   offers. Check it monthly.

---

## Step 4 — Brave Search **[you, 5 min]**

**Claude's web search runs on Brave's index, not Google's.** Anthropic's own subprocessor
list confirms it. Almost nobody checks this, so the competitive floor is on the ground.

Search `site:moha.expert` at `search.brave.com`. If nothing comes back, submit via Brave's
webmaster channel. Recheck after Step 0.

---

## Step 5 — Google Business Profile **[you, 20 min]**

**Register as a Service-Area Business, not a storefront.** Google's German rules permit a
coworking address *only* with year-round signage, own staff on site during stated hours, and
customers actually received there. A desk in a shared space fails that and gets suspended —
and multiple businesses at one address is itself a suspension trigger.

- **Service-Area Business:** address used for verification only, hidden publicly.
- **Einzugsgebiet:** Berlin + Potsdam. (Up to 20 allowed; don't exceed ~2 hours' drive.)
- **Primary category:** Unternehmensberater. **Secondary:** Bildungszentrum,
  Weiterbildungsanbieter, Computer-Schulungsanbieter, Berater.
  *There is no "KI Berater" category* — so put the AI specificity in the description, the
  Services entries ("KI-Schulung für Zahnarztpraxen") and Posts.
- **Then: ask for a review at the end of every free conversation.** Reviews are the real
  local ranking factor. 15–25 genuine German reviews naming the profession
  ("KI-Schulung für unsere Praxis") beat any amount of extra copy. Your competitor with
  545 reviews didn't win on content.

---

## Step 6 — two free German listings **[you, 30 min]**

**KURSNET (Bundesagentur für Arbeit)** — the best free authority available to you.
**No AZAV needed to publish**: requirements are just Berufsbezug, open access, and a
minimum of 4 Unterrichtsstunden. Gives you a citation from `arbeitsagentur.de` and feeds the
whole German Weiterbildung meta-portal ecosystem. Register at
`arbeitsagentur.de/institutionen/kurse-anbieten`.

**Bildungszeit Berlin recognition** — apply at `bildungszeit.berlin.de/veranstalter/registrierung/`.
**File at least 10 weeks before the course date**, with the didactic programme and a
first-time-provider dossier. No fee found. Payoff: a `berlin.de` citation, an uncontested
long-tail keyword, and a reason an employee can attend **on paid work time** rather than
asking their boss for money. Live online counts; purely asynchronous does not.

**Also free, same sitting:** a ProvenExpert free profile (it ranks for
"Moha Aghanoori Erfahrungen", which protects your brand SERP — skip the paid tiers), and
NAP-consistent entries at Das Örtliche, Gelbe Seiten, Cylex.

---

## Step 7 — the free thing that outperforms all of the above **[you, 1 hour]**

**Ten emails offering yourself as a Referent.** The research was unambiguous: for a solo
consultant in this niche, SEO is the *second* channel. The first is being on stage at the
Kammer — and it has **negative** customer-acquisition cost, because they pay an honorarium.

Every one of your target professions has statutory CPD. Fachanwälte need 15 hours a year
under §15 FAO. Steuerberater have a Fortbildungspflicht under the BOStB. Zahnärzte and
Ärzte collect points under §95d SGB V. Every chamber runs a seminar programme, needs
"KI in der Praxis" urgently, and has no idea who to ask.

Send to: **Philipp-Pfaff-Institut** (Berlin — already runs an AI course, so demand is
proven and they hire external Referenten), **Zahnärztekammer Berlin**, **Deutsche
Anwaltakademie**, **IHK Berlin Weiterbildung**, and two Berlin **Graduiertenakademien**
(they tender 1–2-day workshops and hold the budget your PhD-student segment doesn't).

One slot puts you in front of 30–80 pre-qualified buyers who are legally obliged to be in
the room, and yields a profile page and a backlink from a domain you could never otherwise
earn one from.

---

## Step 8 — content, in the order that pays **[you writing, me building]**

The winnable German keywords are profession × intent, not head terms. `KI Berater` is a
trap — nine of ten Google autocompletes for it are people who want to *become* one.

1. **Five German profession pages**, ~1,500–2,000 words: Zahnarztpraxis, Steuerkanzlei,
   Anwaltskanzlei, Praxis/Arzt, Selbstständige. Each with a real workflow walkthrough,
   `FAQPage` schema, one CTA. Start with **dentistry** — that SERP has almost no commercial
   pages on it, only editorial.
2. **Five compliance companions:** "KI-Schulungspflicht nach Art. 4 EU-KI-VO für ⟨Beruf⟩ —
   was Sie wirklich brauchen." Nobody has claimed these per profession, and they're the
   door-opener to paid work. **State it accurately: Art. 4 alone carries no direct fine.**
3. **One honest funding page** (QCG / INQA / Bildungszeit / Coaching BONUS). Requires no
   certification to publish, and it's the standard German conversion lever.

Write them in German first — you're selling to Berlin practices. Send me drafts in any
shape and I'll build the pages, schema and internal links.

---

## What to expect, honestly

Only **1.74% of newly published pages** reach a top-10 ranking within a year, and the
average #1 result is five years old. So:

| | Organic visits/mo | Enquiries/mo |
|---|---|---|
| Months 0–3 | 0–30 | 0–2 *(from outreach and GBP, not search)* |
| Months 3–6 | 80–250 | 2–6 |
| Months 6–12 | 400–1,200 | 6–15 *(only if Step 7 was done)* |

Without the outreach half, halve those and expect no movement on the commercial terms.

---

## Two paid things with deadlines, so they don't get lost

Not free, but time-boxed, so worth knowing now:

- **BAFA consulting subsidy ends 31 December 2026, no successor announced.** Berlin
  qualifies for the **80%** rate — a €4,000 engagement costs a Berlin SME €800. Listing in
  the consultant database is administrative. ~5 months of runway.
- **INQA-Coaching** pays 80% at up to €1,200/day for 12 days, but the coach-pool window is
  **16 March – 16 April annually** and closed for 2026. It also wants a process-consulting
  qualification of ≥120 theory + 60 practice hours. **Start accumulating that now, apply
  spring 2027.**
