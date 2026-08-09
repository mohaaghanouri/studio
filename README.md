# studio

Personal consulting site for **moha.expert**. SvelteKit + `adapter-static` — fully prerendered,
no backend, hosted on GitHub Pages behind Cloudflare. Bilingual EN (`/`) + DE (`/de/`).

```bash
npm install
npm run dev        # local dev server
npm run build      # static site -> build/
npm run preview    # serve the production build locally
```

Pushing to `main` builds and deploys automatically (`.github/workflows/deploy.yml`).

## Where things live

| | |
|---|---|
| Contact, domain, email, tools row | `src/lib/copy/contact.js` — **single source of truth** |
| All copy, both languages | `src/lib/copy/en.js`, `src/lib/copy/de.js` (identical key shape) |
| Design tokens | `src/app.css` |
| The `noindex` safety gate | `src/lib/preview.js` |
| Legal pages | `src/routes/impressum/`, `src/routes/datenschutz/` |
| Custom domain | `static/CNAME` (the deploy refuses to run without it) |

## Docs

- **[`outreach/NEEDS-MOHA.md`](outreach/NEEDS-MOHA.md)** — **start here.** The short list of
  things only you can do, with the reason for each and everything prepared in advance.
- [`outreach/REFERENT-EMAILS.md`](outreach/REFERENT-EMAILS.md) — ten German Referent pitches to
  the Berlin chambers, ready to send. Highest-return item in the plan.
- **[`PLAYBOOK.md`](PLAYBOOK.md)** — the reusable end-to-end roadmap for standing up another
  site like this one: repo, DNS, Cloudflare, email, search, German legal, and every trap that
  bit us. Read this before launching anything new.
- [`researches/growth/00-free-plan.md`](researches/growth/00-free-plan.md) — the €0 growth plan
  for *this* site, sequenced, with what's shipped and what needs your hands.
- [`researches/`](researches/) — the competitor research the design came out of.

## One thing to know before publishing

`src/lib/preview.js` has `PLACEHOLDERS = true`, which sends `noindex, nofollow` on every page.
That is deliberate: the testimonials are unapproved drafts, and publishing invented ones breaks
§5b UWG. **Flip it only once `PLACEHOLDER_ITEMS` is empty.**
