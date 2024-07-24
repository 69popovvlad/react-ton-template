import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// @ts-expect-error TS-7016
import stdLibBrowser from 'vite-plugin-node-stdlib-browser';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    stdLibBrowser()
  ],
  optimizeDeps: {
    esbuildOptions: {
      // Node.js global to browser globalThis
      define: {
        global: 'globalThis',
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
      buffer: 'buffer',
    },
  },
})
