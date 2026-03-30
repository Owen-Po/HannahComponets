import React from "react";
import { cn } from "../../utils/cn";

export interface TooltipProps {
  children: React.ReactElement;
  content: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  variant?: "dark" | "light";
  delay?: number;
  className?: string;
  arrow?: boolean;
  maxWidth?: number;
}

const positionClasses: Record<string, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const arrowClasses: Record<string, string> = {
  top: "top-full left-1/2 -translate-x-1/2 border-t-[current] border-x-transparent border-b-transparent",
  bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-[current] border-x-transparent border-t-transparent",
  left: "left-full top-1/2 -translate-y-1/2 border-l-[current] border-y-transparent border-r-transparent",
  right: "right-full top-1/2 -translate-y-1/2 border-r-[current] border-y-transparent border-l-transparent",
};

const arrowColorMap = {
  top: { dark: "border-t-gray-900 dark:border-t-gray-800", light: "border-t-white" },
  bottom: { dark: "border-b-gray-900 dark:border-b-gray-800", light: "border-b-white" },
  left: { dark: "border-l-gray-900 dark:border-l-gray-800", light: "border-l-white" },
  right: { dark: "border-r-gray-900 dark:border-r-gray-800", light: "border-r-white" },
};

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = "top",
  variant = "dark",
  delay = 0,
  className,
  arrow = true,
  maxWidth = 200,
}) => {
  const variantClasses =
    variant === "dark"
      ? "bg-gray-900 text-white dark:bg-gray-800"
      : "bg-white text-gray-900 border border-gray-200 dark:bg-gray-100 dark:text-gray-900";

  const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div className="relative inline-flex group">
      {children}
      <div
        role="tooltip"
        style={{ maxWidth, ...delayStyle }}
        className={cn(
          "absolute z-50 px-2.5 py-1.5 text-xs font-medium rounded-md whitespace-normal pointer-events-none",
          "opacity-0 invisible scale-95",
          "transition-all duration-150 ease-in-out",
          "group-hover:opacity-100 group-hover:visible group-hover:scale-100",
          positionClasses[position],
          variantClasses,
          className
        )}
      >
        {content}
        {arrow && (
          <span
            className={cn(
              "absolute w-0 h-0 border-4",
              arrowClasses[position],
              arrowColorMap[position][variant]
            )}
          />
        )}
      </div>
    </div>
  );
};
