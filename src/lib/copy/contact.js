// Contact details shared by both languages.
export const site = 'https://moha.expert';

export const contact = {
	whatsapp: '491706128949',
	telegram: 'mohaaghanouri',
	email: 'moha@moha.expert',
	formspree: 'mbgrlnng',
	city: 'Berlin',
	// Office address shown in the footer and reach-out section. NOTE: the
	// Impressum still carries Silbersteinstr. 131 — that one is a legal
	// declaration, so change it deliberately, not by copying this.
	address: 'Geschwister-Scholl-Straße 1–3, 10117 Berlin',

	// Cal.com handle + event slug, e.g. cal: 'moha', calEvent: 'discovery-call'
	// → embeds cal.com/moha/discovery-call. Free plan is enough (1 user,
	// unlimited event types). Leave cal empty and the booking section is not
	// rendered at all.
	cal: 'mohaaghanouri',
	calEvent: '30min'
};

// Tools actually in use. Language-neutral, so it lives here rather than being
// duplicated across en.js and de.js.
//
// `logo` is optional and names a file in static/logos/. Until one is set, the
// wordmark is rendered instead — see static/logos/README.md for where to get
// each vendor's official SVG.
export const tools = [
	{ name: 'OpenAI', logo: '' },
	{ name: 'Anthropic', logo: 'anthropic.svg' },
	{ name: 'Gemini', logo: 'googlegemini.svg' },
	{ name: 'LangGraph', logo: 'langgraph.svg' },
	{ name: 'Langfuse', logo: '' },
	{ name: 'n8n', logo: 'n8n.svg' },
	{ name: 'GitHub', logo: 'github.svg' },
	{ name: 'GitKraken', logo: 'gitkraken.svg' },
	{ name: 'Kraken', logo: '' },
	{ name: 'ImmoScout24', logo: '' },
	{ name: 'Figma', logo: 'figma.svg' },
	{ name: 'Higgsfield', logo: '' },
	{ name: 'HeyGen', logo: '' },
	{ name: 'Microsoft', logo: '' }
];

// Deliberately NOT in the row above. IELTS, the Goethe-Institut and the state of
// Berlin are institutions, not tools — their marks in a logo row read as
// accreditation, which would be a false claim. Berlin's bear is a protected
// state emblem on top of that. If you want them, they need a row of their own
// with an honest label, e.g. "exams I prepare people for". Say the word.
// export const exams = [{ name: 'IELTS' }, { name: 'Goethe-Institut' }];
