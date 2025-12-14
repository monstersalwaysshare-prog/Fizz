import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import.meta.env.BASE_URL === "/Fizz/"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Fizz/",
})
