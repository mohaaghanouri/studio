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
export const site = 'https://dinobridge.de';

export const contact = {
	// The studio. This is the name on the header, the titles, the footer and the
	// JSON-LD business entity — the thing that takes the work on.
	brand: 'Dinobridge',
	// The owner. Stays on the Person entity, the legal pages, the About section
	// and the places where the site says who leads the work.
	name: 'Moha Aghanoori',
	// ProfessionalService name in JSON-LD. Same string as `brand`; @id-linked to
	// the Person in one @graph so search engines fuse studio and expert into one
	// entity rather than two unrelated ones.
	business: 'Dinobridge',
	// Disabled for now — set these back to re-enable every WhatsApp/Telegram
	// button at once (home contact section, case pages, work index):
	// whatsapp: '491706128949', telegram: 'mohaaghanouri'
	whatsapp: '',
	telegram: '',
	// Cloudflare Email Routing on the dinobridge.de zone forwards this to the
	// Gmail. The catch-all rule is disabled, so this is the ONLY address on the
	// domain that accepts mail — anything else (moha@, hello@) gets rejected.
	// Changing it here means adding the matching routing rule in Cloudflare too,
	// or enquiries bounce silently.
	email: 'connect@dinobridge.de',
	formspree: 'mbgrlnng',
	city: 'Berlin',
	// Business address. Declared in the Impressum (§5 DDG) and in the JSON-LD
	// PostalAddress, so this must stay an address where post genuinely reaches
	// you and where legal service can be effected — a Postfach does not satisfy
	// §5. Split into parts because schema.org wants them separately; the
	// Impressum and the JSON-LD both read these, so an address change is here
	// and nowhere else.
	street: 'Silbersteinstraße 131',
	postalCode: '12051',
	// One-line form, used by the footers and the contact block. Derived, so it
	// can never drift from the parts above.
	get address() {
		return `${this.street}, ${this.postalCode} ${this.city}`;
	},

	// Cal.com handle + event slug, e.g. cal: 'moha', calEvent: 'discovery-call'
	// → embeds cal.com/moha/discovery-call. Free plan is enough (1 user,
	// unlimited event types). Leave cal empty and the booking section is not
	// rendered at all.
	cal: 'mohaaghanouri',
	calEvent: 'discovery-call'
};

// Direct booking link for pages without the booking drawer (method, work index,
// case pages). Empty when no Cal handle is configured, so callers can hide it.
export const bookUrl = contact.cal ? `https://cal.com/${contact.cal}/${contact.calEvent}` : '';

// Profiles that are the same person as this site. These become Person.sameAs in
// the JSON-LD, which is what lets search engines and LLMs fuse scattered mentions
// of one name into a single entity — the strongest correlate of AI-search
// visibility in the research. Add any profile you actually maintain; drop any you
// abandon, because a dead link here is worse than a missing one.
export const profileLinks = [
	{ label: 'LinkedIn', url: 'https://www.linkedin.com/in/mohanuri' },
	{ label: 'GitHub', url: 'https://github.com/mohaaghanouri' }
];
export const profiles = profileLinks.map((p) => p.url);

