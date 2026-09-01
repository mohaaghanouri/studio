// Placeholder mode.
//
// While true, every page sends `noindex` so unapproved content cannot be
// mistaken for a real claim or picked up by search engines.
//
// Now false. The five mock drafts that were the original blocker were deleted
// rather than published; the quotes on the site are real client words, with
// names withheld at the clients' request — role and region only.
//
// The signed record of who said what lives in the PRIVATE repo
// mohaaghanouri/studio-research, at researches/projects/testimonals.md. It is
// not in this repo because it holds the real names. §5b UWG puts the burden of
// proving a testimonial genuine on the advertiser, so nothing goes in `quotes`
// that isn't in that file.
// Set this back to true if anything unapproved is ever added to the site again.
export const PLACEHOLDERS = false;

// Checklist, kept next to the flag so it can't drift out of date.
export const PLACEHOLDER_ITEMS = [];
