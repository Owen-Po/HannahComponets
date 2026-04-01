import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"
import { resolve } from "path"
import dts from "vite-plugin-dts"

/**
 * Strips @layer wrappers from the final CSS so styles work
 * in consumer projects that don't use Tailwind / CSS layers.
 */
function stripCssLayers(): Plugin {
  return {
    name: 'strip-css-layers',
    enforce: 'post',
    generateBundle(_, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type === 'asset' && typeof file.source === 'string' && file.fileName.endsWith('.css')) {
          let css = file.source;
          // Remove all @layer wrappers by tracking brace depth
          let result = '';
          let i = 0;
          while (i < css.length) {
            if (css.startsWith('@layer', i)) {
              // Skip "@layer <name>{" or "@layer <name>;"
              const openBrace = css.indexOf('{', i);
              const semi = css.indexOf(';', i);
              if (semi !== -1 && (openBrace === -1 || semi < openBrace)) {
                // @layer declaration (e.g. "@layer components;") — remove it
                i = semi + 1;
                continue;
              }
              if (openBrace !== -1) {
                // Find matching closing brace and unwrap content
                let depth = 1;
                let j = openBrace + 1;
                while (j < css.length && depth > 0) {
                  if (css[j] === '{') depth++;
                  else if (css[j] === '}') depth--;
                  j++;
                }
                // Extract inner content (without the wrapping braces)
                result += css.slice(openBrace + 1, j - 1);
                i = j;
                continue;
              }
            }
            result += css[i];
            i++;
          }
          file.source = result;
        }
      }
    },
  };
}

export default defineConfig(() => {
  const isStorybook = process.argv[1]?.includes('storybook');

  return {
    plugins: [
      react(),
      tailwindcss(),
      !isStorybook && dts({
        insertTypesEntry: true,
        rollupTypes: true,
      }),
      !isStorybook && stripCssLayers(),
    ].filter(Boolean),

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
          '@tanstack/react-table',
          '@dnd-kit/core',
          '@dnd-kit/sortable',
          '@dnd-kit/utilities',
          'zustand',
          'zustand/middleware',
          'react-select',
          'react-select/creatable',
          'react-dropzone',
          'react-phone-number-input',
          'react-colorful',
          'framer-motion',
        ],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'react/jsx-runtime',
            'react-router-dom': 'ReactRouterDOM',
            'lucide-react': 'LucideReact',
            '@tanstack/react-table': 'TanstackReactTable',
            '@dnd-kit/core': 'DndKitCore',
            '@dnd-kit/sortable': 'DndKitSortable',
            '@dnd-kit/utilities': 'DndKitUtilities',
            'zustand': 'Zustand',
            'zustand/middleware': 'ZustandMiddleware',
            'react-select': 'ReactSelect',
            'react-select/creatable': 'ReactSelectCreatable',
            'react-dropzone': 'ReactDropzone',
            'react-phone-number-input': 'ReactPhoneNumberInput',
            'react-colorful': 'ReactColorful',
            'framer-motion': 'FramerMotion',
          },
          assetFileNames: (info) =>
            info.names?.[0]?.endsWith('.css') ? 'hannah-ui.css' : (info.names?.[0] ?? 'asset'),
        },
      },
      cssCodeSplit: false,
      sourcemap: false,
    },
  };
})
