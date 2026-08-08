<script>
	// latin-only subsets. The full imports pulled in Cyrillic, Vietnamese and
	// box-drawing faces that an EN/DE site never renders — and because each of
	// those woff2 files sits under Vite's 4 KB inline limit, they were base64'd
	// straight into the render-blocking CSS. German umlauts and ß all live in
	// U+0000–00FF, which `latin` covers.
	import '@fontsource/anton/latin-400.css';
	import '@fontsource/geist/latin-400.css';
	import '@fontsource/geist/latin-500.css';
	import '@fontsource/geist-mono/latin-400.css';
	import '../app.css';
</script>

<slot />
