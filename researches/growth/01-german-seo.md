# German-market organic search for moha.expert

Research run 2026-08-08. **Method note:** SERPs sampled via the DuckDuckGo `de-de` HTML
endpoint (approximates google.de result *sets* and page types, not exact positions);
demand signals from **live Google DE autocomplete** (`suggestqueries.google.com`,
`hl=de&gl=de` — real Google data). Volumes marked *est.* are inference from autocomplete
depth, ad density and competitor page counts, not tool exports. **Verify in 20 minutes
with a free Google Ads account** (Keyword Planner works without spend) before committing
content budget.

## The single biggest finding: "KI Berater" is the wrong head term

Live Google DE autocomplete for `KI Berater`:

> ki berater **jobs** · ki berater **gehalt** · ki berater **werden** · ki berater
> **ausbildung** · ki berater **weiterbildung** · ki berater **ihk** · ki berater **tüv** ·
> ki berater **quereinsteiger** · ki berater **gesucht**

**Nine of ten suggestions are people who want to *become* an AI consultant.** Ranking for
"KI Berater" — even "KI Berater Berlin" — buys traffic that will never hire him. Any
strategy built on that head term is a trap.

`KI Schulung` autocomplete, by contrast, is pure buyer intent:

> ki schulung **für mitarbeiter** · **berlin** · **mit zertifikat** · kostenlos ·
> **pflicht** · **ihk** · **für unternehmen** · online · für mitarbeiter **pflicht**

And `KI Schulung für …`: mitarbeiter, unternehmen, **führungskräfte**, anfänger, mitarbeiter
**förderung**, **juristen**, softwareentwickler.

**Two demand drivers fall out of that, both German-specific and both stronger purchase
triggers than "productivity": compliance** ("pflicht", "zertifikat", "nachweis") **and
funding** ("förderung").

### The compliance driver

