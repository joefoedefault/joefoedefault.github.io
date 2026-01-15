// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

const NoIndex = true

// https://astro.build/config
export default defineConfig({
    site: 'https://joefoedefault.github.io',
    integrations: [
        mdx(),
        sitemap(),
        robotsTxt({
            policy: [
                {
                userAgent: '*',
                // The next line enables or disables the crawling on the `robots.txt` level
                disallow: NoIndex ? '/' : '',
                },
            ],
            sitemapBaseFileName: 'sitemap-index', // default 'sitemap-index'
            transform(content) {
                const commentsList = ["Yeah I don't like robots crawling stuff", "Is that an issue? of course not", "Go home robot"];
                const comments = commentsList.map((item) => `# ${item}.`).join('\n');
                return `${comments}\n\n${content}`;
            },
        })
    ]
});
