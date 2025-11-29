import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsConfigPaths()],
  test: {
    environment: "happy-dom",
    setupFiles: ["test-setup.tsx"],
    coverage: {
      exclude: ["**/*.js", "**/*.config.ts", "**/*.d.ts"]
    }
  }
});

