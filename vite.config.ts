// ⚠️ DO NOT MODIFY
// This config is required for root GitHub Pages deployment (zeezinc.github.io)
// base MUST remain '/' — changing breaks production deployment

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',   // ✅ REQUIRED for zeezinc.github.io
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  server: {
    port: 3000
  }
});