import type { Meta, StoryObj } from "@storybook/react";
import { Home, Users, Settings, BarChart2, FileText, Bell } from "lucide-react";
import type { ModuleCategory } from "./modulos";
import { Card, CardHeader, CardBody } from "../../components/Card/Card";
import { Badge } from "../../components/Badge/Badge";
import { Alert } from "../../components/Alert/Alert";

/* ─────────────────────────────────────────
   Ejemplo de moduleCategories completo
───────────────────────────────────────── */
const EXAMPLE_CATEGORIES: ModuleCategory[] = [
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
      { id: 5, name: "Notificaciones", path: "/dashboard/notif", icon: Bell, roles: ["ADMINISTRADOR", "EDITOR"] },
      { id: 6, name: "Configuración", path: "/dashboard/config", icon: Settings, roles: ["ADMINISTRADOR"] },
    ],
  },
];

/* ─────────────────────────────────────────
   Visualizador de módulos por rol
───────────────────────────────────────── */
const ModulesVisualizer = ({ filterRole }: { filterRole?: string }) => {
  const filtered = filterRole
    ? EXAMPLE_CATEGORIES.map((cat) => ({
        ...cat,
        modules: cat.modules.filter((m) => m.roles.includes(filterRole)),
      })).filter((cat) => cat.modules.length > 0)
    : EXAMPLE_CATEGORIES;

  return (
    <div className="space-y-3 w-[460px]">
      {filterRole && (
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Mostrando módulos para rol:</span>
          <Badge variant="primary">{filterRole}</Badge>
        </div>
      )}
      {filtered.map((cat) => (
        <Card key={cat.id} shadow="sm">
          <CardHeader title={cat.title} />
          <CardBody>
            <div className="space-y-2">
              {cat.modules.map((mod) => (
                <div
                  key={mod.id}
                  className="flex items-center justify-between py-1.5 px-2 rounded-lg bg-gray-50"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-white border border-gray-200 flex items-center justify-center text-gray-500">
                      <mod.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">{mod.name}</p>
                      <p className="text-[11px] text-gray-400 font-mono">{mod.path}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 flex-wrap justify-end">
                    {mod.roles.map((r) => (
                      <Badge key={r} variant="default" size="sm">{r}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

/* ─────────────────────────────────────────
   Meta
───────────────────────────────────────── */
const meta: Meta = {
  title: "Templates/Modulos",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Archivo de configuración de módulos y categorías del sidebar. Define `moduleCategories` con las rutas, íconos y roles permitidos de cada módulo. El AppSidebar lo usa para construir la navegación filtrada por rol.",
      },
    },
  },
};

export default meta;
type Story = StoryObj;

/* ─────────────────────────────────────────
   Stories
───────────────────────────────────────── */
export const TodosLosModulos: Story = {
  name: "Vista · Todos los módulos",
  render: () => <ModulesVisualizer />,
};

export const FiltradoPorAdministrador: Story = {
  name: "Rol · ADMINISTRADOR",
  render: () => <ModulesVisualizer filterRole="ADMINISTRADOR" />,
};

export const FiltradoPorEditor: Story = {
  name: "Rol · EDITOR",
  render: () => <ModulesVisualizer filterRole="EDITOR" />,
};

export const ComoUsarlo: Story = {
  name: "Docs · Cómo usarlo",
  render: () => (
    <div className="w-[460px] space-y-3">
      <Alert variant="info" title="modulos.ts — archivo de configuración">
        Define aquí todas las rutas de tu app con sus íconos y roles permitidos.
        El AppSidebar filtra automáticamente según el rol del usuario autenticado.
      </Alert>
      <Card shadow="sm">
        <CardBody>
          <pre className="text-xs text-gray-700 leading-relaxed overflow-x-auto">{`// routes/modulos.ts
import { Home, Users } from "lucide-react";

export const moduleCategories = [
  {
    id: "general",
    title: "General",
    icon: Home,
    modules: [
      {
        id: 1,
        name: "Dashboard",
        path: "/dashboard",
        icon: Home,
        roles: ["ADMINISTRADOR", "EDITOR"],
      },
      {
        id: 2,
        name: "Usuarios",
        path: "/dashboard/usuarios",
        icon: Users,
        roles: ["ADMINISTRADOR"],  // solo admins
      },
    ],
  },
];`}
          </pre>
        </CardBody>
      </Card>
    </div>
  ),
};
