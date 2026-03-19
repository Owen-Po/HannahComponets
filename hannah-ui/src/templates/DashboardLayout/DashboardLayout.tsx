import { useState, useEffect, type ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { cn } from "../../utils/cn";
import { SidebarProvider } from "../SidebarContext/SidebarContext";
import { AppSidebar } from "../AppSidebar/AppSidebar";
import type { AppSidebarProps, SidebarTheme } from "../AppSidebar/AppSidebar";

export interface DashboardLayoutProps {
  /**
   * Props que se pasan directamente al AppSidebar.
   * Incluye `user`, `categories`, `appName`, `appSubtitle`, `onLogout` y `theme`.
   */
  sidebarProps?: Omit<
    AppSidebarProps,
    "isSidebarOpen" | "setIsSidebarOpen" | "isPinned" | "setIsPinned"
  >;
  /**
   * Contenido a renderizar en el área principal.
   * Si no se pasa, usa <Outlet /> de React Router.
   */
  children?: ReactNode;
  /**
   * Color de fondo del área de contenido principal.
   * @default "bg-gray-50"
   */
  contentBg?: string;
}

// Re-export for convenience
export type { SidebarTheme };

export const DashboardLayout = ({
  sidebarProps,
  children,
  contentBg = "bg-gray-50",
}: DashboardLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    try {
      const saved = localStorage.getItem("sidebarOpen");
      return saved !== null ? (JSON.parse(saved) as boolean) : true;
    } catch {
      return true;
    }
  });

  const [isPinned, setIsPinned] = useState(() => {
    try {
      const saved = localStorage.getItem("sidebarPinned");
      return saved !== null ? (JSON.parse(saved) as boolean) : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  useEffect(() => {
    localStorage.setItem("sidebarPinned", JSON.stringify(isPinned));
  }, [isPinned]);

  return (
    <div className={cn("flex h-screen overflow-hidden", contentBg)}>
      {/* Sidebar */}
      <AppSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isPinned={isPinned}
        setIsPinned={setIsPinned}
        {...sidebarProps}
      />

      {/* Main content */}
      <main
        className={cn(
          "flex-1 overflow-y-auto transition-all duration-300",
          isPinned ? "md:ml-64" : "md:ml-[68px]",
        )}
      >
        <div className={cn("min-h-screen p-3 lg:p-4", contentBg)}>
          <SidebarProvider
            value={{
              isSidebarOpen,
              toggleSidebar: () => setIsSidebarOpen((v) => !v),
              isPinned,
              togglePin: () => setIsPinned((v) => !v),
            }}
          >
            {children ?? <Outlet />}
          </SidebarProvider>
        </div>
      </main>
    </div>
  );
};

