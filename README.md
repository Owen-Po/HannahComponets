# Hannah UI Monorepo

¡Bienvenido al repositorio oficial de **Hannah UI**! Esta es una librería de componentes de alto rendimiento para React, construida sobre Tailwind CSS v4 y diseñada con una estética minimalista y profesional.

## Visión General

Hannah UI está organizada como un **Monorepo** utilizando NPM Workspaces. Esto permite mantener una gran cantidad de componentes de forma independiente, optimizando la publicación y el consumo de la librería. Los usuarios finales pueden instalar el paquete completo (`hannah-ui`) o solo los componentes que necesitan (`@hannah-ui/*`).

---

## Estructura del Proyecto

El corazón del proyecto se encuentra en la carpeta `HannahComponets/hannah-ui/`. Aquí está la distribución principal:

```text
hannah-ui/
├── apps/
│   └── docs/          # La landing page y documentación (Next.js)
├── packages/          # Todos los componentes individuales (78+ paquetes)
│   ├── button/
│   ├── input/
│   └── ...
├── scripts/           # Scripts de automatización (build, publish, etc.)
├── src/               # Código fuente del paquete principal y Storybook
└── package.json       # Configuración global del monorepo y dependencias
```

---

## Cómo agregar un nuevo componente

Para mantener la consistencia y la optimización de la librería, sigue estos pasos al agregar un nuevo componente:

### 1. Crear la estructura en `packages/`
Crea una nueva carpeta con el nombre del componente (en minúsculas):
```bash
mkdir HannahComponets/hannah-ui/packages/mi-componente
mkdir HannahComponets/hannah-ui/packages/mi-componente/src
```

### 2. Configurar el `package.json` del componente
Copia un `package.json` de otro componente existente y ajusta el nombre a `@hannah-ui/mi-componente`. Asegúrate de que las dependencias sean correctas.

### 3. Añadir la configuración de Vite
Crea un archivo `vite.config.ts` en la raíz de tu nuevo paquete. Puedes usar el de `packages/button/vite.config.ts` como plantilla, cambiando el nombre en el campo `build.lib.name`.

### 4. Implementar el código
Escribe tu componente en `packages/mi-componente/src/index.tsx`. Recuerda usar Tailwind CSS v4 para los estilos.

### 5. Registrar en el Paquete Principal
Añade el nuevo componente a los `exports` del `package.json` de la raíz del monorepo (`hannah-ui/package.json`) si quieres que sea accesible desde el paquete principal.

### 6. Construir y Probar
Desde la raíz del monorepo (`hannah-ui/`), ejecuta:
```bash
npm run build:components
```
Esto generará la carpeta `dist/` en tu nuevo componente, lista para ser publicada o consumida.

---

## Comandos Útiles

- `npm run dev`: Inicia el servidor de desarrollo local.
- `npm run storybook`: Abre el catálogo interactivo de componentes.
- `npm run build:all-docs`: Compila el Storybook y la aplicación de documentación para despliegue.
- `npm run publish:components`: Publica todos los componentes individuales en NPM.

---

© 2026 Hannah UI. Hecho para desarrolladores que buscan diseño y velocidad.
