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
	// The only blocker. Five drafts sit in testimonials.items, each labelled
	// DRAFT/ENTWURF in its visible attribution and with every figure left as ⟨…⟩.
	// They exist to be sent to the client for correction, NOT to be published:
	// §5b UWG prohibits fake consumer testimonials. Replace with real replies
	// before this flag goes false.
	'copy/en.js + de.js → testimonials.items (5 unapproved drafts)'
];
