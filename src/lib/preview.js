// Placeholder mode.
//
// While true, every page sends `noindex` so unapproved content cannot be
// mistaken for a real claim or picked up by search engines.
//
// Now false: the five mock testimonials that were the only blocker have been
// removed rather than published. §5b UWG prohibits publishing consumer
// testimonials that are not genuine, so `testimonials.items` is empty in both
// copy files and the section is skipped. Set this back to true if anything
// unapproved is ever added to the site again.
export const PLACEHOLDERS = false;

// Checklist, kept next to the flag so it can't drift out of date.
export const PLACEHOLDER_ITEMS = [];
