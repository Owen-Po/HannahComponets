import {
  type FC,
  type InputHTMLAttributes,
  type ReactNode,
  type ChangeEvent,
  forwardRef,
  useState,
} from "react";
import { Check } from "lucide-react";
import { cn } from "../../utils/cn";

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: ReactNode;
  description?: string;
  size?: "sm" | "md" | "lg";
}

export const Checkbox: FC<CheckboxProps> = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, size = "md", disabled, id, checked, defaultChecked, onChange, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = useState(!!defaultChecked);
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalChecked(e.target.checked);
      onChange?.(e);
    };

    const boxSize  = size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5";
    const iconSize = size === "sm" ? 10 : size === "lg" ? 14 : 12;
    const textSize = size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm";

    return (
      <label
        htmlFor={id}
        className={cn(
          "inline-flex items-start gap-2.5 cursor-pointer select-none",
          disabled && "pointer-events-none opacity-40",
          className,
        )}
      >
        <div className="relative flex items-center justify-center shrink-0 mt-0.5">
          <input
            ref={ref}
            id={id}
            type="checkbox"
            disabled={disabled}
            checked={isControlled ? checked : undefined}
            defaultChecked={!isControlled ? defaultChecked : undefined}
            onChange={handleChange}
            className={cn(
              "appearance-none border-2 rounded transition-all duration-150",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-700 focus-visible:ring-offset-1",
              isChecked
                ? "bg-blue-500 border-blue-500 dark:bg-blue-600 dark:border-blue-600"
                : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500",
              boxSize,
            )}
            {...props}
          />
          <Check
            size={iconSize}
            strokeWidth={3}
            className={cn(
              "absolute pointer-events-none text-white transition-opacity duration-150",
              isChecked ? "opacity-100" : "opacity-0",
            )}
          />
        </div>

        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <span className={cn("font-medium text-gray-800 dark:text-gray-200 leading-snug", textSize)}>
                {label}
              </span>
            )}
            {description && (
              <span className="text-xs text-gray-500 dark:text-gray-400 leading-snug">
                {description}
              </span>
            )}
          </div>
        )}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
