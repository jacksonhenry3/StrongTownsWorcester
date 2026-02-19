import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  '_blog': blogCollection,
};
