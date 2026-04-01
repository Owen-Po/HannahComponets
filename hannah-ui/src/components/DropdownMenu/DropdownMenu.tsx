import React, { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "../../utils/cn";

// ── Types ────────────────────────────────────────────────────────────────────

export type DropdownItem =
  | {
      type?: "item";
      label: string;
      icon?: React.ElementType;
      shortcut?: string;
      onClick?: () => void;
      disabled?: boolean;
      danger?: boolean;
    }
  | { type: "separator" }
  | { type: "label"; text: string };

export interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  align?: "start" | "center" | "end";
  side?: "bottom" | "top";
  width?: number | "trigger";
  className?: string;
}

// ── Component ────────────────────────────────────────────────────────────────

export function DropdownMenu({
  trigger,
  items,
  align = "end",
  side = "bottom",
  width = 220,
  className,
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [triggerWidth, setTriggerWidth] = useState<number>(0);

  // Measure trigger width when "trigger" mode is used
  useEffect(() => {
    if (width === "trigger" && triggerRef.current) {
      setTriggerWidth(triggerRef.current.offsetWidth);
    }
  }, [width, open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  const toggle = useCallback(() => setOpen((v) => !v), []);

  const resolvedWidth = width === "trigger" ? triggerWidth : width;

  return (
    <div ref={containerRef} className="relative inline-flex">
      {/* Trigger */}
      <div
        ref={triggerRef}
        onClick={toggle}
        className="cursor-pointer"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
      >
        {trigger}
      </div>

      {/* Menu */}
      {open && (
        <div
          role="menu"
          className={cn(
            // positioning
            "absolute z-50",
            side === "bottom" ? "top-full mt-1.5" : "bottom-full mb-1.5",
            align === "start" && "left-0",
            align === "center" && "left-1/2 -translate-x-1/2",
            align === "end" && "right-0",
            // appearance
            "rounded-xl border border-gray-200 bg-white p-1 shadow-lg",
            "dark:border-gray-700 dark:bg-gray-900",
            // animation
            "animate-in fade-in zoom-in-95",
            side === "bottom" ? "origin-top" : "origin-bottom",
            // overflow
            "max-h-80 overflow-y-auto",
            className,
          )}
          style={{ width: resolvedWidth }}
        >
          {items.map((item, i) => {
            // Separator
            if (item.type === "separator") {
              return (
                <div
                  key={`sep-${i}`}
                  className="my-1 h-px bg-gray-200 dark:bg-gray-700"
                  role="separator"
                />
              );
            }

            // Label
            if (item.type === "label") {
              return (
                <div
                  key={`lbl-${i}`}
                  className="px-2.5 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500"
                >
                  {item.text}
                </div>
              );
            }

            // Regular item
            const Icon = item.icon;
            const disabled = item.disabled ?? false;
            const danger = item.danger ?? false;

            return (
              <button
                key={`item-${i}`}
                role="menuitem"
                disabled={disabled}
                onClick={() => {
                  if (!disabled && item.onClick) {
                    item.onClick();
                  }
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[13px] outline-none transition-colors",
                  // default
                  "text-gray-700 dark:text-gray-200",
                  // hover
                  !disabled &&
                    !danger &&
                    "hover:bg-gray-100 dark:hover:bg-gray-800",
                  // danger
                  !disabled &&
                    danger &&
                    "hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-950 dark:hover:text-red-400",
                  // disabled
                  disabled &&
                    "cursor-not-allowed text-gray-300 dark:text-gray-600",
                )}
              >
                {Icon && (
                  <Icon
                    className={cn(
                      "h-4 w-4 shrink-0",
                      disabled
                        ? "text-gray-300 dark:text-gray-600"
                        : "text-gray-400 dark:text-gray-500",
                    )}
                  />
                )}
                <span className="flex-1 truncate">{item.label}</span>
                {item.shortcut && (
                  <span className="ml-auto shrink-0 text-[11px] tracking-wide text-gray-400 dark:text-gray-500">
                    {item.shortcut}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
