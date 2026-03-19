import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import { resolve } from "path"
import dts from "vite-plugin-dts"

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      insertTypesEntry: true,
      rollupTypes: true,
    }),
  ],

  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/main.ts'),
      name: 'HannahUI',
      fileName: 'hannah-ui',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react-router-dom',
        'lucide-react',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
          'react-router-dom': 'ReactRouterDOM',
          'lucide-react': 'LucideReact',
        },
        assetFileNames: (info) =>
          info.names?.[0]?.endsWith('.css') ? 'hannah-ui.css' : (info.names?.[0] ?? 'asset'),
      },
    },
    cssCodeSplit: false,
    sourcemap: false,
  },
})
