import { defineConfig } from 'vite';

// Base app is served from /db/apps/magellan-glossary/ by eXist-db.
// controller.xql redirects "/" to "/index.html", so keep entry filenames stable.
export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'app.js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]'
      }
    }
  }
});
