// vite.config.js
import { defineConfig } from 'vite'
export default defineConfig({
  base: '/docs/',
  build: {
    outDir: 'docs',
  },
  server: {
    open: true,
  },
})