**EU AI Act Art. 4** has obliged every organisation deploying AI to ensure staff
"KI-Kompetenz" since **2 Feb 2025**, with no prescribed curriculum but a de-facto
documentation duty. The IHKs are actively pushing this at members
([IHK Hagen](https://www.ihk.de/hagen/digitalisierung/kuenstliche-intelligenz-ki/schulungspflicht-6484816),
[Haufe](https://www.haufe.de/personal/arbeitsrecht/arbeitgeberpflicht-zur-sicherstellung-der-ki-kompetenz_76_639984.html),
[eRecht24](https://www.e-recht24.de/ki/13380-weiterbildung-kuenstliche-intelligenz.html)).

**Skeptical caveat:** that segment is already commoditising. Provimedia sells a
certificate-bearing "KI-Schulung Steuerberater" at **€9.90**, 90 minutes. He cannot and
should not compete there on the transactional query. **Use compliance as the
*informational* entry point** ("do I have to? what counts as proof?") and convert to real
coaching — do not build a €9.90 product.

## Keyword map

**Head terms — do not target for rankings** (fine as PPC or brand pages):

| Term | Est. vol/mo | Who owns it | Verdict |
|---|---|---|---|
| KI Schulung(en) | 1,500–4,000 | IHK, Haufe Akademie, it-schulungen.com, Bechtle | Unwinnable ≤12 mo |
| ChatGPT Schulung Unternehmen | 700–1,500 | 121WATT, Haufe, New Horizons | Unwinnable ≤12 mo |
| KI Beratung / KI Berater | 1,000–3,000 | statworx, agencies + career-intent noise | Wrong intent **and** unwinnable |
| KI Workshop für Unternehmen | 300–800 | agencies, akademie-ki.com | Unwinnable ≤12 mo |
| KI Schulung Pflicht | 500–1,500 | Haufe, eRecht24, IHK, MDR | Unwinnable generically; steal the long-tail |

**Realistically winnable in 6 months** (profession × intent × format, German, one page each):

| Term | Est. vol/mo | Competition | 6-mo realistic? |
|---|---|---|---|
| KI Schulung Zahnarztpraxis / KI für Zahnarztpraxis | 20–80 | thin; SERP is *editorial* (BZÄK, dental-wirtschaft) not service pages | **Yes, top 3** |
| KI-Schulungspflicht Zahnarztpraxis / EU KI-VO Zahnarztpraxis | 10–50 | one ZWP article, no service pages | **Yes, #1** |
| KI Schulung Steuerkanzlei / KI Workshop Steuerberater | 30–120 | real but weak (ai-seals, provimedia, ifu, bannas) | Top 5–10 |
| KI Schulung Anwaltskanzlei / KI für Kanzleien | 30–120 | ki-fuer-juristen.de, Deutsche Anwaltakademie | Top 5–10; #1 hard |
| **KI Einzelcoaching / 1:1 KI Coaching** | 10–60 | **nearly empty — everyone sells group inhouse** | **Yes, #1 — and it's his actual product** |
| KI Schulung Berlin / KI Workshop Berlin Inhouse | 50–200 | moderate (tsa-bildung, numaai, embis, FU Berlin, IHK) | Top 10 plausible; top 3 needs GBP + reviews |
| KI Schulung Bildungszeit Berlin | 10–40 | VHS Berlin, distart | **Yes**, if recognised |
| KI wissenschaftliches Schreiben / KI Tools Doktorarbeit | 100–400 | universities + tool blogs, no consultants | Top 10 yes; **commercial value low** |
| KI Prompt Coaching für Praxisteam, "KI Sprechstunde" | <10 each | none | #1 trivially; near-zero traffic, high conversion |

### Segment reality check

- **Dentists, tax advisors, lawyers** — best economics. Small teams, high hourly value,
  compliance pressure, Kammer CE culture, they pay for named experts.
- **Teachers — commercially poor.** Berlin funds free teacher AI training via
  Senatskanzlei/LISUM, and [fobizz](https://fobizz.com/de/zusatzqualifikation-kuenstliche-intelligenz/)
  gives a certified "Zusatzqualifikation KI" away free. Keep as credibility, not revenue.
- **PhD students** — no personal budget, but the *institution* buys: Graduiertenakademien
  tender 1–2-day workshops ([TU Dresden](https://tu-dresden.de/ga/qualifizierung/promovierende-ss-26/),
  [TUHH](https://www.tuhh.de/graduiertenakademie/veranstaltungen/workshops-trainings)).
  **An email channel, not an SEO channel.**
- **Marketers** — worst SEO odds; 121WATT, medienreich and every agency own it.

## Who ranks now, and why

**a) Compliance/informational** — owned by legal publishers and institutions at DR 70–90:
Haufe, eRecht24, IHK pages, MDR, law-firm blogs, the publicly funded
[Digitalzentrum Berlin](https://digitalzentrum-berlin.de/ai-act-2025-pflicht-zur-ki-schulung-fuer-unternehmen).
Page type: 1,200–2,500-word explainer, H2 question stack, no pricing. **Don't fight the
generic term — fight `… für Zahnarztpraxen / Steuerkanzleien / Kanzleien`, which none of
them cover.**

**b) Profession-specific commercial — the soft spot.** For `KI Schulung Steuerberater`:
endriss.de, ai-seals.com, dws-medien.de, provimedia.de (€9.90), ifu-institut.de,
bannas.com, gfu.net, atikon.com. For `KI Schulung Anwaltskanzlei`: ki-fuer-juristen.de,
anwaltakademie.de, anwaltsinstitut.de, anwaltscampus.com. Mix of profession CE institutes
(strong topical authority, weak per-page SEO — they publish course records, not landing
pages) plus small specialists on near-exact-match domains with 600–1,200-word thin pages
and no depth on the actual workflow. **A single 1,800-word page with real screenshots of a
Praxis/Kanzlei workflow beats most of these.**

**c) Dentistry is close to empty of commercial pages.** `KI Beratung Zahnarztpraxis`
returns BZÄK, Landeszahnärztekammer PDFs, dental-wirtschaft.de, vendor blogs, and exactly
one consulting page (ai7.digital, programmatic doorway-style). **The cheapest first win
available.** Flip side worth knowing: Berlin's
[Philipp-Pfaff-Institut already runs an AI course](https://kursangebote.pfaff-berlin.de/kurs/seminar-fobi-orga-ki-kurs-2601/)
— simultaneously proof of demand and the best warm outreach target in the city. **Being
their Referent is worth more than ranking.**

**d) Berlin-local.** The archetype is
[franklin-partners.de/ki-beratung-berlin](https://franklin-partners.de/ki-beratung-berlin):
~2,500–3,000 words, client logos, results metrics, a **Qualifizierungschancengesetz funding
block ("bis zu 100% gefördert", "bis zu 49.750 € Lohnkostenzuschuss")**, Typeform +
Calendly, **"4,9 ★ / 545+ Google Bewertungen"**, and an "Auch in Ihrer Nähe" city-page
farm. Two takeaways: **the funding hook is the standard German conversion lever, and the
city-page game is won on review count, not content.**

## Local SEO Berlin

**Viable, with one hard rule.** Google's German guidelines permit a coworking address
**only** with year-round permanent signage, own staff on site during stated hours, and
customers actually received there
([Präsentations-Richtlinien](https://support.google.com/business/answer/3038177?hl=de)).
A desk in a shared space fails this and gets suspended — documented in Google's own German
community. Multiple businesses at one address is itself a suspension trigger.

**Therefore register as a Service-Area Business (SAB):** address used for verification
only, hidden publicly; up to **20 Städte/PLZ** as Einzugsgebiet, ideally within ~2 hours'
drive ([Einzugsgebiete](https://support.google.com/business/answer/9157481?hl=de)).
Berlin + Potsdam is plenty. A SAB still ranks in the local pack; it only loses the map-pin
proximity advantage — which matters less for "KI Schulung Berlin" typed from anywhere.

**Categories:** 1 primary + 9 secondary from ~3,800 German categories. Practical set:
primary **Unternehmensberater**; secondary **Bildungszentrum / Weiterbildungsanbieter /
Computer-Schulungsanbieter / Berater**. **There is no "KI Berater" category** — so the AI
specificity must live in the description, Services entries ("KI-Schulung für
Zahnarztpraxen") and Posts.

**Honest opportunity read.** For `KI Berater Berlin` the pack is thin, so top 3 is
realistic within ~3 months — **but per the keyword section, that pack gets clicked by job
seekers.** The pack worth winning is `KI Schulung Berlin` / `KI Workshop Berlin`, where
competitors are Bildungsträger with real offices (harder pins, but their reviews are
usually about other courses).

**The real local ranking factor is reviews.** Franklin & Partners shows 545+ at 4.9. He
can't fake that and shouldn't try; **15–25 genuine German reviews naming the profession**
("KI-Schulung für unsere Praxis") will carry local relevance far better than more copy.
Free consultations are the natural review engine — ask at the end of every one.

## Directories and citations

**Worth the time (all free or cheap):**

| Source | Why |
|---|---|
| **Google Business Profile** | The only local ranking asset that matters. |
| **KURSNET** (Bundesagentur für Arbeit) | Free, and **no AZAV needed to publish** — just Berufsbezug, open access, min. 4 Unterrichtsstunden ([kurse anbieten](https://www.arbeitsagentur.de/institutionen/kurse-anbieten)). Link + citation from arbeitsagentur.de, and it feeds the whole Weiterbildung meta-portal ecosystem. **Best free authority available.** |
| **bildungszeit.berlin.de** (once recognised) | A berlin.de citation plus warm demand. |
| **ProvenExpert** free tier | Profiles rank for "<Name> Erfahrungen" (protects brand SERPs) and the widget produces star rich-snippets. Link is nofollow-grade — value is trust/CTR. **Skip the €30–100/mo tiers** until 20+ reviews. |
| **IHK Berlin ecosystem** | A channel play, not a directory play. IHKs are loudest on the Art. 4 Schulungspflicht *and* sell competing courses. **Being a Referent > being listed.** |
| **Kammern & Berufsakademien** (Philipp-Pfaff-Institut, Zahnärztekammer Berlin, Deutsche Anwaltakademie, DAI, Steuerberaterkammer) | **Highest-value German channel, period.** They own the trust, the mailing lists and the CE credit. One Referent slot yields a profile page, a link, and pre-qualified attendees. |
| **seminarmarkt.de** basic tier | Logo + contact + one date; printed directory to ~15,000 Weiterbildungs-Einkäufer. Basic tier only. |
| 3–5 Branchenbücher (Das Örtliche, Gelbe Seiten, Cylex, 11880, Yelp) | NAP consistency only. One afternoon, free tiers. |

**Junk / waste:**

- **wlw (Wer liefert was)** — industrial procurement. Free basic entry is fine; **paid
  packages widely reported as poor value.** Nobody sources a personal AI coach from wlw.
- **Kununu** — employer reviews. No employees. Structurally impossible.
- **XING** — keep the profile for name search; as an SEO asset it's dead.
- **KfW-Beraterbörse — discontinued 31 Dec 2019.** Any blog recommending it is stale.
- **Paid "Premium-Firmeneintrag" packages, paid speaker rosters, pay-per-lead education
  portals** — charge in advance for volume he can't convert. Revisit above €8k/mo revenue.
- **Mass Branchenbuch submission services / link packages** — actively harmful.

## The funding angle, sequenced

**a) Berlin Bildungszeit recognition — cheapest real unlock. Do this.** Recognition is
granted per event by SenArbeit, applied online **at least 10 weeks before start**, with a
first-time provider dossier (legal status, Finanzamt docs, **QM and staff-qualification
evidence**) plus the didactic programme
([registration](https://bildungszeit.berlin.de/veranstalter/registrierung/)). **No fee
found.** Competitors already exploit it (distart.de markets "KI im Arbeitsalltag" as
Bildungszeit). Payoff: a berlin.de listing, an uncontested long-tail keyword, and a reason
for an employee to attend without asking their boss for money.

**b) INQA-Coaching — best fit for his product, if the window is caught.** 80% of consulting
costs, up to 12 days, SMEs <250 staff ([INQA](https://www.inqa.de/DE/angebote/inqa-coaching/inqa-coach-werden/uebersicht.html)).
**Registration window is narrow and annual: 16 March – 16 April.** **Verify Berlin
eligibility** — sources describe a "Schwerpunkt neue Bundesländer" and Berlin's ESF status
is ambiguous.

**c) Coaching BONUS (Berlin) — great money, partly wrong audience.** Max **€1,000/day**;
**first two coaching days 100% free** for a first-time applicant; then 80% (<5 years) or
50%; up to 20 days; **Digitalisierung explicitly eligible**; only coaches in the pool can
be engaged ([IBB](https://www.ibb-business-team.de/coaching-bonus/)). **The catch:**
eligible companies are Berlin KMU that are *innovativ technologieorientiert* or
*Kreativwirtschaft*. **Dental practices, law firms and Steuerkanzleien largely do not
qualify** — so this funds a different client set (startups, agencies, creative firms).

**d) Qualifizierungschancengesetz (§82 SGB III) — the segment that "can't otherwise expense
him", and it needs AZAV.** Companies <50 employees can get **up to 100% of course costs plus
up to 75% wage subsidy**; AI/digitalisation explicitly prioritised; employer applies before
start. **A §82 measure requires an AZAV Maßnahmezulassung.** This is exactly why every
funding-forward competitor page exists — the subsidy is the closing argument for a 6-person
practice that would never sign a €4,000 invoice from its own pocket.

**e) AZAV — real unlock, wrong first move.** **€2,000–6,000** certification fees plus
**€3,000–15,000** optional QM consulting; **€5,000–15,000 all-in year one**, plus annual
surveillance audits and permanent QM upkeep ([costs](https://azav-wissen.de/azav-zertifizierung-kosten/)).

Two points that change the recommendation:
- **Bildungsgutschein is the wrong market.** It funds *jobseekers*, at capped rates,
  through standardised multi-week Maßnahmen — a different business than coaching a dentist
  for two afternoons.
- **The obvious workaround is narrower than assumed.** Delivering under someone else's AZAV
  licence works only as *employed* staff; external contractors invoicing under a Träger's
  licence is **not permitted** ([FezzNRW](https://fezznrw.de/azav-coachinganbieter-und-die-kooperationspartner/)).

**Verdict: sequence it.** Bildungszeit + KURSNET now (≈€0). Coaching BONUS and INQA this
cycle (≈€0 + exam effort). **AZAV only when he has ≥3 employer-paid inhouse bookings that
were lost or discounted because §82 funding wasn't available.** Until then the lazy version
works: **write the funding page anyway.** A German page "KI-Schulung mit Förderung: welche
Wege es gibt" that honestly explains QCG/INQA/Bildungszeit converts and ranks **without any
certification** — it's what Franklin's page does, minus the certification.

**Waste flags:** AZAV as a first move; Digital Jetzt (ended); KfW-Beraterbörse (dead since
2019); consultants offering to "get you AZAV-ready"; any strategy premised on
Bildungsgutschein clients.

## Realistic timeline for a brand-new domain

Baseline: **only 1.74% of newly published pages reach top-10 within a year** (down from
5.7% in 2017), **72.9% of current top-10 pages are older than 3 years**, and the average #1
result is **5 years old** ([Ahrefs](https://ahrefs.com/blog/how-long-does-it-take-to-rank/)).
Those are per-page odds — so the strategy must be **many small ultra-specific pages, not
three big ones.**

**Months 0–3 — infrastructure and free wins.** Achievable: proper `/de/` + hreflang; GBP
live as SAB with 5–10 real reviews; KURSNET + 5 citations; Bildungszeit filed (10-week lead
means filing in month 1 to teach in month 3); 4–6 profession pages. Rankings: brand terms
and near-zero-volume ultra-long-tail. **Expect ~0–30 organic visits/month, 0–2 organic
leads.** Any lead here comes from outreach and GBP, not organic.
*Fantasy:* ranking for "KI Schulung", "KI Beratung Berlin", or anything with "Berlin" and
no reviews.

**Months 3–6 — the profession long-tail lands.** Achievable: top-3 for 3–6 profession×intent
terms where the SERP has no commercial competitor (dentistry first); local pack presence
for "KI Berater/Beratung Berlin"; first Referent slot at a Kammer (**which is what actually
produces the backlinks**). **Realistic: 80–250 organic visits/month, 2–6 qualified
enquiries/month combined organic + GBP.**
*Fantasy:* any head term; "KI Schulung Steuerberater" #1 against Endriss and the DWS/DATEV
ecosystem.

**Months 6–12 — authority compounds or it doesn't.** Achievable *if* the outreach half was
executed: 10–25 backlinks from Kammern, Institute, graduate schools, IHK, berlin.de and
podcasts; 15–30 ranking German pages; **400–1,200 organic visits/month, 6–15
enquiries/month.** With on-site content only and no links, expect roughly half and no
movement on the €-terms.
*Fantasy at 12 months:* top-3 for "KI Schulung" or "KI Beratung Berlin"; competing with
IHK/Haufe on generic terms; **expecting SEO to be his primary channel in year one. For a
solo consultant in this niche, SEO is the second channel. The first is being on stage at
the Kammer.**

## What to build, in order

1. Make **German the primary language of every commercial page**. He's selling to Berlin
   practices in German.
2. **Five German profession pages**, ~1,500–2,000 words each: Zahnarztpraxis, Steuerkanzlei,
   Anwaltskanzlei, Praxis/Arzt, Selbstständige — each with a real workflow walkthrough, a
   named Berlin reference if possible, FAQPage schema, one CTA.
3. **Five companion compliance pages:** "KI-Schulungspflicht nach Art. 4 EU-KI-VO für
   \<Beruf\>: was Sie wirklich brauchen" — the query nobody has claimed per profession, and
   the door-opener to paid work.
4. **One honest funding page** (QCG / INQA / Bildungszeit / Coaching BONUS). No
   certification required to publish it.
5. **GBP as SAB**, primary category Unternehmensberater, review request after every free
   conversation.
6. **KURSNET listing + Bildungszeit application** — both free, both this month.
7. **Ten outreach emails** to Philipp-Pfaff-Institut, Zahnärztekammer Berlin, Deutsche
   Anwaltakademie, IHK Berlin Weiterbildung, two Berlin Graduiertenakademien, offering a
   Referent slot. **This will out-earn everything above in the first six months.**

**Skipped:** AZAV, paid directories, wlw premium, ProvenExpert paid tiers, head-term content.
