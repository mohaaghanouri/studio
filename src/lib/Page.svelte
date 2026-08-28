<script>
	import { onMount } from 'svelte';
	import { base } from '$app/paths';
	import { fade } from '$lib/fade.js';
	import { contact, site, tools, profiles } from '$lib/copy/contact.js';
	import { PLACEHOLDERS } from '$lib/preview.js';
	import { initSound, setSound, blip } from '$lib/sound.js';
	import { featured } from '$lib/art.js';
	import { roster } from '$lib/copy/roster.js';

	export let copy;

	const isEn = copy.lang === 'en';
	const canonical = isEn ? `${site}/` : `${site}/de/`;

	// Nav sections. Indices are real positions in the page, so the numbering
	// carries information rather than decorating.
	const sections = [
		{ id: 'work', label: copy.studio.worksLabel },
		{ id: 'process', label: copy.studio.capabilitiesLabel },
		{ id: 'about', label: copy.about.eyebrow },
		{ id: 'contact', label: copy.nav.contact }
	];

	let activeId = '';
	let menuOpen = false;
	let sound = false;
	let bookOpen = false;
	let calMounted = false;
	let calWarm = false;
	let panelEl;

	// "Based in Berlin · …" → the city carries trust, so it gets weight.
	// Split rather than duplicating the sentence across both copy files.
	const noteParts = copy.hero.note.split(contact.city);

	// Warm the connection on hover, so the click→calendar wait loses a round trip.
	// Still nothing loaded for the ~97% who never open the drawer.
	function warmCal() {
		if (calWarm || !contact.cal) return;
		calWarm = true;
		document.head.append(
			Object.assign(document.createElement('link'), {
				rel: 'preconnect',
				href: 'https://app.cal.com',
				crossOrigin: 'anonymous'
			})
		);
	}

	async function openBook() {
		bookOpen = true;
		blip('open');
		// Cal's script only loads the first time someone actually asks for it.
		await new Promise((r) => setTimeout(r, 0));
		if (!calMounted) {
			mountCal();
			calMounted = true;
		}
		panelEl?.querySelector('button')?.focus();
	}

	function closeBook() {
		bookOpen = false;
		blip('click');
	}

	// Marquee needs the list twice so the loop has no visible seam.
	const marquee = [...tools, ...tools];

	function toggleSound() {
		sound = !sound;
		setSound(sound);
	}

	// Cal.com inline embed. Only runs when a handle is configured, so the
	// third-party script never loads for nothing.
	//
	// embed.js drains a queue that must already exist when it arrives — loading
	// the script first and then calling window.Cal throws "Cal is not defined".
	// So install a queueing stub, push the calls, and let embed.js replay them.
	function mountCal() {
		if (!contact.cal) return;

		if (!window.Cal) {
			const cal = (...args) => {
				if (!cal.loaded) {
					cal.ns = {};
					cal.q = cal.q || [];
					const script = document.createElement('script');
					script.src = 'https://app.cal.com/embed/embed.js';
					script.async = true;
					document.head.appendChild(script);
					cal.loaded = true;
				}
				cal.q.push(args);
			};
			window.Cal = cal;
		}

		window.Cal('init', { origin: 'https://cal.com' });
		window.Cal('inline', {
			elementOrSelector: '#cal-inline',
			calLink: `${contact.cal}/${contact.calEvent}`,
			config: { theme: 'dark', layout: 'month_view' }
		});
		window.Cal('ui', {
			theme: 'dark',
			cssVarsPerTheme: { dark: { 'cal-brand': '#e1f435' } },
			hideEventTypeDetails: false
		});
	}

	// Scroll-spy: whichever tracked section owns the middle of the viewport wins.
	onMount(() => {
		sound = initSound();
		// Cal is NOT mounted here on purpose — openBook() does it on first open,
		// so the third-party script never loads for visitors who never book.

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) if (entry.isIntersecting) activeId = entry.target.id;
			},
			{ rootMargin: '-45% 0px -50% 0px' }
		);
		for (const { id } of sections) {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		}
		return () => observer.disconnect();
	});

	function onKeydown(event) {
		if (event.key !== 'Escape') return;
		if (bookOpen) closeBook();
		menuOpen = false;
	}

	// All six use cases on the home page; art comes from the shared map so each card
	// matches its detail page.
	const works = featured(copy.built.items, 6);
	// One client voice per featured case, so the quotes below match the six cases
	// shown above. The words live on the case items — this is not a second copy.
	const voices = works.map((w) => w.quotes[0]).filter(Boolean);
	// A roster row links out only once that group has a written page in built.items.
	// Groups still waiting for their story render as plain text — no empty pages.
	const written = new Set(copy.built.items.map((i) => i.slug));

	// One @graph per home page. EN and DE share @ids on purpose: the two homes are
	// hreflang alternates, so search engines resolve them to a single entity
	// described in two languages. Exactly one ProfessionalService node exists for
	// the whole site — the case pages reference nothing and carry only a breadcrumb.
	//
	// NOT included, deliberately:
	//   telephone   — the mobile is already public via the WhatsApp link, but putting
	//                 it here makes it trivially scrapeable at volume. Your call.
	//   priceRange  — no price list, and Google stopped displaying it.
	//   openingHours / geo — would be fiction for a non-storefront address.
	//   aggregateRating / Review — never without written per-quote permission.
	const address = {
		'@type': 'PostalAddress',
		streetAddress: 'Geschwister-Scholl-Straße 1–3',
		postalCode: '10117',
		addressLocality: contact.city,
		addressCountry: 'DE'
	};

	const jsonLd = JSON.stringify({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': `${site}/#moha`,
				name: contact.name,
				url: canonical,
				image: `${site}/moha.webp`,
				jobTitle: isEn ? 'AI Consultant' : 'KI-Berater',
				description: copy.hero.subline,
				email: `mailto:${contact.email}`,
				sameAs: profiles,
				knowsLanguage: ['de', 'en'],
				knowsAbout: isEn
					? ['Artificial intelligence', 'Large language models', 'Workflow automation',
					   'Prompt engineering', 'Document processing', 'AI adoption for small practices']
					: ['Künstliche Intelligenz', 'Große Sprachmodelle', 'Prozessautomatisierung',
					   'Prompt Engineering', 'Dokumentenverarbeitung', 'KI-Einführung in Kleinbetrieben'],
				address,
				worksFor: { '@id': `${site}/#business` }
			},
			{
				'@type': 'ProfessionalService',
				'@id': `${site}/#business`,
				name: contact.business,
				url: canonical,
				image: `${site}/og.png`,
				description: copy.meta.description,
				inLanguage: copy.lang,
				founder: { '@id': `${site}/#moha` },
				employee: { '@id': `${site}/#moha` },
				email: `mailto:${contact.email}`,
				address,
				areaServed: [
					{ '@type': 'City', name: contact.city },
					{ '@type': 'Country', name: 'Germany' }
				],
				availableLanguage: [
					{ '@type': 'Language', name: 'German', alternateName: 'de' },
					{ '@type': 'Language', name: 'English', alternateName: 'en' }
				],
				serviceType: isEn
					? 'AI consulting and one-to-one coaching for professionals'
					: 'KI-Beratung und Einzelcoaching für Berufstätige',
				hasOfferCatalog: {
					'@type': 'OfferCatalog',
					name: isEn ? 'AI consulting services' : 'KI-Beratungsleistungen',
					itemListElement: copy.built.items.map((it) => ({
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							name: it.label,
							description: it.headline,
							url: `${site}${isEn ? '' : '/de'}/work/${it.slug}/`,
							provider: { '@id': `${site}/#business` }
						}
					}))
				}
			},
			{
				'@type': 'FAQPage',
				'@id': `${canonical}#faq`,
				inLanguage: copy.lang,
				mainEntity: copy.faq.items.map((item) => ({
					'@type': 'Question',
					name: item.q,
					acceptedAnswer: { '@type': 'Answer', text: item.a }
				}))
			}
		]
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
	{/if}
	{@html `<script type="application/ld+json">${jsonLd}</script>`}
