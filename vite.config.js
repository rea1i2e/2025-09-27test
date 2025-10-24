// vite.config.js
import { defineConfig } from 'vite'
export default defineConfig({
  root: './',
  build: {
    outDir: 'docs',
  },
  server: {
    open: true,
  },
})