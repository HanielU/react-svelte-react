import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), react()],
  resolve: {
    alias: [
      {
        find: "$contexts",
        replacement: resolve(__dirname, "src/contexts")
      },
      {
        find: "$svelte",
        replacement: resolve(__dirname, "src/svelte")
      }
    ]
  }
});
