import { z, defineCollection } from "astro:content";

const docsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    section: z.enum(["Getting Started", "Setup", "File Storage"]),
    nextSlug: z.string().nullable(),
    prevSlug: z.string().nullable(),
    order: z.number(),
  }),
});

export const collections = {
  docs: docsCollection,
};
