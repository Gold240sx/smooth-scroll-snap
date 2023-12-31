import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { terser } from "rollup-plugin-terser"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		terser({
			// Terser options
			format: {
				comments: false,
			},
		}),
	],
})
