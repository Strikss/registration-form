import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': './src',
      '@/assets': '/src/assets/',
      '@/config': '/src/config/',
      '@/hooks': '/src/hooks/',
      '@/pages': '/src/pages/',
      '@/routes': '/src/routes/',
      '@/shared': '/src/shared/',
      '@/stores': '/src/stores/',
      '@/styles': '/src/styles/',
      '@/utils': '/src/utils/',
      '@/types': '/src/types/',
      '@/api': '/src/api/',
    },
  },
});
