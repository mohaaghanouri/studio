// Accent per case, keyed by slug. The illustration lives in static/work/<slug>.svg;
// this tint is what the detail page and the case list use for small accents.
// Presentational only — no copy here. Every slug in built.items needs a row, or it
// falls back to grey and stops reading as part of the set.
const art = {
	'job-seekers': { tint: '#00dbbe' },
	athletes: { tint: '#7ee081' },
	'content-creators': { tint: '#46bee4' },
	'home-buyers': { tint: '#f2f2f2' },
	lawyers: { tint: '#f2545b' },
	teachers: { tint: '#ffc75a' },
	coaches: { tint: '#5ad0b0' },
	'product-managers': { tint: '#e1f435' },
	'online-shoppers': { tint: '#c7a6ff' },
	architects: { tint: '#8fa9d8' },
	'project-managers': { tint: '#ff9d4d' },
	surveyors: { tint: '#b0b8c4' },
	'event-organizers': { tint: '#ff7fb0' },
	dentists: { tint: '#67d4ee' },
	'team-leaders': { tint: '#a8d64f' },
	'estate-agents': { tint: '#ffb26b' },
	executives: { tint: '#e0e0e0' },
	chefs: { tint: '#f26d5b' },
	'volunteer-orgs': { tint: '#63c9a0' },
	research: { tint: '#fb8d32' },
	'language-exams': { tint: '#9a8cff' }
};

const fallback = { tint: '#bfbfbf' };

export function artFor(slug) {
	return art[slug] ?? fallback;
}

/** The cases shown on the home page, in order. */
export function featured(items, count = 6) {
	return items.slice(0, count).map((item) => ({ ...item, ...artFor(item.slug) }));
}
