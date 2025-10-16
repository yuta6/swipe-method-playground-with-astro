// @ts-check
import { defineConfig } from "astro/config";
import path from "path";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("src"),
      },
    },
  },
});
