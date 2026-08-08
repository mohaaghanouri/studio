# Getting moha.expert visible inside LLMs and AI search

Research run 2026-08-08. Evidence grades used throughout:
**[V]** vendor/primary documentation · **[S]** study with published methodology and
sample size · **[W]** weak — vendor marketing blog, no published method ·
**[X]** unproven hype / folklore.

> **On the source landscape:** the "GEO/AEO" space is roughly 90% content marketing.
> Most confident-sounding numbers in circulation ("FAQ schema weighted 40% higher",
> "schema-marked pages cited 2.3× more", "44.2% of citations come from the first 30%
> of a page") trace to agency posts with no method, no sample and no reproducibility.
> Those are marked **[W]** and their precision is decorative. The load-bearing
> evidence is a much smaller set: Google's own docs, the OpenAI/Anthropic/Perplexity
> crawler docs, Ahrefs' correlation studies, Cloudflare Radar, Semrush/Peec citation
> datasets, one KDD paper, and the Vercel crawler-log study.

## Starting position (verified against the live site and repo)

- `static/robots.txt` — **does not exist**, so GitHub Pages serves a 404. Nothing is
  blocked (good), but there's no sitemap declaration and no control surface.
- No `sitemap.xml` and nothing generating one.
- Structured data: `FAQPage` only, and currently suppressed by preview mode. No
  `Person`, no `ProfessionalService`, no `BreadcrumbList`.
- Prerendered static HTML — **a real advantage**, see §1.7.
- GitHub Pages exposes **no access logs**, which breaks the most reliable
  measurement method (§7).

---

## 1. How each system selects and cites sources

### 1.1 Google AI Overviews / AI Mode — best documented, and deflationary

Google's guidance is explicit that there is no special trick **[V]**: AI features rely
on "core Search ranking systems"; there are "no additional requirements to appear in
AI Overviews or AI Mode"; structured data "isn't required"; there's no need to "break
your content into tiny pieces"; and "seeking inauthentic 'mentions' across the web
isn't as helpful as it might seem."

Sources: [AI Features and Your Website](https://developers.google.com/search/docs/appearance/ai-features),
[Optimizing for Generative AI Features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)

Confirmed mechanics: RAG over the normal Search index plus **query fan-out** —
multiple related searches across subtopics — which is why AI Mode links a wider set
of pages than the classic SERP. **[V]**

**Consequence: eligibility = being indexed and snippet-eligible in normal Google
Search.** `noindex`, `nosnippet`, `max-snippet` and `data-nosnippet` all suppress AI
inclusion. **[V]**

Top-10 ranking is no longer the gate it was. Ahrefs, 863K keyword SERPs / 4M AI
Overview URLs (Jan 2026): **37.9% of AI Overview citations came from URLs in the first
10 SERP blocks, down from ~76% in July 2025**; 18.2% of non-top-100 citations were
YouTube URLs. **[S]** ([Ahrefs](https://ahrefs.com/blog/ai-overview-citations-top-10/))

Read correctly: rankings still matter, but fan-out means you can be cited for a
long-tail sub-question you never targeted. **For a zero-authority site this is the
realistic entry point** — you won't out-rank anyone for "AI consultant Germany", but
"what does an AI pilot for a five-person dental practice cost" is winnable.

### 1.2 ChatGPT search

Three separately-controllable agents, with stated consequences **[V]**: sites opted
out of `OAI-SearchBot` "will not be shown in ChatGPT search answers"; disallowing
`GPTBot` signals content shouldn't train foundation models; for `ChatGPT-User`,
"robots.txt rules may not apply" because the action is user-initiated.
([OpenAI crawler docs](https://developers.openai.com/api/docs/bots))

Retrieval substrate is deliberately vague — "third-party search providers, as well as
content provided directly by our partners" **[V]**. Third-party analysis repeatedly
finds heavy Bing dependence (Seer Interactive reported ~87% overlap with Bing top
organic) **[W — underlying dataset unverified]**. Either way: **being indexed in Bing
is cheap insurance for ChatGPT and Copilot both.** Bing Webmaster Tools + IndexNow is
the lever; Google does not support IndexNow.

### 1.3 Claude's web search — the least-known actionable item here

Three documented bots with explicit visibility consequences **[V]**: blocking
`ClaudeBot` excludes you from training; blocking `Claude-User` "may reduce your site's
visibility for user-directed web search"; blocking `Claude-SearchBot` "may reduce your
site's visibility and accuracy in user search results."
([Anthropic](https://support.claude.com/en/articles/8896518))

Retrieval substrate is **Brave Search** — not speculation: Anthropic added Brave to its
Trust Center subprocessor list on 19 March 2025, spotted by Simon Willison
([simonwillison.net](https://simonwillison.net/2025/Mar/21/anthropic-use-brave/)).
**[V, inferred from a primary artifact]**

**Claude visibility runs substantially through Brave's independent index, not
Google's.** A new domain invisible in Brave is invisible in Claude. Almost nobody
checks this, so the competitive floor is on the ground.

### 1.4 Perplexity

`PerplexityBot` indexes for search and is explicitly "not used to crawl content for AI
foundation models"; `Perplexity-User` is user-initiated and "generally ignores
robots.txt". **[V]** ([Perplexity docs](https://docs.perplexity.ai/docs/resources/perplexity-crawlers))
A robots-blocked page may still surface as domain + headline + factual summary — you
lose the link, not the extraction.

Caveat: Cloudflare published evidence (Aug 2025) that Perplexity used undeclared
crawlers rotating user-agents and IPs to bypass robots.txt. Stated policy and observed
behaviour have diverged before.

**Highest yield per unit of effort for a solo consultant:** fewer citation slots than
AI Overviews, but far less dominated by legacy authority, and its users ask
"who should I hire"-shaped questions. **[Mechanics: W]**

### 1.5 Gemini — two surfaces that behave differently

- **Gemini app / AI Mode:** grounded in Google Search. Cites far fewer sources per
  answer than ChatGPT (Semrush: ~3 vs ~15) **[S]**, so slots are scarcer and skew to
  Wikipedia/Reddit/YouTube.
- **Gemini API / Vertex grounding:** documented to **not use pages that have
  disallowed `Google-Extended`** **[V]**
  ([Google Cloud](https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/grounding/grounding-with-google-search)).
  This is the one place a training-flavoured token has a documented visibility cost.

The API returns `groundingChunks` and `groundingSupports` mapping text spans to
sources — confirming **passage-level attribution, not page-level** **[V]**
([Gemini API](https://ai.google.dev/gemini-api/docs/google-search)). This is the
strongest primary evidence that passage-shaped writing (§5) is mechanically rewarded
rather than folklore.

### 1.6 Copilot

Grounded in Bing; allowing `Bingbot` suffices. Microsoft ships an **AI Performance
report in Bing Webmaster Tools** — the only first-party AI-citation reporting any
vendor offers. **[W on specifics; the report's existence is well attested.]**

### 1.7 AI crawlers don't run JavaScript

Vercel's crawler-log study: "none of the major AI crawlers currently render
JavaScript," including OpenAI's and Anthropic's. Volumes then: Googlebot 4.5B monthly
fetches, GPTBot 569M, ClaudeBot 370M, PerplexityBot 24.4M. **[S — but Dec 2024; treat
volumes as historical, the rendering finding is still consensus.]**
([Vercel](https://vercel.com/blog/the-rise-of-the-ai-crawler))

**The prerendered SvelteKit setup already wins this outright — don't regress it.**
Anything appearing only after hydration is invisible to every AI crawler except
Googlebot and Bingbot. Verify FAQ *answers* are in the prerendered HTML, not just the
JSON-LD.

### 1.8 How much does classic authority still matter?

Ahrefs, 75,000 brands, Spearman correlation against AI Overview brand visibility **[S]**:

| Factor | ρ |
|---|---|
| Branded web mentions | 0.664 |
| Branded anchors | 0.527 |
| Branded search volume | 0.392 |
| Domain Rating | 0.326 |
| Referring domains | 0.295 |
| Branded traffic | 0.274 |
| Backlinks | 0.218 |
| URL rating | 0.18 |
| Site pages | 0.17 |

The authors' caveat, usually stripped when quoted: correlation isn't causation, all
factors are "moderate to very weak," and they combine rather than act independently.
([Ahrefs](https://ahrefs.com/blog/ai-overview-brand-correlation/)) A follow-up put
**YouTube mentions at ρ=0.737**, the single strongest predictor. **[S, one step removed]**

**Honest reading: being talked about by name across the web tracks AI visibility about
3× better than links do, and publishing more pages tracks almost nothing (ρ=0.17).**
Good news and uncomfortable news at once — the lever isn't the site, it's the name's
footprint elsewhere (§6).

---

## 2. llms.txt — verdict: cargo cult, one narrow exception

**No major provider consumes `/llms.txt` as a ranking, retrieval or citation signal.
This is settled, not contested.**

- **Google Search, in writing:** "You don't need to create new machine readable files,
  AI text files, markup, or Markdown to appear in Google Search… **Google Search
  ignores them**," plus a dedicated section stating such a file "will neither harm nor
  help your site's visibility or rankings." **[V]**
- **Gary Illyes** confirmed no support and no plans; **John Mueller** compared it to
  the keywords meta tag and noted no AI service had requested it. **[V]**
  ([SEJ](https://www.searchenginejournal.com/google-says-llms-txt-is-purely-speculative-for-now/577576/))
- **Server logs.** Flavio Longato, across Adobe Experience Manager customer logs:
  4,685 domains probed, **22,494 requests to `/llms.txt` in 30 days**, of which
  **92.2% were SEO tooling/monitors, 6.4% search engines, and 1.1% (258 hits)
  verifiable AI agents** — ClaudeBot 10, PerplexityBot 4. Only 2.9% of domains even
  served a 200. **[S — best empirical dataset on this question]**
  ([longato.ch](https://www.longato.ch/llmstxt-2026-june/))

The one real development, systematically misreported: **Chrome Lighthouse 13.3.0
(May 2026)** promoted an "Agentic Browsing" audit that checks whether `llms.txt`
exists; if absent it reports **Not Applicable**. **[V]**
([Search Engine Land](https://searchengineland.com/google-llms-txt-chrome-lighthouse-478246))
That's about AI agents driving a browser, not Search. The "Google made it official"
takes are wrong. **[X]**

**Verdict:** ten minutes, zero maintenance risk, add a genuine `/llms.txt` pointing at
the canonical URLs if you want to be early on the agentic-browsing convention. **Expect
zero citation lift.** Do **not** build Markdown mirrors of every page — Mueller called
that a poor use of time and the logs show nobody fetches them. The genuinely useful
thing in that slot is **sitemap.xml**, which every engine actually uses.

---

## 3. Crawler access — the allow/block table

Mental model: **search/retrieval bots decide whether you can be cited; training bots
decide whether you feed future models.** Separate tokens, separate decisions.

| User-agent | Purpose | Cost of blocking | Verdict |
|---|---|---|---|
| `OAI-SearchBot` | ChatGPT search index | **"will not be shown in ChatGPT search answers"** **[V]** | **ALLOW — non-negotiable** |
| `ChatGPT-User` | user-triggered fetch | Someone asks about you and it can't read the page | **ALLOW** |
| `GPTBot` | foundation-model training | Nothing in search; long-run your positioning never enters model priors | **ALLOW** |
| `Claude-SearchBot` | Claude search index | **"may reduce your site's visibility and accuracy"** **[V]** | **ALLOW — non-negotiable** |
| `Claude-User` | user-triggered fetch | **"may reduce visibility for user-directed web search"** **[V]** | **ALLOW** |
| `ClaudeBot` | training | Nothing in search. Worst crawl-to-refer ratio of any bot | **ALLOW** (marginal) |
| `PerplexityBot` | Perplexity index, explicitly not training | **No Perplexity citations** | **ALLOW — non-negotiable** |
| `Perplexity-User` | user-triggered | Ignores robots.txt anyway | **ALLOW** |
| `Googlebot` | all Google, incl. AI Overview eligibility | Total Google invisibility | **ALLOW** |
| `Bingbot` | Bing → Copilot, heavily → ChatGPT | Copilot plus much of ChatGPT | **ALLOW** |
| `Google-Extended` | control token for Gemini Apps + Vertex grounding | **Documented: Vertex grounding won't use pages that disallow it [V]** | **ALLOW — widely mislabelled "training-only"; blocking has a real citation cost** |
| `Applebot-Extended` | Apple Intelligence training opt-out | No search cost — Apple's search crawler is plain `Applebot` | Either; keep `Applebot` allowed |
| `CCBot` | Common Crawl | No live-answer visibility, but it's how smaller models see you | **ALLOW** — cheap breadth |
| `meta-externalagent` | Meta training | No visibility consequence | Either |

Cloudflare Radar quantifies the training asymmetry brutally: **ClaudeBot ~10,300:1
crawl-to-refer (down from ~23,951:1), GPTBot ~904:1, versus DuckDuckGo at ~1.5:1.**
**[S]** ([Cloudflare](https://blog.cloudflare.com/ai-search-crawl-refer-ratio-on-radar/))

**But that argument doesn't apply here, and this is the key judgement.** Crawl-to-refer
is a *publisher* problem — their asset is page inventory monetised by pageviews. Your
asset is **a name models should associate with "AI consultant, Germany, SMEs, EN/DE."**
For a 15-page brochure site with no ad revenue the crawl cost is zero, and the upside —
being *recommended* without retrieval at all — is the only route a no-authority site
has. **Allow everything.** Revisit only if you publish something worth licensing.

**Recommended `static/robots.txt`:**

```
User-agent: *
Allow: /

Sitemap: https://moha.expert/sitemap.xml
```

A blanket allow plus a sitemap beats an enumerated allow-list, because an enumerated
list silently fails the moment a vendor ships a new token — `OAI-AdsBot` appeared
unannounced, `Claude-SearchBot` was documented in Feb 2026. Per-bot rules only earn
their keep when you intend to *block*. **[Judgement, not evidence.]**

---

## 4. Structured data — evidenced vs folklore

**Uncomfortable primary fact:** Google states twice, in two official documents, that no
schema.org markup is required for AI features and there's no special markup to add.
**[V]** Any claim schema is *necessary* for AI Overviews contradicts the vendor. **[X]**

**Counterweight:** Microsoft's Fabrice Canel (Principal PM, Bing) said on stage at SMX
Munich that schema markup helps Microsoft's LLMs understand web content. **[V, verbal,
no data]** ([Search Engine Land](https://searchengineland.com/microsoft-bing-copilot-use-schema-for-its-llms-453455))

Honest position: **cheap, low-risk disambiguation with weak positive evidence for
Bing/Copilot, explicitly disclaimed necessity for Google, and no published evidence for
ChatGPT/Claude/Perplexity.** The "2.3× more citations" figure is agency arithmetic. **[W]**

Where it genuinely earns its place here is **entity disambiguation, not ranking**.
"Moha Aghanoori" is a low-frequency string with near-zero web presence. `sameAs` links
are the cheapest way to tell every system that this site, the LinkedIn profile, the
GitHub account and the YouTube channel are one entity — which is exactly the "branded
web mentions" signal that topped §1.8. That's a causal story, not just correlation.

| Type | Worth it? | Why |
|---|---|---|
| **`Person`** + `sameAs`, `jobTitle`, `knowsAbout`, `knowsLanguage`, `image` | **Yes — highest priority** | The entity anchor. Currently absent. |
| **`ProfessionalService`** + `areaServed`, `availableLanguage`, `address` | **Yes** | Local/service queries route through business-entity understanding. Use the subtype, not bare `LocalBusiness`. |
| **`Service`** + **`Offer`** | Yes, if honest | One `Service` per offering. Add `Offer` only with real prices — a priceless `Offer` is noise. |
| **`FAQPage`** | **Keep — already present** | Google **deprecated FAQ rich results** (Aug 2023, docs banner May 2026), but the type stays valid and parseable by Bingbot and Perplexity. **The visible Q&A text does the heavy lifting, not the JSON-LD.** |
| **`BreadcrumbList`** | Marginal | Still a Google rich result, trivial, no AI evidence. |
| **`Article`** with `author` → `Person` | Yes, for anything you publish | The `author` link accrues topical association to your entity rather than an anonymous URL. |
| `Review`/`AggregateRating` self-authored | **No** | Policy-violation risk, no AI evidence. **[X]** |
| `Speakable`, `HowTo`, sprawling graphs | **No** | `HowTo` retired; `Speakable` news-only. Folklore. **[X]** |

Implementation: extend the single existing JSON-LD hook to emit one `@graph` with
`Person` + `ProfessionalService` site-wide. Don't build a schema abstraction for 15 pages.

---

## 5. Content shapes that get cited

### Established

1. **Retrieval and attribution happen below page level.** Gemini's `groundingSupports`
   maps character spans to sources **[V]**; Claude's API returns snippets with citation
   indices **[V]**. The unit of citation is a passage, not a document.
2. **The KDD 2024 GEO paper is the only peer-reviewed causal evidence.** Aggarwal et
   al., *"GEO: Generative Engine Optimization,"* KDD 2024 — reports visibility gains
   **up to 40%**, with efficacy varying by domain. The interventions that worked were
   adding **citations, quotations and statistics**; keyword-stuffing did not. **[S]**
   ([arXiv:2311.09735](https://arxiv.org/abs/2311.09735))
3. **Length doesn't predict citation.** Multiple datasets put roughly half of cited
   pages under 1,000 words. **[W on the figure, consistent on direction]**

### Folklore **[W/X]**

- "44.2% of citations come from the first 30% of a page" — no reachable method. The
  advice (front-load the answer) is sound; the number is theatre.
- "FAQ schema weighted ~40% higher in ChatGPT selection" — no vendor has described any
  weighting scheme. **[X]**
- "Chunks are 256–512 tokens so write 100–300-token paragraphs" — guesses about closed
  systems. The behaviour is still right for a reason independent of the number.
- Google pre-refutes the chunking cult: "no requirement to break your content into tiny
  pieces." **[V]**

### Rules that survive scrutiny

1. **Self-contained paragraphs.** Each names its own subject (never a bare "it"),
   states one claim, supports it, bounds it. Test: cut it out, hand it to someone cold
   — does it still assert something true? If not, it can't be quoted.
2. **Answer first, then elaborate.** A reranker scoring a passage against a question
   rewards the passage that *contains the answer*.
3. **Definitional sentences win disproportionately.** `<Term> is <definition>.` The
   most-quoted shape across every engine and the cheapest to write. Define what clients
   actually ask about: "KI-Bereitschaftsanalyse", "DSGVO-konforme KI-Einführung".
4. **Headings phrased as the real question.** Fan-out generates natural-language
   sub-queries. `<h2>Was kostet ein KI-Pilotprojekt für eine Zahnarztpraxis?</h2>`
   beats `<h2>Preise</h2>`.
5. **Comparison tables and numbered steps** — extraction-friendly, and what
   "which X" / "how do I start" queries demand. Column headers must be self-describing.
6. **Statistics with named, dated, linked sources** — the KDD paper's strongest
   intervention, and something a consultant should do anyway.
7. **Real `dateModified`, and actually modify things.** Freshness is a documented
   Google RAG objective **[V]**; the "2× citations" figure for recent updates is **[W]**.
8. **Keep it in prerendered HTML** (§1.7).
9. **Treat DE and EN as separate citation surfaces.** German queries retrieve German
   passages; a thin translation loses to native-quality German. **[Judgement — no study
   found addresses cross-lingual AI citation. Genuine evidence gap.]**

---

## 6. Being present in the sources LLMs read

This is where the leverage is, and it isn't about the website.

**Citation-share data.** Peec AI, **30 million cited sources** across ChatGPT, Google AI
Mode, Gemini, Perplexity and AI Overviews (Mar 2026), most-cited domains:
**1. Reddit, 2. YouTube, 3. LinkedIn, 4. Wikipedia, 5. Forbes**, with Yelp and G2
prominent for recommendation queries. Perplexity skews to **Reddit, LinkedIn, G2 for
B2B**. **[S]** ([Search Engine Land](https://searchengineland.com/ai-search-engines-cite-reddit-youtube-and-linkedin-most-study-473138))

Semrush agrees on the cast and adds a warning: **shares are wildly volatile** —
ChatGPT's Reddit citation rate ran near 60% of responses in early August and collapsed
to ~10% by mid-September. **[S]** ([Semrush](https://www.semrush.com/blog/most-cited-domains-ai/))
Don't build a strategy on one platform's share. Build on the structural fact that
**third-party surfaces beat first-party ones.**

**Ranked by realistic return for a solo bilingual consultant:**

1. **YouTube — highest measured correlation (ρ=0.737) and 18.2% of non-ranking AI
   Overview citations.** **[S]** Production value is irrelevant. What matters: your name
   in the title, a real description carrying the definitional sentences from §5, and
   **hand-written captions** — auto-captions mangle German technical terms, and mangled
   transcripts don't retrieve. Ten four-minute videos answering ten specific client
   questions, in each language. **The highest-yield item in this report, and the one
   you'll least want to do.**
2. **LinkedIn — #3 most-cited, strong for Perplexity B2B.** **[S]** Long-form posts
   containing complete self-contained answers are retrievable; "🧵 here's what I
   learned" is not. Link from `Person.sameAs`.
3. **Reddit — #1 most-cited, highest-risk for a consultant.** Value only comes from
   sustained non-promotional participation where your buyers complain. Drop-in
   self-promotion gets removed, and removed content isn't cited. **Six-month habit or
   skip it; there's no shortcut version.**
4. **Directories and review platforms.** G2 and Yelp appear directly in citation data
   **[S]**; for German consulting, ProvenExpert, Clutch and IHK-adjacent listings fill
   the same slot. What matters is **NAP consistency** — identical name, description,
   category and language everywhere, because that repetition *is* what "branded web
   mentions" measures.
5. **Google Business Profile — mandatory for "in Berlin" queries.** Two cautions from
   the same body of work: **83% of searches with an AI Overview produce no click,
   rising to ~93% in AI Mode**, and AI local results surface only ~32% as many unique
   businesses as the classic map pack. **[W on figures, consistent on direction]** Local
   AI visibility is winner-take-most, and the "win" often *is* the answer rather than a
   visit — so make the answer contain your name and contact route.
6. **Wikipedia — do not attempt.** A solo consultant fails notability, and a deleted or
   COI-flagged article is worse than nothing. **[X]** **A Wikidata item is different** —
   lower bar, machine-readable, links your identifiers. That's the accessible 5%.
7. **Substack / newsletter.** Indirect: manufactures the third-party mentions §1.8
   rewards. Publish to a crawlable public archive — email-only is invisible.
8. **GitHub — genuinely underrated here.** Heavily crawled, high trust, and a good
   README *is* a definitional document. Two or three small documented tools with your
   name and site in the README is a real authority artifact that doubles as sales
   collateral. Low effort, durable.
9. **Podcasts — best effort-to-return ratio available.** One guest appearance yields a
   transcript on a higher-authority domain, a show-notes link, a YouTube upload with
   your name in the title, and a durable third-party mention. Target German-language
   SME/vertical podcasts, not AI podcasts — you want the audience that hires, not the
   audience that competes.

**Synthesis:** Google warns that "seeking inauthentic 'mentions' isn't as helpful as it
might seem" **[V]**, and page count is nearly uncorrelated (ρ=0.17). Both point the same
way: **more pages on moha.expert will not move AI visibility; your name appearing in
genuine third-party contexts will.** Unwelcome for someone who just built a nice site,
but it's what the evidence says.

---

## 7. Measurement

### GitHub Pages gives you no logs

Server-log analysis of AI user-agents is the only first-party, unfakeable measurement —
and GitHub Pages doesn't expose logs. Workarounds, cheapest first:

1. **Cloudflare free tier in front of the domain.** Fixes it outright — bot analytics
   plus **AI Crawl Control** showing per-bot request counts, and allow/block per bot
   without touching robots.txt. Keep GitHub Pages as origin. **Highest-value
   infrastructure change, €0.**
2. **Verify identity, don't trust the UA string.** OpenAI publishes IP ranges at
   `openai.com/gptbot-ranges.txt`; Anthropic and Perplexity publish equivalents. Match
   UA **and** IP. **[W on the "5–8% spoofed" figure; the practice is standard.]**
3. **Bing Webmaster Tools → AI Performance report.** The only first-party AI-citation
   reporting from any vendor. Free.
4. **Google Search Console does not break out AI Overviews or AI Mode** — those
   impressions fold into normal Search reporting. Anyone showing you "AI Overview
   impressions" from GSC is inferring.

### Referral tracking

- **GA4 added an "AI Assistant" channel (13 May 2026)** naming ChatGPT, Gemini,
  DeepSeek, Copilot and Grok — but **excluding Google AI Overviews and AI Mode, and not
  listing Perplexity.** A custom channel group with regex over `session_source` is
  needed. **[W — consistently reported, primary note unreachable]**
- **ChatGPT now appends `utm_source=chatgpt.com`**, which materially improves attribution.
- **Dominant caveat: 35–70% of AI referral sessions arrive with no referrer and land in
  "Direct."** Real AI traffic is plausibly ~2× what any tool reports. **[W on range; the
  phenomenon is structural]** Never report an AI-referral number without this caveat.
- Scale check: AI platforms were ~0.32% of all website visits in 2026, ChatGPT ~75% of
  AI referrals. **[W]** Volume is small; **intent quality is why it matters.**

### What actually matters here

**Share of voice on ~30 prompts beats any traffic dashboard.** Write the 30 questions a
real buyer would type — half German, half English — and check monthly whether you
appear, and **which sources were cited instead of you. Those competing sources are your
§6 to-do list.**

Tooling (all **[W]** on pricing/quality — vendor comparisons are themselves marketing):
Otterly ~$29/mo; Peec AI €89–199/mo; LLMrefs / ZipTie / AthenaHQ $79–300; Semrush AI
Toolkit ~$99 add-on; Ahrefs Brand Radar ~$699+; Profound ~$499+.

**Recommendation: buy nothing yet.** With one operator and 30 prompts, manual monthly
checks cost an hour and give you the *actual answer text* — including how you're
characterised, which no rank-tracker reports. Set up Cloudflare and Bing Webmaster
Tools instead; both free, both give data no vendor dashboard can.

---

## Priority order

**Free, this week, all evidence-backed:**

1. `static/robots.txt` — blanket allow + sitemap line. Currently 404. *(§3)*
2. Generate `sitemap.xml` at build time from the prerendered routes. *(§2, §3)*
3. **Cloudflare free tier** in front of GitHub Pages — the only way to see which AI
   bots fetch you. *(§7)*
4. **Bing Webmaster Tools + IndexNow** — gateway to Copilot and much of ChatGPT, plus
   the only first-party AI citation report. *(§1.2, §7)*
5. **Verify presence in Brave Search** — this is how Claude sees you, and nobody checks. *(§1.3)*
6. `Person` + `ProfessionalService` JSON-LD with a complete `sameAs` array. *(§4)*
7. Confirm every FAQ answer is in the prerendered HTML, not hydration-dependent. *(§1.7)*

**What actually moves the needle, descending evidence strength:**

8. YouTube with hand-written captions — highest measured correlation of any signal. *(§6.1)*
9. Guest podcast appearances — best effort-to-signal ratio. *(§6.9)*
10. Rewrite pages into self-contained, question-headed, answer-first passages with
    named-source statistics — the only intervention with peer-reviewed causal support. *(§5)*
11. Google Business Profile + NAP-consistent listings, if Berlin queries matter. *(§6.4–5)*
12. Wikidata item; GitHub artifacts; LinkedIn long-form. *(§6.2, 6.6, 6.8)*

**Optional, ten minutes, expect nothing:** `/llms.txt`. *(§2)*

**Do not do:** Markdown mirrors of every page; blocking `Google-Extended` on "training"
reasoning; self-authored `Review`/`AggregateRating`; a Wikipedia article; buying
AI-visibility tooling before there's a trend to track; publishing more pages believing
volume builds AI visibility (ρ=0.17).

## Evidence gaps, flagged honestly

- Nothing found studies **non-English AI citation behaviour** — all German-language
  advice above is extrapolation.
- No vendor has published a retrieval weighting scheme, so every "X is weighted N%
  higher" claim in circulation is invented.
- Primary write-ups for the SE Ranking llms.txt study, the Seer Bing-overlap study and
  the AirOps retrieval study were unreachable — corroborating, not load-bearing.
- The Vercel JS-rendering study is Dec 2024 and unreplicated. The prerendered setup
  makes this moot either way.
