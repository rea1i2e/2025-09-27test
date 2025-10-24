// vite.config.js
import { defineConfig } from 'vite'
export default defineConfig({
  base: '/2025-09-27test/',
  build: {
    outDir: 'docs', // GitHub Pagesで公開できるのは`/`or`docs/` のみ
  },
  server: {
    open: true,
  },
})