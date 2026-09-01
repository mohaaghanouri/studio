<script>
	import { base } from '$app/paths';
	import { contact, site } from '$lib/copy/contact.js';
	import Footer from '$lib/Footer.svelte';
	import { artFor } from '$lib/art.js';
	import { PLACEHOLDERS } from '$lib/preview.js';
	import { roster } from '$lib/copy/roster.js';

	export let copy;
	export let item;

	const isEn = copy.lang === 'en';
	const art = artFor(item.slug);
	const home = isEn ? `${base}/` : `${base}/de/`;
	const canonical = `${site}${isEn ? '' : '/de'}/work/${item.slug}/`;

	// Position in the set, shown as 01/06 in the rail.
	const index = copy.built.items.findIndex((i) => i.slug === item.slug) + 1;
	const total = copy.built.items.length;
	const pad = (n) => String(n).padStart(2, '0');
	// Research and the exam work are services, not head-counted groups — hence undefined.
	const people = roster.find((r) => r.slug === item.slug)?.count;

	// Two levels only: /work/ has no index page, so an intermediate crumb would
	// point at a 404. Google's spec omits `item` on the final crumb.
	const breadcrumbLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: isEn ? 'Home' : 'Startseite',
				item: `${site}${isEn ? '/' : '/de/'}`
			},
			{ '@type': 'ListItem', position: 2, name: item.label }
		]
	});
</script>

