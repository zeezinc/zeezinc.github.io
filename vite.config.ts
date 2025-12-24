// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   base: './', // Use relative paths for assets to support any deployment subpath
//   build: {
//     outDir: 'dist',
//     sourcemap: false
//   },
//   server: {
//     port: 3000
//   }
// });

// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
})
