// ── Templates ──────────────────────────────────────────────────────────────────
// Plantillas listas para copiar a tu proyecto.
// Ajusta los imports internos (@/context/...) según tu estructura.

export { AuthProvider, useAuth } from "./AuthContext";
export type { User } from "./AuthContext";

export { SidebarProvider, useSidebar } from "./SidebarContext";

export { moduleCategories } from "./modulos";
export type { Module, ModuleCategory } from "./modulos";

export { ProtectedRoute } from "./ProtectedRoute";

export { AppSidebar } from "./AppSidebar";

export { DashboardLayout } from "./DashboardLayout";
