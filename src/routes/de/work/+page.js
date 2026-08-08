import de from '$lib/copy/de.js';
export const prerender = true;
export function load() {
	return { copy: de };
}
