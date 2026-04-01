# Guía de Contribución: Cómo agregar componentes a Hannah UI

Hannah UI ahora funciona como un **Monorepo**, esto quiere decir que cada componente se maneja como un paquete independiente dentro de la carpeta `packages/`.

A continuación, encontrarás los pasos a seguir si tú o tus colaboradores quieren añadir un nuevo componente a la librería:

## Estructura de la carpeta
Todos los nuevos componentes deben seguir la misma estructura. Si estamos creando un componente llamado `Dialog`:

```text
packages/dialog/
├── package.json
├── vite.config.ts
└── src/
    ├── Dialog.tsx
    ├── Dialog.stories.tsx
    └── index.ts
```

---

## Pasos para crear el paquete

### 1. Crear el nuevo directorio
Sigue la convención de nombrar la carpeta del paquete en minúsculas.
```bash
mkdir -p packages/dialog/src
```

### 2. Configurar `package.json`
Dentro de `packages/dialog/package.json`, crea el archivo con la siguiente estructura. Asegúrate de actualizar los nombres:

```json
{
  "name": "@hannah-ui/dialog",
  "version": "0.0.1",
  "type": "module",
  "main": "./dist/hannah-ui-dialog.umd.cjs",
  "module": "./dist/hannah-ui-dialog.js",
  "types": "./dist/src/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/src/index.d.ts",
      "import": "./dist/hannah-ui-dialog.js",
      "require": "./dist/hannah-ui-dialog.umd.cjs"
    }
  },
  "scripts": {
    "build": "vite build"
  },
  "peerDependencies": {
    "react": ">=18.0.0",
    "react-dom": ">=18.0.0",
    "lucide-react": ">=0.400.0"
  },
  "dependencies": {
    "@hannah-ui/core": "*",
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.5.0"
  }
}
```

### 3. Configurar `vite.config.ts`
En `packages/dialog/vite.config.ts`, coloca la configuración de compilado (reemplaza `Dialog` y `dialog` donde corresponda):

```typescript
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
      name: 'HannahUIDialog',
      fileName: 'hannah-ui-dialog',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'lucide-react', '@hannah-ui/core'],
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
```

### 4. Crear el código fuente (`src/Dialog.tsx`)
Desarrolla el componente siguiendo buenas prácticas. Recuerda importar los estilos u utilidades compartidas desde `@hannah-ui/core` cuando sea necesario (como por ejemplo `cn`):

```tsx
import React from 'react';
import { cn } from '@hannah-ui/core';

export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Dialog = ({ className, ...props }: DialogProps) => {
  return (
    <div className={cn("p-4 bg-white rounded shadow text-gray-900", className)} {...props} />
  );
};
```

### 5. Configurar las exportaciones (`src/index.ts`)
Enlaza lo necesario hacia el exterior dentro de `packages/dialog/src/index.ts`:

```typescript
export { Dialog } from "./Dialog";
export type { DialogProps } from "./Dialog";
```

### 6. Añadir los casos de prueba o vistas (`src/Dialog.stories.tsx`)
Agrega tu *story* para probar que visualmente está correcto dentro de `npm run storybook`.
> **Nota:** La configuración principal de Storybook ya está sintonizada para escanear `packages/**/*.stories.tsx` y resolver de manera local, ¡así que aparecerá automáticamente!

---

## Registrar y Enlazar

Una vez creada la estructura de tu nuevo componente, debes hacer dos cosas importantes para que todo el monorepo lo detecte y quede listo para exportarse globalmente:

1. **Enlazar localmente:** 
En la raíz principal del proyecto (`/hannah-ui`), ejecuta el comando de instalación de *workspaces*:
```bash
npm install
```
Esto creará el symlink para `@hannah-ui/dialog` dentro de tu `node_modules`.

2. *(Opcional, si utilizas el paraguas completo de `hannah-ui`)* **Agregar el componente a la suite principal:**
Ve al `package.json` de la raíz del proyecto, añádelo en los objetos `dependencies` y luego expórtalo en el objeto `exports` de la raíz junto al resto de los componentes para que el paquete grandote de `hannah-ui` sepa distribuirlo.

## Prueba y Compilación

Finalizas asegurándote que este compila correctamente con todos los demás. Ve a la consola principal de tu proyecto y ejecuta:

```bash
npm run build:components
```
Verifica que todos pasen, ¡y listo! Estás preparado para correr `npm run publish:components` y subirlo al mundo real.
