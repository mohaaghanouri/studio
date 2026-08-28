// Who has actually been helped, 2022–2026.
//
// Counts are facts, not copy, so they live here once and are read by both
// languages, the stats tiles and /llms.txt. Labels are translated in
// en.js / de.js under `who.roster`, keyed by the same slug.
//
// `slug` doubles as the future /work/<slug>/ page. A group only gets a page
// once there is a real story to tell about it — see who.roster in the copy
// files for which ones are written.
export const roster = [
	{ slug: 'job-seekers', count: 30 },
	{ slug: 'athletes', count: 18 },
	{ slug: 'content-creators', count: 12 },
	{ slug: 'home-buyers', count: 12 },
	{ slug: 'lawyers', count: 11 },
	{ slug: 'teachers', count: 8 },
	{ slug: 'coaches', count: 5 },
	{ slug: 'product-managers', count: 4 },
	{ slug: 'online-shoppers', count: 4 },
	{ slug: 'architects', count: 3 },
	{ slug: 'project-managers', count: 3 },
	{ slug: 'surveyors', count: 3 },
	{ slug: 'event-organizers', count: 3 },
	{ slug: 'dentists', count: 2 },
	{ slug: 'team-leaders', count: 2 },
	{ slug: 'estate-agents', count: 2 },
	{ slug: 'executives', count: 1 },
	{ slug: 'chefs', count: 1 },
	{ slug: 'volunteer-orgs', count: 1 }
];

export const totalHelped = roster.reduce((n, r) => n + r.count, 0);
export const groupCount = roster.length;
