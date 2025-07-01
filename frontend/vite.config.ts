import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    outDir: './build',
    reportCompressedSize: true,
  },
  plugins: [react(), tailwindcss()],
  server: {
    host: 'localhost',
    open: true,
    port: 3000,
    proxy: {
      '/api': {
        changeOrigin: true,
        rewrite: (path) => path.replace('/api', ''),
        secure: false,
        target: 'http://localhost/',
      },
    },
  },
});
