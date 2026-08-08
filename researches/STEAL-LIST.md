# Steal list — patterns worth porting to moha.expert

Concrete, ranked by leverage. Each names the source so you can go look at it.

Your current state, for reference: dark `#0e0e0c` + gold `#d4a54a`, Fraunces over Inter,
one 44rem column, no price list, free first conversation, testimonials section built but
empty, Berlin, DE/EN.

---

## Tier 1 — highest leverage

### 1. One defensible number about your own effect
**Source:** Conor Grennan (Microsoft RCT, 388 employees, 2.07× odds) · Mark van Rijmenam
(NPS 9.2 / 200+ events) · Jarno Duursma (9.4, 9.6 per named event)

Across ~200 sites this is the strongest single differentiator, and it beats any logo wall.
You already have a candidate nobody else in the sweep has: **"about twenty people found
their current job with Mefkat."** That is a real, countable outcome about a thing you
built. Right now it sits in the middle of a case-study paragraph. It should be a headline
number.

Cheap ways to manufacture more: ask your next five coaching clients for a 1–10 rating and
one sentence, then publish the average *with the denominator* ("9.1 average across 14
engagements"). Duursma proves the denominator is what makes it credible.

### 2. Your hero states a thesis; make the credentials scannable
**Source:** Mo Gawdat's labelled credential triplet

Your headline — *"The boring half of your job can do itself"* — is already better than
almost every hero in this research. It's a thesis, not a job title, which is exactly what
separated the top sites from the brochures. Don't touch it.

What's missing is Gawdat's second move: three labelled credentials underneath, each a
category rather than a boast. Your subline currently buries "six years building AI
systems" in a 40-word paragraph. Something like:

> **Experience:** six years building AI systems
> **Practice:** dentists, lawyers, researchers, executives
> **Terms:** Berlin · English & German · first conversation free

Three seconds instead of forty words.

### 3. Publish one number about price
**Source:** Paul Roetzer ($60,000 floor) · Crux Digits (4-rung ladder) · Collective Brain,
Modular Ops, KBD (all DACH, all publish)

In DACH, 20 of 24 sites hide behind "kostenloses Erstgespräch" — which is exactly what you
do now. Your FAQ argues the case for no price list well ("a dentist's practice and a PhD
thesis don't cost the same"), and that argument is honest. But a **floor** costs you
nothing and qualifies buyers instantly: "Engagements typically start at €X." WorkWise's
framing is the one to borrow: *"Buying AI consulting usually means three calls before
anyone says a number. We think that wastes your time."*

This is the cheapest available differentiation in your specific market.

### 4. Keep the testimonials section empty until it's real
**Source:** Nicola Lazzari (anti-pattern) · Mike van Beaumond (the honest version)

Lazzari has a beautifully built site publishing real metrics, with testimonials from
"Sarah Chen", "David Kim", "Emma Rodriguez" — no companies. It reads as fabricated and
retroactively poisons the metrics. Meanwhile vanbeaumond.nl **openly states it has no
testimonials yet** and scores higher for it.

You already made the right call here. The note in `en.js` says the section stays hidden
until real quotes exist. Hold that line — and consider van Beaumond's move of saying so out
loud, which is disarming rather than embarrassing.

---

## Tier 2 — conversion mechanics

### 5. Name the response time and the call length
**Source:** Andrew Grill ("Enquire about fees & availability") · Kavita Ganesan ("Schedule a
20-Min Consult") · Zack Kass ("within one business day")

"Message me — the first conversation is free" is good. "Schedule a 20-minute call — free,
and I'll reply within a day" is better, because it removes the two unknowns that stop
people writing: how long this will take, and whether they'll be left hanging. Your form
success message already promises a day; move that promise **before** the click, not after.

### 6. Split the CTA by intent
**Source:** Hubertus Porschen's dual-CTA footer

He splits "book a keynote" from "30-min strategy call" so two different buyer intents
self-sort. Your equivalent split is real and currently collapsed into one button:
**"I want you to teach me"** versus **"I want you to build this for me."** Your `who`
section already names both ("Learn it yourself" vs everything else) — the contact section
doesn't reflect it.

### 7. A free diagnostic instead of a contact form
**Source:** Careful Industries' "Consequence Check" · Acuity's 3-minute "AI Fit Assessment"
· Naviqo's KI-Readiness check

Rated the best conversion asset found in the UK/IE segment. A short self-serve tool that is
genuinely useful, demonstrates your method, and captures intent without a call. For you this
could be five questions — profession, weekly hours lost, document volume, data sensitivity,
comfort with tools — returning an honest paragraph, including "AI won't pay off for you
here" where true. That last part is on-brand for you specifically: your third promise is
already honesty about limits.

### 8. Case studies as one line: client · number · window
**Source:** Alice Labs ("Ljusgårda, $250K/year saved, 83% cost reduction, six weeks")

Your `built` section is genuinely good writing — better prose than anything in the research.
But six long stories with no numbers is a different asset than six lines with numbers. Keep
the prose; add a one-line summary strip at the top of each, in the Alice Labs shape. You
have at least two ready: Mefkat's ~20 placements, and language-exam prep.

---

## Tier 3 — craft and design

### 9. Warm the paper, don't just darken it
**Source:** Maggie Appleton (three-step cream ramp, ink `#353534` not black) · Ethan
Marcotte (`#FFF8F4`) · Risto Uuk (`#f9f8f5`) · SmedjaAI (cream + burnt orange)

You already do the warm version of this in dark mode — `#0e0e0c` is a warm black, not
`#000`, and `#eceae4` is warm ink. That instinct is correct and rarer than it should be.
The observation worth acting on: **every single top-scoring design in the sweep is
light-mode on warm paper**, and dark-mode-plus-accent is the default look of the AI
category you're trying not to resemble. Satori and Vin Vashishta hold dark well, but they're
selling to engineers. Your buyers are dentists and lawyers.

Worth prototyping a warm-paper variant before assuming dark is right for this audience.

### 10. Fluid type with `clamp()`, no typographic breakpoints
**Source:** Matt Ström-Awn (39 `clamp()`) · Set.Studio (32, Utopia scale)

Your `app.css` sets a fixed 1.0625rem body and fixed section padding. Making the type and
spacing scale fluid between two viewport bounds removes an entire class of media-query
patchwork and is the single most portable technical improvement in the design segment.

### 11. Derive the palette from one seed
**Source:** Paul Robert Lloyd (`oklch(from var(--color-neutral) …)`)

You have six hand-picked hex values in `:root`. Deriving `--muted` and `--rule` from
`--text` via relative colour syntax means retoning the whole site is a one-line change. Low
urgency, high elegance.

### 12. Metric-matched fallback fonts
**Source:** Emil Kowalski

He ships a `Fallback` `@font-face` per family with tuned `size-adjust`, so there is zero
layout shift between fallback and webfont. You load Fraunces and Inter via `@fontsource` —
this is a real, measurable LCP win for a static site whose hero is text.

### 13. Content-type taxonomy, if you ever publish
**Source:** Maggie Appleton (Essays / Notes / Patterns / Smidgeons)

Separate indexes with different densities let a half-finished thought ship as a "Note"
without lowering the bar on the essay index. Relevant because the sweep's clearest finding
about expertise is that **publishing is what separates 8s from 10s** — Kai Spriestersbach
scored the only 10/10 on expertise purely on written substance, with a worse-looking site
than yours.

---

## Do not steal

- **Trademark soup.** Tracey Follows: Me:chine®, FutureSelf®, System & Self. Chris Hood: 7+
  proprietary "frameworks" in the nav. Reads as compensation for missing evidence.
- **Round unsourced percentages.** "+400% content creation" (gruppe himmelreich), "1838%
  ROI" (nontechies), "4,635% operating profit growth" (theaiconsultancy). One of these
  cancels out a genuine credential.
- **Stale scarcity.** Ace Studio shipped "TAKING 1 NEW PROJECTS FOR JULY" — a typo, and a
  month out of date. Scarcity copy is a maintenance commitment.
- **Generic futurism.** "Hope Engineer™", "world-defining futurist". Your plain-language
  promise is the exact opposite of this and it is your strongest asset.
- **A logo wall you can't annotate.** If you can't write one qualified sentence per logo,
  it's decoration.
