import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Flex Storefront',
      tagline: 'Build a native mobile eCommerce apps in up to 80% less time.',
      description: 'Flex is a native mobile app platform for SAP Commerce Cloud built in Flutter.',
      favicon: '/images/favicon.ico',
      logo: {
        light: './src/assets/flex_logo.png',
        dark: './src/assets/flex_logo_rev.png',
        replacesTitle: true,
      },
			social: {
        discord: 'https://discord.com/invite/NDVPcfsHVp',
				github: 'https://github.com/BASE1com/flex-storefront',
			},
			sidebar: [
        {
          label: 'Introduction',
          items: [
            { label: 'Overview', link: '/introduction/overview' },
            { label: 'Architecture', link: '/introduction/architecture' },
            { label: 'Roadmap', link: '/introduction/roadmap' },
            { label: 'FAQ', link: '/introduction/faq' },
          ],
        },
				{
					label: 'Getting started',
					autogenerate: { directory: 'getting-started' },
				},
        {
          label: 'Storefront',
          autogenerate: { directory: 'storefront' },
        },
        {
          label: 'Features',
          autogenerate: { directory: 'features' },
        },
        {
          label: 'Flex UI',
          badge: { text: 'Open Source' },
          autogenerate: { directory: 'ui' },
        },
			],
		}),
	],
});
