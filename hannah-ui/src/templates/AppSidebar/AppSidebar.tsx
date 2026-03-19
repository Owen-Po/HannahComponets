import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LogOut, ChevronDown, Pin, PinOff } from "lucide-react";
import { cn } from "../../utils/cn";
import type { User } from "../AuthContext/AuthContext";
import type { ModuleCategory } from "../modulos/modulos";

// ── Themes ─────────────────────────────────────────────────────────────────────
export type SidebarTheme =
  | "amber"
  | "blue"
  | "indigo"
  | "emerald"
  | "rose"
  | "slate"
  | "violet";

interface ThemeTokens {
  /** Color de fondo del logo/avatar */
  logoBg: string;
  /** Color de fondo del item activo */
  activeBg: string;
  /** Color de texto del item activo */
  activeText: string;
  /** Color del indicador lateral del item activo */
  activeBar: string;
  /** Color del icono del item activo */
  activeIconBg: string;
}

const THEMES: Record<SidebarTheme, ThemeTokens> = {
  amber: {
    logoBg: "bg-amber-800",
    activeBg: "bg-amber-700",
    activeText: "text-white",
    activeBar: "bg-amber-400",
    activeIconBg: "bg-white/15 text-white",
  },
  blue: {
    logoBg: "bg-blue-700",
    activeBg: "bg-blue-600",
    activeText: "text-white",
    activeBar: "bg-blue-300",
    activeIconBg: "bg-white/20 text-white",
  },
  indigo: {
    logoBg: "bg-indigo-700",
    activeBg: "bg-indigo-600",
    activeText: "text-white",
    activeBar: "bg-indigo-300",
    activeIconBg: "bg-white/20 text-white",
  },
  emerald: {
    logoBg: "bg-emerald-700",
    activeBg: "bg-emerald-600",
    activeText: "text-white",
    activeBar: "bg-emerald-300",
    activeIconBg: "bg-white/20 text-white",
  },
  rose: {
    logoBg: "bg-rose-700",
    activeBg: "bg-rose-600",
    activeText: "text-white",
    activeBar: "bg-rose-300",
    activeIconBg: "bg-white/20 text-white",
  },
  slate: {
    logoBg: "bg-slate-700",
    activeBg: "bg-slate-700",
    activeText: "text-white",
    activeBar: "bg-slate-400",
    activeIconBg: "bg-white/15 text-white",
  },
  violet: {
    logoBg: "bg-violet-700",
    activeBg: "bg-violet-600",
    activeText: "text-white",
    activeBar: "bg-violet-300",
    activeIconBg: "bg-white/20 text-white",
  },
};

// ── Colores de categoría ───────────────────────────────────────────────────────
const CATEGORY_COLORS = [
  "bg-emerald-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-rose-500",
  "bg-teal-500",
];

// ── Types ──────────────────────────────────────────────────────────────────────
export interface AppSidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (v: boolean) => void;
  isPinned: boolean;
  setIsPinned: (v: boolean) => void;
  /**
   * Usuario autenticado. Si usas AuthContext, pasa `user` desde `useAuth()`.
   */
  user?: User | null;
  /**
   * Categorías y módulos del sidebar.
   */
  categories?: ModuleCategory[];
  /** Nombre de la app mostrado en el header */
  appName?: string;
  /** Subtítulo del header */
  appSubtitle?: string;
  /** Función que se llama al hacer logout */
  onLogout?: () => void | Promise<void>;
  /**
   * Esquema de color del sidebar.
   * @default "amber"
   */
  theme?: SidebarTheme;
}

