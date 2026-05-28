// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Update this to your real domain when you deploy (used for canonical + Open Graph URLs).
  site: 'https://ricardo-altamirano.vercel.app',
  integrations: [sitemap()],
});
