import React, { useEffect, useState } from "react";
import { Inbox } from "lucide-react";
import { cn } from "../../utils/cn";

export interface EmptyStateAction {
  label: string;
  onClick: () => void;
  icon?: React.ElementType;
}

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: EmptyStateAction;
  secondaryAction?: { label: string; onClick: () => void };
  accentColor?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "card" | "minimal";
  className?: string;
}

const sizeConfig = {
  sm: {
    wrapper: "gap-2 py-6 px-4",
    iconCircle: "h-10 w-10",
    iconSize: "h-5 w-5",
    title: "text-sm font-semibold",
    description: "text-xs",
    button: "text-xs px-3 py-1.5",
    secondary: "text-xs",
  },
  md: {
    wrapper: "gap-3 py-10 px-6",
    iconCircle: "h-14 w-14",
    iconSize: "h-7 w-7",
    title: "text-base font-semibold",
    description: "text-sm",
    button: "text-sm px-4 py-2",
    secondary: "text-sm",
  },
  lg: {
    wrapper: "gap-4 py-14 px-8",
    iconCircle: "h-18 w-18",
    iconSize: "h-9 w-9",
    title: "text-lg font-semibold",
    description: "text-base",
    button: "text-base px-5 py-2.5",
    secondary: "text-base",
  },
};

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  action,
  secondaryAction,
  accentColor = "#7c6aff",
  size = "md",
  variant = "default",
  className,
}) => {
  const [mounted, setMounted] = useState(false);
  const s = sizeConfig[size];

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const ActionIcon = action?.icon;

  const content = (
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center transition-all duration-500 ease-out",
        mounted ? "opacity-100 scale-100" : "opacity-0 scale-95",
        s.wrapper,
        className
      )}
    >
      {variant !== "minimal" && (
        <div
          className={cn(
            "flex items-center justify-center rounded-full shrink-0",
            s.iconCircle
          )}
          style={{ backgroundColor: `${accentColor}15` }}
        >
          {icon ?? (
            <Inbox className={s.iconSize} style={{ color: accentColor }} />
          )}
        </div>
      )}

      <div className="flex flex-col items-center gap-1">
        <h3
          className={cn(
            s.title,
            "text-gray-900 dark:text-gray-100"
          )}
        >
          {title}
        </h3>
        {description && (
          <p
            className={cn(
              s.description,
              "max-w-xs text-gray-500 dark:text-gray-400"
            )}
          >
            {description}
          </p>
        )}
      </div>

      {(action || secondaryAction) && (
        <div className="flex flex-col items-center gap-2 mt-1">
          {action && (
            <button
              type="button"
              onClick={action.onClick}
              className={cn(
                s.button,
                "inline-flex items-center gap-1.5 rounded-lg font-medium text-white shadow-sm transition-colors hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer"
              )}
              style={{
                backgroundColor: accentColor,
                outlineColor: accentColor,
              }}
            >
              {ActionIcon && <ActionIcon className="h-4 w-4" />}
              {action.label}
            </button>
          )}
          {secondaryAction && (
            <button
              type="button"
              onClick={secondaryAction.onClick}
              className={cn(
                s.secondary,
                "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 underline underline-offset-2 transition-colors cursor-pointer"
              )}
            >
              {secondaryAction.label}
            </button>
          )}
        </div>
      )}
    </div>
  );

  if (variant === "card") {
    return (
      <div
        className={cn(
          "rounded-xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900",
          className
        )}
      >
        {content}
      </div>
    );
  }

  return content;
};
