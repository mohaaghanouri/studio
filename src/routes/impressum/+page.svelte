<script>
	import { base } from '$app/paths';
	import { contact } from '$lib/copy/contact.js';
</script>

<svelte:head>
	<title>Impressum — {contact.name}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main class="wrap legal">
	<h1>Impressum</h1>

	<h2>Angaben gemäß § 5 DDG</h2>
	<p>
		{contact.name}<br />
		{contact.street}<br />
		{contact.postalCode} {contact.city}<br />
		Deutschland
	</p>

	<h2>Kontakt</h2>
	<p>
		E-Mail: <a href="mailto:{contact.email}">{contact.email}</a>
	</p>

	<h2>Verantwortlich für den Inhalt</h2>
	<p>{contact.name} (Anschrift wie oben)</p>

	<p class="back-home"><a href="{base}/">← Zurück zur Startseite</a></p>
</main>

<style>
	.legal {
		padding: 3rem 1.25rem 5rem;
	}
	h1 {
		font-size: 2.2rem;
		margin-bottom: 2rem;
	}
	h2 {
		font-size: 1.2rem;
		margin: 2rem 0 0.75rem;
	}
	p:last-child {
		margin-top: 3rem;
	}
	/* The back link is a standalone target, not a link inside a sentence, so it
	   needs a real tap area on a phone. Links inside prose are exempt from the
	   target-size minimum and are left alone — making them inline-block would
	   break the way they wrap mid-paragraph. */
	.back-home a {
		display: inline-block;
		padding: 0.6rem 0;
	}
</style>
