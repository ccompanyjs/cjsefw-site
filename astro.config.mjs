import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt({
    policy: [
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/search'],
        crawlDelay: 2,
      },
      {
        userAgent: 'OtherBot',
        allow: ['/allow-for-all-bots', '/allow-only-for-other-bot'],
        disallow: ['/admin', '/login'],
        crawlDelay: 2,
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: '/search',
        crawlDelay: 10,
        cleanParam: 'ref /articles/',
      },
    ],
  }), webmanifest({
    name: 'Your App name',
    icon: 'public/favicon.svg',
    short_name: 'CJSE Framework',
    start_url: '/cjsefw-site',
    background_color: 'rgba(3, 7, 18, 1)',
    display: 'fullscreen',
  })],
  site: "https://cjsenterprise.github.io",
  base: "/cjsefw-site"
});