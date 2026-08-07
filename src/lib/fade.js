// Svelte action: adds .in once the element scrolls into view.
// CSS handles prefers-reduced-motion, so the class is harmless there.
export function fade(node) {
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
