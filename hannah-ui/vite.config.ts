import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import { resolve } from "path"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts()
  ],

  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/main.ts'),
      name: 'Hannah-UI',

      fileName: 'hannah-ui',
    },
    rollupOptions: {

      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {

        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
})