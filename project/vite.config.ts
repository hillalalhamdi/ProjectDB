import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'
import { fileURLToPath, URL } from 'url'

const __dirname = path.dirname(fileURLToPath(new URL(import.meta.url)))

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  }
})