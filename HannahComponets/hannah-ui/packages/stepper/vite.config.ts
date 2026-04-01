import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'HannahUIStepper',
      fileName: 'hannah-ui-stepper',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'lucide-react', '@hannah-ui/core', '@dnd-kit/core', '@tanstack/react-table', 'zustand'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'lucide-react': 'LucideReact',
          '@hannah-ui/core': 'HannahUICore',
        },
      },
    },
  },
});
