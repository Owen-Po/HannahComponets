import React from "react";
import { Minus, Plus } from "lucide-react";
import { cn } from "../../utils/cn";

export interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "pill" | "minimal";
  disabled?: boolean;
  accentColor?: string;
  className?: string;
}

const sizeConfig = {
  sm: { btn: "h-7 w-7", icon: 14, text: "text-sm", gap: "gap-1" },
  md: { btn: "h-9 w-9", icon: 16, text: "text-base", gap: "gap-2" },
  lg: { btn: "h-11 w-11", icon: 20, text: "text-lg", gap: "gap-3" },
};

export const QuantitySelector: React.FC<QuantitySelectorProps> = ({
  value,
  onChange,
  min = 1,
  max = 99,
  size = "md",
  variant = "default",
  disabled = false,
  accentColor = "#7c6aff",
  className,
}) => {
  const s = sizeConfig[size];
  const atMin = value <= min;
  const atMax = value >= max;

  const handleDecrement = () => {
    if (!atMin && !disabled) onChange(Math.max(min, value - 1));
  };
  const handleIncrement = () => {
    if (!atMax && !disabled) onChange(Math.min(max, value + 1));
  };

  const btnBase = cn(
    "inline-flex items-center justify-center transition-all duration-150",
    "active:scale-95 select-none",
    "disabled:opacity-40 disabled:cursor-not-allowed disabled:active:scale-100",
    s.btn
  );

  const btnStyle = (isDisabled: boolean): React.CSSProperties => ({
    ...(isDisabled ? {} : { "--qs-accent": accentColor } as React.CSSProperties),
  });

  const variantBtn = cn(
    btnBase,
    variant === "default" &&
      "rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700",
    variant === "pill" &&
      "rounded-full hover:bg-black/10 dark:hover:bg-white/10",
    variant === "minimal" &&
      "rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
  );

  const container = cn(
    "inline-flex items-center",
    s.gap,
    variant === "default" && "rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-1",
    variant === "pill" && "rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-1 py-0.5",
    variant === "minimal" && "",
    disabled && "opacity-50",
    className
  );

  return (
    <div className={container}>
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={disabled || atMin}
        onClick={handleDecrement}
        className={variantBtn}
        style={btnStyle(disabled || atMin)}
      >
        <Minus size={s.icon} className="text-gray-700 dark:text-gray-300" />
      </button>

      <span
        className={cn(
          "font-mono font-semibold tabular-nums text-center select-none min-w-[2ch]",
          "text-gray-900 dark:text-gray-100",
          s.text
        )}
      >
        {value}
      </span>

      <button
        type="button"
        aria-label="Increase quantity"
        disabled={disabled || atMax}
        onClick={handleIncrement}
        className={variantBtn}
        style={btnStyle(disabled || atMax)}
      >
        <Plus size={s.icon} className="text-gray-700 dark:text-gray-300" />
      </button>
    </div>
  );
};
