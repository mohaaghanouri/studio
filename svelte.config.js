import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
	kit: {
		adapter: adapter(),
		paths: {
			// ponytail: BASE_PATH only for the github.io/studio preview; empty on moha.expert
			base: process.env.BASE_PATH || ''
		}
	}
};
