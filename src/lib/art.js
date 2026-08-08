// Art direction per use case, keyed by slug so the work card and its detail page
// always share the same tint and mark. Presentational only — no copy here.
//
// Tints are the three secondary accents extracted alongside the lime, plus a
// near-white, so the four cards read as a set rather than four random colours.
const art = {
	'content-creators': { tint: '#46bee4', mark: '✳' },
	'buying-a-home': { tint: '#f2f2f2', mark: '▲' },
	'finding-a-job': { tint: '#00dbbe', mark: '✦' },
	research: { tint: '#fb8d32', mark: '✜' },
	'marketing-product': { tint: '#e1f435', mark: '◆' },
	'language-exams': { tint: '#9a8cff', mark: '❖' }
};

const fallback = { tint: '#bfbfbf', mark: '✳' };

export function artFor(slug) {
	return art[slug] ?? fallback;
}

/** The four use cases shown on the home page, in order. */
export function featured(items, count = 4) {
	return items.slice(0, count).map((item) => ({ ...item, ...artFor(item.slug) }));
}
