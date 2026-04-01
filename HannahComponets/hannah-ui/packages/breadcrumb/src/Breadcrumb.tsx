import { ChevronRight, MoreHorizontal } from "lucide-react";
import { cn } from "@hannah-ui/core";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  accentColor?: string;
  maxItems?: number;
  className?: string;
}

/* ─────────────────────────────────────────
   Main component
───────────────────────────────────────── */
export const Breadcrumb = ({
  items,
  separator,
  accentColor = "#7c6aff",
  maxItems,
  className,
}: BreadcrumbProps) => {
  const visibleItems = (() => {
    if (!maxItems || items.length <= maxItems) return items;
    const head = items.slice(0, 1);
    const tail = items.slice(-(maxItems - 2));
    return [...head, { label: "…", _collapsed: true } as BreadcrumbItem & { _collapsed?: boolean }, ...tail];
  })();

  const sep = separator ?? <ChevronRight size={14} className="shrink-0 text-gray-300 dark:text-gray-700" />;

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center gap-1.5 text-sm", className)}>
      {visibleItems.map((item, i) => {
        const isLast = i === visibleItems.length - 1;
        const isCollapsed = (item as BreadcrumbItem & { _collapsed?: boolean })._collapsed;

        return (
          <div key={`${item.label}-${i}`} className="flex items-center gap-1.5">
            {i > 0 && <span className="flex items-center">{sep}</span>}

            {isCollapsed ? (
              <span className="flex items-center text-gray-400 dark:text-gray-600">
                <MoreHorizontal size={16} />
              </span>
            ) : isLast ? (
              <span className="flex items-center gap-1.5 font-medium text-gray-900 dark:text-white">
                {item.icon && <span className="flex items-center">{item.icon}</span>}
                {item.label}
              </span>
            ) : (
              <a
                href={item.href ?? "#"}
                onClick={item.onClick}
                className="flex items-center gap-1.5 text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-500 dark:hover:text-white"
                style={{ ["--accent" as string]: accentColor }}
                onMouseEnter={(e) => (e.currentTarget.style.color = accentColor)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "")}
              >
                {item.icon && <span className="flex items-center">{item.icon}</span>}
                {item.label}
              </a>
            )}
          </div>
        );
      })}
    </nav>
  );
};
