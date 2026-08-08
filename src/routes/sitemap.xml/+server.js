import en from '$lib/copy/en.js';
import { site } from '$lib/copy/contact.js';

export const prerender = true;

// EN/DE paths always pair, because en.js and de.js use the same slugs.
const pairs = [
	['/', '/de/'],
	['/work/', '/de/work/'],
	...en.built.items.map(({ slug }) => [`/work/${slug}/`, `/de/work/${slug}/`])
];

// Impressum and Datenschutz exist in German only — no alternates for them.
const deOnly = ['/impressum/', '/datenschutz/'];

// Every URL in an hreflang set must list the complete set, including itself.
const alternates = (e, d) =>
	`<xhtml:link rel="alternate" hreflang="en" href="${site}${e}"/>` +
	`<xhtml:link rel="alternate" hreflang="de" href="${site}${d}"/>` +
	`<xhtml:link rel="alternate" hreflang="x-default" href="${site}${e}"/>`;

// No lastmod/changefreq/priority on purpose: Google ignores the last two, and a
// build-time date would mark all 16 URLs changed on every deploy.
export function GET() {
	const urls = [
		...pairs.flatMap(([e, d]) => [
			`<url><loc>${site}${e}</loc>${alternates(e, d)}</url>`,
			`<url><loc>${site}${d}</loc>${alternates(e, d)}</url>`
		]),
		...deOnly.map((p) => `<url><loc>${site}${p}</loc></url>`)
	];

	return new Response(
		'<?xml version="1.0" encoding="UTF-8"?>\n' +
			'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
			urls.join('\n') +
			'\n</urlset>\n',
		{ headers: { 'content-type': 'application/xml' } }
	);
}
