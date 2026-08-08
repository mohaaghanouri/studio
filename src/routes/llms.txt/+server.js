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
	'content-creators': 'scripts, captions and research without losing your own voice.',
	'buying-a-home':
		'a property search that reads every listing and checks documents before viewing.',
	'finding-a-job': 'a matching tool that reads each ad in full; around twenty people placed.',
	research: 'reading, summarising and reference workflows for PhD students and professors.',
	'marketing-product': 'surveys, catalogues and reports distilled, with sources.',
	'language-exams': 'IELTS and exam prep aimed at the weakness costing the most points.'
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
