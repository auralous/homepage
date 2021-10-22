import { defineConfig } from "wmr";
import xdm from "xdm/rollup.js";

export default defineConfig({
  alias: {
    react: "preact/compat",
    "react-dom": "preact/compat",
  },
  plugins: [
    xdm({
      jsxImportSource: "preact",
    }),
  ],
});
