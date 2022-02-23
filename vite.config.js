import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { NodeGlobalsPolyfillPlugin } from "./node_modules/@esbuild-plugins/node-globals-polyfill/esm/index";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		host: "0.0.0.0",
		port: 3000,
	},
	define: {
		"process.env": process.env,
		// global: "globalThis",
	},
	plugins: [react(), reactRefresh()],
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
