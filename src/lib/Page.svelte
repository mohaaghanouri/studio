<script>
	import { base } from '$app/paths';
	import { fade } from '$lib/fade.js';
	import { contact, site } from '$lib/copy/contact.js';
	import { PLACEHOLDERS } from '$lib/preview.js';

	export let copy;

	const isEn = copy.lang === 'en';
	const canonical = isEn ? `${site}/` : `${site}/de/`;

	// Four use cases carry the work grid. Art direction is presentational, so it
	// lives here rather than in the copy files.
	const art = [
		{ tint: '#46bee4', mark: '✳' },
		{ tint: '#f2f2f2', mark: '▲' },
		{ tint: '#00dbbe', mark: '✦' },
		{ tint: '#fb8d32', mark: '✜' }
	];
	const works = copy.built.items.slice(0, 4).map((item, i) => ({ ...item, ...art[i] }));

	const faqJsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: copy.faq.items.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: { '@type': 'Answer', text: item.a }
		}))
	});

	let formState = ''; // '' | 'sending' | 'success' | 'error'

	async function submitForm(event) {
		event.preventDefault();
		formState = 'sending';
		try {
			const res = await fetch(event.target.action, {
				method: 'POST',
				body: new FormData(event.target),
				headers: { Accept: 'application/json' }
			});
			formState = res.ok ? 'success' : 'error';
		} catch {
			formState = 'error';
		}
	}
</script>

