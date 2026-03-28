import { forwardRef, useState, useEffect } from "react";

export interface SwitchProps {
  label?: string;
  description?: string;
  error?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ label, description, error, defaultChecked = false, checked, onChange, disabled = false }, ref) => {
    const isControlled = checked !== undefined;
    const [internal, setInternal] = useState(defaultChecked);
    const enabled = isControlled ? checked : internal;

    useEffect(() => {
      if (!isControlled) setInternal(defaultChecked);
    }, [defaultChecked, isControlled]);

    const handleToggle = () => {
      if (disabled) return;
      const next = !enabled;
      if (!isControlled) setInternal(next);
      onChange?.(next);
    };

    return (
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            {description && <p className="text-xs text-gray-500 mt-0.5">{description}</p>}
          </div>
          <button
            ref={ref}
            type="button"
            role="switch"
            aria-checked={enabled}
            onClick={handleToggle}
            disabled={disabled}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 ${
              enabled ? "bg-amber-600" : "bg-gray-200"
            } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
          >
            <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${enabled ? "translate-x-6" : "translate-x-1"}`} />
          </button>
        </div>
        {error && (
          <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
            <span className="w-1 h-1 bg-red-500 rounded-full shrink-0" />
            {error}
          </p>
        )}
      </div>
    );
  }
);

Switch.displayName = "Switch";
