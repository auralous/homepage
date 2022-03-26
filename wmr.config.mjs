import mdx from "@mdx-js/rollup";
import { defineConfig } from "wmr";

export default defineConfig({
  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat",
  },
  plugins: [
    mdx({
      jsxImportSource: "preact",
    }),
  ],
});