</svelte:head>

<svelte:window on:keydown={onKeydown} />

<header>
	<div class="bar wrap">
		<a class="name" href="#top">{contact.name}</a>

		<nav class="desk" aria-label="Sections">
			{#each sections as section, i}
				<a
					href="#{section.id}"
					aria-current={activeId === section.id ? 'true' : undefined}
					class:on={activeId === section.id}
				>
					<span class="idx" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
					{section.label}
				</a>
			{/each}
		</nav>

		<div class="bar-end">
			<span class="lang">
				{#if isEn}
					<span aria-current="true">EN</span><a href="{base}/de/" data-sveltekit-reload>DE</a>
				{:else}
					<a href="{base}/" data-sveltekit-reload>EN</a><span aria-current="true">DE</span>
				{/if}
			</span>
			<button
				class="snd"
				type="button"
				aria-pressed={sound}
				on:click={toggleSound}
				title="{copy.studio.sound}: {sound ? 'on' : 'off'}"
			>
				<svg class="spk" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6">
					<path d="M4 9.5h3.2L12 5.6v12.8L7.2 14.5H4z" stroke-linejoin="round" />
					{#if sound}
						<path d="M15.6 9.2a4 4 0 0 1 0 5.6M18.2 6.6a7.6 7.6 0 0 1 0 10.8" stroke-linecap="round" />
					{:else}
						<path d="M16 9.8l4.4 4.4M20.4 9.8L16 14.2" stroke-linecap="round" />
					{/if}
				</svg>
				<span class="sr">{copy.studio.sound}</span>
			</button>
			<button
				class="burger"
				type="button"
				aria-expanded={menuOpen}
				aria-controls="menu"
				on:click={() => {
					menuOpen = !menuOpen;
					blip(menuOpen ? 'open' : 'click');
				}}
			>
				<span class="bars" aria-hidden="true" class:x={menuOpen}></span>
				<span class="sr">{copy.nav.menu}</span>
			</button>
		</div>
	</div>

	<!-- Mobile panel. Replaces the old behaviour, which hid the links entirely
	     below 34rem and left them unreachable on a phone. -->
	<nav id="menu" class="sheet" aria-label="Sections" hidden={!menuOpen}>
		{#each sections as section, i}
			<a
				href="#{section.id}"
				aria-current={activeId === section.id ? 'true' : undefined}
				on:click={() => (menuOpen = false)}
			>
				<span class="idx" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
				{section.label}
			</a>
		{/each}
	</nav>
</header>

<main>
	<section class="hero wrap" id="top">
		{#if copy.hero.availability}
			<p class="pill rise"><span class="dot" aria-hidden="true"></span>{copy.hero.availability}</p>
		{/if}
		<h1 class="rise rise-2">{copy.hero.headline}</h1>
		<div class="hero-foot rise rise-3">
			<p class="subline">{copy.hero.subline}</p>
			<div class="hero-cta">
				<div class="cta-stack">
					<a class="btn btn-primary" href="#contact" on:click={() => blip('click')}>
						{copy.hero.button}
					</a>
					<button
						class="btn btn-ghost"
						type="button"
						on:click={openBook}
						on:pointerenter={warmCal}
					>
						{copy.studio.bookCta}
					</button>
				</div>
				<p class="hero-note">
					<img src="{base}/moha-face.webp" alt="" width="240" height="240" />
					<span>{noteParts[0]}<strong>{contact.city}</strong>{noteParts[1] ?? ''}</span>
				</p>
			</div>
		</div>
	</section>

	<!-- Tools, deliberately not framed as clients. Marquee pauses on hover and
	     holds still under prefers-reduced-motion. -->
	<div class="tools-strip">
		<span class="meta tools-label">{copy.studio.toolsLabel}</span>
		<div class="rail">
			<ul class="track" aria-label={copy.studio.toolsLabel}>
				{#each marquee as tool, i}
					<li aria-hidden={i >= tools.length ? 'true' : undefined}>
						{#if tool.logo}
							<!-- mark alone; alt carries the name for anyone who can't see it -->
							<img src="{base}/logos/{tool.logo}" alt={tool.name} loading="lazy" />
						{:else}
							<span>{tool.name}</span>
						{/if}
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<section class="wrap" id="work" use:fade>
		<h2 class="sr">{copy.studio.worksLabel}</h2>
		<div class="row-head">
			<span class="meta" aria-hidden="true">{copy.studio.worksLabel}</span>
			<a class="meta all-cases" href="{base}{isEn ? '' : '/de'}/work/"
				>{copy.studio.workBack} ↗</a
			>
		</div>
		<div class="works">
			{#each works as work}
				<article use:fade>
					<a href="{base}{isEn ? '' : '/de'}/work/{work.slug}/" on:click={() => blip('click')}>
						<div class="plate">
							<img src="{base}/work/{work.slug}.svg" alt="" width="1200" height="750" loading="lazy" />
						</div>
						<h3>{work.label} <span class="go" aria-hidden="true">↗</span></h3>
						<p>{work.headline}</p>
					</a>
				</article>
			{/each}
		</div>
	</section>

	<section class="wrap" use:fade>
		<h2 class="sr">{copy.studio.statsLabel}</h2>
		<div class="row-head">
			<span class="meta" aria-hidden="true">{copy.studio.statsLabel}</span>
		</div>
		<!-- Ascending tiles: bottoms align, heights climb left to right -->
		<dl class="figures">
			{#each copy.studio.stats as stat, i}
				<div style="--step:{i}">
					<dt>{stat.value}</dt>
					<dd><span class="corner" aria-hidden="true"></span>{stat.label}</dd>
				</div>
			{/each}
		</dl>
	</section>

	<section class="wrap" id="roster" use:fade>
		<div class="row-head">
			<span class="meta">{copy.who.rosterEyebrow}</span>
		</div>
		<h2 class="statement">{copy.who.rosterTitle}</h2>
		<p class="aside roster-intro">{copy.who.rosterIntro}</p>
		<!-- Counts come from roster.js; only the labels are translated. -->
		<ul class="roster">
			{#each roster as group}
				<li>
					{#if written.has(group.slug)}
						<a class="who-label" href="{base}{isEn ? '' : '/de'}/work/{group.slug}/"
							>{copy.who.roster[group.slug]} <span class="go" aria-hidden="true">↗</span></a
						>
					{:else}
						<span class="who-label">{copy.who.roster[group.slug]}</span>
					{/if}
				</li>
			{/each}
		</ul>
		<p class="aside">{copy.who.notListed}</p>
	</section>

	<section class="wrap" id="process" use:fade>
		<div class="row-head">
			<span class="meta">{copy.studio.capabilitiesLabel}</span>
		</div>
		<h2 class="statement">{copy.how.title}</h2>

		<!-- Offset two-column grid: cells alternate vertically and share ruled
		     edges, with a crosshair marking each intersection. The fourth cell
		     carries the pricing note so the grid closes rather than dangling. -->
		<ol class="grid-cells">
			{#each copy.how.steps as step, i}
				<li>
					<span class="cell-idx" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
					<div class="cell-body">
						<h3>{step.title}</h3>
						<p>{step.text}</p>
					</div>
				</li>
			{/each}
			<li class="cell-note">
				<span class="cell-idx" aria-hidden="true">04</span>
				<div class="cell-body">
					<h3>{copy.studio.priceLabel}</h3>
					<p>{copy.how.noPrices}</p>
				</div>
			</li>
		</ol>
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
				<h3 class="promises-title">{copy.principles.title}</h3>
				<ul class="promises">
					{#each copy.principles.items as item}
						<li><span class="meta">{item.title}</span>{item.text}</li>
					{/each}
				</ul>
			</div>
		</div>
	</section>

	{#if voices.length}
		<section class="wrap" use:fade>
			<div class="row-head">
				<span class="meta">{copy.testimonials.eyebrow}</span>
				<a class="meta all-cases" href="{base}{isEn ? '' : '/de'}/work/"
					>{copy.studio.workBack} ↗</a
				>
			</div>
			<div class="quotes">
				{#each voices as t}
					<blockquote>
						<p>{t.text}</p>
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
		<h2 class="statement">{copy.faq.title}</h2>
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
					{#if contact.cal}
						<button class="btn btn-primary" type="button" on:click={openBook}>
							{copy.studio.bookLabel}
						</button>
					{/if}
					<a class="btn" href="mailto:{contact.email}">{copy.contactSection.form.email}</a>
				</div>
				<p class="hero-note">
					<img src="{base}/moha-face.webp" alt="" width="240" height="240" />
					<span>{noteParts[0]}<strong>{contact.city}</strong>{noteParts[1] ?? ''}</span>
				</p>
				{#if contact.address}
					<p class="addr">{contact.address}</p>
				{/if}
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
							<input type="text" name="name" autocomplete="name" required />
						</label>

						<label>
							<span class="meta">{copy.contactSection.form.email}</span>
							<input
								type="email"
								name="email"
								autocomplete="email"
								required
								aria-describedby="email-hint"
							/>
							<small id="email-hint">{copy.contactSection.form.emailHint}</small>
						</label>

						<label>
							<span class="meta">{copy.contactSection.form.subject}</span>
							<select name="subject" required>
								{#each copy.contactSection.form.subjects as subject}
									<option value={subject}>{subject}</option>
								{/each}
							</select>
						</label>

						<label>
							<span class="meta">{copy.contactSection.form.message}</span>
							<textarea
								name="message"
								rows="5"
								required
								aria-describedby="message-hint"
							></textarea>
							<small id="message-hint">{copy.contactSection.form.messageHint}</small>
						</label>

						<div class="submit">
							<button class="btn btn-primary" type="submit" disabled={formState === 'sending'}>
								{formState === 'sending'
									? copy.contactSection.form.sending
									: copy.contactSection.form.send}
							</button>
							<p class="reply-time">{copy.contactSection.form.reply}</p>
						</div>

						<!-- Announced to screen readers without stealing focus -->
						<p class="form-status" role="status" aria-live="polite">
							{formState === 'error' ? copy.contactSection.form.error : ''}
						</p>

						<p class="form-note">{copy.contactSection.form.note}</p>
					</form>
				{/if}
			{/if}
		</div>
	</section>
</main>

{#if contact.cal}
	<!-- Booking drawer: slides in from the left, Cal mounted on first open -->
	<div class="scrim" class:open={bookOpen} on:click={closeBook} aria-hidden="true"></div>
	<aside
		class="drawer"
		class:open={bookOpen}
		bind:this={panelEl}
		role="dialog"
		aria-modal="true"
		aria-label={copy.studio.bookTitle}
		inert={!bookOpen || undefined}
	>
		<div class="drawer-head">
			<div>
				<span class="meta">{copy.studio.bookLabel}</span>
				<p class="drawer-note">{copy.studio.bookNote}</p>
			</div>
			<button class="close" type="button" on:click={closeBook}>
				<span aria-hidden="true">✕</span>
				<span class="sr">{copy.studio.close}</span>
			</button>
		</div>
		<div id="cal-inline"></div>
	</aside>
{/if}

<footer>
	<div class="wrap foot">
		<p>© {contact.name} · {contact.address || contact.city}</p>
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
	nav,
	.bar-end {
		font-family: var(--mono);
		font-size: var(--t-label);
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.name {
		text-decoration: none;
		color: var(--text);
		display: inline-flex;
		align-items: center;
		min-height: 1.5rem;
	}

	.desk {
		display: flex;
		gap: clamp(1rem, 2.5vw, 2.25rem);
		align-items: center;
	}

	.desk a {
		display: flex;
		align-items: baseline;
		gap: 0.45rem;
		text-decoration: none;
		color: var(--faint);
		padding: 0.35rem 0;
		border-top: 1px solid transparent;
		transition:
			color 0.2s ease,
			border-color 0.2s ease;
	}

	.desk a:hover {
		color: var(--text);
	}

	/* Active section, set by the scroll-spy observer */
	.desk a.on {
		color: var(--text);
		border-top-color: var(--accent);
	}

	.idx {
		font-size: 0.625rem;
		color: var(--ghost);
	}

	.desk a.on .idx {
		color: var(--accent);
	}

	.bar-end {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.lang {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--faint);
	}

	/* 24px minimum touch target — these were 17x19 on a phone */
	.lang a,
	.lang span {
		min-width: 1.5rem;
		min-height: 1.5rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}

	.lang a {
		text-decoration: none;
		color: var(--faint);
	}

	.lang a:hover {
		color: var(--text);
	}

	.lang [aria-current] {
		color: var(--text);
	}

	/* ---- sound toggle ---- */
	.snd {
		background: none;
		border: 1px solid var(--line);
		border-radius: 6px;
		padding: 0.6rem 0.7rem;
		min-width: 2.25rem;
		min-height: 2.25rem;
		cursor: pointer;
		color: var(--faint);
		line-height: 0;
	}

	.snd:hover {
		border-color: var(--line-strong);
		color: var(--text);
	}

	.snd[aria-pressed='true'] {
		color: var(--accent);
		border-color: color-mix(in srgb, var(--accent) 40%, transparent);
	}

	.spk {
		width: 1.15rem;
		height: 1.15rem;
		display: block;
	}

	/* ---- mobile menu ---- */
	.burger {
		display: none;
		background: none;
		border: 1px solid var(--line);
		border-radius: 6px;
		padding: 0.7rem 0.75rem;
		min-width: 2.5rem;
		min-height: 2.5rem;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		color: var(--text);
	}

	.bars,
	.bars::before,
	.bars::after {
		display: block;
		width: 1rem;
		height: 1px;
		background: currentColor;
		transition: transform 0.25s ease;
	}

	.bars::before,
	.bars::after {
		content: '';
		position: relative;
	}

	.bars::before {
		top: -5px;
	}
	.bars::after {
		top: 4px;
	}

	.bars.x::before {
		transform: translateY(5px) rotate(45deg);
	}
	.bars.x::after {
		transform: translateY(-4px) rotate(-45deg);
	}
	.bars.x {
		background: transparent;
	}

	.sr {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}

	.sheet {
		display: none;
		flex-direction: column;
		border-top: 1px solid var(--line);
		background: var(--raised);
	}

	.sheet a {
		display: flex;
		align-items: baseline;
		gap: 0.7rem;
		padding: 1.1rem clamp(1.25rem, 4vw, 3rem);
		text-decoration: none;
		color: var(--muted);
		border-bottom: 1px solid var(--line);
	}

	.sheet a[aria-current] {
		color: var(--accent);
	}

	@media (max-width: 56rem) {
		.desk {
			display: none;
		}
		.burger {
			display: flex;
		}
		.sheet:not([hidden]) {
			display: flex;
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
		padding: 1.4rem 0;
		display: grid;
		gap: 1rem;
	}

	.tools-label {
		padding-left: clamp(1.25rem, 4vw, 3rem);
	}

	/* Rail clips the track and fades both edges so items enter and leave */
	.rail {
		overflow: hidden;
		mask-image: linear-gradient(
			to right,
			transparent,
			#000 6rem,
			#000 calc(100% - 6rem),
			transparent
		);
	}

	.track {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		width: max-content;
		gap: clamp(2rem, 5vw, 4rem);
		animation: scroll 42s linear infinite;
	}

	.rail:hover .track {
		animation-play-state: paused;
	}

	/* Half of -100% because the list is rendered twice */
	@keyframes scroll {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-50%);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.track {
			animation: none;
			flex-wrap: wrap;
			width: auto;
			padding-left: clamp(1.25rem, 4vw, 3rem);
			row-gap: 0.85rem;
		}
		.rail {
			mask-image: none;
		}
	}

	.track li {
		font-family: var(--mono);
		font-size: var(--t-ui);
		letter-spacing: 0.06em;
		color: var(--muted);
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		white-space: nowrap;
		min-width: 6rem;
	}

	/* Logos sit at a fixed height so differing artboards line up. Wordmarks
	   render until a vendor SVG is dropped into static/logos/. */
	.track img {
		height: 1.6rem;
		width: 1.6rem;
		object-fit: contain;
		opacity: 0.7;
		transition: opacity 0.2s ease;
	}

	.track li:hover img {
		opacity: 1;
	}

	/* ============================================================
	   Work grid
	   ============================================================ */
	/* Two columns, so four cases land as a 2x2 with no orphan row. */
	/* Three per row, not two: with 21 cases the old wide plates pushed everything
	   below them off the first screen. */
	.works {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: clamp(1.5rem, 3vw, 2.25rem);
	}

	@media (max-width: 62rem) {
		.works {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 40rem) {
		.works {
			grid-template-columns: 1fr;
		}
	}

	.plate {
		aspect-ratio: 16 / 9;
		border-radius: var(--r);
		border: 1px solid var(--line);
		overflow: hidden;
		margin-bottom: 1.25rem;
		transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1);
	}

	.plate img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}

	.works a {
		text-decoration: none;
		color: inherit;
		display: block;
	}

	.works article:hover .plate {
		transform: translateY(-4px);
	}

	.go {
		color: var(--ghost);
		transition: color 0.2s ease;
	}

	.works a:hover .go {
		color: var(--accent);
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
	/* Bottoms align on a single baseline; each tile is taller than the last, so
	   the row climbs. --step is the index, set inline. */
	.figures {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		align-items: end;
		gap: 0;
		margin: 0;
	}

	.figures div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: calc(9rem + var(--step) * 2.75rem);
		padding: 1.25rem;
		border: 1px solid var(--line);
		/* collapse shared edges so the row reads as one ruled object */
		margin-left: -1px;
	}

	.figures dt {
		font-family: var(--mono);
		font-size: clamp(1.25rem, 2.4vw, 1.75rem);
		line-height: 1;
		color: var(--text);
	}

	.figures dd {
		margin: 2.5rem 0 0;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--faint);
	}

	/* Small lime corner tick before each label */
	.corner {
		width: 0.4rem;
		height: 0.4rem;
		border-top: 1px solid var(--accent);
		border-right: 1px solid var(--accent);
		flex-shrink: 0;
	}

	/* Three tiles never go to two columns — that would orphan the third. Hold
	   three through tablet widths with the staircase flattened, then drop to one. */
	@media (max-width: 52rem) {
		.figures div {
			min-height: 9rem;
			padding: 1rem;
		}
		.figures dt {
			font-size: 1.25rem;
		}
		.figures dd {
			margin-top: 1.5rem;
		}
	}

	@media (max-width: 40rem) {
		.figures {
			grid-template-columns: 1fr;
		}
		.figures div {
			min-height: 0;
			margin: 0 0 -1px 0;
		}
		.figures dd {
			margin-top: 1rem;
		}
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
	/* Crosshair marks on every cell corner. One SVG tiled to four positions and
	   inset past the edges so each cross centres exactly on an intersection —
	   adjacent cells overlap theirs precisely, so the grid reads as one measured
	   object rather than a set of boxes. */
	.who,
	.grid-cells {
		--cross: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11'%3E%3Cpath d='M5.5 0v11M0 5.5h11' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E");
	}

	.who li::before,
	.grid-cells li::before {
		content: '';
		position: absolute;
		inset: -5.5px;
		pointer-events: none;
		opacity: 0.32;
		background-image: var(--cross), var(--cross), var(--cross), var(--cross);
		background-repeat: no-repeat;
		background-position: left top, right top, left bottom, right bottom;
		background-size: 11px 11px;
	}

	.roster-intro {
		max-width: 46rem;
		margin-bottom: clamp(2rem, 4vw, 3rem);
	}

	.roster {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
		gap: 0;
		border-top: 1px solid var(--line);
	}

	.roster li {
		display: flex;
		align-items: baseline;
		padding: 0.9rem 0.25rem;
		border-bottom: 1px solid var(--line);
	}

	.roster .who-label {
		color: var(--muted);
		font-size: 0.9375rem;
	}

	.roster a.who-label {
		color: var(--text);
		text-decoration: none;
	}

	.roster a.who-label:hover {
		color: var(--accent);
	}

	/* ============================================================
	   Process — offset two-column grid with crosshair intersections
	   ============================================================ */
	.grid-cells {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}

	.grid-cells li {
		position: relative;
		min-height: 17rem;
		padding: 1.5rem;
		border: 1px solid var(--line);
		margin: 0 0 -1px -1px;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	/* Odd cells sit low, even cells sit high — the offset is the whole device */
	.grid-cells li:nth-child(odd) {
		transform: translateY(3.5rem);
	}


	.cell-idx {
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.1em;
		color: var(--ghost);
	}

	.cell-body {
		margin-top: auto;
	}

	.grid-cells h3 {
		font-family: var(--mono);
		font-size: var(--t-label);
		font-weight: 400;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		margin-bottom: 0.7rem;
	}

	.grid-cells p {
		font-size: 0.9375rem;
		color: var(--muted);
		max-width: 30ch;
	}

	.cell-note {
		background: var(--raised);
	}

	@media (max-width: 44rem) {
		.grid-cells {
			grid-template-columns: 1fr;
		}
		.grid-cells li:nth-child(odd) {
			transform: none;
		}
		.grid-cells li {
			min-height: 0;
		}
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

	.promises-title {
		margin-top: clamp(2rem, 4vw, 3rem);
		font-family: var(--mono);
		font-size: var(--t-label);
		font-weight: 400;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--faint);
	}

	.promises {
		list-style: none;
		margin: 1.25rem 0 0;
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
		/* stacked, the portrait was filling the column at ~669px — cap it */
		.about img {
			max-width: 20rem;
		}
	}

	/* ============================================================
	   Quotes
	   ============================================================ */
	.quotes {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: clamp(1.5rem, 3vw, 2.5rem);
	}

	@media (max-width: 60rem) {
		.quotes {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 40rem) {
		.quotes {
			grid-template-columns: 1fr;
		}
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
	   Booking + reach out
	   ============================================================ */
	#contact {
		scroll-margin-top: 4rem;
	}

	/* Cal.com renders its own widget in here; give it a framed container and a
	   sensible min-height so the page doesn't jump when the embed loads. */
	#cal-inline {
		flex: 1;
		min-height: 34rem;
		padding: 0.5rem;
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
	textarea,
	select {
		background: var(--bg);
		border: 1px solid var(--line);
		border-radius: var(--r);
		padding: 0.85rem 1rem;
		color: var(--text);
		font-family: var(--sans);
		font-size: var(--t-body);
		width: 100%;
	}

	textarea {
		resize: vertical;
		min-height: 7rem;
	}

	select {
		appearance: none;
		/* caret drawn in CSS so it matches the palette instead of the OS */
		background-image: linear-gradient(45deg, transparent 50%, var(--muted) 50%),
			linear-gradient(135deg, var(--muted) 50%, transparent 50%);
		background-position:
			calc(100% - 1.1rem) 1.35rem,
			calc(100% - 0.75rem) 1.35rem;
		background-size:
			0.35rem 0.35rem,
			0.35rem 0.35rem;
		background-repeat: no-repeat;
		padding-right: 2.5rem;
	}

	input:focus,
	textarea:focus,
	select:focus {
		border-color: var(--accent);
		outline: none;
	}

	/* :user-invalid, not :invalid — only flags a field the person actually
	   touched and left wrong, so an untouched form is never pre-reddened. */
	input:user-invalid,
	textarea:user-invalid,
	select:user-invalid {
		border-color: #f4643b;
	}

	form small {
		font-size: 0.8125rem;
		color: var(--faint);
	}

	.submit {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.75rem 1.25rem;
	}

	form .btn {
		cursor: pointer;
	}

	form .btn:disabled {
		opacity: 0.6;
		cursor: progress;
	}

	.reply-time {
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--faint);
	}

	.form-status {
		color: #f4643b;
		font-size: 0.9375rem;
	}

	.form-status:empty {
		display: none;
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
	   Hero CTA pair + emphasis
	   ============================================================ */
	.cta-stack {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.btn-ghost {
		background: transparent;
		border-color: var(--line-strong);
		color: var(--text);
		cursor: pointer;
	}

	.btn-ghost:hover {
		border-color: var(--accent);
		color: var(--accent);
	}

	/* Berlin carries trust, so it gets weight rather than a separate sentence */
	.hero-note strong {
		color: var(--text);
		font-weight: 500;
	}

	.addr {
		margin-top: 0.85rem;
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--ghost);
	}

	/* ============================================================
	   Booking drawer
	   ============================================================ */
	.scrim {
		position: fixed;
		inset: 0;
		z-index: 40;
		background: rgb(0 0 0 / 0.6);
		backdrop-filter: blur(2px);
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.3s ease;
	}

	.scrim.open {
		opacity: 1;
		pointer-events: auto;
	}

	.drawer {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 50;
		width: min(34rem, 100vw);
		height: 100vh;
		display: flex;
		flex-direction: column;
		background: var(--bg);
		border-right: 1px solid var(--line);
		transform: translateX(-100%);
		transition: transform 0.35s cubic-bezier(0.2, 0.7, 0.2, 1);
		overflow-y: auto;
		overscroll-behavior: contain;
	}

	.drawer.open {
		transform: none;
	}

	@media (prefers-reduced-motion: reduce) {
		.drawer {
			transition: none;
		}
	}

	.drawer-head {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 1rem;
		padding: 1.5rem;
		border-bottom: 1px solid var(--line);
	}

	.drawer-note {
		margin-top: 0.5rem;
		font-size: 0.9375rem;
		color: var(--muted);
	}

	.close {
		background: none;
		border: 1px solid var(--line);
		border-radius: 6px;
		color: var(--muted);
		padding: 0.5rem 0.7rem;
		cursor: pointer;
		flex-shrink: 0;
	}

	.close:hover {
		border-color: var(--accent);
		color: var(--accent);
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
		display: inline-block;
		padding: 0.35rem 0;
	}

	.foot a:hover {
		color: var(--text);
	}
</style>
