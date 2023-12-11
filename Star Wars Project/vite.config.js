import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      fileName: () => `index.js`
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react-router-dom',
        '@reduxjs/toolkit',
        'react-redux',
        'prop-types'
      ]
    }
  }
})

