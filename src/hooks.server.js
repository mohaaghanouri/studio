// Sets <html lang> per route at prerender time.
//
// German routes are /de/** plus the two legal pages, which exist only in German.
// Everything else — including /work/[slug] — is English. The previous version
// treated only "/" as English, so all six English case pages declared lang="de".
export function handle({ event, resolve }) {
	const id = event.route.id ?? '';
	const isGerman = id.startsWith('/de') || id === '/impressum' || id === '/datenschutz';
	return resolve(event, {
		transformPageChunk: ({ html }) => html.replace('%lang%', isGerman ? 'de' : 'en')
	});
}
