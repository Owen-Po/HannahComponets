import {
  type ButtonHTMLAttributes,
  type FC,
  type ReactNode,
  forwardRef,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "../../utils/cn";

/* ─────────────────────────────────────────
   CVA definition
───────────────────────────────────────── */
const button = cva(
  [
    "relative inline-flex items-center justify-center gap-2",
    "font-bold tracking-wide whitespace-nowrap select-none",
    "transition-all duration-150 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
    // shine overlay
    "overflow-hidden",
    "before:absolute before:inset-0 before:translate-x-[-110%] before:skew-x-[-20deg]",
    "before:bg-white/20 before:transition-transform before:duration-500",
    "hover:before:translate-x-[110%]",
    // press effect
    "active:scale-[0.96]",
  ],
  {
    variants: {
      variant: {
        default: [
          "bg-slate-700 text-white shadow-[0_4px_0_0_#334155]",
          "hover:bg-slate-600 hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#334155]",
          "active:translate-y-0.5 active:shadow-[0_2px_0_0_#334155]",
          "focus-visible:ring-slate-500",
        ],
        primary: [
          "bg-blue-500 text-white shadow-[0_4px_0_0_#1d4ed8]",
          "hover:bg-blue-400 hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#1d4ed8]",
          "active:translate-y-0.5 active:shadow-[0_2px_0_0_#1d4ed8]",
          "focus-visible:ring-blue-500",
        ],
        success: [
          "bg-emerald-500 text-white shadow-[0_4px_0_0_#065f46]",
          "hover:bg-emerald-400 hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#065f46]",
          "active:translate-y-0.5 active:shadow-[0_2px_0_0_#065f46]",
          "focus-visible:ring-emerald-500",
        ],
        warning: [
          "bg-amber-400 text-amber-950 shadow-[0_4px_0_0_#92400e]",
          "hover:bg-amber-300 hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#92400e]",
          "active:translate-y-0.5 active:shadow-[0_2px_0_0_#92400e]",
          "focus-visible:ring-amber-400",
        ],
        danger: [
          "bg-red-600 text-white shadow-[0_4px_0_0_#7f1d1d]",
          "hover:bg-red-500 hover:-translate-y-0.5 hover:shadow-[0_6px_0_0_#7f1d1d]",
          "active:translate-y-0.5 active:shadow-[0_2px_0_0_#7f1d1d]",
          "focus-visible:ring-red-500",
        ],
        ghost: [
          "bg-transparent text-slate-700 shadow-none border border-slate-300",
          "hover:bg-slate-100 hover:-translate-y-0.5 hover:border-slate-400",
          "active:translate-y-0.5",
          "focus-visible:ring-slate-400",
        ],
      },
      outline: {
        true: "bg-transparent shadow-none border-2",
      },
      size: {
        sm: "h-8 px-3 text-xs rounded-lg",
        md: "h-10 px-5 text-sm rounded-xl",
        lg: "h-12 px-7 text-base rounded-xl",
        xl: "h-14 px-9 text-lg rounded-2xl",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-xl",
        full: "rounded-full",
      },
      iconOnly: {
        true: "px-0 aspect-square",
      },
    },
    compoundVariants: [
      // outline colors
      {
        variant: "default",
        outline: true,
        className:
          "border-slate-600 text-slate-700 hover:bg-slate-700 hover:text-white",
      },
      {
        variant: "primary",
        outline: true,
        className:
          "border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white",
      },
      {
        variant: "success",
        outline: true,
        className:
          "border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white",
      },
      {
        variant: "warning",
        outline: true,
        className:
          "border-amber-400 text-amber-600 hover:bg-amber-400 hover:text-amber-950",
      },
      {
        variant: "danger",
        outline: true,
        className:
          "border-red-600 text-red-600 hover:bg-red-600 hover:text-white",
      },
      // icon only + size
      { iconOnly: true, size: "sm", className: "h-8 w-8" },
      { iconOnly: true, size: "md", className: "h-10 w-10" },
      { iconOnly: true, size: "lg", className: "h-12 w-12" },
      { iconOnly: true, size: "xl", className: "h-14 w-14" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
  /** Icon rendered before the label */
  leftIcon?: ReactNode;
  /** Icon rendered after the label */
  rightIcon?: ReactNode;
  /** Shows a spinner and hides icons, keeps label visible */
  loading?: boolean;
  /** Loading text — replaces children while loading */
  loadingText?: string;
  /** Renders icon-only layout (square aspect ratio) */
  iconOnly?: boolean;
}

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */
export const Button: FC<ButtonProps> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      children,
      className,
      variant,
      size,
      rounded,
      outline,
      iconOnly,
      leftIcon,
      rightIcon,
      loading = false,
      loadingText,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        aria-busy={loading}
        className={cn(
          button({ variant, size, rounded, outline, iconOnly, className }),
        )}
        {...props}
      >
        {/* Left icon / spinner */}
        {loading ? (
          <Loader2 size={16} className="animate-spin shrink-0" aria-hidden />
        ) : (
          leftIcon && (
            <span className="shrink-0 inline-flex" aria-hidden>
              {leftIcon}
            </span>
          )
        )}

        {/* Label */}
        {!iconOnly && (
          <span>{loading && loadingText ? loadingText : children}</span>
        )}

        {/* Right icon — hidden while loading */}
        {!loading && rightIcon && (
          <span className="shrink-0 inline-flex" aria-hidden>
            {rightIcon}
          </span>
        )}
      </button>
    );
  },
);

Button.displayName = "Button";
