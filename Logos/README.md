# Dinobridge — logo system

Rebuilt from the original `dinobridge-navy-on-white.png`. The silhouette is unchanged
(98.4% shape match); everything else — vector paths, lockup proportions, small-size
variants — is new.

**Brand navy: `#12264A`** — `rgb(18, 38, 74)`. Contrast on white ≈ 14:1 (WCAG AAA).

---

## Which file when

| File | Use | Aspect |
|---|---|---|
| `dinobridge-stacked.svg` | Primary. Hero, print, social profile, anywhere with vertical room. | 1.10 : 1 |
| `dinobridge-horizontal.svg` | Site header, email signature, letterhead. **60px tall and above.** | 3.84 : 1 |
| `dinobridge-horizontal-compact.svg` | Same lockup, simplified railing. **Below 60px tall.** | 3.84 : 1 |
| `dinobridge-mark-full.svg` | Mark alone at 48px+. Watermarks, large decorative use. | 1.44 : 1 |
| `dinobridge-mark-icon.svg` | Mark alone below 48px. | 1.44 : 1 |
| `dinobridge-favicon-badge.svg` | Favicon, app icon, avatar — anywhere square. | 1 : 1 |
| `favicon.ico` | Multi-resolution: 16 / 32 / 64 / 256. | 1 : 1 |

Every SVG has a `-white.svg` twin: white on transparent, for navy backgrounds and the footer.
`dinobridge-favicon-badge-light.svg` is the inverse badge (navy mark on white) for placing
on navy.

Raster exports are in `png/`. SVG first wherever the platform allows it.

---

## Minimum sizes

- Horizontal lockup: **32px tall** (use the compact version below 60px)
- Stacked lockup: **60px tall**
- Mark alone: **24px tall** (use `mark-icon` below 48px)
- Badge: **16px**

Below these the wordmark's counters close up and the railing stops reading.

## Clear space

Keep a margin equal to the **cap height of the D** (≈17% of the wordmark's total height)
on all four sides. Nothing — no text, no rules, no image edges — inside that.

## Don'ts

- Don't rebuild the stacked lockup by stacking the horizontal one. The proportions differ.
- Don't use the full-detail mark below 48px. That's what `mark-icon` is for.
- Don't recolour. Navy or white, nothing else.
- Don't outline, add a drop shadow, or set the mark on a busy photograph.
- Don't stretch. All files carry a `viewBox`; scale proportionally.

---

## Favicon wiring

```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/dinobridge-favicon-badge.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/dinobridge-favicon-badge-180.png">
```

The SVG icon is what modern browsers use; the `.ico` covers older ones and Windows
shortcuts; the 180px PNG is for iOS home-screen bookmarks.

## Header snippet

```html
<a class="logo" href="/">
  <img src="/dinobridge-horizontal-compact.svg" alt="Dinobridge" height="40">
</a>
```

Set `height`, never `width` — the lockup is 3.84:1 and you want the type size fixed.

---

## Still open

1. **No accent colour.** Navy alone leaves nothing for links, hover states, or CTAs.
   A warm ochre or a fern green would both sit well against `#12264A` without fighting it.
   The right choice depends on what Dinobridge does.

2. **The left junction.** Where the arch springs from behind the neck, the leftmost
   opening is a tapering wedge rather than a resolved abutment. Whether the dinosaur's
   body *is* the left abutment or the bridge should land separately is a concept decision,
   not a cleanup — so it's left as drawn. The simplified variant softens it.

3. **Trademark check.** The head-and-neck silhouette sits in the same family as Sinclair
   Oil's Brontosaurus. Different pose, different treatment, and Sinclair has no German
   presence — but worth ten minutes of searching before filing anything for `.de`.
