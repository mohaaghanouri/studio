# Cloudflare migration — pre-flight

Captured 2026-08-08 from live DNS, before any change.

## Read this first

Your registrar is **Porkbun**, and **your email runs on Porkbun's forwarding service.**
Moving nameservers to Cloudflare replaces Porkbun's DNS entirely — so every record below
has to exist in Cloudflare **before** you switch, or `moha@moha.expert` stops receiving
mail the moment propagation completes.

That address is in your Impressum, your JSON-LD, your footer, and it's where every
Formspree submission lands. A silent mail outage is the one failure here that costs you
actual clients, and it wouldn't announce itself — mail just stops arriving.

**Nothing in this file needs a password from me.** The nameserver change happens in your
Porkbun account and the records go in your Cloudflare account. My side is verification,
which I can do entirely from outside.

## Current state (what you must not lose)

**Nameservers at Porkbun — these are what you replace:**
```
salvador.ns.porkbun.com
curitiba.ns.porkbun.com
fortaleza.ns.porkbun.com
maceio.ns.porkbun.com
```

**Records to recreate in Cloudflare, exactly:**

| Type | Name | Value | Priority | Proxy |
|---|---|---|---|---|
| A | `@` | `185.199.108.153` | — | **Proxied** (orange) |
| A | `@` | `185.199.109.153` | — | **Proxied** |
| A | `@` | `185.199.110.153` | — | **Proxied** |
| A | `@` | `185.199.111.153` | — | **Proxied** |
| CNAME | `www` | `mohaaghanouri.github.io` | — | **Proxied** |
| **MX** | `@` | `fwd1.porkbun.com` | **10** | **DNS only** (grey) |
| **MX** | `@` | `fwd2.porkbun.com` | **20** | **DNS only** (grey) |
| **TXT** | `@` | `v=spf1 include:_spf.porkbun.com ~all` | — | n/a |

The four A records are GitHub Pages. The two MX records and the SPF TXT are your email —
**MX cannot be proxied, so they must stay grey-clouded.** Proxying an MX record breaks mail
delivery.

No DMARC and no DKIM records currently exist. Nothing to migrate there, though adding DMARC
later is worth doing on its own merits.

## Progress 2026-08-08

Cloudflare account created (`moha.aghanouri@gmail.com`), `moha.expert` added on the **Free**
plan, DNS Setup **Full**. Cloudflare's scan found exactly the eight records inventoried
below — 4 A, 1 CNAME, 2 MX, 1 TXT — and the three email-critical rows were **verified
correct**: `fwd1.porkbun.com` priority 10 and `fwd2.porkbun.com` priority 20, both DNS-only,
plus the SPF TXT. The outage risk is cleared.

Cloudflare's onboarding now includes AI crawler policies. Its default for **Training** was
"Block on pages with ads", which contradicts the shipped `robots.txt`. **All three (Search,
Agent, Training) set to Allow**, so the dashboard and the file now agree.

**Your Cloudflare nameservers:**
```
ben.ns.cloudflare.com
kimora.ns.cloudflare.com
```

**Not yet done — deliberately stopped here.** The nameserver change happens in the Porkbun
account and is the step that both activates everything and carries the email risk.

**Still to check after activation:** whether the 4 A records and the `www` CNAME are
**Proxied** (orange) rather than DNS-only. Proxying is what delivers Brotli and HTTP/3 — the
whole point of the migration. If they are grey, flip them in the DNS tab afterwards; the site
keeps working either way, it just stays uncompressed.

## Order of operations

Doing this in the wrong order is what causes the outage.

1. **Sign up at Cloudflare** with a fresh password — not the master password, not the Cal one.
2. **Add site `moha.expert`, plan: Free.** Cloudflare auto-scans and will *probably* import
   all eight records above. **Do not trust the scan — check every row against the table.**
   The MX records and the SPF TXT are the ones that get missed.
3. **Fix anything missing or wrong**, especially MX priorities (10 and 20) and the grey cloud
   on both MX rows.
4. **Set SSL/TLS → Overview → Full (strict)** *before* switching nameservers. Not Flexible —
   Flexible with GitHub Pages causes an infinite redirect loop.
5. **Only now** change the nameservers at Porkbun to the two Cloudflare gave you.
6. **Wait for propagation** (usually under an hour, up to 24h).
7. **Then** turn on the performance settings: Brotli, and a cache rule pinning
   `/_app/immutable/*` to 1 year for both Edge and Browser TTL. Those filenames are
   content-hashed, so a year is safe.
8. **Then** add Web Analytics and check AI Crawl Control (leave all bots allowed — use it to
   watch, not to block).

## Test the email before you trust it

The site will visibly work or not. Email fails silently, so test it deliberately:

1. From an outside address (your Gmail), send a mail to `moha@moha.expert`.
2. Confirm it arrives where it normally lands.
3. Submit your own contact form on the live site and confirm that arrives too — that path
   goes through Formspree and then to the same mailbox.

**If mail stops:** the fix is fast. Revert the nameservers at Porkbun to the four above, and
delivery resumes as propagation reverses. Keep this file open while you work.

## What I verify afterwards

Send me a message once propagation looks done and I'll check from outside:

- Nameservers now answer as Cloudflare
- All four A records and the `www` CNAME still resolve
- **MX still resolves to `fwd1`/`fwd2.porkbun.com` with priorities 10 and 20**
- SPF TXT intact
- `Content-Encoding: br` finally present (the whole point — you're currently served
  uncompressed)
- Protocol now HTTP/2 or HTTP/3 instead of HTTP/1.1
- `Cache-Control` on `/_app/immutable/*` showing a year instead of 600 seconds
- Both languages, all 12 case pages, `robots.txt`, `sitemap.xml` and the legal pages still 200
- TLS cert valid and no redirect loop

## Honest re-weighting

Before this check, Cloudflare looked like a free 20-minute win. It still is worth doing —
compression alone cuts roughly 200 KB per visit, and it's the only way you'll ever see which
AI crawlers fetch you, since GitHub Pages exposes no logs.

But it is a **DNS migration that carries your email**, not a settings toggle. If you'd rather
not touch DNS at all right now, that's a legitimate choice: the site is already fast in
absolute terms (LCP 142 ms measured), and every other item in the plan is independent of
this one. **Nothing else is blocked by skipping it.**
