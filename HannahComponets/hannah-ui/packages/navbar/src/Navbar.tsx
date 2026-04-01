"use client";

import React, { useState, useEffect, useRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Menu, X } from "lucide-react";
import { cn } from "@hannah-ui/core";

/* ─── Types ────────────────────────────────────────── */

export interface NavbarLink {
  label: string;
  href: string;
  icon?: React.ElementType;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export interface NavbarProps extends VariantProps<typeof navbarVariants> {
  /** Logo element (icon, image, etc.) */
  logo?: React.ReactNode;
  /** Brand name displayed next to logo */
  brandName?: string;
  /** Navigation links rendered in the center */
  links?: NavbarLink[];
  /** Actions area (buttons, avatars, etc.) rendered on the right */
  actions?: React.ReactNode;
  /** Navbar style variant */
  variant?: "floating" | "fixed" | "bordered";
  /** Whether the navbar sticks to the top on scroll */
  sticky?: boolean;
  /** Custom accent color for active links (any valid CSS color) */
  accentColor?: string;
  /** Additional class names */
  className?: string;
}

/* ─── Variants ─────────────────────────────────────── */

const navbarVariants = cva(
  [
    "w-full z-50 transition-all duration-300",
    "backdrop-blur-xl bg-white/70 dark:bg-zinc-900/70",
    "supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-zinc-900/60",
  ],
  {
    variants: {
      variant: {
        floating: [
          "mx-auto max-w-6xl mt-4 rounded-2xl",
          "shadow-lg shadow-black/[0.04] dark:shadow-black/20",
          "border border-zinc-200/60 dark:border-zinc-700/50",
        ],
        fixed: [
          "shadow-sm shadow-black/[0.03] dark:shadow-black/20",
          "border-b-0",
        ],
        bordered: [
          "border-b border-zinc-200 dark:border-zinc-700/60",
        ],
      },
    },
    defaultVariants: {
      variant: "floating",
    },
  }
);

/* ─── Component ────────────────────────────────────── */

export const Navbar: React.FC<NavbarProps> = ({
  logo,
  brandName,
  links = [],
  actions,
  variant = "floating",
  sticky = true,
  accentColor,
  className,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (mobileRef.current && !mobileRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [mobileOpen]);

  const activeLinkStyle = accentColor
    ? { color: accentColor }
    : undefined;

  const activeLinkClass = accentColor
    ? ""
    : "text-zinc-900 dark:text-white";

  return (
    <nav
      ref={mobileRef}
      className={cn(
        navbarVariants({ variant }),
        sticky && (variant === "floating" ? "sticky top-0" : "sticky top-0"),
        className
      )}
    >
      <div className="flex h-14 items-center justify-between px-5">
        {/* ── Left: Logo / Brand ── */}
        <div className="flex items-center gap-2.5 shrink-0">
          {logo && <span className="flex items-center">{logo}</span>}
          {brandName && (
            <span className="text-[15px] font-semibold tracking-tight text-zinc-900 dark:text-white">
              {brandName}
            </span>
          )}
        </div>

        {/* ── Center: Desktop Links ── */}
        {links.length > 0 && (
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={link.onClick}
                  style={link.isActive ? activeLinkStyle : undefined}
                  className={cn(
                    "relative flex items-center gap-1.5 px-3 py-1.5 text-[13.5px] font-medium rounded-lg",
                    "transition-all duration-200",
                    "text-zinc-500 dark:text-zinc-400",
                    "hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60",
                    link.isActive && [
                      activeLinkClass,
                      "bg-zinc-100/80 dark:bg-zinc-800/50",
                    ]
                  )}
                >
                  {Icon && <Icon className="size-3.5" />}
                  {link.label}
                  {link.isActive && (
                    <span
                      className="absolute -bottom-[3px] left-1/2 -translate-x-1/2 h-[2px] w-4 rounded-full"
                      style={
                        accentColor
                          ? { backgroundColor: accentColor }
                          : undefined
                      }
                      aria-hidden
                    />
                  )}
                </a>
              );
            })}
          </div>
        )}

        {/* ── Right: Actions + Mobile Toggle ── */}
        <div className="flex items-center gap-2 shrink-0">
          {actions && (
            <div className="hidden md:flex items-center gap-2">{actions}</div>
          )}
          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              "md:hidden flex items-center justify-center size-8 rounded-lg",
              "text-zinc-500 dark:text-zinc-400",
              "hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-200"
            )}
          >
            <div className="relative size-4">
              <Menu
                className={cn(
                  "absolute inset-0 size-4 transition-all duration-300",
                  mobileOpen ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                )}
              />
              <X
                className={cn(
                  "absolute inset-0 size-4 transition-all duration-300",
                  mobileOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
                )}
              />
            </div>
          </button>
        </div>
      </div>

      {/* ── Mobile Panel ── */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 pb-4 pt-1 space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  link.onClick?.(e);
                  setMobileOpen(false);
                }}
                style={link.isActive ? activeLinkStyle : undefined}
                className={cn(
                  "flex items-center gap-2.5 px-3 py-2.5 text-[14px] font-medium rounded-xl",
                  "transition-colors duration-200",
                  "text-zinc-600 dark:text-zinc-400",
                  "hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100/80 dark:hover:bg-zinc-800/60",
                  link.isActive && [
                    activeLinkClass,
                    "bg-zinc-100/80 dark:bg-zinc-800/50",
                  ]
                )}
              >
                {Icon && <Icon className="size-4" />}
                {link.label}
              </a>
            );
          })}
          {actions && (
            <div className="flex items-center gap-2 pt-2 border-t border-zinc-200/60 dark:border-zinc-700/50">
              {actions}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
