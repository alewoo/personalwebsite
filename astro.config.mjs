import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [tailwind(), icon()],
  output: "server",
  adapter: vercel({
    analytics: true,
    imageService: true,
    devImageService: "sharp",
    webAnalytics: {
      enabled: true,
    },
  }),
});
