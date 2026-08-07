# studio

Personal consulting site for moha.expert. Spec lives in `Marekt/studio/` (BUILD-PROMPT.md).

SvelteKit + adapter-static — fully static output, no backend. Copy lives in
`src/lib/copy/en.js` and `de.js`; contact details in `src/lib/copy/contact.js`.

```bash
npm install
npm run dev        # local dev server
npm run build      # static site -> build/
npm run preview    # serve the production build locally
```

Before go-live (see Marekt/studio/NEXT-STEPS.md): fill Telegram handle + Formspree ID in
`contact.js`, postal address in `src/routes/impressum/+page.svelte`, native-German pass,
regenerate Datenschutz via e-recht24.
