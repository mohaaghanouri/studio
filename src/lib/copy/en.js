// Prose mentions of the name are interpolated from contact.js so a rename stays a
// one-line change. The sentences themselves are copy — rewrite them freely.
import { contact } from './contact.js';

export default {
	lang: 'en',
	meta: {
		title: `${contact.name} — AI for the boring half of your job`,
		description:
			'I find the part of your week that is machinery pretending to be judgement, and I build up to that line and no further. Lawyers, teachers, dentists, surveyors and nineteen other fields. Berlin, English & German. The first conversation is free.'
	},
	nav: {
		contact: 'Contact',
		menu: 'Menu'
	},
	hero: {
		headline: 'The boring half of your job can do itself.',
		subline:
			`I'm ${contact.name}. I sit inside your actual working week until I can see which part of it is machinery pretending to be judgement — then I build up to that line and never across it. The machine takes the volume. You keep the decision.`,
		button: 'Message me — the first conversation is free',
		note: 'Based in Berlin · English & German · You deal with me directly'
	},
	studio: {
		// Label only — the list itself lives in contact.js. Framed as tools, NOT clients,
		// so the row reads as true rather than as an implied client list.
		toolsLabel: 'Tools I work with',
		worksLabel: 'Use cases',
		capabilitiesLabel: 'How it works',
		statsLabel: 'By the numbers',
		bookLabel: 'Book a call',
		bookTitle: 'Pick a time that suits you.',
		bookNote: 'Thirty minutes, free, no preparation needed.',
		sound: 'Sound',
		workBack: 'All use cases',
		// No count in the heading: the list grows as each profession gets written up.
		worksHeading: 'What AI already does for people like you.',
		worksIntro:
			"Each of these is something I built and ran myself, for real people with real deadlines. Pick the one closest to your work.",
		worksMeta:
			`Real use cases: contract review for lawyers, content, house hunting, job search, research, marketing and exam prep. Built and run by ${contact.name}, AI coaching in Berlin.`,
		workName: 'Use case',
		workPeople: 'People helped',
		workCovers: 'What it takes over',
		workMachinery: 'What the machine takes',
		workJudgement: 'What stays yours',
		workBuilds: 'What I build',
		workStops: 'Where it stops',
		workProof: 'What proof looks like',
		workRefuse: 'When I say no',
		workCost: 'What it costs you',
		bookCta: 'Or book a call',
		close: 'Close',
		priceLabel: 'What it costs',
		// Deliberately no head-count here — the numbers live on each case page instead.
		stats: [
			{ value: '6', label: 'Years building AI systems' },
			{ value: '19', label: 'Professions served' },
			{ value: '4', label: 'Weeks from first visit to handover' }
		]
	},
	who: {
		eyebrow: 'Who I help',
		// Labels for roster.js. The counts live there; only the words live here.
		rosterEyebrow: 'Since 2022',
		rosterTitle: 'Who I have actually worked with.',
		rosterIntro:
			'Not a target audience — the fields whose work I have already been inside, one person at a time. Pick the one closest to yours.',
		roster: {
			'job-seekers': 'People through a job search',
			athletes: 'Athletes and players',
			'content-creators': 'Content creators',
			'home-buyers': 'People buying a home',
			lawyers: 'Lawyers',
			teachers: 'Teachers',
			coaches: 'Coaches and yoga teachers',
			'product-managers': 'Product managers',
			'online-shoppers': 'Online shoppers',
			architects: 'Architects',
			'project-managers': 'Project managers',
			surveyors: 'Building surveyors (Gutachter)',
			'event-organizers': 'Event organisers',
			dentists: 'Dentists',
			'team-leaders': 'Team leaders',
			'estate-agents': 'Estate agents',
			executives: 'CEO',
			chefs: 'Chef',
			'volunteer-orgs': 'Volunteer organisation'
		},
		notListed: "Your profession isn't listed? It almost certainly still applies — ask me."
	},
	built: {
		items: [
			{
				slug: 'job-seekers',
				title: 'AI for a job search: thirty people placed — AI coaching Berlin',
				metaDescription:
					'A job search built on an evidence bank, an advert reader that finds the real requirements, and a tool that refuses to exaggerate your experience. Thirty people are in jobs found this way.',
				label: 'Job search',
				headline: 'Thirty people are in jobs found this way.',
				story: [
					"Not 'job seekers'. A logistics coordinator whose warehouse closed. A woman coming back after three years with children who thinks the gap disqualifies her. A developer on a visa clock. A graduate who has sent 180 applications and has stopped opening the replies. They arrive humiliated, and the humiliation is the thing to handle first.",
					'It is never one hour, it is every evening. The same CV goes to a hundred adverts with the company name swapped in the letter. Nothing comes back, so they send more. Volume replaces thought, thought would have replaced volume, and the loop tightens until they cannot look at it any more.'
				],
				machinery: [
					'Reading an advert in full and extracting what it actually asks for — including the requirement buried in paragraph four',
					'Matching those requirements against a fixed record of what you have genuinely done',
					'Producing the tailored CV and letter, evidence by evidence',
					'Tracking every application, its stage, and when a follow-up is due',
					'Building the interview prep pack from that specific advert',
					'Spotting a repost, an agency phantom, or a duplicate'
				],
				judgement: [
					'Whether this job is worth wanting',
					'How to talk about the gap, the firing, the visa',
					'What you will and will not claim about yourself',
					'Whether to take the offer'
				],
				builds: [
					{
						name: 'The evidence bank',
						text: 'The first session is not software. We sit and write down everything you have actually done, with numbers, in your own words. Usually two to four hours, and it is the hardest part. Nothing enters the system that does not come out of this bank.'
					},
					{
						name: 'The advert reader',
						text: 'Paste a URL or a PDF. It returns the real requirements, split into hard and soft, what the advert reveals about the team, and a plain-language paragraph on what this job actually is.'
					},
					{
						name: 'The match pass',
						text: 'Every requirement gets one of three marks: evidenced, adjacent, or absent. Absent stays absent. It never invents a bridge.'
					},
					{
						name: 'The tracker',
						text: 'One row per application: role, date, source, stage, follow-up due, outcome, and what was learned. After thirty applications this is the most useful thing you own, because the patterns appear — which sectors answer, which channels are dead, which claims produce interviews.'
					},
					{
						name: 'The prep pack',
						text: 'Generated per interview from the advert plus the bank: likely questions, your own examples mapped to each one, and questions to ask back.'
					}
				],
				stops: {
					title: 'The tool refuses to exaggerate your experience.',
					text: [
						'This is not a setting. If a requirement is absent, it says absent and offers you the choice: skip the application, or address the gap honestly in the letter. I have been asked to soften this. I do not.',
						'It is the reason the thirty people who got jobs kept the jobs — nothing was promised in the room that could not be delivered on Monday. It also does not decide where to apply. It ranks and filters; you choose.'
					]
				},
				proof:
					'Not applications sent — that number goes down, usually by 70%. Interviews per hundred applications, time from advert to submitted application (target: under 25 minutes), and follow-ups actually sent.',
				refuse:
					'When you do not have a job-search problem, you have a career decision you are avoiding — you know the field is wrong and are applying inside it anyway. No tool fixes that, and building one is a way of helping you stall.',
				cost: 'The evidence bank hurts. Everything after it is fifteen minutes an application.'
			},
			{
				slug: 'athletes',
				title: 'AI for athletes: footage tagged, a scout-ready profile — AI coaching Berlin',
				metaDescription:
					'Match footage cut into tagged events, a highlight reel in minutes instead of an evening, a profile page that is always current, and a training log that flags but never prescribes.',
				label: 'Athletes',
				headline: 'When a scout says send me something, it should not take four days.',
				story: [
					'Semi-professionals and serious amateurs: a third-league footballer trying to be seen a level up, two competitive climbers, a handball player coming back from a knee, an esports player whose team folded, a triathlete self-coaching because the coach costs more than the entry fees. Almost all of them run their own career as an unpaid second job with worse tools than their employer has.',
					'Two hours break, usually. The first is footage — 90 minutes of a match on a phone, from which four usable clips must be extracted, and it takes an evening every week. The second is outreach: emails to clubs, scouts, agents and sponsors, each rewritten from scratch, each unanswered, none of them tracked.'
				],
				machinery: [
					'Cutting a long recording into tagged events — every touch, set, round, rep',
					'Assembling a reel from selected tags at the right length, ratio and captioning for the platform a scout actually opens',
					'Logging sessions — load, duration, RPE, sleep, soreness — and surfacing a sharp seven-day trend',
					'Keeping a scout-ready one-page profile that regenerates itself',
					'Tracking every club, scout and sponsor contacted, with the follow-up due',
					'Turning a coach’s spoken feedback into a written, searchable note'
				],
				judgement: [
					'Whether the body is right today',
					'What to do about a niggle',
					'Which club, which contract, which level',
					'Technique correction'
				],
				builds: [
					{
						name: 'The tagging pipeline',
						text: 'You upload the match or session; it comes back segmented by event type with timestamps. Selecting six tags produces a finished reel in the right format with name, position and date burned in. What was an evening becomes about eleven minutes.'
					},
					{
						name: 'The training log',
						text: 'Deliberately dull: a phone form with five fields, ten seconds after every session. It draws the acute-to-chronic load trend and flags sharp jumps. It flags. It does not prescribe.'
					},
					{
						name: 'The profile page',
						text: 'One page, always current: position, age, height, season minutes, key stats, three clips, contact. The single reason players do not get seen is that when a scout asks for something, it takes four days to assemble and by then the interest has cooled.'
					},
					{
						name: 'The outreach tracker',
						text: 'The same architecture as the job-search tracker, because it is the same problem wearing a tracksuit: a list of targets, a message built from real material, a follow-up date, and a record of what came back.'
					},
					{
						name: 'The comeback log',
						text: 'For anyone rehabbing: the physio’s instructions written down once, sessions logged against them, and a weekly summary the physio can read in thirty seconds.'
					}
				],
				stops: {
					title: 'It never prescribes a session and never assesses an injury.',
					text: [
						'It shows the trend and puts the number in front of the athlete and, where there is one, the coach or physio. I have refused three requests to add a recommended load for tomorrow. The consequence of being wrong is somebody’s season, and the machine cannot feel the knee.',
						'It also does not talk to clubs. Drafts wait for the player to send.'
					]
				},
				proof:
					'Minutes from the final whistle to a reel a scout could open. Clubs contacted with a follow-up actually sent. And whether the log is still being filled in eight weeks later — that one is the real test, and it is why the form has five fields.',
				refuse:
					'When the athlete’s problem is that they are not good enough at this level yet. That happens, and no highlight reel changes it. The honest version of the conversation is worth more than the system, and I have had it twice.',
				cost: 'Ten seconds after every session. Twenty minutes after every match.'
			},
			{
				slug: 'content-creators',
				title: 'AI for content creators: your evenings back, your voice intact — AI coaching Berlin',
				metaDescription:
					'Transcription, silence-stripped rough cuts and ranked clip candidates waiting each morning. Fifteen minutes of picking, then everything else runs. No AI scripts, no synthetic voice.',
				label: 'Content creators',
				headline: 'Six hours between filming and published becomes under two.',
				story: [
					'A cookery channel run by one person with 60k subscribers. A podcast duo. A German comedian posting shorts. Two educational creators. A photographer who films behind the scenes. Not media companies — people who are simultaneously the talent, the editor, the publisher and the customer service desk, and who are quietly close to burning out on the three jobs that are not the one they love.',
					'Filming takes two hours, editing takes six, captions take one, and the description, tags, thumbnail and scheduling take another. They are not tired of making things. They are tired of the four hours between having made a thing and it being online.'
				],
				machinery: [
					'Transcribing everything, accurately, with timestamps and speaker labels',
					'Removing silence, filler, false starts and the fourth attempt at a sentence',
					'Proposing ranked clip candidates with timestamps and reasons attached',
					'Burning in captions in your own font, position and language, plus the SRT',
					'Reformatting one master edit into 16:9, 9:16 and 1:1 with the subject tracked',
					'Writing the description, chapters and tags from the transcript',
					'Triaging comments into questions, abuse, business enquiries and everything else',
					'Keeping the archive so "have I already covered this?" is answerable'
				],
				judgement: [
					'What is funny. What is true. What is worth saying',
					'The hook — the first three seconds',
					'Whether this goes out at all',
					'The voice'
				],
				builds: [
					{
						name: 'The ingest pipeline',
						text: 'Drop the day’s footage in a folder. Overnight it returns a transcript, a silence-stripped rough cut, and eight ranked clip candidates with reasons attached — "laugh at 04:12", "question answered cleanly at 19:40".'
					},
					{
						name: 'The picker',
						text: 'You sit down for fifteen minutes and choose. That is the whole of your involvement in the mechanical layer, and it is deliberately the only point where you are asked to think.'
					},
					{
						name: 'The assembly',
						text: 'Chosen clips cut, captioned in your existing style — same font, same colour, same placement, matched to what you already use — reframed per platform, and dropped into a publish folder with description, chapters and tags drafted.'
					},
					{
						name: 'The comment triage',
						text: 'Four buckets each morning. Business enquiries go to a real inbox. Abuse goes to a folder you never have to open unless you want evidence.'
					},
					{
						name: 'The archive',
						text: 'Every transcript searchable. This turns out to be the sleeper hit: after two years most creators cannot remember what they have said, and the archive kills the anxiety of accidental repetition.'
					}
				],
				stops: {
					title: 'It does not write the take and it does not write in your voice.',
					text: [
						'No AI-generated scripts, no synthetic narration, no "in the style of". The reason is commercial as much as ethical: the voice is the entire asset. A creator whose voice becomes generatable has sold the only thing that was theirs. I say this in the first meeting and I have lost one engagement over it.',
						'Hooks stay human. For thumbnails I generate variants of your own photograph — crops, text placement — never a synthetic image.'
					]
				},
				proof:
					'Hours between "filming ended" and "published" — typically from around six to under two. Uploads per week without an increase in filming days. And the one they mention unprompted six months later: they have their evenings back.',
				refuse:
					'When someone is not posting because they have nothing they want to say. Faster publishing makes that worse, visibly and quickly. Twice I have told a creator that their problem is upstream of the edit.',
				cost: 'Fifteen minutes of picking. Everything else runs while you sleep.'
			},
			{
				slug: 'home-buyers',
				title: 'AI for a house hunt: fewer viewings, checked papers — AI coaching Berlin',
				metaDescription:
					'A watcher that catches new listings in minutes, a rejecter that throws flats away and tells you why, the true entry cost including Grunderwerbsteuer and Notar, and a viewing brief per flat.',
				label: 'Buying a home',
				headline: 'The point is not to show you more flats. It is to show you fewer.',
				story: [
					'A couple in Berlin who have been looking for fourteen months. A family that needs a specific school catchment. A man buying his mother a flat in another city. Two people buying to renovate. They are all exhausted in the same particular way, and they have all started to lower their standards without noticing.',
					'Saturday and Sunday morning, on portals, scrolling the same forty flats. The good listings are gone within hours, so the weekend habit guarantees they only ever see what nobody wanted. Meanwhile every listing they do like takes forty minutes to evaluate — the Exposé, the Hausgeld, the Energieausweis, the commute, the true purchase cost — and they do that forty-minute job maybe twice a week, badly, at midnight.'
				],
				machinery: [
					'Watching every relevant portal continuously and catching a new listing in minutes',
					'Deduplicating: the same flat listed by three agents at three prices',
					'Applying hard constraints — rooms, area, floor, lift, budget, district',
					'Reading the Exposé: Hausgeld, Wohnfläche, Baujahr, heating, Energieausweis, Erbpacht, Denkmalschutz, Sanierungsstau',
					'Computing the true entry cost — Grunderwerbsteuer, Notar and Grundbuch, Courtage — the number that is usually 10–12% above the headline',
					'Door-to-door commute times to real addresses at real times of day',
					'Assembling the viewing brief and keeping a record of why each flat was rejected'
				],
				judgement: [
					'Whether you would be happy living there',
					'What it is worth to you',
					'How much to bid, and whether to buy at all'
				],
				builds: [
					{
						name: 'The watcher',
						text: 'Runs continuously. New listings that pass your hard constraints arrive by message within minutes, not on Saturday. This alone changes the outcome more than everything else combined, because in Berlin the queue forms in the first two hours.'
					},
					{
						name: 'The rejecter',
						text: 'The part people find strange and then love. It throws listings away and tells you why: "Erbpacht until 2061 — you said no." "Hausgeld €610 for 68m² — outside your ceiling." The rejected pile stays visible but collapsed, so you can see it was not careless.'
					},
					{
						name: 'The true-cost line',
						text: 'Every surviving listing carries one number: what leaving the notary actually costs, and the monthly figure at your stated deposit — with the rate as an input you set, not one I invent.'
					},
					{
						name: 'The viewing brief',
						text: 'One page per flat: the eight things to check in this building’s era — 1900 Altbau, 60s, Plattenbau and Neubau each have their own list — the six questions for the agent, and the two documents to request.'
					},
					{
						name: 'The rejection memory',
						text: 'After eleven viewings people forget why they said no to number four. The record prevents the slow, unnoticed lowering of standards.'
					}
				],
				stops: {
					title: 'It never tells you whether to buy, and it never touches money.',
					text: [
						'No valuation opinion, no "this is underpriced", no financing recommendation. I am not a financial adviser and neither is the software. It computes what is arithmetic and hands the decision back untouched. Where a listing looks anomalous it says anomalous and suggests asking a professional — it does not conclude.',
						'It also does not contact agents. Enquiries are drafted; you send them.'
					]
				},
				proof:
					'Viewings per hundred listings seen, which should rise sharply. Minutes from listing published to enquiry sent. Weekend hours on portals, which should go to zero.',
				refuse:
					'When the budget and the requirements cannot both be true. The system would then simply produce silence, week after week, which is a cruel way to learn it. I say it in week one instead, with the arithmetic on the table.',
				cost: 'Nothing weekly. The constraints session is the whole price.'
			},
			{
				slug: 'lawyers',
				title: 'AI for lawyers: contract review that arrives already marked up — AI coaching Berlin',
				metaDescription:
					'Intake, versioning and filing solved in week one. Then a first-pass markup in Word where every suggestion carries its reason, and the lawyer accepts or rejects each one by hand. No accept-all.',
				label: 'Lawyers',
				headline: 'The contract is already marked up when the lawyer opens it.',
				story: [
					'A two-partner commercial firm. An in-house department of five. Three solo Rechtsanwälte. A general counsel who is the entire legal function of a 300-person company. They are not behind on law. They are behind on contracts as objects — files that arrive, move, change and get lost.',
					'A contract arrives as an attachment called Vertrag_final_final_v3(2).docx. Somebody replies with tracked changes from a version that was already superseded. Three weeks later a deadline that lived only in that document passes unnoticed. Nobody can say which version was signed. The lawyer spends the evening doing archival work with a law degree.'
				],
				machinery: [
					'Intake: pulling contracts out of the mailbox the moment they arrive',
					'Naming and versioning to one convention, permanently, with the lineage kept',
					'Extraction: parties, dates, term, notice periods, governing law, liability caps, auto-renewal',
					'The deadline diary — every date in every contract, surfaced before it matters',
					'Comparing an incoming draft against the firm’s own playbook and marking the divergences',
					'Chasing the counterparty who has not returned the draft, and the internal signatory',
					'Filing to the DMS correctly, first time',
					'Answering "where is this contract, and which version is current?" instantly'
				],
				judgement: [
					'Whether a clause is acceptable',
					'What to concede',
					'Advice',
					'Signature'
				],
				builds: [
					{
						name: 'The intake',
						text: 'A monitored mailbox. Every attachment is identified, versioned, linked to its matter and its predecessor, and filed. The final_final_v3(2) problem disappears in week one, and it is the change people notice first.'
					},
					{
						name: 'The extraction sheet',
						text: 'One structured record per contract, with every field carrying a pin back to the exact page and paragraph it came from. Nothing is asserted without a location, because an unverifiable extraction is worse than no extraction — it looks like knowledge.'
					},
					{
						name: 'The playbook comparison',
						text: 'The firm’s positions, written down once, properly. This is the hardest and most valuable week of the project, because most firms have never written theirs down. Then each incoming draft is marked against it.'
					},
					{
						name: 'The first-pass markup',
						text: 'The centre of the system. A Word document with tracked changes where every single suggestion carries a reason attached as a comment: which playbook position it comes from, or which risk it addresses. The lawyer opens it in Word — their own tool, not mine — and accepts or rejects each one by hand.'
					},
					{
						name: 'The diary',
						text: 'Dates extracted into the calendar with escalating reminders. This is the piece with the highest raw value, because a missed notice period is a claim.'
					}
				],
				stops: {
					title: 'No legal judgement, ever, and no output leaves the building unread.',
					text: [
						'No advice, to anyone, at any point, internal or external. No auto-send to a counterparty. No clause redrafted without a stated reason the lawyer can evaluate. Every extraction pinned to its source so verification takes four seconds. There is no "accept all" — I was asked to build one and refused.',
						'Alongside that, the constraints that make it usable at all in Germany: DSGVO compliance with an AV-Vertrag in place, EU data residency, no training on client content, privilege preserved, a full audit trail, and a documented answer to the Kammer question "who did this and can you show me?" A legal AI system without an audit log is not deployable, whatever it can do.'
					]
				},
				proof:
					'Time from arrival to filed and named. "Where is this contract" answered in seconds. Missed deadlines: zero. And the one the partners cite — evenings not spent on version archaeology.',
				refuse:
					'Bespoke, high-value, one-off negotiation work. There is no playbook there because there is no repetition, and a first-pass markup on a genuinely novel deal is noise dressed as help.',
				cost: 'Two weeks of writing the playbook. Then eleven minutes per contract instead of forty.'
			},
			{
				slug: 'teachers',
				title: 'AI for teachers: Sundays back, no grade ever assigned — AI coaching Berlin',
				metaDescription:
					'Three difficulty variants from one worksheet, a rubric pass that locates evidence and withholds the grade, and report drafting from the teacher’s own notes. No student data leaves the room.',
				label: 'Teachers',
				headline: 'The machine finds the evidence. The teacher gives the grade.',
				story: [
					'Three Gymnasium teachers, two Grundschule, a Berufsschule instructor and two private tutors. Every one of them is doing about twelve unpaid hours a week, and almost none of those hours are teaching.',
					'Sunday. Marking 28 texts, each needing a comment that is more than "good". Then differentiating one worksheet into three levels. Then Elternbriefe. Then, twice a year, the reports — 28 Zeugnisbemerkungen written between 21:00 and midnight, each supposedly individual, all of them written when the teacher is too tired to be individual.'
				],
				machinery: [
					'Producing three difficulty variants of a worksheet from one master',
					'A rubric first pass: locating and quoting the evidence for each criterion in the student’s text',
					'Turning the teacher’s own shorthand notes into full report sentences in their register',
					'Drafting parent emails from bullet points, in the appropriate formality',
					'Generating practice sets, retrieval quizzes and vocabulary drills',
					'Building lesson scaffolds against the Rahmenlehrplan',
					'Admin: seating plans, trip letters, permission tracking, cover notes',
					'Analysing which questions a class collectively failed, and what that implies'
				],
				judgement: [
					'The grade',
					'What is going on with a particular child',
					'What to say to a worried parent',
					'What this class needs on Tuesday'
				],
				builds: [
					{
						name: 'The variant generator',
						text: 'One worksheet in, three out: scaffolded, standard, extension. Same content, different support. This is where the differentiation hours go, and it is pure machinery — you already know what scaffolding looks like, you just do not have time to type it three times.'
					},
					{
						name: 'The rubric pass',
						text: 'Your rubric, entered once. Each submission comes back with evidence located against each criterion and no grade attached. Marking time roughly halves and — the part they did not expect — the feedback gets more specific, because the evidence is already quoted and you stop writing "good structure".'
					},
					{
						name: 'The report assistant',
						text: 'You write six words about a child. It returns three sentences in the school’s register, built from your notes and nothing else. You edit every one. Nothing is generated about a child that you did not first observe.'
					},
					{
						name: 'The parent drafter',
						text: 'Bullets in, appropriate letter out. Every one is sent by the teacher, after reading.'
					},
					{
						name: 'The question analysis',
						text: 'Which items the class failed, and what the common wrong answer suggests about the misconception. This changes what gets taught on Tuesday, which is the only output on this list that actually improves teaching.'
					}
				],
				stops: {
					title: 'No grade is ever assigned by the machine, and no student data leaves the room.',
					text: [
						'The grading line is pedagogical and legal at once: in German schools the grade is the teacher’s, and in most Länder an automated one is straightforwardly not permissible. It is also just correct — the rubric pass finds evidence, and weighing evidence is teaching.',
						'The data line is harder and non-negotiable. Children’s data is Article 9-adjacent, schools have their own DSGVO regimes, and Länder differ on what may touch a US service at all. So: pseudonymisation before anything leaves the device, local processing wherever it will run locally, no names, no dates of birth, no Förderbedarf, no family circumstances. Where a school’s rules prohibit external processing entirely, we build the local version or we build nothing. And nothing is ever generated about a child’s character, potential or home life.'
					]
				},
				proof:
					'Sunday hours. Marking minutes per set. Report season measured in evenings instead of weeks. And whether the feedback students receive got more specific, which teachers can tell within one cycle.',
				refuse:
					'When the school wants this as a monitoring system — engagement scores, behaviour prediction, comparative dashboards on children. That is not what any of the eight teachers asked for. It is what management occasionally asks for afterwards, and I do not build it.',
				cost: 'An afternoon entering your rubric. It pays back in one marking set.'
			},
			{
				slug: 'coaches',
				title: 'AI for coaches and yoga teachers: mostly not AI — AI coaching Berlin',
				metaDescription:
					'Nine admin hours a week, and for three of five clients the fix was a booking system, not AI. The thin AI layer that earns its place: voice note to session note, and a searchable sequence library.',
				label: 'Coaches & yoga teachers',
				headline: 'For three of the five, the honest answer was mostly not AI.',
				story: [
					'Two yoga teachers with their own studios, a personal trainer, a business coach, a Pilates instructor. Each is a one-person company where the product is presence and the overhead is admin. They are also the group most aggressively sold to by AI tooling, and the group that needs the least of it.',
					'The hour is fragmented, which is why it is worse than it looks. Booking messages across WhatsApp, Instagram and email. The no-show who booked and vanished. Invoices at month end. The newsletter that has not gone out since March. Session notes written from memory three days late. Nine hours a week, none of it in blocks long enough to feel like work, all of it in the gaps that should have been rest.'
				],
				machinery: [
					'Booking, cancellation, waitlist and reminder',
					'Payment and invoicing, including the Kleinunternehmer §19 UStG note',
					'Chasing no-shows and lapsed clients',
					'Drafting class and workshop descriptions from a few notes',
					'Maintaining a searchable sequence and exercise library',
					'Turning a spoken two-minute recap into a written client note',
					'Assembling a newsletter from the month’s material, and the tax-time export'
				],
				judgement: [
					'What this body needs today',
					'The relationship, which is the entire business',
					'Whether someone should be pushed or held back',
					'What to teach on Thursday'
				],
				builds: [
					{
						name: 'The boring infrastructure first',
						text: 'A proper booking system with reminders and card payment removed about six of the nine hours, and I said so in week one. No AI in it at all. The AI layer that follows is thin and specific.'
					},
					{
						name: 'The voice note to session note',
						text: 'You talk for ninety seconds after the client leaves. It becomes a structured note — what was worked, what to watch, what to open with next time — filed against the client. The single most valued thing I have built for this group, because it means the note gets written at all, and arriving at a session already knowing where you left off is what people are actually paying for.'
					},
					{
						name: 'The sequence library',
						text: 'Every sequence you have ever taught, searchable by focus, level, duration and contraindication. Planning drops from forty minutes to eight, and you stop unconsciously repeating the same six classes.'
					},
					{
						name: 'The description drafter',
						text: 'Six words to a workshop description in your voice — which I build from twenty of your own past descriptions, not from a style prompt.'
					},
					{
						name: 'The reactivation list',
						text: 'Who has not booked in six weeks, with the last note attached so the message can be real rather than "we miss you!"'
					}
				],
				stops: {
					title: 'No health guidance, and no message goes out as you without you reading it.',
					text: [
						'The health line: no modification advice, no injury interpretation, no "suitable for pregnancy", no nutrition. Your insurance, your liability, your judgement. Where a client note mentions a condition, the system stores it as text and offers nothing.',
						'The voice line matters more than people expect. Your clients can tell. A generated check-in message that lands wrong costs more than the ten minutes it saved, because the product here is that somebody is actually paying attention. I draft; you send.'
					]
				},
				proof:
					'Admin hours per week, counted honestly. No-show rate — reminders alone usually halve it. Percentage of sessions with a note actually written, which starts near 30% and ends near 95%. Reactivated clients per quarter.',
				refuse:
					'Often, in this group. Three of the five came asking for an AI assistant and needed a calendar with automatic reminders. I set that up, charged for the afternoon, and told them the AI part would not pay for itself yet. Two of them have since sent me four people. Saying no is the marketing.',
				cost: 'Ninety seconds after each session. Nothing else.'
			},
			{
				slug: 'product-managers',
				title: 'AI for product managers: it never prioritises — AI coaching Berlin',
				metaDescription:
					'Feedback from every source clustered with the raw quotes kept underneath, meetings turned into tickets, duplicates found across the whole backlog. No RICE score, no ranked roadmap.',
				label: 'Product managers',
				headline: 'It never prioritises, and it never scores.',
				story: [
					'Two PMs at a mid-size SaaS company, one at a marketplace, one who is the only PM at a 40-person startup and therefore also does support, analytics and release notes. They are the group most likely to have already tried three AI tools themselves, and most likely to have abandoned all three — because the tools automated the writing, which was never the bottleneck.',
					'Two clusters break. The first is feedback: it arrives in Zendesk, in Slack, in sales calls, in app store reviews, in three different Notion pages, and reading all of it properly would take a day a week, so nobody does. The second is the status layer — the weekly update, the release notes, the stakeholder email, the ticket written up from a meeting that ended nine minutes ago.'
				],
				machinery: [
					'Pulling feedback from every source into one place, continuously',
					'Clustering it by theme and deduplicating the same complaint in eleven wordings',
					'Attaching volume, segment and revenue to each cluster',
					'Turning meeting recordings into written tickets with acceptance criteria',
					'Detecting duplicate backlog items filed four times over eighteen months',
					'Drafting release notes from merged PRs and closed tickets',
					'Drafting the weekly stakeholder update from what actually moved',
					'Monitoring named competitors’ changelogs, pricing pages and job ads'
				],
				judgement: [
					'What to build',
					'What to say no to, and to whom',
					'Whether the loudest cluster is the important one',
					'The strategy'
				],
				builds: [
					{
						name: 'The feedback funnel',
						text: 'Every source, one destination, clustered weekly with volume and segment attached. Crucially it keeps the raw quotes underneath each cluster — you read five real sentences per theme, not a summary. Summaries of user feedback are how PMs lose contact with users, and that is the failure mode of every tool in this space.'
					},
					{
						name: 'The meeting-to-ticket pass',
						text: 'Recording in, draft tickets out with problem statement, acceptance criteria and open questions marked as open. You edit and file. Saves roughly four hours a week for anyone running discovery calls.'
					},
					{
						name: 'The duplicate detector',
						text: 'Runs across the whole backlog. The first run is uncomfortable — one PM found 340 items collapsing to about 90 — and it is the single cheapest improvement available to most backlogs.'
					},
					{
						name: 'The release notes draft',
						text: 'From merged PRs, in the product’s voice, with the internal language stripped out.'
					},
					{
						name: 'The competitor watch',
						text: 'Weekly digest of what named competitors shipped, changed in pricing, or started hiring for. Hiring is the leading indicator and nobody reads it, because reading it is a chore — which is exactly the definition of machinery.'
					}
				],
				stops: {
					title: 'No RICE score, no impact estimate, no ranked roadmap.',
					text: [
						'Prioritisation is the job. A PM who accepts a machine-ranked backlog has outsourced the only part of the role that is not paperwork. Practically, the machine cannot see the commitment made to a customer in a room it was not in, or the strategic bet that makes a low-volume cluster the most important thing this quarter.',
						'It also never sends the stakeholder update. Drafted, edited, sent by the PM. Status communication is political and the machine cannot read the politics.'
					]
				},
				proof:
					'Percentage of incoming feedback actually read by a human — from about 15% to near all of it. Hours per week on status and write-up. Backlog size after deduplication. Time from discovery call to a filed ticket, which should drop from days to the same afternoon.',
				refuse:
					'When the real problem is that nobody at the company will make a decision, and the PM wants data to force one. More clustered feedback will not produce a decision. It will produce a better-evidenced stalemate.',
				cost: 'Reading five quotes per cluster per week. Which was the job anyway.'
			},
			{
				slug: 'online-shoppers',
				title: 'AI for online shopping: usually one afternoon — AI coaching Berlin',
				metaDescription:
					'Price history that exposes the fake discount, reviews filtered for what breaks, a return and warranty diary, and a subscription audit. One afternoon, and often the answer is not much.',
				label: 'Online shoppers',
				headline: 'The smallest job on this list, and the one I most often turn down.',
				story: [
					'Two people who buy a lot and lose track of it. One who researches every purchase for weeks and still feels cheated. One small reseller who buys to resell and needs to know real prices. This is the smallest-value group in the list and I include it honestly, because it is also where I most often say the answer is not much.',
					'Comparison paralysis, mostly. Eleven browser tabs, four review sites that are all affiliate-funded, a price that was different yesterday, and a nagging suspicion that the sale is not one. Plus the slow leak: subscriptions nobody cancelled, returns nobody sent back within the window, warranties nobody registered.'
				],
				machinery: [
					'Tracking a product’s price over time across sellers and flagging a real drop',
					'Detecting the fake discount — the price that rose for two weeks before the sale',
					'Filtering reviews for the ones that mention durability, sizing or failure',
					'Tracking the return window and reminding before it closes',
					'Auditing recurring charges against the bank statement',
					'Warranty and receipt storage, searchable',
					'Building the comparison table on the attributes you actually care about'
				],
				judgement: ['Whether to buy it', 'Whether it is worth the money to you', 'Taste'],
				builds: [
					{
						name: 'The price watcher',
						text: 'Named products tracked over time with a real history — so the "40% off" claim can be checked against what it cost in March. Alerts on genuine lows only.'
					},
					{
						name: 'The review filter',
						text: 'Pulls reviews, discards the obviously incentivised, and surfaces the ones that mention what breaks and when. Longevity is what people actually want to know and it is buried under five-star reviews written on day two.'
					},
					{
						name: 'The return and warranty diary',
						text: 'Every purchase gets a return-window date and a receipt file. Boring, and quietly the thing that saves the most money.'
					},
					{
						name: 'The subscription audit',
						text: 'Once, at the start: every recurring charge listed with its date and amount. In all four cases this found something they had forgotten. It is a spreadsheet and an afternoon.'
					},
					{
						name: 'The comparison table',
						text: 'For a specific decision, on your criteria, with the sources kept.'
					}
				],
				stops: {
					title: 'It does not buy anything, and it does not recommend.',
					text: [
						'No stored card, no auto-purchase, no "best pick". Partly because the consequence of a wrong autonomous purchase is real money, and partly because a recommendation engine built by me for one person is a worse version of what you can do in ten minutes with the filtered data in front of you.',
						'It also does not compile a profile. No cross-site tracking of your own behaviour, no "you also might want". Enough of that exists already.'
					]
				},
				proof:
					'Money recovered from cancelled subscriptions and returns actually made in window — in all four cases this exceeded my fee within a month. Hours per purchase decision. Whether you still feel cheated, which is the real complaint underneath.',
				refuse:
					'Often, and this is the group where I say it most. Three people have asked me for a shopping AI and I told two of them they would save more by writing down what they intend to buy that month. The compulsive-research pattern is not a tooling problem — more information makes it worse, because the research is doing an emotional job.',
				cost: 'An afternoon, once. There is no ongoing effort, and that is deliberate.'
			},
			{
				slug: 'architects',
				title: 'AI for architects: the paperwork around the design — AI coaching Berlin',
				metaDescription:
					'A drawing register, seven contractor quotes normalised into one comparison with gaps flagged, and site Protokolle written the same evening. It does not design and it never rules on compliance.',
				label: 'Architects',
				headline: 'It does not design, and it does not certify compliance.',
				story: [
					'A two-person Architekturbüro doing residential conversions, a sole practitioner mostly on Bauanträge and Umbauten, and a mid-size office where one partner handles all Ausschreibung and Vergabe. All three trained for years to design, and all three spend most of their week on the paperwork that surrounds design.',
					'For one it is the drawing register — which revision went to whom, and whether the Statiker has the current version. For another it is Angebotsvergleich: seven contractor quotes in seven formats, compared line by line in Excel over a weekend. For the third it is Baustellenprotokolle — forty site photos, an hour of notes, and a document that must be written the same evening or it will not be written at all.'
				],
				machinery: [
					'The drawing register: revisions, issue dates, recipients, current status',
					'Checking a submission package against the authority’s completeness checklist',
					'Normalising contractor quotes into one comparable structure, per position',
					'Site photos plus dictated notes into a structured, dated Protokoll',
					'Extracting open actions from Protokolle and chasing them',
					'Locating the relevant clause in DIN, LBO, GEG or the Bebauungsplan',
					'Drafting the Leistungsverzeichnis skeleton from the design',
					'Tracking Einwendungsfristen, Nachtragsfristen and Gewährleistung'
				],
				judgement: [
					'The design',
					'Whether a solution is buildable and good',
					'Whether a quote is credible, not merely cheapest',
					'Whether something complies'
				],
				builds: [
					{
						name: 'The register',
						text: 'Every drawing, every revision, who received what and when. Small, dull, and it removes an entire recurring anxiety, because "does the Statiker have rev C" becomes a two-second question with an auditable answer.'
					},
					{
						name: 'The quote normaliser',
						text: 'Seven PDFs in, one comparison out, per position, with unpriced items flagged as gaps rather than zeros — which is the actual trap in Angebotsvergleich, since the cheapest quote is very often the one that omitted something. It flags. It does not conclude.'
					},
					{
						name: 'The site protocol pipeline',
						text: 'On site you photograph and talk. That evening the Protokoll exists: dated, photo-referenced, with defects listed, responsibilities assigned and deadlines extracted into a chase list. The document that used to be written at 22:00 or not at all now needs fifteen minutes of editing.'
					},
					{
						name: 'The standards finder',
						text: 'Searches your own library of standards and the Bebauungsplan and returns the passage with its citation. It retrieves. It never paraphrases a norm, because a paraphrased norm is a liability.'
					},
					{
						name: 'The completeness check',
						text: 'Before submission, against the authority’s own list. Catches the missing Nachweis before the Bauamt does, which saves weeks.'
					}
				],
				stops: {
					title: 'No generated plans, and never the sentence "this complies".',
					text: [
						'No massing suggestions, no layout proposals. Not because it cannot produce something plan-shaped, but because the architect’s stamp carries liability and the design is the entire value of the practice. A design produced by a machine and signed by a human is the worst of both.',
						'On compliance it finds the norm and never rules on it. The sentence it is allowed to output is "§34 BauGB, paragraph 2, may apply here — check." The sentence it is never allowed to output is "this complies."'
					]
				},
				proof:
					'Protokolle written the same day: near 100%. Hours per Angebotsvergleich — a weekend becomes about two hours. Submissions rejected for incompleteness: zero. Time to answer "which revision is current".',
				refuse:
					'When a practice wants generative design tooling. That is a different profession from mine and, for a three-person office doing conversions, it solves a problem they do not have while introducing liability they cannot carry.',
				cost: 'Talking on site instead of writing on site.'
			},
			{
				slug: 'project-managers',
				title: 'AI for project managers: the diff, not the state — AI coaching Berlin',
				metaDescription:
					'Meetings turned into owned actions, chasing drafted in your own register, and a status report built from what changed. The machine never sets the RAG colour and never escalates.',
				label: 'Project managers',
				headline: 'The system lists what slipped. The person says amber.',
				story: [
					'One in construction, one in IT rollout, one running an internal transformation programme. All three describe the job the same way when pressed: "I chase people and then I write down that I chased them."',
					'Friday afternoon, mostly. The status report, assembled by hand from four systems and six conversations, for an audience that will read the RAG colour and nothing else. Plus the daily version: meetings that generate actions, actions that live in minutes, minutes nobody rereads, and therefore actions nobody does — discovered three weeks later at the worst moment.'
				],
				machinery: [
					'Turning meeting recordings or notes into a structured action list with owner and date',
					'Chasing those owners on schedule',
					'Detecting what has moved since the last report — the diff, not the state',
					'Assembling the status report from the plan, the tracker and the risk log',
					'Keeping the RAID log current and surfacing risks whose review date has passed',
					'Watching dependencies: if A slipped, listing everything downstream of A',
					'Producing the audience-appropriate version — the same week told three ways'
				],
				judgement: [
					'Whether the project is actually red',
					'What to escalate and when',
					'Which risk is real',
					'Who needs to be told what, and in what order'
				],
				builds: [
					{
						name: 'The meeting-to-actions pass',
						text: 'Recording or notes in, action list out: owner, deadline, dependency, open question, filed to the tracker. This closes the single biggest leak in project management, which is that actions decay between the room and the system.'
					},
					{
						name: 'The chaser',
						text: 'Owners get a message before their date, not after it. Drafted in your own register and sent by you, so it stays a human asking a human. All three described chasing as the most draining part of the week, precisely because it is repetitive and slightly awkward.'
					},
					{
						name: 'The diff engine',
						text: 'The status report is not a summary of the project; it is a summary of what changed. Machines are good at diffs and humans are bad at them. It produces: tasks moved, dates slipped, risks opened or closed, actions overdue. You write the two sentences that say what it means.'
					},
					{
						name: 'The dependency tracer',
						text: 'When something slips, an immediate list of what is downstream. Doing this by hand in a large plan takes an hour and therefore does not get done at the moment it matters.'
					},
					{
						name: 'The three audiences',
						text: 'One factual base, three registers — steering committee, delivery team, client. Same facts. Nothing invented for any of them.'
					}
				],
				stops: {
					title: 'It does not set the RAG status and it does not decide what to escalate.',
					text: [
						'The colour on a status report is a political and professional act. A machine that sets it either becomes a rubber stamp you override constantly — in which case it is noise — or it becomes something you defer to, which is worse.',
						'It also never sends upward. Reports to a steering committee or client are drafted and always leave under a human signature.'
					]
				},
				proof:
					'Actions from meetings that land in the tracker: from about 60% to near all. Hours to produce the weekly report — typically four down to under one. Actions overdue without anyone noticing. Time from a slip to knowing its downstream consequences.',
				refuse:
					'When a programme is failing for reasons reporting cannot touch — no mandate, no resources, a sponsor who will not decide. Better reporting there documents a failure more clearly, and occasionally people want exactly that, but they should want it knowingly.',
				cost: 'Recording meetings you already attend, and two sentences of interpretation a week.'
			},
			{
				slug: 'surveyors',
				title: 'AI for Gutachter: eight hours of report writing down to three — AI coaching Berlin',
				metaDescription:
					'Site capture with numbered photos and spoken notes, defect entries in your own tested wordings, exact norm citations and raw material kept raw. It never assesses, concludes, or values.',
				label: 'Building surveyors',
				headline: 'The machine never assesses, never concludes, and never estimates a value.',
				story: [
					'A Bausachverständiger doing Bauschäden and Beweissicherung, one specialising in Verkehrswertgutachten, and one who does mostly Wohnungsübergaben and small defect reports. All three are personally liable for every sentence they sign, and this single fact determines the entire shape of what I am allowed to build.',
					'The site work takes three hours and the writing takes eight. Photos have to be numbered, placed and cross-referenced. Defects have to be described in the standard formulation. Norms have to be cited exactly. The structure has to be the same every time because a court expects it to be. And it must be defensible line by line under cross-examination, so it is written slowly, at night, twice.'
				],
				machinery: [
					'Capturing photos on site with automatic numbering, location, timestamp and the spoken note attached',
					'Turning dictated observations into structured defect entries with photo references',
					'Maintaining the standard-formulation library — your own tested wordings',
					'Assembling the report into the fixed structure with photos placed and cross-referenced',
					'Retrieving the applicable norm text with exact citation',
					'For valuations: collecting comparables, Bodenrichtwert, and the arithmetic of the chosen method',
					'The diary of Fristen, appointments and Aktenzeichen, and the Kurzfassung from the long report'
				],
				judgement: [
					'The cause of the defect',
					'The assessment. The valuation. The conclusion',
					'What is defensible in court'
				],
				builds: [
					{
						name: 'The site capture app',
						text: 'Photograph, speak, move on. Each photo carries its number, room, timestamp and spoken note. The site visit stops producing a pile of untagged images that must be reconstructed from memory two days later — which is where most of the eight hours actually goes, and where most errors enter.'
					},
					{
						name: 'The defect structurer',
						text: 'Dictated notes become structured entries in your own standard wording, drawn from your own library, with the correct photo references already attached. You read and correct every one.'
					},
					{
						name: 'The formulation library',
						text: 'Your tested wordings, indexed by defect type. Not generated language — your language, which has already survived scrutiny. This is the distinction that makes the whole thing acceptable: retrieval of proven text, not generation of new text.'
					},
					{
						name: 'The norm retriever',
						text: 'Exact text with citation. Never a paraphrase — a paraphrased norm in a Gutachten is a gift to opposing counsel.'
					},
					{
						name: 'The comparables gatherer',
						text: 'For valuations: assembled, sourced, dated, with the arithmetic shown. The choice of method and the adjustments remain yours.'
					}
				],
				stops: {
					title: 'Raw stays raw, and the verdict is always yours.',
					text: [
						'This is the hardest stop in the entire practice and the least negotiable, because you sign and you are liable, potentially in court, personally. Cause of damage: never proposed — the system records the observation and stops. Valuation: never produced; it gathers inputs and performs stated arithmetic. Severity or classification: never assigned. Every sentence in the final document was either written by you or retrieved verbatim from your own approved library and then confirmed.',
						'One further rule surprises people: the system keeps an audit trail of what was captured when, and the raw material stays unaltered. If a report is challenged you must be able to show the original photograph, the original timestamp and the original spoken note. Machine-improved photographs, tidied notes and reconstructed timestamps would all be catastrophic.'
					]
				},
				proof:
					'Hours per report — eight down to about three, all of them now spent on assessment rather than layout. Days from site visit to delivered report. Photo referencing errors: zero. Reports per month at unchanged quality.',
				refuse:
					'Any request to draft the assessment section, however hedged. Also any request to work from another Gutachter’s formulations — the library must be your own, or the wording carries no authority when tested.',
				cost: 'Talking on site rather than writing at night.'
			},
			{
				slug: 'event-organizers',
				title: 'AI for event organisers: one spine, nothing double-entered — AI coaching Berlin',
				metaDescription:
					'One record per event that the run-of-show, briefings and budget are all views onto. Suppliers chased before it is urgent. Nothing is ever booked or committed by the machine.',
				label: 'Event organisers',
				headline: 'Nothing is booked or committed automatically.',
				story: [
					'A woman running corporate conferences, a two-person team doing weddings, and someone who organises a recurring 400-person community festival. Their work is 80% chasing and 20% taste, and the chasing is drowning the taste.',
					'The supplier follow-up. Fourteen vendors, each at a different stage — quoted, booked, deposit paid, final numbers pending, dietary requirements outstanding — all tracked in a spreadsheet that is out of date, plus a mailbox, plus WhatsApp. Every day begins by reconstructing who owes what. Then the run-of-show, rebuilt from scratch per event, and the post-event follow-ups that never get sent because by then the organiser is asleep.'
				],
				machinery: [
					'One tracker per event covering every supplier, stage, deadline and amount',
					'Chasing suppliers who have not replied, on schedule',
					'Normalising quotes into a comparable structure',
					'Building the run-of-show and producing per-role versions — caterer, AV, client',
					'RSVP handling, dietary and access requirements, seating and name badges',
					'Drafting briefing packs per supplier from the master plan',
					'Budget tracking against quotes, with variance flagged',
					'Post-event: thank-yous, feedback requests, and the assembled feedback report'
				],
				judgement: [
					'Whether the room will feel right',
					'Which supplier to trust — not which is cheapest',
					'What to cut when the budget moves',
					'The client relationship'
				],
				builds: [
					{
						name: 'The event spine',
						text: 'One record per event that everything else derives from: every supplier, contact, stage, deadline, amount and document. The run-of-show, the briefings and the budget are all views onto it, so nothing is ever updated in two places — which is where every event spreadsheet eventually dies.'
					},
					{
						name: 'The chaser',
						text: 'Outstanding items chased before they become urgent, drafted in your register, sent by you. Supplier chasing is the largest single time sink and the most mechanical.'
					},
					{
						name: 'The run-of-show generator',
						text: 'Master timeline, then per-role extracts. The caterer gets the four lines that concern them, not sixteen pages. This visibly reduces questions on the day, which is the real payoff — every question on the day costs you attention at the moment you have least of it.'
					},
					{
						name: 'The RSVP handler',
						text: 'Responses, dietary and access requirements collected and collated automatically into the caterer’s and venue’s formats.'
					},
					{
						name: 'The post-event pack',
						text: 'Thank-yous drafted, feedback requested, results assembled into a report the client actually receives. Two of the three had never once sent this, purely from exhaustion, and it turns out to be where repeat bookings come from.'
					}
				],
				stops: {
					title: 'Everything that creates an obligation is a human click.',
					text: [
						'No auto-confirmation, no auto-payment, no automatic acceptance of a quote. An event has a fixed date and irreversible commitments — a wrongly confirmed booking cannot be undone by an apology.',
						'Supplier choice is judgement dressed as comparison. The normaliser puts the quotes side by side and flags what is missing from each. It never ranks, because you are choosing on reliability and history that exist nowhere in the quote. Guest data stays minimal and is deleted after the event: dietary and access requirements are health data under DSGVO, and no event needs to keep them.'
					]
				},
				proof:
					'Hours per event on admin. Suppliers still unconfirmed one week out — should be zero. Questions from suppliers on the day. Whether the post-event pack goes out at all. Repeat bookings, eventually.',
				refuse:
					'For someone running one or two events a year, this does not pay back. The spine is worth building for six-plus events annually; below that a good template and a shared calendar is the honest answer.',
				cost: 'Keeping the spine current, which replaces keeping four things current.'
			},
			{
				slug: 'dentists',
				title: 'AI for dental practices: recalls and no-shows, nothing clinical — AI coaching Berlin',
				metaDescription:
					'Recall engine, cancellation filling and dictation-to-note with confirmation. No diagnosis, no image reading, no symptom triage — and patient data never leaves the practice system.',
				label: 'Dentists',
				headline: 'Nothing clinical. No exceptions, and I have turned down work over it.',
				story: [
					'Two Zahnarztpraxen, both owner-operated: one with three chairs, one solo with two staff. Neither wanted AI. One wanted to stop losing €4,000 a month to no-shows. The other wanted to stop writing notes at 20:00.',
					'For the first practice it is the recall list: patients due for a check-up who quietly never return, because reminding them is somebody’s afternoon and nobody has the afternoon. For the second it is documentation — notes dictated between patients, written up after closing, plus the Heil- und Kostenplan explanations that patients do not understand and therefore do not accept.'
				],
				machinery: [
					'The recall list: who is due, contacted how, with what response',
					'Appointment reminders and the confirmation loop',
					'Filling cancellations from a short-notice waiting list',
					'Turning dictation into structured chart notes in the practice’s own format',
					'The plain-language explanation of an already approved treatment plan and its costs',
					'Insurance and billing paperwork: BEMA/GOZ assembly, Kassenanträge, chasing',
					'Rota, sterilisation logs, stock levels, and the documentation the Praxisbegehung will ask for'
				],
				judgement: [
					'Diagnosis. Every part of it',
					'The treatment plan',
					'What to tell a frightened patient',
					'Whether to treat at all'
				],
				builds: [
					{
						name: 'The recall engine',
						text: 'Due patients identified and reminded on a schedule, escalating from message to letter to a call list for the front desk. In the first practice, no-shows fell by a bit over half and the recall gap closed within four months. Pure arithmetic, no clinical content whatsoever, and it paid for everything else.'
					},
					{
						name: 'The cancellation filler',
						text: 'A slot opens at 09:40; the short-notice list is offered it automatically in order. Empty chairs are the largest recoverable loss in a practice and the process is entirely mechanical.'
					},
					{
						name: 'The dictation-to-note pass',
						text: 'The dentist speaks; the note appears in the practice’s structure. They read and confirm every single one before it enters the record. Nothing enters a patient record unconfirmed, ever.'
					},
					{
						name: 'The patient explanation sheet',
						text: 'From an already approved plan, a plain-language version: what will happen, in what order, what the Kasse covers, what the patient pays, and what the alternatives are as specified by the dentist. Acceptance improved noticeably, for the unremarkable reason that people say no to things they do not understand.'
					},
					{
						name: 'The compliance folder',
						text: 'Sterilisation logs, maintenance dates and training records assembled continuously instead of panicked before an inspection.'
					}
				],
				stops: {
					title: 'No diagnosis, no image reading, no triage — and no note enters a record unconfirmed.',
					text: [
						'No suggestion of a diagnosis, no reading of an X-ray or an OPG. No treatment recommendation, no ranking of options, no prognosis. No triage of symptoms, not even a phone script that sorts urgency, because a wrongly sorted abscess is a real harm. No patient message about a clinical matter is sent without the dentist reading it.',
						'And the data rules, which are strict: patient data is Article 9 special-category data. Everything clinical stays inside the practice system, pseudonymised at any boundary it must cross, DSGVO-compliant processing with an AV-Vertrag, EU residency, no training on patient content, retention per the Aufbewahrungspflicht, and full access logging. Where a workflow cannot meet those conditions, it does not get built.'
					]
				},
				proof:
					'No-show rate. Recall gap — patients overdue and uncontacted. Empty chair hours per week. Minutes of documentation after closing. Treatment plan acceptance rate.',
				refuse:
					'Anything approaching clinical decision support, symptom triage or image reading. Both practices asked about image reading and both accepted the answer. The regulatory route for that exists — it runs through medical device certification — and it does not run through me.',
				cost: 'Confirming every note. Which is the legal requirement anyway.'
			},
			{
				slug: 'team-leaders',
				title: 'AI for team leaders: a record, never a rating — AI coaching Berlin',
				metaDescription:
					'A private record per team member, 1:1 prep sheets, feedback drafted from your own notes, and a calendar audit. No ratings, no rankings, no flight-risk prediction, no activity monitoring.',
				label: 'Team leaders',
				headline: 'It organises what you observed. It never rates anyone.',
				story: [
					'One leading eleven people in an engineering organisation, one leading six in customer operations. Both were promoted for being excellent at the job they no longer do, both were given no training, and both are quietly drowning in the administrative residue of managing people.',
					'Preparation, or rather its absence. Eleven 1:1s a fortnight, each of which should begin with "last time you said X, how did that go?" and instead begins with the leader silently trying to remember. Then the writing: feedback that needs to be specific and therefore needs evidence, evidence that lives in scattered memory, and twice a year the review cycle, which consumes two full weekends.'
				],
				machinery: [
					'Keeping a running record per person: what was discussed, agreed, and left outstanding',
					'Producing the 1:1 prep sheet — last agreements, their status, open threads',
					'Turning your rough notes into specific situation-behaviour-impact feedback',
					'Tracking delegated work and its deadlines',
					'Auditing your own calendar: how much time actually goes to the team',
					'Assembling the evidence file for a review cycle from a year of your own notes',
					'Drafting onboarding plans and documenting recurring team processes'
				],
				judgement: [
					'The assessment of a person',
					'What is really going on with someone',
					'Who gets promoted, who gets the hard conversation',
					'The relationship, which is the whole job'
				],
				builds: [
					{
						name: 'The person record',
						text: 'One private file per team member, held by you, containing what they said they would do, what happened, and your own observations with dates. Ninety seconds of dictation after each 1:1. It is the entire system and it changes management quality more than anything else I build, because specificity is the difference between feedback that lands and feedback that does not.'
					},
					{
						name: 'The prep sheet',
						text: 'Before each 1:1: last time’s agreements, their status, what is outstanding, what you said you would follow up on. Thirty seconds of reading replaces four minutes of remembering badly, and the person on the other side of the table can tell.'
					},
					{
						name: 'The feedback drafter',
						text: 'You write "Tuesday, the deploy, handled it well." It returns a specific SBI-form paragraph built from that note and nothing else. You edit and deliver it in person.'
					},
					{
						name: 'The calendar audit',
						text: 'Once a month, where the time actually went. Both leaders were shocked. One discovered 8% of their time went to their team and 44% to meetings they had never questioned attending.'
					},
					{
						name: 'The review assembler',
						text: 'At cycle time, the year’s notes per person, organised. Two weekends become an afternoon, and the reviews are dramatically more specific because they are built from contemporaneous notes rather than recency.'
					}
				],
				stops: {
					title: 'No assessment of a person is ever generated, and nobody is measured by the machine.',
					text: [
						'It never rates, never ranks, never predicts flight risk, never suggests who is underperforming, never writes the review conclusion. A performance judgement produced by software and signed by a manager is a lie that a person’s career is built on.',
						'It also never reaches into anyone’s work. No commit counts, no ticket velocity per person, no message analysis, no activity monitoring. Both leaders had access to tools that would do this and I recommended neither. Surveillance changes what a team tells you long before it changes what they do, and then you are blind in a way you cannot detect. The person records are your own notes about employees, so DSGVO rights including access apply — write nothing you would not show the person.'
					]
				},
				proof:
					'1:1s that begin with a follow-up rather than a blank: from occasional to standard. Time spent on review season. Percentage of your week actually spent with the team. And whether feedback got specific, which the team notices before you do.',
				refuse:
					'When a leader wants visibility into their team’s activity. That is a trust problem and tooling makes it worse. I say so, and I have had that conversation both times.',
				cost: 'Ninety seconds after every conversation.'
			},
			{
				slug: 'estate-agents',
				title: 'AI for estate agents: answer eight good leads, not ninety — AI coaching Berlin',
				metaDescription:
					'Enquiries acknowledged in minutes and triaged, Exposés assembled with the Pflichtangaben checked, and weekly owner updates. No valuation, no generated photos, no invented features.',
				label: 'Estate agents',
				headline: 'Ninety enquiries in 48 hours, of which eight are real buyers.',
				story: [
					'One independent Makler in Berlin, and a two-person agency doing residential sales and some rentals. They arrived from opposite directions: one drowning in leads he could not answer fast enough, one struggling to produce Exposés quickly enough to win the mandate.',
					'A listing goes live and 90 enquiries arrive in 48 hours, of which perhaps eight are qualified buyers, and the agent answers them in the order they arrived, at 22:00, badly, having lost the good ones on day one. And around that: the Exposé rebuilt from scratch each time, the viewing schedule assembled by hand, and the post-viewing follow-ups that never get sent.'
				],
				machinery: [
					'Triaging enquiries: complete, financing indicated, requirements matching the property',
					'Sending the acknowledgement and the qualification questions within minutes',
					'Scheduling viewings, including block viewings, with reminders',
					'Assembling the Exposé: photos, floor plan, Energieausweis data, Provision statement, Pflichtangaben',
					'Drafting the listing description from the property’s actual data',
					'Following up after viewings and collecting feedback',
					'Keeping the owner informed, and market snapshots of comparables and time on market'
				],
				judgement: [
					'Valuation and pricing strategy',
					'Which buyer to recommend to a seller',
					'How to advise an owner with an unrealistic expectation',
					'Negotiation'
				],
				builds: [
					{
						name: 'The lead triage',
						text: 'Every enquiry acknowledged within minutes with the qualifying questions attached. Responses sorted into qualified, incomplete and unsuitable. You then spend your attention on eight people rather than ninety. Response time is the single largest determinant of who wins the buyer, and it is entirely mechanical.'
					},
					{
						name: 'The viewing scheduler',
						text: 'Qualified leads book from real availability, reminders sent. No-shows cut by more than half, which matters because a no-show at a block viewing costs a slot a real buyer wanted.'
					},
					{
						name: 'The Exposé assembler',
						text: 'Property data in, compliant document out — with the Pflichtangaben checked, because a missing Energieausweis figure is a fineable offence under GEG and exactly the kind of thing a tired agent forgets on a Friday. It also produces the portal versions in the right formats.'
					},
					{
						name: 'The description drafter',
						text: 'From the property’s actual attributes, in your voice, with no invented features. Estate agent copy has a deserved reputation and I am not adding to it — if the machine has no data for a claim, it does not make the claim.'
					},
					{
						name: 'The owner update',
						text: 'Weekly, automatic, factual: enquiries, viewings, feedback themes. Both agents said this reduced anxious owner calls more than anything else, because most owner calls are requests for reassurance that nothing is happening without them.'
					}
				],
				stops: {
					title: 'No valuation, and nothing that misrepresents a property.',
					text: [
						'Valuation is where your professional judgement and reputation live, and it is the number the whole relationship turns on. The system can gather comparables and show time-on-market. It does not produce a price.',
						'On representation: no generated images, no removal of anything from a photograph, no "cosy" for tiny, no invented Baujahr, no omitted Pflichtangaben. Beyond the legal exposure, everything invented in an Exposé is discovered at the viewing — and then you are the person who wrote it. It also never negotiates and never communicates with a buyer about price.'
					]
				},
				proof:
					'Minutes to first response — from hours to under five. Qualified leads per listing. Viewing no-show rate. Days on market. Owner calls per week, going down.',
				refuse:
					'Any request for automated valuation or generated property photography. Also any request to auto-respond to buyers in a way that implies a human is answering. If a buyer is talking to a machine, they should be able to tell.',
				cost: 'Answering eight good enquiries instead of scrolling ninety.'
			},
			{
				slug: 'executives',
				title: 'AI for a founder-CEO: ninety seconds before every meeting — AI coaching Berlin',
				metaDescription:
					'Inbox triaged with the reasoning visible, a pre-meeting brief on what was last agreed, a commitment ledger, and board packs assembled. It never decides and never speaks as you.',
				label: 'CEO',
				headline: 'Walking into a meeting knowing what was promised last time.',
				story: [
					'The founder-CEO of a company of about 90 people. Not a corporate chief executive with a chief of staff and two assistants — someone who still personally answers investors, still gets pulled into hiring, and whose calendar has been colonised by other people’s needs. The presenting complaint was "I have no time to think", which in my experience is the only complaint CEOs actually have.',
					'Not an hour — the whole shape of the week. About 300 emails a day of which perhaps twelve matter. Meetings entered cold, with no idea what happened last time or what was promised. Board preparation eating a weekend a quarter. A reading pile that is now purely theoretical. And the deep consequence: every decision made in the eleven minutes between two meetings, on the information that happened to be in the room.'
				],
				machinery: [
					'Sorting the inbox into decide, delegate, read and ignore — with the reasoning visible',
					'The pre-meeting brief: who is this, what did we last agree, what is outstanding, what will they ask for',
					'The weekly numbers digest from the actual systems, showing changes rather than levels',
					'Board pack assembly from the same sources, in the fixed structure',
					'Summarising the reading pile with the primary sources kept one click away',
					'Tracking commitments you made, to whom, and by when',
					'Monitoring named competitors, the market and relevant regulatory movement'
				],
				judgement: ['Every decision', 'Strategy', 'People', 'What the company is for'],
				builds: [
					{
						name: 'The triage',
						text: 'Four buckets each morning, each with its reason attached. Nothing is deleted, nothing is auto-replied, nothing is hidden — the ignore pile stays visible and reviewable, because a CEO who suspects the machine is hiding something will check everything, and then the system has negative value.'
					},
					{
						name: 'The pre-meeting brief',
						text: 'The highest-value thing on this list, at 90 seconds before each meeting: last interaction, agreed actions and their status, open threads, likely ask, relevant numbers. Walking into a meeting knowing what was promised last time changes what happens in it. This alone justified the engagement.'
					},
					{
						name: 'The numbers digest',
						text: 'Weekly, from the real systems, structured as what changed: what moved, by how much, versus what was expected. Not a dashboard. A CEO does not need another dashboard; they need something that has already noticed.'
					},
					{
						name: 'The commitment ledger',
						text: 'What you said you would do, in meetings, to whom, by when. Founders make a great many promises verbally and remember perhaps half.'
					},
					{
						name: 'The board pack assembler',
						text: 'Fixed structure, current numbers, previous quarter’s commitments and their status. A weekend becomes a morning — and the morning is spent on the narrative, which is the part that was previously getting an hour at the end.'
					}
				],
				stops: {
					title: 'It never decides and it never speaks as you.',
					text: [
						'No external communication is generated in your voice — not to investors, not to staff, not publicly. A CEO whose words can be generated has a problem that is hard to reverse, because the moment it becomes known internally, every message they send is read with a question attached.',
						'It never recommends a course of action on anything strategic. It assembles what is known, marks what is not known, and stops. The temptation to build an AI advisor for a lonely founder is strong, and the thing it produces is confident, plausible and untethered from anything the machine could actually know about the company. And nothing is auto-sent from that mailbox. Everything queues.'
					]
				},
				proof:
					'Minutes per day in the inbox. Meetings entered with a brief read. Commitments kept. Hours of board preparation. And the one that was actually asked for at the start: hours per week of uninterrupted thinking time, which is measurable in a calendar and was near zero.',
				refuse:
					'Any version of an AI advisory board, strategy generator or decision recommender. Also anything that generates the CEO’s voice for external use. Both were asked for. Both refused.',
				cost: 'Fifteen minutes of reviewing the triage each morning, for the first month. After that, nothing.'
			},
			{
				slug: 'chefs',
				title: 'AI for a restaurant kitchen: food cost 34% back to 28.5% — AI coaching Berlin',
				metaDescription:
					'Invoices photographed, ingredient prices tracked, every dish recosted automatically, prep lists from booking counts and an allergen matrix confirmed by the chef. It never touches the plate.',
				label: 'Chef',
				headline: 'The machine touches money, stock and paperwork. It does not touch the plate.',
				story: [
					'Chef-patron of a small restaurant — about 40 covers, a changing menu, six staff. He came to me because his food cost had drifted from 28% to 34% over a year and he could not say why, and because he was doing paperwork until midnight after service. He had no interest whatsoever in AI and said so in the first sentence.',
					'After service: prep lists for tomorrow written by hand, supplier orders placed from memory, invoices in a pile, the rota rebuilt weekly in a notebook. And the thing that was actually costing him money — nobody knew what anything cost any more, because supplier prices had moved and the menu prices had not.'
				],
				machinery: [
					'Reading supplier invoices and tracking per-ingredient price over time',
					'Costing every dish from current prices, and recosting when a price moves',
					'Recalculating plate margin and food-cost percentage per dish and overall',
					'Scaling recipes to covers and generating the prep list from the booking count',
					'Building the order from par levels and current stock',
					'Maintaining the allergen matrix per dish, updated whenever a recipe changes',
					'Logging waste and showing where it concentrates, and building the rota against forecast covers'
				],
				judgement: [
					'Taste. All of it',
					'What goes on the menu',
					'What to do with a supplier who slipped',
					'How to lead a kitchen'
				],
				builds: [
					{
						name: 'The invoice reader',
						text: 'Photograph the invoice; ingredient prices update. Within six weeks he could see that three suppliers had raised prices by 9–14% without a conversation, and that one line was quietly responsible for most of the drift. This was the whole problem and it was solved by arithmetic, not intelligence.'
					},
					{
						name: 'The live dish costing',
						text: 'Every dish costed from current prices, with margin and food-cost percentage per plate updating on their own. Two dishes turned out to be losing money at the menu price. He changed one price and removed the other — he made both decisions, and neither was suggested by the software.'
					},
					{
						name: 'The prep list',
						text: 'Tonight’s bookings plus the menu plus the recipes produce tomorrow’s prep, scaled. Fifteen minutes of writing after service becomes a printout.'
					},
					{
						name: 'The allergen matrix',
						text: 'Per dish, updated automatically when a recipe changes. Legally required, error-prone, and exactly the kind of thing that goes out of date the moment a recipe changes on a Tuesday. Every entry is confirmed by him, because the consequence of a wrong allergen entry is not a bad review.'
					},
					{
						name: 'The waste log',
						text: 'Thirty seconds at close. After a month it showed him where the loss was, which was not where he thought.'
					}
				],
				stops: {
					title: 'No recipes, no menus, no substitutions, and no unconfirmed allergen data.',
					text: [
						'The food is the entire business. A generated dish is worthless to a chef whose reputation is his palate, and he would not have used it anyway.',
						'The allergen rule is a hard one: the matrix is generated from his recipes but every entry is confirmed by him before it is used, and any recipe change invalidates the confirmation until he re-confirms. Cross-contamination risk is a kitchen fact that lives nowhere in a recipe file, so the machine cannot know it. It also never orders — a draft order goes to him and he sends it, because a mistakenly ordered 30kg of turbot is a real week.'
					]
				},
				proof:
					'Food cost percentage — 34% back to 28.5% within a quarter, and this was almost entirely visibility. Minutes of paperwork after service, from about 70 to about 15. Waste by category. Whether the allergen matrix is current, which it now always is.',
				refuse:
					'He asked, half seriously, whether it could suggest specials from surplus stock. I built the surplus list and stopped there. Which ingredients are going over is arithmetic; what to do with them is thirty years of cooking.',
				cost: 'Photographing invoices. Thirty seconds of waste logging at close.'
			},
			{
				slug: 'volunteer-orgs',
				title: 'AI for a Verein: grant applications from two days to three hours — AI coaching Berlin',
				metaDescription:
					'A maintained core of reusable facts, reshaped into each funder’s structure, plus rota, membership and an activity log. Free tools only, and no impact claim is ever generated.',
				label: 'Volunteer organisation',
				headline: 'Free tools, boring by design, operable by whoever holds the role in two years.',
				story: [
					'A registered Verein — around 40 active volunteers, one part-time paid coordinator, funded by a mix of small grants, membership fees and donations. Nobody there has a technology budget, and the coordinator is doing the work of three people on 20 hours a week. This engagement was partly unpaid and I would do it again.',
					'The acute break is grant applications. Each funder wants the same information in a different structure — organisational description, project plan, budget, impact evidence, previous funding — and each application takes two full days that come out of the delivery work, which is the whole point of the organisation. Behind that: rota coordination across 40 volunteers, membership admin, donor thank-yous and the annual report.'
				],
				machinery: [
					'Maintaining the reusable core: mission, history, structure, staffing, finances, past projects, impact figures',
					'Reshaping that core into each funder’s required structure and word limits',
					'Tracking deadlines, reporting obligations and outcomes across applications',
					'Volunteer rota: availability, shifts, reminders, gaps',
					'Membership: joins, fees, lapses, Beitragseinzug',
					'Donor thank-yous and Spendenquittungen',
					'Collecting activity data continuously so impact reporting is not archaeology'
				],
				judgement: [
					'What the organisation is for',
					'Which funder to approach and what to promise them',
					'Every claim about impact',
					'Volunteer relationships'
				],
				builds: [
					{
						name: 'The core document',
						text: 'Every reusable fact about the organisation, written once, kept current, with sources for every number. The single highest-value thing built, and it is essentially a well-organised text file.'
					},
					{
						name: 'The application shaper',
						text: 'A funder’s questions and word limits in; a draft built from the core out. Two days becomes about three hours, and every claim traces to something in the core, so nothing is invented under deadline pressure — which is exactly when organisations invent things.'
					},
					{
						name: 'The obligations diary',
						text: 'Application deadlines, reporting deadlines, and what was promised to whom. Missed reporting is how small organisations lose funders quietly.'
					},
					{
						name: 'The rota',
						text: 'Availability in, shifts out, reminders sent, gaps visible early. This was the coordinator’s largest weekly time sink and it is pure scheduling.'
					},
					{
						name: 'The activity log',
						text: 'Thirty seconds after each session: what happened, how many people, anything notable. A year later the impact report writes itself from real records instead of from a panicked reconstruction in January.'
					}
				],
				stops: {
					title: 'No impact claim is ever generated, and no funder communication is auto-sent.',
					text: [
						'Every number in a grant application comes from the activity log or the accounts. If the log does not support it, the application says so. Overstating impact to a funder is fraud, it happens by accident under deadline pressure, and a fluent drafting tool makes it easier to do accidentally — so the shaper is built to refuse. Where evidence is missing it writes "we do not yet measure this" and leaves it for a human.',
						'Nothing is written about a beneficiary. Where the organisation works with vulnerable people, no personal data enters any external tool at all. Aggregate counts only. And everything must run on free or near-free tools and be operable by whoever holds the role in two years — anything requiring a subscription or a specialist will be abandoned.'
					]
				},
				proof:
					'Hours per grant application. Applications submitted per year — which roughly doubled, and that is the entire economic point. Reporting deadlines met. Coordinator hours spent on admin versus delivery. Whether the activity log is still being filled in after six months.',
				refuse:
					'When an organisation wants a website, a CRM and a donor platform. That is a different project with an ongoing cost they cannot carry, and it will be abandoned within a year. A well-kept spreadsheet and a documented process outlive most systems built for organisations like this.',
				cost: 'Thirty seconds after each session. Nothing financial that recurs.'
			},
			{
				slug: 'research',
				title: 'AI for research: proposals in ten days, never a generated citation — AI coaching Berlin',
				metaDescription:
					'A proposal core reshaped to each call, a supervision record, literature screening and a reproducibility spine. It never generates a citation and never summarises a paper you will cite.',
				label: 'Research',
				headline: 'Two professors went from near zero research hours to between eight and twelve.',
				story: [
					'Two quite different people who share a calendar problem. The professor: nine SWS of Lehrdeputat, between four and fifteen doctoral candidates, a Prüfungsausschuss, a Berufungskommission and the Fakultätsrat, six to ten manuscripts reviewed a year unpaid, and two or three grant proposals because the chair runs on Drittmittel. They were hired for their research and they do research on Sundays, if at all. And the doctoral candidate: year three of a WissZeitVG contract that ends in year four, 900 unread PDFs, three written chapters that no longer agree with each other, and a pipeline that cannot reproduce its own figures.',
					'For professors it is the proposal. A DFG Sachbeihilfe needs the state of the art, preliminary work, the work programme, budget justification, the CV, the publication list in the DFG’s own structure, a data management plan, an ethics statement and equal opportunity measures. Perhaps sixty per cent of that text already existed, in three previous proposals, in slightly wrong formats — and it gets rewritten anyway, over five evenings-and-weekends weeks, because finding the old version feels harder than retyping it. For candidates it is six hundred abstracts to screen, and later the worse question: which version of the script, on which version of the data, produced Figure 3?'
				],
				machinery: [
					'Screening literature: pulling everything new in a defined space and sorting by relevance to a stated question',
					'Deduplicating a reference library, repairing metadata, resolving every citation to a DOI',
					'Reformatting a publication list into DFG, ERC, NSF, Europass or a university’s house structure',
					'Maintaining the reusable proposal core and reshaping it to a call’s structure and page limits',
					'Tracking calls, Zwischenberichte, Abschlussberichte, review commitments and exam dates',
					'Keeping the supervision record for each doctoral candidate',
					'Screening appointment applications against the published formal criteria for completeness',
					'Keeping the reproducibility spine: which data, which script version, which figure'
				],
				judgement: [
					'The research question. The hypothesis. The interpretation',
					'Whether a result means anything',
					'The assessment of a person — in a reference, a viva, a Berufungsverfahren',
					'What to review, and what a review concludes'
				],
				builds: [
					{
						name: 'The proposal core',
						text: 'One maintained store: the CV in every format ever demanded, the publication list, the group description, infrastructure, the preliminary work paragraphs per research line with their figures and citations, past project outcomes, the data management plan template, the equal opportunity measures. Every item dated and sourced. About two weeks to build, mostly extraction from three old proposals, and it is the last time those paragraphs are ever written from nothing.'
					},
					{
						name: 'The call shaper',
						text: 'A call’s structure, headings and page limits go in. Out comes a skeleton with the core material already placed at roughly the right length, and every section needing original thought marked empty and labelled. Five weeks becomes about ten days, and almost all ten are spent on the work programme — which is the part that gets funded.'
					},
					{
						name: 'The supervision record',
						text: 'One private file per doctoral candidate: what was agreed, what happened, milestones against the Betreuungsvereinbarung, obstacles raised. Ninety seconds of dictation after each meeting. The piece I would install first if I could install only one — because meetings currently begin with both people trying to remember, reference letters two years later are written from a blank page, and when a candidate is quietly in trouble the record shows it four months before anyone notices in conversation.'
					},
					{
						name: 'The screening pipeline',
						text: 'For candidates: six hundred abstracts against explicit inclusion and exclusion criteria written down first. Every decision recorded with the criterion that produced it, every borderline case flagged for the human. For systematic reviews this maps onto PRISMA and produces the flow numbers as a by-product.'
					},
					{
						name: 'The reproducibility spine',
						text: 'Data version, script version, environment, output. Every figure carries the command that made it. Set up in an afternoon in year one, and worth a month in year four.'
					}
				],
				stops: {
					title: 'It never generates a citation, and never summarises a paper you will cite.',
					text: [
						'Citations come from the reference manager and are resolved by DOI. Nothing that produces prose is permitted to produce a reference, ever, under any framing. Fabricated references are the single most common and most destructive failure mode of language models in research, and they are undetectable to a tired author at 23:00 because they look exactly right. Screening a thousand abstracts to find forty papers is machinery; reading those forty is the job — so screening produces titles, abstracts and links, never a synopsis presented as sufficient.',
						'No manuscript under review touches an external service: peer review is confidential and a manuscript is unpublished work belonging to someone else. It never writes the argument, the hypothesis or the interpretation. It never ranks candidates in an appointment procedure — a Berufungsverfahren is legally reviewable, documented, and subject to the AGG; I have refused this twice. And no data is fabricated, no figure generated, and no cleaning happens silently: raw stays raw. Every engagement ends with a one-page document the client keeps, naming which tasks used a machine and which funder and publisher disclosure rules apply.'
					]
				},
				proof:
					'Days from a call’s announcement to a submitted proposal: typically five weeks down to about ten working days. Proposals submitted per year. Supervision meetings with a written record: from occasional to all of them. Figures reproducible from a single command: all of them. And the only one anybody cares about — hours per week available for research, which for both professors went from close to zero to between eight and twelve.',
				refuse:
					'When someone wants a paper generator — asked twice, phrased as "a first draft of the introduction" and "just the related work section". The related work section is where you demonstrate you have read the field. Also when a department wants per-person publication metrics, which is surveillance in a bibliometric costume. And when a doctoral candidate needs a supervisor rather than a system, which is the saddest version.',
				cost: 'Two weeks of extraction to build the core, once. Ninety seconds after each supervision meeting. And the discipline of reading the forty papers the screening found, which was always the job.'
			},
			{
				slug: 'language-exams',
				title: 'AI for IELTS, ÖSD and Goethe: practice aimed where the marks go — AI coaching Berlin',
				metaDescription:
					'A diagnostic scored per criterion, an error ledger that names the recurring mistake, and hours allocated in proportion to where marks are actually lost. It never promises a score.',
				label: 'Language exams',
				headline: 'They practise what they are already good at.',
				story: [
					'Almost nobody arrives here for the love of a language. They arrive because a document requires a number. A Syrian doctor who needs B2 plus the Fachsprachprüfung before the Approbation. A woman who needs B1 for Einbürgerung and has failed Schreiben twice. An Indian software engineer who needs IELTS 7.0 for a visa route and has 6.5 with a 6.0 in writing. A nurse whose employer is paying for the third attempt. Two things are true of nearly all of them: the deadline is external and immovable, and they have already failed at least once.',
					'Someone with Lesen 82, Hören 78, Schreiben 51 will spend four evenings a week doing reading exercises, because reading feels like progress and writing feels like failure. They buy another book of practice tests, do a whole test, score it, get a number, feel bad, and do another one. Nothing in that loop tells them which of their sentences lost marks or why. Twelve weeks later they score within two points of last time, and this is genuinely bewildering to them, because they worked very hard.'
				],
				machinery: [
					'Scoring a mock against the published criteria, per criterion, not as one number',
					'Classifying every error in writing or a recorded answer by type, and counting them across attempts',
					'Allocating practice hours in proportion to where marks are actually lost',
					'Generating targeted drills on those specific error classes, in the exam’s real format',
					'Spaced repetition seeded from their own errors rather than a generic word list',
					'Measuring speaking mechanics: speech rate, pause length and placement, filler frequency, lexical range',
					'Building the countdown schedule against real available hours',
					'Registration admin: deadlines, centre availability, ID requirements, fees'
				],
				judgement: [
					'Whether they are ready to book',
					'What an examiner will actually reward in the room',
					'The anxiety, which for a third-attempt candidate is often the largest single factor',
					'Whether this is even the right exam at the right level'
				],
				builds: [
					{
						name: 'The diagnostic',
						text: 'One full mock under real conditions, scored against the published descriptors per criterion. For IELTS Writing that means four separate results; for ÖSD or Goethe the module- and criterion-level breakdown, not a pass or fail. The output is deliberately not a band: here is each criterion, here is where the marks went, and here are your own sentences quoted next to the descriptor they fell short of. Most candidates have never once seen this. They have seen numbers.'
					},
					{
						name: 'The error ledger',
						text: 'Every error in every piece of writing and speaking, classified and counted. After three pieces the ledger says something like: sixty-three per cent of your grammar deductions come from one structure, or you have lost marks for task response in four consecutive essays and never for grammar. That sentence is worth more than a hundred practice tests, and no book can produce it because no book knows what this specific person does.'
					},
					{
						name: 'The prescription',
						text: 'Available hours allocated in proportion to where the marks are lost, not evenly and not by preference. Someone losing everything in Schreiben gets a plan that is roughly seventy per cent writing, and they hate it for about ten days. It also has a rule about the strong skill: enough maintenance to hold it, and not one hour more.'
					},
					{
						name: 'The speaking workbench',
						text: 'They record the real task under real timing. It comes back with a transcript, the mechanical measures — speech rate, where the pauses fall and how long they are, filler frequency, lexical variety, structures repeated — and the recurring errors mapped to the ledger. It measures mechanics. It does not score their personality, and it says so.'
					},
					{
						name: 'The countdown and the retake check',
						text: 'From today to the exam date against the hours they genuinely have, with a fresh mock every three weeks. Plus the modular retake question: several of these exams allow a single failed module to be retaken alone, which can mean a fraction of the fee. The system raises the question and names the office to ask — it does not assert the answer. I have watched someone re-sit an entire exam because nobody told them to ask.'
					}
				],
				stops: {
					title: 'It never promises a score, and never writes their essay.',
					text: [
						'It produces criterion-level estimates against published descriptors and labels them as estimates, every time. The failure mode here is specific and expensive: a candidate who believes a predicted 7.0 books the exam, pays the fee, books the visa appointment, and scores 6.5. So the readiness signal is deliberately conservative — three consecutive mocks above target on the weakest criterion, not on the average — and even then it is a signal to a person, not a decision.',
						'It never writes their essay and never speaks for them, not even as a "starting point". In the exam room there will be nothing, and a candidate who has been submitting improved text has been measuring the tool rather than themselves. Nothing touches a live exam — no tooling during a test, no assistance in a remote-proctored session. No official past papers are reproduced. And no immigration, visa or eligibility advice: whether a certificate is recognised for a particular Approbation route is a legal question with real consequences, and the system points at the Behörde, the Ärztekammer or a lawyer.'
					]
				},
				proof:
					'Not the overall band — bands move slowly and hide everything. Movement on the weakest criterion, which is the only number that matters and the one twelve weeks of self-study never moved. Error frequency per hundred words by class over time. The distribution of study hours, which typically starts at seventy per cent on the strong skill and should invert within a month. And whether the ledger is still being updated eight weeks in, which predicts the outcome better than any single mock.',
				refuse:
					'When the timeline cannot work — someone at a solid A2 wanting C1 in eight weeks is not going to get there, and I say the honest number of months in the first hour. When the target level is wrong, which twice meant a lower certificate or a different exam the institution also accepts. When the barrier is anxiety rather than language, because drills make that worse. And when someone wants the score without the language, which is a short conversation.',
				cost: 'One full mock every three weeks under real conditions, which is uncomfortable and non-negotiable. Ten minutes after each writing task. And about ten days of doing the practice they have been avoiding.'
			}
		]
	},
	how: {
		title: 'Three steps, no risk.',
		steps: [
			{
				title: 'Write me.',
				text: 'WhatsApp, Telegram or email — describe your work in your own words. No preparation needed.'
			},
			{
				title: 'We talk, free of charge.',
				text: "In one conversation I'll tell you honestly what AI can do for you — and what it can't. If I'm not the right person for it, I'll say so."
			},
			{
				title: 'We make it work — together.',
				text: 'Personal coaching in your own work, or hands-on guidance until it runs inside your normal week. You stay in control — nothing depends on me forever.'
			}
		],
		noPrices:
			"Every job is different, so there's no price list. After the first conversation you get a clear quote — and the conversation itself costs nothing."
	},
	principles: {
		title: 'Three promises.',
		items: [
			{
				title: 'Plain language, guaranteed.',
				text: "If I can't explain it in one sentence you understand, I haven't finished my job."
			},
			{
				title: 'Honesty about limits.',
				text: "AI is genuinely useful — and it is oversold. I'll tell you which is which for your case, even when it costs me the job."
			},
			{
				title: 'Discretion.',
				text: 'Patient files, case documents, client data — I work the way your profession requires: carefully, confidentially, under German and European privacy rules.'
			}
		]
	},
	about: {
		eyebrow: 'About me',
		title: 'The translator between you and the machines.',
		photoAlt: contact.name,
		text: "Almost nobody comes to me asking for AI. They come because one specific part of their week has become unbearable. What I actually do is sit inside that week until I can see which part of it is machinery pretending to be judgement — and that is the rarer skill, because most people who can build these systems cannot hear the problem, and most people who can hear the problem cannot build. I do both, one person at a time. I work in two registers: inside a company I own and run a production system used by a real legal department, and outside it I sit at a kitchen table with a yoga teacher or a chef. The company work teaches me what survives audits and handovers; the one-to-one work keeps me honest about how little most people actually need. So I listen to how you already work, I build or teach exactly that much, and I say so plainly when the answer is that AI will not pay off for you."
	},
	testimonials: {
		eyebrow: 'Kind words',
		// Empty on purpose. §5b UWG prohibits publishing consumer testimonials that
		// are not genuine, so nothing goes in here until a real client has approved
		// their own words. The section is skipped entirely while this is empty.
		items: []
	},
	faq: {
		eyebrow: 'Common questions',
		title: 'You might be wondering…',
		items: [
			{
				q: 'Do I need any technical knowledge?',
				a: "None at all. That's the point of hiring me — you explain your work in your own words, and everything technical stays my problem. If you can describe your week, we can work together."
			},
			{
				q: 'What does it cost?',
				a: "There's no price list, because a dentist's practice and a PhD thesis don't cost the same. After the free first conversation you get a clear, fixed quote — before any commitment. And if the honest answer is that AI won't pay off for you, I'll say that instead."
			},
			{
				q: 'Is my data safe with you?',
				a: 'Yes — and I take this promise personally. Patient files, case documents, client data: we only work with what the rules of your profession allow, under German and European privacy law. Nothing you share with me leaves the scope we agree on.'
			},
			{
				q: 'Which AI tools do you use?',
				a: "The ones that fit your work — I'm independent and don't sell any product or subscription. Sometimes the answer is one of the well-known tools; sometimes it's something small, set up around your routine. You'll never pay for something you don't need."
			},
			{
				q: 'How much of my time does this take?',
				a: "Less than you'd think. The first conversation takes under an hour. After that, most of my clients spend one or two hours a week with me while things take shape — inside their normal week, not on top of it."
			},
			{
				q: "What if it doesn't work for my case?",
				a: "Then you'll hear it from me first — in the free conversation, before you've spent anything. AI genuinely can't help everyone with everything, and pretending otherwise is how this industry loses people's trust."
			}
		]
	},
	contactSection: {
		eyebrow: 'Get in touch',
		title: 'Tell me what your week looks like.',
		lead: "I'll tell you honestly which parts you can hand over — and which you can't.",
		form: {
			name: 'Name',
			email: 'Email',
			subject: 'What is this about',
			// Lets the enquiry sort itself before it reaches you.
			subjects: [
				'Coaching for me personally',
				'A project for my practice or team',
				'A workshop or a talk',
				'Something else'
			],
			message: 'Message',
			messageHint: 'A sentence about your week is plenty. No preparation needed.',
			emailHint: 'So I can reply.',
			send: 'Send message',
			sending: 'Sending…',
			reply: 'I reply within one working day.',
			success: "Thank you — I'll get back to you within a day.",
			error: "That didn't go through. Please use WhatsApp, Telegram or email instead.",
			note: 'Prefer not to use a form? The buttons on the left reach me faster.'
		}
	},
	footer: {
		impressum: 'Impressum',
		datenschutz: 'Datenschutz'
	}
};
