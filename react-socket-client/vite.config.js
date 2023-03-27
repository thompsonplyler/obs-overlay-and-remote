import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import autoprefixer from "autoprefixer";
import postcssnormalize from "postcss-normalize";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: { "@assets": path.resolve(__dirname, "./src/assets") },
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [autoprefixer, postcssnormalize],
    },
  },
});
