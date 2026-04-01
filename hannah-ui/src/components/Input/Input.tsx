import {
  type FC,
  type InputHTMLAttributes,
  type ReactNode,
  forwardRef,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const input = cva(
  [
    "w-full font-medium border outline-none",
    "bg-white dark:bg-gray-800",
    "transition-all duration-150 ease-out",
    "placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:font-normal",
    "disabled:pointer-events-none disabled:opacity-40 disabled:bg-gray-50 dark:disabled:bg-gray-700",
    "focus-visible:ring-2 focus-visible:ring-offset-1",
  ],
  {
    variants: {
      size: {
        sm: "h-8 px-3 text-xs rounded-lg",
        md: "h-10 px-4 text-sm rounded-xl",
        lg: "h-12 px-5 text-base rounded-xl",
      },
      status: {
        default: [
          "border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100",
          "hover:border-gray-400 dark:hover:border-gray-500",
          "focus-visible:border-blue-500 focus-visible:ring-blue-200 dark:focus-visible:ring-blue-800",
        ],
        error: [
          "border-red-400 dark:border-red-600 text-gray-900 dark:text-gray-100 bg-red-50/40 dark:bg-red-950/20",
          "hover:border-red-500",
          "focus-visible:border-red-500 focus-visible:ring-red-200 dark:focus-visible:ring-red-900",
        ],
        success: [
          "border-emerald-400 dark:border-emerald-600 text-gray-900 dark:text-gray-100",
          "hover:border-emerald-500",
          "focus-visible:border-emerald-500 focus-visible:ring-emerald-200 dark:focus-visible:ring-emerald-900",
        ],
        warning: [
          "border-amber-400 dark:border-amber-600 text-gray-900 dark:text-gray-100 bg-amber-50/40 dark:bg-amber-950/20",
          "hover:border-amber-500",
          "focus-visible:border-amber-500 focus-visible:ring-amber-200 dark:focus-visible:ring-amber-900",
        ],
      },
      hasLeft: { true: "" },
      hasRight: { true: "" },
    },
    compoundVariants: [
      { hasLeft: true, size: "sm", className: "pl-8" },
      { hasLeft: true, size: "md", className: "pl-10" },
      { hasLeft: true, size: "lg", className: "pl-12" },
      { hasRight: true, size: "sm", className: "pr-8" },
      { hasRight: true, size: "md", className: "pr-10" },
      { hasRight: true, size: "lg", className: "pr-12" },
    ],
    defaultVariants: {
      size: "md",
      status: "default",
    },
  },
);

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof input> {
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, size = "md", status = "default", leftElement, rightElement, ...props },
    ref,
  ) => {
    const iconSize = size === "sm" ? "w-4 h-4" : size === "lg" ? "w-5 h-5" : "w-4 h-4";
    const iconOffset = size === "sm" ? "left-2.5" : size === "lg" ? "left-3.5" : "left-3";
    const iconOffsetR = size === "sm" ? "right-2.5" : size === "lg" ? "right-3.5" : "right-3";

    return (
      <div className="relative inline-flex w-full items-center">
        {leftElement && (
          <span
            className={cn(
              "absolute text-gray-400 dark:text-gray-500 pointer-events-none inline-flex shrink-0",
              iconOffset,
              iconSize,
            )}
          >
            {leftElement}
          </span>
        )}
        <input
          ref={ref}
          className={cn(
            input({ size, status, hasLeft: !!leftElement, hasRight: !!rightElement, className }),
          )}
          {...props}
        />
        {rightElement && (
          <span
            className={cn(
              "absolute text-gray-400 dark:text-gray-500 inline-flex shrink-0",
              iconOffsetR,
              iconSize,
            )}
          >
            {rightElement}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
