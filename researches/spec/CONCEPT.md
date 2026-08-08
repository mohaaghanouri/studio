# Studio — concept

The side-business site. Moha Aghanoori, personal brand: a technical expert that professionals of
every kind hire to put AI to work in their daily jobs — and who never speaks a technical word to
them. Six years of doing this (say six, not seven).

## Who it's for

Not AI engineers. Not developers. The visitor is a dentist, a lawyer, a professor, a PhD student,
a marketer, a product manager, an executive, a therapist, a financial advisor, an architect, a
student, someone hunting a house or a language certificate. They do not know what RAG, an API or
an LLM is, and the site must never make them feel that gap.

## Positioning

**"I'm a technical person so you don't have to be."** AI-forward in plain words: AI is the hook —
it's what makes people curious right now — but every service is described as an outcome (time
saved, documents handled, exams prepared), never as a technology.

Two offers, one page:
1. **Done for you** — Moha builds/handles it (documents, transcripts, surveys, reports, pipelines).
2. **Taught to you** — Moha teaches you to use AI in your own daily work.

## Decisions (agreed 2026-08-07)

| Question | Decision |
|---|---|
| Identity | Real name, personal brand — "Moha Aghanoori" |
| Language | English `/` + German `/de`, toggle top-right, real routes |
| AI wording | AI-forward, plain words |
| Structure | One scrolling page: hero → who I help → how it works → about → contact |
| Professions | 6 grouped cards, one plain-language outcome line each |
| Contact | WhatsApp + Telegram + email buttons, plus a simple Formspree form |
| Pricing | None — "every job is different; the first conversation is free" |
| Look | Typography-led: near-black, large display serif headlines, one gold accent, gentle fades only |
| Stack | SvelteKit + adapter-static, no backend, no database, no payment |
| Build route | `BUILD-PROMPT.md` pasted into a fresh Claude Code session |

## Voice rules — the glossary

Never on the page: *RAG, API, LLM, model, prompt, pipeline, embedding, vector, agent, automation
workflow, integration, backend, GPT/Claude/product names.*

Say instead:

| Instead of | Say |
|---|---|
| RAG / vector search | "a system that reads your documents and answers questions about them" |
| API / integration | "connecting the tools you already use" |
| LLM / model | "AI" (the one technical word allowed) |
| prompt engineering | "telling the AI exactly what good looks like for you" |
| transcription pipeline | "your call recordings turned into clean, readable notes" |
| automation | "work that does itself" |
| fine-tuning / training | "teaching the AI how *you* work" |

Tone: calm, confident, concrete. Short sentences. No exclamation marks. No hype words
("revolutionary", "supercharge", "unlock"). Outcomes and nouns from *their* world: appointments,
case files, surveys, exams, scans, catalogs.

## The six cards

1. **Health practices** — dentists, therapists: appointments, office paperwork, scanned documents
   sorted, session and call recordings turned into clean notes.
2. **Law & finance** — lawyers, financial professionals: long documents read, compared and
   summarized; files organized; the numbers pulled out of piles of PDFs.
3. **Science & education** — PhD students, professors: clearer papers, faster literature reading,
   teaching materials and exams prepared in a fraction of the time.
4. **Business & marketing** — executives, marketers, product people: survey answers analyzed,
   catalogs processed, team reports condensed to what actually matters.
5. **Personal goals** — anyone: a proper job search, language certificates (IELTS, ÖSD, TELC),
   house hunting with the documents assessed before you commit.
6. **Learn it yourself** — any profession: personal teaching on using AI in your daily work, no
   technical background needed.

## Out of scope for v1 (see NEXT-STEPS.md)

Numbers/proof ("X dentists helped"), testimonials, per-profession pages, domain, deployment,
analytics, blog. The copy works without numbers; slots exist for when they're agreed.

## Hard constraints

- German commercial site → **Impressum and Datenschutz pages are legally required.** Placeholders
  in v1, real details before going live.
- **Self-host fonts** — loading Google Fonts from Google's servers is a GDPR problem in Germany
  (LG München ruling). The build prompt enforces this.
- No mention of the current employer anywhere.
- Site never asks for money or logins; contact only.
