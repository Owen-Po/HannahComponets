import { type FC, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const badge = cva(
  [
    "inline-flex items-center gap-1 font-semibold whitespace-nowrap select-none",
    "transition-all duration-150",
  ],
  {
    variants: {
      variant: {
        default:       "bg-slate-100 text-slate-700 ring-1 ring-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:ring-slate-700",
        primary:       "bg-blue-100 text-blue-700 ring-1 ring-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:ring-blue-800",
        success:       "bg-emerald-100 text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:ring-emerald-800",
        warning:       "bg-amber-100 text-amber-700 ring-1 ring-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:ring-amber-800",
        danger:        "bg-red-100 text-red-700 ring-1 ring-red-200 dark:bg-red-950/60 dark:text-red-300 dark:ring-red-800",
        info:          "bg-sky-100 text-sky-700 ring-1 ring-sky-200 dark:bg-sky-950/60 dark:text-sky-300 dark:ring-sky-800",
        purple:        "bg-purple-100 text-purple-700 ring-1 ring-purple-200 dark:bg-purple-950/60 dark:text-purple-300 dark:ring-purple-800",
        solid_default: "bg-slate-700 text-white dark:bg-slate-600",
        solid_primary: "bg-blue-500 text-white dark:bg-blue-600",
        solid_success: "bg-emerald-500 text-white dark:bg-emerald-600",
        solid_warning: "bg-amber-400 text-amber-950 dark:bg-amber-500",
        solid_danger:  "bg-red-600 text-white dark:bg-red-700",
      },
      size: {
        sm: "px-2 py-0.5 text-xs rounded-md",
        md: "px-2.5 py-1 text-xs rounded-lg",
        lg: "px-3 py-1.5 text-sm rounded-xl",
      },
      dot: { true: "" },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface BadgeProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badge> {}

const dotColor: Record<string, string> = {
  default:       "bg-slate-500 dark:bg-slate-400",
  primary:       "bg-blue-500 dark:bg-blue-400",
  success:       "bg-emerald-500 dark:bg-emerald-400",
  warning:       "bg-amber-500 dark:bg-amber-400",
  danger:        "bg-red-500 dark:bg-red-400",
  info:          "bg-sky-500 dark:bg-sky-400",
  purple:        "bg-purple-500 dark:bg-purple-400",
  solid_default: "bg-white/70",
  solid_primary: "bg-white/70",
  solid_success: "bg-white/70",
  solid_warning: "bg-amber-900/50",
  solid_danger:  "bg-white/70",
};

export const Badge: FC<BadgeProps> = ({
  className,
  variant = "default",
  size,
  dot,
  children,
  ...props
}) => (
  <span className={cn(badge({ variant, size, dot, className }))} {...props}>
    {dot && (
      <span
        className={cn(
          "inline-block rounded-full shrink-0",
          size === "lg" ? "w-2 h-2" : "w-1.5 h-1.5",
          dotColor[variant ?? "default"],
        )}
      />
    )}
    {children}
  </span>
);

Badge.displayName = "Badge";
