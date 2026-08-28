// Prose mentions of the name are interpolated from contact.js so a rename stays a
// one-line change. The sentences themselves are copy — rewrite them freely.
import { contact } from './contact.js';

export default {
	lang: 'de',
	meta: {
		title: `${contact.name} — KI für die langweilige Hälfte Ihrer Arbeit`,
		description:
			'Ich finde den Teil Ihrer Woche, der Mechanik im Gewand von Urteilsvermögen ist, und baue bis genau an diese Linie — nie darüber hinaus. Anwälte, Lehrkräfte, Zahnärzte, Gutachter und neunzehn weitere Felder. Berlin, Deutsch & Englisch. Das erste Gespräch ist kostenlos.'
	},
	nav: {
		contact: 'Kontakt',
		menu: 'Menü'
	},
	hero: {
		headline: 'Die langweilige Hälfte Ihrer Arbeit kann sich selbst erledigen.',
		subline: `Ich bin ${contact.name}. Ich setze mich in Ihre tatsächliche Arbeitswoche, bis ich sehen kann, welcher Teil davon Mechanik im Gewand von Urteilsvermögen ist — und baue bis genau an diese Linie, nie darüber hinaus. Die Maschine übernimmt die Menge. Die Entscheidung bleibt bei Ihnen.`,
		button: 'Schreiben Sie mir — das erste Gespräch ist kostenlos',
		note: 'Berlin · Deutsch & Englisch · Sie haben direkt mit mir zu tun'
	},
	studio: {
		// Nur das Label — die Liste steht in contact.js. Als Werkzeuge, NICHT als Kunden,
		// wirklich eingesetzt, die Zeile ist also wahr und keine Kundenliste.
		toolsLabel: 'Womit ich arbeite',
		worksLabel: 'Anwendungsfälle',
		capabilitiesLabel: 'So läuft es',
		statsLabel: 'In Zahlen',
		bookLabel: 'Termin buchen',
		bookTitle: 'Wählen Sie eine Zeit, die Ihnen passt.',
		bookNote: 'Dreißig Minuten, kostenlos, keine Vorbereitung nötig.',
		sound: 'Ton',
		workBack: 'Alle Anwendungsfälle',
		// Keine Zahl in der Überschrift: die Liste wächst mit jeder Berufsgruppe.
		worksHeading: 'Was KI für Menschen wie Sie schon erledigt.',
		worksIntro:
			'Jedes davon habe ich selbst gebaut und betrieben — für echte Menschen mit echten Fristen. Wählen Sie das, was Ihrer Arbeit am nächsten kommt.',
		worksMeta:
			'Echte Anwendungsfälle: Vertragsprüfung für Anwälte, Content, Immobiliensuche, Jobsuche, Forschung, Marketing und Prüfungsvorbereitung. KI-Beratung in Berlin.',
		workName: 'Anwendungsfall',
		workPeople: 'Begleitete Menschen',
		workCovers: 'Was es übernimmt',
		workMachinery: 'Was die Maschine übernimmt',
		workJudgement: 'Was Ihres bleibt',
		workBuilds: 'Was ich baue',
		workStops: 'Wo es aufhört',
		workProof: 'Woran man den Erfolg sieht',
		workRefuse: 'Wann ich Nein sage',
		workCost: 'Was es Sie kostet',
		bookCta: 'Oder Termin buchen',
		close: 'Schließen',
		priceLabel: 'Was es kostet',
		// Bewusst keine Personenzahl hier — die Zahlen stehen auf den einzelnen Seiten.
		stats: [
			{ value: '6', label: 'Jahre KI-Systeme gebaut' },
			{ value: '19', label: 'Berufsgruppen betreut' },
			{ value: '4', label: 'Wochen vom ersten Besuch zur Übergabe' }
		]
	},
	who: {
		eyebrow: 'Für wen ich arbeite',
		// Labels zu roster.js. Dort stehen die Zahlen, hier nur die Wörter.
		rosterEyebrow: 'Seit 2022',
		rosterTitle: 'Mit wem ich tatsächlich gearbeitet habe.',
		rosterIntro:
			'Keine Zielgruppe — die Felder, in deren Arbeit ich schon drin war, eine Person nach der anderen. Wählen Sie das, was Ihrem am nächsten kommt.',
		roster: {
			'job-seekers': 'Menschen durch die Jobsuche',
			athletes: 'Sportlerinnen und Sportler',
			'content-creators': 'Content-Creator',
			'home-buyers': 'Menschen beim Immobilienkauf',
			lawyers: 'Anwältinnen und Anwälte',
			teachers: 'Lehrkräfte',
			coaches: 'Coaches und Yogalehrende',
			'product-managers': 'Produktmanager',
			'online-shoppers': 'Online-Käufer',
			architects: 'Architektinnen und Architekten',
			'project-managers': 'Projektmanager',
			surveyors: 'Gutachter',
			'event-organizers': 'Veranstalter',
			dentists: 'Zahnärztinnen und Zahnärzte',
			'team-leaders': 'Teamleitungen',
			'estate-agents': 'Immobilienmakler',
			executives: 'CEO',
			chefs: 'Küchenchef',
			'volunteer-orgs': 'Ehrenamtliche Organisation'
		},
		notListed:
			'Ihr Beruf ist nicht dabei? Es funktioniert mit großer Wahrscheinlichkeit trotzdem — fragen Sie mich.'
	},
	built: {
		items: [
			{
				slug: 'job-seekers',
				title: 'KI für die Jobsuche: dreißig Vermittlungen — KI-Beratung Berlin',
				metaDescription:
					'Eine Jobsuche auf Basis eines Belegspeichers, einem Anzeigenleser, der die echten Anforderungen findet, und einem Werkzeug, das Ihre Erfahrung nicht schönt. Dreißig Menschen sind so in Arbeit.',
				label: 'Jobsuche',
				headline: 'Dreißig Menschen sind über diesen Weg in Arbeit.',
				story: [
					'Keine „Jobsuchenden“. Ein Logistikkoordinator, dessen Lager geschlossen wurde. Eine Frau, die nach drei Jahren mit Kindern zurückkommt und die Lücke für disqualifizierend hält. Ein Entwickler mit ablaufendem Visum. Eine Absolventin, die 180 Bewerbungen geschickt hat und die Antworten nicht mehr öffnet. Sie kommen gedemütigt an, und die Demütigung ist das Erste, worum man sich kümmert.',
					'Es ist nie eine Stunde, es ist jeder Abend. Derselbe Lebenslauf geht an hundert Anzeigen, im Anschreiben nur der Firmenname getauscht. Es kommt nichts zurück, also schicken sie mehr. Menge ersetzt Nachdenken, Nachdenken hätte die Menge ersetzt, und die Schleife zieht sich zu, bis sie nicht mehr hinsehen können.'
				],
				machinery: [
					'Eine Anzeige vollständig lesen und herausziehen, was wirklich verlangt wird — auch die Anforderung in Absatz vier',
					'Diese Anforderungen gegen einen festen Datensatz dessen abgleichen, was Sie tatsächlich getan haben',
					'Den zugeschnittenen Lebenslauf und das Anschreiben erzeugen, Beleg für Beleg',
					'Jede Bewerbung nachhalten: Stand, Datum, wann nachgefasst werden muss',
					'Das Vorbereitungspaket für genau dieses Gespräch bauen',
					'Wiederveröffentlichungen, Agentur-Phantomanzeigen und Dubletten erkennen'
				],
				judgement: [
					'Ob diese Stelle erstrebenswert ist',
					'Wie Sie über die Lücke, die Kündigung, das Visum sprechen',
					'Was Sie über sich behaupten und was nicht',
					'Ob Sie das Angebot annehmen'
				],
				builds: [
					{
						name: 'Der Belegspeicher',
						text: 'Die erste Sitzung ist keine Software. Wir setzen uns hin und schreiben auf, was Sie tatsächlich getan haben — mit Zahlen, in Ihren eigenen Worten. Meist zwei bis vier Stunden, und es ist der schwerste Teil. Nichts kommt ins System, was nicht aus diesem Speicher stammt.'
					},
					{
						name: 'Der Anzeigenleser',
						text: 'URL oder PDF einfügen. Zurück kommen die echten Anforderungen, getrennt in hart und weich, was die Anzeige über das Team verrät, und ein Absatz in normaler Sprache dazu, was diese Stelle wirklich ist.'
					},
					{
						name: 'Der Abgleich',
						text: 'Jede Anforderung bekommt eine von drei Markierungen: belegt, benachbart oder fehlend. Fehlend bleibt fehlend. Es erfindet nie eine Brücke.'
					},
					{
						name: 'Der Tracker',
						text: 'Eine Zeile pro Bewerbung: Stelle, Datum, Quelle, Stand, Nachfassdatum, Ergebnis und was Sie gelernt haben. Nach dreißig Bewerbungen ist das Ihr wertvollster Besitz, weil die Muster sichtbar werden — welche Branchen antworten, welche Kanäle tot sind, welche Aussagen Gespräche bringen.'
					},
					{
						name: 'Das Vorbereitungspaket',
						text: 'Pro Gespräch erzeugt, aus Anzeige und Belegspeicher: wahrscheinliche Fragen, Ihre eigenen Beispiele dazu, und Fragen, die Sie zurückstellen.'
					}
				],
				stops: {
					title: 'Das Werkzeug weigert sich, Ihre Erfahrung zu übertreiben.',
					text: [
						'Das ist keine Einstellung. Fehlt eine Anforderung, sagt es fehlend und lässt Ihnen die Wahl: Bewerbung auslassen oder die Lücke im Anschreiben ehrlich ansprechen. Ich bin gebeten worden, das abzuschwächen. Ich tue es nicht.',
						'Es ist der Grund, warum die dreißig Menschen ihre Stellen behalten haben — im Gespräch wurde nichts versprochen, was am Montag nicht lieferbar war. Es entscheidet auch nicht, wo Sie sich bewerben. Es sortiert und filtert; Sie wählen.'
					]
				},
				proof:
					'Nicht die Zahl der Bewerbungen — die sinkt, meist um 70%. Gespräche pro hundert Bewerbungen, Zeit von der Anzeige bis zur abgeschickten Bewerbung (Ziel: unter 25 Minuten), und tatsächlich verschickte Nachfassnachrichten.',
				refuse:
					'Wenn Sie kein Jobsuche-Problem haben, sondern eine Berufsentscheidung vermeiden — Sie wissen, dass das Feld falsch ist, und bewerben sich trotzdem darin. Kein Werkzeug behebt das, und eines zu bauen hilft Ihnen nur beim Aufschieben.',
				cost: 'Der Belegspeicher tut weh. Alles danach sind fünfzehn Minuten pro Bewerbung.'
			},
			{
				slug: 'athletes',
				title: 'KI für Sportler: getaggte Aufnahmen, ein Profil für Scouts — KI-Beratung Berlin',
				metaDescription:
					'Spielaufnahmen in getaggte Ereignisse zerlegt, ein Highlight-Video in Minuten statt an einem Abend, ein immer aktuelles Profil und ein Trainingslog, das warnt, aber nie vorschreibt.',
				label: 'Sportler',
				headline: 'Wenn ein Scout etwas sehen will, darf es nicht vier Tage dauern.',
				story: [
					'Halbprofis und ernsthafte Amateure: ein Drittligafußballer, der eine Liga höher gesehen werden will, zwei Wettkampfkletterer, eine Handballerin nach dem Knie, ein E-Sportler, dessen Team sich auflöste, ein Triathlet, der sich selbst trainiert, weil der Trainer mehr kostet als die Startgelder. Fast alle führen ihre eigene Karriere als unbezahlten Zweitjob mit schlechteren Werkzeugen, als ihr Arbeitgeber hat.',
					'Meist brechen zwei Stunden. Die erste ist das Material: 90 Minuten Spiel auf dem Handy, aus denen vier brauchbare Clips müssen — jede Woche ein Abend. Die zweite ist die Ansprache: E-Mails an Vereine, Scouts, Berater und Sponsoren, jede neu geschrieben, jede unbeantwortet, keine davon nachgehalten.'
				],
				machinery: [
					'Eine lange Aufnahme in getaggte Ereignisse zerlegen — jede Aktion, jeden Satz, jede Runde, jeden Satz Wiederholungen',
					'Aus ausgewählten Tags ein Video bauen: richtige Länge, richtiges Format, richtige Untertitel für die Plattform, die ein Scout wirklich öffnet',
					'Einheiten protokollieren — Belastung, Dauer, RPE, Schlaf, Muskelkater — und einen scharfen Sieben-Tage-Trend sichtbar machen',
					'Ein einseitiges Profil für Scouts pflegen, das sich selbst aktualisiert',
					'Jeden kontaktierten Verein, Scout und Sponsor nachhalten, mit Nachfassdatum',
					'Das gesprochene Trainerfeedback in eine durchsuchbare Notiz verwandeln'
				],
				judgement: [
					'Ob der Körper heute passt',
					'Was mit einem Zwicken zu tun ist',
					'Welcher Verein, welcher Vertrag, welches Niveau',
					'Technikkorrektur'
				],
				builds: [
					{
						name: 'Die Tagging-Strecke',
						text: 'Sie laden Spiel oder Einheit hoch; zurück kommt alles nach Ereignistyp segmentiert, mit Zeitmarken. Sechs Tags auswählen ergibt ein fertiges Video im richtigen Format, mit Name, Position und Datum eingebrannt. Aus einem Abend werden etwa elf Minuten.'
					},
					{
						name: 'Das Trainingslog',
						text: 'Bewusst langweilig: ein Handyformular mit fünf Feldern, zehn Sekunden nach jeder Einheit. Es zeichnet den Belastungstrend und markiert scharfe Sprünge. Es markiert. Es verordnet nicht.'
					},
					{
						name: 'Die Profilseite',
						text: 'Eine Seite, immer aktuell: Position, Alter, Größe, Saisonminuten, Kennzahlen, drei Clips, Kontakt. Der einzige Grund, warum Spieler nicht gesehen werden, ist: Wenn ein Scout etwas anfordert, dauert die Zusammenstellung vier Tage — und dann ist das Interesse erkaltet.'
					},
					{
						name: 'Der Kontakt-Tracker',
						text: 'Dieselbe Architektur wie der Bewerbungs-Tracker, weil es dasselbe Problem im Trainingsanzug ist: eine Zielliste, eine aus echtem Material gebaute Nachricht, ein Nachfassdatum und ein Protokoll dessen, was zurückkam.'
					},
					{
						name: 'Das Comeback-Log',
						text: 'Für die Reha: die Anweisungen der Physiotherapie einmal aufgeschrieben, Einheiten dagegen protokolliert, und eine Wochenübersicht, die die Praxis in dreißig Sekunden liest.'
					}
				],
				stops: {
					title: 'Es verordnet nie eine Einheit und beurteilt nie eine Verletzung.',
					text: [
						'Es zeigt den Trend und legt die Zahl dem Sportler und, sofern vorhanden, dem Trainer oder der Physiotherapie vor. Drei Anfragen nach einer „empfohlenen Belastung für morgen“ habe ich abgelehnt. Die Folge eines Fehlers ist jemandes Saison, und die Maschine kann das Knie nicht fühlen.',
						'Es spricht auch nicht mit Vereinen. Entwürfe warten darauf, dass der Spieler sie sendet.'
					]
				},
				proof:
					'Minuten vom Abpfiff bis zu einem Video, das ein Scout öffnen könnte. Kontaktierte Vereine mit tatsächlich verschicktem Nachfassen. Und ob das Log acht Wochen später noch geführt wird — das ist der eigentliche Test, und deshalb hat das Formular fünf Felder.',
				refuse:
					'Wenn das Problem ist, dass jemand für dieses Niveau noch nicht gut genug ist. Das kommt vor, und kein Highlight-Video ändert es. Die ehrliche Version des Gesprächs ist mehr wert als das System; ich habe sie zweimal geführt.',
				cost: 'Zehn Sekunden nach jeder Einheit. Zwanzig Minuten nach jedem Spiel.'
			},
			{
				slug: 'content-creators',
				title: 'KI für Content-Creator: Ihre Abende zurück, Ihre Stimme unangetastet — KI-Beratung Berlin',
				metaDescription:
					'Transkript, entrümpelter Rohschnitt und acht sortierte Clip-Vorschläge warten jeden Morgen. Fünfzehn Minuten auswählen, der Rest läuft. Keine KI-Skripte, keine synthetische Stimme.',
				label: 'Content-Creator',
				headline: 'Aus sechs Stunden zwischen Dreh und Veröffentlichung werden unter zwei.',
				story: [
					'Ein Kochkanal, geführt von einer Person mit 60.000 Abonnenten. Ein Podcast-Duo. Ein deutscher Comedian mit Shorts. Zwei Bildungs-Creator. Eine Fotografin, die Behind-the-Scenes filmt. Keine Medienhäuser — Menschen, die gleichzeitig Talent, Cutter, Verlag und Kundendienst sind und die still kurz davor stehen, an den drei Jobs auszubrennen, die nicht der geliebte sind.',
					'Der Dreh dauert zwei Stunden, der Schnitt sechs, die Untertitel eine, und Beschreibung, Tags, Thumbnail und Planung noch einmal eine. Sie sind nicht müde vom Machen. Sie sind müde von den vier Stunden zwischen „fertig gemacht“ und „online“.'
				],
				machinery: [
					'Alles transkribieren, genau, mit Zeitmarken und Sprecherkennzeichnung',
					'Stille, Füllwörter, Fehlstarts und den vierten Anlauf an einem Satz entfernen',
					'Sortierte Clip-Vorschläge mit Zeitmarken und Begründung liefern',
					'Untertitel in Ihrer Schrift, Position und Sprache einbrennen, plus SRT-Datei',
					'Einen Masterschnitt in 16:9, 9:16 und 1:1 umformatieren, mit Motivverfolgung',
					'Beschreibung, Kapitel und Tags aus dem Transkript schreiben',
					'Kommentare sortieren: Fragen, Beleidigungen, Geschäftsanfragen, Rest',
					'Das Archiv pflegen, damit „hatte ich das schon?“ beantwortbar ist'
				],
				judgement: [
					'Was witzig ist. Was wahr ist. Was gesagt gehört',
					'Der Hook — die ersten drei Sekunden',
					'Ob das überhaupt rausgeht',
					'Die Stimme'
				],
				builds: [
					{
						name: 'Die Ingest-Strecke',
						text: 'Das Tagesmaterial in einen Ordner legen. Über Nacht kommen ein Transkript, ein von Stille befreiter Rohschnitt und acht sortierte Clip-Vorschläge mit Begründung zurück — „Lacher bei 04:12“, „Frage sauber beantwortet bei 19:40“.'
					},
					{
						name: 'Die Auswahl',
						text: 'Sie setzen sich fünfzehn Minuten hin und wählen aus. Das ist Ihr gesamter Anteil an der mechanischen Schicht, und es ist bewusst der einzige Punkt, an dem Sie denken müssen.'
					},
					{
						name: 'Der Zusammenbau',
						text: 'Gewählte Clips geschnitten, in Ihrem bestehenden Stil untertitelt — gleiche Schrift, gleiche Farbe, gleiche Platzierung, abgeschaut von dem, was Sie schon nutzen — pro Plattform umformatiert und mit Beschreibung, Kapiteln und Tags in einen Veröffentlichungsordner gelegt.'
					},
					{
						name: 'Die Kommentar-Triage',
						text: 'Vier Körbe jeden Morgen. Geschäftsanfragen gehen in ein echtes Postfach. Beleidigungen in einen Ordner, den Sie nie öffnen müssen — außer Sie wollen Beweise.'
					},
					{
						name: 'Das Archiv',
						text: 'Jedes Transkript durchsuchbar. Das ist der heimliche Gewinner: Nach zwei Jahren wissen die meisten nicht mehr, was sie gesagt haben, und das Archiv nimmt die Angst vor versehentlicher Wiederholung.'
					}
				],
				stops: {
					title: 'Es schreibt nicht den Inhalt und nicht in Ihrer Stimme.',
					text: [
						'Keine KI-Skripte, kein synthetischer Sprecher, kein „im Stil von“. Der Grund ist wirtschaftlich wie ethisch: Die Stimme ist das gesamte Kapital. Wer seine Stimme erzeugbar macht, hat das Einzige verkauft, was ihm gehörte. Ich sage das im ersten Gespräch und habe darüber ein Mandat verloren.',
						'Hooks bleiben menschlich. Für Thumbnails erzeuge ich Varianten Ihres eigenen Fotos — Ausschnitte, Textplatzierung — nie ein synthetisches Bild.'
					]
				},
				proof:
					'Stunden zwischen „Dreh beendet“ und „veröffentlicht“ — typisch von rund sechs auf unter zwei. Uploads pro Woche ohne mehr Drehtage. Und das, was sechs Monate später ungefragt gesagt wird: Sie haben ihre Abende zurück.',
				refuse:
					'Wenn jemand nicht postet, weil er nichts zu sagen hat. Schnelleres Veröffentlichen macht das sichtbar schlimmer. Zweimal habe ich einem Creator gesagt, dass sein Problem vor dem Schnitt liegt.',
				cost: 'Fünfzehn Minuten Auswählen. Alles andere läuft, während Sie schlafen.'
			},
			{
				slug: 'home-buyers',
				title: 'KI für die Immobiliensuche: weniger Besichtigungen, geprüfte Unterlagen — KI-Beratung Berlin',
				metaDescription:
					'Ein Wächter, der neue Angebote in Minuten findet, ein Aussortierer, der begründet ablehnt, die echten Erwerbsnebenkosten inklusive Grunderwerbsteuer und Notar, und ein Besichtigungsbriefing.',
				label: 'Immobilienkauf',
				headline: 'Es geht nicht darum, Ihnen mehr Wohnungen zu zeigen, sondern weniger.',
				story: [
					'Ein Paar in Berlin, seit vierzehn Monaten auf der Suche. Eine Familie, die einen bestimmten Schuleinzugsbereich braucht. Ein Mann, der seiner Mutter eine Wohnung in einer anderen Stadt kauft. Zwei Menschen, die zum Sanieren kaufen. Alle sind auf dieselbe besondere Art erschöpft, und alle haben begonnen, ihre Ansprüche zu senken, ohne es zu merken.',
					'Samstag- und Sonntagvormittag auf Portalen, immer dieselben vierzig Wohnungen. Die guten Angebote sind binnen Stunden weg, also garantiert die Wochenendgewohnheit, dass sie nur sehen, was niemand wollte. Und jedes Angebot, das ihnen gefällt, braucht vierzig Minuten Prüfung — Exposé, Hausgeld, Energieausweis, Arbeitsweg, echte Erwerbskosten — und diese vierzig Minuten leisten sie vielleicht zweimal die Woche, schlecht, um Mitternacht.'
				],
				machinery: [
					'Jedes relevante Portal fortlaufend beobachten und ein neues Angebot in Minuten erfassen',
					'Dubletten erkennen: dieselbe Wohnung bei drei Maklern zu drei Preisen',
					'Harte Kriterien anwenden — Zimmer, Fläche, Etage, Aufzug, Budget, Bezirk',
					'Das Exposé lesen: Hausgeld, Wohnfläche, Baujahr, Heizung, Energieausweis, Erbpacht, Denkmalschutz, Sanierungsstau',
					'Die echten Erwerbskosten rechnen — Grunderwerbsteuer, Notar und Grundbuch, Courtage — meist 10–12% über dem Schlagzeilenpreis',
					'Tür-zu-Tür-Fahrzeiten zu echten Adressen zu echten Tageszeiten',
					'Das Besichtigungsbriefing bauen und festhalten, warum jede Wohnung abgelehnt wurde'
				],
				judgement: [
					'Ob Sie dort glücklich wären',
					'Was es Ihnen wert ist',
					'Wie viel Sie bieten und ob Sie überhaupt kaufen'
				],
				builds: [
					{
						name: 'Der Wächter',
						text: 'Läuft ununterbrochen. Neue Angebote, die Ihre harten Kriterien erfüllen, kommen binnen Minuten per Nachricht — nicht am Samstag. Das allein verändert das Ergebnis mehr als alles andere zusammen, denn in Berlin bildet sich die Schlange in den ersten zwei Stunden.'
					},
					{
						name: 'Der Aussortierer',
						text: 'Der Teil, den Menschen erst seltsam finden und dann lieben. Er wirft Angebote weg und sagt warum: „Erbpacht bis 2061 — haben Sie ausgeschlossen.“ „Hausgeld 610 € für 68 m² — über Ihrer Grenze.“ Der abgelehnte Stapel bleibt sichtbar, aber eingeklappt, damit Sie sehen: Es war nicht schlampig.'
					},
					{
						name: 'Die Echtkosten-Zeile',
						text: 'Jedes verbleibende Angebot trägt eine Zahl: was der Gang zum Notar tatsächlich kostet, und die Monatsrate bei Ihrem angegebenen Eigenkapital — mit dem Zinssatz als Eingabe, die Sie setzen, nicht als Erfindung von mir.'
					},
					{
						name: 'Das Besichtigungsbriefing',
						text: 'Eine Seite pro Wohnung: die acht Dinge, auf die man in dieser Bauepoche achtet — Altbau 1900, 60er, Plattenbau und Neubau haben je eigene Listen — die sechs Fragen an den Makler und die zwei Unterlagen, die Sie anfordern.'
					},
					{
						name: 'Das Ablehnungsgedächtnis',
						text: 'Nach elf Besichtigungen weiß niemand mehr, warum Nummer vier ausschied. Das Protokoll verhindert das langsame, unbemerkte Senken der Ansprüche.'
					}
				],
				stops: {
					title: 'Es sagt Ihnen nie, ob Sie kaufen sollen, und fasst kein Geld an.',
					text: [
						'Keine Wertermittlung, kein „das ist unter Wert“, keine Finanzierungsempfehlung. Ich bin kein Finanzberater und die Software auch nicht. Sie rechnet, was Arithmetik ist, und gibt die Entscheidung unangetastet zurück. Wirkt ein Angebot auffällig, sagt sie auffällig und schlägt vor, eine Fachperson zu fragen — sie schließt nicht.',
						'Sie kontaktiert auch keine Makler. Anfragen werden entworfen; Sie senden sie.'
					]
				},
				proof:
					'Besichtigungen pro hundert gesehener Angebote — sollte deutlich steigen. Minuten von der Veröffentlichung bis zur gesendeten Anfrage. Wochenendstunden auf Portalen, die auf null gehen sollten.',
				refuse:
					'Wenn Budget und Anforderungen nicht beide wahr sein können. Das System würde dann Woche für Woche schlicht Stille produzieren, was eine grausame Art ist, das zu lernen. Ich sage es stattdessen in Woche eins, mit der Rechnung auf dem Tisch.',
				cost: 'Wöchentlich nichts. Die Kriteriensitzung ist der ganze Preis.'
			},
			{
				slug: 'lawyers',
				title: 'KI für Anwälte: Vertragsprüfung, die schon markiert ankommt — KI-Beratung Berlin',
				metaDescription:
					'Eingang, Versionierung und Ablage in Woche eins gelöst. Danach eine erste Durchsicht in Word, in der jeder Vorschlag seine Begründung trägt und einzeln angenommen oder verworfen wird.',
				label: 'Anwälte',
				headline: 'Der Vertrag ist schon markiert, wenn die Juristin ihn öffnet.',
				story: [
					'Eine Zwei-Partner-Wirtschaftskanzlei. Eine Rechtsabteilung mit fünf Personen. Drei Einzelanwälte. Eine Syndika, die die gesamte Rechtsfunktion eines 300-Personen-Unternehmens ist. Sie sind nicht im Recht im Rückstand. Sie sind im Rückstand bei Verträgen als Gegenständen — Dateien, die ankommen, wandern, sich ändern und verloren gehen.',
					'Ein Vertrag kommt als Anhang namens Vertrag_final_final_v3(2).docx. Jemand antwortet mit Änderungsverfolgung aus einer Fassung, die längst überholt war. Drei Wochen später verstreicht unbemerkt eine Frist, die nur in diesem Dokument stand. Niemand kann sagen, welche Fassung unterschrieben wurde. Die Juristin verbringt den Abend mit Archivarbeit — mit juristischem Staatsexamen.'
				],
				machinery: [
					'Eingang: Verträge in dem Moment aus dem Postfach ziehen, in dem sie ankommen',
					'Benennung und Versionierung nach einer Konvention, dauerhaft, mit erhaltener Historie',
					'Extraktion: Parteien, Daten, Laufzeit, Kündigungsfristen, Rechtswahl, Haftungsgrenzen, Verlängerung',
					'Der Fristenkalender — jedes Datum in jedem Vertrag, sichtbar bevor es zählt',
					'Einen eingehenden Entwurf gegen das eigene Playbook der Kanzlei stellen und Abweichungen markieren',
					'Nachfassen bei der Gegenseite und beim internen Unterzeichner',
					'Korrekt und beim ersten Mal ins DMS ablegen',
					'„Wo ist dieser Vertrag, und welche Fassung gilt?“ sofort beantworten'
				],
				judgement: [
					'Ob eine Klausel akzeptabel ist',
					'Was zugestanden wird',
					'Beratung',
					'Unterschrift'
				],
				builds: [
					{
						name: 'Der Eingang',
						text: 'Ein überwachtes Postfach. Jeder Anhang wird erkannt, versioniert, mit Akte und Vorgängerfassung verknüpft und abgelegt. Das final_final_v3(2)-Problem verschwindet in Woche eins, und das ist die Veränderung, die zuerst auffällt.'
					},
					{
						name: 'Das Extraktionsblatt',
						text: 'Ein strukturierter Datensatz pro Vertrag, in dem jedes Feld einen Verweis auf genau die Seite und den Absatz trägt, aus dem es stammt. Nichts wird ohne Fundstelle behauptet, denn eine nicht überprüfbare Extraktion ist schlimmer als keine — sie sieht aus wie Wissen.'
					},
					{
						name: 'Der Playbook-Abgleich',
						text: 'Die Positionen der Kanzlei, einmal richtig aufgeschrieben. Das ist die härteste und wertvollste Woche des Projekts, weil die meisten Kanzleien ihre nie aufgeschrieben haben. Danach wird jeder eingehende Entwurf dagegen markiert.'
					},
					{
						name: 'Die erste Durchsicht',
						text: 'Das Herz des Systems. Ein Word-Dokument mit Änderungsverfolgung, in dem jeder einzelne Vorschlag als Kommentar seine Begründung trägt: aus welcher Playbook-Position er kommt oder welches Risiko er adressiert. Die Juristin öffnet es in Word — ihrem eigenen Werkzeug, nicht meinem — und nimmt jeden Vorschlag von Hand an oder verwirft ihn.'
					},
					{
						name: 'Der Fristenkalender',
						text: 'Termine mit eskalierenden Erinnerungen im Kalender. Das Stück mit dem höchsten Rohwert, denn eine versäumte Kündigungsfrist ist ein Haftungsfall.'
					}
				],
				stops: {
					title: 'Niemals juristische Bewertung, und nichts verlässt ungelesen das Haus.',
					text: [
						'Keine Beratung, an niemanden, zu keinem Zeitpunkt, intern wie extern. Kein automatischer Versand an die Gegenseite. Keine Klausel wird ohne genannte Begründung umformuliert. Jede Extraktion ist an ihre Fundstelle geheftet, sodass die Prüfung vier Sekunden dauert. Es gibt kein „Alle übernehmen“ — ich wurde gebeten, das zu bauen, und habe abgelehnt.',
						'Dazu die Bedingungen, die es in Deutschland überhaupt einsetzbar machen: DSGVO-Konformität mit AV-Vertrag, EU-Datenhaltung, kein Training auf Mandanteninhalten, gewahrtes Mandatsgeheimnis, lückenloses Audit-Log und eine dokumentierte Antwort auf die Kammerfrage „Wer hat das getan, und können Sie es zeigen?“ Ein juristisches KI-System ohne Audit-Log ist nicht einsatzfähig, egal was es kann.'
					]
				},
				proof:
					'Zeit vom Eingang bis abgelegt und benannt. „Wo ist dieser Vertrag“ in Sekunden beantwortet. Versäumte Fristen: null. Und das, was die Partner nennen — Abende, die nicht für Versionsarchäologie draufgehen.',
				refuse:
					'Maßgeschneiderte, hochwertige Einzelverhandlungen. Dort gibt es kein Playbook, weil es keine Wiederholung gibt, und eine erste Durchsicht bei einem wirklich neuartigen Deal ist Rauschen im Gewand der Hilfe.',
				cost: 'Zwei Wochen, um das Playbook zu schreiben. Danach elf statt vierzig Minuten pro Vertrag.'
			},
			{
				slug: 'teachers',
				title: 'KI für Lehrkräfte: Sonntage zurück, keine Note von der Maschine — KI-Beratung Berlin',
				metaDescription:
					'Drei Niveaustufen aus einem Arbeitsblatt, ein Rubrik-Durchgang, der Belege findet und die Note zurückhält, und Zeugnisformulierungen aus den eigenen Notizen. Keine Schülerdaten verlassen den Raum.',
				label: 'Lehrkräfte',
				headline: 'Die Maschine findet den Beleg. Die Lehrkraft gibt die Note.',
				story: [
					'Drei Gymnasiallehrkräfte, zwei aus der Grundschule, ein Berufsschullehrer und zwei Nachhilfelehrerinnen. Jede und jeder leistet etwa zwölf unbezahlte Stunden pro Woche, und fast keine davon ist Unterricht.',
					'Sonntag. 28 Texte korrigieren, jeder braucht einen Kommentar, der mehr ist als „gut“. Dann ein Arbeitsblatt auf drei Niveaus differenzieren. Dann Elternbriefe. Und zweimal im Jahr die Zeugnisse — 28 Bemerkungen zwischen 21 Uhr und Mitternacht, jede angeblich individuell, alle geschrieben, wenn man zu müde ist, individuell zu sein.'
				],
				machinery: [
					'Drei Schwierigkeitsvarianten eines Arbeitsblatts aus einem Original erzeugen',
					'Ein Rubrik-Erstdurchgang: den Beleg für jedes Kriterium im Schülertext finden und zitieren',
					'Die eigenen Kurznotizen in vollständige Zeugnissätze im eigenen Register bringen',
					'Elternmails aus Stichpunkten entwerfen, in passender Förmlichkeit',
					'Übungssätze, Abfragen und Vokabeltrainings erzeugen',
					'Unterrichtsgerüste gegen den Rahmenlehrplan bauen',
					'Verwaltung: Sitzpläne, Ausflugsbriefe, Einverständnisse, Vertretungsnotizen',
					'Auswerten, welche Aufgaben die Klasse gemeinsam verfehlt hat und was das bedeutet'
				],
				judgement: [
					'Die Note',
					'Was mit einem bestimmten Kind los ist',
					'Was man besorgten Eltern sagt',
					'Was diese Klasse am Dienstag braucht'
				],
				builds: [
					{
						name: 'Der Variantengenerator',
						text: 'Ein Arbeitsblatt rein, drei raus: mit Hilfen, Standard, Erweiterung. Gleicher Inhalt, andere Unterstützung. Hier verschwinden die Differenzierungsstunden, und es ist reine Mechanik — Sie wissen längst, wie Hilfen aussehen, Sie haben nur keine Zeit, sie dreimal zu tippen.'
					},
					{
						name: 'Der Rubrik-Durchgang',
						text: 'Ihre Rubrik, einmal eingegeben. Jede Abgabe kommt mit Belegen zu jedem Kriterium zurück — und ohne Note. Die Korrekturzeit halbiert sich etwa, und das Unerwartete: Das Feedback wird spezifischer, weil der Beleg schon zitiert ist und Sie aufhören, „guter Aufbau“ zu schreiben.'
					},
					{
						name: 'Die Zeugnishilfe',
						text: 'Sie schreiben sechs Wörter über ein Kind. Zurück kommen drei Sätze im Register der Schule, gebaut aus Ihren Notizen und sonst nichts. Sie überarbeiten jeden. Über ein Kind wird nichts erzeugt, was Sie nicht zuerst beobachtet haben.'
					},
					{
						name: 'Der Elternbrief-Entwurf',
						text: 'Stichpunkte rein, passender Brief raus. Jeder wird von der Lehrkraft gelesen und dann gesendet.'
					},
					{
						name: 'Die Aufgabenanalyse',
						text: 'Welche Aufgaben die Klasse verfehlt hat und was die häufigste falsche Antwort über die Fehlvorstellung verrät. Das ändert, was am Dienstag unterrichtet wird — die einzige Ausgabe dieser Liste, die den Unterricht tatsächlich verbessert.'
					}
				],
				stops: {
					title: 'Keine Note von der Maschine, und keine Schülerdaten verlassen den Raum.',
					text: [
						'Die Notengrenze ist pädagogisch und rechtlich zugleich: In deutschen Schulen ist die Note die der Lehrkraft, und in den meisten Ländern ist eine automatisierte schlicht nicht zulässig. Sie ist auch einfach richtig — der Rubrik-Durchgang findet Belege, und Belege zu gewichten ist Unterrichten.',
						'Die Datengrenze ist härter und nicht verhandelbar. Kinderdaten liegen nahe an Artikel 9, Schulen haben eigene DSGVO-Regime, und die Länder unterscheiden sich darin, was überhaupt einen US-Dienst berühren darf. Also: Pseudonymisierung, bevor irgendetwas das Gerät verlässt, lokale Verarbeitung wo möglich, keine Namen, keine Geburtsdaten, kein Förderbedarf, keine Familienverhältnisse. Wo die Regeln einer Schule externe Verarbeitung ganz verbieten, bauen wir die lokale Version oder gar nichts. Und über Charakter, Potenzial oder häusliche Lage eines Kindes wird nie etwas erzeugt.'
					]
				},
				proof:
					'Sonntagsstunden. Korrekturminuten pro Satz. Zeugniszeit in Abenden statt Wochen. Und ob das Feedback, das Schülerinnen und Schüler bekommen, spezifischer wurde — das merken Lehrkräfte binnen eines Durchgangs.',
				refuse:
					'Wenn die Schule das als Überwachungssystem will — Engagement-Scores, Verhaltensprognosen, Vergleichsdashboards über Kinder. Das hat keine der acht Lehrkräfte gewollt. Das fragt gelegentlich die Leitung hinterher, und ich baue es nicht.',
				cost: 'Ein Nachmittag, um Ihre Rubrik einzugeben. Er rechnet sich in einem Korrektursatz.'
			},
			{
				slug: 'coaches',
				title: 'KI für Coaches und Yogalehrende: meistens keine KI — KI-Beratung Berlin',
				metaDescription:
					'Neun Verwaltungsstunden pro Woche, und bei drei von fünf war die Lösung ein Buchungssystem, keine KI. Die dünne KI-Schicht, die sich lohnt: Sprachnotiz zu Sitzungsnotiz und eine durchsuchbare Sequenzbibliothek.',
				label: 'Coaches & Yogalehrende',
				headline: 'Bei drei von fünf lautete die ehrliche Antwort: meistens keine KI.',
				story: [
					'Zwei Yogalehrerinnen mit eigenem Studio, ein Personal Trainer, ein Business-Coach, eine Pilates-Lehrerin. Jede und jeder ist ein Ein-Personen-Unternehmen, in dem das Produkt Präsenz ist und der Überbau Verwaltung. Sie sind zugleich die Gruppe, der KI-Werkzeuge am aggressivsten verkauft werden, und die Gruppe, die am wenigsten davon braucht.',
					'Die Stunde ist zersplittert, und deshalb ist sie schlimmer, als sie aussieht. Buchungsnachrichten über WhatsApp, Instagram und E-Mail. Der No-Show, der gebucht hat und verschwand. Rechnungen zum Monatsende. Der Newsletter, der seit März nicht mehr rausging. Sitzungsnotizen, drei Tage später aus dem Gedächtnis geschrieben. Neun Stunden pro Woche, keine davon in Blöcken, die sich wie Arbeit anfühlen, alle in den Lücken, die Erholung hätten sein sollen.'
				],
				machinery: [
					'Buchung, Stornierung, Warteliste und Erinnerung',
					'Zahlung und Rechnung, inklusive Kleinunternehmerhinweis nach §19 UStG',
					'Nachfassen bei No-Shows und pausierenden Kundinnen',
					'Kurs- und Workshopbeschreibungen aus ein paar Notizen entwerfen',
					'Eine durchsuchbare Sequenz- und Übungsbibliothek pflegen',
					'Einen gesprochenen Zwei-Minuten-Rückblick in eine Kundennotiz verwandeln',
					'Einen Newsletter aus dem Material des Monats bauen, und den Steuerexport'
				],
				judgement: [
					'Was dieser Körper heute braucht',
					'Die Beziehung, die das ganze Geschäft ist',
					'Ob jemand gefordert oder gebremst gehört',
					'Was am Donnerstag unterrichtet wird'
				],
				builds: [
					{
						name: 'Zuerst die langweilige Infrastruktur',
						text: 'Ein ordentliches Buchungssystem mit Erinnerungen und Kartenzahlung nahm etwa sechs der neun Stunden weg, und ich habe das in Woche eins gesagt. Keine KI darin. Die KI-Schicht danach ist dünn und konkret.'
					},
					{
						name: 'Sprachnotiz zu Sitzungsnotiz',
						text: 'Sie sprechen neunzig Sekunden, nachdem die Kundin gegangen ist. Daraus wird eine strukturierte Notiz — was gearbeitet wurde, worauf zu achten ist, womit man beginnt — abgelegt zur Person. Das Meistgeschätzte, was ich für diese Gruppe gebaut habe, weil die Notiz dadurch überhaupt entsteht und weil genau das der Grund ist, warum Menschen zahlen: dass jemand weiß, wo man stehen geblieben ist.'
					},
					{
						name: 'Die Sequenzbibliothek',
						text: 'Jede je unterrichtete Sequenz, durchsuchbar nach Schwerpunkt, Niveau, Dauer und Kontraindikation. Die Planung sinkt von vierzig Minuten auf acht, und Sie wiederholen nicht mehr unbewusst dieselben sechs Stunden.'
					},
					{
						name: 'Der Beschreibungs-Entwurf',
						text: 'Sechs Wörter zu einer Workshopbeschreibung in Ihrer Sprache — die ich aus zwanzig Ihrer eigenen früheren Beschreibungen baue, nicht aus einer Stilanweisung.'
					},
					{
						name: 'Die Reaktivierungsliste',
						text: 'Wer seit sechs Wochen nicht gebucht hat, mit der letzten Notiz dabei, damit die Nachricht echt sein kann statt „wir vermissen dich!“'
					}
				],
				stops: {
					title: 'Keine Gesundheitsberatung, und keine Nachricht geht als Sie raus, ohne dass Sie sie lesen.',
					text: [
						'Die Gesundheitsgrenze: keine Modifikationsempfehlung, keine Verletzungsdeutung, kein „geeignet in der Schwangerschaft“, keine Ernährung. Ihre Versicherung, Ihre Haftung, Ihr Urteil. Erwähnt eine Kundennotiz eine Erkrankung, speichert das System sie als Text und bietet nichts an.',
						'Die Stimmgrenze zählt mehr, als man erwartet. Ihre Kundinnen merken es. Eine erzeugte Nachricht, die danebengeht, kostet mehr als die zehn gesparten Minuten, denn das Produkt ist hier, dass jemand wirklich aufpasst. Ich entwerfe; Sie senden.'
					]
				},
				proof:
					'Verwaltungsstunden pro Woche, ehrlich gezählt. No-Show-Quote — allein Erinnerungen halbieren sie meist. Anteil der Sitzungen mit tatsächlich geschriebener Notiz, der bei etwa 30% startet und bei etwa 95% endet. Reaktivierte Kundinnen pro Quartal.',
				refuse:
					'Oft, in dieser Gruppe. Drei von fünf kamen mit dem Wunsch nach einem KI-Assistenten und brauchten einen Kalender mit automatischen Erinnerungen. Ich habe das eingerichtet, den Nachmittag berechnet und gesagt, dass sich der KI-Teil noch nicht rechnet. Zwei davon haben mir seither vier Menschen geschickt. Nein zu sagen ist das Marketing.',
				cost: 'Neunzig Sekunden nach jeder Sitzung. Sonst nichts.'
			},
			{
				slug: 'product-managers',
				title: 'KI für Produktmanager: es priorisiert nie — KI-Beratung Berlin',
				metaDescription:
					'Feedback aus allen Quellen geclustert, mit den Originalzitaten darunter, Meetings zu Tickets, Dubletten im ganzen Backlog. Kein RICE-Score, keine sortierte Roadmap.',
				label: 'Produktmanager',
				headline: 'Es priorisiert nie und es bewertet nie.',
				story: [
					'Zwei PMs in einem mittelgroßen SaaS-Unternehmen, einer auf einem Marktplatz, eine, die als einzige PM in einem 40-Personen-Startup zusätzlich Support, Analytics und Release Notes macht. Sie sind die Gruppe, die am ehesten schon drei KI-Werkzeuge selbst ausprobiert und alle drei aufgegeben hat — weil die Werkzeuge das Schreiben automatisierten, was nie der Engpass war.',
					'Zwei Bereiche brechen. Der erste ist Feedback: Es kommt in Zendesk an, in Slack, in Vertriebsgesprächen, in App-Store-Bewertungen, in drei verschiedenen Notion-Seiten — alles ordentlich zu lesen wäre ein Tag pro Woche, also tut es niemand. Der zweite ist die Statusschicht: das Wochenupdate, die Release Notes, die Stakeholder-Mail, das Ticket aus einem Meeting, das vor neun Minuten endete.'
				],
				machinery: [
					'Feedback aus jeder Quelle fortlaufend an einen Ort ziehen',
					'Nach Thema clustern und dieselbe Beschwerde in elf Formulierungen zusammenführen',
					'Menge, Segment und Umsatz an jedes Cluster hängen',
					'Meetingaufnahmen in Tickets mit Akzeptanzkriterien verwandeln',
					'Doppelte Backlog-Einträge erkennen, viermal in achtzehn Monaten eingereicht',
					'Release Notes aus gemergten PRs und geschlossenen Tickets entwerfen',
					'Das wöchentliche Stakeholder-Update aus dem entwerfen, was sich bewegt hat',
					'Changelogs, Preisseiten und Stellenanzeigen benannter Wettbewerber beobachten'
				],
				judgement: [
					'Was gebaut wird',
					'Wozu — und wem gegenüber — Nein gesagt wird',
					'Ob das lauteste Cluster das wichtige ist',
					'Die Strategie'
				],
				builds: [
					{
						name: 'Der Feedback-Trichter',
						text: 'Jede Quelle, ein Ziel, wöchentlich geclustert mit Menge und Segment. Entscheidend: Die Originalzitate bleiben unter jedem Cluster — Sie lesen fünf echte Sätze pro Thema, keine Zusammenfassung. Zusammenfassungen von Nutzerfeedback sind der Weg, auf dem PMs den Kontakt zu Nutzern verlieren, und genau das ist das Versagen jedes Werkzeugs in diesem Feld.'
					},
					{
						name: 'Meeting zu Ticket',
						text: 'Aufnahme rein, Ticketentwürfe raus mit Problemstellung, Akzeptanzkriterien und offenen Fragen als offen markiert. Sie überarbeiten und legen ab. Spart etwa vier Stunden pro Woche, wenn Sie Discovery-Gespräche führen.'
					},
					{
						name: 'Der Dublettenfinder',
						text: 'Läuft über das gesamte Backlog. Der erste Lauf ist unangenehm — ein PM fand 340 Einträge, die auf etwa 90 zusammenfielen — und es ist die billigste Verbesserung, die den meisten Backlogs zur Verfügung steht.'
					},
					{
						name: 'Der Release-Notes-Entwurf',
						text: 'Aus gemergten PRs, in der Stimme des Produkts, ohne die interne Sprache.'
					},
					{
						name: 'Die Wettbewerbsbeobachtung',
						text: 'Wöchentliche Übersicht: was benannte Wettbewerber ausgeliefert, im Preis geändert oder ausgeschrieben haben. Stellenanzeigen sind der Frühindikator, und niemand liest sie, weil Lesen lästig ist — was exakt die Definition von Mechanik ist.'
					}
				],
				stops: {
					title: 'Kein RICE-Score, keine Wirkungsschätzung, keine sortierte Roadmap.',
					text: [
						'Priorisierung ist der Job. Wer ein maschinell sortiertes Backlog übernimmt, hat den einzigen Teil der Rolle ausgelagert, der keine Büroarbeit ist. Praktisch gesehen kann die Maschine die Zusage nicht sehen, die einem Kunden in einem Raum gemacht wurde, in dem sie nicht war — oder die strategische Wette, die ein kleines Cluster in diesem Quartal zum Wichtigsten macht.',
						'Es verschickt auch nie das Stakeholder-Update. Entworfen, überarbeitet, gesendet von der PM. Statuskommunikation ist politisch, und die Maschine kann die Politik nicht lesen.'
					]
				},
				proof:
					'Anteil des eingehenden Feedbacks, den ein Mensch tatsächlich liest — von etwa 15% auf nahezu alles. Stunden pro Woche für Status und Aufschrieb. Backlog-Größe nach Dublettenbereinigung. Zeit vom Discovery-Gespräch bis zum abgelegten Ticket, die von Tagen auf denselben Nachmittag sinken sollte.',
				refuse:
					'Wenn das eigentliche Problem ist, dass im Unternehmen niemand entscheidet und die PM Daten will, um eine Entscheidung zu erzwingen. Mehr geclustertes Feedback erzeugt keine Entscheidung. Es erzeugt eine besser belegte Pattsituation.',
				cost: 'Fünf Zitate pro Cluster pro Woche lesen. Was ohnehin der Job war.'
			},
			{
				slug: 'online-shoppers',
				title: 'KI beim Online-Kauf: meist ein Nachmittag — KI-Beratung Berlin',
				metaDescription:
					'Preisverlauf, der den Fake-Rabatt entlarvt, Bewertungen gefiltert nach dem, was kaputtgeht, ein Rückgabe- und Garantiekalender und ein Abo-Audit. Ein Nachmittag — und oft lautet die Antwort: nicht viel.',
				label: 'Online-Käufer',
				headline: 'Der kleinste Auftrag dieser Liste, und der, den ich am häufigsten ablehne.',
				story: [
					'Zwei Menschen, die viel kaufen und den Überblick verlieren. Einer, der jeden Kauf wochenlang recherchiert und sich trotzdem übervorteilt fühlt. Ein kleiner Wiederverkäufer, der echte Preise kennen muss. Das ist die Gruppe mit dem geringsten Wert in dieser Liste, und ich führe sie ehrlich auf, weil ich hier am häufigsten sage: nicht viel.',
					'Vor allem Vergleichslähmung. Elf Browser-Tabs, vier Testportale, die alle über Provisionen finanziert sind, ein Preis, der gestern anders war, und der nagende Verdacht, dass der Rabatt keiner ist. Dazu das langsame Leck: Abos, die niemand gekündigt hat, Rücksendungen, die niemand fristgerecht schickte, Garantien, die niemand registrierte.'
				],
				machinery: [
					'Den Preis eines Produkts über Zeit und Händler verfolgen und einen echten Rückgang melden',
					'Den Fake-Rabatt erkennen — den Preis, der zwei Wochen vor der Aktion stieg',
					'Bewertungen nach denen filtern, die Haltbarkeit, Größe oder Defekte erwähnen',
					'Die Rückgabefrist verfolgen und vor Ablauf erinnern',
					'Wiederkehrende Abbuchungen gegen den Kontoauszug prüfen',
					'Garantien und Belege durchsuchbar ablegen',
					'Die Vergleichstabelle nach den Merkmalen bauen, die Ihnen wirklich wichtig sind'
				],
				judgement: ['Ob Sie es kaufen', 'Ob es Ihnen das Geld wert ist', 'Geschmack'],
				builds: [
					{
						name: 'Der Preiswächter',
						text: 'Benannte Produkte über Zeit verfolgt, mit echter Historie — so lässt sich „40% reduziert“ gegen den Märzpreis prüfen. Meldung nur bei echten Tiefständen.'
					},
					{
						name: 'Der Bewertungsfilter',
						text: 'Holt Bewertungen, verwirft die offensichtlich incentivierten und hebt die hervor, die sagen, was wann kaputtgeht. Langlebigkeit ist, was Menschen wissen wollen, und sie liegt unter Fünf-Sterne-Bewertungen von Tag zwei begraben.'
					},
					{
						name: 'Der Rückgabe- und Garantiekalender',
						text: 'Jeder Kauf bekommt ein Fristdatum und eine Belegdatei. Langweilig — und still das, was am meisten Geld spart.'
					},
					{
						name: 'Das Abo-Audit',
						text: 'Einmal zu Beginn: jede wiederkehrende Abbuchung mit Datum und Betrag. In allen vier Fällen fand sich etwas Vergessenes. Es ist eine Tabelle und ein Nachmittag.'
					},
					{
						name: 'Die Vergleichstabelle',
						text: 'Für eine konkrete Entscheidung, nach Ihren Kriterien, mit erhaltenen Quellen.'
					}
				],
				stops: {
					title: 'Es kauft nichts, und es empfiehlt nichts.',
					text: [
						'Keine hinterlegte Karte, kein automatischer Kauf, kein „unsere Empfehlung“. Zum einen, weil ein falscher autonomer Kauf echtes Geld kostet. Zum anderen, weil eine Empfehlungsmaschine, die ich für eine Person baue, eine schlechtere Version dessen ist, was Sie in zehn Minuten mit den gefilterten Daten vor sich selbst können.',
						'Es legt auch kein Profil an. Kein seitenübergreifendes Verfolgen Ihres eigenen Verhaltens, kein „könnte Ihnen auch gefallen“. Davon gibt es genug.'
					]
				},
				proof:
					'Zurückgeholtes Geld aus gekündigten Abos und fristgerechten Rücksendungen — in allen vier Fällen überstieg das mein Honorar binnen eines Monats. Stunden pro Kaufentscheidung. Ob Sie sich noch übervorteilt fühlen, was die eigentliche Beschwerde darunter ist.',
				refuse:
					'Oft, und hier sage ich es am häufigsten. Drei Menschen haben mich um eine „Shopping-KI“ gebeten; zweien habe ich gesagt, sie würden mehr sparen, wenn sie aufschreiben, was sie in diesem Monat kaufen wollen. Das zwanghafte Recherchieren ist kein Werkzeugproblem — mehr Information macht es schlimmer, weil die Recherche eine emotionale Aufgabe erfüllt.',
				cost: 'Ein Nachmittag, einmal. Danach kein laufender Aufwand, und das ist Absicht.'
			},
			{
				slug: 'architects',
				title: 'KI für Architekten: der Papierkram um den Entwurf — KI-Beratung Berlin',
				metaDescription:
					'Ein Planregister, sieben Angebote in einen Vergleich normalisiert mit markierten Lücken, und Baustellenprotokolle am selben Abend. Es entwirft nicht und urteilt nie über Konformität.',
				label: 'Architekten',
				headline: 'Es entwirft nicht, und es bescheinigt keine Konformität.',
				story: [
					'Ein Zwei-Personen-Architekturbüro für Wohnungsumbauten, ein Einzelarchitekt vor allem für Bauanträge und Umbauten, und ein mittelgroßes Büro, in dem ein Partner die gesamte Ausschreibung und Vergabe macht. Alle drei haben jahrelang gelernt zu entwerfen, und alle drei verbringen den Großteil der Woche mit dem Papierkram um den Entwurf.',
					'Für den einen ist es das Planregister — welche Revision ging an wen, und hat der Statiker die aktuelle Fassung. Für den nächsten der Angebotsvergleich: sieben Angebote in sieben Formaten, Position für Position über ein Wochenende in Excel. Für den dritten die Baustellenprotokolle — vierzig Fotos, eine Stunde Notizen, und ein Dokument, das am selben Abend geschrieben werden muss oder gar nicht.'
				],
				machinery: [
					'Das Planregister: Revisionen, Ausgabedaten, Empfänger, aktueller Stand',
					'Eine Einreichung gegen die Vollständigkeitsliste der Behörde prüfen',
					'Angebote in eine vergleichbare Struktur normalisieren, je Position',
					'Baustellenfotos plus diktierte Notizen in ein strukturiertes, datiertes Protokoll',
					'Offene Punkte aus Protokollen ziehen und nachhalten',
					'Die einschlägige Stelle in DIN, LBO, GEG oder Bebauungsplan finden',
					'Das Gerüst des Leistungsverzeichnisses aus dem Entwurf entwerfen',
					'Einwendungs-, Nachtrags- und Gewährleistungsfristen verfolgen'
				],
				judgement: [
					'Der Entwurf',
					'Ob eine Lösung baubar und gut ist',
					'Ob ein Angebot glaubwürdig ist, nicht bloß am günstigsten',
					'Ob etwas konform ist'
				],
				builds: [
					{
						name: 'Das Register',
						text: 'Jeder Plan, jede Revision, wer wann was bekommen hat. Klein, langweilig, und es nimmt eine ganze wiederkehrende Sorge weg, weil „hat der Statiker Rev C“ zu einer Zwei-Sekunden-Frage mit belegbarer Antwort wird.'
					},
					{
						name: 'Der Angebotsnormalisierer',
						text: 'Sieben PDFs rein, ein Vergleich raus, je Position, mit nicht bepreisten Positionen als Lücke statt als Null markiert — das ist die eigentliche Falle im Angebotsvergleich, denn das billigste Angebot ist sehr oft das, das etwas ausgelassen hat. Es markiert. Es schließt nicht.'
					},
					{
						name: 'Die Protokollstrecke',
						text: 'Auf der Baustelle fotografieren und sprechen Sie. Am Abend existiert das Protokoll: datiert, mit Fotobezug, Mängel gelistet, Verantwortlichkeiten zugewiesen, Fristen in eine Nachhalteliste gezogen. Das Dokument, das früher um 22 Uhr oder gar nicht entstand, braucht jetzt fünfzehn Minuten Überarbeitung.'
					},
					{
						name: 'Der Normfinder',
						text: 'Durchsucht Ihre eigene Normenbibliothek und den Bebauungsplan und gibt die Stelle mit Fundstelle zurück. Er ruft ab. Er paraphrasiert nie eine Norm, denn eine paraphrasierte Norm ist ein Haftungsrisiko.'
					},
					{
						name: 'Die Vollständigkeitsprüfung',
						text: 'Vor der Einreichung, gegen die Liste der Behörde. Fängt den fehlenden Nachweis ab, bevor das Bauamt es tut — das spart Wochen.'
					}
				],
				stops: {
					title: 'Keine erzeugten Pläne, und nie der Satz „das ist konform“.',
					text: [
						'Keine Massenstudien, keine Grundrissvorschläge. Nicht weil sich nichts Planähnliches erzeugen ließe, sondern weil der Stempel des Architekten Haftung trägt und der Entwurf der gesamte Wert des Büros ist. Ein von einer Maschine erzeugter und von einem Menschen unterschriebener Entwurf ist das Schlechteste aus beidem.',
						'Bei der Konformität findet es die Norm und urteilt nie. Der Satz, den es sagen darf, lautet: „§34 BauGB, Absatz 2, könnte hier greifen — prüfen.“ Der Satz, den es nie sagen darf, lautet: „Das ist konform.“'
					]
				},
				proof:
					'Protokolle am selben Tag geschrieben: nahe 100%. Stunden pro Angebotsvergleich — aus einem Wochenende werden etwa zwei Stunden. Wegen Unvollständigkeit zurückgewiesene Einreichungen: null. Zeit, um „welche Revision gilt“ zu beantworten.',
				refuse:
					'Wenn ein Büro generative Entwurfswerkzeuge will. Das ist ein anderer Beruf als meiner, und für ein Drei-Personen-Büro mit Umbauten löst es ein Problem, das es nicht hat, und bringt eine Haftung, die es nicht tragen kann.',
				cost: 'Auf der Baustelle sprechen statt schreiben.'
			},
			{
				slug: 'project-managers',
				title: 'KI für Projektleiter: die Veränderung, nicht der Zustand — KI-Beratung Berlin',
				metaDescription:
					'Meetings werden zu Aufgaben mit Verantwortlichen, Nachfassen in Ihrem eigenen Ton, und ein Statusbericht aus dem, was sich verändert hat. Die Maschine setzt nie die Ampel und eskaliert nie.',
				label: 'Projektleiter',
				headline: 'Das System listet, was gerutscht ist. Der Mensch sagt Gelb.',
				story: [
					'Einer im Bau, einer im IT-Rollout, einer in einem internen Transformationsprogramm. Alle drei beschreiben ihre Arbeit gleich, wenn man nachbohrt: „Ich hinterhertelefoniere Menschen und schreibe dann auf, dass ich hinterhertelefoniert habe.“',
					'Vor allem Freitagnachmittag. Der Statusbericht, von Hand aus vier Systemen und sechs Gesprächen zusammengesetzt, für ein Publikum, das die Ampelfarbe lesen wird und sonst nichts. Dazu die tägliche Fassung: Meetings erzeugen Aufgaben, Aufgaben leben in Protokollen, Protokolle liest niemand nach — und deshalb erledigt niemand die Aufgaben, was drei Wochen später im schlechtesten Moment auffällt.'
				],
				machinery: [
					'Meetingaufnahmen oder Notizen in eine strukturierte Aufgabenliste mit Verantwortlichem und Datum verwandeln',
					'Diese Verantwortlichen planmäßig erinnern',
					'Erkennen, was sich seit dem letzten Bericht bewegt hat — die Differenz, nicht der Zustand',
					'Den Statusbericht aus Plan, Tracker und Risikoliste zusammensetzen',
					'Das RAID-Log aktuell halten und Risiken zeigen, deren Prüfdatum verstrichen ist',
					'Abhängigkeiten beobachten: Wenn A rutscht, alles nachgelagerte auflisten',
					'Die publikumsgerechte Fassung erzeugen — dieselbe Woche, dreimal erzählt'
				],
				judgement: [
					'Ob das Projekt wirklich rot ist',
					'Was wann eskaliert wird',
					'Welches Risiko echt ist',
					'Wer was in welcher Reihenfolge erfahren muss'
				],
				builds: [
					{
						name: 'Meeting zu Aufgaben',
						text: 'Aufnahme oder Notizen rein, Aufgabenliste raus: Verantwortlicher, Frist, Abhängigkeit, offene Frage — abgelegt im Tracker. Das schließt das größte Leck im Projektmanagement: dass Aufgaben zwischen Raum und System verfallen.'
					},
					{
						name: 'Das Nachfassen',
						text: 'Verantwortliche bekommen vor ihrem Datum eine Nachricht, nicht danach. In Ihrem eigenen Ton entworfen und von Ihnen gesendet, damit ein Mensch einen Menschen fragt. Alle drei nannten das Nachfassen den zermürbendsten Teil der Woche, gerade weil es wiederholend und leicht unangenehm ist.'
					},
					{
						name: 'Die Differenzmaschine',
						text: 'Der Statusbericht ist keine Zusammenfassung des Projekts, sondern eine Zusammenfassung dessen, was sich verändert hat. Maschinen sind gut in Differenzen und Menschen schlecht. Sie liefert: verschobene Aufgaben, gerutschte Termine, eröffnete oder geschlossene Risiken, überfällige Punkte. Sie schreiben die zwei Sätze, die sagen, was es bedeutet.'
					},
					{
						name: 'Die Abhängigkeitsspur',
						text: 'Wenn etwas rutscht, sofort eine Liste dessen, was nachgelagert ist. Von Hand dauert das in einem großen Plan eine Stunde und passiert deshalb nicht in dem Moment, in dem es zählt.'
					},
					{
						name: 'Die drei Publika',
						text: 'Eine sachliche Grundlage, drei Register — Lenkungsausschuss, Team, Kunde. Dieselben Fakten. Für keines wird etwas erfunden.'
					}
				],
				stops: {
					title: 'Es setzt nicht die Ampel und entscheidet nicht, was eskaliert wird.',
					text: [
						'Die Farbe auf einem Statusbericht ist ein politischer und professioneller Akt. Eine Maschine, die sie setzt, wird entweder zum Stempel, den Sie ständig überschreiben — dann ist sie Rauschen — oder zu etwas, dem Sie folgen, was schlimmer ist.',
						'Es sendet auch nie nach oben. Berichte an Lenkungsausschuss oder Kunde werden entworfen und verlassen das Haus immer unter menschlicher Unterschrift.'
					]
				},
				proof:
					'Aufgaben aus Meetings, die im Tracker landen: von etwa 60% auf nahezu alle. Stunden für den Wochenbericht — typisch von vier auf unter eine. Überfällige Aufgaben, die niemand bemerkt. Zeit von einem Verzug bis zum Wissen um seine Folgen.',
				refuse:
					'Wenn ein Programm aus Gründen scheitert, die Berichtswesen nicht berührt — kein Mandat, keine Mittel, ein Sponsor, der nicht entscheidet. Besseres Berichtswesen dokumentiert dort ein Scheitern nur deutlicher, und gelegentlich will jemand genau das — aber dann bitte wissentlich.',
				cost: 'Meetings aufzeichnen, an denen Sie ohnehin teilnehmen, und zwei Sätze Deutung pro Woche.'
			},
			{
				slug: 'surveyors',
				title: 'KI für Gutachter: acht Stunden Berichtsarbeit auf drei — KI-Beratung Berlin',
				metaDescription:
					'Ortsaufnahme mit nummerierten Fotos und Sprachnotizen, Mangelbeschreibungen in Ihren eigenen erprobten Formulierungen, exakte Normzitate und unverändertes Rohmaterial. Es bewertet nie.',
				label: 'Gutachter',
				headline: 'Die Maschine bewertet nie, schließt nie und schätzt nie einen Wert.',
				story: [
					'Ein Bausachverständiger für Bauschäden und Beweissicherung, einer mit Schwerpunkt Verkehrswertgutachten, und einer, der vor allem Wohnungsübergaben und kleine Mängelberichte macht. Alle drei haften persönlich für jeden Satz, den sie unterschreiben, und diese eine Tatsache bestimmt die gesamte Form dessen, was ich bauen darf.',
					'Die Ortsarbeit dauert drei Stunden, das Schreiben acht. Fotos müssen nummeriert, platziert und verwiesen werden. Mängel müssen in der Standardformulierung beschrieben sein. Normen müssen exakt zitiert werden. Die Struktur muss jedes Mal gleich sein, weil ein Gericht das erwartet. Und es muss Zeile für Zeile im Kreuzverhör haltbar sein — also wird es langsam geschrieben, nachts, zweimal.'
				],
				machinery: [
					'Fotos vor Ort mit automatischer Nummer, Ort, Zeitstempel und angehängter Sprachnotiz erfassen',
					'Diktierte Beobachtungen in strukturierte Mangeleinträge mit Fotobezug verwandeln',
					'Die Formulierungsbibliothek pflegen — Ihre eigenen erprobten Wortlaute',
					'Den Bericht in die feste Struktur bauen, Fotos platziert und verwiesen',
					'Den einschlägigen Normtext mit exakter Fundstelle abrufen',
					'Für Wertermittlungen: Vergleichswerte und Bodenrichtwert sammeln, die Rechenschritte der gewählten Methode ausführen',
					'Fristen, Termine und Aktenzeichen führen, und die Kurzfassung aus dem Langbericht'
				],
				judgement: [
					'Die Ursache des Mangels',
					'Die Bewertung. Der Wert. Die Schlussfolgerung',
					'Was vor Gericht haltbar ist'
				],
				builds: [
					{
						name: 'Die Ortsaufnahme-App',
						text: 'Fotografieren, sprechen, weitergehen. Jedes Foto trägt Nummer, Raum, Zeitstempel und Sprachnotiz. Der Ortstermin erzeugt keinen Haufen ungetaggter Bilder mehr, die zwei Tage später aus dem Gedächtnis rekonstruiert werden — genau dort verschwinden die meisten der acht Stunden, und dort entstehen die meisten Fehler.'
					},
					{
						name: 'Der Mangelstrukturierer',
						text: 'Diktierte Notizen werden zu strukturierten Einträgen in Ihrem eigenen Standardwortlaut, aus Ihrer eigenen Bibliothek, mit bereits korrekt angehängten Fotobezügen. Sie lesen und korrigieren jeden einzelnen.'
					},
					{
						name: 'Die Formulierungsbibliothek',
						text: 'Ihre erprobten Wortlaute, nach Mangeltyp indexiert. Keine erzeugte Sprache — Ihre Sprache, die der Prüfung bereits standgehalten hat. Diese Unterscheidung macht das Ganze überhaupt vertretbar: Abruf erprobten Textes, nicht Erzeugung neuen Textes.'
					},
					{
						name: 'Der Normabruf',
						text: 'Exakter Text mit Fundstelle. Nie eine Paraphrase — eine paraphrasierte Norm im Gutachten ist ein Geschenk an die Gegenseite.'
					},
					{
						name: 'Die Vergleichswertsammlung',
						text: 'Für Wertermittlungen: zusammengetragen, mit Quelle, datiert, mit offengelegter Rechnung. Die Wahl der Methode und die Anpassungen bleiben Ihre.'
					}
				],
				stops: {
					title: 'Roh bleibt roh, und das Urteil ist immer Ihres.',
					text: [
						'Das ist der härteste Halt in dieser ganzen Praxis und der am wenigsten verhandelbare, denn Sie unterschreiben und Sie haften, unter Umständen vor Gericht, persönlich. Schadensursache: nie vorgeschlagen — das System hält die Beobachtung fest und hört auf. Wert: nie erzeugt; es sammelt Eingaben und führt genannte Rechenschritte aus. Schwere oder Einstufung: nie zugewiesen. Jeder Satz im Enddokument wurde entweder von Ihnen geschrieben oder wortgleich aus Ihrer eigenen freigegebenen Bibliothek abgerufen und dann bestätigt.',
						'Eine weitere Regel überrascht Menschen: Das System führt ein Protokoll darüber, was wann erfasst wurde, und das Rohmaterial bleibt unverändert. Wird ein Gutachten angegriffen, müssen Sie das Originalfoto, den Originalzeitstempel und die Originalsprachnotiz zeigen können. Maschinell verbesserte Fotos, geglättete Notizen und rekonstruierte Zeitstempel wären allesamt katastrophal.'
					]
				},
				proof:
					'Stunden pro Gutachten — von acht auf etwa drei, und diese drei gehen jetzt in die Bewertung statt in das Layout. Tage vom Ortstermin bis zum gelieferten Bericht. Fehler im Fotoverweis: null. Gutachten pro Monat bei unveränderter Qualität.',
				refuse:
					'Jede Anfrage, den Bewertungsteil zu entwerfen, wie vorsichtig auch formuliert. Ebenso jede Anfrage, mit den Formulierungen eines anderen Gutachters zu arbeiten — die Bibliothek muss Ihre eigene sein, sonst trägt der Wortlaut keine Autorität, wenn er geprüft wird.',
				cost: 'Vor Ort sprechen statt nachts schreiben.'
			},
			{
				slug: 'event-organizers',
				title: 'KI für Veranstalter: ein Rückgrat, nichts doppelt gepflegt — KI-Beratung Berlin',
				metaDescription:
					'Ein Datensatz pro Veranstaltung, auf den Ablaufplan, Briefings und Budget nur Sichten sind. Dienstleister werden nachgehalten, bevor es dringend wird. Nichts wird von der Maschine gebucht.',
				label: 'Veranstalter',
				headline: 'Nichts wird automatisch gebucht oder zugesagt.',
				story: [
					'Eine Frau, die Firmenkonferenzen macht, ein Zwei-Personen-Team für Hochzeiten, und jemand, der ein wiederkehrendes Stadtteilfest mit 400 Gästen organisiert. Ihre Arbeit ist zu 80% Nachhalten und zu 20% Geschmack, und das Nachhalten ertränkt den Geschmack.',
					'Das Nachfassen bei Dienstleistern. Vierzehn Gewerke, jedes in einem anderen Stand — angefragt, gebucht, Anzahlung geleistet, Endzahlen offen, Unverträglichkeiten ausstehend — nachgehalten in einer Tabelle, die nicht aktuell ist, plus Postfach, plus WhatsApp. Jeder Tag beginnt damit, zu rekonstruieren, wer was schuldet. Dann der Ablaufplan, pro Veranstaltung neu gebaut, und die Nachbereitung, die nie rausgeht, weil die Organisatorin dann schläft.'
				],
				machinery: [
					'Ein Tracker pro Veranstaltung über jeden Dienstleister, Stand, Termin und Betrag',
					'Dienstleister, die nicht geantwortet haben, planmäßig erinnern',
					'Angebote in eine vergleichbare Struktur normalisieren',
					'Den Ablaufplan bauen und Rollenfassungen erzeugen — Catering, Technik, Kunde',
					'Zu- und Absagen, Unverträglichkeiten und Barrierefreiheit, Sitzordnung und Namensschilder',
					'Briefingunterlagen je Dienstleister aus dem Gesamtplan entwerfen',
					'Budgetverfolgung gegen die Angebote, mit markierten Abweichungen',
					'Nachbereitung: Dankschreiben, Feedbackanfragen und der zusammengestellte Feedbackbericht'
				],
				judgement: [
					'Ob der Raum sich richtig anfühlen wird',
					'Welchem Dienstleister man vertraut — nicht welcher am günstigsten ist',
					'Was gestrichen wird, wenn das Budget sich bewegt',
					'Die Kundenbeziehung'
				],
				builds: [
					{
						name: 'Das Veranstaltungsrückgrat',
						text: 'Ein Datensatz pro Veranstaltung, aus dem alles andere abgeleitet wird: jeder Dienstleister, Kontakt, Stand, Termin, Betrag und jedes Dokument. Ablaufplan, Briefings und Budget sind nur Sichten darauf, sodass nie etwas an zwei Stellen gepflegt wird — genau daran stirbt jede Veranstaltungstabelle irgendwann.'
					},
					{
						name: 'Das Nachfassen',
						text: 'Offene Punkte werden nachgehalten, bevor sie dringend werden, in Ihrem Ton entworfen und von Ihnen gesendet. Das Nachfassen bei Dienstleistern ist der größte Zeitfresser und der mechanischste Teil.'
					},
					{
						name: 'Der Ablaufplan-Generator',
						text: 'Gesamtzeitplan, dann Auszüge je Rolle. Das Catering bekommt die vier Zeilen, die es betreffen, nicht sechzehn Seiten. Das reduziert sichtbar die Rückfragen am Tag selbst — der eigentliche Gewinn, denn jede Rückfrage kostet Sie Aufmerksamkeit in dem Moment, in dem Sie am wenigsten davon haben.'
					},
					{
						name: 'Die Anmeldeverwaltung',
						text: 'Rückmeldungen, Unverträglichkeiten und Barrierefreiheitsbedarfe werden automatisch erfasst und in die Formate von Catering und Location überführt.'
					},
					{
						name: 'Das Nachbereitungspaket',
						text: 'Dankschreiben entworfen, Feedback angefragt, Ergebnisse zu einem Bericht zusammengestellt, den der Kunde tatsächlich bekommt. Zwei von dreien hatten das aus reiner Erschöpfung nie verschickt — und genau daher kommen Folgeaufträge.'
					}
				],
				stops: {
					title: 'Alles, was eine Verpflichtung erzeugt, ist ein menschlicher Klick.',
					text: [
						'Keine automatische Bestätigung, keine automatische Zahlung, keine automatische Annahme eines Angebots. Eine Veranstaltung hat ein festes Datum und unumkehrbare Zusagen — eine falsch bestätigte Buchung lässt sich nicht mit einer Entschuldigung rückgängig machen.',
						'Die Wahl des Dienstleisters ist Urteil im Gewand eines Vergleichs. Der Normalisierer stellt die Angebote nebeneinander und markiert, was in jedem fehlt. Er sortiert nie, denn Sie wählen nach Verlässlichkeit und Vorgeschichte, die im Angebot nirgends stehen. Gästedaten bleiben minimal und werden nach der Veranstaltung gelöscht: Unverträglichkeiten und Barrierefreiheitsbedarfe sind Gesundheitsdaten nach DSGVO, und keine Veranstaltung muss sie aufbewahren.'
					]
				},
				proof:
					'Verwaltungsstunden pro Veranstaltung. Eine Woche vorher noch unbestätigte Dienstleister — sollten null sein. Rückfragen von Dienstleistern am Tag selbst. Ob das Nachbereitungspaket überhaupt rausgeht. Und irgendwann: Folgeaufträge.',
				refuse:
					'Bei ein bis zwei Veranstaltungen im Jahr rechnet sich das nicht. Das Rückgrat lohnt ab etwa sechs Veranstaltungen jährlich; darunter sind eine gute Vorlage und ein geteilter Kalender die ehrliche Antwort.',
				cost: 'Das Rückgrat aktuell halten, was das Aktuellhalten von vier Dingen ersetzt.'
			},
			{
				slug: 'dentists',
				title: 'KI für Zahnarztpraxen: Recall und Ausfälle, nichts Klinisches — KI-Beratung Berlin',
				metaDescription:
					'Recall-System, Ausfallmanagement und Diktat zu Karteieintrag mit Bestätigung. Keine Diagnose, keine Bildbefundung, keine Symptomtriage — und Patientendaten verlassen die Praxis nicht.',
				label: 'Zahnärzte',
				headline: 'Nichts Klinisches. Keine Ausnahmen, und ich habe deswegen Aufträge abgelehnt.',
				story: [
					'Zwei inhabergeführte Zahnarztpraxen: eine mit drei Behandlungszimmern, eine Einzelpraxis mit zwei Angestellten. Keine der beiden wollte KI. Die eine wollte aufhören, monatlich 4.000 € an Terminausfälle zu verlieren. Die andere wollte aufhören, um 20 Uhr noch Karteieinträge zu schreiben.',
					'In der ersten Praxis ist es die Recall-Liste: Patienten, deren Kontrolle fällig ist und die still nie wiederkommen, weil das Erinnern jemandes Nachmittag ist und niemand den Nachmittag hat. In der zweiten die Dokumentation — zwischen Patienten diktierte Notizen, nach Schließung verschriftlicht, dazu die Heil- und Kostenpläne, die Patienten nicht verstehen und deshalb nicht annehmen.'
				],
				machinery: [
					'Die Recall-Liste: wer ist fällig, wie kontaktiert, mit welcher Reaktion',
					'Terminerinnerungen und die Bestätigungsschleife',
					'Ausfälle aus einer Kurzfristliste nachbesetzen',
					'Diktate in strukturierte Karteieinträge im Format der Praxis überführen',
					'Die verständliche Erläuterung eines bereits genehmigten Heil- und Kostenplans',
					'Abrechnungspapier: BEMA/GOZ-Positionen, Kassenanträge, Nachhalten offener Posten',
					'Dienstplan, Sterilisationsprotokolle, Bestände und die Unterlagen für die Praxisbegehung'
				],
				judgement: [
					'Diagnose. Jeder Teil davon',
					'Der Behandlungsplan',
					'Was man einem verängstigten Patienten sagt',
					'Ob überhaupt behandelt wird'
				],
				builds: [
					{
						name: 'Das Recall-System',
						text: 'Fällige Patienten werden erkannt und planmäßig erinnert, eskalierend von Nachricht über Brief bis zur Anrufliste für die Rezeption. In der ersten Praxis fielen die Ausfälle um gut die Hälfte, und die Recall-Lücke schloss sich binnen vier Monaten. Reine Arithmetik, kein klinischer Inhalt — und es hat alles Übrige bezahlt.'
					},
					{
						name: 'Das Ausfallmanagement',
						text: 'Um 09:40 wird ein Platz frei; die Kurzfristliste bekommt ihn automatisch der Reihe nach angeboten. Leere Stühle sind der größte rückholbare Verlust einer Praxis, und der Vorgang ist vollständig mechanisch.'
					},
					{
						name: 'Diktat zu Karteieintrag',
						text: 'Der Zahnarzt spricht; der Eintrag erscheint in der Struktur der Praxis. Er liest und bestätigt jeden einzelnen, bevor er in die Akte geht. Nichts gelangt unbestätigt in eine Patientenakte, nie.'
					},
					{
						name: 'Das Patientenblatt',
						text: 'Aus einem bereits genehmigten Plan eine verständliche Fassung: was passiert, in welcher Reihenfolge, was die Kasse trägt, was der Patient zahlt, und welche Alternativen es gibt — die Alternativen wie vom Zahnarzt vorgegeben. Die Annahme stieg merklich, aus dem unspektakulären Grund, dass Menschen zu Dingen Nein sagen, die sie nicht verstehen.'
					},
					{
						name: 'Die Compliance-Mappe',
						text: 'Sterilisationsprotokolle, Wartungstermine und Schulungsnachweise laufend zusammengestellt statt vor einer Begehung panisch.'
					}
				],
				stops: {
					title: 'Keine Diagnose, keine Bildbefundung, keine Triage — und kein Eintrag ohne Bestätigung.',
					text: [
						'Kein Diagnosevorschlag, kein Lesen eines Röntgenbilds oder OPG. Keine Behandlungsempfehlung, keine Reihung von Optionen, keine Prognose. Keine Symptomtriage, nicht einmal ein Telefonskript zur Dringlichkeitssortierung, denn ein falsch einsortierter Abszess ist ein echter Schaden. Keine Patientennachricht zu einem klinischen Thema geht raus, ohne dass der Zahnarzt sie gelesen hat.',
						'Und die Datenregeln, die streng sind: Patientendaten sind besondere Kategorien nach Artikel 9. Alles Klinische bleibt im Praxissystem, pseudonymisiert an jeder Grenze, die es überschreiten muss, DSGVO-konforme Verarbeitung mit AV-Vertrag, EU-Datenhaltung, kein Training auf Patienteninhalten, Aufbewahrung nach der Aufbewahrungspflicht und vollständige Zugriffsprotokollierung. Wo ein Ablauf diese Bedingungen nicht erfüllen kann, wird er nicht gebaut.'
					]
				},
				proof:
					'Ausfallquote. Recall-Lücke — überfällige, nicht kontaktierte Patienten. Leerstunden am Stuhl pro Woche. Dokumentationsminuten nach Schließung. Annahmequote bei Heil- und Kostenplänen.',
				refuse:
					'Alles in Richtung klinischer Entscheidungsunterstützung, Symptomtriage oder Bildbefundung. Beide Praxen haben nach Bildbefundung gefragt, beide haben die Antwort akzeptiert. Der regulatorische Weg dafür existiert — er führt über die Medizinproduktezulassung — und er führt nicht über mich.',
				cost: 'Jeden Eintrag bestätigen. Was ohnehin die rechtliche Pflicht ist.'
			},
			{
				slug: 'team-leaders',
				title: 'KI für Teamleitungen: ein Protokoll, nie eine Bewertung — KI-Beratung Berlin',
				metaDescription:
					'Ein privates Protokoll je Teammitglied, Vorbereitungsblätter für 1:1-Gespräche, Feedback aus Ihren eigenen Notizen und ein Kalender-Audit. Keine Bewertungen, keine Rankings, keine Aktivitätsüberwachung.',
				label: 'Teamleitungen',
				headline: 'Es ordnet, was Sie beobachtet haben. Es bewertet niemanden.',
				story: [
					'Eine Person führt elf Menschen in einer Engineering-Organisation, eine sechs im Kundenservice. Beide wurden befördert, weil sie in dem Job hervorragend waren, den sie nun nicht mehr machen, beide haben keine Schulung bekommen, und beide ertrinken still im Verwaltungsrest der Personalführung.',
					'Vorbereitung, oder vielmehr deren Fehlen. Elf 1:1-Gespräche alle zwei Wochen, von denen jedes mit „letztes Mal sagtest du X, wie lief das?“ beginnen sollte und stattdessen damit beginnt, dass die Führungskraft still versucht, sich zu erinnern. Dann das Schreiben: Feedback, das spezifisch sein muss und dafür Belege braucht, Belege, die in verstreuter Erinnerung liegen, und zweimal im Jahr der Beurteilungszyklus, der zwei volle Wochenenden frisst.'
				],
				machinery: [
					'Ein laufendes Protokoll je Person führen: was besprochen, vereinbart und offen ist',
					'Das Vorbereitungsblatt fürs 1:1 erzeugen — letzte Vereinbarungen, ihr Stand, offene Fäden',
					'Ihre groben Notizen in spezifisches Situation-Verhalten-Wirkung-Feedback bringen',
					'Delegierte Arbeit und ihre Fristen nachhalten',
					'Den eigenen Kalender prüfen: wie viel Zeit tatsächlich ans Team geht',
					'Die Belegakte für den Beurteilungszyklus aus einem Jahr eigener Notizen zusammenstellen',
					'Einarbeitungspläne entwerfen und wiederkehrende Teamprozesse dokumentieren'
				],
				judgement: [
					'Die Beurteilung eines Menschen',
					'Was mit jemandem wirklich los ist',
					'Wer befördert wird, wer das schwierige Gespräch bekommt',
					'Die Beziehung, die der ganze Job ist'
				],
				builds: [
					{
						name: 'Das Personenprotokoll',
						text: 'Eine private Datei je Teammitglied, in Ihrer Hand: was die Person zu tun zusagte, was geschah, und Ihre eigenen Beobachtungen mit Datum. Neunzig Sekunden Diktat nach jedem 1:1. Das ist das ganze System, und es verändert Führungsqualität stärker als alles andere, was ich baue — denn Spezifität ist der Unterschied zwischen Feedback, das ankommt, und Feedback, das nicht ankommt.'
					},
					{
						name: 'Das Vorbereitungsblatt',
						text: 'Vor jedem 1:1: die Vereinbarungen vom letzten Mal, ihr Stand, was offen ist, was Sie nachverfolgen wollten. Dreißig Sekunden Lesen ersetzen vier Minuten schlechtes Erinnern, und die Person gegenüber merkt das.'
					},
					{
						name: 'Der Feedback-Entwurf',
						text: 'Sie schreiben „Dienstag, das Deployment, gut gelöst“. Zurück kommt ein spezifischer Absatz in SBI-Form, gebaut aus dieser Notiz und sonst nichts. Sie überarbeiten und geben ihn persönlich.'
					},
					{
						name: 'Das Kalender-Audit',
						text: 'Einmal im Monat, wohin die Zeit tatsächlich ging. Beide Führungskräfte waren erschrocken. Eine stellte fest, dass 8% ihrer Zeit ans Team gingen und 44% an Meetings, deren Teilnahme sie nie hinterfragt hatte.'
					},
					{
						name: 'Die Beurteilungsmappe',
						text: 'Zum Zyklus die Notizen des Jahres je Person, geordnet. Aus zwei Wochenenden wird ein Nachmittag, und die Beurteilungen werden deutlich spezifischer, weil sie auf zeitnahen Notizen beruhen statt auf dem zuletzt Erinnerten.'
					}
				],
				stops: {
					title: 'Es erzeugt nie eine Bewertung eines Menschen, und niemand wird von der Maschine gemessen.',
					text: [
						'Es benotet nie, reiht nie, sagt keine Kündigungsneigung voraus, schlägt nie vor, wer unterdurchschnittlich ist, und schreibt nie das Fazit einer Beurteilung. Eine von Software erzeugte und von einer Führungskraft unterschriebene Leistungsbeurteilung ist eine Lüge, auf der die Laufbahn eines Menschen aufgebaut wird.',
						'Es greift auch nie in die Arbeit hinein. Keine Commit-Zählungen, keine Ticket-Geschwindigkeit pro Person, keine Nachrichtenanalyse, keine Aktivitätsüberwachung. Beide Führungskräfte hatten Zugang zu Werkzeugen, die das könnten; ich habe keines empfohlen. Überwachung verändert, was ein Team Ihnen erzählt, lange bevor sie verändert, was es tut — und dann sind Sie blind, ohne es zu bemerken. Die Personenprotokolle sind Ihre eigenen Notizen über Beschäftigte, es gelten also die Betroffenenrechte der DSGVO einschließlich Auskunft: Schreiben Sie nichts, was Sie der Person nicht zeigen würden.'
					]
				},
				proof:
					'1:1-Gespräche, die mit einem Nachfassen statt mit einer Leerstelle beginnen: von gelegentlich zu Standard. Zeit für die Beurteilungssaison. Anteil Ihrer Woche, der tatsächlich beim Team ist. Und ob das Feedback spezifisch wurde, was das Team vor Ihnen merkt.',
				refuse:
					'Wenn eine Führungskraft Einblick in die Aktivität ihres Teams will. Das ist ein Vertrauensproblem, und Werkzeuge machen es schlimmer. Ich sage das, und ich habe dieses Gespräch beide Male geführt.',
				cost: 'Neunzig Sekunden nach jedem Gespräch.'
			},
			{
				slug: 'estate-agents',
				title: 'KI für Makler: acht gute Anfragen beantworten statt neunzig — KI-Beratung Berlin',
				metaDescription:
					'Anfragen binnen Minuten bestätigt und qualifiziert, Exposés mit geprüften Pflichtangaben und wöchentliche Eigentümerupdates. Keine Wertermittlung, keine erzeugten Fotos, keine erfundenen Merkmale.',
				label: 'Immobilienmakler',
				headline: 'Neunzig Anfragen in 48 Stunden, davon acht echte Käufer.',
				story: [
					'Ein selbstständiger Makler in Berlin und eine Zwei-Personen-Agentur für Wohnimmobilien und etwas Vermietung. Sie kamen aus entgegengesetzten Richtungen: Der eine ertrank in Anfragen, die er nicht schnell genug beantworten konnte, die andere kämpfte damit, Exposés schnell genug zu erstellen, um das Mandat zu gewinnen.',
					'Ein Angebot geht online, und binnen 48 Stunden kommen 90 Anfragen, von denen vielleicht acht qualifizierte Käufer sind. Der Makler beantwortet sie in Eingangsreihenfolge, um 22 Uhr, schlecht — und hat die Guten am ersten Tag verloren. Drumherum: das jedes Mal neu gebaute Exposé, der von Hand erstellte Besichtigungsplan und die Nachfassnachrichten nach Besichtigungen, die nie rausgehen.'
				],
				machinery: [
					'Anfragen sortieren: vollständig, Finanzierung angedeutet, Anforderungen passend zur Immobilie',
					'Eingangsbestätigung und Qualifizierungsfragen binnen Minuten senden',
					'Besichtigungen planen, auch Sammelbesichtigungen, mit Erinnerungen',
					'Das Exposé bauen: Fotos, Grundriss, Energieausweisdaten, Provisionsangabe, Pflichtangaben',
					'Die Objektbeschreibung aus den tatsächlichen Daten entwerfen',
					'Nach Besichtigungen nachfassen und Rückmeldungen sammeln',
					'Den Eigentümer informieren, plus Marktüberblick zu Vergleichsangeboten und Vermarktungsdauer'
				],
				judgement: [
					'Wertermittlung und Preisstrategie',
					'Welchen Käufer man dem Verkäufer empfiehlt',
					'Wie man einen Eigentümer mit unrealistischer Erwartung berät',
					'Die Verhandlung'
				],
				builds: [
					{
						name: 'Die Anfragesortierung',
						text: 'Jede Anfrage wird binnen Minuten bestätigt, mit den Qualifizierungsfragen im Anhang. Die Antworten werden in qualifiziert, unvollständig und ungeeignet sortiert. Sie richten Ihre Aufmerksamkeit dann auf acht Menschen statt auf neunzig. Die Antwortzeit entscheidet mehr als alles andere darüber, wer den Käufer gewinnt — und sie ist vollständig mechanisch.'
					},
					{
						name: 'Die Besichtigungsplanung',
						text: 'Qualifizierte Interessenten buchen aus echter Verfügbarkeit, Erinnerungen gehen raus. Ausfälle sinken um mehr als die Hälfte, was zählt, weil ein Ausfall bei einer Sammelbesichtigung einen Platz kostet, den ein echter Käufer wollte.'
					},
					{
						name: 'Der Exposé-Baukasten',
						text: 'Objektdaten rein, konformes Dokument raus — mit geprüften Pflichtangaben, denn ein fehlender Energieausweiswert ist nach GEG bußgeldbewehrt und genau das, was ein müder Makler am Freitag vergisst. Es erzeugt auch die Portalfassungen im richtigen Format.'
					},
					{
						name: 'Der Beschreibungsentwurf',
						text: 'Aus den tatsächlichen Merkmalen, in Ihrer Sprache, ohne erfundene Eigenschaften. Maklertexte haben einen verdienten Ruf, und ich trage nichts dazu bei — hat die Maschine keine Daten für eine Aussage, macht sie die Aussage nicht.'
					},
					{
						name: 'Das Eigentümerupdate',
						text: 'Wöchentlich, automatisch, sachlich: Anfragen, Besichtigungen, Rückmeldungsthemen. Beide Makler sagten, das habe nervöse Eigentümeranrufe stärker reduziert als alles andere — denn die meisten dieser Anrufe sind die Bitte um Bestätigung, dass nichts ohne sie passiert.'
					}
				],
				stops: {
					title: 'Keine Wertermittlung, und nichts, was eine Immobilie falsch darstellt.',
					text: [
						'Die Wertermittlung ist der Ort, an dem Ihr fachliches Urteil und Ihr Ruf leben, und sie ist die Zahl, um die sich die ganze Beziehung dreht. Das System kann Vergleichswerte sammeln und Vermarktungsdauern zeigen. Es erzeugt keinen Preis.',
						'Zur Darstellung: keine erzeugten Bilder, kein Wegretuschieren, kein „gemütlich“ für winzig, kein erfundenes Baujahr, keine ausgelassenen Pflichtangaben. Über die Rechtsfolgen hinaus gilt: Alles im Exposé Erfundene fliegt bei der Besichtigung auf — und dann sind Sie die Person, die es geschrieben hat. Es verhandelt auch nie und spricht mit Käufern nie über den Preis.'
					]
				},
				proof:
					'Minuten bis zur ersten Antwort — von Stunden auf unter fünf. Qualifizierte Interessenten pro Angebot. Ausfallquote bei Besichtigungen. Vermarktungsdauer. Eigentümeranrufe pro Woche, sinkend.',
				refuse:
					'Jede Anfrage nach automatischer Wertermittlung oder erzeugter Objektfotografie. Ebenso jede Anfrage, Käufern so automatisch zu antworten, dass es nach einem Menschen aussieht. Wenn ein Käufer mit einer Maschine spricht, soll er es erkennen können.',
				cost: 'Acht gute Anfragen beantworten statt durch neunzig zu scrollen.'
			},
			{
				slug: 'executives',
				title: 'KI für Gründer-CEOs: neunzig Sekunden vor jedem Termin — KI-Beratung Berlin',
				metaDescription:
					'Postfach sortiert mit sichtbarer Begründung, ein Kurzbriefing zu jedem Termin, ein Zusagenregister und zusammengestellte Board-Unterlagen. Es entscheidet nie und spricht nie als Sie.',
				label: 'CEO',
				headline: 'In ein Meeting gehen und wissen, was letztes Mal versprochen wurde.',
				story: [
					'Der Gründer und CEO eines Unternehmens mit etwa 90 Menschen. Kein Konzernvorstand mit Stabschef und zwei Assistenzen — jemand, der Investoren noch selbst antwortet, noch in Einstellungen hineingezogen wird und dessen Kalender von den Bedürfnissen anderer besetzt wurde. Die vorgetragene Beschwerde war „Ich habe keine Zeit zum Denken“, und das ist meiner Erfahrung nach die einzige Beschwerde, die CEOs tatsächlich haben.',
					'Keine Stunde — die ganze Form der Woche. Etwa 300 E-Mails am Tag, von denen vielleicht zwölf zählen. Termine, in die man kalt geht, ohne zu wissen, was letztes Mal geschah oder versprochen wurde. Board-Vorbereitung, die pro Quartal ein Wochenende frisst. Ein Lesestapel, der inzwischen rein theoretisch ist. Und die tiefe Folge: jede Entscheidung in den elf Minuten zwischen zwei Terminen, auf Basis dessen, was zufällig im Raum war.'
				],
				machinery: [
					'Das Postfach in entscheiden, delegieren, lesen und ignorieren sortieren — mit sichtbarer Begründung',
					'Das Kurzbriefing vor dem Termin: Wer ist das, was war vereinbart, was ist offen, was wird gefragt werden',
					'Die wöchentliche Zahlenübersicht aus den echten Systemen, als Veränderung statt als Stand',
					'Board-Unterlagen aus denselben Quellen in fester Struktur',
					'Den Lesestapel zusammenfassen, mit den Originalquellen einen Klick entfernt',
					'Zusagen nachhalten, die Sie gemacht haben, wem gegenüber und bis wann',
					'Benannte Wettbewerber, den Markt und relevante regulatorische Bewegung beobachten'
				],
				judgement: ['Jede Entscheidung', 'Strategie', 'Menschen', 'Wofür das Unternehmen da ist'],
				builds: [
					{
						name: 'Die Triage',
						text: 'Vier Körbe jeden Morgen, jeder mit Begründung. Nichts wird gelöscht, nichts automatisch beantwortet, nichts versteckt — der Ignorieren-Stapel bleibt sichtbar und prüfbar, denn ein CEO, der vermutet, dass die Maschine etwas verbirgt, kontrolliert alles, und dann hat das System negativen Wert.'
					},
					{
						name: 'Das Kurzbriefing',
						text: 'Das Wertvollste dieser Liste, neunzig Sekunden vor jedem Termin: letzter Kontakt, vereinbarte Punkte und ihr Stand, offene Fäden, wahrscheinliche Bitte, relevante Zahlen. In ein Meeting zu gehen und zu wissen, was letztes Mal versprochen wurde, verändert, was darin passiert. Das allein hat das Mandat gerechtfertigt.'
					},
					{
						name: 'Die Zahlenübersicht',
						text: 'Wöchentlich, aus den echten Systemen, aufgebaut als „was sich verändert hat“: was sich bewegt hat, um wie viel, gegenüber der Erwartung. Kein Dashboard. Ein CEO braucht kein weiteres Dashboard; er braucht etwas, das bereits gemerkt hat.'
					},
					{
						name: 'Das Zusagenregister',
						text: 'Was Sie zugesagt haben, in Terminen, wem gegenüber, bis wann. Gründer machen sehr viele mündliche Zusagen und erinnern sich an vielleicht die Hälfte.'
					},
					{
						name: 'Die Board-Mappe',
						text: 'Feste Struktur, aktuelle Zahlen, die Zusagen des Vorquartals und ihr Stand. Aus einem Wochenende wird ein Vormittag — und dieser Vormittag geht in die Erzählung, also den Teil, der vorher eine Stunde am Ende bekam.'
					}
				],
				stops: {
					title: 'Es entscheidet nie und spricht nie als Sie.',
					text: [
						'Keine externe Kommunikation wird in Ihrer Stimme erzeugt — nicht an Investoren, nicht an Mitarbeitende, nicht öffentlich. Ein CEO, dessen Worte erzeugbar sind, hat ein schwer umkehrbares Problem: In dem Moment, in dem es intern bekannt wird, wird jede seiner Nachrichten mit einer Frage im Hinterkopf gelesen.',
						'Es empfiehlt nie eine Vorgehensweise in strategischen Fragen. Es trägt zusammen, was bekannt ist, markiert, was unbekannt ist, und hört auf. Die Versuchung, für einen einsamen Gründer einen KI-Berater zu bauen, ist groß, und was dabei herauskommt, ist selbstsicher, plausibel und losgelöst von allem, was die Maschine über das Unternehmen wissen könnte. Und aus diesem Postfach wird nichts automatisch gesendet. Alles wartet in der Warteschlange.'
					]
				},
				proof:
					'Minuten pro Tag im Postfach. Termine, in die mit gelesenem Briefing gegangen wird. Eingehaltene Zusagen. Stunden Board-Vorbereitung. Und das, was anfangs eigentlich gefragt war: Stunden ungestörter Denkzeit pro Woche, im Kalender messbar und damals nahe null.',
				refuse:
					'Jede Variante eines KI-Beirats, Strategiegenerators oder Entscheidungsempfehlers. Ebenso alles, was die Stimme des CEO für externe Nutzung erzeugt. Beides wurde gefragt. Beides abgelehnt.',
				cost: 'Fünfzehn Minuten Durchsicht der Triage jeden Morgen, im ersten Monat. Danach nichts.'
			},
			{
				slug: 'chefs',
				title: 'KI für die Restaurantküche: Wareneinsatz von 34% zurück auf 28,5% — KI-Beratung Berlin',
				metaDescription:
					'Rechnungen fotografiert, Zutatenpreise verfolgt, jedes Gericht automatisch neu kalkuliert, Vorbereitungslisten aus den Reservierungen und eine vom Küchenchef bestätigte Allergenmatrix.',
				label: 'Küchenchef',
				headline: 'Die Maschine fasst Geld, Lager und Papier an. Den Teller fasst sie nicht an.',
				story: [
					'Küchenchef und Inhaber eines kleinen Restaurants — etwa 40 Gedecke, wechselnde Karte, sechs Mitarbeitende. Er kam zu mir, weil sein Wareneinsatz binnen eines Jahres von 28% auf 34% gestiegen war und er nicht sagen konnte, warum, und weil er nach dem Service bis Mitternacht Papierkram machte. An KI hatte er kein Interesse und sagte das im ersten Satz.',
					'Nach dem Service: Vorbereitungslisten für morgen von Hand, Bestellungen aus dem Gedächtnis, Rechnungen auf einem Stapel, der Dienstplan wöchentlich neu im Notizbuch. Und das, was tatsächlich Geld kostete — niemand wusste mehr, was irgendetwas kostet, weil sich die Lieferantenpreise bewegt hatten und die Kartenpreise nicht.'
				],
				machinery: [
					'Lieferantenrechnungen lesen und den Preis je Zutat über die Zeit verfolgen',
					'Jedes Gericht aus aktuellen Preisen kalkulieren und bei Preisbewegung neu rechnen',
					'Deckungsbeitrag und Wareneinsatzquote je Gericht und insgesamt neu berechnen',
					'Rezepte auf Gedecke skalieren und die Vorbereitungsliste aus den Reservierungen erzeugen',
					'Die Bestellung aus Sollbeständen und Lagerstand bauen',
					'Die Allergenmatrix je Gericht pflegen, aktualisiert bei jeder Rezeptänderung',
					'Abfall protokollieren und zeigen, wo er sich häuft, und den Dienstplan gegen die Gästeprognose bauen'
				],
				judgement: [
					'Geschmack. Alles davon',
					'Was auf die Karte kommt',
					'Was mit einem Lieferanten geschieht, der nachgelassen hat',
					'Wie man eine Küche führt'
				],
				builds: [
					{
						name: 'Der Rechnungsleser',
						text: 'Rechnung fotografieren; die Zutatenpreise aktualisieren sich. Binnen sechs Wochen konnte er sehen, dass drei Lieferanten ohne Gespräch um 9–14% erhöht hatten und dass eine Position still für den größten Teil der Verschiebung verantwortlich war. Das war das ganze Problem, und es wurde durch Arithmetik gelöst, nicht durch Intelligenz.'
					},
					{
						name: 'Die laufende Gerichtkalkulation',
						text: 'Jedes Gericht aus aktuellen Preisen kalkuliert, Deckungsbeitrag und Wareneinsatz je Teller aktualisieren sich von selbst. Zwei Gerichte machten beim aktuellen Kartenpreis Verlust. Er hat einen Preis geändert und ein Gericht gestrichen — beide Entscheidungen traf er, keine schlug die Software vor.'
					},
					{
						name: 'Die Vorbereitungsliste',
						text: 'Die heutigen Reservierungen plus Karte plus Rezepte ergeben die skalierte Vorbereitung für morgen. Aus fünfzehn Minuten Schreiben nach dem Service wird ein Ausdruck.'
					},
					{
						name: 'Die Allergenmatrix',
						text: 'Je Gericht, automatisch aktualisiert bei Rezeptänderung. Gesetzlich gefordert, fehleranfällig und genau das, was veraltet, sobald sich dienstags ein Rezept ändert. Jeder Eintrag wird von ihm bestätigt, denn die Folge eines falschen Allergeneintrags ist keine schlechte Bewertung.'
					},
					{
						name: 'Das Abfallprotokoll',
						text: 'Dreißig Sekunden beim Schließen. Nach einem Monat zeigte es ihm, wo der Verlust lag — und das war nicht, wo er dachte.'
					}
				],
				stops: {
					title: 'Keine Rezepte, keine Karten, keine Ersatzvorschläge, keine unbestätigten Allergendaten.',
					text: [
						'Das Essen ist das gesamte Geschäft. Ein erzeugtes Gericht ist für einen Küchenchef, dessen Ruf sein Gaumen ist, wertlos — und er hätte es ohnehin nicht benutzt.',
						'Die Allergenregel ist hart: Die Matrix entsteht aus seinen Rezepten, aber jeder Eintrag wird vor der Nutzung von ihm bestätigt, und jede Rezeptänderung hebt die Bestätigung auf, bis er erneut bestätigt. Das Risiko der Kreuzkontamination ist eine Küchentatsache, die in keiner Rezeptdatei steht, also kann die Maschine sie nicht kennen. Es bestellt auch nie — ein Bestellentwurf geht an ihn, und er sendet ihn, denn versehentlich bestellte 30 kg Steinbutt sind eine echte Woche.'
					]
				},
				proof:
					'Wareneinsatzquote — 34% zurück auf 28,5% binnen eines Quartals, und das war fast ausschließlich Sichtbarkeit. Papierminuten nach dem Service, von etwa 70 auf etwa 15. Abfall nach Kategorie. Ob die Allergenmatrix aktuell ist, was sie jetzt immer ist.',
				refuse:
					'Er fragte halb im Ernst, ob es Tagesgerichte aus Überbeständen vorschlagen könne. Ich habe die Überbestandsliste gebaut und dort aufgehört. Welche Zutaten überzugehen drohen, ist Arithmetik; was man mit ihnen macht, sind dreißig Jahre Kochen.',
				cost: 'Rechnungen fotografieren. Dreißig Sekunden Abfallprotokoll beim Schließen.'
			},
			{
				slug: 'volunteer-orgs',
				title: 'KI für einen Verein: Förderanträge von zwei Tagen auf drei Stunden — KI-Beratung Berlin',
				metaDescription:
					'Ein gepflegter Kern wiederverwendbarer Fakten, umgeformt in die Struktur jedes Fördergebers, plus Dienstplan, Mitgliederverwaltung und Aktivitätsprotokoll. Nur kostenlose Werkzeuge.',
				label: 'Ehrenamtliche Organisation',
				headline: 'Kostenlose Werkzeuge, bewusst langweilig, in zwei Jahren von der nächsten Person bedienbar.',
				story: [
					'Ein eingetragener Verein — rund 40 aktive Ehrenamtliche, eine Teilzeitkoordinatorin, finanziert aus kleinen Förderungen, Mitgliedsbeiträgen und Spenden. Niemand dort hat ein Technologiebudget, und die Koordinatorin macht die Arbeit von drei Personen auf 20 Wochenstunden. Dieses Mandat war teilweise unbezahlt, und ich würde es wieder tun.',
					'Der akute Bruch sind Förderanträge. Jeder Fördergeber will dieselben Informationen in anderer Struktur — Organisationsbeschreibung, Projektplan, Budget, Wirkungsnachweis, bisherige Förderung — und jeder Antrag kostet zwei volle Tage, die aus der eigentlichen Arbeit kommen, um die es dem Verein geht. Dahinter: Dienstplanung über 40 Ehrenamtliche, Mitgliederverwaltung, Spenderdank und der Jahresbericht.'
				],
				machinery: [
					'Den wiederverwendbaren Kern pflegen: Auftrag, Geschichte, Struktur, Personal, Finanzen, Projekte, Wirkungszahlen',
					'Diesen Kern in die geforderte Struktur und Zeichenbegrenzung jedes Fördergebers bringen',
					'Fristen, Berichtspflichten und Ergebnisse über alle Anträge verfolgen',
					'Dienstplan: Verfügbarkeiten, Schichten, Erinnerungen, Lücken',
					'Mitgliedschaft: Eintritte, Beiträge, Austritte, Beitragseinzug',
					'Spenderdank und Spendenquittungen',
					'Aktivitätsdaten laufend erfassen, damit Wirkungsberichte keine Archäologie sind'
				],
				judgement: [
					'Wofür die Organisation da ist',
					'Welchen Fördergeber man anspricht und was man ihm verspricht',
					'Jede Aussage über Wirkung',
					'Die Beziehungen zu den Ehrenamtlichen'
				],
				builds: [
					{
						name: 'Das Kerndokument',
						text: 'Jede wiederverwendbare Tatsache über die Organisation, einmal geschrieben, aktuell gehalten, mit Quelle für jede Zahl. Das Wertvollste, was gebaut wurde — und im Kern eine gut geordnete Textdatei.'
					},
					{
						name: 'Der Antragsformer',
						text: 'Die Fragen und Zeichenbegrenzungen eines Fördergebers rein, ein aus dem Kern gebauter Entwurf raus. Aus zwei Tagen werden etwa drei Stunden, und jede Aussage lässt sich auf den Kern zurückführen, sodass unter Fristdruck nichts erfunden wird — und genau dann erfinden Organisationen Dinge.'
					},
					{
						name: 'Der Pflichtenkalender',
						text: 'Antragsfristen, Berichtsfristen und was wem versprochen wurde. Versäumte Berichte sind der Weg, auf dem kleine Organisationen still ihre Fördergeber verlieren.'
					},
					{
						name: 'Der Dienstplan',
						text: 'Verfügbarkeiten rein, Schichten raus, Erinnerungen verschickt, Lücken früh sichtbar. Das war der größte wöchentliche Zeitfresser der Koordinatorin und ist reine Terminplanung.'
					},
					{
						name: 'Das Aktivitätsprotokoll',
						text: 'Dreißig Sekunden nach jedem Termin: was passiert ist, wie viele Menschen, was auffiel. Ein Jahr später schreibt sich der Wirkungsbericht aus echten Aufzeichnungen statt aus einer panischen Rekonstruktion im Januar.'
					}
				],
				stops: {
					title: 'Keine Wirkungsaussage wird erzeugt, und keine Kommunikation an Fördergeber geht automatisch raus.',
					text: [
						'Jede Zahl in einem Förderantrag stammt aus dem Aktivitätsprotokoll oder der Buchhaltung. Trägt das Protokoll sie nicht, sagt der Antrag das. Wirkung gegenüber einem Fördergeber zu übertreiben ist Betrug, es passiert versehentlich unter Fristdruck, und ein flüssiges Schreibwerkzeug macht es leichter, es versehentlich zu tun — also ist der Antragsformer gebaut, um sich zu weigern. Fehlt der Beleg, schreibt er „das messen wir noch nicht“ und überlässt es einem Menschen.',
						'Über Betreute wird nichts geschrieben. Wo die Organisation mit schutzbedürftigen Menschen arbeitet, gelangen überhaupt keine personenbezogenen Daten in ein externes Werkzeug. Nur aggregierte Zahlen. Und alles muss auf kostenlosen oder fast kostenlosen Werkzeugen laufen und in zwei Jahren von der nächsten Person bedienbar sein — alles, was ein Abo oder eine Fachkraft braucht, wird aufgegeben.'
					]
				},
				proof:
					'Stunden pro Förderantrag. Eingereichte Anträge pro Jahr — die sich etwa verdoppelten, und das ist der gesamte wirtschaftliche Sinn. Eingehaltene Berichtsfristen. Koordinationsstunden für Verwaltung gegenüber der eigentlichen Arbeit. Ob das Aktivitätsprotokoll nach sechs Monaten noch geführt wird.',
				refuse:
					'Wenn eine Organisation eine Website, ein CRM und eine Spendenplattform will. Das ist ein anderes Projekt mit laufenden Kosten, die sie nicht tragen kann, und es wird binnen eines Jahres aufgegeben. Eine gut gepflegte Tabelle und ein dokumentierter Prozess überleben die meisten Systeme, die für solche Organisationen gebaut werden.',
				cost: 'Dreißig Sekunden nach jedem Termin. Nichts, was finanziell wiederkehrt.'
			},
			{
				slug: 'research',
				title: 'KI für die Forschung: Anträge in zehn Tagen, nie eine erzeugte Quelle — KI-Beratung Berlin',
				metaDescription:
					'Ein Antragskern, der sich in jede Ausschreibung formt, ein Betreuungsprotokoll, Literaturscreening und ein Reproduzierbarkeits-Rückgrat. Es erzeugt nie eine Quellenangabe.',
				label: 'Forschung',
				headline: 'Zwei Professuren gingen von nahezu null Forschungsstunden auf acht bis zwölf.',
				story: [
					'Zwei sehr verschiedene Menschen mit demselben Kalenderproblem. Die Professur: neun SWS Lehrdeputat, vier bis fünfzehn Promovierende, Prüfungsausschuss, Berufungskommission und Fakultätsrat, sechs bis zehn unbezahlte Gutachten im Jahr, und zwei bis drei Anträge, weil der Lehrstuhl auf Drittmitteln läuft. Eingestellt für die Forschung, forscht sie sonntags, wenn überhaupt. Und die Promovierende: Jahr drei eines WissZeitVG-Vertrags, der in Jahr vier endet, 900 ungelesene PDFs, drei geschriebene Kapitel, die nicht mehr zusammenpassen, und eine Auswertung, die ihre eigenen Abbildungen nicht reproduzieren kann.',
					'Für Professuren ist es der Antrag. Eine DFG-Sachbeihilfe braucht Stand der Forschung, Vorarbeiten, Arbeitsprogramm, Mittelbegründung, Lebenslauf, Publikationsliste in der DFG-eigenen Struktur, einen Datenmanagementplan, eine Ethikerklärung und Maßnahmen zur Chancengleichheit. Etwa sechzig Prozent dieses Textes existierte bereits, in drei früheren Anträgen, in leicht falschen Formaten — und wird trotzdem neu geschrieben, über fünf Wochen aus Abenden und Wochenenden, weil das Suchen der alten Fassung schwerer erscheint als das Neutippen. Für Promovierende sind es sechshundert zu sichtende Abstracts und später die schlimmere Frage: Welche Skriptversion hat auf welchem Datenstand Abbildung 3 erzeugt?'
				],
				machinery: [
					'Literatur sichten: alles Neue in einem definierten Feld holen und nach Relevanz zu einer Frage sortieren',
					'Eine Literaturdatenbank entdoppeln, Metadaten reparieren, jede Quelle über die DOI auflösen',
					'Eine Publikationsliste in DFG-, ERC-, NSF-, Europass- oder Hausstruktur umformatieren',
					'Den wiederverwendbaren Antragskern pflegen und ihn in Struktur und Seitengrenzen einer Ausschreibung formen',
					'Ausschreibungen, Zwischen- und Abschlussberichte, Gutachtenzusagen und Prüfungstermine verfolgen',
					'Das Betreuungsprotokoll je Promovierender führen',
					'Bewerbungen in einem Berufungsverfahren gegen die veröffentlichten formalen Kriterien auf Vollständigkeit prüfen',
					'Das Reproduzierbarkeits-Rückgrat halten: welche Daten, welche Skriptversion, welche Abbildung'
				],
				judgement: [
					'Die Forschungsfrage. Die Hypothese. Die Interpretation',
					'Ob ein Ergebnis etwas bedeutet',
					'Die Beurteilung eines Menschen — im Gutachten, in der Verteidigung, im Berufungsverfahren',
					'Was begutachtet wird und was ein Gutachten schlussfolgert'
				],
				builds: [
					{
						name: 'Der Antragskern',
						text: 'Ein gepflegter Speicher: der Lebenslauf in jedem je verlangten Format, die Publikationsliste, die Gruppenbeschreibung, Infrastruktur, die Vorarbeiten-Absätze je Forschungslinie mit ihren Abbildungen und Quellen, Ergebnisse früherer Projekte, die Vorlage für den Datenmanagementplan, die Chancengleichheitsmaßnahmen. Jeder Eintrag datiert und mit Quelle. Etwa zwei Wochen Aufbau, überwiegend Extraktion aus drei alten Anträgen — und das letzte Mal, dass diese Absätze aus dem Nichts geschrieben werden.'
					},
					{
						name: 'Der Ausschreibungsformer',
						text: 'Struktur, Überschriften und Seitengrenzen einer Ausschreibung gehen hinein. Heraus kommt ein Gerüst, in dem das Kernmaterial bereits in etwa der richtigen Länge an der richtigen Stelle steht und jeder Abschnitt, der eigenes Denken braucht, leer und beschriftet ist. Aus fünf Wochen werden etwa zehn Tage, und fast alle zehn gehen ins Arbeitsprogramm — den Teil, der gefördert wird.'
					},
					{
						name: 'Das Betreuungsprotokoll',
						text: 'Eine private Datei je Promovierender: was vereinbart wurde, was geschah, Meilensteine gegen die Betreuungsvereinbarung, genannte Hindernisse. Neunzig Sekunden Diktat nach jedem Gespräch. Das würde ich zuerst einrichten, wenn ich nur eines einrichten dürfte — weil Gespräche derzeit damit beginnen, dass beide sich zu erinnern versuchen, weil Gutachten zwei Jahre später aus dem Nichts entstehen, und weil das Protokoll vier Monate früher zeigt, dass jemand still in Schwierigkeiten steckt.'
					},
					{
						name: 'Die Sichtungsstrecke',
						text: 'Für Promovierende: sechshundert Abstracts gegen zuvor aufgeschriebene Ein- und Ausschlusskriterien. Jede Entscheidung mit dem Kriterium protokolliert, das sie erzeugt hat, jeder Grenzfall für den Menschen markiert. Für systematische Reviews bildet das PRISMA ab und liefert die Flussdiagrammzahlen nebenbei.'
					},
					{
						name: 'Das Reproduzierbarkeits-Rückgrat',
						text: 'Datenstand, Skriptversion, Umgebung, Ausgabe. Jede Abbildung trägt den Befehl, der sie erzeugt hat. In Jahr eins an einem Nachmittag eingerichtet und in Jahr vier einen Monat wert.'
					}
				],
				stops: {
					title: 'Es erzeugt nie eine Quellenangabe und fasst nie eine Arbeit zusammen, die Sie zitieren werden.',
					text: [
						'Quellen kommen aus der Literaturverwaltung und werden über die DOI aufgelöst. Nichts, was Prosa erzeugt, darf eine Quellenangabe erzeugen — nie, in keiner Rahmung. Erfundene Quellen sind das häufigste und zerstörerischste Versagen von Sprachmodellen in der Forschung, und sie sind für eine müde Autorin um 23 Uhr nicht erkennbar, weil sie exakt richtig aussehen. Tausend Abstracts zu sichten, um vierzig Arbeiten zu finden, ist Mechanik; diese vierzig zu lesen ist der Beruf — die Sichtung liefert deshalb Titel, Abstracts und Links, nie eine als ausreichend präsentierte Zusammenfassung.',
						'Kein Manuskript im Begutachtungsverfahren berührt einen externen Dienst: Peer Review ist vertraulich, und ein Manuskript ist unveröffentlichte Arbeit, die jemand anderem gehört. Es schreibt nie das Argument, die Hypothese oder die Interpretation. Es reiht nie Bewerbungen in einem Berufungsverfahren — ein solches Verfahren ist gerichtlich überprüfbar, dokumentationspflichtig und unterliegt dem AGG; ich habe das zweimal abgelehnt. Und keine Daten werden erfunden, keine Abbildung erzeugt, keine Bereinigung geschieht still: Roh bleibt roh. Jedes Mandat endet mit einer einseitigen Übersicht, die festhält, welche Aufgaben eine Maschine nutzten und welche Offenlegungsregeln von Fördergebern und Verlagen gelten.'
					]
				},
				proof:
					'Tage von der Ausschreibung bis zum eingereichten Antrag: typisch fünf Wochen auf etwa zehn Arbeitstage. Eingereichte Anträge pro Jahr. Betreuungsgespräche mit schriftlichem Protokoll: von gelegentlich auf alle. Abbildungen, die sich mit einem Befehl reproduzieren lassen: alle. Und das Einzige, was wirklich zählt — Forschungsstunden pro Woche, die bei beiden Professuren von nahezu null auf acht bis zwölf gingen.',
				refuse:
					'Wenn jemand einen Textgenerator für Aufsätze will — zweimal gefragt, als „ein erster Entwurf der Einleitung“ und „nur der Related-Work-Teil“. Der Related-Work-Teil ist genau dort, wo Sie zeigen, dass Sie das Feld gelesen haben. Ebenso, wenn ein Fachbereich Publikationskennzahlen pro Person will, was Überwachung im bibliometrischen Kostüm ist. Und wenn eine Promovierende eine Betreuung braucht statt eines Systems, was die traurigste Variante ist.',
				cost: 'Zwei Wochen Extraktion für den Kern, einmalig. Neunzig Sekunden nach jedem Betreuungsgespräch. Und die Disziplin, die vierzig gefundenen Arbeiten zu lesen, was immer der Job war.'
			},
			{
				slug: 'language-exams',
				title: 'KI für IELTS, ÖSD und Goethe: Übung dort, wo die Punkte verloren gehen — KI-Beratung Berlin',
				metaDescription:
					'Eine Diagnose je Kriterium, ein Fehlerregister, das den wiederkehrenden Fehler benennt, und Stunden verteilt nach dem, wo Punkte tatsächlich verloren gehen. Es verspricht nie ein Ergebnis.',
				label: 'Sprachprüfungen',
				headline: 'Sie üben das, worin sie ohnehin schon gut sind.',
				story: [
					'Fast niemand kommt hierher aus Liebe zu einer Sprache. Man kommt, weil ein Dokument eine Zahl verlangt. Ein syrischer Arzt, der B2 plus Fachsprachprüfung vor der Approbation braucht. Eine Frau, die B1 für die Einbürgerung braucht und zweimal am Schreiben gescheitert ist. Ein indischer Softwareentwickler, der IELTS 7.0 für einen Visumsweg braucht und 6.5 mit einer 6.0 im Schreiben hat. Eine Pflegekraft, deren Arbeitgeber den dritten Versuch bezahlt. Zweierlei gilt für fast alle: Die Frist ist extern und unverrückbar, und sie sind mindestens einmal gescheitert.',
					'Wer Lesen 82, Hören 78, Schreiben 51 hat, macht vier Abende die Woche Leseübungen, weil Lesen sich nach Fortschritt anfühlt und Schreiben nach Scheitern. Man kauft noch ein Testbuch, macht einen ganzen Test, wertet ihn aus, bekommt eine Zahl, fühlt sich schlecht und macht den nächsten. Nichts in dieser Schleife sagt, welcher der eigenen Sätze Punkte gekostet hat und warum. Zwölf Wochen später liegt das Ergebnis zwei Punkte neben dem letzten, und das ist wirklich verwirrend, denn man hat sehr hart gearbeitet.'
				],
				machinery: [
					'Einen Probetest gegen die veröffentlichten Kriterien bewerten, je Kriterium statt als eine Zahl',
					'Jeden Fehler in Text oder Aufnahme nach Typ klassifizieren und über Versuche hinweg zählen',
					'Übungsstunden im Verhältnis dazu verteilen, wo Punkte tatsächlich verloren gehen',
					'Gezielte Übungen zu genau diesen Fehlerklassen erzeugen, im echten Prüfungsformat',
					'Verteiltes Wiederholen, gespeist aus den eigenen Fehlern statt aus einer Standardliste',
					'Sprechmechanik messen: Sprechtempo, Pausenlänge und -lage, Füllwörter, Wortschatzbreite',
					'Den Countdown gegen die real verfügbaren Stunden bauen',
					'Anmeldung: Fristen, Termine im Prüfungszentrum, Ausweisanforderungen, Gebühren'
				],
				judgement: [
					'Ob sie bereit sind, sich anzumelden',
					'Was eine Prüferin im Raum tatsächlich honoriert',
					'Die Prüfungsangst, die beim dritten Versuch oft der größte Einzelfaktor ist',
					'Ob das überhaupt die richtige Prüfung auf dem richtigen Niveau ist'
				],
				builds: [
					{
						name: 'Die Diagnose',
						text: 'Ein vollständiger Probetest unter echten Bedingungen, bewertet gegen die veröffentlichten Deskriptoren, je Kriterium. Bei IELTS Writing sind das vier getrennte Ergebnisse; bei ÖSD oder Goethe die Aufschlüsselung nach Modul und Kriterium, kein Bestanden oder Durchgefallen. Die Ausgabe ist bewusst keine Punktzahl: Hier ist jedes Kriterium, hier sind die Punkte hingegangen, und hier stehen Ihre eigenen Sätze neben dem Deskriptor, den sie verfehlt haben. Die meisten haben das noch nie gesehen. Sie haben Zahlen gesehen.'
					},
					{
						name: 'Das Fehlerregister',
						text: 'Jeder Fehler in jedem Text und jeder Aufnahme, klassifiziert und gezählt. Nach drei Texten sagt das Register etwa: dreiundsechzig Prozent Ihrer Grammatikabzüge kommen aus einer einzigen Struktur — oder: Sie haben in vier Aufsätzen hintereinander Punkte bei der Aufgabenerfüllung verloren und nie bei der Grammatik. Dieser Satz ist mehr wert als hundert Probetests, und kein Buch kann ihn erzeugen, weil kein Buch weiß, was genau dieser Mensch tut.'
					},
					{
						name: 'Die Verordnung',
						text: 'Die verfügbaren Stunden werden im Verhältnis dazu verteilt, wo die Punkte verloren gehen — nicht gleichmäßig und nicht nach Vorliebe. Wer alles im Schreiben verliert, bekommt einen Plan mit etwa siebzig Prozent Schreiben und hasst ihn etwa zehn Tage lang. Für die starke Fertigkeit gilt eine Regel: gerade so viel Pflege, dass sie hält, und keine Stunde mehr.'
					},
					{
						name: 'Die Sprech-Werkbank',
						text: 'Die echte Aufgabe wird unter echter Zeit aufgenommen. Zurück kommen Transkript, die mechanischen Maße — Sprechtempo, wo die Pausen liegen und wie lang sie sind, Füllwörter, Wortschatzbreite, wiederholte Strukturen — und die wiederkehrenden Fehler, dem Register zugeordnet. Es misst Mechanik. Es bewertet nicht die Persönlichkeit, und es sagt das auch.'
					},
					{
						name: 'Der Countdown und die Modulfrage',
						text: 'Von heute bis zum Prüfungstag, gegen die Stunden, die wirklich da sind, mit einem frischen Probetest alle drei Wochen. Dazu die Frage nach dem Modulwiederholen: Mehrere dieser Prüfungen erlauben, ein einzelnes nicht bestandenes Modul allein zu wiederholen, was einen Bruchteil der Gebühr bedeuten kann. Das System stellt die Frage und nennt die Stelle, bei der man nachfragt — es behauptet die Antwort nicht. Ich habe jemanden eine ganze Prüfung wiederholen sehen, weil niemand ihm sagte, dass er fragen soll.'
					}
				],
				stops: {
					title: 'Es verspricht nie ein Ergebnis und schreibt nie den Aufsatz.',
					text: [
						'Es erzeugt Einschätzungen je Kriterium gegen veröffentlichte Deskriptoren und kennzeichnet sie jedes Mal als Einschätzungen. Das Versagensmuster hier ist konkret und teuer: Wer einer vorhergesagten 7.0 glaubt, meldet sich an, zahlt die Gebühr, bucht den Visumstermin — und schreibt 6.5. Das Bereitschaftssignal ist deshalb bewusst konservativ: drei Probetests hintereinander über dem Ziel im schwächsten Kriterium, nicht im Durchschnitt — und selbst dann ist es ein Signal an einen Menschen, keine Entscheidung.',
						'Es schreibt nie den Aufsatz und spricht nie für sie, auch nicht als „Startpunkt“. Im Prüfungsraum wird nichts da sein, und wer verbesserte Texte einreicht, hat das Werkzeug gemessen statt sich selbst. Nichts berührt eine laufende Prüfung — keine Hilfsmittel während eines Tests, keine Unterstützung in einer beaufsichtigten Fernprüfung. Es werden keine offiziellen Prüfungsbögen reproduziert. Und keine Auskunft zu Aufenthalt, Visum oder Anerkennung: Ob ein Zertifikat für einen bestimmten Approbationsweg anerkannt wird, ist eine Rechtsfrage mit echten Folgen — das System verweist auf die Behörde, die Ärztekammer oder eine Anwältin.'
					]
				},
				proof:
					'Nicht das Gesamtergebnis — Gesamtwerte bewegen sich langsam und verbergen alles. Die Bewegung im schwächsten Kriterium, die einzige Zahl, die zählt, und die zwölf Wochen Selbststudium nie bewegt haben. Fehlerhäufigkeit pro hundert Wörter nach Klasse über die Zeit. Die Verteilung der Lernstunden, die typisch bei siebzig Prozent auf der starken Fertigkeit startet und sich binnen eines Monats umkehren sollte. Und ob das Register nach acht Wochen noch geführt wird, was das Ergebnis besser vorhersagt als jeder einzelne Probetest.',
				refuse:
					'Wenn die Zeitschiene nicht funktionieren kann — wer solide A2 hat und in acht Wochen C1 will, kommt nicht dorthin, und ich nenne die ehrliche Zahl an Monaten in der ersten Stunde. Wenn das Zielniveau falsch ist, was zweimal ein niedrigeres Zertifikat oder eine andere, ebenfalls anerkannte Prüfung bedeutete. Wenn die Hürde Angst ist statt Sprache, denn Übungsdruck macht das schlimmer. Und wenn jemand das Ergebnis ohne die Sprache will, was ein kurzes Gespräch ist.',
				cost: 'Alle drei Wochen ein vollständiger Probetest unter echten Bedingungen, unbequem und nicht verhandelbar. Zehn Minuten nach jeder Schreibaufgabe. Und etwa zehn Tage der Übung, die sie vermieden haben.'
			}
		]
	},
	how: {
		title: 'Drei Schritte, kein Risiko.',
		steps: [
			{
				title: 'Schreiben Sie mir.',
				text: 'WhatsApp, Telegram oder E-Mail — beschreiben Sie Ihre Arbeit in Ihren eigenen Worten. Keine Vorbereitung nötig.'
			},
			{
				title: 'Wir sprechen — kostenlos.',
				text: 'In einem Gespräch sage ich Ihnen ehrlich, was KI für Sie tun kann und was nicht. Und wenn ich nicht der Richtige dafür bin, sage ich auch das.'
			},
			{
				title: 'Wir bringen es zum Laufen — gemeinsam.',
				text: 'Persönliches Coaching in Ihrer eigenen Arbeit oder Begleitung bei der Einrichtung, bis es in Ihrer normalen Woche läuft. Sie behalten die Kontrolle — nichts hängt dauerhaft von mir ab.'
			}
		],
		noPrices:
			'Jede Aufgabe ist anders, deshalb gibt es keine Preisliste. Nach dem Erstgespräch bekommen Sie ein klares Angebot — und das Gespräch selbst kostet nichts.'
	},
	principles: {
		title: 'Drei Versprechen.',
		items: [
			{
				title: 'Klare Sprache, garantiert.',
				text: 'Wenn ich es nicht in einem Satz erklären kann, den Sie verstehen, bin ich mit meiner Arbeit nicht fertig.'
			},
			{
				title: 'Ehrlichkeit über Grenzen.',
				text: 'KI ist wirklich nützlich — und sie wird oft überverkauft. Ich sage Ihnen, was davon auf Ihren Fall zutrifft, auch wenn es mich den Auftrag kostet.'
			},
			{
				title: 'Diskretion.',
				text: 'Patientenakten, Fallunterlagen, Kundendaten — ich arbeite so, wie Ihr Beruf es verlangt: sorgfältig, vertraulich und nach deutschen und europäischen Datenschutzregeln.'
			}
		]
	},
	about: {
		eyebrow: 'Über mich',
		title: 'Der Übersetzer zwischen Ihnen und den Maschinen.',
		photoAlt: contact.name,
		text: 'Fast niemand kommt zu mir und fragt nach KI. Man kommt, weil ein bestimmter Teil der Woche unerträglich geworden ist. Was ich tatsächlich tue: Ich setze mich in diese Woche, bis ich sehen kann, welcher Teil davon Mechanik im Gewand von Urteilsvermögen ist — und das ist die seltenere Fähigkeit, denn die meisten, die solche Systeme bauen können, hören das Problem nicht, und die meisten, die das Problem hören, können nicht bauen. Ich mache beides, mit einem Menschen nach dem anderen. Ich arbeite in zwei Registern: In einem Unternehmen betreibe ich ein Produktivsystem, das eine echte Rechtsabteilung nutzt, und daneben sitze ich mit einer Yogalehrerin oder einem Küchenchef am Küchentisch. Die Unternehmensarbeit lehrt mich, was Audits und Übergaben übersteht; die Einzelarbeit hält mich ehrlich darüber, wie wenig die meisten wirklich brauchen. Ich höre also zu, wie Sie ohnehin arbeiten, baue oder erkläre genau so viel — und sage klar, wenn die Antwort lautet, dass KI sich für Sie nicht rechnet.'
	},
	testimonials: {
		eyebrow: 'Freundliche Worte',
		// Bewusst leer. §5b UWG verbietet die Veröffentlichung nicht echter
		// Kundenbewertungen — hier steht nichts, bevor eine Kundin ihre eigenen
		// Worte freigegeben hat. Solange leer, entfällt der Abschnitt.
		items: []
	},
	faq: {
		eyebrow: 'Häufige Fragen',
		title: 'Vielleicht fragen Sie sich…',
		items: [
			{
				q: 'Brauche ich technisches Vorwissen?',
				a: 'Überhaupt keins. Genau dafür holen Sie mich — Sie beschreiben Ihre Arbeit in Ihren eigenen Worten, alles Technische bleibt mein Problem. Wenn Sie Ihre Woche beschreiben können, können wir zusammenarbeiten.'
			},
			{
				q: 'Was kostet das?',
				a: 'Es gibt keine Preisliste, denn eine Zahnarztpraxis und eine Doktorarbeit kosten nicht dasselbe. Nach dem kostenlosen Erstgespräch bekommen Sie ein klares, festes Angebot — vor jeder Verpflichtung. Und wenn die ehrliche Antwort ist, dass sich KI für Sie nicht lohnt, sage ich stattdessen genau das.'
			},
			{
				q: 'Sind meine Daten bei Ihnen sicher?',
				a: 'Ja — und dieses Versprechen nehme ich persönlich. Patientenakten, Fallunterlagen, Kundendaten: Wir arbeiten nur mit dem, was die Regeln Ihres Berufs erlauben, nach deutschem und europäischem Datenschutzrecht. Nichts, was Sie mir anvertrauen, verlässt den Rahmen, den wir vereinbaren.'
			},
			{
				q: 'Welche KI-Werkzeuge nutzen Sie?',
				a: 'Die, die zu Ihrer Arbeit passen — ich bin unabhängig und verkaufe kein Produkt und kein Abo. Manchmal ist die Antwort eines der bekannten Werkzeuge, manchmal etwas Kleines, eingerichtet rund um Ihre Routine. Sie zahlen nie für etwas, das Sie nicht brauchen.'
			},
			{
				q: 'Wie viel meiner Zeit kostet das?',
				a: 'Weniger, als Sie denken. Das Erstgespräch dauert weniger als eine Stunde. Danach verbringen die meisten meiner Kunden ein bis zwei Stunden pro Woche mit mir, während alles Form annimmt — innerhalb ihrer normalen Woche, nicht obendrauf.'
			},
			{
				q: 'Und wenn es in meinem Fall nicht funktioniert?',
				a: 'Dann hören Sie es zuerst von mir — im kostenlosen Gespräch, bevor Sie etwas ausgegeben haben. KI kann wirklich nicht jedem bei allem helfen, und etwas anderes zu behaupten ist der Grund, warum diese Branche Vertrauen verliert.'
			}
		]
	},
	contactSection: {
		eyebrow: 'Kontakt',
		title: 'Erzählen Sie mir, wie Ihre Woche aussieht.',
		lead: 'Ich sage Ihnen ehrlich, welche Teile Sie abgeben können — und welche nicht.',
		form: {
			subject: 'Worum geht es',
			// Sortiert die Anfrage, bevor sie bei Ihnen landet.
			subjects: [
				'Coaching für mich persönlich',
				'Ein Projekt für meine Praxis oder mein Team',
				'Ein Workshop oder ein Vortrag',
				'Etwas anderes'
			],
			messageHint: 'Ein Satz über Ihre Woche genügt. Keine Vorbereitung nötig.',
			emailHint: 'Damit ich antworten kann.',
			sending: 'Wird gesendet…',
			reply: 'Ich antworte innerhalb eines Werktags.',
			name: 'Name',
			email: 'E-Mail',
			message: 'Nachricht',
			send: 'Nachricht senden',
			success: 'Vielen Dank — ich melde mich innerhalb eines Tages.',
			error: 'Das hat nicht geklappt. Bitte nutzen Sie WhatsApp, Telegram oder E-Mail.',
			note: 'Kein Formular? Über die Buttons links erreichen Sie mich schneller.'
		}
	},
	footer: {
		impressum: 'Impressum',
		datenschutz: 'Datenschutz'
	}
};
