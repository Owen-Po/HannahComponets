import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { Home, Users, Settings, BarChart2, FileText, Bell } from "lucide-react";
import { AppSidebar } from "./AppSidebar";
import type { AppSidebarProps } from "./AppSidebar";
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
      { id: 1, name: "Dashboard", path: "/dashboard", icon: Home, roles: ["ADMINISTRADOR", "EDITOR"] },
      { id: 2, name: "Reportes", path: "/dashboard/reportes", icon: BarChart2, roles: ["ADMINISTRADOR"] },
    ],
  },
  {
    id: "gestion",
    title: "Gestión",
    icon: Users,
    modules: [
      { id: 3, name: "Usuarios", path: "/dashboard/usuarios", icon: Users, roles: ["ADMINISTRADOR"] },
      { id: 4, name: "Documentos", path: "/dashboard/documentos", icon: FileText, roles: ["ADMINISTRADOR", "EDITOR"] },
    ],
  },
  {
    id: "sistema",
    title: "Sistema",
    icon: Settings,
    modules: [
      { id: 5, name: "Notificaciones", path: "/dashboard/notificaciones", icon: Bell, roles: ["ADMINISTRADOR", "EDITOR"] },
      { id: 6, name: "Configuración", path: "/dashboard/config", icon: Settings, roles: ["ADMINISTRADOR"] },
    ],
  },
];

/* ─────────────────────────────────────────
   Wrapper con router
───────────────────────────────────────── */
const SidebarDemo = (props: Partial<AppSidebarProps> & { initialPath?: string; initialPinned?: boolean }) => {
  const { initialPath = "/dashboard", initialPinned = false, ...rest } = props;
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isPinned, setIsPinned] = useState(initialPinned);

  return (
    <MemoryRouter initialEntries={[initialPath]}>
      <div className="h-screen bg-gray-50 relative overflow-hidden">
        <AppSidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          isPinned={isPinned}
          setIsPinned={setIsPinned}
          user={MOCK_USER}
          categories={MOCK_CATEGORIES}
          onLogout={() => alert("Logout")}
          {...rest}
        />
        {/* Contenido placeholder */}
        <div
          className={`h-full flex items-center justify-center transition-all duration-300 ${
            isPinned ? "md:ml-64" : "md:ml-[68px]"
          }`}
        >
          <div className="text-center space-y-1">
            <p className="text-sm font-semibold text-gray-700">Área de contenido</p>
            <p className="text-xs text-gray-400">
              {isPinned ? "Sidebar fijo — haz clic en PinOff para colapsar" : "Pasa el cursor sobre el sidebar para expandirlo"}
            </p>
          </div>
        </div>
      </div>
    </MemoryRouter>
  );
};

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta = {
  title: "Templates/AppSidebar",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Sidebar de aplicación con hover-expand, pin/unpin, categorías de navegación y logout. Recibe `user` y `categories` como props — conéctalo a tu AuthContext y moduleCategories según el rol del usuario.",
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
  name: "Default · Hover expand",
  render: () => <SidebarDemo />,
};

export const Pinned: Story = {
  name: "State · Pinned (fijo expandido)",
  render: () => <SidebarDemo initialPinned={true} />,
};

export const ActiveRoute: Story = {
  name: "State · Ruta activa marcada",
  render: () => <SidebarDemo initialPath="/dashboard/usuarios" />,
};

export const RolEditor: Story = {
  name: "Rol · Editor (módulos filtrados)",
  render: () => (
    <SidebarDemo
      user={{ ...MOCK_USER, nombre: "Carlos Ruiz", rol: "EDITOR" }}
      categories={MOCK_CATEGORIES.map((cat) => ({
        ...cat,
        modules: cat.modules.filter((m) => m.roles.includes("EDITOR")),
      })).filter((cat) => cat.modules.length > 0)}
    />
  ),
};

export const SinUsuario: Story = {
  name: "State · Sin usuario",
  render: () => <SidebarDemo user={null} />,
};

export const AppPersonalizada: Story = {
  name: "Config · App personalizada",
  render: () => (
    <SidebarDemo
      appName="Gestión HR"
      appSubtitle="Recursos Humanos"
    />
  ),
};
