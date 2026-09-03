# studio

Consulting site for **Dinobridge** (dinobridge.de) — the company, owned and led by Moha Aghanoori. SvelteKit + `adapter-static` — fully prerendered,
no backend, hosted on GitHub Pages behind Cloudflare. Bilingual EN (`/`) + DE (`/de/`).

```bash
npm install
npm run dev        # local dev server
npm run build      # static site -> build/
npm run preview    # serve the production build locally
```

Pushing to `main` builds and deploys automatically (`.github/workflows/deploy.yml`). The
deploy stamps the commit into `build/version.txt`, waits until GitHub Pages is actually
serving that commit, and only then purges the Cloudflare cache — purging any earlier
re-caches the old content and makes new URLs 404 at the edge. `curl https://dinobridge.de/version.txt`
tells you which commit is live.

## Where things live

| | |
|---|---|
| Contact, domain, email | `src/lib/copy/contact.js` — **single source of truth** |
| Who has been helped, and how many | `src/lib/copy/roster.js` — counts only; labels live in `en.js`/`de.js` under `who.roster`. The home page shows the labels **without** the counts; the counts appear in the rail of each case page |
| The 21 case pages | `built.items` in `en.js`/`de.js`, one entry per field. Source material: `researches/projects/` in the private **studio-research** repo |
| Client quotes | `quotes` on each case in `built.items` — next to the work they are about. There is no separate testimonials list: the home page shows the first voice from each of the six featured cases |
| Case illustrations | `static/work/<slug>.svg` + a tint per slug in `src/lib/art.js`. Motifs must sit between y 230–520 of the 1200×750 canvas — the case-page hero is a wide centre crop and anything outside that band is cut off |
| All copy, both languages | `src/lib/copy/en.js`, `src/lib/copy/de.js` (identical key shape) |
| Design tokens | `src/app.css` |
| Brand assets (logo lockups, favicon, badge) | `static/brand/` + `static/favicon.*` + `static/apple-touch-icon.png` — stripped copies of the master files in `Logos/`. White variants only: the site is dark. Guide: `Logos/README.md` |
| The `noindex` safety gate | `src/lib/preview.js` |
| Legal pages | `src/routes/impressum/`, `src/routes/datenschutz/` |
| The 404 page | `static/404.html` — self-contained (GitHub Pages serves it for unknown paths; the app's hashed assets can't be referenced from it) |
| Custom domain | `static/CNAME` (the deploy refuses to run without it) |

## Docs

The research, the launch playbook and the testimonial record are **not in this
repo**. They live in the private **`mohaaghanouri/studio-research`** repo, because
between them they published the whole go-to-market — per-segment targeting,
day-rate strategy, the German funding playbook, the cold-outreach templates — and
the client testimonial record with real names.

| In the private repo | What it is |
|---|---|
| `researches/projects/` | Field notes behind the 21 case pages, `00-method.md` behind `/method/`, `testimonals.md` behind the quotes |
| `researches/growth/00-free-plan.md` | The €0 growth plan for this site, sequenced |
| `outreach/REFERENT-EMAILS.md` | Ten German Referent pitches to the Berlin chambers |
| `PLAYBOOK.md` | The reusable end-to-end roadmap for standing up another site like this |

Edit the field notes there first, then the copy files here.

## Two things to know

**The site is indexable.** `src/lib/preview.js` has `PLACEHOLDERS = false`. It was `true` while
five mock testimonials sat in the copy files; those were deleted rather than published, because
§5b UWG prohibits publishing consumer testimonials that are not genuine. The 39 quotes on the
site are real client words, with names withheld at the clients' request — role and region only.
The record of who said what is `researches/projects/testimonals.md` in the private
**studio-research** repo; it holds the real names, which is why it is not here. Three entries in
that file are marked as templates with nobody behind them and are deliberately **not** published.
If anything unapproved is ever added back, set the flag to `true` and list it in
`PLACEHOLDER_ITEMS`.

**`en.js` and `de.js` must keep an identical key shape.** Every case needs all of
`slug, title, metaDescription, label, headline, story, machinery, judgement, builds, stops,
proof, refuse, cost, quotes`, and the slugs must appear in the same order in both files — the sitemap
pairs EN/DE by position. Quick check:

```bash
node -e "Promise.all([import('./src/lib/copy/en.js'),import('./src/lib/copy/de.js')]).then(([a,b])=>{
  const w=(o,p='')=>Object.entries(o).flatMap(([k,v])=>v&&typeof v==='object'&&!Array.isArray(v)?w(v,p+k+'.'):[p+k]);
  const e=w(a.default).sort(), d=w(b.default).sort();
  console.log(e.length===d.length && e.every((k,i)=>k===d[i]) ? 'key shapes match' : 'MISMATCH');
})"
```
