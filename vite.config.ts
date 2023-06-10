// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import path from "path";
import { defineConfig } from "vite";
import { ViteAliases } from "vite-aliases";
import Inspect from "vite-plugin-inspect";
import react from "vite-preset-react";

export default defineConfig({
  base: "./",
  plugins: [Inspect(), ViteAliases({}), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
