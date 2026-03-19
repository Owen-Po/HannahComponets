import { type FC, type TextareaHTMLAttributes, forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const textarea = cva(
  [
    "w-full font-medium border outline-none resize-y",
    "bg-white dark:bg-gray-800",
    "transition-all duration-150 ease-out",
    "placeholder:text-gray-400 dark:placeholder:text-gray-500 placeholder:font-normal",
    "disabled:pointer-events-none disabled:opacity-40 disabled:bg-gray-50 dark:disabled:bg-gray-700",
    "focus-visible:ring-2 focus-visible:ring-offset-1",
  ],
  {
    variants: {
      size: {
        sm: "px-3 py-2 text-xs rounded-lg",
        md: "px-4 py-2.5 text-sm rounded-xl",
        lg: "px-5 py-3 text-base rounded-xl",
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
      },
    },
    defaultVariants: {
      size: "md",
      status: "default",
    },
  },
);

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textarea> {}

export const Textarea: FC<TextareaProps> = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, size, status, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(textarea({ size, status, className }))}
      {...props}
    />
  ),
);

Textarea.displayName = "Textarea";
