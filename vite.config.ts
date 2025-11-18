import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
// https://vite.dev/config/
export default defineConfig({
  // For a user site (https://<user>.github.io/) the base should be '/'.
  // If you later publish under a project subpath (e.g. /portfolio/), change this to that subpath.
  base: '/',
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
