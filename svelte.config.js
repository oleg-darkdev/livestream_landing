import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-vercel";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			runtime: 'edge'
		}),
		alias: {
			$entities: 'src/lib/entities',
			$features: 'src/lib/features',
			$processes: 'src/lib/processes',
			$widgets: 'src/lib/widgets',
			$examples: 'src/lib/examples',
			$icons: 'src/static/icons',
			$images: 'src/static/images',
			$stores: 'src/lib/shared/stores',
			$shared: 'src/lib/shared',
			// $svelteThemes: 'src/lib/shared/svelteThemes',
			// svelteThemes
			$actions: 'src/lib/shared/actions'
		}
	},

	preprocess: preprocess({
		postcss: true
	})
};

export default config;
