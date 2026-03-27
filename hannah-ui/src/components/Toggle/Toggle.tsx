import { type FC, useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const toggle = cva(
  [
    "rounded-full p-0.5 transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-[#CCFF00] focus:ring-offset-2 focus:ring-offset-[#0a0a0a]",
  ],
  {
    variants: {
      size: {
        sm: "w-10 h-5",
        md: "w-12 h-6",
        lg: "w-14 h-7",
      },
      checked: {
        true: "bg-[#CCFF00] shadow-lg shadow-[#CCFF00]/30",
        false: "bg-gray-300 border border-gray-400 dark:bg-[#2a2a2a] dark:border-[#2a2a2a]",
      },
    },
    defaultVariants: { size: "md", checked: false },
  },
);

const toggleDot = cva("block rounded-full transition-transform duration-200", {
  variants: {
    size: {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
    },
    checked: {
      true: "bg-[#0a0a0a]",
      false: "bg-white dark:bg-[#a0a0a0]",
    },
  },
  defaultVariants: { size: "md", checked: false },
});

const translateMap: Record<string, string> = {
  sm: "translate-x-5",
  md: "translate-x-6",
  lg: "translate-x-7",
};

export interface ToggleProps extends Omit<VariantProps<typeof toggle>, "checked"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

export const Toggle: FC<ToggleProps> = ({
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  size = "md",
  disabled = false,
  label,
  className,
}) => {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  const handleToggle = () => {
    if (disabled) return;
    const next = !checked;
    if (!isControlled) setInternalChecked(next);
    onChange?.(next);
  };

  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={handleToggle}
        disabled={disabled}
        className={cn(
          toggle({ size, checked }),
          disabled && "opacity-50 cursor-not-allowed",
          !disabled && "cursor-pointer",
        )}
      >
        <span
          className={cn(
            toggleDot({ size, checked }),
            checked ? translateMap[size ?? "md"] : "translate-x-0.5",
          )}
        />
      </button>
      {label && (
        <span className="font-medium text-gray-800 dark:text-white text-sm">{label}</span>
      )}
    </div>
  );
};

Toggle.displayName = "Toggle";
