import { useState, useRef, useEffect } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";

export interface ColorPickerProps {
  value?: string;
  onChange?: (color: string) => void;
  label?: string;
  presets?: string[];
}

const DEFAULT_PRESETS = [
  "#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6",
  "#8b5cf6", "#ec4899", "#6b7280", "#000000", "#ffffff",
];

export const ColorPicker = ({
  value = "#000000",
  onChange,
  label,
  presets = DEFAULT_PRESETS,
}: ColorPickerProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) {
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }
  }, [open]);

  return (
    <div className="relative inline-block" ref={ref}>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 transition-colors"
      >
        <div
          className="w-6 h-6 rounded-md border border-gray-300 shadow-sm"
          style={{ backgroundColor: value }}
        />
        <span className="text-sm font-mono text-gray-600 uppercase">{value}</span>
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 z-50 bg-white border border-gray-200 rounded-xl shadow-xl p-3 flex flex-col gap-3">
          <HexColorPicker color={value} onChange={onChange} />
          <HexColorInput
            color={value}
            onChange={onChange}
            prefixed
            className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded-md text-center font-mono uppercase focus:outline-none focus:ring-2 focus:ring-amber-400"
          />
          {presets.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {presets.map((preset) => (
                <button
                  key={preset}
                  type="button"
                  onClick={() => onChange?.(preset)}
                  className="w-6 h-6 rounded-md border border-gray-200 hover:scale-110 transition-transform shadow-sm"
                  style={{ backgroundColor: preset }}
                  title={preset}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
