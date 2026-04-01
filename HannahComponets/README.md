# Hannah UI

Una librería moderna de componentes React con 80+ componentes UI, templates y utilidades construida con Tailwind CSS y TypeScript. Optimizada para tree-shaking y bundles pequeños.

## ✨ Características

-  **Tree-shaking automático** - Solo incluye lo que usas
-  **Dos opciones de instalación** - Paquete completo o componentes individuales
-  **Tailwind CSS** - Estilos consistentes y personalizables
-  **TypeScript** - Tipado completo incluido
-  **Responsive** - Componentes móviles-first
-  **Accesibilidad** - Cumple estándares WCAG
-  **Documentación completa** - Storybook incluido

## Instalación

### Opción 1: Paquete principal (recomendado para empezar) ⚡

Instala el paquete liviano con los componentes más esenciales:

```bash
npm install hannah-ui
```

**Incluye:** 6 componentes básicos + utilidades + estilos CSS (~50KB gzipped)

### Opción 2: Componentes individuales (máxima optimización) 🎯

Instala solo los componentes que necesitas:

```bash
# Componentes básicos
npm install @hannah-ui/button @hannah-ui/input @hannah-ui/card

# Componentes avanzados
npm install @hannah-ui/table @hannah-ui/sidebar @hannah-ui/login

# Peer dependencies obligatorias
npm install react react-dom lucide-react
```

**Ventajas:**
- ✅ Bundle mínimo (solo componentes usados)
- ✅ Mejor performance
- ✅ 80+ componentes disponibles individualmente

##  Uso básico

### 1. Importar estilos

```tsx
// main.tsx o App.tsx
import "hannah-ui/style.css";
```

### 2. Usar componentes

#### Desde paquete principal:

```tsx
import { Button, Input, Card, CardHeader, CardBody, Alert } from "hannah-ui";

function App() {
  return (
    <Card>
      <CardHeader>
        <h2>Mi aplicación</h2>
      </CardHeader>
      <CardBody>
        <Input placeholder="Escribe algo..." />
        <Button variant="primary">Enviar</Button>
        <Alert variant="success">¡Listo!</Alert>
      </CardBody>
    </Card>
  );
}
```

#### Desde componentes individuales:

```tsx
import { Button } from "@hannah-ui/button";
import { Input } from "@hannah-ui/input";
import { Card, CardHeader, CardBody } from "@hannah-ui/card";
import { Alert } from "@hannah-ui/alert";

function App() {
  return (
    <Card>
      <CardHeader>
        <h2>Mi aplicación</h2>
      </CardHeader>
      <CardBody>
        <Input placeholder="Escribe algo..." />
        <Button variant="primary">Enviar</Button>
        <Alert variant="success">¡Listo!</Alert>
      </CardBody>
    </Card>
  );
}
```

## Componentes disponibles

###  Incluidos en `hannah-ui` (paquete principal)

| Componente | Descripción |
|---|---|
| `Button` | Botones con variantes y estados |
| `Input` | Campos de texto con iconos |
| `Card` | Contenedor composable |
| `Alert` | Mensajes contextuales |
| `Badge` | Indicadores de estado |
| `Modal` | Diálogos modales |

### Disponibles individualmente (`@hannah-ui/*`)

#### Formularios
- `@hannah-ui/textarea` - Área de texto expandible
- `@hannah-ui/select` - Dropdown nativo
- `@hannah-ui/appselect` - Select searchable (react-select)
- `@hannah-ui/searchableselect` - Combobox sin dependencias externas
- `@hannah-ui/checkbox` - Casillas de verificación
- `@hannah-ui/radio` - Botones de radio
- `@hannah-ui/toggle` - Switch on/off
- `@hannah-ui/switch` - Toggle con label
- `@hannah-ui/datepicker` - Selector de fecha
- `@hannah-ui/colorpicker` - Selector de color
- `@hannah-ui/phoneinput` - Input telefónico internacional
- `@hannah-ui/filedropzone` - Upload con drag & drop

#### Datos y Display
- `@hannah-ui/table` - Tabla básica
- `@hannah-ui/draggabletable` - Tabla avanzada con drag & drop
- `@hannah-ui/expandabletable` - Tabla con filas expandibles
- `@hannah-ui/stickytable` - Tabla con columnas fijas
- `@hannah-ui/simpletable` - Tabla ligera (TanStack)
- `@hannah-ui/avatar` - Fotos de usuario
- `@hannah-ui/chip` - Tags removibles
- `@hannah-ui/statscard` - Tarjetas de estadísticas
- `@hannah-ui/kpicard` - Indicadores KPI

#### Navegación
- `@hannah-ui/sidebar` - Menú lateral
- `@hannah-ui/header` - Barra superior
- `@hannah-ui/tabs` - Pestañas
- `@hannah-ui/pagetabs` - Tabs de navegación
- `@hannah-ui/breadcrumb` - Rutas de navegación
- `@hannah-ui/pagination` - Paginación

#### Overlays
- `@hannah-ui/confirmmodal` - Modal de confirmación
- `@hannah-ui/exportmodal` - Modal de exportación
- `@hannah-ui/helpmodal` - Modal de ayuda
- `@hannah-ui/toast` - Notificaciones

#### Y muchos más... (80+ componentes en total)

## 🔧 Ejemplos de instalación optimizada

```bash
# App básica
npm install hannah-ui

# App con formularios
npm install hannah-ui @hannah-ui/datepicker @hannah-ui/filedropzone

# App con tablas
npm install hannah-ui @hannah-ui/table @hannah-ui/draggabletable

# App completa
npm install hannah-ui @hannah-ui/sidebar @hannah-ui/login @hannah-ui/dashboardlayout
```

## ⚙️ Peer Dependencies

**Obligatorias en todos los casos:**
```bash
npm install react react-dom lucide-react
```

##  Flujo recomendado

1. **Empieza con `hannah-ui`** (paquete principal)
2. **Explora la documentación** y descubre componentes
3. **Instala específicos** cuando necesites optimizar
4. **Mezcla ambos** según requieras


## Desarrollo

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build
npm run build

# Tests
npm run test

# Storybook
npm run storybook
```

## Licencia

MIT

##  Contribuir

¡Las contribuciones son bienvenidas! Por favor lee nuestras guías de contribución.

---

**Hannah UI** - Componentes React modernos para aplicaciones web.
