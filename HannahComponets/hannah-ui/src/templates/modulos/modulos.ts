import type { LucideIcon } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────────
export interface Module {
  id: number;
  name: string;
  path: string;
  icon: LucideIcon;
  roles: string[];
}

export interface ModuleCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  modules: Module[];
}

// ── Categorías ─────────────────────────────────────────────────────────────────
// 👇 Reemplaza los íconos con los que necesites de lucide-react
// import { Home, Users, Settings } from "lucide-react";

export const moduleCategories: ModuleCategory[] = [
  {
    id: "mi-seccion",
    title: "Mi Sección",
    icon: {} as LucideIcon, // reemplaza con un ícono real
    modules: [
      {
        id: 1,
        name: "Mi Módulo",
        path: "/dashboard/mi-seccion/mi-modulo",
        icon: {} as LucideIcon, // reemplaza con un ícono real
        roles: ["ADMINISTRADOR"],
      },
    ],
  },
];
