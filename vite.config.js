import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/Intro/",  // If you're deploying under a subfolder like domain.com/Intro/
  plugins: [react()],
})
