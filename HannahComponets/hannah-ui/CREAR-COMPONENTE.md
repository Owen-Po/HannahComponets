# Guia para crear un nuevo componente en Hannah UI

## Estructura del monorepo

```
hannah-ui/
  packages/
    {nombre}/              <-- cada componente es un paquete independiente
      src/
        {Nombre}.tsx       <-- componente principal
        {Nombre}.test.tsx  <-- tests con vitest
        {Nombre}.stories.tsx <-- storybook stories
        index.ts           <-- barrel export
      package.json
      vite.config.ts
  package.json             <-- root: agregar export aqui
```

---

## Paso 1: Crear la carpeta del paquete

Crear `packages/{nombre}/` donde `{nombre}` es todo en minusculas sin guiones.

Ejemplo: si el componente se llama `ProductGallery` -> carpeta `productgallery`

---

## Paso 2: package.json

Crear `packages/{nombre}/package.json`:

```json
{
  "name": "@hannah-ui/{nombre}",
  "version": "0.0.1",
  "type": "module",
  "main": "./dist/hannah-ui-{nombre}.umd.cjs",
  "module": "./dist/hannah-ui-{nombre}.js",
  "types": "./dist/src/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/src/index.d.ts",
      "import": "./dist/hannah-ui-{nombre}.js",
      "require": "./dist/hannah-ui-{nombre}.umd.cjs"
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
    "clsx": "^2.1.1",
    "tailwind-merge": "^3.5.0"
  }
}
```

> Si el componente necesita dependencias extra (ej: `date-fns`, `react-big-calendar`), agregarlas en `dependencies`. NO agregar librerias de UI externas si se puede resolver con React + Tailwind nativo.

---

## Paso 3: vite.config.ts

Crear `packages/{nombre}/vite.config.ts`:

```ts
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
      name: 'HannahUI{NombrePascal}',
      fileName: 'hannah-ui-{nombre}',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'lucide-react',
        '@hannah-ui/core',
        '@dnd-kit/core',
        '@tanstack/react-table',
        'zustand',
      ],
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

Reemplazar:
- `{NombrePascal}` -> nombre en PascalCase (ej: `ProductGallery`)
- `{nombre}` -> nombre en minusculas (ej: `productgallery`)

---

## Paso 4: Componente principal

Crear `packages/{nombre}/src/{Nombre}.tsx`:

```tsx
import { type FC, type HTMLAttributes } from "react";
import { cn } from "@hannah-ui/core";

export interface {Nombre}Props extends HTMLAttributes<HTMLDivElement> {
  // props del componente
}

export const {Nombre}: FC<{Nombre}Props> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("/* clases tailwind */", className)} {...props}>
      {children}
    </div>
  );
};

{Nombre}.displayName = "{Nombre}";
```

### Reglas de estilo

- Usar **Tailwind CSS** para todo el styling
- Usar `cn()` de `@hannah-ui/core` para merge de clases
- Para variantes usar `cva` de `class-variance-authority`:

```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@hannah-ui/core";

const miComponente = cva(
  ["clases base"],
  {
    variants: {
      variant: {
        default: "clases-default",
        primary: "clases-primary",
      },
      size: {
        sm: "clases-sm",
        md: "clases-md",
        lg: "clases-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);
```

- Iconos: usar `lucide-react`
- Dark mode: incluir variantes `dark:` en las clases
- NO depender de librerias externas de drag-and-drop, usar HTML5 drag nativo
- NO agregar librerias de UI externas si se puede resolver con React + Tailwind

---

## Paso 5: Barrel export

Crear `packages/{nombre}/src/index.ts`:

```ts
export { {Nombre} } from "./{Nombre}";
export type { {Nombre}Props } from "./{Nombre}";
```

Si hay multiples componentes en el paquete, exportar todos:

```ts
export { ComponenteA } from "./ComponenteA";
export { ComponenteB } from "./ComponenteB";
export type { ComponenteAProps } from "./ComponenteA";
export type { ComponenteBProps } from "./ComponenteB";
```

---

## Paso 6: Tests

Crear `packages/{nombre}/src/{Nombre}.test.tsx`:

```tsx
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { {Nombre} } from "./{Nombre}";

describe("{Nombre}", () => {
  it("renders without crashing", () => {
    render(<{Nombre}>Test</{Nombre}>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<{Nombre} className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  // agregar mas tests segun la funcionalidad del componente
});
```

Para correr tests de un paquete especifico, usar temporalmente:

```bash
npx vitest run --dir packages/{nombre}/src
```

---

## Paso 7: Storybook Stories

Crear `packages/{nombre}/src/{Nombre}.stories.tsx`:

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { {Nombre} } from "./{Nombre}";

const meta: Meta<typeof {Nombre}> = {
  title: "Components/{Nombre}",
  component: {Nombre},
  parameters: {
    layout: "centered", // o "fullscreen" para componentes grandes
    docs: {
      description: {
        component: "Descripcion del componente en espanol.",
      },
    },
  },
  argTypes: {
    // definir controles para cada prop
  },
  args: {
    // valores por defecto
  },
};

export default meta;
type Story = StoryObj<typeof {Nombre}>;

/** Playground con todos los controles */
export const Playground: Story = {};

// agregar mas stories para variantes, estados, etc.
```

> Si el componente necesita estado interactivo (drag & drop, formularios), usar `render` con `useState`:

```tsx
export const Interactive: Story = {
  render: (args) => {
    const [state, setState] = useState(initialState);
    return <{Nombre} {...args} value={state} onChange={setState} />;
  },
};
```

---

## Paso 8: Registrar en root package.json

Abrir `package.json` de la raiz y agregar en la seccion `"exports"` (en orden alfabetico):

```json
"./{NombrePascal}": {
  "types": "./packages/{nombre}/dist/src/index.d.ts",
  "import": "./packages/{nombre}/dist/hannah-ui-{nombre}.js",
  "require": "./packages/{nombre}/dist/hannah-ui-{nombre}.umd.cjs"
}
```

---

## Paso 9: Build y verificar

```bash
# Buildear el componente
npm run build --workspace=packages/{nombre}

# Buildear todos los componentes
npm run build:components
```

---

## Checklist final

- [ ] `packages/{nombre}/package.json` creado
- [ ] `packages/{nombre}/vite.config.ts` creado
- [ ] `packages/{nombre}/src/{Nombre}.tsx` componente implementado
- [ ] `packages/{nombre}/src/index.ts` barrel export
- [ ] `packages/{nombre}/src/{Nombre}.test.tsx` tests escritos
- [ ] `packages/{nombre}/src/{Nombre}.stories.tsx` stories de storybook
- [ ] Export agregado en root `package.json`
- [ ] `npm run build --workspace=packages/{nombre}` compila sin errores
- [ ] Tests pasan

---

## Referencia rapida de reemplazos

| Placeholder | Ejemplo |
|---|---|
| `{nombre}` | `productgallery` (todo minusculas) |
| `{Nombre}` | `ProductGallery` (PascalCase) |
| `{NombrePascal}` | `ProductGallery` (para vite name) |

---

## Utilidad cn()

La funcion `cn()` viene de `@hannah-ui/core` y combina `clsx` + `tailwind-merge`:

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Usar siempre para merge de clases en componentes.
