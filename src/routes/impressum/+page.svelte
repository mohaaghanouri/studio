<script>
	import { base } from '$app/paths';
	import { contact } from '$lib/copy/contact.js';
</script>

<svelte:head>
	<title>Impressum — Moha Aghanoori</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main class="wrap legal">
	<h1>Impressum</h1>

	<h2>Angaben gemäß § 5 DDG</h2>
	<p>
		Moha Aghanoori<br />
		Geschwister-Scholl-Straße 1–3<br />
		10117 {contact.city}<br />
		Deutschland
	</p>

	<h2>Kontakt</h2>
	<p>
		E-Mail: <a href="mailto:{contact.email}">{contact.email}</a>
	</p>

	<h2>Verantwortlich für den Inhalt</h2>
	<p>Moha Aghanoori (Anschrift wie oben)</p>

	<p><a href="{base}/">← Zurück zur Startseite</a></p>
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
</style>
