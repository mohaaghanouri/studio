<script>
	import { base } from '$app/paths';
	import { fade } from '$lib/fade.js';
	import { contact, site } from '$lib/copy/contact.js';

	export let copy;

	const isEn = copy.lang === 'en';
	const canonical = isEn ? `${site}/` : `${site}/de/`;

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
	<meta property="og:image" content="{site}/moha.webp" />
	<meta property="og:locale" content={isEn ? 'en_US' : 'de_DE'} />
</svelte:head>

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
		<p class="kicker rise">{copy.hero.kicker}</p>
		<h1 class="rise rise-2">{copy.hero.headline}</h1>
		<p class="subline rise rise-3">{copy.hero.subline}</p>
		<div class="rise rise-4">
			<a class="btn btn-primary" href="#contact">{copy.hero.button}</a>
			<p class="hero-note muted">{copy.hero.note}</p>
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
		<p class="not-listed muted"><em>{copy.who.notListed}</em></p>
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

	<section class="wrap-wide" use:fade>
		<div class="section-head">
			<p class="eyebrow">{copy.how.eyebrow}</p>
			<h2>{copy.how.title}</h2>
		</div>
		<ol class="steps">
			{#each copy.how.steps as step, i}
				<li>
					<span class="step-number" aria-hidden="true">{i + 1}</span>
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
						{copy.contactSection.form.name}
						<input type="text" name="name" required />
					</label>
					<label>
						{copy.contactSection.form.email}
						<input type="email" name="email" required />
					</label>
					<label>
						{copy.contactSection.form.message}
						<textarea name="message" rows="5" required></textarea>
					</label>
					<button class="btn" type="submit" disabled={formState === 'sending'}>
						{copy.contactSection.form.send}
					</button>
					{#if formState === 'error'}
						<p class="form-status">{copy.contactSection.form.error}</p>
					{/if}
				</form>
				<p class="muted form-note"><em>{copy.contactSection.form.note}</em></p>
			{/if}
		{/if}
	</section>
</main>

<footer>
	<div class="wrap-wide foot">
		<p class="muted">
			© Moha Aghanoori · {contact.city} ·
			<a href="mailto:{contact.email}">{contact.email}</a>
		</p>
		<p class="muted">
			<a href="{base}/impressum/">{copy.footer.impressum}</a> ·
			<a href="{base}/datenschutz/">{copy.footer.datenschutz}</a>
		</p>
	</div>
</footer>

<style>
	/* ---- layout scale ---- */
	.wrap-wide {
		max-width: 68rem;
		margin: 0 auto;
		padding-left: clamp(1.25rem, 4vw, 2.5rem);
		padding-right: clamp(1.25rem, 4vw, 2.5rem);
	}

	section {
		padding-top: clamp(4.5rem, 9vw, 8rem);
		padding-bottom: clamp(4.5rem, 9vw, 8rem);
		border-top: 1px solid var(--rule);
	}

	/* ---- header ---- */
	header {
		position: sticky;
		top: 0;
		z-index: 10;
		background: color-mix(in srgb, var(--bg) 84%, transparent);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--rule);
	}

	.bar {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding-top: 1.1rem;
		padding-bottom: 1.1rem;
	}

	.name {
		font-family: var(--serif);
		font-size: 1.05rem;
	}

	nav {
		display: flex;
		gap: 1.75rem;
		align-items: baseline;
		font-size: 0.9rem;
	}

	.nav-contact {
		text-decoration: none;
		letter-spacing: 0.04em;
	}

	.lang {
		letter-spacing: 0.08em;
		color: var(--muted);
	}

	.lang a {
		text-decoration: none;
	}

	/* ---- hero ---- */
	.hero {
		border-top: none;
		min-height: min(78vh, 52rem);
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-top: clamp(5rem, 12vh, 9rem);
		padding-bottom: clamp(5rem, 12vh, 9rem);
	}

	.kicker {
		color: var(--gold);
		font-size: 0.8rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		margin-bottom: 1.75rem;
	}

	.hero h1 {
		font-size: clamp(2.6rem, 7.5vw, 5.5rem);
		max-width: 18ch;
		margin-bottom: 1.75rem;
	}

	.subline {
		max-width: 38rem;
		color: var(--muted);
		font-size: 1.125rem;
		margin-bottom: 3rem;
	}

	.btn-primary {
		background: var(--gold);
		color: var(--bg);
		border-color: var(--gold);
	}

	.btn-primary:hover {
		background: var(--gold-light);
		border-color: var(--gold-light);
		color: var(--bg);
	}

	.hero-note {
		margin-top: 1.5rem;
		font-size: 0.85rem;
		letter-spacing: 0.02em;
	}

	.rise {
		animation: rise 0.8s cubic-bezier(0.2, 0.7, 0.2, 1) both;
	}
	.rise-2 {
		animation-delay: 0.12s;
	}
	.rise-3 {
		animation-delay: 0.24s;
	}
	.rise-4 {
		animation-delay: 0.36s;
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(16px);
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

	/* ---- section headers ---- */
	.section-head {
		margin-bottom: clamp(2.5rem, 5vw, 4rem);
		max-width: 44rem;
	}

	.eyebrow {
		color: var(--gold);
		font-size: 0.78rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		margin-bottom: 1rem;
	}

	h2 {
		font-size: clamp(1.9rem, 4.5vw, 3rem);
	}

	.deck {
		margin-top: 1.25rem;
		color: var(--muted);
		font-size: 1.05rem;
		max-width: 38rem;
	}

	/* ---- who cards ---- */
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
		gap: 1.25rem;
	}

	.card {
		border: 1px solid var(--rule);
		border-radius: 6px;
		padding: 1.75rem;
		transition: border-color 0.3s ease;
	}

	.card:hover {
		border-color: #3d382e;
	}

	.label {
		display: block;
		color: var(--gold);
		font-size: 0.78rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}

	.card .label {
		margin-bottom: 0.8rem;
	}

	.card p {
		font-size: 0.95rem;
		color: var(--muted);
	}

	.not-listed {
		margin-top: 2.5rem;
		font-family: var(--serif);
		font-size: 1.05rem;
	}

	/* ---- case studies ---- */
	.built article {
		border-top: 1px solid var(--rule);
		padding: clamp(2.5rem, 5vw, 3.5rem) 0;
		display: grid;
		grid-template-columns: 10rem minmax(0, 1fr) 16rem;
		gap: 1rem clamp(2rem, 4vw, 4rem);
		align-items: start;
	}

	.built .label {
		padding-top: 0.55rem;
	}

	.case-story h3 {
		font-family: var(--serif);
		font-weight: 400;
		font-style: italic;
		font-size: clamp(1.4rem, 2.6vw, 1.75rem);
		margin-bottom: 1.25rem;
	}

	.case-story p {
		font-size: 0.975rem;
		max-width: 36rem;
	}

	.case-story p + p {
		margin-top: 1rem;
	}

	.built aside {
		border-top: 1px solid var(--rule);
		padding-top: 1rem;
	}

	.handles-title {
		color: var(--gold);
		font-size: 0.72rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		margin-bottom: 0.9rem;
	}

	.built ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		gap: 0.65rem;
	}

	.built li {
		font-size: 0.88rem;
		color: var(--muted);
		padding-left: 1.1rem;
		position: relative;
	}

	.built li::before {
		content: '—';
		color: var(--gold);
		position: absolute;
		left: 0;
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

	/* ---- steps ---- */
	.steps {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: clamp(1.5rem, 3vw, 3rem);
	}

	.steps li {
		border-top: 1px solid var(--rule);
		padding-top: 1.5rem;
	}

	.step-number {
		display: block;
		font-family: var(--serif);
		font-size: 2rem;
		color: var(--gold);
		margin-bottom: 1rem;
	}

	.steps h3,
	.principles h3 {
		font-size: 1.25rem;
		margin-bottom: 0.5rem;
	}

	.steps p,
	.principles p {
		font-size: 0.95rem;
	}

	@media (max-width: 44rem) {
		.steps {
			grid-template-columns: 1fr;
		}
	}

	.no-prices {
		margin-top: 3rem;
		max-width: 38rem;
	}

	/* ---- principles ---- */
	.principles {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		gap: clamp(1.5rem, 3vw, 3rem);
	}

	/* ---- about ---- */
	.about {
		display: grid;
		grid-template-columns: minmax(14rem, 20rem) 1fr;
		gap: clamp(2rem, 4vw, 4rem);
		align-items: start;
	}

	.about img {
		width: 100%;
		height: auto;
		border-radius: 6px;
		border: 1px solid var(--rule);
	}

	.about p {
		max-width: 38rem;
		font-size: 1.05rem;
	}

	@media (max-width: 44rem) {
		.about {
			grid-template-columns: 1fr;
		}
	}

	/* ---- contact ---- */
	#contact {
		scroll-margin-top: 4.5rem;
	}

	.buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	form {
		margin-top: 2.5rem;
		display: grid;
		gap: 1.25rem;
		max-width: 28rem;
	}

	label {
		display: grid;
		gap: 0.4rem;
		font-size: 0.9rem;
		color: var(--muted);
	}

	input,
	textarea {
		background: transparent;
		border: 1px solid var(--rule);
		border-radius: 4px;
		padding: 0.7rem;
		color: var(--text);
		font: inherit;
	}

	input:focus,
	textarea:focus {
		border-color: var(--gold);
		outline: none;
	}

	form .btn {
		justify-self: start;
		background: transparent;
		cursor: pointer;
	}

	.form-status {
		margin-top: 0.5rem;
	}

	.form-note {
		margin-top: 1rem;
		font-size: 0.9rem;
	}

	/* ---- footer ---- */
	footer {
		border-top: 1px solid var(--rule);
	}

	.foot {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.5rem 2rem;
		padding-top: 2.25rem;
		padding-bottom: 3rem;
		font-size: 0.85rem;
	}
</style>
