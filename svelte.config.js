import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { imagePreprocessor } from "./image-preprocessor.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
   preprocess: [
      vitePreprocess(),
      {
         async markup({ content }) {
            await imagePreprocessor();
            return { code: content };
         },
      },
   ],

   kit: {
      adapter: adapter(),
   },
};

export default config;
