// Regenerates static/og/ — one 1200x630 social card per page, in both languages.
//
// The design lives in og-card.html at the repo root; this script clones it once
// per page with that page's headline, label and accent tint, then screenshots
// each at 1200x630. Every page's headline is therefore the card, so a headline
// edit means re-running this rather than remembering to redraw a PNG.
//
// Playwright is not a project dependency — this runs at most a few times a year:
//
//   npx --yes playwright@latest install chromium
//   node scripts/og.mjs
//
// Naming: static/og/<slug>.png for English, static/og/de-<slug>.png for German.
// The three non-case pages use the slugs home, method and work.
import { chromium } from 'playwright';
import { createServer } from 'node:http';
import fs from 'node:fs';
import path from 'node:path';

const TMP = '.ogtmp';

const [en, de, art] = await Promise.all([
	import('../src/lib/copy/en.js'),
	import('../src/lib/copy/de.js'),
	import('../src/lib/art.js')
]);

const cards = [];
for (const c of [en.default, de.default]) {
	const L = c.lang;
	const consulting = L === 'en' ? 'AI consulting & coaching' : 'KI-Beratung & Coaching';
	cards.push({ slug: 'home', lang: L, headline: c.hero.headline, label: consulting, tint: '#e1f435' });
	cards.push({ slug: 'method', lang: L, headline: c.method.headline, label: c.method.label, tint: '#e1f435' });
	cards.push({ slug: 'work', lang: L, headline: c.studio.worksHeading, label: c.studio.worksLabel, tint: '#e1f435' });
	for (const it of c.built.items) {
		cards.push({ slug: it.slug, lang: L, headline: it.headline, label: it.label, tint: art.artFor(it.slug).tint });
	}
}

const escape = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const tpl = fs.readFileSync('og-card.html', 'utf8');
fs.mkdirSync(TMP, { recursive: true });
for (const c of cards) {
	// Anton is a wide face; long headlines need a smaller size or they run past 630px.
	const n = c.headline.length;
	const size = n <= 46 ? 96 : n <= 62 ? 80 : n <= 80 ? 68 : 58;
	const h = tpl
		.replaceAll("url('./node_modules", "url('../node_modules")
		.replace('src="./static/brand/', 'src="../static/brand/')
		.replace('<h1>The boring half of your job can do itself.</h1>', `<h1>${escape(c.headline)}</h1>`)
		.replace('background: #e1f435;', `background: ${c.tint};`)
		.replace('AI consulting &amp; coaching · Berlin · EN &amp; DE', `${escape(c.label)} · Berlin · EN &amp; DE`)
		.replace('font-size: 96px;', `font-size: ${size}px;`);
	fs.writeFileSync(path.join(TMP, `${c.lang}-${c.slug}.html`), h);
}

// Serve the repo root so the template's ../node_modules font paths resolve.
const types = { '.html': 'text/html', '.woff2': 'font/woff2', '.svg': 'image/svg+xml' };
const server = createServer((req, res) => {
	const file = path.join(process.cwd(), decodeURIComponent(req.url.split('?')[0]));
	if (!file.startsWith(process.cwd()) || !fs.existsSync(file)) return res.writeHead(404).end();
	res.writeHead(200, { 'content-type': types[path.extname(file)] ?? 'application/octet-stream' });
	fs.createReadStream(file).pipe(res);
}).listen(0);
// Port 0 lets the OS pick a free one — a fixed port fails outright if anything
// else on the machine happens to be holding it.
const { port } = server.address();

// ponytail: OG_CHANNEL=chrome uses the locally installed Chrome when the bundled
// chromium download is blocked (corporate TLS interception). Unset = bundled.
const browser = await chromium.launch({ channel: process.env.OG_CHANNEL || undefined });
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
fs.mkdirSync('static/og', { recursive: true });
for (const c of cards) {
	await page.goto(`http://localhost:${port}/${TMP}/${c.lang}-${c.slug}.html`, { waitUntil: 'networkidle' });
	await page.evaluate(() => document.fonts.ready);
	await page.screenshot({ path: `static/og/${c.lang === 'en' ? '' : 'de-'}${c.slug}.png` });
}
await browser.close();
server.close();
fs.rmSync(TMP, { recursive: true, force: true });
console.log(`wrote ${cards.length} cards to static/og/`);
