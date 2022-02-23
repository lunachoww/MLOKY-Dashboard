import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { NodeGlobalsPolyfillPlugin } from "./node_modules/@esbuild-plugins/node-globals-polyfill/esm/index";

// https://vitejs.dev/config/
export default defineConfig({
	define: {
		"process.env": process.env,
		// global: "globalThis",
	},
	plugins: [react()],
	optimizeDeps: {
		esbuildOptions: {
			// Node.js global to browser globalThis
			define: {
				global: "globalThis",
			},
			// Enable esbuild polyfill plugins
			plugins: [
				NodeGlobalsPolyfillPlugin({
					buffer: true,
				}),
			],
		},
	},
});
