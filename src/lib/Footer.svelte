<script>
	// The site footer, in one place. Four page components each rendered a
	// byte-identical copy of this markup and its 25 lines of CSS, so the
	// address, the profile links and the two legal links had to be changed in
	// four files — and the address is exactly the kind of thing that changes.
	//
	// `wrap` adds the shared width container. The home page needed it because
	// its footer sits outside the page's own .wrap; the other three are already
	// inside one. Both classes land on the same element, which is what the home
	// page's <footer><div class="wrap foot"> rendered to anyway.
	import { base } from '$app/paths';
	import { contact, profileLinks } from '$lib/copy/contact.js';

	export let copy;
	export let wrap = false;
</script>

<footer class="foot" class:wrap>
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

<style>
	.wrap {
		max-width: 66rem;
		margin: 0 auto;
		padding: 0 clamp(1.25rem, 4vw, 3rem);
	}

	.foot {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: 0.5rem 2rem;
		padding: 2rem 0 4rem;
		border-top: 1px solid var(--line);
		font-family: var(--mono);
		font-size: var(--t-meta);
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--faint);
	}

	/* .wrap sets horizontal padding, .foot sets vertical; both on one element
	   means the shorthand in either would clobber the other, so they stay split. */
	.wrap.foot {
		padding: 2rem clamp(1.25rem, 4vw, 3rem) 4rem;
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
