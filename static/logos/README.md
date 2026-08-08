# Tool logos

Drop official SVGs here, then set the matching `logo` field in
`src/lib/copy/contact.js`:

```js
{ name: 'OpenAI', logo: 'openai.svg' }
```

Until a `logo` is set, the site renders the wordmark in Geist Mono instead, which
looks deliberate rather than broken — so you can add these one at a time.

## Why these aren't already here

These are trademarks, and the only correct versions are the ones each vendor
publishes. Redrawn approximations look wrong to anyone who knows the brand and
aren't ours to ship. Take them from the official brand pages:

| Tool | Where |
|---|---|
| OpenAI | openai.com/brand |
| Anthropic | anthropic.com — press/brand assets |
| Gemini / Google | about.google/brand-resource-center |
| LangGraph / Langfuse | their GitHub repos — both ship SVG marks in-repo |
| n8n | n8n.io — press kit |
| Figma | figma.com/using-figma/brand-assets |
| Higgsfield | higgsfield.ai — check footer for brand assets |
| HeyGen | heygen.com — press/brand page |
| Microsoft | microsoft.com/legal/intellectualproperty/trademarks |

## Requirements

- **SVG**, monochrome if a mono version is offered — the row is set on near-black,
  so single-colour white or light-grey marks sit best.
- Trim the artboard so the mark fills its box; padding inside the file makes
  logos look randomly sized next to each other.
- Check each vendor's brand terms. Naming a tool you genuinely use is normally
  fine; implying endorsement or partnership is not. The row is labelled
  "tools I work with" rather than "clients" for exactly that reason — keep it
  that way.
