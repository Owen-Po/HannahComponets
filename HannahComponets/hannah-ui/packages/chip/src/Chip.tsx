import { type FC, type HTMLAttributes, type ReactNode } from "react";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@hannah-ui/core";

const chip = cva(
  [
    "inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200",
    "select-none",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-gray-200 text-gray-800 border border-gray-300 dark:bg-[#2a2a2a] dark:text-white dark:border-[#2a2a2a]",
        neon:
          "bg-[#CCFF00]/10 text-[#CCFF00] border border-[#CCFF00]/30",
        purple:
          "bg-[#1a0f2e]/60 text-[#CCFF00] border border-[#1a0f2e]",
        primary:
          "bg-blue-100 text-blue-700 border border-blue-200 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-800",
        success:
          "bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800",
        warning:
          "bg-amber-100 text-amber-700 border border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800",
        danger:
          "bg-red-100 text-red-700 border border-red-200 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

export interface ChipProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "children">,
    VariantProps<typeof chip> {
  children: ReactNode;
  onRemove?: () => void;
  removeAriaLabel?: string;
}

export const Chip: FC<ChipProps> = ({
  variant,
  size,
  children,
  onRemove,
  removeAriaLabel = "Eliminar",
  className,
  ...props
}) => (
  <span className={cn(chip({ variant, size, className }))} {...props}>
    {children}
    {onRemove && (
      <button
        onClick={onRemove}
        className="hover:bg-black/20 dark:hover:bg-white/10 rounded-full p-0.5 transition-colors duration-150"
        aria-label={removeAriaLabel}
      >
        <X className="w-3 h-3" />
      </button>
    )}
  </span>
);

Chip.displayName = "Chip";
