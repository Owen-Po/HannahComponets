import {
  type FC,
  type InputHTMLAttributes,
  type ReactNode,
  type ChangeEvent,
  forwardRef,
  useState,
} from "react";
import { Check } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const checkbox = cva(
  [
    "appearance-none border-2 rounded transition-all duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-700 focus-visible:ring-offset-1",
  ],
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
      },
      checked: {
        true: "bg-blue-500 border-blue-500 dark:bg-blue-600 dark:border-blue-600",
        false: "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500",
      },
    },
    defaultVariants: {
      size: "md",
      checked: false,
    },
  },
);

const checkboxLabel = cva("font-medium text-gray-800 dark:text-gray-200 leading-snug", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: { size: "md" },
});

const checkIconSize: Record<string, number> = { sm: 10, md: 12, lg: 14 };

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    Omit<VariantProps<typeof checkbox>, "checked"> {
  label?: ReactNode;
  description?: string;
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
            aria-checked={isChecked}
            className={cn(checkbox({ size, checked: !!isChecked }))}
            {...props}
          />
          <Check
            size={checkIconSize[size ?? "md"]}
            strokeWidth={3}
            className={cn(
              "absolute pointer-events-none text-white transition-opacity duration-150",
              isChecked ? "opacity-100" : "opacity-0",
            )}
            aria-hidden="true"
          />
        </div>

        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <span className={cn(checkboxLabel({ size }))}>{label}</span>
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
