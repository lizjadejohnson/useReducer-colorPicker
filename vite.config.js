import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  base: '/useReducer-colorPicker/',  // Add this line
  plugins: [react()],
  server: {
    port: 3000
  }
})