<p align="center">
  <img src="https://raw.githubusercontent.com/Owen-Po/HannahComponets/main/HannahComponets/hannah-ui/public/logohanna.png" alt="Hannah UI" width="120" />
</p>

<h1 align="center">HANNAH <span style="color:#c4ff0d">UI</span></h1>

<p align="center">
  <a href="https://www.npmjs.com/package/hannah-ui">
    <img src="https://img.shields.io/npm/v/hannah-ui?color=c4ff0d&label=hannah-ui&style=flat-square" alt="NPM Version" />
  </a>
  <a href="https://github.com/Owen-Po/HannahComponets/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/Owen-Po/HannahComponets?color=c4ff0d&style=flat-square" alt="License" />
  </a>
  <img src="https://img.shields.io/badge/react-%5E19.0.0-61dafb?style=flat-square&logo=react" alt="React 19" />
  <img src="https://img.shields.io/badge/tailwind-v4-38bdf8?style=flat-square&logo=tailwind-css" alt="Tailwind CSS v4" />
</p>

<p align="center">
  Librería de componentes React + Tailwind CSS de alto rendimiento para construir interfaces modernas y profesionales.
</p>

<p align="center">
  <strong>🚀 v0.0.9</strong> &middot; ✨ 78+ componentes &middot; 🛠️ 12+ filtros &middot; 📱 6+ templates
</p>

---

## ✨ Características principales

- **🎯 Máxima Optimización:** Instalación de componentes de forma individual para el menor tamaño de bundle posible.
- **🎨 Tailwind CSS v4:** Aprovecha las últimas utilidades y rendimiento del nuevo motor de Tailwind.
- **⚛️ React 19 Powered:** Construido sobre la versión más reciente de React para máxima compatibilidad.
- **🛠️ Componentes Avanzados:** Desde simples botones hasta tablas con drag & drop y filtros inteligentes.
- **🏗️ Gestión Monorepo:** Estructura organizada que permite actualizaciones independientes por componente.

---

## 🛠️ Tech Stack

| Herramienta | Versión | Propósito |
|---|---|---|
| **React** | 19.x | UI Framework |
| **TypeScript** | 5.9 | Tipado estático y robustez |
| **Vite** | 7.x | Build tool de alto rendimiento |
| **Tailwind CSS** | 4.x | Estilos utilitarios modernos |
| **Storybook** | 10.x | Documentación visual interactiva |
| **Vitest** | 4.x | Testing unitario |
| **Lucide React** | 0.5xx | Pack de iconografía moderna |

---

## 🚀 Cómo usar en tu proyecto

### ⚡ Opción A: Paquete principal (Componentes esenciales)
Instala los componentes más usados en un solo paquete ligero.

```bash
npm install hannah-ui
```

### 🎯 Opción B: Componentes individuales (Optimización máxima)
Instala exclusivamente lo que necesitas para maximizar el rendimiento.

```bash
# Ejemplo: instalar solo Botón e Input
npm install @hannah-ui/button @hannah-ui/input

# Peer dependencies obligatorias
npm install react react-dom lucide-react
```

---

## 📦 Componentes Destacados

### 📝 Formularios
- `Button` - Botones con variantes y estados animados.
- `Input` / `Textarea` - Campos de texto con soporte para iconos.
- `AppSelect` - Selector inteligente con búsqueda integrada.
- `DatePicker` - Calendario propio con selección de fechas.
- `PhoneInput` - Input de teléfono internacional avanzado.

### 📊 Datos y Display
- `Table` - Tablas con soporte para ordenación y estilos.
- `DraggableTable` - Tabla con columnas arrastrables y redimensionables.
- `ExpandableTable` - Visualización de datos anidados.
- `KPICard` / `StatsCard` - Tarjetas de indicadores clave de rendimiento.
- `Avatar` / `AvatarGroup` - Gestión de perfiles de usuario.

### 🧭 Navegación & Layout
- `DashboardLayout` - Estructura completa de panel administrativo.
- `Sidebar` / `ModernSidebar` - Menús laterales colapsables y fijos.
- `Tabs` / `PageTabs` - Navegación organizada por pestañas.
- `Breadcrumb` - Rutas de navegación claras.

---

## 🎨 Personalización y Estilos

### Importar estilos globales
Hannah UI incluye un archivo CSS optimizado que debes importar una sola vez en tu entry point (`main.tsx` o `App.tsx`):

```tsx
import "hannah-ui/style.css";
```

### Paleta de colores
El sistema está diseñado para integrarse con los colores de tu marca. El color primario por defecto es el **Lima/Ámbar moderno** (`#c4ff0d`).

---

## 📖 Storybook & Documentación

Para ver el catálogo completo de componentes y jugar con sus variantes:

```bash
# Instalar dependencias si estás en el repo
npm install

# Iniciar Storybook
npm run storybook
```

Visita nuestra documentación oficial para más detalles y ejemplos interactivos.

---

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si encuentras un bug o tienes una idea para un nuevo componente, abre un issue o envía un PR.

1. Haz un fork del repositorio.
2. Crea tu rama de característica (`git checkout -b feature/AmazingFeature`).
3. Haz un commit de tus cambios (`git commit -m 'Add some AmazingFeature'`).
4. Haz push a la rama (`git push origin feature/AmazingFeature`).
5. Abre un Pull Request.

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT**. Consulta el archivo [LICENSE](https://github.com/Owen-Po/HannahComponets/blob/main/LICENSE) para más detalles.

---

<p align="center">
  <strong>HANNAH UI</strong> &middot; React + Tailwind CSS
</p>
<p align="center">
  Hecho con ❤️ para desarrolladores que buscan velocidad y diseño.
</p>
