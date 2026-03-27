import {
  type FC,
  type InputHTMLAttributes,
  type ReactNode,
  type ChangeEvent,
  forwardRef,
  useState,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

/* ─────────────────────────────────────────
   CVA definitions
───────────────────────────────────────── */
const radio = cva(
  [
    "appearance-none border-2 rounded-full transition-all duration-150",
    "bg-white focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-1",
  ],
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6",
      },
      checked: {
        true: "border-blue-500",
        false: "border-gray-300 hover:border-blue-400",
      },
    },
    defaultVariants: { size: "md", checked: false },
  },
);

const radioDot = cva(
  "absolute rounded-full bg-blue-500 pointer-events-none transition-all duration-150",
  {
    variants: {
      size: {
        sm: "w-1.5 h-1.5",
        md: "w-2 h-2",
        lg: "w-2.5 h-2.5",
      },
      checked: {
        true: "opacity-100 scale-100",
        false: "opacity-0 scale-0",
      },
    },
    defaultVariants: { size: "md", checked: false },
  },
);

const radioLabel = cva("font-medium text-gray-800 dark:text-gray-200 leading-snug", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: { size: "md" },
});

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */
export interface RadioOption {
  value: string;
  label: ReactNode;
  description?: string;
  disabled?: boolean;
}

export interface RadioProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">,
    Omit<VariantProps<typeof radio>, "checked"> {
  label?: ReactNode;
  description?: string;
}

export interface RadioGroupProps {
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  name: string;
  size?: "sm" | "md" | "lg";
  direction?: "vertical" | "horizontal";
  className?: string;
}

/* ─────────────────────────────────────────
   Radio (single)
───────────────────────────────────────── */
export const Radio: FC<RadioProps> = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      label,
      description,
      size = "md",
      disabled,
      id,
      checked,
      defaultChecked,
      onChange,
      ...props
    },
    ref,
  ) => {
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
        <div
          className={cn(
            "relative flex items-center justify-center shrink-0 mt-0.5",
            size === "sm" ? "w-4 h-4" : size === "lg" ? "w-6 h-6" : "w-5 h-5",
          )}
        >
          <input
            ref={ref}
            id={id}
            type="radio"
            disabled={disabled}
            checked={isControlled ? checked : undefined}
            defaultChecked={!isControlled ? defaultChecked : undefined}
            onChange={handleChange}
            aria-checked={isChecked}
            className={cn(radio({ size, checked: !!isChecked }))}
            {...props}
          />
          <span className={cn(radioDot({ size, checked: !!isChecked }))} aria-hidden="true" />
        </div>

        {(label || description) && (
          <div className="flex flex-col gap-0.5">
            {label && (
              <span className={cn(radioLabel({ size }))}>{label}</span>
            )}
            {description && (
              <span className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{description}</span>
            )}
          </div>
        )}
      </label>
    );
  },
);

Radio.displayName = "Radio";

/* ─────────────────────────────────────────
   RadioGroup
───────────────────────────────────────── */
export const RadioGroup: FC<RadioGroupProps> = ({
  options,
  value,
  onChange,
  name,
  size = "md",
  direction = "vertical",
  className,
}) => {
  const [internalValue, setInternalValue] = useState<string | undefined>(undefined);
  const isControlled = value !== undefined;
  const activeValue = isControlled ? value : internalValue;

  return (
    <div
      className={cn(
        "flex",
        direction === "vertical" ? "flex-col gap-3" : "flex-row flex-wrap gap-4",
        className,
      )}
      role="radiogroup"
      aria-label={name}
    >
      {options.map((opt) => (
        <Radio
          key={opt.value}
          id={`${name}-${opt.value}`}
          name={name}
          value={opt.value}
          label={opt.label}
          description={opt.description}
          disabled={opt.disabled}
          size={size}
          checked={activeValue === opt.value}
          onChange={() => {
            if (!isControlled) setInternalValue(opt.value);
            onChange?.(opt.value);
          }}
        />
      ))}
    </div>
  );
};

RadioGroup.displayName = "RadioGroup";
