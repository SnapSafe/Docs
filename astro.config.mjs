import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import remarkGithubAlerts from "remark-gh-alerts";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [remarkGithubAlerts],
    shikiConfig: {
      themes: {
        light: "github-light",
      },
    },
  },
});
