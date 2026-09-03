import en from '$lib/copy/en.js';
import { site, contact } from '$lib/copy/contact.js';

export const prerender = true;

// Generated rather than hand-written (it used to be static/llms.txt). Two reasons:
// the name, email and Cal link now come from contact.js like everywhere else, and
// the use-case list is derived from en.built.items — so adding a case study can no
// longer leave this file silently out of date.
//
// The one-line summaries are deliberately shorter than the site copy: this file is
// read by machines skimming for what each page covers, not by visitors.
const blurbs = {
	'job-seekers': 'an evidence bank and an advert reader that refuses to exaggerate; thirty people placed.',
	athletes: 'match footage tagged, a scout-ready profile, a log that flags but never prescribes.',
	'content-creators': 'scripts, captions and clip candidates — no AI voice, no generated script.',
	'home-buyers': 'a watcher that catches listings in minutes and a rejecter that says why.',
	lawyers: 'contract intake, versioning and a first-pass Word markup with a reason per change.',
	teachers: 'worksheet variants and a rubric pass that locates evidence and withholds the grade.',
	coaches: 'booking first, then voice-note session notes; for three of five the answer was not AI.',
	'product-managers': 'feedback clustered with raw quotes kept; it never prioritises or scores.',
	'online-shoppers': 'price history, review filtering and a subscription audit. One afternoon.',
	architects: 'drawing register, quote normalising, same-evening site Protokolle. Never certifies.',
	'project-managers': 'meetings to actions and a status report built from what changed.',
	surveyors: 'site capture and your own tested wordings; it never assesses, concludes or values.',
	'event-organizers': 'one record per event; nothing is booked or committed automatically.',
	dentists: 'recall, cancellation filling and confirmed dictation notes. Nothing clinical.',
	'team-leaders': 'a private record per person and 1:1 prep. No ratings, no activity monitoring.',
	'estate-agents': 'lead triage in minutes and compliant Exposés. No valuation, no generated photos.',
	executives: 'inbox triage, a pre-meeting brief and a commitment ledger. It never speaks as you.',
	chefs: 'invoice reading and live dish costing. Food cost 34% back to 28.5%.',
	'volunteer-orgs': 'a reusable core reshaped per funder; no impact claim is ever generated.',
	research: 'reusable proposal text, supervision records and literature screening. Never generates a citation.',
	'language-exams': 'a per-criterion diagnostic and an error ledger. It never promises a score.'
};

const host = site.replace(/^https?:\/\//, '');

export function GET() {
	const cases = en.built.items.map(
		({ slug, label }) => `- [${label}](${site}/work/${slug}/): ${blurbs[slug] ?? ''}`.trimEnd()
	);

	const body = `# ${host}

> ${contact.brand} — AI consulting for working professionals: small AI tools that take over the
> repetitive part of the week while every decision stays with the person. Lawyers, teachers,
> dentists, surveyors, researchers and other fields. ${contact.city}, English and German.
> ${contact.brand} is one expert, ${contact.name}: you deal with him directly, no agency, no handoffs.

Honest note on this file: as of 2026 no major LLM provider consumes /llms.txt as a
ranking or citation signal, and Google Search states in writing that it ignores it.
It exists here because it costs nothing to maintain and the agentic-browsing
convention may yet go somewhere. The file every engine actually reads is
/sitemap.xml.

## Pages

- [Home (English)](${site}/): what Dinobridge does, who it helps, how it works, pricing approach, FAQ.
- [Startseite (Deutsch)](${site}/de/): dieselben Inhalte auf Deutsch.
- [How we decide what to build](${site}/method/): the four tests that separate repetitive work
  from judgement, the four steps of every project, and the five reasons we say no.

## Real examples

${cases.join('\n')}

## Legal

- [Impressum](${site}/impressum/)
- [Datenschutz](${site}/datenschutz/)

## Contact

- Book a 30-minute discovery call: https://cal.com/${contact.cal}/${contact.calEvent}
- Email: ${contact.email}
`;

	return new Response(body, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
