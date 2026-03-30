import { useState, useEffect, type ReactNode } from "react";
import { Outlet } from "react-router-dom";

import { cn } from "../../utils/cn";
import { SidebarProvider } from "../SidebarContext/SidebarContext";
import { AppSidebar } from "../AppSidebar/AppSidebar";
import type { AppSidebarProps, SidebarTheme } from "../AppSidebar/AppSidebar";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */

export interface DashboardLayoutProps {
  /** Props passed directly to AppSidebar (user, categories, appName, etc.) */
  sidebarProps?: Omit<
    AppSidebarProps,
    "isSidebarOpen" | "setIsSidebarOpen" | "isPinned" | "setIsPinned"
  >;

  /** Main area content. Falls back to <Outlet /> if omitted. */
  children?: ReactNode;

  /** Background class for the content area. @default "bg-gray-50" */
  contentBg?: string;
}

export type { SidebarTheme };

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */

function readLocal<T>(key: string, fallback: T): T {
  try {
    const saved = localStorage.getItem(key);
    return saved !== null ? (JSON.parse(saved) as T) : fallback;
  } catch {
    return fallback;
  }
}

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */

export const DashboardLayout = ({
  sidebarProps,
  children,
  contentBg = "bg-gray-50",
}: DashboardLayoutProps) => {

  /* ── Sidebar state ── */
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => readLocal("sidebarOpen", true));
  const [isPinned, setIsPinned]           = useState(() => readLocal("sidebarPinned", false));

  /* ── Persist to localStorage ── */
  useEffect(() => { localStorage.setItem("sidebarOpen", JSON.stringify(isSidebarOpen)); }, [isSidebarOpen]);
  useEffect(() => { localStorage.setItem("sidebarPinned", JSON.stringify(isPinned)); }, [isPinned]);

  /* ── Render ── */
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