<svelte:head>
	<title>{copy.meta.title}</title>
	<meta name="description" content={copy.meta.description} />
	<link rel="canonical" href={canonical} />
	<link rel="alternate" hreflang="en" href="{site}/" />
	<link rel="alternate" hreflang="de" href="{site}/de/" />
	<link rel="alternate" hreflang="x-default" href="{site}/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={copy.meta.title} />
	<meta property="og:description" content={copy.meta.description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content="{site}/og.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="og:locale" content={isEn ? 'en_US' : 'de_DE'} />
	{#if PLACEHOLDERS}
		<meta name="robots" content="noindex, nofollow" />
	{:else}
		{@html `<script type="application/ld+json">${faqJsonLd}</script>`}
	{/if}
</svelte:head>

{#if PLACEHOLDERS}
	<p class="preview-flag">
		Preview build — quotes are football placeholders, figures are $$$$, availability is invented
	</p>
{/if}

<header>
	<div class="bar wrap">
		<span class="name">Moha Aghanoori</span>
		<nav aria-label="Site">
			<a href="#work">{copy.studio.worksLabel}</a>
			<a href="#about">{copy.about.eyebrow}</a>
			<a href="#contact">{copy.nav.contact}</a>
			<span class="lang">
				{#if isEn}
					<span aria-current="true">EN</span><a href="{base}/de/" data-sveltekit-reload>DE</a>
				{:else}
					<a href="{base}/" data-sveltekit-reload>EN</a><span aria-current="true">DE</span>
				{/if}
			</span>
		</nav>
	</div>
</header>

<main>
	<section class="hero wrap">
		{#if copy.hero.availability}
			<p class="pill rise"><span class="dot" aria-hidden="true"></span>{copy.hero.availability}</p>
		{/if}
		<h1 class="rise rise-2">{copy.hero.headline}</h1>
		<div class="hero-foot rise rise-3">
			<p class="subline">{copy.hero.subline}</p>
			<div class="hero-cta">
				<a class="btn btn-primary" href="#contact">{copy.hero.button}</a>
				<p class="hero-note">
					<img src="{base}/moha-face.webp" alt="" width="240" height="240" />
					{copy.hero.note}
				</p>
			</div>
		</div>
	</section>

	<!-- Tools, deliberately not framed as clients -->
	<div class="tools-strip">
		<div class="wrap tools">
			<span class="meta">{copy.studio.toolsLabel}</span>
			<ul>
				{#each copy.studio.tools as tool}
					<li>{tool}</li>
				{/each}
			</ul>
		</div>
	</div>

	<section class="wrap" id="work" use:fade>
		<div class="row-head">
			<span class="meta">{copy.studio.worksLabel}</span>
			<span class="meta">/{String(works.length).padStart(2, '0')}</span>
		</div>
		<div class="works">
			{#each works as work}
				<article use:fade>
					<div class="plate" style="--tint:{work.tint}">
						<span aria-hidden="true">{work.mark}</span>
					</div>
					<h3>{work.label}</h3>
					<p>{work.headline}</p>
				</article>
			{/each}
		</div>
	</section>

	<section class="wrap" use:fade>
		<div class="row-head">
			<span class="meta">{copy.studio.statsLabel}</span>
		</div>
		<dl class="stats">
			{#each copy.studio.stats as stat}
				<div>
					<dt>{stat.value}</dt>
					<dd>{stat.label}</dd>
				</div>
			{/each}
		</dl>
	</section>

	<section class="wrap" use:fade>
		<div class="row-head">
			<span class="meta">{copy.who.eyebrow}</span>
		</div>
		<h2 class="statement">{copy.who.title}</h2>
		<ul class="who">
			{#each copy.who.cards as card}
				<li>
					<span class="meta">{card.label}</span>
					<p>{card.text}</p>
				</li>
			{/each}
		</ul>
		<p class="aside">{copy.who.notListed}</p>
	</section>

	<section class="wrap" use:fade>
		<div class="row-head">
			<span class="meta">{copy.studio.capabilitiesLabel}</span>
		</div>
		<h2 class="statement">{copy.how.title}</h2>
		<ol class="steps">
			{#each copy.how.steps as step, i}
				<li>
					<span class="step-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
					<h3>{step.title}</h3>
					<p>{step.text}</p>
				</li>
			{/each}
		</ol>
		<p class="aside">{copy.how.noPrices}</p>
	</section>

	<section class="wrap" id="about" use:fade>
		<div class="row-head">
			<span class="meta">{copy.about.eyebrow}</span>
		</div>
		<h2 class="statement big">{copy.about.title}</h2>
		<div class="about">
			<img
				src="{base}/moha.webp"
				alt={copy.about.photoAlt}
				width="960"
				height="694"
				loading="lazy"
			/>
			<div>
				<p>{copy.about.text}</p>
				<ul class="promises">
					{#each copy.principles.items as item}
						<li><span class="meta">{item.title}</span>{item.text}</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>

	{#if copy.testimonials.items.length}
		<section class="wrap" use:fade>
			<div class="row-head">
				<span class="meta">{copy.testimonials.eyebrow}</span>
			</div>
			<div class="quotes">
				{#each copy.testimonials.items as t}
					<blockquote>
						<p>{t.quote}</p>
						<footer class="meta">{t.name}</footer>
					</blockquote>
				{/each}
			</div>
		</section>
	{/if}

	<section class="wrap" use:fade>
		<div class="row-head">
			<span class="meta">{copy.faq.eyebrow}</span>
		</div>
		<div class="faq">
			{#each copy.faq.items as item}
				<details>
					<summary>{item.q}</summary>
					<p>{item.a}</p>
				</details>
			{/each}
		</div>
	</section>

	<section class="wrap" id="contact" use:fade>
		<div class="row-head">
			<span class="meta">{copy.contactSection.eyebrow}</span>
		</div>
		<h2 class="statement big">{copy.contactSection.title}</h2>
		<div class="reach">
			<div class="reach-side">
				<p class="lead">{copy.contactSection.lead}</p>
				<div class="buttons">
					<a class="btn" href="https://wa.me/{contact.whatsapp}">WhatsApp</a>
					{#if contact.telegram}
						<a class="btn" href="https://t.me/{contact.telegram}">Telegram</a>
					{/if}
					<a class="btn" href="mailto:{contact.email}">Email</a>
				</div>
				<p class="hero-note">
					<img src="{base}/moha-face.webp" alt="" width="240" height="240" />
					{copy.hero.note}
				</p>
			</div>
			{#if contact.formspree}
				{#if formState === 'success'}
					<p class="form-status">{copy.contactSection.form.success}</p>
				{:else}
					<form
						action="https://formspree.io/f/{contact.formspree}"
						method="POST"
						on:submit={submitForm}
					>
						<label>
							<span class="meta">{copy.contactSection.form.name}</span>
							<input type="text" name="name" required />
						</label>
						<label>
							<span class="meta">{copy.contactSection.form.email}</span>
							<input type="email" name="email" required />
						</label>
						<label>
							<span class="meta">{copy.contactSection.form.message}</span>
							<textarea name="message" rows="5" required></textarea>
						</label>
						<button class="btn btn-primary" type="submit" disabled={formState === 'sending'}>
							{copy.contactSection.form.send}
						</button>
						{#if formState === 'error'}
							<p class="form-status">{copy.contactSection.form.error}</p>
						{/if}
						<p class="form-note">{copy.contactSection.form.note}</p>
					</form>
				{/if}
			{/if}
		</div>
	</section>
</main>

<footer>
	<div class="wrap foot">
		<p>© Moha Aghanoori · {contact.city}</p>
		<p>
			<a href="mailto:{contact.email}">{contact.email}</a>
			· <a href="{base}/impressum/">{copy.footer.impressum}</a>
			· <a href="{base}/datenschutz/">{copy.footer.datenschutz}</a>
		</p>
	</div>
</footer>

<style>
	/* ============================================================
	   Layout
	   ============================================================ */
	.wrap {
		max-width: 78rem;
		margin: 0 auto;
		padding-left: clamp(1.25rem, 4vw, 3rem);
		padding-right: clamp(1.25rem, 4vw, 3rem);
	}

	section {
		padding-top: clamp(4rem, 8vw, 7rem);
		padding-bottom: clamp(4rem, 8vw, 7rem);
	}

	/* One hairline per section boundary, drawn on the head row instead of the
	   section edge so full-bleed strips can sit between sections. */
	.row-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding-bottom: 1.25rem;
		margin-bottom: clamp(2rem, 4vw, 3.5rem);
		border-bottom: 1px solid var(--line);
	}

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

	/* ============================================================
	   Header
	   ============================================================ */
	header {
		position: sticky;
		top: 0;
		z-index: 10;
		background: color-mix(in srgb, var(--bg) 82%, transparent);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--line);
	}

	.bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	.name,
	nav {
		font-family: var(--mono);
		font-size: var(--t-label);
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	nav {
		display: flex;
		gap: clamp(1rem, 2.5vw, 2rem);
		align-items: center;
	}

	nav a {
		text-decoration: none;
		color: var(--faint);
	}

	nav a:hover {
		color: var(--text);
	}

	.lang {
		display: flex;
		gap: 0.5rem;
		color: var(--faint);
		border-left: 1px solid var(--line);
		padding-left: clamp(1rem, 2.5vw, 2rem);
	}

	.lang [aria-current] {
		color: var(--text);
	}

	@media (max-width: 34rem) {
		nav a[href='#work'],
		nav a[href='#about'] {
			display: none;
		}
	}

	/* ============================================================
	   Hero
	   ============================================================ */
	.hero {
		padding-top: clamp(3.5rem, 9vh, 6rem);
		padding-bottom: clamp(3.5rem, 9vh, 6rem);
	}

	.pill {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--accent);
		border: 1px solid color-mix(in srgb, var(--accent) 35%, transparent);
		border-radius: 999px;
		padding: 0.45rem 0.9rem;
		margin-bottom: 2.5rem;
	}

	.dot {
		width: 0.4rem;
		height: 0.4rem;
		border-radius: 50%;
		background: var(--accent);
		flex-shrink: 0;
	}

	.hero h1 {
		font-size: clamp(2.75rem, 10vw, 7rem);
		max-width: 20ch;
	}

	.hero-foot {
		display: grid;
		grid-template-columns: 1fr auto;
		gap: clamp(2rem, 5vw, 5rem);
		align-items: end;
		margin-top: clamp(2.5rem, 5vw, 4rem);
		padding-top: clamp(2rem, 4vw, 3rem);
		border-top: 1px solid var(--line);
	}

	.subline {
		max-width: 34rem;
		color: var(--muted);
	}

	.hero-note {
		margin-top: 1.5rem;
		display: flex;
		align-items: center;
		gap: 0.85rem;
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--faint);
	}

	.hero-note img {
		width: 2.5rem;
		height: 2.5rem;
		border-radius: 50%;
		border: 1px solid var(--line-strong);
	}

	@media (max-width: 56rem) {
		.hero-foot {
			grid-template-columns: 1fr;
			align-items: start;
		}
	}

	.rise {
		animation: rise 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both;
	}
	.rise-2 {
		animation-delay: 0.08s;
	}
	.rise-3 {
		animation-delay: 0.16s;
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(14px);
		}
		to {
			opacity: 1;
			transform: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.rise {
			animation: none;
		}
	}

	/* ============================================================
	   Tools strip — full-bleed band between sections
	   ============================================================ */
	.tools-strip {
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
		background: var(--raised);
	}

	.tools {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 1rem clamp(1.5rem, 4vw, 3rem);
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}

	.tools ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem clamp(1.5rem, 4vw, 3rem);
	}

	.tools li {
		font-family: var(--mono);
		font-size: var(--t-ui);
		letter-spacing: 0.06em;
		color: var(--muted);
	}

	/* ============================================================
	   Work grid
	   ============================================================ */
	/* Two columns, so four cases land as a 2x2 with no orphan row. */
	.works {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 3vw, 2.5rem);
	}

	@media (max-width: 44rem) {
		.works {
			grid-template-columns: 1fr;
		}
	}

	.plate {
		aspect-ratio: 16 / 10;
		border-radius: var(--r);
		border: 1px solid var(--line);
		display: grid;
		place-items: center;
		margin-bottom: 1.25rem;
		background:
			radial-gradient(
				120% 130% at 50% 30%,
				color-mix(in srgb, var(--tint) 30%, white) 0%,
				var(--tint) 55%,
				color-mix(in srgb, var(--tint) 72%, black) 100%
			);
		transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);
	}

	.works article:hover .plate {
		transform: translateY(-4px);
	}

	.plate span {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		line-height: 1;
		color: color-mix(in srgb, var(--tint) 45%, black);
	}

	.works h3 {
		font-family: var(--mono);
		font-size: var(--t-label);
		font-weight: 400;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-bottom: 0.6rem;
	}

	.works p {
		color: var(--muted);
		max-width: 32ch;
	}

	/* ============================================================
	   Stats — $$$$ until real figures land
	   ============================================================ */
	.stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
		gap: clamp(1.5rem, 3vw, 2.5rem);
		margin: 0;
	}

	.stats dt {
		font-family: var(--display);
		font-size: clamp(2.5rem, 5vw, 3.75rem);
		line-height: 1;
		letter-spacing: -0.02em;
		color: var(--accent);
	}

	.stats dd {
		margin: 0.75rem 0 0;
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--faint);
	}

	/* ============================================================
	   Statements
	   ============================================================ */
	.statement {
		max-width: 26ch;
		margin-bottom: clamp(2.5rem, 5vw, 4rem);
	}

	.statement.big {
		font-size: clamp(2.5rem, 7vw, 5rem);
		max-width: 22ch;
	}

	.aside {
		margin-top: clamp(2rem, 4vw, 3rem);
		color: var(--faint);
		font-size: 0.9375rem;
		max-width: 38rem;
	}

	/* ============================================================
	   Who — compact index, not cards
	   ============================================================ */
	.who {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
		gap: 0;
	}

	.who li {
		border-top: 1px solid var(--line);
		padding: 1.5rem clamp(1rem, 2vw, 2rem) 1.5rem 0;
	}

	.who p {
		margin-top: 0.75rem;
		font-size: 0.9375rem;
		color: var(--muted);
	}

	/* ============================================================
	   Steps
	   ============================================================ */
	.steps {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
		gap: clamp(1.5rem, 3vw, 3rem);
	}

	.steps li {
		border-top: 1px solid var(--line);
		padding-top: 1.5rem;
	}

	.step-number {
		display: block;
		font-family: var(--display);
		font-size: 2.5rem;
		line-height: 1;
		color: var(--ghost);
		margin-bottom: 1.25rem;
	}

	.steps h3 {
		font-size: 1.125rem;
		margin-bottom: 0.6rem;
	}

	.steps p {
		font-size: 0.9375rem;
		color: var(--muted);
	}

	/* ============================================================
	   About
	   ============================================================ */
	.about {
		display: grid;
		grid-template-columns: minmax(14rem, 22rem) 1fr;
		gap: clamp(2rem, 4vw, 4rem);
		align-items: start;
	}

	.about img {
		width: 100%;
		height: auto;
		border-radius: var(--r);
		border: 1px solid var(--line);
	}

	.about p {
		color: var(--muted);
		max-width: 40rem;
	}

	.promises {
		list-style: none;
		margin: clamp(2rem, 4vw, 3rem) 0 0;
		padding: 0;
		display: grid;
		gap: 1.25rem;
	}

	.promises li {
		border-top: 1px solid var(--line);
		padding-top: 1rem;
		font-size: 0.9375rem;
		color: var(--muted);
		max-width: 40rem;
	}

	.promises .meta {
		display: block;
		color: var(--text);
		margin-bottom: 0.45rem;
	}

	@media (max-width: 48rem) {
		.about {
			grid-template-columns: 1fr;
		}
	}

	/* ============================================================
	   Quotes
	   ============================================================ */
	.quotes {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
		gap: clamp(1.5rem, 3vw, 2.5rem);
	}

	blockquote {
		margin: 0;
		background: var(--raised);
		border: 1px solid var(--line);
		border-radius: var(--r);
		padding: 1.75rem;
	}

	blockquote p {
		font-size: 1.0625rem;
		margin-bottom: 1.5rem;
	}

	blockquote p::before {
		content: '“';
	}

	blockquote p::after {
		content: '”';
	}

	/* ============================================================
	   FAQ
	   ============================================================ */
	.faq {
		max-width: 48rem;
	}

	.faq details {
		border-top: 1px solid var(--line);
	}

	.faq details:last-child {
		border-bottom: 1px solid var(--line);
	}

	.faq summary {
		cursor: pointer;
		list-style: none;
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1.5rem;
		padding: 1.35rem 0;
		font-weight: 500;
		letter-spacing: -0.01em;
	}

	.faq summary::-webkit-details-marker {
		display: none;
	}

	.faq summary::after {
		content: '+';
		font-family: var(--mono);
		color: var(--accent);
		font-size: 1.1rem;
		flex-shrink: 0;
	}

	.faq details[open] summary::after {
		content: '−';
	}

	.faq details p {
		padding-bottom: 1.6rem;
		max-width: 40rem;
		font-size: 0.9375rem;
		color: var(--muted);
	}

	/* ============================================================
	   Reach out
	   ============================================================ */
	#contact {
		scroll-margin-top: 4rem;
	}

	.reach {
		display: grid;
		grid-template-columns: 1fr minmax(0, 26rem);
		gap: clamp(2rem, 5vw, 5rem);
		align-items: start;
	}

	.reach .lead {
		color: var(--muted);
		font-size: var(--t-lead);
		max-width: 26rem;
		margin-bottom: 2rem;
	}

	.buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	form {
		display: grid;
		gap: 1.25rem;
		background: var(--raised);
		border: 1px solid var(--line);
		border-radius: var(--r-lg);
		padding: clamp(1.5rem, 3vw, 2rem);
	}

	label {
		display: grid;
		gap: 0.5rem;
	}

	input,
	textarea {
		background: var(--bg);
		border: 1px solid var(--line);
		border-radius: var(--r);
		padding: 0.85rem 1rem;
		color: var(--text);
		font-family: var(--sans);
		font-size: var(--t-body);
		width: 100%;
	}

	input:focus,
	textarea:focus {
		border-color: var(--accent);
		outline: none;
	}

	form .btn {
		justify-self: start;
		cursor: pointer;
	}

	.form-status {
		color: var(--muted);
	}

	.form-note {
		font-size: 0.875rem;
		color: var(--faint);
	}

	@media (max-width: 56rem) {
		.reach {
			grid-template-columns: 1fr;
		}
	}

	/* ============================================================
	   Footer
	   ============================================================ */
	footer {
		border-top: 1px solid var(--line);
	}

	.foot {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.5rem 2rem;
		padding-top: 2rem;
		padding-bottom: 4rem;
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
</style>
