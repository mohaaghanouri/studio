import en from '$lib/copy/en.js';
// Prose and links only — no handlers, actions, bindings or state — so ship no JS
// bundle for these either. Same reasoning as the legal pages.
export const prerender = true;
export const csr = false;
export function load() {
	return { copy: en };
}
