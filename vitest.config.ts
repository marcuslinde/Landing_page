import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// Test-only config. Kept separate from vite.config.ts so the production
// build is untouched.
export default defineConfig({
	plugins: [react()],
	test: {
		environment: "node",
		include: ["tests/**/*.test.{ts,tsx}"],
	},
});
