import { useState } from "react";
import { ChevronDown, Pin, PinOff, LogOut } from "lucide-react";
import { cn } from "@hannah-ui/core";

export interface SidebarModule {
  id: string;
  name: string;
  icon: React.ElementType;
  path?: string;
}

export interface SidebarCategory {
  id: string;
  title: string;
  modules: SidebarModule[];
  color?: string;
}

export interface SidebarProps {
  categories: SidebarCategory[];
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  isPinned: boolean;
  setIsPinned: (pinned: boolean) => void;
  activeModuleId?: string;
  onNavigate?: (path: string, moduleId: string) => void;
  onLogout?: () => void;
  logoutLabel?: string;
  pinLabel?: string;
  unpinLabel?: string;
  renderUser?: React.ReactNode;
  brandName?: string;
  brandShort?: string;
  className?: string;
}

const DEFAULT_CATEGORY_COLORS = [
  "bg-emerald-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-rose-500",
  "bg-teal-500",
];

export const Sidebar = ({
  categories,
  isSidebarOpen,
  setIsSidebarOpen,
  isPinned,
  setIsPinned,
  activeModuleId,
  onNavigate,
  onLogout,
  logoutLabel = "Cerrar sesión",
  pinLabel = "Anclar menú",
  unpinLabel = "Desanclar menú",
  renderUser,
  brandName = "Sistema",
  brandShort = "S",
  className,
}: SidebarProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set());

  const isExpanded = isPinned || isHovered;

  const toggleCategory = (id: string) => {
    setCollapsedCategories((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleNavigate = (module: SidebarModule) => {
    if (!module.path) return;
    onNavigate?.(module.path, module.id);
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
          aria-hidden
        />
      )}

      <aside
        className={cn(
          "fixed top-0 left-0 h-full z-40",
          "bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700",
          "transition-all duration-300 flex flex-col",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
          "md:translate-x-0",
          "w-64",
          !isPinned && "md:w-17 md:hover:w-64",
          className,
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Brand header */}
        <div className="h-16 flex items-center justify-between px-3 border-b border-gray-200 dark:border-gray-700 shrink-0">
          <div
            className={cn(
              "font-bold text-sm text-gray-800 dark:text-gray-100 overflow-hidden whitespace-nowrap transition-all duration-200",
              isExpanded ? "opacity-100 max-w-full" : "opacity-0 max-w-0 md:opacity-100 md:max-w-full",
            )}
          >
            {isExpanded ? brandName : brandShort}
          </div>

          <button
            onClick={() => setIsPinned(!isPinned)}
            className="hidden md:flex p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-gray-300 dark:hover:bg-gray-700 transition-colors shrink-0"
            aria-label={isPinned ? unpinLabel : pinLabel}
          >
            {isPinned ? <PinOff size={15} /> : <Pin size={15} />}
          </button>
        </div>

        {/* User section */}
        {renderUser && (
          <div
            className={cn(
              "px-3 py-3 border-b border-gray-200 dark:border-gray-700 overflow-hidden",
              !isExpanded && "md:px-2",
            )}
          >
            {renderUser}
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 p-2 overflow-y-auto space-y-1">
          {categories.map((category, idx) => {
            const isCollapsed = collapsedCategories.has(category.id);
            const colorClass =
              category.color ??
              DEFAULT_CATEGORY_COLORS[idx % DEFAULT_CATEGORY_COLORS.length];

            return (
              <div key={category.id}>
                {/* Category header */}
                <button
                  onClick={() => isExpanded && toggleCategory(category.id)}
                  className={cn(
                    "w-full flex items-center gap-2 px-2 py-1.5 rounded-md",
                    "hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",
                    !isExpanded && "md:justify-center",
                  )}
                >
                  <span className={cn("w-2 h-2 rounded-full shrink-0", colorClass)} />
                  {isExpanded && (
                    <>
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400 flex-1 text-left">
                        {category.title}
                      </span>
                      <ChevronDown
                        size={14}
                        className={cn(
                          "text-gray-400 dark:text-gray-500 transition-transform duration-200",
                          isCollapsed && "-rotate-90",
                        )}
                      />
                    </>
                  )}
                </button>

                {/* Modules */}
                {!isCollapsed &&
                  category.modules.map((module) => {
                    const isActive = module.id === activeModuleId;
                    return (
                      <button
                        key={module.id}
                        onClick={() => handleNavigate(module)}
                        className={cn(
                          "w-full flex items-center gap-3 px-2 py-2 rounded-lg text-sm transition-colors",
                          isExpanded ? "justify-start" : "md:justify-center",
                          isActive
                            ? "bg-blue-50 text-blue-600 font-medium dark:bg-blue-950/50 dark:text-blue-400"
                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-100",
                        )}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <module.icon
                          size={16}
                          className={cn(
                            "shrink-0",
                            isActive
                              ? "text-blue-500 dark:text-blue-400"
                              : "text-gray-400 dark:text-gray-500",
                          )}
                        />
                        {isExpanded && (
                          <span className="truncate">{module.name}</span>
                        )}
                      </button>
                    );
                  })}
              </div>
            );
          })}
        </nav>

        {/* Footer / Logout */}
        {onLogout && (
          <div className="p-2 border-t border-gray-200 dark:border-gray-700 shrink-0">
            <button
              onClick={onLogout}
              className={cn(
                "w-full flex items-center gap-3 px-2 py-2 rounded-lg",
                "text-sm text-gray-500 hover:bg-red-50 hover:text-red-600",
                "dark:text-gray-400 dark:hover:bg-red-950/40 dark:hover:text-red-400 transition-colors",
                !isExpanded && "md:justify-center",
              )}
              aria-label={logoutLabel}
            >
              <LogOut size={16} className="shrink-0" />
              {isExpanded && <span>{logoutLabel}</span>}
            </button>
          </div>
        )}
      </aside>
    </>
  );
};
