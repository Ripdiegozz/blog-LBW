import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://blog-lbw.vercel.app",
  output: "server",
  build: {
    format: "file"
  },
  integrations: [mdx(), sitemap(), tailwind({
    applyBaseStyles: false
  }), react()],
  adapter: vercel()
});