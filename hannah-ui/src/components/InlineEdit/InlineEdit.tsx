import React, { useState, useRef, useEffect, useCallback } from "react";
import { Pencil, Check, X } from "lucide-react";
import { cn } from "../../utils/cn";

export interface InlineEditProps {
  value: string;
  onSave: (value: string) => void;
  onCancel?: () => void;
  type?: "text" | "textarea" | "number";
  placeholder?: string;
  disabled?: boolean;
  validate?: (value: string) => string | null;
  size?: "sm" | "md" | "lg";
  showActions?: boolean;
  saveOnBlur?: boolean;
  accentColor?: string;
  editLabel?: string;
  className?: string;
}

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
} as const;

const inputPadding = {
  sm: "py-0.5",
  md: "py-1",
  lg: "py-1.5",
} as const;

const iconSize = {
  sm: 12,
  md: 14,
  lg: 16,
} as const;

export function InlineEdit({
  value,
  onSave,
  onCancel,
  type = "text",
  placeholder = "Empty",
  disabled = false,
  validate,
  size = "md",
  showActions = true,
  saveOnBlur = true,
  accentColor = "#7c6aff",
  editLabel = "Click to edit",
  className,
}: InlineEditProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setDraft(value);
  }, [value]);

  useEffect(() => {
    if (editing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [editing]);

  const startEdit = useCallback(() => {
    if (disabled) return;
    setDraft(value);
    setError(null);
    setEditing(true);
  }, [disabled, value]);

  const save = useCallback(() => {
    if (validate) {
      const msg = validate(draft);
      if (msg) {
        setError(msg);
        return;
      }
    }
    setEditing(false);
    setError(null);
    if (draft !== value) onSave(draft);
  }, [draft, value, validate, onSave]);

  const cancel = useCallback(() => {
    setEditing(false);
    setDraft(value);
    setError(null);
    onCancel?.();
  }, [value, onCancel]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && type !== "textarea") {
      e.preventDefault();
      save();
    }
    if (e.key === "Escape") {
      e.preventDefault();
      cancel();
    }
  };

  const handleBlur = (e: React.FocusEvent) => {
    // Don't blur-save if clicking action buttons
    const related = e.relatedTarget as HTMLElement | null;
    if (related?.closest("[data-inline-edit-actions]")) return;
    if (saveOnBlur) save();
    else cancel();
  };

  // Auto-grow textarea
  const autoGrow = useCallback((el: HTMLTextAreaElement | null) => {
    if (!el) return;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  }, []);

  if (editing) {
    const sharedProps = {
      ref: inputRef as any,
      value: draft,
      placeholder,
      className: cn(
        "w-full bg-transparent outline-none border-0 border-b-2 px-0",
        inputPadding[size],
        sizeClasses[size],
        error ? "border-red-500" : "",
      ),
      style: error ? undefined : { borderBottomColor: accentColor },
      onKeyDown: handleKeyDown,
      onBlur: handleBlur,
    };

    return (
      <div className={cn("inline-flex flex-col min-w-0", className)}>
        <div className="inline-flex items-end gap-1.5">
          {type === "textarea" ? (
            <textarea
              {...sharedProps}
              rows={1}
              className={cn(sharedProps.className, "resize-none overflow-hidden")}
              onChange={(e) => {
                setDraft(e.target.value);
                setError(null);
                autoGrow(e.target);
              }}
              ref={(el) => {
                (inputRef as React.MutableRefObject<HTMLTextAreaElement | null>).current = el;
                autoGrow(el);
              }}
            />
          ) : (
            <input
              {...sharedProps}
              type={type}
              onChange={(e) => {
                setDraft(e.target.value);
                setError(null);
              }}
            />
          )}

          {showActions && (
            <span data-inline-edit-actions="" className="inline-flex items-center gap-0.5 shrink-0 pb-0.5">
              <button
                type="button"
                onClick={save}
                className="inline-flex items-center justify-center rounded p-0.5 text-green-600 hover:bg-green-50 dark:hover:bg-green-950 transition-colors cursor-pointer"
                aria-label="Save"
              >
                <Check size={iconSize[size]} />
              </button>
              <button
                type="button"
                onClick={cancel}
                className="inline-flex items-center justify-center rounded p-0.5 text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                aria-label="Cancel"
              >
                <X size={iconSize[size]} />
              </button>
            </span>
          )}
        </div>

        {error && (
          <span className="text-xs text-red-500 mt-1">{error}</span>
        )}
      </div>
    );
  }

  // Display mode
  const isEmpty = !value;

  return (
    <span
      role="button"
      tabIndex={disabled ? undefined : 0}
      aria-label={editLabel}
      onClick={startEdit}
      onKeyDown={(e) => {
        if (e.key === "Enter") startEdit();
      }}
      className={cn(
        "group/ie inline-flex items-center gap-1 min-w-0",
        sizeClasses[size],
        disabled
          ? "cursor-default opacity-60"
          : "cursor-pointer",
        className,
      )}
    >
      <span
        className={cn(
          "truncate border-b border-transparent transition-colors",
          !disabled && "group-hover/ie:border-dotted group-hover/ie:border-gray-400 dark:group-hover/ie:border-gray-500",
          isEmpty && "italic text-gray-400 dark:text-gray-500",
        )}
      >
        {isEmpty ? placeholder : value}
      </span>

      {!disabled && (
        <Pencil
          size={iconSize[size]}
          className="shrink-0 text-gray-300 dark:text-gray-600 opacity-0 group-hover/ie:opacity-100 transition-opacity"
        />
      )}
    </span>
  );
}
