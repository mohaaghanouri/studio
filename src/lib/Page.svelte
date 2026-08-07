<script>
	import { base } from '$app/paths';
	import { fade } from '$lib/fade.js';
	import { contact } from '$lib/copy/contact.js';

	export let copy;

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
</svelte:head>

<header class="wrap">
	<span class="name">Moha Aghanoori</span>
	<nav class="lang" aria-label="Language">
		<a href="{base}{copy.otherLang.href}" data-sveltekit-reload>{copy.otherLang.label}</a>
	</nav>
</header>

<main>
	<section class="hero wrap" use:fade>
		<h1>{copy.hero.headline}</h1>
		<p class="subline">{copy.hero.subline}</p>
		<a class="btn" href="#contact">{copy.hero.button}</a>
	</section>

	<section class="wrap" use:fade>
		<h2>{copy.who.title}</h2>
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

	<section class="wrap" use:fade>
		<h2>{copy.how.title}</h2>
		<ol class="steps">
			{#each copy.how.steps as step, i}
				<li>
					<span class="step-number" aria-hidden="true">{i + 1}</span>
					<div>
						<h3>{step.title}</h3>
						<p class="muted">{step.text}</p>
					</div>
				</li>
			{/each}
		</ol>
		<p class="muted no-prices">{copy.how.noPrices}</p>
	</section>

	<section class="wrap" use:fade>
		<h2>{copy.about.title}</h2>
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

	<section class="wrap" id="contact" use:fade>
		<h2>{copy.contactSection.title}</h2>
		<p>{copy.contactSection.lead}</p>
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

<footer class="wrap muted">
	<p>
		© Moha Aghanoori · {contact.city} ·
		<a href="{base}/impressum">{copy.footer.impressum}</a> ·
		<a href="{base}/datenschutz">{copy.footer.datenschutz}</a>
	</p>
</footer>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
	}

	.name {
		font-family: var(--serif);
		font-size: 1.05rem;
	}

	.lang a {
		text-decoration: none;
		font-size: 0.9rem;
		letter-spacing: 0.08em;
	}

	.hero {
		border-top: none;
		padding-top: 6rem;
		padding-bottom: 6rem;
	}

	.hero h1 {
		font-size: clamp(2.5rem, 7vw, 5rem);
		margin-bottom: 1.5rem;
	}

	.subline {
		max-width: 36rem;
		color: var(--muted);
		margin-bottom: 2.5rem;
	}

	h2 {
		font-size: clamp(1.6rem, 3.5vw, 2.2rem);
		margin-bottom: 2rem;
	}

	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
		gap: 1rem;
	}

	.card {
		border: 1px solid var(--rule);
		border-radius: 6px;
		padding: 1.4rem;
	}

	.label {
		display: block;
		color: var(--gold);
		font-size: 0.8rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		margin-bottom: 0.6rem;
	}

	.card p {
		font-size: 0.95rem;
		color: var(--muted);
	}

	.not-listed {
		margin-top: 2rem;
		font-family: var(--serif);
	}

	.steps {
		list-style: none;
		padding: 0;
		display: grid;
		gap: 2rem;
	}

	.steps li {
		display: flex;
		gap: 1.25rem;
		align-items: baseline;
	}

	.step-number {
		font-family: var(--serif);
		font-size: 1.6rem;
		color: var(--gold);
		min-width: 1.5rem;
	}

	.steps h3 {
		font-size: 1.25rem;
		margin-bottom: 0.3rem;
	}

	.no-prices {
		margin-top: 2.5rem;
		max-width: 36rem;
	}

	section > p {
		max-width: 36rem;
	}

	.about {
		display: grid;
		grid-template-columns: minmax(14rem, 18rem) 1fr;
		gap: 2rem;
		align-items: start;
	}

	.about img {
		width: 100%;
		height: auto;
		border-radius: 6px;
		border: 1px solid var(--rule);
	}

	@media (max-width: 40rem) {
		.about {
			grid-template-columns: 1fr;
		}
	}

	.buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-top: 2rem;
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

	footer {
		border-top: 1px solid var(--rule);
		padding-top: 2rem;
		padding-bottom: 3rem;
		font-size: 0.85rem;
	}
</style>
