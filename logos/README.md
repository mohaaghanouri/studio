# Tool logos

Each entry in `tools` (`src/lib/copy/contact.js`) takes an optional `logo` naming a
file here. The tool's name is always shown next to it, so a missing logo degrades
to a plain wordmark rather than a gap.

## What's here

Seven marks generated from [simple-icons](https://simpleicons.org) (CC0):
`anthropic`, `googlegemini`, `langgraph`, `n8n`, `github`, `gitkraken`, `figma`.

The package itself is not a dependency — the SVGs are committed as static assets,
which is all the site needs. To add more:

```bash
npm i -D simple-icons
node -e "
const si=require('simple-icons'), fs=require('fs');
const icon=Object.values(si).find(i=>i.slug==='SLUG_HERE');
fs.writeFileSync('static/logos/'+icon.slug+'.svg',
  '<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>'+icon.title+
  '</title><path fill=\"#ffffff\" d=\"'+icon.path+'\"/></svg>');
"
npm uninstall simple-icons
```

Then set `logo: 'slug.svg'` on that tool.

## What's deliberately missing

**OpenAI and Microsoft are not in simple-icons at all.** That set removes brands when
the trademark holder asks it to, so their absence is a request, not an oversight — they
stay as wordmarks rather than being sourced from somewhere less careful. Langfuse,
Kraken, ImmoScout24, Higgsfield and HeyGen simply aren't in the set yet.

For any of those, take the SVG from the vendor's own brand page (usually linked in the
footer, or at `/brand`, `/press`, `/legal/trademarks`). Avoid logo-aggregator sites —
they mostly redistribute marks they have no right to.

## Requirements

- **SVG**, single-colour white (`fill="#ffffff"`); the row sits on near-black and CSS
  drops it to 70% opacity.
- 24×24 viewBox with the artboard trimmed so the mark fills it. Padding inside the file
  makes logos look randomly sized next to each other.
- Naming a tool you genuinely use is normal descriptive use. Implying endorsement or
  partnership is not — which is why the row is labelled **"tools I work with"** rather
  than "clients". Keep it that way.
