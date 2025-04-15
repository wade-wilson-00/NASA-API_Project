import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5137', // Replace with your backend server URL
        changeOrigin: true, // Ensures the host header matches the target
        rewrite: (path) => path.replace(/^\/api/, ''), // Removes '/api' prefix from the request path
      },
    },
  },
})
