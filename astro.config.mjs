import { defineConfig } from 'astro/config';

// https://astro.build/config
<<<<<<< HEAD
import react from "@astrojs/react";
=======
>>>>>>> 1216a44f811643c70e98da9f7fce286a24dfb175
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
<<<<<<< HEAD
  integrations: [react(), svelte(), vue()]
=======
  integrations: [svelte(), react(), vue()]
>>>>>>> 1216a44f811643c70e98da9f7fce286a24dfb175
});