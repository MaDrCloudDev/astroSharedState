import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import react from '@astrojs/react';
import svelte from '@astrojs/svelte';
import vue from '@astrojs/vue';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react({
			include: ['**/React*.{tsx,jsx}'],
		}),
		solidJs({
			include: ['**/Solid*.{tsx,jsx}'],
		}),
		svelte(),
		vue(),
		alpinejs(),
	],
	vite: {
		optimizeDeps: {
			exclude: [
				'nanostores',
				'@nanostores/react',
				'@nanostores/solid',
				'@nanostores/vue',
			],
		},
	},
});
