import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      name: 'HannahUICore',
      fileName: 'hannah-ui-core',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        assetFileNames: (info) =>
          info.names?.[0]?.endsWith('.css') ? 'hannah-ui-core.css' : (info.names?.[0] ?? 'asset'),
      },
    },
  },
});
