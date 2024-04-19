import { defineConfig } from 'vite'
import { resolve } from "path"
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: {
      "@": resolve(__dirname, "src"),
      "@views": resolve(__dirname, "./src/views"),
      "@components": resolve(__dirname, "./src/components"),
      "@store": resolve(__dirname, "./src/store"),
      "@common": resolve(__dirname, "./src/common"),
    },
  },
  plugins: [react()],
})
