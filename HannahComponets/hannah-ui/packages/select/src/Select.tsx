import { type FC, type SelectHTMLAttributes, forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@hannah-ui/core";

const select = cva(
  [
    "w-full appearance-none font-medium border outline-none cursor-pointer",
    "bg-white dark:bg-gray-800",
    "transition-all duration-150 ease-out",
    "disabled:pointer-events-none disabled:opacity-40 disabled:bg-gray-50 dark:disabled:bg-gray-700",
    "focus-visible:ring-2 focus-visible:ring-offset-1",
  ],
  {
    variants: {
      size: {
        sm: "h-8 pl-3 pr-8 text-xs rounded-lg",
        md: "h-10 pl-4 pr-10 text-sm rounded-xl",
        lg: "h-12 pl-5 pr-12 text-base rounded-xl",
      },
      status: {
        default: [
          "border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100",
          "hover:border-gray-400 dark:hover:border-gray-500",
          "focus-visible:border-blue-500 focus-visible:ring-blue-200 dark:focus-visible:ring-blue-800",
        ],
        error: [
          "border-red-400 dark:border-red-600 text-gray-900 dark:text-gray-100 bg-red-50/40 dark:bg-red-950/20",
          "focus-visible:border-red-500 focus-visible:ring-red-200 dark:focus-visible:ring-red-900",
        ],
        success: [
          "border-emerald-400 dark:border-emerald-600 text-gray-900 dark:text-gray-100",
          "focus-visible:border-emerald-500 focus-visible:ring-emerald-200 dark:focus-visible:ring-emerald-900",
        ],
      },
    },
    defaultVariants: {
      size: "md",
      status: "default",
    },
  },
);

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof select> {
  options?: SelectOption[];
  placeholder?: string;
}

export const Select: FC<SelectProps> = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, size = "md", status = "default", options, placeholder, children, ...props }, ref) => {
    const iconSize = size === "sm" ? "w-3.5 h-3.5 right-2" : size === "lg" ? "w-5 h-5 right-3.5" : "w-4 h-4 right-3";

    return (
      <div className="relative inline-flex w-full items-center">
        <select
          ref={ref}
          className={cn(select({ size, status, className }))}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>{placeholder}</option>
          )}
          {options
            ? options.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                  {opt.label}
                </option>
              ))
            : children}
        </select>
        <ChevronDown
          className={cn(
            "absolute pointer-events-none text-gray-400 dark:text-gray-500 shrink-0",
            iconSize,
          )}
        />
      </div>
    );
  },
);

Select.displayName = "Select";
