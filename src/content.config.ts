import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

// Type-check frontmatter using a schema
// portfolios
const portfolios = defineCollection({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/courses&services",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image(),
			header: image(),
			sub: z.string(),
			images: z.array(
				z.array(image()).refine((arr) => [1, 2, 3].includes(arr.length), {
					message: "Each sub-array must contain 1, 2, or 3 items",
				}),
			).optional(),
			// Transform string to Date object
			// date: z.coerce.date(),
			order: z.number(),
			// will be excluded from build if draft is "true"
			draft: z.boolean().optional(),
		}),
});

// testimonials
const testimonials = defineCollection({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/testimonials",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			testimonial: z.string(),
			image: image(),
			order: z.number(),
			// will be excluded from build if draft is "true"
			draft: z.boolean().optional(),
		}),
});

// other pages
const otherPages = defineCollection({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/otherPages",
	}),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			draft: z.boolean().optional(),
		}),
});

const store = defineCollection ({
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/Store",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			header: image(),
			images: z.array(image()).optional(),
			// will be excluded from build if draft is "true"
			order: z.number(),
			draft: z.boolean().optional(),
		}),
});

const TE = defineCollection ({
	// type: "content",
	loader: glob({
		pattern: "**/[^_]*.{md,mdx}",
		base: "./src/data/trips&events",
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image(),
			header: image(),
			sub: z.string(),
			images: z.array(image()).optional(),
			date: z.coerce.date(),
			// will be excluded from build if draft is "true"
			draft: z.boolean().optional(),
		}),
});

export const collections = {
	portfolios,
	testimonials,
	otherPages,
	store,
	TE,
};
