// Svelte action: adds .in once the element scrolls into view.
// CSS handles prefers-reduced-motion, so the class is harmless there.
export function fade(node) {
	// ?noanim skips the effect entirely — used for full-page screenshot QA
	if (new URLSearchParams(location.search).has('noanim')) return;
	node.classList.add('fade');
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('in');
					observer.disconnect();
				}
			}
		},
		{ threshold: 0.1 }
	);
	observer.observe(node);
	return { destroy: () => observer.disconnect() };
}
