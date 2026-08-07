<script>
	import { base } from '$app/paths';
	import { contact } from '$lib/copy/contact.js';
</script>

<svelte:head>
	<title>Datenschutzerklärung — Moha Aghanoori</title>
	<meta name="robots" content="noindex" />
</svelte:head>

<!-- TODO: have this reviewed / regenerated with e-recht24 before go-live -->
<main class="wrap legal">
	<h1>Datenschutzerklärung</h1>

	<h2>Wer verantwortlich ist</h2>
	<p>
		Moha Aghanoori, {contact.city} (vollständige Anschrift im
		<a href="{base}/impressum">Impressum</a>). Bei Fragen zum Datenschutz erreichen Sie mich unter
		<a href="mailto:{contact.email}">{contact.email}</a>.
	</p>

	<h2>Das Wichtigste in Kürze</h2>
	<p>
		Diese Website setzt keine Cookies, nutzt keine Analyse-Dienste und erstellt keine
		Nutzungsprofile. Sie besteht aus statischen Seiten; es läuft kein eigener Anwendungs-Server,
		der Daten über Sie speichert.
	</p>

	<h2>Server-Logs</h2>
	<p>
		Beim Aufruf der Website verarbeitet der Hosting-Anbieter technisch notwendige Daten (etwa
		IP-Adresse, Zeitpunkt des Aufrufs, aufgerufene Seite) in sogenannten Server-Logs. Das ist für
		den sicheren Betrieb jeder Website erforderlich (Art. 6 Abs. 1 lit. f DSGVO). Auf diese Logs
		habe ich keinen direkten Zugriff; sie werden vom Anbieter nach kurzer Zeit gelöscht.
	</p>

	<h2>Kontaktformular</h2>
	<p>
		Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben (Name, E-Mail-Adresse, Nachricht)
		durch den Dienst Formspree Inc. (USA) verarbeitet und an mich weitergeleitet. Rechtsgrundlage
		ist die Anbahnung eines Vertrags bzw. Ihre Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Wenn Sie das
		Formular nicht nutzen möchten, schreiben Sie mir einfach direkt per E-Mail oder Messenger.
	</p>

	<h2>Ihre Rechte</h2>
	<p>
		Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer Daten sowie das Recht, sich
		bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Schreiben Sie mir dazu einfach eine
		E-Mail.
	</p>

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
	p {
		max-width: 40rem;
	}
	p:last-child {
		margin-top: 3rem;
	}
</style>
