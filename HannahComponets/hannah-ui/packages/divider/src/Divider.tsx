import { type FC, type HTMLAttributes } from "react";
import { cn } from "@hannah-ui/core";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  variant?: "solid" | "dashed" | "dotted";
  color?: string;
  spacing?: "sm" | "md" | "lg";
}

const spacingMap = {
  sm: "my-2",
  md: "my-4",
  lg: "my-8",
} as const;

const verticalSpacingMap = {
  sm: "mx-2",
  md: "mx-4",
  lg: "mx-8",
} as const;

const borderStyleMap = {
  solid: "border-solid",
  dashed: "border-dashed",
  dotted: "border-dotted",
} as const;

export const Divider: FC<DividerProps> = ({
  orientation = "horizontal",
  variant = "solid",
  color,
  spacing = "md",
  className,
  children,
  ...props
}) => {
  const isVertical = orientation === "vertical";
  const lineColor = color ?? "border-gray-200 dark:border-gray-700";
  const lineStyle = borderStyleMap[variant];

  // Vertical divider
  if (isVertical) {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          "inline-flex self-stretch",
          verticalSpacingMap[spacing],
          className,
        )}
        {...props}
      >
        <div
          className={cn(
            "border-l h-full",
            lineStyle,
            lineColor,
          )}
        />
      </div>
    );
  }

  // Horizontal without children — simple line
  if (!children) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={cn(
          "border-t w-full",
          lineStyle,
          lineColor,
          spacingMap[spacing],
          className,
        )}
        {...props}
      />
    );
  }

  // Horizontal with children — line / content / line
  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn(
        "flex items-center w-full",
        spacingMap[spacing],
        className,
      )}
      {...props}
    >
      <div className={cn("flex-1 border-t", lineStyle, lineColor)} />
      <span className="px-3 text-sm text-gray-500 dark:text-gray-400 shrink-0 select-none">
        {children}
      </span>
      <div className={cn("flex-1 border-t", lineStyle, lineColor)} />
    </div>
  );
};

Divider.displayName = "Divider";
