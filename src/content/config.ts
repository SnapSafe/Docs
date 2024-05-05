import { z, defineCollection } from "astro:content";

const docsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    section: z.enum(["Getting Started", "Setup", "File Storage"]),
  }),
});

export const collections = {
  docs: docsCollection,
};
