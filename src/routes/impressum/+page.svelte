<script>
	import { base } from '$app/paths';
	import { contact } from '$lib/copy/contact.js';
</script>

<svelte:head>
	<title>Impressum — {contact.brand}</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<main class="wrap legal">
	<h1>Impressum</h1>

	<h2>Angaben gemäß § 5 DDG</h2>
	<p>
		{contact.brand}<br />
		Inhaber: {contact.name}<br />
		{contact.street}<br />
		{contact.postalCode} {contact.city}<br />
		Deutschland
	</p>

	<h2>Kontakt</h2>
	<!-- The {@html} comments below are Cloudflare's documented opt-out from Email Address
	     Obfuscation. They must be emitted via {@html} because Svelte strips plain HTML comments at
	     compile time, so a literal <!--email_off--> never reaches the output.

	     Without the opt-out Cloudflare rewrites this mailto into a
	     __cf_email__ span that only resolves once its script runs, so with
	     JavaScript disabled the address is simply absent.
	
	     That is a §5 DDG problem, not a cosmetic one: the Impressum contact has
	     to be leicht erkennbar und unmittelbar erreichbar, and an address that
	     exists only after JS is neither. Obfuscation stays ON everywhere else,
	     where it is useful against address harvesting. -->
	{@html '<!--email_off-->'}
	<p>
		E-Mail: <a href="mailto:{contact.email}">{contact.email}</a>
	</p>
	{@html '<!--/email_off-->'}

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
