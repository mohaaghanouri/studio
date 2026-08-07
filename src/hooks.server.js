// Sets <html lang> per route at prerender time. Only "/" is English;
// /de, /impressum and /datenschutz are German.
export function handle({ event, resolve }) {
	const lang = event.route.id === '/' ? 'en' : 'de';
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', lang)
	});
}
