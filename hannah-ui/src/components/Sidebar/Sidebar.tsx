import { useState } from "react";
import { ChevronDown, Pin, PinOff } from "lucide-react";

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
}

interface SidebarProps {
  categories: SidebarCategory[];
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  isPinned: boolean;
  setIsPinned: (pinned: boolean) => void;
  onNavigate?: (path: string) => void;
  onLogout?: () => void;
  renderUser?: React.ReactNode;
}

const CATEGORY_COLORS = [
  "bg-emerald-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-orange-500",
];

export const Sidebar = ({
  categories,
  isSidebarOpen,
  setIsSidebarOpen,
  isPinned,
  setIsPinned,
  onNavigate,
  onLogout,
  renderUser,
}: SidebarProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(
    new Set(),
  );

  const isExpanded = isPinned || isHovered;

  const toggleCategory = (id: string) => {
    setCollapsedCategories((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const handleNavigate = (path?: string) => {
    if (!path) return;
    onNavigate?.(path);
    if (window.innerWidth < 768) setIsSidebarOpen(false);
  };

  return (
    <>
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white border-r z-40
          transition-all duration-300 flex flex-col
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          w-64
          ${isPinned ? "md:w-64" : "md:w-[68px] md:hover:w-64"}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-3 border-b">
          <div className="font-bold text-sm">
            {isExpanded ? "Sistema" : "S"}
          </div>

          <button
            onClick={() => setIsPinned(!isPinned)}
            className="hidden md:flex"
          >
            {isPinned ? <PinOff size={16} /> : <Pin size={16} />}
          </button>
        </div>

        {/* User */}
        {renderUser && <div className="px-3 py-3 border-b">{renderUser}</div>}

        {/* Navigation */}
        <nav className="flex-1 p-2 overflow-y-auto space-y-1">
          {categories.map((category, idx) => {
            const isCollapsed = collapsedCategories.has(category.id);

            return (
              <div key={category.id}>
                <button
                  onClick={() => isExpanded && toggleCategory(category.id)}
                  className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-50"
                >
                  <span
                    className={`w-2 h-2 rounded-full ${CATEGORY_COLORS[idx % CATEGORY_COLORS.length]}`}
                  />
                  {isExpanded && (
                    <span className="text-xs font-semibold uppercase">
                      {category.title}
                    </span>
                  )}
                  {isExpanded && (
                    <ChevronDown
                      size={14}
                      className={`ml-auto transition-transform ${
                        isCollapsed ? "-rotate-90" : ""
                      }`}
                    />
                  )}
                </button>

                {!isCollapsed &&
                  category.modules.map((module) => (
                    <button
                      key={module.id}
                      onClick={() => handleNavigate(module.path)}
                      className={`w-full flex items-center gap-3 px-2 py-2 rounded-lg text-sm
                      ${isExpanded ? "justify-start" : "justify-center"}`}
                    >
                      <module.icon size={16} />
                      {isExpanded && module.name}
                    </button>
                  ))}
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        {onLogout && (
          <div className="p-2 border-t">
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-100"
            >
              {isExpanded && "Cerrar sesión"}
            </button>
          </div>
        )}
      </aside>
    </>
  );
};
