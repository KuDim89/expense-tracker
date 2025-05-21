import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
	build: {
		outDir: './build',
		reportCompressedSize: true,
		commonjsOptions: {
			transformMixedEsModules: true,
		},
	},
	server: {
		port: 3000,
		open: true,
		host: 'localhost',
		proxy: {
			'/api': {
				target: 'http://localhost/',
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace('/api', ''),
			},
		},
	},
	plugins: [react(), tailwindcss()],
});
