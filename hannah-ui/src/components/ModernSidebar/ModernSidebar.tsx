import { useState, useRef, useEffect, type ReactNode, type ElementType } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "../../utils/cn";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface SidebarItem {
  id: string;
  label: string;
  icon?: ElementType;
  href?: string;
  badge?: string | number;
  isActive?: boolean;
  onClick?: () => void;
  children?: SidebarItem[];
}

export interface SidebarSection {
  label?: string;
  items: SidebarItem[];
}

export interface ModernSidebarProps {
  /** Visual variant */
  variant?: "default" | "dark" | "glass";
  /** Accent color for active indicators and highlights */
  accentColor?: string;
  /** Side of the screen */
  position?: "left" | "right";
  /** Expanded width in px */
  width?: number;
  /** Collapsed width in px */
  collapsedWidth?: number;

  /** Logo element */
  logo?: ReactNode;
  /** Brand name shown next to logo */
  brandName?: string;
  /** Action button in header (e.g. search) */
  headerAction?: ReactNode;

  /** Navigation sections */
  sections: SidebarSection[];

  /** Footer element */
  footer?: ReactNode;
  /** User card at bottom */
  user?: { name: string; email?: string; avatar?: string };

  /** Collapsed state */
  isCollapsed?: boolean;
  /** Toggle collapse callback */
  onToggleCollapse?: () => void;

  className?: string;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  const n = parseInt(h, 16);
  return `${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}`;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

interface NavItemProps {
  item: SidebarItem;
  accentColor: string;
  isCollapsed: boolean;
  depth?: number;
  variant: "default" | "dark" | "glass";
}

function NavItem({ item, accentColor, isCollapsed, depth = 0, variant }: NavItemProps) {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const hasChildren = item.children && item.children.length > 0;
  const Icon = item.icon;

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [expanded, item.children]);

  const isDark = variant === "dark" || variant === "glass";

  const handleClick = () => {
    if (hasChildren) {
      setExpanded((p) => !p);
    }
    item.onClick?.();
  };

  const Tag = item.href ? "a" : "button";
  const linkProps = item.href ? { href: item.href } : {};

  const accentRgb = hexToRgb(accentColor);

