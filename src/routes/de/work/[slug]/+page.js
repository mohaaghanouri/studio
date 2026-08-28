import { error } from '@sveltejs/kit';
import de from '$lib/copy/de.js';

// Prose and links only — no handlers, actions, bindings or state — so ship no JS
// bundle for these either. Same reasoning as the legal pages.
export const prerender = true;
export const csr = false;

// adapter-static needs the full slug list up front; the cards link here too, but
// entries() makes the build independent of whether anything links to a case.
export function entries() {
	return de.built.items.map((item) => ({ slug: item.slug }));
}

export function load({ params }) {
	const item = de.built.items.find((i) => i.slug === params.slug);
	if (!item) throw error(404, 'Unknown use case');
	return { copy: de, item };
}
