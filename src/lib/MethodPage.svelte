<script>
	import { base } from '$app/paths';
	import { contact, site } from '$lib/copy/contact.js';
	import Footer from '$lib/Footer.svelte';
	import { PLACEHOLDERS } from '$lib/preview.js';

	export let copy;

	const isEn = copy.lang === 'en';
	const home = isEn ? `${base}/` : `${base}/de/`;
	const prefix = isEn ? '' : '/de';
	const canonical = `${site}${prefix}/method/`;
	const m = copy.method;

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
			{ '@type': 'ListItem', position: 2, name: m.label }
		]
	});
</script>

<svelte:head>
	<title>{m.title}</title>
	<meta name="description" content={m.metaDescription} />
	<link rel="canonical" href={canonical} />
	<link rel="alternate" hreflang="en" href="{site}/method/" />
	<link rel="alternate" hreflang="de" href="{site}/de/method/" />
	<link rel="alternate" hreflang="x-default" href="{site}/method/" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={m.title} />
	<meta property="og:description" content={m.metaDescription} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content="{site}/og/{isEn ? '' : 'de-'}method.png" />
	<meta property="og:locale" content={isEn ? 'en_US' : 'de_DE'} />
	{#if PLACEHOLDERS}
		<meta name="robots" content="noindex, nofollow" />
	{/if}
	{@html `<script type="application/ld+json">${breadcrumbLd}</script>`}
</svelte:head>

<div class="wrap">
	<header class="top">
		<div class="bar">
			<a class="back" href={home}>
				<img src="{base}/brand/dinobridge-horizontal-compact-white.svg" alt="{contact.brand} — {isEn ? 'Home' : 'Startseite'}" height="32" />
			</a>
			<span class="lang">
				{#if isEn}
					<span aria-current="true">EN</span><a href="{base}/de/method/" data-sveltekit-reload>DE</a>
				{:else}
					<a href="{base}/method/" data-sveltekit-reload>EN</a><span aria-current="true">DE</span>
				{/if}
			</span>
		</div>

		<p class="meta">{m.label}</p>
		<h1>{m.headline}</h1>
		{#each m.intro as paragraph}
			<p class="intro">{paragraph}</p>
		{/each}
	</header>

	<!-- The two tests, side by side. Machinery needs all four; judgement needs one. -->
	<section class="tests">
		<h2 class="statement">{m.testsTitle}</h2>
		<div class="cols">
			<div>
				<p class="meta">{m.machineryLabel}</p>
				<ol class="mach">
					{#each m.machinery as test}<li>{test}</li>{/each}
				</ol>
			</div>
			<div>
				<p class="meta">{m.judgementLabel}</p>
				<ol class="judge">
					{#each m.judgement as test}<li>{test}</li>{/each}
				</ol>
			</div>
		</div>
		<p class="seam">{m.seam}</p>
	</section>

	<section class="phases">
		<p class="meta">{copy.studio.capabilitiesLabel}</p>
		<h2 class="statement">{copy.how.title}</h2>
		<ol>
			{#each copy.how.steps as step, i}
				<li>
					<span class="idx" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
					<div>
						<h3>{step.title}</h3>
						<p>{step.text}</p>
					</div>
				</li>
			{/each}
		</ol>
	</section>

	<section class="refuse">
		<h2 class="statement">{m.refuseTitle}</h2>
		<p class="lead">{m.refuseIntro}</p>
		<dl>
			{#each m.refuse as item}
				<dt>{item.title}</dt>
				<dd>{item.text}</dd>
			{/each}
		</dl>
	</section>

	<section class="registers">
		<h2 class="statement">{m.registersTitle}</h2>
		<p class="lead">{m.registersText}</p>
	</section>

	<section class="cta">
		<p class="meta">{copy.contactSection.eyebrow}</p>
		<h2 class="cta-title">{copy.contactSection.title}</h2>
		<p class="lead">{copy.contactSection.lead}</p>
		<div class="row">
			<a class="btn btn-primary" href="{home}#contact">{copy.hero.button}</a>
			<a class="btn" href="{base}{prefix}/work/">{m.casesCta}</a>
		</div>
	</section>

	<Footer {copy} />
</div>

<style>
	.wrap {
		max-width: 66rem;
		margin: 0 auto;
		padding: 0 clamp(1.25rem, 4vw, 3rem);
	}

	.top {
		padding: 2rem 0 clamp(3rem, 6vw, 5rem);
	}

	.bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
		padding-bottom: clamp(3rem, 7vw, 6rem);
	}

	.back,
	.lang {
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--faint);
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		min-height: 1.5rem;
	}

	.back img {
		display: block;
		height: 2rem;
		width: auto;
		transition: opacity 0.2s ease;
	}

	.back:hover img {
		opacity: 0.7;
	}

	.lang a,
	.lang span {
		min-width: 1.5rem;
		min-height: 1.5rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		color: var(--faint);
	}

	.lang [aria-current] {
		color: var(--text);
	}

	.lang a:hover {
		color: var(--accent);
	}

	h1 {
		font-size: clamp(1.875rem, 4.5vw, 3.25rem);
		max-width: 24ch;
		margin: 1.25rem 0 2rem;
	}

	.intro {
		color: var(--muted);
		font-size: var(--t-lead);
		max-width: 42rem;
		margin-bottom: 1.25rem;
	}

	section {
		padding: clamp(2.5rem, 5vw, 4rem) 0;
		border-top: 1px solid var(--line);
	}

	.cols {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(2rem, 5vw, 4rem);
		margin-top: 2rem;
	}

	@media (max-width: 46rem) {
		.cols {
			grid-template-columns: 1fr;
		}
	}

	.cols ol {
		list-style: none;
		margin: 1.25rem 0 0;
		padding: 0;
		display: grid;
		gap: 0.9rem;
		counter-reset: t;
	}

	.cols li {
		position: relative;
		padding-left: 1.75rem;
		color: var(--muted);
		font-size: 0.9375rem;
		counter-increment: t;
	}

	.cols li::before {
		content: counter(t);
		position: absolute;
		left: 0;
		top: 0.1em;
		font-family: var(--mono);
		font-size: var(--t-meta);
	}

	.mach li::before {
		color: var(--accent);
	}

	/* Judgement is the protected column, so it reads quieter and set in italic. */
	.judge li {
		font-style: italic;
		color: var(--text);
	}

	.judge li::before {
		color: var(--ghost);
	}

	.seam {
		margin-top: clamp(2rem, 4vw, 3rem);
		max-width: 46rem;
		color: var(--text);
	}

	.phases ol {
		list-style: none;
		margin: 2rem 0 0;
		padding: 0;
		display: grid;
		gap: 0;
		border-top: 1px solid var(--line);
	}

	.phases li {
		display: grid;
		grid-template-columns: 3rem minmax(0, 1fr);
		gap: clamp(1rem, 3vw, 2rem);
		padding: 1.5rem 0;
		border-bottom: 1px solid var(--line);
	}

	.idx {
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.1em;
		color: var(--ghost);
	}

	.phases h3 {
		font-size: 1.125rem;
		margin-bottom: 0.5rem;
	}

	.phases p {
		color: var(--muted);
		font-size: 0.9375rem;
		max-width: 52ch;
	}

	.refuse dl {
		margin: 2rem 0 0;
		max-width: 46rem;
	}

	.refuse dt {
		font-family: var(--mono);
		font-size: var(--t-label);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		margin-top: 1.75rem;
	}

	.refuse dt:first-of-type {
		margin-top: 0;
	}

	.refuse dd {
		margin: 0.5rem 0 0;
		color: var(--muted);
		font-size: 0.9375rem;
	}

	.lead {
		color: var(--muted);
		max-width: 46rem;
		margin-top: 1rem;
	}

	.cta-title {
		font-size: clamp(1.75rem, 4vw, 2.75rem);
		margin: 1rem 0;
		max-width: 24ch;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 2rem;
	}



</style>