<svelte:head>
	<title>{item.title ?? `${item.label} — ${contact.name}`}</title>
	<meta name="description" content={item.metaDescription ?? item.headline} />
	<link rel="canonical" href={canonical} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={item.title ?? `${item.label} — ${contact.name}`} />
	<meta property="og:description" content={item.metaDescription ?? item.headline} />
	<link rel="alternate" hreflang="en" href="{site}/work/{item.slug}/" />
	<link rel="alternate" hreflang="de" href="{site}/de/work/{item.slug}/" />
	<link rel="alternate" hreflang="x-default" href="{site}/work/{item.slug}/" />
	<meta property="og:url" content={canonical} />
	<meta property="og:locale" content={isEn ? 'en_US' : 'de_DE'} />
	<meta property="og:image" content="{site}/og/{isEn ? '' : 'de-'}{item.slug}.png" />
	{#if PLACEHOLDERS}
		<meta name="robots" content="noindex, nofollow" />
	{/if}
	{@html `<script type="application/ld+json">${breadcrumbLd}</script>`}
</svelte:head>

<div class="shell">
	<!-- Left rail: metadata stays put while the case scrolls past it -->
	<aside class="rail">
		<div class="rail-top">
			<a class="back" href="{base}{isEn ? '' : '/de'}/work/">
				<span aria-hidden="true">←</span> {copy.studio.workBack}
			</a>
			<span class="rail-lang">
				{#if isEn}
					<span aria-current="true">EN</span><a
						href="{base}/de/work/{item.slug}/"
						data-sveltekit-reload>DE</a
					>
				{:else}
					<a href="{base}/work/{item.slug}/" data-sveltekit-reload>EN</a><span
						aria-current="true">DE</span
					>
				{/if}
			</span>
		</div>

		<dl>
			<dt>{copy.studio.workName}</dt>
			<dd class="rail-name">{item.label}</dd>

			{#if people}
				<dt>{copy.studio.workPeople}</dt>
				<dd>{people}</dd>
			{/if}

			<dt class="covers">{copy.studio.workCovers}</dt>
			<dd class="covers">
				<ul>
					{#each item.machinery as line}
						<li>{line}</li>
					{/each}
				</ul>
			</dd>
		</dl>

		<p class="rail-index" aria-hidden="true">{pad(index)} / {pad(total)}</p>
	</aside>

	<main class="body">
		<header class="plate">
			<img src="{base}/work/{item.slug}.svg" alt="" width="1200" height="750" />
		</header>

		<div class="prose">
			<h1>{item.headline}</h1>
			{#each item.story as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>

		<!-- The seam. What the machine takes on the left, what stays the person's on
		     the right. This split is the whole argument of the site. -->
		<section class="seam">
			<div>
				<p class="meta">{copy.studio.workMachinery}</p>
				<ul class="mach">
					{#each item.machinery as line}<li>{line}</li>{/each}
				</ul>
			</div>
			<div>
				<p class="meta">{copy.studio.workJudgement}</p>
				<ul class="judge">
					{#each item.judgement as line}<li>{line}</li>{/each}
				</ul>
			</div>
		</section>

		<section class="builds">
			<p class="meta">{copy.studio.workBuilds}</p>
			<dl>
				{#each item.builds as build}
					<dt>{build.name}</dt>
					<dd>{build.text}</dd>
				{/each}
			</dl>
		</section>

		<section class="stops">
			<p class="meta">{copy.studio.workStops}</p>
			<h2>{item.stops.title}</h2>
			{#each item.stops.text as paragraph}<p>{paragraph}</p>{/each}
		</section>

		<section class="notes">
			<div>
				<p class="meta">{copy.studio.workProof}</p>
				<p>{item.proof}</p>
			</div>
			<div>
				<p class="meta">{copy.studio.workRefuse}</p>
				<p>{item.refuse}</p>
			</div>
			<div>
				<p class="meta">{copy.studio.workCost}</p>
				<p>{item.cost}</p>
			</div>
		</section>

		<section class="voices">
			<p class="meta">{copy.testimonials.eyebrow}</p>
			<div class="quotes">
				{#each item.quotes as quote}
					<blockquote>
						<p>{quote.text}</p>
						<footer class="meta">{quote.name}</footer>
					</blockquote>
				{/each}
			</div>
		</section>

		<section class="cta">
			<p class="meta">{copy.contactSection.eyebrow}</p>
			<h2>{copy.contactSection.title}</h2>
			<p class="lead">{copy.contactSection.lead}</p>
			<div class="cta-row">
				<a class="btn btn-primary" href="{home}#contact">{copy.hero.button}</a>
				<a class="btn" href="mailto:{contact.email}">{copy.contactSection.form.email}</a>
				{#if contact.whatsapp}
					<a class="btn" href="https://wa.me/{contact.whatsapp}" rel="noopener">WhatsApp</a>
				{/if}
			</div>
		</section>

		<nav class="more" aria-label={copy.studio.worksLabel}>
			<p class="meta">{copy.studio.worksLabel}</p>
			<ul>
				{#each copy.built.items.filter((i) => i.slug !== item.slug) as other}
					<li>
						<a href="{base}{isEn ? '' : '/de'}/work/{other.slug}/">
							<span class="dot" style="--tint:{artFor(other.slug).tint}" aria-hidden="true"></span>
							{other.label}
							<span class="arrow" aria-hidden="true">↗</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<Footer {copy} />
	</main>
</div>

<style>
	.shell {
		display: grid;
		grid-template-columns: 22rem minmax(0, 1fr);
	}

	/* ---- left rail ---- */
	.rail {
		position: sticky;
		top: 0;
		align-self: start;
		height: 100vh;
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		padding: 2rem;
		border-right: 1px solid var(--line);
		overflow-y: auto;
	}

	.rail-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.rail-lang {
		display: flex;
		gap: 0.5rem;
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.1em;
		color: var(--faint);
	}

	.rail-lang a,
	.rail-lang span {
		min-width: 1.5rem;
		min-height: 1.5rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: var(--faint);
	}

	.rail-lang [aria-current] {
		color: var(--text);
	}

	.rail-lang a:hover {
		color: var(--accent);
	}

	.back {
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--faint);
		text-decoration: none;
		/* 24px minimum touch target */
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		min-height: 1.5rem;
		align-self: start;
	}

	.back:hover {
		color: var(--accent);
	}

	.rail dl {
		margin: 0;
		display: grid;
		gap: 0.5rem;
	}

	.rail dt {
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--ghost);
		margin-top: 1.5rem;
	}

	.rail dd {
		margin: 0;
		font-size: 0.9375rem;
		color: var(--muted);
	}

	.rail-name {
		font-family: var(--mono);
		font-size: var(--t-label);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text) !important;
	}

	.rail ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: 0.6rem;
	}

	.rail ul li {
		padding-left: 1rem;
		position: relative;
	}

	.rail ul li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.62em;
		width: 0.45rem;
		height: 1px;
		background: var(--accent);
	}

	.rail-index {
		margin-top: auto;
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.1em;
		color: var(--ghost);
	}

	/* ---- body ---- */
	/* A fixed band, not an aspect-ratio: 21/9 pushed the headline below the fold,
	   and aspect-ratio + max-height made the box derive its width from the clamped
	   height, so the plate stopped short of the column. */
	.plate {
		height: clamp(10rem, 20vw, 16rem);
		width: 100%;
		border-bottom: 1px solid var(--line);
		overflow: hidden;
	}

	.plate img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.prose {
		padding: clamp(3rem, 7vw, 6rem) clamp(1.5rem, 5vw, 5rem);
		max-width: 46rem;
	}

	.prose h1 {
		font-size: clamp(2rem, 4.5vw, 3.25rem);
		margin-bottom: 2rem;
	}

	.prose p {
		color: var(--muted);
		margin-bottom: 1.25rem;
	}

	.seam,
	.builds,
	.stops,
	.notes,
	.voices {
		padding: clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 5rem);
		border-top: 1px solid var(--line);
	}

	.seam {
		display: grid;
		grid-template-columns: 1.35fr 1fr;
		gap: clamp(2rem, 5vw, 4rem);
	}

	.seam ul {
		list-style: none;
		margin: 1.25rem 0 0;
		padding: 0;
		display: grid;
		gap: 0.7rem;
	}

	.seam li {
		position: relative;
		padding-left: 1.25rem;
		color: var(--muted);
		font-size: 0.9375rem;
	}

	.seam li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.6em;
		width: 0.55rem;
		height: 1px;
	}

	.mach li::before {
		background: var(--accent);
	}

	/* Judgement reads as the quieter, protected column — no accent, italic. */
	.judge li {
		font-style: italic;
		color: var(--text);
	}

	.judge li::before {
		background: var(--ghost);
	}

	@media (max-width: 52rem) {
		.seam {
			grid-template-columns: 1fr;
		}
	}

	.builds dl {
		margin: 1.5rem 0 0;
		max-width: 46rem;
	}

	.builds dt {
		font-family: var(--mono);
		font-size: var(--t-label);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--text);
		margin-top: 1.75rem;
	}

	.builds dt:first-of-type {
		margin-top: 0;
	}

	.builds dd {
		margin: 0.5rem 0 0;
		color: var(--muted);
	}

	/* The refusal section is the differentiator, so it gets the only tinted panel. */
	.stops h2 {
		font-size: clamp(1.375rem, 2.6vw, 1.875rem);
		margin: 1rem 0 1.25rem;
		max-width: 30ch;
	}

	.stops p {
		color: var(--muted);
		max-width: 46rem;
		margin-bottom: 1rem;
	}

	.notes {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		gap: clamp(1.5rem, 4vw, 3rem);
	}

	.voices .quotes {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
		gap: clamp(1.5rem, 4vw, 3rem);
		margin-top: 1.5rem;
	}

	.voices blockquote {
		margin: 0;
		padding-left: 1.25rem;
		border-left: 2px solid var(--line);
	}

	.voices blockquote p {
		color: var(--text);
		font-size: 0.9375rem;
	}

	.voices blockquote footer {
		margin-top: 0.9rem;
		color: var(--faint);
	}

	.notes p:not(.meta) {
		color: var(--muted);
		font-size: 0.9375rem;
		margin-top: 0.75rem;
	}

	.cta,
	.more {
		padding: clamp(2.5rem, 5vw, 4rem) clamp(1.5rem, 5vw, 5rem);
		border-top: 1px solid var(--line);
	}

	.cta h2 {
		font-size: clamp(1.75rem, 3.5vw, 2.5rem);
		margin: 1rem 0;
		max-width: 24ch;
	}

	.cta .lead {
		color: var(--muted);
		max-width: 34rem;
		margin-bottom: 2rem;
	}

	.cta-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.more ul {
		list-style: none;
		margin: 1.5rem 0 0;
		padding: 0;
	}

	.more li + li {
		border-top: 1px solid var(--line);
	}

	.more a {
		display: flex;
		align-items: center;
		gap: 0.85rem;
		padding: 1.1rem 0;
		text-decoration: none;
		color: var(--muted);
		font-family: var(--mono);
		font-size: var(--t-label);
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.more a:hover {
		color: var(--text);
	}

	.dot {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		background: var(--tint);
		flex-shrink: 0;
	}

	.arrow {
		margin-left: auto;
		color: var(--ghost);
	}




	/* ---- stack the rail above the case on narrow screens ---- */
	@media (max-width: 60rem) {
		.shell {
			grid-template-columns: 1fr;
		}
		.rail {
			position: static;
			height: auto;
			border-right: 0;
			border-bottom: 1px solid var(--line);
			gap: 1.5rem;
		}
		.rail-index {
			margin-top: 0;
		}
		/* Stacked, the rail stops being a sidebar and becomes a wall of text in
		   front of the headline — and it is the same list the seam section shows
		   further down. Keep the metadata, drop the duplicate. */
		.covers {
			display: none;
		}
	}
</style>
