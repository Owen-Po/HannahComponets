import React, { useState } from "react";
import { cn } from "../../utils/cn";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface DockActionItem {
  type?: "item";
  id: string;
  icon: React.ElementType;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  badge?: number;
}

export interface DockSeparator {
  type: "separator";
}

export type DockItem = DockActionItem | DockSeparator;

export interface DockProps {
  items: DockItem[];
  position?: "bottom" | "top";
  accentColor?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Size map                                                           */
/* ------------------------------------------------------------------ */

const sizeMap = {
  sm: { icon: 18, button: "h-9 w-9", gap: "gap-1", padding: "px-2 py-1.5" },
  md: { icon: 22, button: "h-11 w-11", gap: "gap-1.5", padding: "px-3 py-2" },
  lg: { icon: 26, button: "h-13 w-13", gap: "gap-2", padding: "px-4 py-2.5" },
} as const;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function Dock({
  items,
  position = "bottom",
  accentColor = "#7c6aff",
  size = "md",
  className,
}: DockProps) {
  const s = sizeMap[size];

  return (
    <div
      className={cn(
        "fixed left-1/2 z-50 -translate-x-1/2",
        position === "bottom" ? "bottom-4" : "top-4",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center rounded-2xl border",
          "border-white/15 bg-black/50 shadow-2xl shadow-black/30",
          "backdrop-blur-xl backdrop-saturate-150",
          "dark:border-white/10 dark:bg-white/10",
          s.gap,
          s.padding
        )}
      >
        {items.map((item, idx) => {
          if (item.type === "separator") {
            return (
              <div
                key={`sep-${idx}`}
                className="mx-1 h-6 w-px shrink-0 bg-white/20"
              />
            );
          }

          return (
            <DockButton
              key={item.id}
              item={item}
              size={s}
              accentColor={accentColor}
              tooltipPosition={position === "bottom" ? "top" : "bottom"}
            />
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dock button                                                        */
/* ------------------------------------------------------------------ */

interface DockButtonProps {
  item: DockActionItem;
  size: (typeof sizeMap)[keyof typeof sizeMap];
  accentColor: string;
  tooltipPosition: "top" | "bottom";
}

function DockButton({ item, size, accentColor, tooltipPosition }: DockButtonProps) {
  const [hovered, setHovered] = useState(false);
  const Icon = item.icon;

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <div
        className={cn(
          "pointer-events-none absolute whitespace-nowrap rounded-lg px-2.5 py-1",
          "bg-gray-900 text-xs font-medium text-white shadow-lg",
          "dark:bg-white dark:text-gray-900",
          "transition-all duration-200",
          tooltipPosition === "top" ? "bottom-full mb-2.5" : "top-full mt-2.5",
          hovered
            ? "translate-y-0 scale-100 opacity-100"
            : tooltipPosition === "top"
              ? "translate-y-1 scale-95 opacity-0"
              : "-translate-y-1 scale-95 opacity-0"
        )}
      >
        {item.label}
        {/* Arrow */}
        <div
          className={cn(
            "absolute left-1/2 h-2 w-2 -translate-x-1/2 rotate-45",
            "bg-gray-900 dark:bg-white",
            tooltipPosition === "top" ? "top-full -mt-1" : "bottom-full -mb-1"
          )}
        />
      </div>

      {/* Button */}
      <button
        type="button"
        onClick={item.onClick}
        className={cn(
          "relative flex items-center justify-center rounded-xl",
          "text-white/80 transition-transform duration-200 ease-out",
          "hover:scale-110 hover:text-white",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
          size.button
        )}
        style={
          item.isActive
            ? { backgroundColor: accentColor + "30", color: accentColor }
            : undefined
        }
        aria-label={item.label}
      >
        <Icon size={size.icon} strokeWidth={1.8} />

        {/* Active dot */}
        {item.isActive && (
          <span
            className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
        )}

        {/* Badge */}
        {item.badge != null && item.badge > 0 && (
          <span
            className={cn(
              "absolute -right-1 -top-1 flex items-center justify-center",
              "min-w-[18px] rounded-full px-1 py-0.5",
              "text-[10px] font-bold leading-none text-white"
            )}
            style={{ backgroundColor: accentColor }}
          >
            {item.badge > 99 ? "99+" : item.badge}
          </span>
        )}
      </button>
    </div>
  );
}
