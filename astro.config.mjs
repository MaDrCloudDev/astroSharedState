import { defineConfig } from 'astro/config';
import alpinejs from "@astrojs/alpinejs";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [alpinejs(), react(), solidJs(), svelte(), vue()]
});