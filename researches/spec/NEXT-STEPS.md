# Studio — next steps

## Status 2026-08-07 — v1 is LIVE at https://moha.expert

Done: domain + HTTPS (GitHub Pages, repo mohaaghanouri/studio), EN/DE with expanded case
studies, FAQ (+structured data), contact form (Formspree `mbgrlnng`, tested end-to-end),
WhatsApp/Telegram/Email buttons, hero avatar + About photo, Impressum with address,
Datenschutz naming GitHub Pages + Formspree, German consistency pass.

## Deferred — pick up later

- **Testimonials** (`TESTIMONIALS.md`): Moha sends 2–3 asks — give Claude first name +
  WhatsApp/Telegram per client and it generates one-tap prefilled links; paste replies back
  and Claude places + translates them. Section already built, appears automatically.
- Human native-German read-through before spending ad budget on /de.
- e-recht24 Datenschutz regeneration before heavy marketing (current text is honest and names
  all processors, but professional review is the standard).

v1 is deliberately bare: one page, no numbers, no proof, no domain. Each step below becomes its
own MD in this folder when it's actually next — don't write them early.

## Before go-live (required)

1. **Fill the placeholders** in `BUILD-PROMPT.md` — WhatsApp number, Telegram handle, contact
   email (a dedicated one, not the job-search or Lovehoney address), Formspree endpoint
   (free account, create the form, paste the ID), legal name + postal address for the Impressum.
2. **Native German pass.** The DE copy is written to be reviewed, not shipped blind. One
   read-through by a native speaker; watch the Sie-form consistency.
3. **Datenschutz check.** Regenerate with the e-recht24 generator (free tier) using: no cookies,
   no analytics, static hosting provider named, Formspree named as processor.
4. **Domain + deploy.** Pick a domain (mohaaghanoori.de / .com, or a brand). Deploy the static
   build on Cloudflare Pages or Netlify free tier. Both give HTTPS out of the box.

## After go-live (when there's a reason)

5. **Proof & numbers** (`PROOF.md`). The client counts per profession — dentists, lawyers,
   therapists, finance, etc. Decide what's claimable and how ("40+ professionals" beats fifteen
   precise little numbers). Slot them into the hero subline and the cards.
6. **Testimonials** (`TESTIMONIALS.md`). 2–3 short quotes, first name + profession only
   ("— Sandra, Zahnärztin"). Ask past clients; German ones weigh more for the DE page.
7. **Per-profession pages** (`PAGES.md`). `/for/dentists`, `/de/fuer/zahnaerzte`… Only worth it
   when there's a channel to share targeted links into (LinkedIn posts, local outreach, ads).
8. **Analytics** — only if a decision depends on it. Privacy-friendly (Plausible/GoatCounter),
   which also keeps the Datenschutz short.
9. **The teaching offer as a product** — if "learn it yourself" gets the most messages, split it
   out: fixed-length intro session, small-group option, its own section or page.
