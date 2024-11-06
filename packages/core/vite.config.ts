import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "CoverComponentsVue",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue", "ant-design-vue"],
    },
  },
});
