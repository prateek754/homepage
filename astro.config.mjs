import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'prateeksahu.com',
  // Your public domain, e.g.: https://prateeksahu.com/. Used to generate sitemaps and canonical URLs.
  sitemap: true,
  // Generate sitemap (set to "false" to disable)
  integrations: [sitemap(), mdx()] // Add renderers to the config

});
