# Build prompt — paste everything below the line into a fresh Claude Code session

Fill the `[PLACEHOLDER]` values first (search for `[`). The copy works even if the optional ones
stay empty — just delete those lines.

---

Build me a complete, ready-to-run website. Follow this spec exactly — do not ask me concept
questions; every decision is already made.

## What it is

A one-page personal consulting site for **Moha Aghanoori**. I help professionals of every kind —
dentists, lawyers, scientists, marketers, executives, students — use AI in their daily work.
The visitors are **not technical**. The site must never use technical vocabulary: no "RAG", "API",
"LLM", "model", "prompt", "pipeline", "integration", "backend", or AI product names. The only
technical word allowed is "AI" itself. Everything is described as an outcome in the visitor's own
world: appointments, case files, surveys, exams, scans, catalogs.

## Stack — hard requirements

- **SvelteKit** with `@sveltejs/adapter-static`. Fully static output, no server code, no backend,
  no database, no cookies, no analytics.
- **Self-hosted fonts only** (use `@fontsource/*` packages or local font files). Never load fonts
  or anything else from an external CDN — this is a German-law requirement, not a preference.
- Two language routes: `/` (English) and `/de` (German), same page structure, with a small
  `EN | DE` toggle fixed top-right linking between them. Correct `lang` attribute on `<html>`
  per route. Keep the copy in one data file per language (e.g. `src/lib/copy/en.js`, `de.js`)
  so editing text never means touching markup.
- Legal routes: `/impressum` and `/datenschutz` (German only is fine, linked from the footer of
  both languages).
- Responsive down to small phones. Semantic HTML, visible focus states, WCAG AA contrast.
- A minimal favicon: a gold "M." monogram on near-black (inline SVG is fine).
- Meta title and description per language, plain-language.

## Design — typography-led dark minimal

- Background near-black `#0e0e0c`, body text `#eceae4`, muted text `#9a968c`.
- One accent: warm gold `#d4a54a` — used **only** for links, buttons, and thin rules. Hover state
  a slightly lighter gold. Nothing else is colored.
- Headlines: a large elegant display serif — **Fraunces** (self-hosted via @fontsource), with
  generous size contrast (hero headline very large, ~clamp(2.5rem, 7vw, 5rem)). Body: **Inter**
  or system sans, 16–18px, line-height ≥1.6.
- Lots of whitespace. Thin 1px rules (`#2a2822`) between sections. Cards are borderless or
  hairline-bordered, no shadows, slight corner radius.
- Motion: only a gentle fade-and-rise on sections as they scroll into view (IntersectionObserver
  + CSS, respect `prefers-reduced-motion`). No parallax, no glows, no gradients, nothing "tech".
- The overall feeling: premium, calm, human — a consultant, not a startup.

## Page structure and full copy

Placeholders to fill: `[WHATSAPP_NUMBER]` (international format, digits only, for wa.me link),
`[TELEGRAM_HANDLE]`, `[CONTACT_EMAIL]`, `[FORMSPREE_ENDPOINT]`, `[FULL_LEGAL_NAME]`,
`[POSTAL_ADDRESS]`, `[CITY]`.

### 1. Hero

- Top-left: "Moha Aghanoori" (small, serif). Top-right: EN | DE toggle.
- **EN headline:** The boring half of your job can do itself.
- **EN subline:** I'm Moha. For six years I've helped dentists, lawyers, scientists, marketers and
  many others put AI to work — explained in plain words, built around how you already work.
- **EN button (gold):** Message me — the first conversation is free. (scrolls to contact)
- **DE headline:** Die langweilige Hälfte Ihrer Arbeit kann sich selbst erledigen.
- **DE subline:** Ich bin Moha. Seit sechs Jahren helfe ich Zahnärzten, Anwälten, Wissenschaftlern,
  Marketing-Teams und vielen anderen, KI für sich arbeiten zu lassen — in klaren Worten erklärt
  und an Ihre Arbeitsweise angepasst.
- **DE button:** Schreiben Sie mir — das erste Gespräch ist kostenlos.

### 2. Who I help — section title EN: "Who I help" / DE: "Für wen ich arbeite"

Six cards, each: small gold label, professions line, one outcome sentence.

1. **Health practices** / **Praxen**
   - EN: Dentists, therapists — appointments handled, office paperwork and scanned documents
     sorted, session and call recordings turned into clean, readable notes.
   - DE: Zahnärzte, Therapeuten — Terminorganisation, Büro-Papierkram und gescannte Dokumente
     geordnet, Gesprächsaufnahmen zu sauberen, lesbaren Notizen verarbeitet.
2. **Law & finance** / **Recht & Finanzen**
   - EN: Lawyers, financial professionals — long documents read, compared and summarized; files
     organized; the numbers pulled out of piles of PDFs.
   - DE: Anwälte, Finanzprofis — lange Dokumente gelesen, verglichen und zusammengefasst; Akten
     geordnet; die Zahlen aus PDF-Stapeln herausgeholt.
3. **Science & education** / **Wissenschaft & Lehre**
   - EN: PhD students, professors — clearer papers, faster literature reading, teaching materials
     and exams prepared in a fraction of the time.
   - DE: Doktoranden, Professoren — klarere Artikel, schnelleres Lesen der Fachliteratur,
     Lehrmaterialien und Prüfungen in einem Bruchteil der Zeit vorbereitet.
