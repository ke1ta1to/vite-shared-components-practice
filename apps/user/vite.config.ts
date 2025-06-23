import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@vite-shared-components-practice/shared-components': resolve(__dirname, '../../packages/shared-components/src')
    }
  }
})
