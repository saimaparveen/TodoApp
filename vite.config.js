import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true, // Enable global test functions like `describe` and `it`
    environment: "jsdom", // Use jsdom for browser-like environment
  },
});
