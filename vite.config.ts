import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": resolve(__dirname, "./src/components"),
			"@apis": resolve(__dirname, "./src/apis"),
			"@contexts": resolve(__dirname, "./src/contexts/index.tsx"),
			"@providers": resolve(__dirname, "./src/providers/index.tsx"),
			"@interfaces": resolve(__dirname, "./src/interfaces/index.ts"),
			"@helpers": resolve(__dirname, "./src/helpers"),
			"@utils": resolve(__dirname, "./src/utils"),
		},
	},
	server: {
		watch: {
			usePolling: true,
		},
	},
});
