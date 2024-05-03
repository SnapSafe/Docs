import { z, defineCollection } from "astro:content";

const docsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    section: z.enum(["Getting Started"]),
  }),
});

export const collections = {
  docs: docsCollection,
};
