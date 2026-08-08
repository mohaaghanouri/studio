// Contact details shared by both languages.
export const site = 'https://moha.expert';

export const contact = {
	whatsapp: '491706128949',
	telegram: 'mohaaghanouri',
	email: 'moha@moha.expert',
	formspree: 'mbgrlnng',
	city: 'Berlin',

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
	{ name: 'Anthropic', logo: '' },
	{ name: 'Gemini', logo: '' },
	{ name: 'LangGraph', logo: '' },
	{ name: 'Langfuse', logo: '' },
	{ name: 'n8n', logo: '' },
	{ name: 'Figma', logo: '' },
	{ name: 'Higgsfield', logo: '' },
	{ name: 'HeyGen', logo: '' },
	{ name: 'Microsoft', logo: '' }
];
