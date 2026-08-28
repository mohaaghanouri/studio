// Placeholder mode.
//
// While true, every page sends `noindex` so unapproved content cannot be
// mistaken for a real claim or picked up by search engines.
//
// Now false. The five mock drafts that were the original blocker were deleted
// rather than published; the quotes on the site now are real client words from
// researches/projects/testimonals.md, with names withheld at the clients'
// request — role and context only. §5b UWG prohibits publishing consumer
// testimonials that are not genuine, so nothing invented goes in `quotes`.
// Set this back to true if anything unapproved is ever added to the site again.
export const PLACEHOLDERS = false;

// Checklist, kept next to the flag so it can't drift out of date.
export const PLACEHOLDER_ITEMS = [];