  return (
    <div>
      <Tag
        {...linkProps}
        onClick={handleClick}
        title={isCollapsed ? item.label : undefined}
        className={cn(
          "group relative flex w-full items-center gap-2.5 rounded-md px-2.5 py-1.5 text-left text-sm font-medium transition-all duration-150",
          "outline-none focus-visible:ring-2 focus-visible:ring-offset-1",
          depth > 0 && "text-[13px]",
          isCollapsed && "justify-center px-0",
          item.isActive
            ? isDark
              ? "text-white"
              : "text-gray-900"
            : isDark
              ? "text-gray-400 hover:text-gray-200"
              : "text-gray-500 hover:text-gray-900",
          !item.isActive &&
            (isDark
              ? "hover:bg-white/5"
              : "hover:bg-gray-100/80"),
        )}
        style={
          item.isActive
            ? { backgroundColor: `rgba(${accentRgb}, 0.10)` }
            : undefined
        }
      >
        {/* Active accent bar */}
        {item.isActive && (
          <span
            className={cn(
              "absolute top-1/2 -translate-y-1/2 h-4 w-[3px] rounded-full",
              isCollapsed ? "left-0" : "left-0",
            )}
            style={{ backgroundColor: accentColor }}
          />
        )}

        {Icon && (
          <Icon
            size={18}
            className={cn(
              "shrink-0 transition-colors",
              item.isActive
                ? ""
                : isDark
                  ? "text-gray-500 group-hover:text-gray-300"
                  : "text-gray-400 group-hover:text-gray-600",
            )}
            style={item.isActive ? { color: accentColor } : undefined}
          />
        )}

        {!isCollapsed && (
          <>
            <span className="flex-1 truncate">{item.label}</span>

            {item.badge !== undefined && (
              <span
                className={cn(
                  "ml-auto flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[11px] font-semibold leading-none",
                  isDark
                    ? "bg-white/10 text-gray-300"
                    : "bg-gray-100 text-gray-600",
                )}
                style={
                  item.isActive
                    ? { backgroundColor: `rgba(${accentRgb}, 0.18)`, color: accentColor }
                    : undefined
                }
              >
                {item.badge}
              </span>
            )}

            {hasChildren && (
              <ChevronRight
                size={14}
                className={cn(
                  "shrink-0 transition-transform duration-200",
                  isDark ? "text-gray-500" : "text-gray-400",
                  expanded && "rotate-90",
                )}
              />
            )}
          </>
        )}
      </Tag>

      {/* Nested children */}
      {hasChildren && !isCollapsed && (
        <div
          className="overflow-hidden transition-[max-height] duration-200 ease-in-out"
          style={{ maxHeight: expanded ? contentHeight : 0 }}
        >
          <div ref={contentRef} className="pl-4 pt-0.5">
            {item.children!.map((child) => (
              <NavItem
                key={child.id}
                item={child}
                accentColor={accentColor}
                isCollapsed={isCollapsed}
                depth={depth + 1}
                variant={variant}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export function ModernSidebar({
  variant = "default",
  accentColor = "#7c6aff",
  position = "left",
  width = 260,
  collapsedWidth = 64,
  logo,
  brandName,
  headerAction,
  sections,
  footer,
  user,
  isCollapsed = false,
  onToggleCollapse,
  className,
}: ModernSidebarProps) {
  const currentWidth = isCollapsed ? collapsedWidth : width;
  const isDark = variant === "dark" || variant === "glass";

  return (
    <aside
      className={cn(
        "flex h-screen flex-col overflow-hidden transition-[width] duration-200 ease-in-out",
        position === "right" ? "border-l" : "border-r",
        variant === "default" && "border-gray-200/80 bg-gray-50/70",
        variant === "dark" && "border-white/5 bg-[#1a1a2e]",
        variant === "glass" &&
          "border-white/10 bg-white/5 backdrop-blur-xl",
        className,
      )}
      style={{ width: currentWidth, minWidth: currentWidth }}
    >
      {/* ── Header ── */}
      <div
        className={cn(
          "flex items-center gap-2.5 px-4 pt-4 pb-2 shrink-0",
          isCollapsed && "justify-center px-2",
        )}
      >
        {logo && <div className="shrink-0">{logo}</div>}
        {!isCollapsed && brandName && (
          <span
            className={cn(
              "truncate text-sm font-semibold tracking-tight",
              isDark ? "text-white" : "text-gray-900",
            )}
          >
            {brandName}
          </span>
        )}
        {!isCollapsed && headerAction && (
          <div className="ml-auto">{headerAction}</div>
        )}
      </div>

      {/* ── Sections ── */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden px-2.5 py-2 space-y-4">
        {sections.map((section, idx) => (
          <div key={section.label ?? idx}>
            {section.label && !isCollapsed && (
              <div
                className={cn(
                  "mb-1 px-2.5 text-[11px] font-semibold uppercase tracking-wider",
                  isDark ? "text-gray-500" : "text-gray-400",
                )}
              >
                {section.label}
              </div>
            )}
            {isCollapsed && idx > 0 && (
              <div
                className={cn(
                  "mx-auto mb-2 h-px w-5",
                  isDark ? "bg-white/10" : "bg-gray-200",
                )}
              />
            )}
            <div className="space-y-0.5">
              {section.items.map((item) => (
                <NavItem
                  key={item.id}
                  item={item}
                  accentColor={accentColor}
                  isCollapsed={isCollapsed}
                  variant={variant}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* ── Footer / User ── */}
      <div
        className={cn(
          "shrink-0",
          isDark ? "border-white/5" : "border-gray-200/80",
          (user || footer) && "border-t",
        )}
      >
        {footer && (
          <div className={cn("px-3 py-2", isCollapsed && "px-1.5")}>
            {footer}
          </div>
        )}

        {user && (
          <div
            className={cn(
              "flex items-center gap-2.5 px-3 py-3",
              isCollapsed && "justify-center px-1.5",
            )}
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="h-8 w-8 shrink-0 rounded-full object-cover"
              />
            ) : (
              <div
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold text-white"
                style={{ backgroundColor: accentColor }}
              >
                {user.name.charAt(0).toUpperCase()}
              </div>
            )}
            {!isCollapsed && (
              <div className="min-w-0 flex-1">
                <div
                  className={cn(
                    "truncate text-sm font-medium leading-tight",
                    isDark ? "text-white" : "text-gray-900",
                  )}
                >
                  {user.name}
                </div>
                {user.email && (
                  <div
                    className={cn(
                      "truncate text-xs",
                      isDark ? "text-gray-500" : "text-gray-400",
                    )}
                  >
                    {user.email}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* ── Collapse toggle ── */}
      {onToggleCollapse && (
        <button
          onClick={onToggleCollapse}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 flex h-6 w-6 items-center justify-center rounded-full border shadow-sm transition-colors z-10",
            isDark
              ? "border-white/10 bg-[#1a1a2e] text-gray-400 hover:text-white"
              : "border-gray-200 bg-white text-gray-400 hover:text-gray-600",
            position === "left" ? "-right-3" : "-left-3",
          )}
        >
          <ChevronRight
            size={14}
            className={cn(
              "transition-transform",
              position === "left"
                ? isCollapsed
                  ? ""
                  : "rotate-180"
                : isCollapsed
                  ? "rotate-180"
                  : "",
            )}
          />
        </button>
      )}
    </aside>
  );
}
