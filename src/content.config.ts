import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const collections = {
	work: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/work', pattern: '**/*.{md,mdx}' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	education: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/education', pattern: '**/*.{md,mdx}' }),
		schema: z.object({
			title: z.string(),
			dateStart: z.coerce.string(),
			dateEnd: z.coerce.string(),
			tags: z.array(z.string()),
			img: z.string().optional(),
			img_alt: z.string().optional(),
		}),
	}),
	blog: defineCollection({
		// Load Markdown files in the src/content/work directory.
		loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			pubEdit: z.coerce.date().optional(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
};
