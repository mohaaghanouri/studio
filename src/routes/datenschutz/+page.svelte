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

	<h2>Hosting und Server-Logs</h2>
	<p>
		Diese Website wird bei GitHub Pages gehostet, einem Dienst der GitHub, Inc. (USA). GitHub ist
		nach dem EU-US Data Privacy Framework zertifiziert. Beim Aufruf der Website verarbeitet GitHub
		technisch notwendige Daten (etwa IP-Adresse, Zeitpunkt des Aufrufs, aufgerufene Seite) in
		sogenannten Server-Logs. Das ist für den sicheren Betrieb jeder Website erforderlich (Art. 6
		Abs. 1 lit. f DSGVO). Auf diese Logs habe ich keinen direkten Zugriff.
	</p>

	<h2>Content Delivery Network (Cloudflare)</h2>
	<p>
		Der Zugriff auf diese Website läuft über das Netzwerk der Cloudflare, Inc. (USA), die nach dem
		EU-US Data Privacy Framework zertifiziert ist. Cloudflare liefert die Seiten von einem Server
		in Ihrer Nähe aus und filtert Angriffe ab. Dabei verarbeitet Cloudflare technisch notwendige
		Verbindungsdaten (IP-Adresse, Zeitpunkt, aufgerufene Adresse, Browserkennung). Rechtsgrundlage
		ist mein berechtigtes Interesse an einem sicheren und schnellen Betrieb der Website (Art. 6
		Abs. 1 lit. f DSGVO). Cloudflare setzt dabei keine Cookies auf dieser Website.
	</p>

	<h2>E-Mail-Weiterleitung</h2>
	<p>
		E-Mails an die Adresse dieser Domain werden über Cloudflare Email Routing (Cloudflare, Inc.,
		USA) an mein Postfach weitergeleitet. Cloudflare verarbeitet dabei die Absenderadresse und den
		Inhalt Ihrer Nachricht ausschließlich zur Übermittlung. Rechtsgrundlage ist die Bearbeitung
		Ihrer Anfrage bzw. die Anbahnung eines Vertrags (Art. 6 Abs. 1 lit. b DSGVO).
	</p>

	<h2>Kontaktformular</h2>
	<p>
		Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben (Name, E-Mail-Adresse, Nachricht)
		durch den Dienst Formspree Inc. (USA) verarbeitet und an mich weitergeleitet. Rechtsgrundlage
		ist die Anbahnung eines Vertrags bzw. Ihre Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Wenn Sie das
		Formular nicht nutzen möchten, schreiben Sie mir einfach direkt per E-Mail oder Messenger.
	</p>

	<h2>Terminbuchung (Cal.com)</h2>
	<p>
		Auf dieser Seite können Sie über den Button „Termin buchen" einen Kalender öffnen. Erst wenn
		Sie diesen Button anklicken, wird ein Skript der Cal.com, Inc. (USA) geladen und ein
		Buchungsfenster von cal.com eingebettet. Ohne diesen Klick findet keine Verbindung zu Cal.com
		statt. Dabei werden Ihre IP-Adresse und Browserdaten an Cal.com übertragen; die von Ihnen im
		Buchungsformular eingegebenen Daten (Name, E-Mail-Adresse, Anlass) werden dort zur
		Terminverwaltung verarbeitet. Rechtsgrundlage ist die Anbahnung eines Vertrags bzw. Ihre
		Anfrage (Art. 6 Abs. 1 lit. b DSGVO). Wenn Sie das nicht möchten, erreichen Sie mich jederzeit
		direkt per E-Mail.
	</p>

	<h2>Schriftarten</h2>
	<p>
		Alle Schriftarten werden von meinem eigenen Server geladen. Es besteht keine Verbindung zu
		Google Fonts oder einem anderen externen Schriftarten-Dienst, und es werden dafür keine Daten
		an Dritte übertragen.
	</p>

	<h2>Ton-Einstellung im Browser</h2>
	<p>
		Wenn Sie den Ton-Schalter im Kopfbereich benutzen, wird Ihre Auswahl („ein" oder „aus") lokal
		in Ihrem Browser gespeichert (localStorage), damit die Seite sie beim nächsten Besuch kennt.
		Diese Speicherung erfolgt nur auf Ihren eigenen Klick hin, verlässt Ihr Gerät nicht und
		enthält keine personenbezogenen Daten. Sie können sie jederzeit über die Website-Daten in
		Ihren Browser-Einstellungen löschen.
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
