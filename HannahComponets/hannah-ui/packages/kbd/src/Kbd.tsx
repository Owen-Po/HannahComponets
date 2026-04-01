import { type FC, type HTMLAttributes } from "react";
import { cn } from "@hannah-ui/core";

export interface KbdProps extends HTMLAttributes<HTMLElement> {
  size?: "sm" | "md";
  variant?: "default" | "outline";
}

const sizeMap = {
  sm: "min-w-5 h-5 px-1 text-[11px]",
  md: "min-w-6 h-6 px-1.5 text-xs",
} as const;

export const Kbd: FC<KbdProps> = ({
  size = "md",
  variant = "default",
  className,
  children,
  ...props
}) => (
  <kbd
    className={cn(
      "inline-flex items-center justify-center rounded-md font-mono font-medium select-none shrink-0",
      sizeMap[size],
      variant === "default" && [
        "bg-gray-100 text-gray-700 border border-gray-300 border-b-2",
        "shadow-[0_1px_0_1px_rgba(0,0,0,0.04)_inset]",
        "dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:border-b-gray-700",
      ],
      variant === "outline" && [
        "text-gray-600 border border-gray-300",
        "dark:text-gray-400 dark:border-gray-600",
      ],
      className,
    )}
    {...props}
  >
    {children}
  </kbd>
);

Kbd.displayName = "Kbd";
