import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { Home, Users, Settings, BarChart2, FileText, Bell } from "lucide-react";

import { DashboardLayout } from "./DashboardLayout";
import { Badge } from "@hannah-ui/badge";
import { Card, CardHeader, CardBody } from "@hannah-ui/card";

import type { ModuleCategory } from "../modulos/modulos";
import type { User } from "../AuthContext/AuthContext";

/* ─────────────────────────────────────────
   Mock data
───────────────────────────────────────── */

const MOCK_USER: User = {
  id: "1",
  nombre: "Ana García",
  email: "ana@ejemplo.com",
  rol: "ADMINISTRADOR",
  estaActivo: true,
};

const MOCK_CATEGORIES: ModuleCategory[] = [
  {
    id: "general",
    title: "General",
    icon: Home,
    modules: [
      { id: 1, name: "Dashboard", path: "/dashboard", icon: Home, roles: ["ADMINISTRADOR"] },
      { id: 2, name: "Reportes", path: "/dashboard/reportes", icon: BarChart2, roles: ["ADMINISTRADOR"] },
    ],
  },
  {
    id: "gestion",
    title: "Gestión",
    icon: Users,
    modules: [
      { id: 3, name: "Usuarios", path: "/dashboard/usuarios", icon: Users, roles: ["ADMINISTRADOR"] },
      { id: 4, name: "Documentos", path: "/dashboard/documentos", icon: FileText, roles: ["ADMINISTRADOR"] },
    ],
  },
  {
    id: "sistema",
    title: "Sistema",
    icon: Settings,
    modules: [
      { id: 5, name: "Notificaciones", path: "/dashboard/notif", icon: Bell, roles: ["ADMINISTRADOR"] },
      { id: 6, name: "Configuración", path: "/dashboard/config", icon: Settings, roles: ["ADMINISTRADOR"] },
    ],
  },
];

/* ─────────────────────────────────────────
   Example pages
───────────────────────────────────────── */

const PageHome = () => (
  <div className="space-y-4">
    <div>
      <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
      <p className="mt-0.5 text-sm text-gray-500">Bienvenido de vuelta, Ana.</p>
    </div>

    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {[
        { label: "Usuarios", value: "1,248", badge: "primary" as const },
        { label: "Ingresos", value: "$24.5k", badge: "success" as const },
        { label: "Tickets", value: "37", badge: "warning" as const },
        { label: "Errores", value: "3", badge: "danger" as const },
      ].map((item) => (
        <Card key={item.label} shadow="sm">
          <CardHeader
            title={item.label}
            action={<Badge variant={item.badge}>{item.value}</Badge>}
          />
        </Card>
      ))}
    </div>

    <Card shadow="sm">
      <CardBody>
        <p className="text-sm text-gray-500">Selecciona un módulo desde el sidebar para navegar.</p>
      </CardBody>
    </Card>
  </div>
);

const PagePlaceholder = ({ title }: { title: string }) => (
  <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
      <FileText className="h-6 w-6 text-gray-400" />
    </div>
    <p className="text-sm font-semibold text-gray-700">{title}</p>
    <p className="text-xs text-gray-400">Página de demostración</p>
  </div>
);

/* ─────────────────────────────────────────
   Layout wrapper
───────────────────────────────────────── */

const LayoutDemo = () => (
  <MemoryRouter initialEntries={["/dashboard"]}>
    <Routes>
      <Route
        path="/dashboard/*"
        element={
          <DashboardLayout
            sidebarProps={{
              user: MOCK_USER,
              categories: MOCK_CATEGORIES,
              onLogout: () => alert("Logout"),
            }}
          >
            <Routes>
              <Route index element={<PageHome />} />
              <Route path="reportes" element={<PagePlaceholder title="Reportes" />} />
              <Route path="usuarios" element={<PagePlaceholder title="Usuarios" />} />
              <Route path="documentos" element={<PagePlaceholder title="Documentos" />} />
              <Route path="notif" element={<PagePlaceholder title="Notificaciones" />} />
              <Route path="config" element={<PagePlaceholder title="Configuración" />} />
            </Routes>
          </DashboardLayout>
        }
      />
    </Routes>
  </MemoryRouter>
);

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */

const meta: Meta = {
  title: "Templates/DashboardLayout",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Layout completo de dashboard: sidebar colapsable con hover-expand y pin, área de contenido con scroll, SidebarContext disponible para páginas hijas. Persiste estado en localStorage.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/* ─────────────────────────────────────────
   Stories
───────────────────────────────────────── */

export const Default: Story = {
  name: "Default · Sidebar colapsado",
  render: () => <LayoutDemo />,
};
