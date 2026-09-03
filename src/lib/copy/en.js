// Prose mentions of the name are interpolated from contact.js so a rename stays a
// one-line change. The sentences themselves are copy — rewrite them freely.
import { contact } from './contact.js';

export default {
	lang: 'en',
	meta: {
		title: `${contact.brand} — AI that takes the repetitive work off your desk`,
		description:
			'Small AI tools for lawyers, teachers, dentists, surveyors and other professionals in Berlin. We take over the paperwork, the sorting and the chasing. Every decision stays with you. The first conversation is free.'
	},
	nav: {
		contact: 'Contact',
		menu: 'Menu'
	},
	hero: {
		availability: 'Taking on new clients',
		headline: 'The repetitive half of your week can run itself.',
		subline:
			`${contact.brand} builds small AI tools for practices, teams and self-employed professionals. We take over the paperwork, the sorting and the chasing that eat your evenings, and we never touch the part that needs your judgement. You keep every decision.`,
		button: 'Book a free first conversation',
		note: `Berlin · the work is done personally by ${contact.name}`
	},
	studio: {
		worksLabel: 'Real examples',
		capabilitiesLabel: 'How it works',
		bookLabel: 'Book a free call',
		bookTitle: 'Pick a time that suits you.',
		bookNote: 'Thirty minutes, free, no preparation needed.',
		workBack: 'All examples',
		// No count in the heading: the list grows as each profession gets written up.
		worksHeading: 'What AI already does for people like you.',
		worksIntro:
			'Every example here is something we built and ran ourselves, for real people with real deadlines. Each one shows what the tool took over, what stayed with the person, and where we drew the line. Pick the one closest to your work.',
		worksMeta:
			`Real examples of AI in daily work: contract review for lawyers, marking for teachers, recalls for dentists, house hunting, job search, research and exam preparation. Built by ${contact.brand}, AI consulting in Berlin.`,
		workName: 'Who it is for',
		workPeople: 'People helped',
		workCovers: 'What it takes over',
		workMachinery: 'What the system takes over',
		workJudgement: 'What stays with you',
		workBuilds: 'What we build',
		workStops: 'Where it stops',
		workProof: 'How you see it working',
		workRefuse: 'When we say no',
		workCost: 'What it asks of you',
		bookCta: 'Or write to us',
		close: 'Close',
		priceLabel: 'What it costs'
	},
	who: {
		eyebrow: 'Who we help',
		// Labels for roster.js. The counts live there; only the words live here.
		rosterEyebrow: 'Since 2022',
		rosterTitle: 'Who we have actually worked with.',
		rosterIntro:
			'Not a target audience. These are the professions whose working weeks we have already sat in, one person at a time. Pick the one closest to yours.',
		// Labels for the two aggregate numbers from roster.js.
		statPeople: 'People helped',
		statFields: 'Professions',
		roster: {
			'job-seekers': 'Job seekers',
			athletes: 'Athletes',
			'content-creators': 'Content creators',
			'home-buyers': 'Home buyers',
			lawyers: 'Lawyers',
			teachers: 'Teachers',
			coaches: 'Coaches & yoga teachers',
			'product-managers': 'Product managers',
			'online-shoppers': 'Online shoppers',
			architects: 'Architects',
			'project-managers': 'Project managers',
			surveyors: 'Building surveyors',
			'event-organizers': 'Event organisers',
			dentists: 'Dentists',
			'team-leaders': 'Team leaders',
			'estate-agents': 'Estate agents',
			executives: 'Executives',
			chefs: 'Chefs',
			'volunteer-orgs': 'Non-profits'
		},
		notListed: 'Your profession is not listed? It almost certainly still applies. Ask us.'
	},
	method: {
		label: 'How we decide what to build',
		title: 'How we decide what to build — AI consulting Berlin',
		metaDescription:
			'One question decides everything: which part of your week is repetitive work, and which part needs your judgement? The four tests we use, the four phases of every project, and the five reasons we say no.',
		headline: 'Which part of your week repeats, and which part needs you?',
		intro: [
			'Every person we have worked with arrived with a different job title and the same sentence: one part of my week has become unbearable. The profession changes. The shape of the problem almost never does.',
			'We do not ask what you want automated, because almost nobody knows. You know what hurts. Our job is to find the exact line between the work that repeats and the work that needs your judgement, and to build only on the repetitive side of it. Finding that line is the hard part. Building the tool is the easy part.'
		],
		testsTitle: 'How we tell one from the other.',
		machineryLabel: 'Repetitive work — all four must be true',
		machinery: [
			'It repeats. More than once a week, in roughly the same shape.',
			'It follows rules. If you had to explain how you do it, you could, in sentences rather than gestures.',
			'It is easy to check. A wrong result is obviously wrong to you within seconds.',
			'A caught mistake costs little. If the tool gets it wrong and you notice, you lose a minute, nothing more.'
		],
		judgementLabel: 'Your judgement — any one is enough',
		judgement: [
			'You are liable for it. Your name, licence or signature is on it.',
			'Your taste is the product. People pay you precisely because the view is yours.',
			'The relationship is the product. A patient, a student, a client, a reader.',
			'It is a real decision under uncertainty, not a lookup with extra steps.'
		],
		seam: 'We build up to that line and never across it. Nearly every failed AI project we have been asked to rescue failed because someone built across the line, and the person quietly stopped trusting the results.',
		refuseTitle: 'When we say no.',
		refuseIntro:
			'We say no out loud, and we keep the relationship. Saying no is most of the reason people send us their friends and colleagues.',
		refuse: [
			{
				title: 'There is too little of it.',
				text: 'Under roughly an hour a week, keeping a tool running costs more than the task itself.'
			},
			{
				title: 'Every case is different.',
				text: 'If no two instances look alike, there is nothing repetitive to take over. There is only skill, and skill is not a bottleneck to remove.'
			},
			{
				title: 'One mistake would be too expensive.',
				text: 'If a single wrong result could end a career, the tool prepares the material and does nothing else.'
			},
			{
				title: 'A simple tool already exists.',
				text: 'A calendar, a form, a shared spreadsheet, a template. We set that up and bill for the afternoon, not the quarter.'
			},
			{
				title: 'It is a decision, not a workload.',
				text: 'Some people do not need a system. They need to decide something they have been avoiding. No software fixes that.'
			}
		],
		registersTitle: 'Two kinds of experience.',
		registersText:
			'Inside a company, we run an AI system that a real legal department uses every day. Outside it, we sit at a kitchen table with a yoga teacher or a chef. The company work teaches us what survives audits, handovers and colleagues who never asked for the tool. The one-to-one work keeps us honest about how little most people actually need.',
		casesCta: 'See the real examples'
	},
	built: {
		items: [
			{
				slug: 'job-seekers',
				title: 'AI for job seekers: fewer, better applications — AI consulting Berlin',
				metaDescription:
					'A tool that reads the whole job advert, checks it against what you have really done and never exaggerates. Thirty people are in jobs found this way.',
				label: 'Job search',
				headline: 'Thirty people are in jobs found this way.',
				story: [
					'Not “job seekers”. A logistics coordinator whose warehouse closed. A woman coming back after three years with children who thinks the gap disqualifies her. A developer on a visa clock. A graduate who has sent 180 applications and has stopped opening the replies. They arrive humiliated, and the humiliation is the first thing we deal with.',
					'It is never one hour, it is every evening. The same CV goes to a hundred adverts with the company name swapped in the letter. Nothing comes back, so they send more. Volume replaces thought, thought would have replaced volume, and the loop tightens until they cannot look at it any more.'
				],
				machinery: [
					'Reading the whole advert and pulling out what it really asks for — including the requirement buried in paragraph four',
					'Checking those requirements against a fixed record of what you have genuinely done',
					'Producing the CV and letter for that one advert, evidence by evidence',
					'Keeping track of every application, its stage, and when a follow-up is due',
					'Putting together the interview prep pack from that specific advert',
					'Spotting a repost, an agency phantom advert, or a duplicate'
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
						text: 'The first session is not software. We sit down together and write down everything you have actually done, with numbers, in your own words. Usually two to four hours, and it is the hardest part. Nothing enters the system that does not come out of this bank.'
					},
					{
						name: 'The advert reader',
						text: 'Paste a link or a PDF. It returns the real requirements, split into hard and soft, what the advert reveals about the team, and a plain-language paragraph on what this job actually is.'
					},
					{
						name: 'The match check',
						text: 'Every requirement gets one of three marks: evidenced, adjacent, or absent. Absent stays absent. The tool never invents a bridge.'
					},
					{
						name: 'The application tracker',
						text: 'One row per application: role, date, source, stage, follow-up due, outcome, and what you learned. After thirty applications this is the most useful thing you own, because the patterns appear — which sectors answer, which channels are dead, which claims produce interviews.'
					},
					{
						name: 'The interview prep pack',
						text: 'Put together for each interview from the advert plus the bank: likely questions, your own examples matched to each one, and questions to ask back.'
					}
				],
				stops: {
					title: 'The tool refuses to exaggerate your experience.',
					text: [
						'This is not a setting. If a requirement is absent, it says absent and offers you the choice: skip the application, or address the gap honestly in the letter. We have been asked to soften this. We do not.',
						'It is the reason the thirty people who got jobs kept the jobs — nothing was promised in the room that could not be delivered on Monday. It also does not decide where to apply. It ranks and filters; you choose.'
					]
				},
				proof:
					'Not the number of applications sent — that goes down, usually by 70%. What we count: interviews per hundred applications, time from advert to submitted application (target: under 25 minutes), and follow-ups actually sent.',
				refuse:
					'When you do not have a job-search problem but a career decision you are avoiding — you know the field is wrong and are applying inside it anyway. No tool fixes that, and building one is a way of helping you stall.',
				cost: 'The evidence bank hurts: two to four hours of honest answers about what you have actually done. Everything after it is fifteen minutes an application.',
				quotes: [
					{
						text: 'I had sent one hundred and eighty applications and stopped opening the replies. The first session was not software at all, it was four hours of him asking me what I had actually done and writing it down, and I found that harder than any interview. After that I applied to eleven jobs in six weeks instead of forty, and three of them called me. What I noticed most was that the tool would not let me claim something I could not back up — I asked it to soften one line about a system I had barely touched and it simply said no.',
						name: 'Logistics coordinator, Brandenburg'
					},
					{
						text: 'I was out for three years with my children and I was sure the gap was the reason nobody answered. He did not tell me the gap was fine, which I appreciated, he told me it was a paragraph and we wrote the paragraph. The tracker was the thing I did not expect to matter and it mattered most, because after twenty applications I could see that one whole sector never replied and I stopped wasting my evenings there.',
						name: 'Project assistant, Berlin'
					}
				]
			},
			{
					slug: 'athletes',
					title: 'AI for athletes: a highlight reel in minutes — AI consulting Berlin',
					metaDescription: 'Match footage sorted into moments, a highlight reel in minutes instead of an evening, a profile a scout can open today, and a training log that warns but never prescribes.',
					label: 'Athletes',
					headline: 'When a scout says send me something, it should not take four days.',
					story: [
						'Semi-professionals and serious amateurs: a third-league footballer trying to be seen a level up, two competitive climbers, a handball player coming back from a knee, an esports player whose team folded, a triathlete self-coaching because the coach costs more than the entry fees. Almost all of them run their own career as an unpaid second job with worse tools than their employer has.',
						'Two hours break them, usually. The first is footage — 90 minutes of a match on a phone, from which four usable clips must be cut, and it takes an evening every week. The second is outreach: emails to clubs, scouts, agents and sponsors, each written from scratch, each unanswered, none of them tracked.'
					],
					machinery: [
						'Cutting a long recording into labelled moments — every touch, set, round, rep',
						'Building a reel from the moments you pick, at the right length, format and captions for the platform a scout actually opens',
						'Logging sessions — load, duration, how hard it felt, sleep, soreness — and showing a clear seven-day trend',
						'Keeping a one-page profile for scouts that updates itself',
						'Tracking every club, scout and sponsor contacted, with the follow-up date',
						'Turning a coach’s spoken feedback into a written note you can search'
					],
					judgement: [
						'Whether the body is right today',
						'What to do about a niggle',
						'Which club, which contract, which level',
						'Correcting technique'
					],
					builds: [
						{
							name: 'The match footage sorter',
							text: 'You upload the match or session; it comes back split into moments by type, with timestamps. Pick six moments and you get a finished reel in the right format with your name, position and date shown on screen. What was an evening becomes about eleven minutes.'
						},
						{
							name: 'The training log',
							text: 'Deliberately dull: a phone form with five fields, ten seconds after every session. It draws this week’s load against the weeks before and flags sharp jumps. It flags. It does not prescribe.'
						},
						{
							name: 'The profile page',
							text: 'One page, always current: position, age, height, season minutes, key stats, three clips, contact. The single reason players do not get seen is that when a scout asks for something, it takes four days to put together and by then the interest has cooled.'
						},
						{
							name: 'The outreach tracker',
							text: 'Built the same way as the job-search tracker, because it is the same problem in a tracksuit: a list of targets, a message built from real material, a follow-up date, and a record of what came back.'
						},
						{
							name: 'The comeback log',
							text: 'For anyone in rehab: the physio’s instructions written down once, sessions logged against them, and a weekly summary the physio can read in thirty seconds.'
						}
					],
					stops: {
						title: 'It never prescribes a session and never assesses an injury.',
						text: [
							'It shows the trend and puts the number in front of the athlete and, where there is one, the coach or physio. We have refused three requests to add a recommended load for tomorrow. The consequence of being wrong is somebody’s season, and the tool cannot feel the knee.',
							'It also does not talk to clubs. Drafts wait for the player to send them.'
						]
					},
					proof: 'Minutes from the final whistle to a reel a scout could open. Clubs contacted with a follow-up actually sent. And whether the log is still being filled in eight weeks later — that one is the real test, and it is why the form has five fields.',
					refuse: 'When the athlete’s problem is that they are not good enough at this level yet. That happens, and no highlight reel changes it. The honest version of that conversation is worth more than the system, and we have had it twice.',
					cost: 'Ten seconds after every session for the log. Twenty minutes after every match for the footage.',
					quotes: [
						{
							text: 'Every Sunday I lost an evening cutting four clips out of ninety minutes of phone footage. Now I upload it after the match and by the time I have eaten it is tagged, and I pick six moments and have a reel in about ten minutes. The part that actually changed something was the profile page — when a scout said “send me something” in August I sent it that hour, and previously that would have taken me four days by which time nobody cares.',
							name: 'Midfielder, Regionalliga'
						},
						{
							text: 'I self-coach because a coach costs more than my entry fees, so I was tracking my load in a notebook and lying to myself in it. Five fields on my phone after every session, ten seconds, and the seven-day trend is drawn for me. It flagged a jump two weeks before an event and I backed off. It never tells me what to do, it just puts the number in front of me, which turns out to be enough.',
							name: 'Triathlete, Leipzig'
						}
					]
				},
			{
				slug: 'content-creators',
				title: 'AI for content creators: your evenings back — AI consulting Berlin',
				metaDescription:
					'Footage in a folder at night; transcript, rough cut and eight clip suggestions in the morning. Fifteen minutes of picking. No AI scripts, no synthetic voice.',
				label: 'Content creators',
				headline: 'Six hours between filming and published becomes under two.',
				story: [
					'A cookery channel run by one person with 60k subscribers. A podcast duo. A German comedian posting shorts. Two educational creators. A photographer who films behind the scenes. Not media companies — people who are at the same time the talent, the editor, the publisher and the customer service desk, and who are quietly close to burning out on the three jobs that are not the one they love.',
					'Filming takes two hours, editing takes six, captions take one, and the description, tags, thumbnail and scheduling take another. They are not tired of making things. They are tired of the hours between having made a thing and it being online.'
				],
				machinery: [
					'Transcribing everything, accurately, with timestamps and who said what',
					'Removing silence, filler, false starts and the fourth attempt at a sentence',
					'Suggesting clips, ranked, with timestamps and the reason each one was picked',
					'Adding captions in your own font, position and language, plus the SRT file',
					'Reformatting one master edit into 16:9, 9:16 and 1:1, keeping you in frame',
					'Writing the description, chapters and tags from the transcript',
					'Sorting comments into questions, abuse, business enquiries and everything else',
					'Keeping the archive so “have I already covered this?” has an answer'
				],
				judgement: [
					'What is funny. What is true. What is worth saying',
					'The hook — the first three seconds',
					'Whether this goes out at all',
					'The voice'
				],
				builds: [
					{
						name: 'The overnight rough cut',
						text: 'Drop the day’s footage in a folder. Overnight it returns a transcript, a rough cut with the silence removed, and eight ranked clip suggestions with reasons attached — “laugh at 04:12”, “question answered cleanly at 19:40”.'
					},
					{
						name: 'The fifteen-minute pick',
						text: 'You sit down for fifteen minutes and choose. That is the whole of your part in the routine work, and it is deliberately the only point where you are asked to think.'
					},
					{
						name: 'The finished clips',
						text: 'Chosen clips cut, captioned in your existing style — same font, same colour, same placement, matched to what you already use — reformatted per platform, and dropped into a publish folder with description, chapters and tags drafted.'
					},
					{
						name: 'The comment sorting',
						text: 'Four buckets each morning. Business enquiries go to a real inbox. Abuse goes to a folder you never have to open unless you want evidence.'
					},
					{
						name: 'The archive',
						text: 'Every transcript searchable. This turns out to be the sleeper hit: after two years most creators cannot remember what they have said, and the archive removes the fear of accidental repetition.'
					}
				],
				stops: {
					title: 'It does not write the take and it does not write in your voice.',
					text: [
						'No AI-generated scripts, no synthetic narration, no “in the style of”. The reason is commercial as much as ethical: the voice is the entire asset. A creator whose voice can be generated has sold the only thing that was theirs. We say this in the first meeting and we have lost one engagement over it.',
						'Hooks stay human. For thumbnails we make variants of your own photograph — crops, text placement — never a synthetic image.'
					]
				},
				proof:
					'Hours between “filming ended” and “published” — typically from around six to under two. Uploads per week without more filming days. And the one they mention unprompted six months later: they have their evenings back.',
				refuse:
					'When someone is not posting because they have nothing they want to say. Faster publishing makes that worse, visibly and quickly. Twice we have told a creator that their problem comes before the edit.',
				cost: 'Fifteen minutes of picking each morning. Everything else runs while you sleep.',
				quotes: [
					{
						text: 'Filming took two hours and everything after it took six, and I was starting to resent the channel. Now I drop the footage in a folder before bed and in the morning there is a transcript, a rough cut with all the dead air gone, and eight clips it thinks are good with a reason attached to each one. He would not build anything that writes in my voice and he explained why in the first meeting, and he was right — that is the only thing I actually own.',
						name: 'Food channel, 61k subscribers'
					},
					{
						text: 'The archive is the thing nobody would put in a brochure and it is the thing I use every week. Two years of episodes and I could never remember whether we had already covered something, so we either repeated ourselves or avoided good topics out of fear. Now it is searchable and that anxiety is simply gone. The comment triage also means my co-host no longer reads the abuse folder, which was affecting her more than she admitted.',
						name: 'Podcast duo, Berlin'
					}
				]
			},
			{
				slug: 'home-buyers',
				title: 'AI for home buyers: fewer, better viewings — AI consulting Berlin',
				metaDescription:
					'New listings reach you within minutes, unsuitable flats are rejected with a written reason, and every flat shows its true cost before you book a viewing.',
				label: 'Buying a home',
				headline: 'The point is not to show you more flats. It is to show you fewer.',
				story: [
					'A couple in Berlin who have been looking for fourteen months. A family that needs a specific school catchment. A man buying his mother a flat in another city. Two people buying to renovate. They are all exhausted in the same particular way, and they have all started to lower their standards without noticing.',
					'Saturday and Sunday morning on the portals, scrolling the same forty flats. The good listings are gone within hours, so the weekend habit guarantees they only ever see what nobody wanted. And every listing they do like takes forty minutes to check — the Exposé, the Hausgeld, the Energieausweis, the commute, the true purchase cost. They do that forty-minute job maybe twice a week, badly, at midnight.'
				],
				machinery: [
					'Watching every relevant portal around the clock and catching a new listing within minutes',
					'Spotting duplicates: the same flat listed by three agents at three prices',
					'Applying your hard requirements — rooms, area, floor, lift, budget, district',
					'Reading the Exposé: Hausgeld, Wohnfläche, Baujahr, heating, Energieausweis, Erbpacht, Denkmalschutz, Sanierungsstau',
					'Working out the true entry cost — Grunderwerbsteuer, Notar and Grundbuch, Courtage — usually 10–12% above the headline price',
					'Door-to-door commute times to real addresses at real times of day',
					'Putting together the viewing brief and recording why each flat was rejected'
				],
				judgement: [
					'Whether you would be happy living there',
					'What it is worth to you',
					'How much to bid, and whether to buy at all'
				],
				builds: [
					{
						name: 'The watcher',
						text: 'Runs around the clock. New listings that meet your hard requirements arrive by message within minutes, not on Saturday. This alone changes the outcome more than everything else combined, because in Berlin the queue forms in the first two hours.'
					},
					{
						name: 'The rejecter',
						text: 'The part people find strange at first and then love. It throws listings away and tells you why: "Erbpacht until 2061 — you said no." "Hausgeld €610 for 68m² — above your ceiling." The rejected pile stays visible but folded away, so you can see nothing was thrown out carelessly.'
					},
					{
						name: 'The true-cost line',
						text: 'Every surviving listing carries one number: what you actually pay once you leave the notary, and the monthly figure at the deposit you stated. The interest rate is a figure you enter, not one we invent.'
					},
					{
						name: 'The viewing brief',
						text: 'One page per flat: the eight things to check for this building’s era — 1900 Altbau, 60s, Plattenbau and Neubau each have their own list — the six questions for the agent, and the two documents to ask for.'
					},
					{
						name: 'The rejection record',
						text: 'After eleven viewings people forget why they said no to number four. The record keeps every reason, and that stops the slow, unnoticed lowering of standards.'
					}
				],
				stops: {
					title: 'It never tells you whether to buy, and it never touches money.',
					text: [
						'No valuation, no "this is underpriced", no financing recommendation. We are not financial advisers and neither is the software. It calculates what is arithmetic and hands the decision back to you untouched. Where a listing looks odd it says odd and suggests asking a professional — it does not draw the conclusion for you.',
						'It also does not contact agents. Enquiries are drafted; you send them.'
					]
				},
				proof:
					'Viewings per hundred listings seen, which should rise sharply. Minutes from a listing going online to your enquiry being sent. Weekend hours on the portals, which should fall to zero.',
				refuse:
					'When the budget and the requirements cannot both be true. The system would then simply produce silence, week after week, which is a cruel way to find out. We say it in week one instead, with the arithmetic on the table.',
				cost: 'One session to agree your hard requirements — both of you, if there are two of you, because that is where the real disagreements surface. After that, nothing weekly. The listings come to you.',
				quotes: [
					{
						text: 'Fourteen months of Saturdays on portals, looking at the same forty flats, slowly agreeing to things we had said we would never agree to. The constraints session was two hours and it was mostly an argument between the two of us, which I now think was the actual product. After that we stopped looking at listings entirely — things arrived within minutes of going online and the ones that did not qualify were thrown away with a reason written next to them. We saw nine flats instead of forty and bought the seventh.',
						name: 'Couple, Prenzlauer Berg'
					},
					{
						text: 'What I needed was the real number, not the price in the headline. It showed me the Grunderwerbsteuer, the Notar, the Hausgeld, the whole thing, and two flats we were excited about turned out to be outside what we could carry. He was very clear that he would not tell us whether to buy and would not touch the financing, which at the time felt like a limitation and later felt like the reason I trusted the rest.',
						name: 'Family, Neukölln'
					}
				]
			},
			{
					slug: 'lawyers',
					title: 'AI for lawyers: contracts arrive marked up — AI consulting Berlin',
					metaDescription: 'Contracts filed and versioned the moment they arrive, every deadline in your diary, and each draft opens in Word with reasoned suggestions you accept or reject one by one.',
					label: 'Lawyers',
					headline: 'The contract is already marked up when you open it.',
					story: [
						'A two-partner commercial firm. An in-house department of five. Three solo Rechtsanwälte. A general counsel who is the entire legal function of a 300-person company. They are not behind on law. They are behind on contracts as objects — files that arrive, move, change and get lost.',
						'A contract arrives as an attachment called Vertrag_final_final_v3(2).docx. Somebody replies with tracked changes from a version that was already superseded. Three weeks later a deadline that lived only in that document passes unnoticed. Nobody can say which version was signed. The lawyer spends the evening doing archival work with a law degree.'
					],
					machinery: [
						'Pulling contracts out of the mailbox the moment they arrive',
						'Naming and versioning every file to one convention, permanently, with its history kept',
						'Pulling out the key facts: parties, dates, term, notice periods, governing law, liability caps, auto-renewal',
						'The deadline diary — every date in every contract, in front of you before it matters',
						'Comparing an incoming draft against the firm’s own playbook and marking where it differs',
						'Chasing the counterparty who has not returned the draft, and the internal signatory',
						'Filing to the firm’s document system correctly, first time',
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
							name: 'The monitored mailbox',
							text: 'Every attachment is identified, versioned, linked to its matter and its predecessor, and filed. The final_final_v3(2) problem disappears in week one, and it is the change people notice first.'
						},
						{
							name: 'The contract summary sheet',
							text: 'One structured record per contract. Every field carries a pin back to the exact page and paragraph it came from. Nothing is stated without a location, because a fact you cannot check is worse than no fact — it looks like knowledge.'
						},
						{
							name: 'The playbook comparison',
							text: 'The firm’s positions, written down once, properly. This is the hardest and most valuable week of the project, because most firms have never written theirs down. Then each incoming draft is marked against it.'
						},
						{
							name: 'The first-pass markup',
							text: 'The centre of the system. A Word document with tracked changes where every single suggestion carries its reason as a comment: which playbook position it comes from, or which risk it addresses. You open it in Word — your own tool, not ours — and accept or reject each one by hand.'
						},
						{
							name: 'The deadline diary',
							text: 'Every date pulled into your calendar with reminders that escalate as it approaches. This is the piece with the highest raw value, because a missed notice period is a claim.'
						}
					],
					stops: {
						title: 'No legal judgement, ever, and no output leaves the building unread.',
						text: [
							'No advice, to anyone, at any point, internal or external. No automatic sending to a counterparty. No clause redrafted without a stated reason you can evaluate. Every extracted fact pinned to its source so checking it takes four seconds. There is no "accept all" — we were asked to build one and refused.',
							'Alongside that, the conditions that make it usable at all in Germany: DSGVO compliance with an AV-Vertrag in place, data kept in the EU, no training on client content, privilege preserved, a full audit trail, and a documented answer to the Kammer question "who did this and can you show me?" A legal AI system without an audit trail is not deployable, whatever else it can do.'
						]
					},
					proof: 'Time from arrival to filed and named. "Where is this contract" answered in seconds. Missed deadlines: zero. And the one the partners cite — evenings no longer spent on version archaeology.',
					refuse: 'Bespoke, high-value, one-off negotiation work. There is no playbook there because there is no repetition, and a first-pass markup on a genuinely novel deal is noise dressed up as help.',
					cost: 'Two weeks of your time writing the playbook down with us — the positions your firm actually holds, not the ones it assumes it holds. After that, about eleven minutes per contract instead of forty, spent reading suggestions rather than hunting for versions.',
					quotes: [
						{
							text: 'The version problem alone was costing us evenings — Vertrag_final_final_v3 and nobody able to say which one was signed. He shipped only the intake and the filing in the first month and then stopped, which I found strange until I understood it was deliberate. The markup came later and every single suggestion arrives in Word with a reason attached, and I accept or reject each one myself. He was asked for an accept-all button and refused, and I would not have kept working with him if he had built it.',
							name: 'Partner, commercial practice'
						},
						{
							text: 'We are five people doing the legal work of a three-hundred-person company. What changed my week is the diary — every notice period in every contract is now a date I will be told about, and before this we had missed one and it was expensive. The extraction pins every field back to the page it came from, so checking it takes four seconds rather than trusting it. The audit trail was non-negotiable for us and it was the first thing he asked about, not the last.',
							name: 'General counsel, manufacturing, ~300 staff'
						}
					]
				},
			{
					slug: 'teachers',
					title: 'AI for teachers: Sundays back, the grade stays yours — AI consulting Berlin',
					metaDescription: 'Three levels from one worksheet, marking that finds the evidence and leaves the grade to you, report comments from your own notes. No pupil data leaves the room.',
					label: 'Teachers',
					headline: 'The tool finds the evidence. You give the grade.',
					story: [
						'Three Gymnasium teachers, two Grundschule teachers, a Berufsschule instructor and two private tutors. Every one of them puts in about twelve unpaid hours a week, and almost none of those hours are teaching.',
						'Sunday. Marking 28 texts, each needing a comment that says more than “good”. Then turning one worksheet into three difficulty levels. Then letters to parents. And twice a year the reports: 28 Zeugnisbemerkungen written between 21:00 and midnight, each supposedly individual, all of them written when the teacher is too tired to be individual.'
					],
					machinery: [
						'Producing three difficulty levels of a worksheet from one original',
						'A first marking pass against your rubric: finding and quoting the evidence for each criterion in the pupil’s text',
						'Turning your own shorthand notes into full report sentences in your school’s style',
						'Drafting parent emails from bullet points, at the right level of formality',
						'Producing practice sets, short quizzes and vocabulary drills',
						'Building lesson outlines against the Rahmenlehrplan',
						'Admin: seating plans, trip letters, permission slips, cover notes',
						'Showing which questions the whole class got wrong, and what that suggests'
					],
					judgement: [
						'The grade',
						'What is going on with a particular child',
						'What to say to a worried parent',
						'What this class needs on Tuesday'
					],
					builds: [
						{
							name: 'Three levels from one worksheet',
							text: 'One worksheet in, three out: with extra support, standard, and extension. Same content, different scaffolding. This is where the differentiation hours go, and it is pure routine: you already know what the support version looks like, you just do not have time to type it three times.'
						},
						{
							name: 'The marking pass',
							text: 'You enter your rubric once. Each submission comes back with the evidence for every criterion located and quoted, and no grade attached. Marking time roughly halves. The part teachers did not expect: the feedback gets more specific, because the evidence is already quoted and you stop writing “good structure”.'
						},
						{
							name: 'The report assistant',
							text: 'You write six words about a child. It returns three sentences in your school’s style, built from your notes and nothing else. You edit every one. Nothing is written about a child that you did not observe first.'
						},
						{
							name: 'The parent letter draft',
							text: 'Bullet points in, a suitable letter out. Every one is read and sent by you.'
						},
						{
							name: 'The class analysis',
							text: 'Which questions the class got wrong, and what the most common wrong answer suggests about the misunderstanding behind it. This changes what you teach on Tuesday, and it is the one item on this list that actually improves teaching.'
						}
					],
					stops: {
						title: 'The tool never gives a grade, and no pupil data leaves the room.',
						text: [
							'The grading line is pedagogical and legal at once: in German schools the grade belongs to the teacher, and in most Länder an automated grade is simply not permitted. It is also just right. The marking pass finds evidence, and weighing evidence is teaching.',
							'The data line is harder and not negotiable. Children’s data sits close to the most protected category under the DSGVO, schools have their own data rules, and the Länder differ on what may touch a US service at all. So: names removed before anything leaves the device, processing on your own computer wherever possible, no names, no dates of birth, no Förderbedarf, no family circumstances. Where a school’s rules prohibit external processing entirely, we build the local version or we build nothing. And nothing is ever generated about a child’s character, potential or home life.'
						]
					},
					proof: 'Sunday hours. Marking minutes per set. Report season measured in evenings instead of weeks. And whether the feedback pupils receive got more specific, which teachers can tell within one marking cycle.',
					refuse: 'When the school wants this as a monitoring system: engagement scores, behaviour prediction, dashboards comparing children. That is not what any of the eight teachers asked for. It is what management occasionally asks for afterwards, and we do not build it.',
					cost: 'One afternoon entering your rubric. It pays for itself with the first set of marking.',
					quotes: [
						{
							text: 'Sunday was marking and differentiation and by the evening I had nothing left for Monday. One worksheet now becomes three levels in the time it used to take to type the first one. The marking pass finds the evidence against my own rubric and quotes it, and then leaves the grade to me, which is both the law and the correct answer. The unexpected thing is that my feedback got more specific, because the evidence is already sitting there and I have stopped writing “good structure” twenty-eight times.',
							name: 'Gymnasium teacher, Deutsch and Geschichte'
						},
						{
							text: 'I was sceptical because everything I had been shown involved putting children’s data somewhere I could not see. He pseudonymised everything before it left my laptop and gave me a one-page document I could hand to my Schulleitung, which was the reason I was allowed to use it at all. Zeugnisbemerkungen took two weeks of evenings and now take two afternoons, and each one still starts from six words I wrote about that child myself.',
							name: 'Grundschullehrerin, Berlin-Wedding'
						}
					]
				},
			{
				slug: 'coaches',
				title: 'AI for coaches and yoga teachers: less admin — AI consulting Berlin',
				metaDescription:
					'Nine admin hours a week. For three of five, the fix was a booking system, not AI. The AI that paid off: a spoken recap that becomes your session note.',
				label: 'Coaches & yoga teachers',
				headline: 'For three of the five, the honest answer was a booking system, not AI.',
				story: [
					'Two yoga teachers with their own studios, a personal trainer, a business coach, a Pilates instructor. Each runs a one-person company where the product is presence and the overhead is admin. They are also the group AI vendors sell to hardest, and the group that needs the least of it.',
					'The admin is scattered, which is why it is worse than it looks. Booking messages across WhatsApp, Instagram and email. The no-show who booked and vanished. Invoices at month end. The newsletter that has not gone out since March. Session notes written from memory three days late. Nine hours a week, none of it in blocks long enough to feel like work, all of it in the gaps that should have been rest.'
				],
				machinery: [
					'Booking, cancellation, waitlist and reminders',
					'Payment and invoicing, including the Kleinunternehmer note under §19 UStG',
					'Following up with no-shows and clients who have drifted away',
					'Drafting class and workshop descriptions from a few notes',
					'Keeping a searchable library of your sequences and exercises',
					'Turning a two-minute spoken recap into a written client note',
					'Putting together the monthly newsletter from what you already have, and the export you need at tax time'
				],
				judgement: [
					'What this body needs today',
					'The relationship, which is the entire business',
					'Whether someone should be pushed or held back',
					'What to teach on Thursday'
				],
				builds: [
					{
						name: 'The boring basics first',
						text: 'A proper booking system with reminders and card payment took about six of the nine hours away, and we said so in week one. There is no AI in it at all. The AI part that follows is small and specific.'
					},
					{
						name: 'The spoken recap that becomes a session note',
						text: 'You talk for ninety seconds after the client leaves. The tool turns it into a structured note — what you worked on, what to watch, what to open with next time — and files it with the client. It is the most valued thing we have built for this group, because the note now gets written at all. Arriving at a session already knowing where you left off is what people are actually paying for.'
					},
					{
						name: 'The sequence library',
						text: 'Every sequence you have ever taught, searchable by focus, level, duration and contraindication. Planning drops from forty minutes to eight, and you stop repeating the same six classes without noticing.'
					},
					{
						name: 'The description drafter',
						text: 'Six words become a workshop description in your voice. We build that voice from twenty of your own past descriptions, not from a style instruction.'
					},
					{
						name: 'The reactivation list',
						text: 'Who has not booked in six weeks, with their last note attached, so the message can be real rather than "We miss you!"'
					}
				],
				stops: {
					title: 'No health guidance, and no message goes out as you without you reading it.',
					text: [
						'The health line: no advice on modifications, no interpreting an injury, no "suitable for pregnancy", no nutrition. That is your insurance, your liability, your judgement. Where a client note mentions a condition, the tool stores it as text and suggests nothing.',
						'The voice line matters more than people expect. Your clients can tell. A generated check-in message that lands wrong costs more than the ten minutes it saved, because what people pay for here is that somebody is actually paying attention. We draft; you send.'
					]
				},
				proof:
					'Admin hours per week, counted honestly. Your no-show rate — reminders alone usually halve it. The share of sessions with a note actually written, which starts near 30% and ends near 95%. Reactivated clients per quarter.',
				refuse:
					'Often, in this group. Three of the five came asking for an AI assistant and needed a calendar with automatic reminders. We set that up, charged for the afternoon, and told them the AI part would not pay for itself yet. Two of them have since sent us four people. Saying no is our marketing.',
				cost: 'Ninety seconds of talking after each session. Nothing else.',
				quotes: [
					{
						text: 'I asked him for an AI assistant and he told me I needed a booking system with automatic reminders, set it up in an afternoon, charged me for the afternoon and said the AI part would not pay for itself yet. That removed about six hours a week. The one thing he did build is the voice note after each session, ninety seconds, which becomes a written client note — so I now arrive at a session already knowing where we finished last time. I have sent him four people since.',
						name: 'Yoga studio owner, Kreuzberg'
					},
					{
						text: 'Planning used to take me forty minutes because I was reinventing sequences I had already taught. Everything I have ever taught is now searchable by focus and level and contraindication, and planning takes eight minutes, and I have stopped accidentally teaching the same six classes on rotation. He would not build anything that gives health guidance or sends messages as me, and given that my clients would notice immediately, that was the right line.',
						name: 'Personal trainer, Berlin'
					}
				]
			},
			{
				slug: 'product-managers',
				title: 'AI for product managers: all feedback read — AI consulting Berlin',
				metaDescription:
					'Feedback from every channel sorted by theme, real quotes kept. Meetings become draft tickets, duplicates get found. You still decide what to build.',
				label: 'Product managers',
				headline: 'It reads all the feedback and writes the tickets. It never decides what to build.',
				story: [
					'Two PMs at a mid-size SaaS company, one at a marketplace, one who is the only PM at a 40-person startup and therefore also does support, analytics and release notes. They are the group most likely to have already tried three AI tools themselves, and most likely to have abandoned all three — because those tools automated the writing, and writing was never the bottleneck.',
					'Two things break. The first is feedback: it arrives in Zendesk, in Slack, in sales calls, in app store reviews, in three different Notion pages, and reading all of it properly would take a day a week, so nobody does. The second is status work — the weekly update, the release notes, the stakeholder email, the ticket written up from a meeting that ended nine minutes ago.'
				],
				machinery: [
					'Collecting feedback from every source into one place, continuously',
					'Sorting it by theme and merging the same complaint in eleven wordings',
					'Attaching volume, customer segment and revenue to each theme',
					'Turning meeting recordings into draft tickets with acceptance criteria',
					'Finding backlog items that were filed four times over eighteen months',
					'Drafting release notes from merged pull requests and closed tickets',
					'Drafting the weekly stakeholder update from what actually moved',
					'Watching named competitors’ changelogs, pricing pages and job ads'
				],
				judgement: [
					'What to build',
					'What to say no to, and to whom',
					'Whether the loudest theme is the important one',
					'The strategy'
				],
				builds: [
					{
						name: 'The feedback funnel',
						text: 'Every source, one destination, sorted into themes each week with volume and segment attached. The important part: it keeps the raw quotes under each theme — you read five real sentences per theme, not a summary. Summaries of user feedback are how PMs lose contact with users, and that is where every tool in this space goes wrong.'
					},
					{
						name: 'Meeting to ticket',
						text: 'Recording in, draft tickets out, with problem statement, acceptance criteria and open questions marked as open. You edit and file. Saves roughly four hours a week for anyone running discovery calls.'
					},
					{
						name: 'The duplicate finder',
						text: 'Runs across the whole backlog. The first run is uncomfortable — one PM found 340 items collapsing to about 90 — and it is the single cheapest improvement available to most backlogs.'
					},
					{
						name: 'The release notes draft',
						text: 'From merged pull requests, in the product’s voice, with the internal language stripped out.'
					},
					{
						name: 'The competitor watch',
						text: 'A weekly digest of what named competitors shipped, changed in pricing, or started hiring for. Hiring is the earliest signal and nobody reads it, because reading it is a chore — which is exactly the kind of work a tool should take off your desk.'
					}
				],
				stops: {
					title: 'No RICE score, no impact estimate, no ranked roadmap.',
					text: [
						'Prioritisation is the job. A PM who accepts a backlog ranked by a tool has outsourced the only part of the role that is not paperwork. Practically, the tool cannot see the commitment made to a customer in a room it was not in, or the strategic bet that makes a low-volume theme the most important thing this quarter.',
						'It also never sends the stakeholder update. Drafted by the tool, edited and sent by you. Status communication is political, and the tool cannot read the politics.'
					]
				},
				proof:
					'The share of incoming feedback actually read by a human — from about 15% to nearly all of it. Hours per week on status and write-ups. Backlog size after the duplicates are gone. Time from discovery call to a filed ticket, which should drop from days to the same afternoon.',
				refuse:
					'When the real problem is that nobody at the company will make a decision, and the PM wants data to force one. More sorted feedback will not produce a decision. It will produce a better-evidenced stalemate.',
				cost: 'Reading five quotes per theme each week. Which was the job anyway.',
				quotes: [
					{
						text: 'I had already tried three AI tools and abandoned all three, because they automated the writing and writing was never my bottleneck. The feedback funnel keeps the raw quotes underneath every cluster, so I read five real sentences per theme instead of a summary, and that distinction is the whole thing. The duplicate pass took our backlog from three hundred and forty items to about ninety in one afternoon, which was humbling. It does not score or rank anything and I would not use it if it did.',
						name: 'Product manager, B2B SaaS'
					},
					{
						text: 'I am the only PM at a forty-person company so I also do support and release notes. Meetings now become tickets with acceptance criteria the same afternoon instead of three days later when I have forgotten the nuance. The competitor watch reads their job ads, which I would never do myself because it is boring, and it is the earliest signal there is. Roughly four hours a week back.',
						name: 'Product manager, marketplace startup'
					}
				]
			},
			{
					slug: 'online-shoppers',
					title: 'AI for online shoppers: spot the fake discount — AI consulting Berlin',
					metaDescription: 'A price history that exposes fake discounts, reviews filtered for what breaks, a return-window diary and a subscription check. Usually one afternoon, and often not much.',
					label: 'Online shoppers',
					headline: 'The smallest job on this list, and the one we most often turn down.',
					story: [
						'Two people who buy a lot and lose track of it. One who researches every purchase for weeks and still feels cheated. One small reseller who buys to resell and needs to know real prices. This is the group with the least to gain on the list, and we include it honestly, because it is also where we most often say the answer is not much.',
						'Mostly it is comparison paralysis. Eleven browser tabs, four review sites that are all paid by commission, a price that was different yesterday, and the nagging suspicion that the sale is not one. Then the slow leak: subscriptions nobody cancelled, returns nobody sent back in time, warranties nobody registered.'
					],
					machinery: [
						'Following a product’s price over time and across sellers, and flagging a real drop',
						'Spotting the fake discount — the price that went up for two weeks before the sale',
						'Filtering reviews for the ones that mention durability, sizing or failure',
						'Keeping track of the return window and reminding you before it closes',
						'Checking recurring charges against your bank statement',
						'Storing warranties and receipts so you can find them',
						'Building a comparison table on the features you actually care about'
					],
					judgement: [
						'Whether to buy it',
						'Whether it is worth the money to you',
						'Taste'
					],
					builds: [
						{
							name: 'The price watcher',
							text: 'Named products followed over time with a real history — so a "40% off" claim can be checked against what it cost in March. You get an alert on genuine lows only.'
						},
						{
							name: 'The review filter',
							text: 'Pulls in the reviews, drops the obviously paid-for ones, and brings up those that say what breaks and when. How long something lasts is what people actually want to know, and it is buried under five-star reviews written on day two.'
						},
						{
							name: 'The return and warranty diary',
							text: 'Every purchase gets a return-window date and a receipt file. Boring, and quietly the thing that saves the most money.'
						},
						{
							name: 'The subscription check',
							text: 'Once, at the start: every recurring charge listed with its date and amount. In all four cases this found something they had forgotten. It is a spreadsheet and an afternoon.'
						},
						{
							name: 'The comparison table',
							text: 'For one specific decision, on your criteria, with the sources kept.'
						}
					],
					stops: {
						title: 'It does not buy anything, and it does not recommend.',
						text: [
							'No stored card, no automatic purchase, no "best pick". Partly because a wrong purchase made on its own costs real money, and partly because a recommendation tool built by us for one person is a worse version of what you can do in ten minutes with the filtered data in front of you.',
							'It also does not build a profile of you. No tracking of your own behaviour across sites, no "you might also want". Enough of that exists already.'
						]
					},
					proof: 'Money recovered from cancelled subscriptions and returns actually made in time — in all four cases this exceeded our fee within a month. Hours per purchase decision. Whether you still feel cheated, which is the real complaint underneath.',
					refuse: 'Often, and this is the group where we say it most. Three people have asked us for a shopping AI, and we told two of them they would save more by writing down what they intend to buy that month. The habit of researching compulsively is not a tool problem — more information makes it worse, because the research is doing an emotional job.',
					cost: 'One afternoon, once. There is no ongoing effort, and that is deliberate.',
					quotes: [
						{
							text: 'He talked me out of most of what I asked for, which is not what I expected from someone selling a service. The subscription audit was one hour and found three things I had been paying for since 2022. The return-window diary is boring and has saved me more than anything clever would have. He told me plainly that a shopping AI would make my research habit worse rather than better, and he was right about that too.',
							name: 'Private client, Berlin'
						},
						{
							text: 'I buy to resell so I need to know what things actually cost over time, not what a banner says today. The price history let me check a “forty per cent off” claim against what it cost in March, and it was not forty per cent off. The review filter surfaces the people who mention what broke and when, which is the only thing I care about. One afternoon of setup, no ongoing work, which he was quite insistent about.',
							name: 'Small reseller'
						}
					]
				},
			{
					slug: 'architects',
					title: 'AI for architects: paperwork done the same day — AI consulting Berlin',
					metaDescription: 'A drawing register that knows the current revision, seven contractor quotes in one comparison with gaps flagged, and site Protokolle done the same evening. It never designs.',
					label: 'Architects',
					headline: 'The paperwork gets done the same day. The design and the compliance call stay with you.',
					story: [
						'A two-person Architekturbüro doing residential conversions, a sole practitioner mostly on Bauanträge and Umbauten, and a mid-size office where one partner handles all Ausschreibung and Vergabe. All three trained for years to design, and all three spend most of their week on the paperwork that surrounds design.',
						'For one it is the drawing register: which revision went to whom, and whether the Statiker has the current version. For another it is the Angebotsvergleich: seven contractor quotes in seven formats, compared line by line in Excel over a weekend. For the third it is the Baustellenprotokoll: forty site photos, an hour of notes, and a document that has to be written the same evening or it will not be written at all.'
					],
					machinery: [
						'The drawing register: which revision went to whom, when, and which one is current',
						'Checking a submission package against the authority’s own completeness checklist',
						'Putting contractor quotes into one comparable table, position by position',
						'Turning site photos and dictated notes into a structured, dated Protokoll',
						'Pulling open actions out of Protokolle and reminding the people responsible',
						'Finding the relevant passage in DIN, LBO, GEG or the Bebauungsplan',
						'Drafting the skeleton of the Leistungsverzeichnis from the design',
						'Keeping track of Einwendungsfristen, Nachtragsfristen and Gewährleistung'
					],
					judgement: [
						'The design',
						'Whether a solution is buildable and good',
						'Whether a quote is credible, not merely the cheapest',
						'Whether something complies'
					],
					builds: [
						{
							name: 'The drawing register',
							text: 'Every drawing, every revision, who received what and when. Small and unglamorous, and it removes a recurring worry: “does the Statiker have rev C” becomes a two-second question with an answer you can show.'
						},
						{
							name: 'The quote comparison',
							text: 'Seven PDFs in, one comparison out, position by position. Unpriced items are flagged as gaps, not counted as zeros. That is the real trap in an Angebotsvergleich: the cheapest quote is very often the one that left something out. The tool flags. It does not decide.'
						},
						{
							name: 'The same-evening site Protokoll',
							text: 'On site you photograph and talk. That evening the Protokoll exists: dated, with photos referenced, defects listed, responsibilities assigned and deadlines pulled into a reminder list. The document that used to be written at 22:00 or not at all now needs fifteen minutes of editing.'
						},
						{
							name: 'The standards finder',
							text: 'Searches your own library of standards and the Bebauungsplan and returns the passage with its citation. It looks things up. It never paraphrases a norm, because a paraphrased norm is a liability.'
						},
						{
							name: 'The completeness check',
							text: 'Before submission, against the authority’s own list. It catches the missing Nachweis before the Bauamt does, which saves weeks.'
						}
					],
					stops: {
						title: 'No generated plans, and never the sentence “this complies”.',
						text: [
							'No massing suggestions, no layout proposals. Not because software cannot produce something plan-shaped, but because the architect’s stamp carries liability and the design is the entire value of the practice. A design produced by software and signed by a human is the worst of both.',
							'On compliance it finds the norm and never rules on it. The sentence it may output is “§34 BauGB, paragraph 2, may apply here — check.” The sentence it may never output is “this complies.”'
						]
					},
					proof: 'Protokolle written the same day: near 100%. Hours per Angebotsvergleich: a weekend becomes about two hours. Submissions rejected for incompleteness: zero. Time to answer “which revision is current”.',
					refuse: 'When a practice wants generative design tools. That is a different profession from ours and, for a three-person office doing conversions, it solves a problem they do not have while adding liability they cannot carry.',
					cost: 'Talking on site instead of writing at night. You photograph and dictate while you are there, and you spend fifteen minutes that evening editing the Protokoll instead of two hours writing it.',
					quotes: [
						{
							text: 'The Protokoll used to be written at ten at night or not at all, and “not at all” was winning. I photograph and talk on site now, and the same evening the document exists with the photos referenced and the deadlines pulled out. Fifteen minutes of editing instead of two hours of writing. He adopted our folder structure rather than imposing his own, which sounds small and meant we actually kept using it.',
							name: 'Architekt, sole practice'
						},
						{
							text: 'Angebotsvergleich was a weekend. Seven quotes in seven formats and I did it in Excel by hand and I was always afraid of missing something. It normalises them by position and flags the unpriced items as gaps rather than as zeros, which is the actual trap — the cheapest quote is usually the one that left something out. It flags and it does not conclude. Two hours now, and the judgement is still mine.',
							name: 'Partner, Architekturbüro, ~14 staff'
						}
					]
				},
			{
					slug: 'project-managers',
					title: 'AI for project managers: actions that get done — AI consulting Berlin',
					metaDescription: 'Meetings turned into actions with a name and a date, reminders drafted in your own words, and a status report built from what changed. It never sets the traffic-light colour.',
					label: 'Project managers',
					headline: 'The system lists what slipped. You decide whether the project is red, amber or green.',
					story: [
						'One in construction, one in an IT rollout, one running an internal transformation programme. All three describe the job the same way when pressed: “I chase people and then I write down that I chased them.”',
						'Friday afternoon, mostly. The status report, assembled by hand from four systems and six conversations, for an audience that will read the RAG status, the red/amber/green traffic light, and nothing else. Plus the daily version: meetings that generate actions, actions that live in minutes, minutes nobody rereads, and therefore actions nobody does. Discovered three weeks later, at the worst moment.'
					],
					machinery: [
						'Turning meeting recordings or notes into an action list with an owner and a date on every item',
						'Reminding those owners before their date comes round',
						'Spotting what has moved since the last report, instead of describing the whole project again',
						'Assembling the status report from the plan, the action tracker and the risk list',
						'Keeping the risk and issue list current and flagging risks whose review date has passed',
						'Watching dependencies: if A slips, listing everything that depends on A',
						'Writing the same week for three audiences, without inventing anything for any of them'
					],
					judgement: [
						'Whether the project is actually red',
						'What to escalate and when',
						'Which risk is real',
						'Who needs to be told what, and in what order'
					],
					builds: [
						{
							name: 'Meeting to action list',
							text: 'Recording or notes in, action list out: owner, deadline, dependency, open question, filed in your tracker. This closes the single biggest leak in project management: actions that are agreed in the room and lost before they reach the system.'
						},
						{
							name: 'The reminder',
							text: 'Owners get a message before their date, not after it. It is drafted in your own words and sent by you, so it stays a person asking a person. All three described chasing as the most draining part of the week, precisely because it is repetitive and slightly awkward.'
						},
						{
							name: 'The what-changed report',
							text: 'The status report is not a summary of the project. It is a summary of what changed. Software is good at spotting changes and people are bad at it. It lists: tasks moved, dates slipped, risks opened or closed, actions overdue. You write the two sentences that say what it means.'
						},
						{
							name: 'The knock-on list',
							text: 'When something slips, you get an immediate list of everything that depends on it. Doing this by hand in a large plan takes an hour, so it does not get done at the moment it matters.'
						},
						{
							name: 'The three audiences',
							text: 'One set of facts, three versions: steering committee, delivery team, client. Same facts in each. Nothing invented for any of them.'
						}
					],
					stops: {
						title: 'It does not set the traffic-light colour and it does not decide what to escalate.',
						text: [
							'The colour on a status report is a political and professional act. A tool that sets it either becomes a rubber stamp you override constantly, in which case it is noise, or it becomes something you defer to, which is worse.',
							'It also never sends anything upward. Reports to a steering committee or a client are drafted by the tool and always leave under your signature.'
						]
					},
					proof: 'Actions from meetings that land in the tracker: from about 60% to near all. Hours to produce the weekly report: typically four down to under one. Actions overdue without anyone noticing. Time from a slip to knowing what it affects downstream.',
					refuse: 'When a programme is failing for reasons reporting cannot touch: no mandate, no resources, a sponsor who will not decide. Better reporting there only documents the failure more clearly. Occasionally people want exactly that, but they should want it knowingly.',
					cost: 'Recording the meetings you already attend, sending the reminders yourself, and writing two sentences of interpretation a week.',
					quotes: [
						{
							text: 'My job description could have been “I chase people and then I write down that I chased them.” Actions from meetings now land in the tracker instead of dying in the minutes, which was the single biggest leak I had. The status report is built from what changed rather than from the whole plan, so it takes me under an hour and I spend that hour on the two sentences that say what it means. It does not set the RAG colour, and it should not.',
							name: 'Project manager, IT rollout'
						},
						{
							text: 'The dependency tracer is the one I would keep if I could keep one thing. When something slips I get the downstream list immediately, and doing that by hand took an hour so it never happened at the moment it mattered. Three audiences from one factual base also stopped me writing the same week three times on a Friday afternoon. Nothing goes to the steering committee without me sending it, which was a condition of mine and turned out to be a condition of his as well.',
							name: 'Bauleiter / Projektsteuerung, infrastructure'
						}
					]
				},
			{
					slug: 'surveyors',
					title: 'AI for Gutachter: report writing, 8 hours to 3 — AI consulting Berlin',
					metaDescription: 'Numbered site photos with your spoken notes attached, defect entries in your own tested wordings, exact norm citations, raw material kept untouched. It never assesses or values.',
					label: 'Building surveyors',
					headline: 'Eight hours of report writing become three. The assessment stays yours.',
					story: [
						'A Bausachverständiger doing Bauschäden and Beweissicherung, one specialising in Verkehrswertgutachten, and one who does mostly Wohnungsübergaben and small defect reports. All three are personally liable for every sentence they sign, and that single fact determines the entire shape of what we are allowed to build.',
						'The site work takes three hours and the writing takes eight. Photos have to be numbered, placed and cross-referenced. Defects have to be described in the standard wording. Norms have to be cited exactly. The structure has to be the same every time, because a court expects it to be. And every line has to hold up under cross-examination, so it is written slowly, at night, twice.'
					],
					machinery: [
						'Capturing photos on site with the number, location, time and your spoken note attached automatically',
						'Turning dictated observations into structured defect entries with the photo references in place',
						'Keeping your library of tested standard wordings in order',
						'Assembling the report in your fixed structure, with photos placed and cross-referenced',
						'Looking up the applicable norm text with its exact citation',
						'For valuations: collecting comparables and the Bodenrichtwert, and doing the arithmetic of the method you chose',
						'Keeping the diary of Fristen, appointments and Aktenzeichen, and producing the Kurzfassung from the long report'
					],
					judgement: [
						'The cause of the defect',
						'The assessment. The valuation. The conclusion',
						'What is defensible in court'
					],
					builds: [
						{
							name: 'The site capture app',
							text: 'Photograph, speak, move on. Each photo carries its number, room, time and spoken note. The site visit no longer produces a pile of unlabelled images that has to be reconstructed from memory two days later. That is where most of the eight hours actually goes, and where most errors creep in.'
						},
						{
							name: 'The defect entries',
							text: 'Dictated notes become structured entries in your own standard wording, drawn from your own library, with the correct photo references already attached. You read and correct every one.'
						},
						{
							name: 'The wording library',
							text: 'Your tested wordings, sorted by defect type. Not generated language: your language, which has already survived scrutiny. This distinction is what makes the whole thing acceptable. The tool retrieves proven text; it does not write new text.'
						},
						{
							name: 'The norm lookup',
							text: 'The exact text with its citation. Never a paraphrase, because a paraphrased norm in a Gutachten is a gift to opposing counsel.'
						},
						{
							name: 'The comparables list',
							text: 'For valuations: comparables assembled, sourced and dated, with the arithmetic shown step by step. The choice of method and the adjustments remain yours.'
						}
					],
					stops: {
						title: 'Raw stays raw, and the verdict is always yours.',
						text: [
							'This is the hardest stop in the entire practice and the least negotiable, because you sign and you are liable, potentially in court, personally. Cause of damage: never proposed. The system records the observation and stops. Valuation: never produced. It gathers the inputs and performs the arithmetic you specified. Severity or classification: never assigned. Every sentence in the final document was either written by you or taken word for word from your own approved library and then confirmed by you.',
							'One further rule surprises people: the system keeps a record of what was captured when, and the raw material stays unaltered. If a report is challenged you must be able to show the original photograph, the original timestamp and the original spoken note. Digitally improved photographs, tidied notes and reconstructed timestamps would all be catastrophic.'
						]
					},
					proof: 'Hours per report: eight down to about three, all of them now spent on assessment rather than layout. Days from site visit to delivered report. Photo referencing errors: zero. Reports per month at unchanged quality.',
					refuse: 'Any request to draft the assessment section, however carefully hedged. Also any request to work from another Gutachter’s wordings. The library must be your own, or the wording carries no authority when it is tested.',
					cost: 'Talking on site rather than writing at night, and reading and confirming every entry before it goes into the report.',
					quotes: [
						{
							text: 'Eight hours of writing for three hours of site work, and most of the eight was photographs, numbering, and cross-referencing. I photograph and speak on site now and each image carries its number, its room and my note. The report assembles itself into our fixed structure and I spend my time on the assessment, which is the only part that is actually mine. He would not let the system propose a cause of damage under any framing, and since I sign these and I am liable personally, that was the answer I needed to hear.',
							name: 'Bausachverständiger'
						},
						{
							text: 'The rule that convinced me was that the raw material stays untouched. Original photograph, original timestamp, original spoken note, all preserved, because if a report is challenged I have to be able to produce them. The formulation library is my own wording, extracted from my own past reports, not language invented by a machine — that distinction is the whole reason this is usable in my field. Three hours per report instead of eight.',
							name: 'Sachverständige für Verkehrswertermittlung'
						}
					]
				},
			{
					slug: 'event-organizers',
					title: 'AI for event organisers: one plan, less chasing — AI consulting Berlin',
					metaDescription: 'One record per event that feeds the run-of-show, briefings and budget. Suppliers reminded before it gets urgent. Nothing is booked or confirmed without your click.',
					label: 'Event organisers',
					headline: 'Nothing is booked or committed automatically.',
					story: [
						'A woman who runs corporate conferences, a two-person team that plans weddings, and someone who organises a recurring community festival for 400 people. Their work is 80% chasing and 20% taste, and the chasing is drowning the taste.',
						'Chasing suppliers, mostly. Fourteen vendors, each at a different stage — quoted, booked, deposit paid, final numbers pending, dietary requirements outstanding — tracked in a spreadsheet that is out of date, plus a mailbox, plus WhatsApp. Every day begins with working out who owes what. Then the run-of-show, rebuilt from scratch for every event, and the follow-ups after the event that never get sent because by then the organiser is asleep.'
					],
					machinery: [
						'One overview per event: every supplier, their stage, deadline and amount',
						'Reminders to suppliers who have not replied, sent on schedule',
						'Quotes laid out side by side so they can actually be compared',
						'The run-of-show, plus a short version for each role — caterer, AV, client',
						'RSVPs, dietary and access requirements, seating plan and name badges',
						'Briefing packs for each supplier, drawn from the master plan',
						'Budget tracked against the quotes, with deviations flagged',
						'After the event: thank-yous, feedback requests and the finished feedback report'
					],
					judgement: [
						'Whether the room will feel right',
						'Which supplier to trust — not which is cheapest',
						'What to cut when the budget moves',
						'The client relationship'
					],
					builds: [
						{
							name: 'One record per event',
							text: 'One record per event that everything else is drawn from: every supplier, contact, stage, deadline, amount and document. The run-of-show, the briefings and the budget are all built from it, so nothing is ever updated in two places — which is where every event spreadsheet eventually dies.'
						},
						{
							name: 'Supplier reminders',
							text: 'Open items are chased before they become urgent. The reminder is drafted in your tone; you send it. Chasing suppliers is the biggest single time sink and the most repetitive part of the job.'
						},
						{
							name: 'Run-of-show and role sheets',
							text: 'One master timeline, then a short extract for each role. The caterer gets the four lines that concern them, not sixteen pages. Fewer questions on the day is the real payoff — every question on the day costs you attention at the moment you have least of it.'
						},
						{
							name: 'Guest responses',
							text: 'RSVPs, dietary and access requirements collected and put into the caterer’s and the venue’s formats automatically.'
						},
						{
							name: 'The post-event pack',
							text: 'Thank-yous drafted, feedback requested, results assembled into a report the client actually receives. Two of the three had never once sent this, purely from exhaustion — and it turns out to be where repeat bookings come from.'
						}
					],
					stops: {
						title: 'Everything that creates an obligation is your click.',
						text: [
							'No automatic confirmation, no automatic payment, no automatic acceptance of a quote. An event has a fixed date and commitments that cannot be undone — a wrongly confirmed booking is not fixed by an apology.',
							'Choosing a supplier is a decision, not a comparison. The tool puts the quotes side by side and flags what is missing from each. It never ranks them, because you choose on reliability and history, and neither is in the quote. Guest data stays minimal and is deleted after the event: dietary and access requirements are health data under the DSGVO, and no event needs to keep them.'
						]
					},
					proof: 'Hours of admin per event. Suppliers still unconfirmed one week out — should be zero. Questions from suppliers on the day. Whether the post-event pack goes out at all. Repeat bookings, eventually.',
					refuse: 'For someone running one or two events a year, this does not pay back. One record per event is worth building from about six events a year; below that, a good template and a shared calendar is the honest answer.',
					cost: 'Keeping one record current — instead of keeping four things current.',
					quotes: [
						{
							text: 'Every morning began by reconstructing who owed me what across a spreadsheet, a mailbox and WhatsApp. There is now one record per event and the run-of-show, the briefings and the budget are all views onto it, so nothing is ever updated twice. The caterer gets their four lines instead of sixteen pages, and the number of questions on the day dropped noticeably, which matters because that is when I have the least attention to spare. Nothing gets booked or confirmed without me clicking.',
							name: 'Corporate events organiser'
						},
						{
							text: 'We had never once sent a post-event pack, purely from exhaustion, and it turns out that is where repeat bookings come from. Thank-yous drafted, feedback collected, a report the client actually receives. He also insisted the dietary and access requirements get deleted after the event, which I had not thought about as health data and now cannot un-see.',
							name: 'Wedding planning duo, Berlin'
						}
					]
				},
			{
					slug: 'dentists',
					title: 'AI for dentists: fewer no-shows, never clinical — AI consulting Berlin',
					metaDescription: 'Recall reminders, cancelled slots refilled, dictated notes typed up for your confirmation. No diagnosis, no X-ray reading, no triage. Patient data stays in the practice.',
					label: 'Dentists',
					headline: 'Nothing clinical. No exceptions, and we have turned down work over it.',
					story: [
						'Two dental practices, both owner-run: one with three chairs, one solo dentist with two staff. Neither wanted AI. One wanted to stop losing €4,000 a month to no-shows. The other wanted to stop writing up notes at 20:00.',
						'For the first practice it is the recall list: patients due for a check-up who quietly never come back, because reminding them is somebody’s afternoon and nobody has the afternoon. For the second it is documentation — notes dictated between patients and typed up after closing, plus the Heil- und Kostenplan that patients do not understand and therefore do not accept.'
					],
					machinery: [
						'The recall list: who is due, how they were contacted, what they answered',
						'Appointment reminders and the confirmation back from the patient',
						'Filling cancelled slots from a short-notice waiting list',
						'Turning dictation into structured chart notes in the practice’s own format',
						'A plain-language explanation of a treatment plan the dentist has already approved, and its costs',
						'Insurance and billing paperwork: BEMA/GOZ items, Kassenanträge, chasing open items',
						'Rota, sterilisation logs, stock levels, and the documents the Praxisbegehung will ask for'
					],
					judgement: [
						'Diagnosis. Every part of it',
						'The treatment plan',
						'What to tell a frightened patient',
						'Whether to treat at all'
					],
					builds: [
						{
							name: 'Recall reminders',
							text: 'Patients who are due are identified and reminded on a schedule, escalating from message to letter to a call list for the front desk. In the first practice, no-shows fell by a bit over half and the recall gap closed within four months. Pure arithmetic, no clinical content at all — and it paid for everything else.'
						},
						{
							name: 'Refilling cancelled slots',
							text: 'A slot opens at 09:40; the short-notice list is offered it automatically, in order. Empty chairs are the largest recoverable loss in a practice, and the process is entirely routine.'
						},
						{
							name: 'Dictation to chart note',
							text: 'The dentist speaks; the note appears in the practice’s own structure. The dentist reads and confirms every single one before it enters the record. Nothing enters a patient record unconfirmed, ever.'
						},
						{
							name: 'The patient explanation sheet',
							text: 'From a plan the dentist has already approved, a plain-language version: what will happen, in what order, what the Kasse covers, what the patient pays, and which alternatives exist — the alternatives as set by the dentist. Acceptance improved noticeably, for the unremarkable reason that people say no to things they do not understand.'
						},
						{
							name: 'The inspection folder',
							text: 'Sterilisation logs, maintenance dates and training records collected continuously instead of in a panic before an inspection.'
						}
					],
					stops: {
						title: 'No diagnosis, no image reading, no triage — and no note enters a record unconfirmed.',
						text: [
							'No suggested diagnosis, no reading of an X-ray or an OPG. No treatment recommendation, no ranking of options, no prognosis. No sorting of symptoms, not even a phone script that sorts by urgency, because a wrongly sorted abscess is real harm. No message to a patient about a clinical matter goes out without the dentist reading it.',
							'And the data rules, which are strict: patient data is special-category data under Article 9 of the DSGVO. Everything clinical stays inside the practice system, pseudonymised wherever it has to leave it, processed in the EU under an AV-Vertrag, never used to train anything, kept for as long as the Aufbewahrungspflicht requires, with every access logged. Where a workflow cannot meet those conditions, it does not get built.'
						]
					},
					proof: 'No-show rate. Recall gap — patients overdue and not yet contacted. Empty chair hours per week. Minutes of documentation after closing. Treatment plan acceptance rate.',
					refuse: 'Anything close to clinical decision support, symptom triage or image reading. Both practices asked about image reading, and both accepted the answer. The route for that exists — it runs through medical device certification — and it does not run through us.',
					cost: 'Reading and confirming every note before it enters the record. Which is the legal requirement anyway.',
					quotes: [
						{
							text: 'I did not want AI, I wanted to stop losing four thousand euros a month to empty chairs. He spent two days sitting at our front desk, which is not where I expected to be told to look. Recall and short-notice filling were installed first, nothing clinical at all, and no-shows fell by more than half within a quarter. That paid for everything afterwards and it earned the trust for it.',
							name: 'Praxisinhaber, three-chair practice, Berlin'
						},
						{
							text: 'Notes are dictated between patients and written up in our own structure, and I confirm every single one before it enters the record — which is the legal requirement anyway. I asked about reading OPGs and he said no and explained that the route for that runs through medical device certification and not through him. I have had three vendors tell me the opposite, so his answer is the reason I believed the rest of what he said.',
							name: 'Zahnärztin, solo practice'
						}
					]
				},
			{
					slug: 'team-leaders',
					title: 'AI for team leaders: notes in order, no ratings — AI consulting Berlin',
					metaDescription: 'A private record per team member, a prep sheet before every one-to-one, feedback drafted from your own notes, a monthly calendar check. No ratings, no monitoring.',
					label: 'Team leaders',
					headline: 'It organises what you observed. It never rates anyone.',
					story: [
						'One leads eleven people in an engineering organisation, one leads six in customer operations. Both were promoted for being excellent at the job they no longer do, neither was given any training, and both are quietly drowning in the paperwork that comes with managing people.',
						'Preparation, or rather the lack of it. Eleven one-to-one meetings a fortnight, each of which should begin with “last time you said X, how did that go?” and instead begins with the leader silently trying to remember. Then the writing: feedback that needs to be specific and therefore needs evidence, evidence that lives in scattered memory, and twice a year the review cycle, which eats two full weekends.'
					],
					machinery: [
						'Keeping a running record per person: what was discussed, agreed, and still open',
						'A prep sheet before each one-to-one — last agreements, their status, open threads',
						'Turning your rough notes into specific feedback: the situation, what the person did, what effect it had',
						'Tracking delegated work and its deadlines',
						'Checking your own calendar: how much time actually goes to the team',
						'Assembling the evidence for a review cycle from a year of your own notes',
						'Drafting onboarding plans and writing down recurring team processes'
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
							text: 'One private file per team member, held by you: what they said they would do, what happened, and your own dated observations. Ninety seconds of dictation after each one-to-one. It is the entire system, and it changes the quality of your management more than anything else we build, because specificity is the difference between feedback that lands and feedback that does not.'
						},
						{
							name: 'The prep sheet',
							text: 'Before each one-to-one: last time’s agreements, their status, what is still open, what you said you would follow up on. Thirty seconds of reading replaces four minutes of remembering badly, and the person across the table can tell.'
						},
						{
							name: 'The feedback drafter',
							text: 'You write “Tuesday, the deploy, handled it well.” It returns one specific paragraph — the situation, what the person did, what effect it had — built from that note and nothing else. You edit it and deliver it in person.'
						},
						{
							name: 'The calendar check',
							text: 'Once a month, where your time actually went. Both leaders were shocked. One discovered that 8% of their time went to their team and 44% to meetings they had never questioned attending.'
						},
						{
							name: 'The review assembler',
							text: 'At review time, the year’s notes per person, organised. Two weekends become an afternoon, and the reviews are far more specific because they are built from notes written at the time rather than from what you happen to remember.'
						}
					],
					stops: {
						title: 'No assessment of a person is ever generated, and nobody is measured by the tool.',
						text: [
							'It never rates, never ranks, never predicts who might leave, never suggests who is underperforming, never writes the conclusion of a review. A performance judgement produced by software and signed by a manager is a lie that somebody’s career is then built on.',
							'It also never reaches into anyone’s work. No counting of code changes, no tickets per person, no message analysis, no activity monitoring. Both leaders had access to tools that would do this, and we recommended neither. Surveillance changes what a team tells you long before it changes what they do, and then you are blind in a way you cannot detect. The person records are your own notes about employees, so DSGVO rights apply, including the right of access — write nothing you would not show the person.'
						]
					},
					proof: 'One-to-ones that begin with a follow-up rather than a blank: from occasional to standard. Time spent on review season. The share of your week actually spent with the team. And whether feedback got specific, which the team notices before you do.',
					refuse: 'When a leader wants visibility into what their team is doing all day. That is a trust problem, and tooling makes it worse. We say so, and we have had that conversation both times.',
					cost: 'Ninety seconds of dictation after every conversation.',
					quotes: [
						{
							text: 'I was promoted for being good at a job I no longer do and nobody trained me for this one. Ninety seconds of dictation after every 1:1 and now each conversation starts with “last time you said X, how did that go” instead of me silently trying to remember. My team noticed before I did. Review season went from two weekends to an afternoon and the reviews are far more specific, because they are built from notes I wrote at the time rather than from what I can recall in November.',
							name: 'Engineering team lead, eleven reports'
						},
						{
							text: 'The calendar audit was unpleasant. Eight per cent of my time went to my team and forty-four per cent to meetings I had never once questioned attending. I asked whether we could add visibility into what people were actually working on and he said no, and told me it was a trust problem that tooling would make worse. That was not what I wanted to hear and it was the most useful thing anyone said to me that year.',
							name: 'Head of customer operations, six reports'
						}
					]
				},
			{
					slug: 'estate-agents',
					title: 'AI for estate agents: answer real buyers first — AI consulting Berlin',
					metaDescription: 'Every enquiry answered within minutes and sorted by quality, Exposés built with the Pflichtangaben checked, owners updated weekly. No valuation, no generated photos.',
					label: 'Estate agents',
					headline: 'Answer the eight real buyers first, not all ninety.',
					story: [
						'One independent Makler in Berlin, and a two-person agency doing residential sales and some rentals. They came with opposite problems: one drowning in leads he could not answer fast enough, one struggling to produce Exposés quickly enough to win the mandate.',
						'A listing goes live and 90 enquiries arrive in 48 hours. Perhaps eight are qualified buyers. The agent answers them in the order they arrived, at 22:00, badly, and has lost the good ones on day one. Around that: the Exposé rebuilt from scratch every time, the viewing schedule put together by hand, and the follow-ups after viewings that never get sent.'
					],
					machinery: [
						'Sorting enquiries: complete, financing indicated, requirements that match the property',
						'Sending the acknowledgement and the qualification questions within minutes',
						'Scheduling viewings, including block viewings, with reminders',
						'Assembling the Exposé: photos, floor plan, Energieausweis data, Provision statement, Pflichtangaben',
						'Drafting the listing description from the property’s actual data',
						'Following up after viewings and collecting feedback',
						'Keeping the owner informed, with a market snapshot of comparable listings and time on market'
					],
					judgement: [
						'Valuation and pricing strategy',
						'Which buyer to recommend to a seller',
						'How to advise an owner with an unrealistic expectation',
						'Negotiation'
					],
					builds: [
						{
							name: 'Enquiry sorting',
							text: 'Every enquiry is acknowledged within minutes, with the qualifying questions attached. The replies are sorted into qualified, incomplete and unsuitable. You then spend your attention on eight people rather than ninety. Response time is the single largest factor in who wins the buyer, and it is pure routine.'
						},
						{
							name: 'Viewing scheduling',
							text: 'Qualified leads book from your real availability and get reminders. No-shows fell by more than half, which matters because a no-show at a block viewing costs a slot a real buyer wanted.'
						},
						{
							name: 'Exposé assembly',
							text: 'Property data in, compliant document out — with the Pflichtangaben checked, because a missing Energieausweis figure is a fineable offence under GEG and exactly the kind of thing a tired agent forgets on a Friday. It also produces the portal versions in the right formats.'
						},
						{
							name: 'Description draft',
							text: 'Written from the property’s actual attributes, in your voice, with no invented features. Estate agent copy has a deserved reputation and we are not adding to it — if the system has no data for a claim, it does not make the claim.'
						},
						{
							name: 'Weekly owner update',
							text: 'Weekly, automatic, factual: enquiries, viewings, feedback themes. Both agents said this reduced anxious owner calls more than anything else, because most owner calls are requests for reassurance that nothing is happening without them.'
						}
					],
					stops: {
						title: 'No valuation, and nothing that misrepresents a property.',
						text: [
							'Valuation is where your professional judgement and your reputation live, and it is the number the whole relationship turns on. The system can gather comparables and show time on market. It does not produce a price.',
							'On representation: no generated images, no removing anything from a photograph, no “cosy” for tiny, no invented Baujahr, no omitted Pflichtangaben. Beyond the legal exposure, everything invented in an Exposé is discovered at the viewing — and then you are the person who wrote it. The system also never negotiates and never talks to a buyer about price.'
						]
					},
					proof: 'Minutes to first response — from hours to under five. Qualified leads per listing. Viewing no-show rate. Days on market. Owner calls per week, going down.',
					refuse: 'Any request for automated valuation or generated property photography. Also any request to auto-reply to buyers in a way that implies a human is answering. If a buyer is talking to a system, they should be able to tell.',
					cost: 'Answering eight good enquiries with care instead of scrolling through ninety. Filling in the property data once, properly, so the Exposé and the description have something true to work from.',
					quotes: [
						{
							text: 'Ninety enquiries in forty-eight hours, eight of them real, and I was answering them in arrival order at ten at night and losing the good ones on day one. Everything is acknowledged within minutes now with the qualifying questions attached, and I spend my attention on the eight. Response time decides who gets the buyer and it is completely mechanical, which is apparently the point he makes to everyone.',
							name: 'Independent Makler, Berlin'
						},
						{
							text: 'The Exposé assembler checks the Pflichtangaben, and the missing Energieausweis figure on a Friday afternoon is exactly the mistake I have made before. It writes from the property’s actual attributes and will not invent a feature, which given the reputation of my profession I regard as a competitive advantage rather than a restriction. The weekly owner update cut the anxious phone calls more than anything else.',
							name: 'Two-person agency, residential sales'
						}
					]
				},
			{
					slug: 'executives',
					title: 'AI for founder-CEOs: prepared for every meeting — AI consulting Berlin',
					metaDescription: 'Your inbox sorted with the reasons shown, a 90-second brief before every meeting, a list of what you promised to whom, board packs assembled. It never decides or writes as you.',
					label: 'Executives',
					headline: 'Walking into a meeting knowing what was promised last time.',
					story: [
						'The founder-CEO of a company of about 90 people. Not a corporate chief executive with a chief of staff and two assistants — someone who still personally answers investors, still gets pulled into hiring, and whose calendar has been taken over by other people’s needs. The complaint he arrived with was “I have no time to think”, which in our experience is the only complaint CEOs actually have.',
						'Not one lost hour — the whole shape of the week. About 300 emails a day, of which perhaps twelve matter. Meetings entered cold, with no idea what happened last time or what was promised. Board preparation eating a weekend a quarter. A reading pile that is now purely theoretical. And the deep consequence: every decision made in the eleven minutes between two meetings, on whatever information happened to be in the room.'
					],
					machinery: [
						'Sorting the inbox into decide, delegate, read and ignore — with the reason shown for each',
						'The pre-meeting brief: who is this, what did we last agree, what is still open, what will they ask for',
						'The weekly numbers digest from the company’s own systems, showing what changed rather than where things stand',
						'Assembling the board pack from the same sources, in the fixed structure',
						'Summarising the reading pile, with the original sources one click away',
						'Tracking the commitments you made, to whom, and by when',
						'Watching named competitors, the market and relevant regulatory movement'
					],
					judgement: [
						'Every decision',
						'Strategy',
						'People',
						'What the company is for'
					],
					builds: [
						{
							name: 'Inbox sorting',
							text: 'Four piles each morning, each email with its reason attached. Nothing is deleted, nothing is auto-replied, nothing is hidden — the ignore pile stays visible and open to review, because a CEO who suspects the system is hiding something will check everything, and then it is worth less than nothing.'
						},
						{
							name: 'Pre-meeting brief',
							text: 'The most valuable thing on this list, 90 seconds before each meeting: last contact, agreed actions and their status, open threads, the likely ask, the relevant numbers. Walking into a meeting knowing what was promised last time changes what happens in it. This alone justified the engagement.'
						},
						{
							name: 'Weekly numbers digest',
							text: 'Weekly, from the company’s own systems, built around what changed: what moved, by how much, against what was expected. Not another screen of charts. A CEO does not need another screen of charts; they need something that has already noticed.'
						},
						{
							name: 'Commitment list',
							text: 'What you said you would do, in meetings, to whom, by when. Founders make a great many promises out loud and remember perhaps half.'
						},
						{
							name: 'Board pack assembly',
							text: 'Fixed structure, current numbers, last quarter’s commitments and their status. A weekend becomes a morning — and the morning goes into the narrative, the part that used to get an hour at the end.'
						}
					],
					stops: {
						title: 'It never decides and it never speaks as you.',
						text: [
							'No external communication is generated in your voice — not to investors, not to staff, not publicly. A CEO whose words can be generated has a problem that is hard to reverse: the moment it becomes known internally, every message they send is read with a question attached.',
							'It never recommends a course of action on anything strategic. It assembles what is known, marks what is not known, and stops. The temptation to build an AI advisor for a lonely founder is strong, and what comes out is confident, plausible and cut off from anything the system could actually know about the company. And nothing is sent automatically from that mailbox. Everything waits for you.'
						]
					},
					proof: 'Minutes per day in the inbox. Meetings entered with the brief read. Commitments kept. Hours of board preparation. And the one that was actually asked for at the start: hours per week of uninterrupted thinking time, which you can count in a calendar and which was near zero.',
					refuse: 'Any version of an AI advisory board, strategy generator or decision recommender. Also anything that generates the CEO’s voice for external use. Both were asked for. Both refused.',
					cost: 'Fifteen minutes each morning reviewing how the inbox was sorted, for the first month. After that, nothing.',
					quotes: [
						{
							text: 'Ninety people, three hundred emails a day, twelve of which matter, and no hour anywhere that belonged to me. The pre-meeting brief is ninety seconds of reading and it changed what happens in the meetings, because I now walk in knowing what I promised last time. He would not build anything that writes in my voice for external use and he explained what happens internally once people suspect it, which I had not thought through. Nothing auto-sends from my mailbox. I went from effectively zero hours a week of thinking time to about ten.',
							name: 'Founder-CEO, ~90 staff'
						}
					]
				},
			{
					slug: 'chefs',
					title: 'AI for chefs: food cost from 34% back to 28.5% — AI consulting Berlin',
					metaDescription: 'Photograph the invoice and every dish is recosted. Prep lists from tonight’s bookings, an allergen matrix the chef confirms, a waste log. It never touches the plate.',
					label: 'Chefs',
					headline: 'The system handles money, stock and paperwork. It never touches the plate.',
					story: [
						'Chef-patron of a small restaurant — about 40 covers, a changing menu, six staff. He came to us because his food cost had drifted from 28% to 34% over a year and he could not say why, and because he was doing paperwork until midnight after service. He had no interest whatsoever in AI and said so in the first sentence.',
						'After service: tomorrow’s prep lists written by hand, supplier orders placed from memory, invoices in a pile, the rota rebuilt every week in a notebook. And the thing that was actually costing him money — nobody knew what anything cost any more, because supplier prices had moved and the menu prices had not.'
					],
					machinery: [
						'Reading supplier invoices and tracking the price of each ingredient over time',
						'Costing every dish from current prices, and recosting it when a price moves',
						'Recalculating plate margin and food-cost percentage per dish and overall',
						'Scaling recipes to covers and producing the prep list from the booking count',
						'Building the order from par levels and current stock',
						'Keeping the allergen matrix per dish, updated whenever a recipe changes',
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
							name: 'Invoice reading',
							text: 'Photograph the invoice; the ingredient prices update. Within six weeks he could see that three suppliers had raised prices by 9–14% without a conversation, and that one line was quietly responsible for most of the drift. This was the whole problem, and it was solved by arithmetic, not intelligence.'
						},
						{
							name: 'Live dish costing',
							text: 'Every dish costed from current prices, with margin and food-cost percentage per plate updating on their own. Two dishes turned out to be losing money at the menu price. He changed one price and took the other off the menu — both were his decisions, and neither was suggested by the software.'
						},
						{
							name: 'Prep list',
							text: 'Tonight’s bookings plus the menu plus the recipes produce tomorrow’s prep, scaled. Fifteen minutes of writing after service becomes a printout.'
						},
						{
							name: 'Allergen matrix',
							text: 'Per dish, updated automatically when a recipe changes. Legally required, error-prone, and exactly the kind of thing that goes out of date the moment a recipe changes on a Tuesday. Every entry is confirmed by him, because the consequence of a wrong allergen entry is not a bad review.'
						},
						{
							name: 'Waste log',
							text: 'Thirty seconds at close. After a month it showed him where the loss was, which was not where he thought.'
						}
					],
					stops: {
						title: 'No recipes, no menus, no substitutions, and no unconfirmed allergen data.',
						text: [
							'The food is the entire business. A generated dish is worthless to a chef whose reputation is his palate, and he would not have used it anyway.',
							'The allergen rule is a hard one: the matrix is built from his recipes, but every entry is confirmed by him before it is used, and any recipe change cancels the confirmation until he confirms again. Cross-contamination risk is a kitchen fact that lives nowhere in a recipe file, so the system cannot know it. It also never places an order — a draft order goes to him and he sends it, because a mistakenly ordered 30kg of turbot is a real week.'
						]
					},
					proof: 'Food cost percentage — 34% back to 28.5% within a quarter, and this was almost entirely visibility. Minutes of paperwork after service, from about 70 to about 15. Waste by category. Whether the allergen matrix is current, which it now always is.',
					refuse: 'He asked, half seriously, whether it could suggest specials from surplus stock. We built the surplus list and stopped there. Which ingredients are about to go over is arithmetic; what to do with them is thirty years of cooking.',
					cost: 'Photographing each invoice as it arrives. Thirty seconds of waste logging at close. Confirming every allergen entry, and confirming it again after any recipe change.',
					quotes: [
						{
							text: 'My food cost had gone from twenty-eight to thirty-four per cent over a year and I could not tell you why. He worked two services and did the after-service paperwork with me before he built anything. I photograph invoices now and within six weeks I could see that three suppliers had raised prices without a conversation. Two dishes were losing money at the menu price — I changed one and pulled the other, and the machine did not suggest either, it just showed me the arithmetic.',
							name: 'Chef-patron, 40 covers'
						}
					]
				},
			{
					slug: 'volunteer-orgs',
					title: 'AI for a Verein: grant applications in 3 hours — AI consulting Berlin',
					metaDescription: 'Every reusable fact about your Verein in one current file, reshaped into each funder’s form. Applications in about three hours instead of two days. Free tools only.',
					label: 'Non-profits',
					headline: 'Grant applications in three hours instead of two days, on free tools.',
					story: [
						'A registered Verein — around 40 active volunteers, one part-time paid coordinator, funded by a mix of small grants, membership fees and donations. Nobody there has a technology budget, and the coordinator is doing the work of three people on 20 hours a week. This engagement was partly unpaid and we would do it again.',
						'The biggest problem is grant applications. Each funder wants the same information in a different structure — organisational description, project plan, budget, impact evidence, previous funding — and each application takes two full days. Those days come out of the delivery work, which is the whole point of the organisation. Behind that: rota coordination across 40 volunteers, membership admin, donor thank-yous and the annual report.'
					],
					machinery: [
						'Keeping the reusable facts current: mission, history, structure, staffing, finances, past projects, impact figures',
						'Reshaping those facts into each funder’s required structure and word limits',
						'Tracking deadlines, reporting obligations and outcomes across all applications',
						'Volunteer rota: availability, shifts, reminders, gaps',
						'Membership: joins, fees, lapses, Beitragseinzug',
						'Donor thank-yous and Spendenquittungen',
						'Collecting activity data as it happens, so the impact report is not archaeology'
					],
					judgement: [
						'What the organisation is for',
						'Which funder to approach and what to promise them',
						'Every claim about impact',
						'Your relationships with the volunteers'
					],
					builds: [
						{
							name: 'The core document',
							text: 'Every reusable fact about the organisation, written once, kept current, with a source for every number. The single most valuable thing we built, and it is essentially a well-organised text file.'
						},
						{
							name: 'The application drafter',
							text: 'You paste in a funder’s questions and word limits. Out comes a draft built from the core document. Two days becomes about three hours, and every claim traces back to something in the core — so nothing gets invented under deadline pressure, which is exactly when organisations invent things.'
						},
						{
							name: 'The deadlines diary',
							text: 'Application deadlines, reporting deadlines, and what was promised to whom. Missed reporting is how small organisations lose funders quietly.'
						},
						{
							name: 'The rota',
							text: 'Availability in, shifts out, reminders sent, gaps visible early. This was the coordinator’s largest weekly time sink, and it is pure scheduling.'
						},
						{
							name: 'The activity log',
							text: 'Thirty seconds after each session: what happened, how many people, anything notable. A year later the impact report is written from real records instead of a panicked reconstruction in January.'
						}
					],
					stops: {
						title: 'No impact claim is ever generated, and no message to a funder is sent automatically.',
						text: [
							'Every number in a grant application comes from the activity log or the accounts. If the log does not support it, the application says so. Overstating impact to a funder is fraud, it happens by accident under deadline pressure, and a fluent writing tool makes that accident easier — so the drafter is built to refuse. Where evidence is missing it writes "We do not yet measure this" and leaves the line for a person.',
							'Nothing is written about a beneficiary. Where the organisation works with vulnerable people, no personal data enters any external tool at all. Aggregate counts only. And everything must run on free or near-free tools and be operable by whoever holds the role in two years — anything that needs a subscription or a specialist will be abandoned.'
						]
					},
					proof: 'Hours per grant application. Applications submitted per year — which roughly doubled, and that is the entire economic point. Reporting deadlines met. Coordinator hours spent on admin versus delivery. Whether the activity log is still being filled in after six months.',
					refuse: 'When an organisation wants a website, a CRM and a donor platform. That is a different project with an ongoing cost they cannot carry, and it will be abandoned within a year. A well-kept spreadsheet and a documented process outlive most systems built for organisations like this.',
					cost: 'Thirty seconds after each session to fill in the activity log. Keeping the core document current when something changes. Nothing that costs money every month.',
					quotes: [
						{
							text: 'A grant application took two full days and those days came out of the work the Verein actually exists to do. Everything reusable about us now lives in one place and gets reshaped into whatever structure a funder demands, so it takes about three hours. We doubled the number of applications we submit, which is the entire economic point. He built it so that if the evidence is not in our activity log the application says we do not measure it, rather than letting me improvise a number at midnight before a deadline.',
							name: 'Coordinator, registered Verein, ~40 volunteers'
						}
					]
				},
			{
					slug: 'research',
					title: 'AI for researchers: grant proposals in ten days — AI consulting Berlin',
					metaDescription: 'Reusable proposal text reshaped to each call, a supervision record, literature screening and figures you can reproduce. It never invents a citation.',
					label: 'Research',
					headline: 'Two professors went from almost no research time to eight to twelve hours a week.',
					story: [
						'Two quite different people who share a calendar problem. The professor: nine SWS of Lehrdeputat, between four and fifteen doctoral candidates, a Prüfungsausschuss, a Berufungskommission and the Fakultätsrat, six to ten manuscripts reviewed a year unpaid, and two or three grant proposals because the chair runs on Drittmittel. They were hired for their research and they do research on Sundays, if at all. And the doctoral candidate: year three of a WissZeitVG contract that ends in year four, 900 unread PDFs, three written chapters that no longer agree with each other, and an analysis that cannot reproduce its own figures.',
						'For professors it is the proposal. A DFG Sachbeihilfe needs the state of the art, preliminary work, the work programme, budget justification, the CV, the publication list in the DFG’s own structure, a data management plan, an ethics statement and equal opportunity measures. Perhaps sixty per cent of that text already existed, in three previous proposals, in slightly wrong formats — and it gets rewritten anyway, over five weeks of evenings and weekends, because finding the old version feels harder than retyping it. For candidates it is six hundred abstracts to screen, and later the worse question: which version of the analysis, on which version of the data, produced Figure 3?'
					],
					machinery: [
						'Screening literature: collecting everything new in a defined field and sorting it by relevance to a stated question',
						'Cleaning up a reference library: removing duplicates, repairing details, checking every reference against its official record',
						'Reformatting a publication list into DFG, ERC, NSF, Europass or a university’s house structure',
						'Keeping the reusable proposal text current and reshaping it to a call’s structure and page limits',
						'Tracking calls, Zwischenberichte, Abschlussberichte, review commitments and exam dates',
						'Keeping the supervision record for each doctoral candidate',
						'Checking appointment applications for completeness against the published formal criteria',
						'Keeping the reproducibility record: which data, which version of the analysis, which figure'
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
							text: 'One maintained store: the CV in every format ever demanded, the publication list, the group description, infrastructure, the preliminary-work paragraphs for each research line with their figures and citations, past project outcomes, the data management plan template, the equal opportunity measures. Every item dated and sourced. About two weeks to build, mostly pulling text out of three old proposals, and it is the last time those paragraphs are ever written from nothing.'
						},
						{
							name: 'The proposal skeleton',
							text: 'You give it a call’s structure, headings and page limits. Out comes a skeleton with the core material already placed at roughly the right length, and every section that needs original thought left empty and labelled. Five weeks becomes about ten days, and almost all ten go into the work programme — the part that gets funded.'
						},
						{
							name: 'The supervision record',
							text: 'One private file per doctoral candidate: what was agreed, what happened, milestones against the Betreuungsvereinbarung, obstacles raised. Ninety seconds of dictation after each meeting. The piece we would install first if we could install only one — because meetings currently begin with both people trying to remember, reference letters two years later are written from a blank page, and when a candidate is quietly in trouble the record shows it four months before anyone notices in conversation.'
						},
						{
							name: 'The literature screen',
							text: 'For candidates: six hundred abstracts checked against inclusion and exclusion criteria that are written down first. Every decision recorded with the criterion that produced it, every borderline case flagged for you. For systematic reviews this follows PRISMA and produces the flow-diagram numbers as a by-product.'
						},
						{
							name: 'The reproducibility record',
							text: 'Which data, which version of the analysis, which software setup, which output. Every figure carries the exact command that made it. Set up in an afternoon in year one, and worth a month in year four.'
						}
					],
					stops: {
						title: 'It never generates a citation, and never summarises a paper you will cite.',
						text: [
							'Citations come from your reference manager and are checked against each paper’s official record. Nothing that produces prose is allowed to produce a reference, ever, under any framing. Invented references are the most common and most destructive failure of language models in research, and a tired author at 23:00 cannot spot them because they look exactly right. Screening a thousand abstracts to find forty papers is routine work; reading those forty is the job — so the screen gives you titles, abstracts and links, never a summary presented as good enough.',
							'No manuscript under review touches an external service: peer review is confidential and a manuscript is unpublished work belonging to someone else. The system never writes the argument, the hypothesis or the interpretation. It never ranks candidates in an appointment procedure — a Berufungsverfahren is legally reviewable, documented, and subject to the AGG; we have refused this twice. No data is invented, no figure generated, and no cleaning happens silently: raw stays raw. Every engagement ends with a one-page document you keep, naming which tasks used an AI tool and which funder and publisher disclosure rules apply.'
						]
					},
					proof: 'Days from a call’s announcement to a submitted proposal: typically five weeks down to about ten working days. Proposals submitted per year. Supervision meetings with a written record: from occasional to all of them. Figures reproducible with a single command: all of them. And the only one anybody cares about — hours per week available for research, which for both professors went from close to zero to between eight and twelve.',
					refuse: 'When someone wants a paper generator — asked twice, phrased as "a first draft of the introduction" and "just the related work section". The related work section is where you show you have read the field. Also when a department wants per-person publication metrics, which is surveillance in a bibliometric costume. And when a doctoral candidate needs a supervisor rather than a system, which is the saddest version.',
					cost: 'Two weeks of pulling text out of old proposals to build the core, once. Ninety seconds of dictation after each supervision meeting. And the discipline of reading the forty papers the screen found, which was always the job.',
					quotes: [
						{
							text: 'Sixty per cent of every proposal already existed, in three earlier proposals, in slightly the wrong format, and I retyped it every March because finding it felt harder. Two weeks of extraction and I have not written those pages from nothing since. A DFG submission that took five weeks now takes about ten working days and nearly all of those days go to the work programme, which is the part that gets funded. He would not let anything generate a citation — references resolve by DOI or they do not appear — and given what I have seen happen to colleagues, that rule is the reason I let him near any of it.',
							name: 'Professor (W3), natural sciences'
						},
						{
							text: 'Year three, nine hundred unread PDFs, three chapters that no longer agreed with each other, and forty minutes with my supervisor every six weeks. The screening pipeline got six hundred abstracts down to the forty I actually had to read, and it recorded which criterion produced every decision. The reproducibility setup took an afternoon and I now know which script version made which figure, which I understand is a boring sentence and it saved me in my defence. He also told me, kindly, that what I really needed was a supervisor, and he was right.',
							name: 'Doctoral candidate, humanities'
						}
					]
				},
			{
					slug: 'language-exams',
					title: 'AI for IELTS, ÖSD and Goethe: practise where marks are lost — AI consulting Berlin',
					metaDescription: 'A mock exam scored per criterion, an error log that names your recurring mistake, and study hours aimed where you actually lose marks. It never promises a score.',
					label: 'Language exams',
					headline: 'Stop practising what you are already good at.',
					story: [
						'Almost nobody arrives here for the love of a language. They arrive because a document requires a number. A Syrian doctor who needs B2 plus the Fachsprachprüfung before the Approbation. A woman who needs B1 for Einbürgerung and has failed the writing paper twice. An Indian software engineer who needs IELTS 7.0 for a visa route and has 6.5 with a 6.0 in writing. A nurse whose employer is paying for the third attempt. Two things are true of nearly all of them: the deadline is external and cannot be moved, and they have already failed at least once.',
						'Someone with Reading 82, Listening 78, Writing 51 will spend four evenings a week on reading exercises, because reading feels like progress and writing feels like failure. They buy another book of practice tests, do a whole test, score it, get a number, feel bad, and do another one. Nothing in that loop tells them which of their sentences lost marks or why. Twelve weeks later they score within two points of last time, and that is genuinely bewildering, because they worked very hard.'
					],
					machinery: [
						'Scoring a mock exam against the published criteria, one result per criterion instead of one number',
						'Sorting every error in a piece of writing or a recorded answer by type, and counting them across attempts',
						'Dividing your study hours in proportion to where the marks are actually lost',
						'Producing practice exercises for exactly those error types, in the real exam format',
						'Vocabulary review built from your own mistakes rather than a generic word list',
						'Measuring how you speak: pace, where the pauses fall and how long they are, filler words, range of vocabulary',
						'Building the countdown plan against the hours you really have',
						'Registration admin: deadlines, test centre availability, ID requirements, fees'
					],
					judgement: [
						'Whether you are ready to book',
						'What an examiner will actually reward in the room',
						'The anxiety, which for a third-attempt candidate is often the biggest single factor',
						'Whether this is even the right exam at the right level'
					],
					builds: [
						{
							name: 'The diagnosis',
							text: 'One full mock exam under real conditions, scored against the published criteria one by one. For IELTS Writing that means four separate results; for ÖSD or Goethe the breakdown by module and criterion, not a pass or fail. The result is deliberately not a band score. Here is each criterion, here is where the marks went, and here are your own sentences quoted next to the criterion they fell short of. Most candidates have never once seen this. They have only ever seen numbers.'
						},
						{
							name: 'The error log',
							text: 'Every error in every piece of writing and speaking, sorted and counted. After three pieces the log says something like: sixty-three per cent of your grammar deductions come from one structure, or you have lost marks for answering the task in four essays in a row and never for grammar. That one sentence is worth more than a hundred practice tests, and no book can produce it, because no book knows what you specifically do.'
						},
						{
							name: 'The study plan',
							text: 'Your available hours divided in proportion to where the marks are lost, not evenly and not by preference. Someone losing everything in writing gets a plan that is roughly seventy per cent writing, and hates it for about ten days. The plan also has a rule for your strong skill: enough practice to keep it, and not one hour more.'
						},
						{
							name: 'The speaking check',
							text: 'You record the real task under real timing. It comes back with a transcript, the measurable parts — pace, where the pauses fall and how long they are, filler words, range of vocabulary, structures you repeat — and your recurring errors added to the log. It measures how you speak. It does not score your personality, and it says so.'
						},
						{
							name: 'The countdown and the retake question',
							text: 'From today to the exam date, against the hours you genuinely have, with a fresh mock every three weeks. Plus the retake question: several of these exams let you retake a single failed module on its own, which can mean a fraction of the fee. The tool raises the question and names the office to ask. It does not assert the answer. We have watched someone re-sit an entire exam because nobody told them to ask.'
						}
					],
					stops: {
						title: 'It never promises a score, and it never writes your essay.',
						text: [
							'It gives estimates per criterion against the published descriptors and labels them as estimates, every time. The failure here is specific and expensive: a candidate who believes a predicted 7.0 books the exam, pays the fee, books the visa appointment, and scores 6.5. So the readiness signal is deliberately cautious: three mocks in a row above target on your weakest criterion, not on the average. And even then it is a signal to a person, not a decision.',
							'It never writes your essay and never speaks for you, not even as a “starting point”. In the exam room there will be nothing, and a candidate who has been submitting improved text has been measuring the tool rather than themselves. Nothing touches a live exam: no tools during a test, no help in a remotely supervised session. No official past papers are reproduced. And no immigration, visa or eligibility advice: whether a certificate is recognised for a particular Approbation route is a legal question with real consequences, and the tool points you to the Behörde, the Ärztekammer or a lawyer.'
						]
					},
					proof: 'Not the overall band, which moves slowly and hides everything. Movement on your weakest criterion, which is the only number that matters and the one twelve weeks of self-study never moved. Errors per hundred words by type, over time. How your study hours are split, which typically starts at seventy per cent on the strong skill and should flip within a month. And whether the error log is still being updated eight weeks in, which predicts the result better than any single mock.',
					refuse: 'When the timeline cannot work. Someone at a solid A2 wanting C1 in eight weeks is not going to get there, and we say the honest number of months in the first hour. When the target level is wrong, which twice meant a lower certificate or a different exam the institution also accepts. When the barrier is anxiety rather than language, because drills make that worse. And when someone wants the score without the language, which is a short conversation.',
					cost: 'One full mock exam every three weeks under real conditions, which is uncomfortable and not negotiable. Ten minutes after each writing task to update the log. And about ten days of doing the practice you have been avoiding.',
					quotes: [
						{
							text: 'B1 for the Einbürgerung, failed Schreiben twice, and both times I had studied reading because reading felt better. The first session he showed me my own sentences next to the criteria I had missed, and nobody had ever done that — I had only ever seen numbers. The plan he built was seventy per cent writing and I hated it for about ten days. He also made me ask the centre about retaking only the one module, which nobody had told me was possible, and it saved me most of the fee.',
							name: 'B1 candidate, Berlin'
						},
						{
							text: 'I needed 7.0 for the visa route and I had 6.5 with a 6.0 in writing, and I had done maybe thirty practice tests. The error ledger told me that sixty per cent of my deductions came from task response and almost none from grammar, which is the opposite of what I had assumed and the opposite of what I had been practising. He refused to predict my band as a promise and only said I was ready after three consecutive mocks above target on my weakest criterion, not the average. I got 7.5 in writing.',
							name: 'Software engineer, IELTS candidate'
						}
					]
				}
		]
	},
	how: {
		title: 'Four steps, every time.',
		steps: [
			{
				title: 'We watch your real week.',
				text: 'Two to five days alongside your actual work. Not a workshop, not a questionnaire. The inbox, the folder names, the sticky notes, the workaround you are slightly embarrassed about. The workaround is usually where the tool belongs.'
			},
			{
				title: 'We write down the line.',
				text: 'One page that says what the tool will take over and what stays with you, read back to you. If something on the “take over” side makes you uneasy, you are right and we move it. That page is the contract.'
			},
			{
				title: 'We build the smallest tool that does the job.',
				text: 'Not a platform. One tool that takes the repetitive work off your desk. It is ready in weeks, not quarters, and it does one thing so completely that you stop thinking about it.'
			},
			{
				title: 'We hand over the controls and leave.',
				text: 'You can change the rules without us: the filters, the limits, the templates, the reasons something gets rejected. If a tool needs us to stay, we built it wrong.'
			}
		],
		noPrices:
			'Every project is different, so there is no price list. After the free first conversation you get a clear, fixed quote before you commit to anything. Most projects take about four weeks from first visit to handover.'
	},
	principles: {
		title: 'Three promises.',
		items: [
			{
				title: 'Every decision stays with you.',
				text: 'The tool takes over the repetitive work. The decision, the diagnosis, the grade, the valuation and the verdict stay yours. We refuse to build the button that would take them away, and we have turned down work over it.'
			},
			{
				title: 'We say no out loud.',
				text: 'If there is too little of the work, if every case is different, or if a calendar would fix it, you hear that instead of a proposal. It has cost us projects, and it is why people send us their friends and colleagues.'
			},
			{
				title: 'Nothing depends on us afterwards.',
				text: 'You get the controls: the filters, the limits, the templates. You also get a written page of what the tool may and may not do. If a tool needs us to stay, we built it wrong.'
			}
		]
	},
	about: {
		eyebrow: `Who ${contact.brand} is`,
		title: 'One expert, no handoffs.',
		photoAlt: contact.name,
		text: `${contact.brand} is one expert, not an agency: ${contact.name}. You deal with him directly from the first call to the handover. ` + 'Almost nobody comes to us asking for AI. People come because one part of their week has become unbearable. We sit inside that week until we can see exactly which part repeats and which part needs their judgement, and then we build only for the repetitive part. That combination is rarer than it sounds: most people who can build these tools cannot hear the problem, and most people who can hear the problem cannot build. We do both, one person at a time. Inside a company, we run an AI system that a real legal department uses every day. Outside it, we sit at a kitchen table with a yoga teacher or a chef. The company work teaches us what survives audits and handovers. The one-to-one work keeps us honest about how little most people actually need. So we listen to how you already work, we build or teach exactly that much, and we tell you plainly when AI will not pay off for you.'
	},
	testimonials: {
		eyebrow: 'What clients say',
		// The quotes themselves live on each case in built.items, next to the work
		// they are about — the home page shows the first voice from each featured
		// case. Real client words; names withheld at their request.
	},
	faq: {
		eyebrow: 'Common questions',
		title: 'Common questions.',
		items: [
			{
				q: 'Do I need any technical knowledge?',
				a: 'None at all. You explain your work in your own words and everything technical stays our problem. The first step is us watching your actual week, not a workshop or a questionnaire. If you can do your job, we can work together.'
			},
			{
				q: 'Will the tool make decisions for me?',
				a: 'No, and that is the whole design. The grade stays with the teacher, the valuation with the surveyor, the diagnosis with the dentist, the priorities with the product manager. The tool takes over the repetitive work and prepares the material. You decide. We have refused to build the “accept all” button more than once.'
			},
			{
				q: 'What happens after I get in touch?',
				a: 'We talk for thirty minutes, free, with no preparation on your side. You describe your week; we tell you honestly whether a tool would pay off and roughly what it would involve. If it makes sense, you receive a fixed quote. If it does not, you leave with a clear recommendation and no bill.'
			},
			{
				q: 'What does it cost?',
				a: 'There is no price list, because a dental practice and a PhD thesis do not cost the same. After the free first conversation you get a clear, fixed quote before any commitment. Most projects take about four weeks from the first visit to handover.'
			},
			{
				q: 'Is my data safe with you?',
				a: 'Yes, and for regulated work it is the first thing we design, not the last. Patient files, case documents, children’s data, research under ethics approval: processing in the EU with a data processing agreement, no training on your content, names removed wherever data has to leave your systems, and a complete record of who did what. Where a workflow cannot meet those conditions, it does not get built.'
			},
			{
				q: 'What if AI is the wrong answer for me?',
				a: 'Then you hear it in the free conversation, before you have spent anything. It happens often. Three of the five coaches we have worked with needed a booking system with reminders, not AI. We set that up, charged for the afternoon, and said so.'
			},
			{
				q: 'Who actually does the work?',
				a: `${contact.name} does, personally. There is no team behind the scenes and no handover to a junior. The person you speak to in the first call is the person who watches your week, builds the tool and hands it over.`
			},
			{
				q: 'Do we have to be in Berlin?',
				a: 'No. The first conversation is a call either way, and most of the work after it runs over screen sharing. Clients so far include Leipzig and Brandenburg. Berlin simply makes the watching-your-week part easier to do in person.'
			},
			{
				q: 'How much of my time does this take?',
				a: 'Less than you would think, and most of it is at the start. The first step costs you being observed for a few days. After handover most clients spend seconds, not hours: ninety seconds of dictation after a meeting, ten seconds after a training session, one photograph of an invoice.'
			}
		]
	},
	contactSection: {
		eyebrow: 'Get in touch',
		title: 'Tell us what your week looks like.',
		lead: 'Thirty minutes, free, no preparation. We tell you honestly which parts of your week you can hand over, and which you cannot.',
		form: {
			name: 'Name',
			email: 'Email',
			subject: 'What is this about',
			// Lets the enquiry sort itself before it reaches you.
			subjects: [
				'Coaching for me personally',
				'A tool for my practice or team',
				'A workshop or a talk',
				'Something else'
			],
			message: 'Message',
			messageHint: 'A sentence about your week is plenty. No preparation needed.',
			emailHint: 'So we can reply.',
			send: 'Send message',
			sending: 'Sending…',
			reply: 'We reply within one working day.',
			success: 'Thank you. We will get back to you within one working day.',
			error: 'That did not go through. Please email us instead.',
			note: 'Prefer not to use a form? Book a call or email us directly.'
		}
	},
	footer: {
		impressum: 'Impressum',
		datenschutz: 'Datenschutz'
	}
};
