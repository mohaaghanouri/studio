<script>
	import { base } from '$app/paths';
	import { fade } from '$lib/fade.js';
	import { contact, site } from '$lib/copy/contact.js';
	import { PLACEHOLDERS } from '$lib/preview.js';

	export let copy;

	const isEn = copy.lang === 'en';
	const canonical = isEn ? `${site}/` : `${site}/de/`;

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
		Preview build — testimonials and the availability line are placeholder text
	</p>
{/if}

<header>
	<div class="bar wrap-wide">
		<span class="name">Moha Aghanoori</span>
		<nav aria-label="Site">
			<a class="nav-contact" href="#contact">{copy.nav.contact}</a>
			<span class="lang">
				{#if isEn}
					<span aria-current="true">EN</span> · <a href="{base}/de/" data-sveltekit-reload>DE</a>
				{:else}
					<a href="{base}/" data-sveltekit-reload>EN</a> · <span aria-current="true">DE</span>
				{/if}
			</span>
		</nav>
	</div>
</header>

<main>
	<section class="hero wrap-wide">
		{#if copy.hero.availability}
			<p class="pill rise">
				<span class="dot" aria-hidden="true"></span>{copy.hero.availability}
			</p>
		{/if}
		<p class="kicker rise rise-2">{copy.hero.kicker}</p>
		<h1 class="rise rise-3">{copy.hero.headline}</h1>
		<p class="subline rise rise-4">{copy.hero.subline}</p>
		<div class="rise rise-5">
			<a class="btn btn-primary" href="#contact">{copy.hero.button}</a>
			<p class="hero-note">
				<img src="{base}/moha-face.webp" alt="" width="240" height="240" />
				{copy.hero.note}
			</p>
		</div>
	</section>

	<section class="wrap-wide" use:fade>
		<div class="section-head">
			<p class="eyebrow">{copy.who.eyebrow}</p>
			<h2>{copy.who.title}</h2>
		</div>
		<div class="cards">
			{#each copy.who.cards as card}
				<div class="card">
					<span class="label">{card.label}</span>
					<p>{card.text}</p>
				</div>
			{/each}
		</div>
		<p class="not-listed">{copy.who.notListed}</p>
	</section>

	<section class="wrap-wide" use:fade>
		<div class="section-head">
			<p class="eyebrow">{copy.built.eyebrow}</p>
			<h2>{copy.built.title}</h2>
			<p class="deck">{copy.built.intro}</p>
		</div>
		<div class="built">
			{#each copy.built.items as item}
				<article use:fade>
					<span class="label">{item.label}</span>
					<div class="case-story">
						<h3>{item.headline}</h3>
						{#each item.story as paragraph}
							<p class="muted">{paragraph}</p>
						{/each}
					</div>
					<aside>
						<p class="handles-title">{copy.built.handlesTitle}</p>
						<ul>
							{#each item.handles as handle}
								<li>{handle}</li>
							{/each}
						</ul>
					</aside>
				</article>
			{/each}
		</div>
	</section>

	{#if copy.testimonials.items.length}
		<section class="wrap-wide" use:fade>
			<div class="section-head">
				<p class="eyebrow">{copy.testimonials.eyebrow}</p>
				<h2>{copy.testimonials.title}</h2>
			</div>
			<div class="quotes">
				{#each copy.testimonials.items as t}
					<blockquote>
						<p>“{t.quote}”</p>
						<footer>— {t.name}</footer>
					</blockquote>
				{/each}
			</div>
		</section>
	{/if}

	<section class="wrap-wide" use:fade>
		<div class="section-head">
			<p class="eyebrow">{copy.how.eyebrow}</p>
			<h2>{copy.how.title}</h2>
		</div>
		<ol class="steps">
			{#each copy.how.steps as step, i}
				<li>
					<span class="step-number" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
					<h3>{step.title}</h3>
					<p class="muted">{step.text}</p>
				</li>
			{/each}
		</ol>
		<p class="muted no-prices">{copy.how.noPrices}</p>
	</section>

	<section class="wrap-wide" use:fade>
		<div class="section-head">
			<p class="eyebrow">{copy.principles.eyebrow}</p>
			<h2>{copy.principles.title}</h2>
		</div>
		<div class="principles">
			{#each copy.principles.items as item}
				<div>
					<h3>{item.title}</h3>
					<p class="muted">{item.text}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="wrap-wide" use:fade>
		<div class="section-head">
			<p class="eyebrow">{copy.about.eyebrow}</p>
			<h2>{copy.about.title}</h2>
		</div>
		<div class="about">
			<img
				src="{base}/moha.webp"
				alt={copy.about.photoAlt}
				width="960"
				height="694"
				loading="lazy"
			/>
			<p>{copy.about.text}</p>
		</div>
	</section>

	<section class="wrap-wide" use:fade>
		<div class="section-head">
			<p class="eyebrow">{copy.faq.eyebrow}</p>
			<h2>{copy.faq.title}</h2>
		</div>
		<div class="faq">
			{#each copy.faq.items as item}
				<details>
					<summary>{item.q}</summary>
					<p class="muted">{item.a}</p>
				</details>
			{/each}
		</div>
	</section>

	<section class="wrap-wide" id="contact" use:fade>
		<div class="section-head">
			<p class="eyebrow">{copy.contactSection.eyebrow}</p>
			<h2>{copy.contactSection.title}</h2>
			<p class="deck">{copy.contactSection.lead}</p>
		</div>
		<div class="buttons">
			<a class="btn" href="https://wa.me/{contact.whatsapp}">WhatsApp</a>
			{#if contact.telegram}
				<a class="btn" href="https://t.me/{contact.telegram}">Telegram</a>
			{/if}
			<a class="btn" href="mailto:{contact.email}">Email</a>
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
						<span>{copy.contactSection.form.name}</span>
						<input type="text" name="name" required />
					</label>
					<label>
						<span>{copy.contactSection.form.email}</span>
						<input type="email" name="email" required />
					</label>
					<label>
						<span>{copy.contactSection.form.message}</span>
						<textarea name="message" rows="5" required></textarea>
					</label>
					<button class="btn btn-primary" type="submit" disabled={formState === 'sending'}>
						{copy.contactSection.form.send}
					</button>
					{#if formState === 'error'}
						<p class="form-status">{copy.contactSection.form.error}</p>
					{/if}
				</form>
				<p class="form-note">{copy.contactSection.form.note}</p>
			{/if}
		{/if}
	</section>
</main>

<footer>
	<div class="wrap-wide foot">
		<p>
			© Moha Aghanoori · {contact.city} ·
			<a href="mailto:{contact.email}">{contact.email}</a>
		</p>
		<p>
			<a href="{base}/impressum/">{copy.footer.impressum}</a> ·
			<a href="{base}/datenschutz/">{copy.footer.datenschutz}</a>
		</p>
	</div>
</footer>

<style>
	/* ============================================================
	   Layout scale
	   ============================================================ */
	.wrap-wide {
		max-width: 72rem;
		margin: 0 auto;
		padding-left: clamp(1.25rem, 4vw, 2.5rem);
		padding-right: clamp(1.25rem, 4vw, 2.5rem);
	}

	section {
		padding-top: clamp(4.5rem, 9vw, 8rem);
		padding-bottom: clamp(4.5rem, 9vw, 8rem);
		border-top: 1px solid var(--line);
	}

	/* ============================================================
	   Preview flag — only rendered while PLACEHOLDERS is true.
	   Pinned bottom so it never fights the sticky header.
	   ============================================================ */
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
	   Header — mono wordmark, hairline base
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
		gap: 1.75rem;
		align-items: center;
	}

	.nav-contact {
		text-decoration: none;
		color: var(--text);
	}

	.nav-contact:hover {
		color: var(--accent);
	}

	.lang {
		color: var(--faint);
	}

	.lang a {
		text-decoration: none;
		color: var(--faint);
	}

	.lang a:hover {
		color: var(--text);
	}

	/* ============================================================
	   Hero — availability pill, Anton caps, one lime CTA
	   ============================================================ */
	.hero {
		border-top: none;
		min-height: min(88vh, 54rem);
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: clamp(4rem, 10vh, 7rem);
		padding-bottom: clamp(4rem, 10vh, 7rem);
	}

	/* signature device: live-capacity line. Maintain it or delete it. */
	.pill {
		align-self: start;
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
		margin-bottom: 2rem;
	}

	.dot {
		width: 0.4rem;
		height: 0.4rem;
		border-radius: 50%;
		background: var(--accent);
		flex-shrink: 0;
	}

	.kicker {
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--faint);
		margin-bottom: 1.5rem;
	}

	.hero h1 {
		max-width: 22ch;
		margin-bottom: 2rem;
	}

	.subline {
		max-width: 40rem;
		color: var(--muted);
		font-size: var(--t-lead);
		line-height: 1.5;
		margin-bottom: 2.75rem;
	}

	.btn-primary {
		background: var(--accent);
		border-color: var(--accent);
		color: var(--accent-ink);
	}

	.btn-primary:hover {
		background: var(--text);
		border-color: var(--text);
		color: var(--accent-ink);
	}

	.hero-note {
		margin-top: 1.75rem;
		display: flex;
		align-items: center;
		gap: 0.85rem;
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--faint);
	}

	/* circle only at avatar scale — faces read faster in a circle when small */
	.hero-note img {
		width: 2.75rem;
		height: 2.75rem;
		border-radius: 50%;
		border: 1px solid var(--line-strong);
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
	.rise-4 {
		animation-delay: 0.24s;
	}
	.rise-5 {
		animation-delay: 0.32s;
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
	   Section heads
	   ============================================================ */
	.section-head {
		margin-bottom: clamp(2.5rem, 5vw, 4rem);
		max-width: 44rem;
	}

	.eyebrow {
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--faint);
		margin-bottom: 1.25rem;
	}

	.deck {
		margin-top: 1.5rem;
		color: var(--muted);
		font-size: var(--t-body);
		max-width: 38rem;
	}

	/* ============================================================
	   Who — panel cards on near-black, hairline borders
	   ============================================================ */
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
		gap: 1rem;
	}

	.card {
		background: var(--raised);
		border: 1px solid var(--line);
		border-radius: var(--r);
		padding: 1.75rem;
		transition:
			background-color 0.25s ease,
			border-color 0.25s ease;
	}

	.card:hover {
		background: var(--hover);
		border-color: var(--line-strong);
	}

	.label {
		display: block;
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--faint);
	}

	.card .label {
		margin-bottom: 1rem;
	}

	.card p {
		font-size: 0.9375rem;
		color: var(--muted);
	}

	.not-listed {
		margin-top: 2.5rem;
		color: var(--muted);
		max-width: 38rem;
	}

	/* ============================================================
	   Case studies — hairline rows, mono index, prose at reading size
	   ============================================================ */
	.built article {
		border-top: 1px solid var(--line);
		padding: clamp(2.5rem, 5vw, 3.5rem) 0;
		display: grid;
		grid-template-columns: 10rem minmax(0, 1fr) 17rem;
		gap: 1rem clamp(2rem, 4vw, 4rem);
		align-items: start;
	}

	.built .label {
		padding-top: 0.4rem;
	}

	.case-story h3 {
		font-size: var(--t-h3);
		margin-bottom: 1.25rem;
		max-width: 26ch;
	}

	.case-story p {
		max-width: 36rem;
	}

	.case-story p + p {
		margin-top: 1rem;
	}

	.built aside {
		border-top: 1px solid var(--line);
		padding-top: 1.1rem;
	}

	.handles-title {
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--faint);
		margin-bottom: 1rem;
	}

	.built ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 0.7rem;
	}

	.built li {
		font-size: var(--t-ui);
		color: var(--muted);
		padding-left: 1.1rem;
		position: relative;
	}

	.built li::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0.62em;
		width: 0.5rem;
		height: 1px;
		background: var(--accent);
	}

	@media (max-width: 64rem) {
		.built article {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
		.built .label {
			padding-top: 0;
		}
		.built aside {
			margin-top: 0.5rem;
			max-width: 30rem;
		}
	}

	/* ============================================================
	   Steps — real sequence, so numbering earns its place
	   ============================================================ */
	.steps {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
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

	.steps h3,
	.principles h3 {
		font-size: 1.125rem;
		margin-bottom: 0.6rem;
	}

	.steps p,
	.principles p {
		font-size: 0.9375rem;
	}

	@media (max-width: 48rem) {
		.steps {
			grid-template-columns: 1fr;
		}
	}

	.no-prices {
		margin-top: 3rem;
		max-width: 38rem;
		font-size: 0.9375rem;
	}

	/* ============================================================
	   Principles
	   ============================================================ */
	.principles {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		gap: clamp(1.5rem, 3vw, 3rem);
	}

	.principles div {
		border-top: 1px solid var(--line);
		padding-top: 1.5rem;
	}

	/* ============================================================
	   About
	   ============================================================ */
	.about {
		display: grid;
		grid-template-columns: minmax(14rem, 20rem) 1fr;
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
		max-width: 38rem;
		color: var(--muted);
	}

	@media (max-width: 48rem) {
		.about {
			grid-template-columns: 1fr;
		}
	}

	/* ============================================================
	   Testimonials — hidden until real quotes exist
	   ============================================================ */
	.quotes {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
		gap: clamp(1.5rem, 3vw, 3rem);
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
		margin-bottom: 1.25rem;
	}

	blockquote footer {
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--faint);
	}

	/* ============================================================
	   FAQ
	   ============================================================ */
	.faq {
		max-width: 46rem;
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
		max-width: 38rem;
		font-size: 0.9375rem;
	}

	/* ============================================================
	   Contact
	   ============================================================ */
	#contact {
		scroll-margin-top: 4rem;
	}

	.buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	form {
		margin-top: 2.75rem;
		display: grid;
		gap: 1.25rem;
		max-width: 30rem;
	}

	label {
		display: grid;
		gap: 0.5rem;
	}

	label span {
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--faint);
	}

	input,
	textarea {
		background: var(--raised);
		border: 1px solid var(--line);
		border-radius: var(--r);
		padding: 0.85rem 1rem;
		color: var(--text);
		font-family: var(--sans);
		font-size: var(--t-body);
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
		margin-top: 0.5rem;
		color: var(--muted);
	}

	.form-note {
		margin-top: 1.25rem;
		font-size: 0.9375rem;
		color: var(--faint);
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
		padding-top: 2.25rem;
		padding-bottom: 3rem;
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
