import type { ReactNode } from "react";
import {
  Info,
  ChevronUp,
  ChevronDown,
  ArrowLeft,
  Menu,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@hannah-ui/core";

export interface BreadcrumbItem {
  label: string;
  onClick?: () => void;
  href?: string;
}

export interface HeaderProps {
  title: string;
  description?: string;
  children?: ReactNode;
  centerContent?: ReactNode;
  className?: string;

  onClickInfo?: () => void;
  tutorialActive?: boolean;

  isCollapsed?: boolean;
  onToggleCollapse?: () => void;

  showBackButton?: boolean;
  onBack?: () => void;

  isSidebarOpen?: boolean;
  onToggleSidebar?: () => void;

  breadcrumbs?: BreadcrumbItem[];
  expandLabel?: string;
  collapseLabel?: string;
  openMenuLabel?: string;
  backLabel?: string;
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
  className,
  expandLabel = "Expandir",
  collapseLabel = "Colapsar",
  openMenuLabel = "Abrir menú",
  backLabel = "Volver",
}: HeaderProps) => {
  return (
    <header className={cn("mb-4", className)}>
      {isCollapsed ? (
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-2 shadow-sm">
          <div className="flex items-center justify-between">
            <h1 className="text-base font-semibold text-gray-800 dark:text-gray-100">{title}</h1>
            {onToggleCollapse && (
              <button
                onClick={onToggleCollapse}
                className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                aria-label={expandLabel}
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm relative">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <div className="px-4 pt-2.5 flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500">
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="w-3 h-3 text-gray-300 dark:text-gray-600" />}
                  {crumb.onClick ? (
                    <button
                      onClick={crumb.onClick}
                      className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                    >
                      {crumb.label}
                    </button>
                  ) : crumb.href ? (
                    <a
                      href={crumb.href}
                      className="hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                    >
                      {crumb.label}
                    </a>
                  ) : (
                    <span className="font-medium text-gray-600 dark:text-gray-400">
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
                <div className="flex items-center gap-2 mb-0.5">
                  {onToggleSidebar && (
                    <button
                      onClick={onToggleSidebar}
                      className="md:hidden p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                      aria-label={openMenuLabel}
                    >
                      {isSidebarOpen ? (
                        <ChevronLeft className="w-4 h-4" />
                      ) : (
                        <Menu className="w-4 h-4" />
                      )}
                    </button>
                  )}

                  {showBackButton && (
                    <button
                      onClick={onBack}
                      className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                      aria-label={backLabel}
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  )}

                  <h1 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
                    {title}
                  </h1>

                  {tutorialActive && onClickInfo && (
                    <button
                      onClick={onClickInfo}
                      className="p-1 rounded-full text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:text-gray-500 dark:hover:text-blue-400 dark:hover:bg-blue-950/40 transition-colors"
                      aria-label="Ver tutorial"
                    >
                      <Info className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {description && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-snug">
                    {description}
                  </p>
                )}
              </div>

              {/* Center */}
              {centerContent && (
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
                  {centerContent}
                </div>
              )}

              {/* Right */}
              <div className="flex items-center gap-2 shrink-0">
                {children}
                {onToggleCollapse && (
                  <button
                    onClick={onToggleCollapse}
                    className="p-1 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-500 dark:hover:text-gray-300 dark:hover:bg-gray-700 transition-colors"
                    aria-label={collapseLabel}
                  >
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
