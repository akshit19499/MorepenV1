import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173
  },
  optimizeDeps: {
    // The shared content package is a workspace source package; keep it out of
    // the pre-bundled dependency cache so edits to it hot-reload in development.
    exclude: ["@morepen/shared"]
  }
});
