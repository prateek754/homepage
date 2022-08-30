import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/functions';
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

<<<<<<< HEAD
=======

export default defineConfig({
  output: 'server',
	adapter: netlify(),
});
>>>>>>> 3b5e6e19e51e3f69297cd1995226243a091b2997

// https://astro.build/config
export default defineConfig({
  site: 'https://prateek754.github.io/homepage',
  // Your public domain, e.g.: https://prateeksahu.com/. Used to generate sitemaps and canonical URLs.
  sitemap: true,
  // Generate sitemap (set to "false" to disable)
  integrations: [sitemap(), mdx()] // Add renderers to the config

});
