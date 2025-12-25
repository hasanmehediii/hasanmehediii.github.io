import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: 
  // 1. If your repo is named 'my-portfolio', set this to '/my-portfolio/'
  // 2. If you are deploying to https://username.github.io/ directly, set this to '/'
  base: '/mehedi-portfolio/', 
})