import { createContext, useContext, type ReactNode } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────
interface SidebarContextType {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isPinned: boolean;
  togglePin: () => void;
}

// ── Context ────────────────────────────────────────────────────────────────────
const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const useSidebar = (): SidebarContextType => {
  const ctx = useContext(SidebarContext);
  if (!ctx) throw new Error("useSidebar debe usarse dentro de SidebarProvider");
  return ctx;
};

export const SidebarProvider = ({
  children,
  value,
}: {
  children: ReactNode;
  value: SidebarContextType;
}) => (
  <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
);
