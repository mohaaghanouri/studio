// Identity and contact details shared by both languages. This file is the single
// source of truth: nothing below should be retyped anywhere else in the repo.
//
// `name` is threaded through page titles, JSON-LD, the header, both footers, both
// legal pages, /llms.txt and the copy files. Reusing this codebase for someone
// else is a one-line change here, not a grep across nine files.
//
// Two exceptions that cannot be templated, both one-liners:
//   static/CNAME  — the custom domain, read by GitHub Pages at deploy time
//   src/lib/copy/{en,de}.js — prose that mentions the name in a sentence gets
//                             rewritten wholesale for a new site anyway
export const site = 'https://moha.expert';

export const contact = {
	name: 'Moha Aghanoori',
	// Used as the ProfessionalService name in JSON-LD — the business, not the person.
	// Both @id-linked into one @graph so search engines fuse them into one entity.
	business: 'Moha Aghanoori — AI Consulting',
	whatsapp: '491706128949',
	telegram: 'mohaaghanouri',
	// Cloudflare Email Routing forwards this to the Gmail. Catch-all is off, so
	// this is the ONLY address on the domain that accepts mail — anything else
	// (moha@, hello@) gets 550 rejected. Changing it here means changing it in
	// Cloudflare too.
	email: 'connect@moha.expert',
	formspree: 'mbgrlnng',
	city: 'Berlin',
	// Business address. Also declared in the Impressum (§5 DDG), so this must stay
	// an address where post genuinely reaches you.
	address: 'Geschwister-Scholl-Straße 1–3, 10117 Berlin',

	// Cal.com handle + event slug, e.g. cal: 'moha', calEvent: 'discovery-call'
	// → embeds cal.com/moha/discovery-call. Free plan is enough (1 user,
	// unlimited event types). Leave cal empty and the booking section is not
	// rendered at all.
	cal: 'mohaaghanouri',
	calEvent: 'discovery-call'
};

// Profiles that are the same person as this site. These become Person.sameAs in
// the JSON-LD, which is what lets search engines and LLMs fuse scattered mentions
// of one name into a single entity — the strongest correlate of AI-search
// visibility in the research. Add any profile you actually maintain; drop any you
// abandon, because a dead link here is worse than a missing one.
export const profiles = [
	'https://www.linkedin.com/in/mohanuri',
	'https://github.com/mohaaghanouri'
];

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
	{ name: 'ImmoScout24', logo: '' },
	{ name: 'Figma', logo: 'figma.svg' },
	{ name: 'Higgsfield', logo: 'higgsfield.svg' },
	{ name: 'HeyGen', logo: '' },
	{ name: 'Microsoft', logo: '' },
	{ name: 'Microsoft Teams', logo: '' },
	// Finance platforms, from the coaching side of the practice: several of the
	// coaches work with clients on money as well as training, so these four are
	// in genuine use. Kept together so they don't read as strays.
	{ name: 'Kraken', logo: '' },
	{ name: 'Alpaca', logo: '' },
	{ name: 'Binance', logo: 'binance.svg' },
	{ name: 'Trade Republic', logo: '' },
	{ name: 'CHECK24', logo: 'check24.svg' },
	{ name: 'Doctolib', logo: '' }
];

// Deliberately NOT in the row above. IELTS, the Goethe-Institut and the state of
// Berlin are institutions, not tools — their marks in a logo row read as
// accreditation, which would be a false claim. Berlin's bear is a protected
// state emblem on top of that. If you want them, they need a row of their own
// with an honest label, e.g. "exams I prepare people for". Say the word.
// export const exams = [{ name: 'IELTS' }, { name: 'Goethe-Institut' }];
