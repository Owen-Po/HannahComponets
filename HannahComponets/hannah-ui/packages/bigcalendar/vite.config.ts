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
      name: 'HannahUIBigcalendar',
      fileName: 'hannah-ui-bigcalendar',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-big-calendar', 'date-fns', 'date-fns/locale/es'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-big-calendar': 'ReactBigCalendar',
          'date-fns': 'dateFns',
        },
      },
    },
  },
});
