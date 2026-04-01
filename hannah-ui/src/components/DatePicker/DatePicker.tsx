import { useState, useRef, useEffect } from "react";
import { CalendarIcon, X, ChevronLeft, ChevronRight } from "lucide-react";

export interface DatePickerProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  isClearable?: boolean;
  id?: string;
  className?: string;
  minDate?: string;
  maxDate?: string;
  accentColor?: string;
  locale?: string;
  placeholderText?: string;
  todayLabel?: string;
  monthNames?: string[];
  dayNames?: string[];
}

const DEFAULT_DAYS = ["Lu", "Ma", "Mi", "Ju", "Vi", "Sa", "Do"];
const DEFAULT_MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1; // Monday = 0
}

export const DatePicker = ({
  value,
  onChange,
  placeholder,
  disabled = false,
  isClearable = false,
  id,
  className = "",
  minDate,
  maxDate,
  accentColor = "#d97706",
  locale = "es-PE",
  placeholderText = "Seleccione una fecha...",
  todayLabel = "Hoy",
  monthNames = DEFAULT_MONTHS,
  dayNames = DEFAULT_DAYS,
}: DatePickerProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const today = new Date();
  const selectedDate = value ? new Date(value + "T12:00:00") : null;
  const [viewYear, setViewYear] = useState(selectedDate?.getFullYear() ?? today.getFullYear());
  const [viewMonth, setViewMonth] = useState(selectedDate?.getMonth() ?? today.getMonth());

  useEffect(() => {
    if (selectedDate) {
      setViewYear(selectedDate.getFullYear());
      setViewMonth(selectedDate.getMonth());
    }
  }, [value]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    if (open) {
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }
  }, [open]);

  const formatted = selectedDate
    ? selectedDate.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" })
    : null;

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth);

  const handlePrev = () => {
    if (viewMonth === 0) { setViewMonth(11); setViewYear(viewYear - 1); }
    else setViewMonth(viewMonth - 1);
  };

  const handleNext = () => {
    if (viewMonth === 11) { setViewMonth(0); setViewYear(viewYear + 1); }
    else setViewMonth(viewMonth + 1);
  };

  const handleSelect = (day: number) => {
    const m = String(viewMonth + 1).padStart(2, "0");
    const d = String(day).padStart(2, "0");
    onChange?.(`${viewYear}-${m}-${d}`);
    setOpen(false);
  };

  const isDisabled = (day: number) => {
    const dateStr = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    if (minDate && dateStr < minDate) return true;
    if (maxDate && dateStr > maxDate) return true;
    return false;
  };

  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return selectedDate.getFullYear() === viewYear && selectedDate.getMonth() === viewMonth && selectedDate.getDate() === day;
  };

  const isToday = (day: number) => {
    return today.getFullYear() === viewYear && today.getMonth() === viewMonth && today.getDate() === day;
  };

  return (
    <div className={`relative inline-block w-full ${className}`} ref={ref}>
      <button
        id={id}
        type="button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg bg-white text-left text-sm transition-colors hover:border-gray-300 focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed ${
          isClearable && value ? "pr-10" : ""
        }`}
        style={{ ["--tw-ring-color" as string]: accentColor }}
      >
        <CalendarIcon className="w-4 h-4 text-gray-400 shrink-0" />
        <span className={`flex-1 truncate ${formatted ? "text-gray-900" : "text-gray-400"}`}>
          {formatted ?? (placeholder || placeholderText)}
        </span>
      </button>

      {isClearable && value && !disabled && (
        <button
          type="button"
          className="absolute right-0 top-0 h-full px-3 flex items-center text-gray-400 hover:text-red-500 transition-colors"
          onClick={(e) => { e.stopPropagation(); onChange?.(""); }}
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {open && (
        <div className="absolute left-0 top-full mt-2 z-50 bg-white border border-gray-200 rounded-xl shadow-xl p-3 w-72">
          {/* Header */}
          <div className="flex items-center justify-between mb-3">
            <button type="button" onClick={handlePrev} className="p-1 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
              <ChevronLeft size={16} />
            </button>
            <span className="text-sm font-semibold text-gray-800">
              {monthNames[viewMonth]} {viewYear}
            </span>
            <button type="button" onClick={handleNext} className="p-1 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 mb-1">
            {dayNames.map((d) => (
              <div key={d} className="text-center text-[10px] font-semibold text-gray-400 uppercase py-1">
                {d}
              </div>
            ))}
          </div>

          {/* Days grid */}
          <div className="grid grid-cols-7">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} />
            ))}
            {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
              const disabled_ = isDisabled(day);
              const selected_ = isSelected(day);
              const today_ = isToday(day);
              return (
                <button
                  key={day}
                  type="button"
                  disabled={disabled_}
                  onClick={() => handleSelect(day)}
                  className={`w-9 h-9 text-sm rounded-lg transition-colors mx-auto flex items-center justify-center ${
                    selected_
                      ? "text-white font-bold"
                      : today_
                        ? "font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                  } ${disabled_ ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}
                  style={
                    selected_
                      ? { backgroundColor: accentColor }
                      : today_
                        ? { backgroundColor: `${accentColor}12`, color: accentColor }
                        : undefined
                  }
                >
                  {day}
                </button>
              );
            })}
          </div>

          {/* Today button */}
          <div className="mt-2 pt-2 border-t border-gray-100">
            <button
              type="button"
              onClick={() => {
                const m = String(today.getMonth() + 1).padStart(2, "0");
                const d = String(today.getDate()).padStart(2, "0");
                onChange?.(`${today.getFullYear()}-${m}-${d}`);
                setOpen(false);
              }}
              className="w-full text-center text-xs font-medium py-1"
              style={{ color: accentColor }}
            >
              {todayLabel}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
