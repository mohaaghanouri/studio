// Accent per use case, keyed by slug. The illustration lives in static/work/<slug>.svg;
// this tint is what the detail page and the case list use for small accents. Presentational only — no copy here.
//
// Tints are the three secondary accents extracted alongside the lime, plus a
// near-white, so the four cards read as a set rather than four random colours.
const art = {
	'content-creators': { tint: '#46bee4' },
	'buying-a-home': { tint: '#f2f2f2' },
	'finding-a-job': { tint: '#00dbbe' },
	research: { tint: '#fb8d32' },
	'marketing-product': { tint: '#e1f435' },
	'language-exams': { tint: '#9a8cff' }
};

const fallback = { tint: '#bfbfbf' };

export function artFor(slug) {
	return art[slug] ?? fallback;
}

/** The four use cases shown on the home page, in order. */
export function featured(items, count = 4) {
	return items.slice(0, count).map((item) => ({ ...item, ...artFor(item.slug) }));
}
