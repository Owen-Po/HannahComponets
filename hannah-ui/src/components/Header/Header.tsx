import React from "react";
import {
  Info,
  ChevronUp,
  ChevronDown,
  ArrowLeft,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  href?: string;
}

interface HeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
  centerContent?: React.ReactNode;

  onClickInfo?: () => void;
  tutorialActive?: boolean;

  isCollapsed?: boolean;
  onToggleCollapse?: () => void;

  showBackButton?: boolean;
  onBack?: () => void;

  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;

  breadcrumbs?: BreadcrumbItem[];
}

export const Header = ({
  title,
  description,
  children,
  centerContent,
  onClickInfo,
  tutorialActive = false,
  isCollapsed = false,
  onToggleCollapse,
  showBackButton = false,
  onBack,
  isSidebarOpen = true,
  onToggleSidebar,
  breadcrumbs,
}: HeaderProps) => {
  return (
    <header className="mb-4">
      {isCollapsed ? (
        /* Colapsado */
        <div className="bg-white border-b px-4 py-2">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-semibold">{title}</h1>

            {onToggleCollapse && (
              <button onClick={onToggleCollapse}>
                <ChevronDown className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Expandido */
        <div className="bg-white border-b relative">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="px-4 pt-2 flex items-center gap-1 text-xs text-gray-400">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="w-3 h-3 text-gray-300" />}

                  {crumb.onClick ? (
                    <button
                      onClick={crumb.onClick}
                      className="hover:text-amber-600"
                    >
                      {crumb.label}
                    </button>
                  ) : crumb.href ? (
                    <a href={crumb.href} className="hover:text-amber-600">
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="font-medium text-gray-600">
                      {crumb.label}
                    </span>
                  )}
                </span>
              ))}
            </div>
          )}

          <div className="px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Left */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  {onToggleSidebar && (
                    <button onClick={onToggleSidebar} className="md:hidden">
                      {isSidebarOpen ? (
                        <ChevronLeft className="w-4 h-4" />
                      ) : (
                        <Menu className="w-4 h-4" />
                      )}
                    </button>
                  )}

                  {showBackButton && (
                    <button onClick={onBack}>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  )}

                  <h1 className="text-lg font-semibold truncate">{title}</h1>

                  {tutorialActive && onClickInfo && (
                    <button onClick={onClickInfo}>
                      <Info className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {description && (
                  <p className="text-sm text-gray-500">{description}</p>
                )}
              </div>

              {/* Center */}
              {centerContent && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                  {centerContent}
                </div>
              )}

              {/* Right */}
              <div className="flex items-center gap-2">
                {children}

                {onToggleCollapse && (
                  <button onClick={onToggleCollapse}>
                    <ChevronUp className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
