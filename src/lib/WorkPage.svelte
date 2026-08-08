<script>
	import { base } from '$app/paths';
	import { contact, site } from '$lib/copy/contact.js';
	import { artFor } from '$lib/art.js';
	import { PLACEHOLDERS } from '$lib/preview.js';

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
</script>

<svelte:head>
	<title>{item.label} — Moha Aghanoori</title>
	<meta name="description" content={item.headline} />
	<link rel="canonical" href={canonical} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content="{item.label} — Moha Aghanoori" />
	<meta property="og:description" content={item.headline} />
	<meta property="og:image" content="{site}/og.png" />
	{#if PLACEHOLDERS}
		<meta name="robots" content="noindex, nofollow" />
	{/if}
</svelte:head>

{#if PLACEHOLDERS}
	<p class="preview-flag">
		Preview build — figures are placeholders and the availability line is invented
	</p>
{/if}

<div class="shell">
	<!-- Left rail: metadata stays put while the case scrolls past it -->
	<aside class="rail">
		<a class="back" href={home}>
			<span aria-hidden="true">←</span> {copy.studio.workBack}
		</a>

		<dl>
			<dt>{copy.studio.workName}</dt>
			<dd class="rail-name">{item.label}</dd>

			<dt>{copy.studio.workOverview}</dt>
			<dd>{item.headline}</dd>

			<dt>{copy.studio.workCovers}</dt>
			<dd>
				<ul>
					{#each item.handles as handle}
						<li>{handle}</li>
					{/each}
				</ul>
			</dd>
		</dl>

		<p class="rail-index" aria-hidden="true">{pad(index)} / {pad(total)}</p>
	</aside>

	<main class="body">
		<header class="plate" style="--tint:{art.tint}">
			<span aria-hidden="true">{art.mark}</span>
		</header>

		<div class="prose">
			<h1>{item.headline}</h1>
			{#each item.story as paragraph}
				<p>{paragraph}</p>
			{/each}
		</div>

		<section class="cta">
			<p class="meta">{copy.contactSection.eyebrow}</p>
			<h2>{copy.contactSection.title}</h2>
			<p class="lead">{copy.contactSection.lead}</p>
			<div class="cta-row">
				<a class="btn btn-primary" href="{home}#contact">{copy.hero.button}</a>
				<a class="btn" href="mailto:{contact.email}">{copy.contactSection.form.email}</a>
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

		<footer class="foot">
			<p>© Moha Aghanoori · {contact.address || contact.city}</p>
			<p>
				<a href="{base}/impressum/">{copy.footer.impressum}</a>
				· <a href="{base}/datenschutz/">{copy.footer.datenschutz}</a>
			</p>
		</footer>
	</main>
</div>

<style>
	.preview-flag {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		text-align: center;
		padding: 0.6rem 1.25rem;
		background: var(--accent);
		color: var(--accent-ink);
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

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

	.back {
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--faint);
		text-decoration: none;
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
	.plate {
		aspect-ratio: 21 / 9;
		display: grid;
		place-items: center;
		border-bottom: 1px solid var(--line);
		background:
			radial-gradient(
				120% 140% at 50% 30%,
				color-mix(in srgb, var(--tint) 30%, white) 0%,
				var(--tint) 55%,
				color-mix(in srgb, var(--tint) 72%, black) 100%
			);
	}

	.plate span {
		font-size: clamp(3rem, 7vw, 6rem);
		line-height: 1;
		color: color-mix(in srgb, var(--tint) 45%, black);
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

	.foot {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.5rem 2rem;
		padding: 2rem clamp(1.5rem, 5vw, 5rem) 4rem;
		border-top: 1px solid var(--line);
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--faint);
	}

	.foot a {
		color: var(--faint);
		text-decoration: none;
	}

	.foot a:hover {
		color: var(--text);
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
	}
</style>
