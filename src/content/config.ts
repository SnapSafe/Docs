import { z, defineCollection } from "astro:content";

const docsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    section: z.enum(["Getting Started", "Setup", "File Storage"]),
    nextSlug: z.string().optional(),
    prevSlug: z.string().optional(),
  }),
});

export const collections = {
  docs: docsCollection,
};
