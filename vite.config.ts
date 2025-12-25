import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: 
  // Since your repo is 'hasanmehediii.github.io', you are deploying to the root domain.
  // Therefore, base must be '/' instead of a subpath.
  base: '/',
})