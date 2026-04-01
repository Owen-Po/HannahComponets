import type { FC, HTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";
import { AlertCircle } from "lucide-react";
import { cn } from "@hannah-ui/core";

export interface FormGroupProps extends HTMLAttributes<HTMLDivElement> {
  /** Input label text */
  label?: string;
  /** Links label to the input via htmlFor */
  htmlFor?: LabelHTMLAttributes<HTMLLabelElement>["htmlFor"];
  /** Error message — shown below the input in red */
  error?: string;
  /** Helper text — shown below the input in gray (hidden when error is set) */
  hint?: string;
  /** Marks field as required with a visual asterisk */
  required?: boolean;
  /** Slot for the input / select / textarea */
  children: ReactNode;
}

export const FormGroup: FC<FormGroupProps> = ({
  label,
  htmlFor,
  error,
  hint,
  required,
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col gap-1.5", className)} {...props}>
      {label && (
        <label
          htmlFor={htmlFor}
          className="text-sm font-medium text-gray-700 leading-none"
        >
          {label}
          {required && (
            <span className="ml-1 text-red-500" aria-hidden>
              *
            </span>
          )}
        </label>
      )}

      {children}

      {error ? (
        <p className="flex items-center gap-1.5 text-xs text-red-500">
          <AlertCircle size={12} className="shrink-0" aria-hidden />
          {error}
        </p>
      ) : hint ? (
        <p className="text-xs text-gray-400">{hint}</p>
      ) : null}
    </div>
  );
};
