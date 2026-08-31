<script>
	import { base } from '$app/paths';
	import { contact, site, profileLinks } from '$lib/copy/contact.js';
	import { artFor } from '$lib/art.js';
	import { PLACEHOLDERS } from '$lib/preview.js';

	export let copy;

	const isEn = copy.lang === 'en';
	const home = isEn ? `${base}/` : `${base}/de/`;
	const prefix = isEn ? '' : '/de';
	const canonical = `${site}${prefix}/work/`;
	const items = copy.built.items;
	const pad = (n) => String(n).padStart(2, '0');

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
			{ '@type': 'ListItem', position: 2, name: copy.studio.worksLabel }
		]
	});
</script>

<svelte:head>
	<title>{copy.studio.worksLabel} — {contact.name}</title>
	<meta name="description" content={copy.studio.worksMeta} />
	<link rel="canonical" href={canonical} />
	<link rel="alternate" hreflang="en" href="{site}/work/" />
	<link rel="alternate" hreflang="de" href="{site}/de/work/" />
	<link rel="alternate" hreflang="x-default" href="{site}/work/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="{copy.studio.worksLabel} — {contact.name}" />
	<meta property="og:description" content={copy.studio.worksMeta} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content="{site}/og/{isEn ? '' : 'de-'}work.png" />
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
				<span aria-hidden="true">←</span> {isEn ? 'Home' : 'Startseite'}
			</a>
			<span class="lang">
				{#if isEn}
					<span aria-current="true">EN</span><a href="{base}/de/work/" data-sveltekit-reload>DE</a>
				{:else}
					<a href="{base}/work/" data-sveltekit-reload>EN</a><span aria-current="true">DE</span>
				{/if}
			</span>
		</div>

		<p class="meta">{copy.studio.worksLabel} · {pad(items.length)}</p>
		<h1>{copy.studio.worksHeading}</h1>
		<p class="intro">{copy.studio.worksIntro}</p>
	</header>

	<ul class="cases">
		{#each items as item, i}
			<li>
				<a href="{base}{prefix}/work/{item.slug}/">
					<span class="idx" aria-hidden="true">{pad(i + 1)}</span>
					<img src="{base}/work/{item.slug}.svg" alt="" width="1200" height="750" loading="lazy" />
					<div class="body">
						<h2>{item.label}</h2>
						<p>{item.headline}</p>
					</div>
					<span class="dot" style="--tint:{artFor(item.slug).tint}" aria-hidden="true"></span>
				</a>
			</li>
		{/each}
	</ul>

	<section class="cta">
		<p class="meta">{copy.contactSection.eyebrow}</p>
		<h2 class="cta-title">{copy.contactSection.title}</h2>
		<p class="lead">{copy.contactSection.lead}</p>
		<div class="row">
			<a class="btn btn-primary" href="{home}#contact">{copy.hero.button}</a>
			<a class="btn" href="mailto:{contact.email}">{copy.contactSection.form.email}</a>
			{#if contact.whatsapp}
				<a class="btn" href="https://wa.me/{contact.whatsapp}" rel="noopener">WhatsApp</a>
			{/if}
		</div>
	</section>

	<footer class="foot">
		<p>© {contact.name} · {contact.address || contact.city}</p>
		<p>
			<a href="mailto:{contact.email}">{contact.email}</a>
			{#each profileLinks as p}
				{' · '}<a href={p.url} rel="me noopener">{p.label}</a>
			{/each}
			· <a href="{base}/impressum/">{copy.footer.impressum}</a>
			· <a href="{base}/datenschutz/">{copy.footer.datenschutz}</a>
		</p>
	</footer>
</div>

<style>
	.wrap {
		max-width: 72rem;
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

	.back:hover {
		color: var(--accent);
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
		font-size: clamp(2.25rem, 6vw, 4rem);
		max-width: 24ch;
		margin: 1.25rem 0 1.5rem;
	}

	.intro {
		color: var(--muted);
		font-size: var(--t-lead);
		max-width: 38rem;
	}

	/* One ruled row per case — an index, not another card grid */
	.cases {
		list-style: none;
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--line);
	}

	.cases li {
		border-bottom: 1px solid var(--line);
	}

	.cases a {
		display: grid;
		grid-template-columns: 3rem 8rem minmax(0, 1fr) auto;
		align-items: center;
		gap: clamp(1rem, 3vw, 2.5rem);
		padding: 1.5rem 0;
		text-decoration: none;
		color: inherit;
		transition: background-color 0.2s ease;
	}

	.cases a:hover {
		background: var(--raised);
	}

	.idx {
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.1em;
		color: var(--ghost);
	}

	.cases img {
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 10;
		object-fit: cover;
		border-radius: 6px;
		border: 1px solid var(--line);
		display: block;
	}

	.cases h2 {
		font-family: var(--mono);
		font-size: var(--t-label);
		font-weight: 400;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-bottom: 0.5rem;
	}

	.cases .body p {
		color: var(--muted);
		font-size: 0.9375rem;
		max-width: 44ch;
	}

	.dot {
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
		background: var(--tint);
	}

	@media (max-width: 52rem) {
		.cases a {
			grid-template-columns: 2.5rem minmax(0, 1fr);
			align-items: start;
		}
		.cases img,
		.dot {
			display: none;
		}
	}

	.cta {
		padding: clamp(3rem, 6vw, 5rem) 0;
		border-bottom: 1px solid var(--line);
	}

	.cta-title {
		font-size: clamp(1.75rem, 4vw, 2.75rem);
		margin: 1rem 0;
		max-width: 24ch;
	}

	.lead {
		color: var(--muted);
		max-width: 34rem;
		margin-bottom: 2rem;
	}

	.row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.foot {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.5rem 2rem;
		padding: 2rem 0 4rem;
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--faint);
	}

	.foot a {
		color: var(--faint);
		text-decoration: none;
		display: inline-block;
		padding: 0.35rem 0;
	}

	.foot a:hover {
		color: var(--text);
	}
</style>
