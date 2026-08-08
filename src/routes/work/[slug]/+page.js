import { error } from '@sveltejs/kit';
import en from '$lib/copy/en.js';

export const prerender = true;

// adapter-static needs the full slug list up front; the cards link here too, but
// entries() makes the build independent of whether anything links to a case.
export function entries() {
	return en.built.items.map((item) => ({ slug: item.slug }));
}

export function load({ params }) {
	const item = en.built.items.find((i) => i.slug === params.slug);
	if (!item) throw error(404, 'Unknown use case');
	return { copy: en, item };
}
