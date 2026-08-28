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
	'project-managers': 'meetings to actions and a status report built from the diff, not the state.',
	surveyors: 'site capture and your own tested wordings; it never assesses, concludes or values.',
	'event-organizers': 'one event spine; nothing is booked or committed by the machine.',
	dentists: 'recall, cancellation filling and confirmed dictation notes. Nothing clinical.',
	'team-leaders': 'a private record per person and 1:1 prep. No ratings, no activity monitoring.',
	'estate-agents': 'lead triage in minutes and compliant Exposés. No valuation, no generated photos.',
	executives: 'inbox triage, a pre-meeting brief and a commitment ledger. It never speaks as you.',
	chefs: 'invoice reading and live dish costing. Food cost 34% back to 28.5%.',
	'volunteer-orgs': 'a reusable core reshaped per funder; no impact claim is ever generated.',
	research: 'a proposal core, supervision records and screening. Never generates a citation.',
	'language-exams': 'a per-criterion diagnostic and an error ledger. It never promises a score.'
};

const host = site.replace(/^https?:\/\//, '');

export function GET() {
	const cases = en.built.items.map(
		({ slug, label }) => `- [${label}](${site}/work/${slug}/): ${blurbs[slug] ?? ''}`.trimEnd()
	);

	const body = `# ${host}

> ${contact.name} — AI consulting and one-to-one coaching for working professionals
> (dentists, lawyers, tax advisors, researchers, marketers). ${contact.city}, English and German.
> Six years building AI systems. You deal with him directly; no agency, no handoffs.

Honest note on this file: as of 2026 no major LLM provider consumes /llms.txt as a
ranking or citation signal, and Google Search states in writing that it ignores it.
It exists here because it costs nothing to maintain and the agentic-browsing
convention may yet go somewhere. The file every engine actually reads is
/sitemap.xml.

## Pages

- [Home (English)](${site}/): what he does, who he helps, how it works, pricing approach, FAQ.
- [Startseite (Deutsch)](${site}/de/): dieselben Inhalte auf Deutsch.
- [The method](${site}/method/): how he decides what to build — the machinery-vs-judgement test,
  the four phases, and the five reasons he refuses work.

## Use cases

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
