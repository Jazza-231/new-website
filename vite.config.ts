import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import imageProcessingPlugin from "./image-processor";

export default defineConfig({
   plugins: [sveltekit(), imageProcessingPlugin()],
   test: {
      include: ["src/**/*.{test,spec}.{js,ts}"],
   },
});