// ── Component ──────────────────────────────────────────────────────────────────
export const AppSidebar = ({
  isSidebarOpen,
  setIsSidebarOpen,
  isPinned,
  setIsPinned,
  user = null,
  categories = [],
  appName = "Mi App",
  appSubtitle = "Sistema de Gestión",
  onLogout,
  theme = "blue",
}: AppSidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const isExpanded = isPinned || isHovered;
  const t = THEMES[theme];

  const toggleCategory = (id: string) =>
    setCollapsed((prev) => {
      const s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });

  const navigateTo = (path: string) => {
    navigate(path);
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  const handleLogout = async () => {
    await onLogout?.();
  };

  return (
    <>
      {/* ── Sidebar panel ─────────────────────────────────────────────────── */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full bg-white border-r border-gray-100 z-40",
          "flex flex-col shadow-[2px_0_12px_rgba(0,0,0,0.06)]",
          "transition-all duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0",
          "w-64 group",
          isPinned ? "md:w-64" : "md:w-[68px] md:hover:w-64",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Header ──────────────────────────────────────────────────────────── */}
        <div className="h-16 flex items-center justify-between px-3 border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-3 overflow-hidden">
            {/* Logo — reemplaza este div con tu logo */}
            <div className={cn("w-9 h-9 rounded-lg shrink-0", t.logoBg)} />
            <div
              className={cn(
                "overflow-hidden transition-all duration-300",
                isExpanded ? "w-auto opacity-100" : "w-0 opacity-0 md:hidden",
              )}
            >
              <p className="text-sm font-bold text-gray-900 whitespace-nowrap">
                {appName}
              </p>
              <p className="text-[11px] text-gray-400 whitespace-nowrap">
                {appSubtitle}
              </p>
            </div>
          </div>

          {/* Pin button */}
          <button
            onClick={() => setIsPinned(!isPinned)}
            className={cn(
              "hidden md:flex items-center justify-center w-7 h-7 rounded-md",
              "text-gray-400 hover:bg-gray-100 transition-all",
              isExpanded
                ? "opacity-100"
                : "opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto",
            )}
            aria-label={isPinned ? "Desanclar" : "Anclar"}
          >
            {isPinned ? (
              <PinOff className="w-4 h-4" />
            ) : (
              <Pin className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* User ─────────────────────────────────────────────────────────────── */}
        {user && (
          <div className="px-3 py-3 border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-3 overflow-hidden">
              <div
                className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center",
                  "text-white font-semibold text-sm shrink-0",
                  t.logoBg,
                )}
              >
                {user.nombre?.charAt(0)?.toUpperCase() ?? "U"}
              </div>
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  isExpanded ? "w-auto opacity-100" : "w-0 opacity-0 md:hidden",
                )}
              >
                <p className="text-[13px] font-semibold text-gray-900 whitespace-nowrap truncate max-w-[130px]">
                  {user.nombre}
                </p>
                <p className="text-[11px] text-stone-500 whitespace-nowrap truncate max-w-[130px]">
                  {user.rol}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation ────────────────────────────────────────────────────────── */}
        <nav className="flex-1 py-3 px-2 overflow-y-auto space-y-1">
          {categories.map((cat, idx) => {
            const isCollapsed = collapsed.has(cat.id);

            return (
              <div key={cat.id} className="mb-1">
                {/* Category header */}
                <button
                  onClick={() => isExpanded && toggleCategory(cat.id)}
                  className={cn(
                    "w-full flex items-center gap-2.5 px-2 py-1.5 rounded-md",
                    "transition-all duration-200",
                    isExpanded
                      ? "hover:bg-gray-50 cursor-pointer"
                      : "cursor-default",
                  )}
                >
                  <span
                    className={cn(
                      "w-1.5 h-1.5 rounded-full shrink-0",
                      CATEGORY_COLORS[idx % CATEGORY_COLORS.length],
                    )}
                  />
                  <span
                    className={cn(
                      "flex-1 text-left text-[11px] font-semibold text-gray-400",
                      "uppercase tracking-wider whitespace-nowrap transition-all duration-300",
                      isExpanded ? "opacity-100" : "opacity-0 w-0 md:hidden",
                    )}
                  >
                    {cat.title}
                  </span>
                  {isExpanded && (
                    <ChevronDown
                      className={cn(
                        "w-3 h-3 text-gray-300 transition-transform duration-200",
                        isCollapsed && "-rotate-90",
                      )}
                    />
                  )}
                </button>

                {/* Modules */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    isCollapsed && isExpanded
                      ? "max-h-0 opacity-0"
                      : "max-h-[500px] opacity-100",
                  )}
                >
                  <div className="space-y-0.5 pt-0.5">
                    {cat.modules.map((mod) => {
                      const active =
                        location.pathname === mod.path ||
                        location.pathname.startsWith(mod.path + "/");

                      return (
                        <button
                          key={mod.id}
                          onClick={() => navigateTo(mod.path)}
                          title={!isExpanded ? mod.name : ""}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "w-full flex items-center gap-3 py-2 rounded-lg text-sm",
                            "font-medium transition-all duration-150 relative overflow-hidden",
                            isExpanded ? "pl-3 pr-2" : "justify-center px-2",
                            active
                              ? cn(t.activeBg, t.activeText)
                              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                          )}
                        >
                          {/* Active indicator bar */}
                          {active && (
                            <span
                              className={cn(
                                "absolute left-0 top-1/2 -translate-y-1/2",
                                "w-[3px] h-5 rounded-r-full",
                                t.activeBar,
                              )}
                            />
                          )}

                          {/* Icon */}
                          <div
                            className={cn(
                              "flex items-center justify-center w-7 h-7 rounded-md shrink-0",
                              active ? t.activeIconBg : "text-gray-500",
                            )}
                          >
                            <mod.icon className="w-4 h-4" />
                          </div>

                          {/* Label */}
                          <span
                            className={cn(
                              "text-left text-[13px] whitespace-nowrap overflow-hidden",
                              "transition-all duration-300",
                              isExpanded
                                ? "opacity-100 w-auto"
                                : "opacity-0 w-0 md:hidden",
                            )}
                          >
                            {mod.name}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Divider between categories */}
                {idx < categories.length - 1 && (
                  <div className="mt-3 mb-1 mx-2 h-px bg-gray-100" />
                )}
              </div>
            );
          })}
        </nav>

        {/* Logout ─────────────────────────────────────────────────────────────── */}
        <div className="px-2 py-3 border-t border-gray-100 shrink-0">
          <button
            onClick={handleLogout}
            className={cn(
              "w-full flex items-center gap-3 py-2 rounded-lg text-sm font-medium",
              "text-gray-500 hover:bg-red-50 hover:text-red-600",
              "transition-all duration-150",
              isExpanded ? "pl-3 pr-2" : "justify-center px-2",
            )}
          >
            <div className="flex items-center justify-center w-7 h-7 shrink-0">
              <LogOut className="w-4 h-4" />
            </div>
            <span
              className={cn(
                "whitespace-nowrap text-[13px] overflow-hidden transition-all duration-300",
                isExpanded ? "opacity-100 w-auto" : "opacity-0 w-0 md:hidden",
              )}
            >
              Cerrar sesión
            </span>
          </button>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-30 md:hidden backdrop-blur-[1px]"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
};
