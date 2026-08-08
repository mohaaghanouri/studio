// Placeholder mode.
//
// While true, the site renders a visible PREVIEW banner and sends `noindex` so
// mock testimonials and the invented availability line cannot be mistaken for
// real claims or picked up by search engines.
//
// Flip to false once every item in PLACEHOLDER_ITEMS below is real content.
export const PLACEHOLDERS = true;

// Checklist, kept next to the flag so it can't drift out of date.
export const PLACEHOLDER_ITEMS = [
	'copy/en.js + de.js → hero.availability (invented number)',
	'copy/en.js + de.js → testimonials.items (mock quotes)',
	'static/og.png (generated card, replace if you want a photo)',
	'static/favicon.svg (generated mark)'
];