4. **Business & marketing** / **Business & Marketing**
   - EN: Executives, marketers, product people — survey answers analyzed, catalogs processed,
     team reports condensed to what actually matters.
   - DE: Führungskräfte, Marketing- und Produktleute — Umfrage-Antworten ausgewertet, Kataloge
     verarbeitet, Team-Berichte auf das Wesentliche verdichtet.
5. **Personal goals** / **Persönliche Ziele**
   - EN: A proper job search, preparing for language certificates (IELTS, ÖSD, TELC), house
     hunting with the documents assessed before you commit.
   - DE: Eine richtig aufgesetzte Jobsuche, Vorbereitung auf Sprachzertifikate (IELTS, ÖSD, TELC),
     Immobiliensuche mit geprüften Unterlagen, bevor Sie sich festlegen.
6. **Learn it yourself** / **Selbst lernen**
   - EN: Any profession — I teach you personally how to use AI in your daily work. Architect,
     accountant or dentist: no technical background needed.
   - DE: Jeder Beruf — ich zeige Ihnen persönlich, wie Sie KI in Ihrem Arbeitsalltag nutzen.
     Architektin, Buchhalter oder Zahnärztin: kein technisches Vorwissen nötig.

Below the cards, one italic line —
EN: Your profession isn't listed? It almost certainly still applies. Ask me.
DE: Ihr Beruf ist nicht dabei? Es funktioniert mit ziemlicher Sicherheit trotzdem. Fragen Sie mich.

### 3. How it works — EN: "How it works" / DE: "So läuft es ab" — three numbered steps

1. EN: **Write me.** WhatsApp, Telegram or email — describe your work in your own words.
   DE: **Schreiben Sie mir.** WhatsApp, Telegram oder E-Mail — beschreiben Sie Ihre Arbeit in
   Ihren eigenen Worten.
2. EN: **Free first conversation.** I tell you honestly what AI can do for you — and what it can't.
   DE: **Kostenloses Erstgespräch.** Ich sage Ihnen ehrlich, was KI für Sie tun kann — und was
   nicht.
3. EN: **I build it, or I teach you.** You get something that works inside your daily routine,
   not a lecture.
   DE: **Ich baue es — oder bringe es Ihnen bei.** Sie bekommen etwas, das in Ihrem Alltag
   funktioniert, keinen Vortrag.

No prices anywhere. EN: Every job is different, so there is no price list — the first
conversation is free and you'll know quickly if I can help.
DE: Jede Aufgabe ist anders, deshalb gibt es keine Preisliste — das erste Gespräch ist kostenlos,
und Sie merken schnell, ob ich Ihnen helfen kann.

### 4. About — EN: "About me" / DE: "Über mich"

EN: I'm a very technical person — I've been building these systems professionally for years.
But you will never hear technical words from me. My job is translation: your daily work on one
side, what machines can quietly take over on the other. Based in Germany. I work in English and
German.
DE: Ich bin ein sehr technischer Mensch — ich baue solche Systeme seit Jahren beruflich. Aber von
mir werden Sie keine Fachbegriffe hören. Meine Arbeit ist Übersetzung: auf der einen Seite Ihr
Arbeitsalltag, auf der anderen das, was Maschinen still übernehmen können. Ich lebe in Deutschland
und arbeite auf Englisch und Deutsch.

### 5. Contact — EN: "Get in touch" / DE: "Kontakt"

- Lead line EN: Tell me what your week looks like. I'll tell you which parts you can hand over.
  DE: Erzählen Sie mir, wie Ihre Woche aussieht. Ich sage Ihnen, welche Teile Sie abgeben können.
- Three buttons side by side: **WhatsApp** → `https://wa.me/[WHATSAPP_NUMBER]`,
  **Telegram** → `https://t.me/[TELEGRAM_HANDLE]`, **Email** → `mailto:[CONTACT_EMAIL]`.
- Below, a minimal form (name, email, message) posting to
  `https://formspree.io/f/[FORMSPREE_ENDPOINT]`, with a plain success/error message and a note —
  EN: or just use one of the buttons above, it's faster.
  DE: oder nutzen Sie einfach einen der Buttons oben, das geht schneller.

### 6. Footer

Small, muted: © Moha Aghanoori · [CITY] · links to Impressum and Datenschutz.

### Impressum & Datenschutz pages

- `/impressum`: standard § 5 TMG/DDG block with `[FULL_LEGAL_NAME]`, `[POSTAL_ADDRESS]`,
  `[CONTACT_EMAIL]`.
- `/datenschutz`: plain-German privacy notice covering: no cookies, no analytics, static hosting
  (server logs by the host), and that the contact form is processed by Formspree Inc. (USA) —
  include a `<!-- TODO: have this reviewed / regenerated with e-recht24 before go-live -->`
  comment. Simple readable text, not fake legalese.

## Quality bar

- `npm run build` must pass and produce a static site; tell me the exact commands to run it
  locally and to preview the build.
- Lighthouse-minded: no layout shift, images (there are none in v1) never required, total JS
  minimal — this page barely needs JavaScript beyond the fade-ins and the form.
- Check both language routes render fully and the toggle preserves scroll-to-top behavior.
- Keep the code boring and small: no component library, no CSS framework, no state library.
  Plain Svelte + one global stylesheet with CSS custom properties for the palette.
