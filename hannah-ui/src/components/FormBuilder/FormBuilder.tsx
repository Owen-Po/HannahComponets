import { useState, useCallback, useRef, useEffect, useMemo, type ReactNode, Fragment } from "react";
import type React from "react";
import {
  Eye,
  EyeOff,
  ChevronDown,
  Upload,
  X,
  Check,
  ChevronRight,
  ChevronLeft,
  Loader2,
} from "lucide-react";
import { cn } from "../../utils/cn";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface FieldOption {
  label: string;
  value: string;
}

export type FieldType =
  | "text"
  | "email"
  | "password"
  | "number"
  | "tel"
  | "url"
  | "textarea"
  | "select"
  | "multiselect"
  | "checkbox"
  | "radio"
  | "toggle"
  | "date"
  | "file"
  | "heading"
  | "divider"
  | "custom";

export interface FormField {
  name: string;
  type: FieldType;
  label?: string;
  placeholder?: string;
  defaultValue?: any;
  required?: boolean;
  disabled?: boolean;

  colSpan?: 1 | 2;

  rules?: {
    min?: number;
    max?: number;
    minLength?: number;
    maxLength?: number;
    pattern?: { value: RegExp; message: string };
    custom?: (value: any, allValues: Record<string, any>) => string | null;
  };

  options?: FieldOption[];
  accept?: string;
  rows?: number;

  showWhen?:
    | { field: string; value: any; notEmpty?: undefined }
    | { field: string; notEmpty: true; value?: undefined };

  content?: string;
  description?: string;

  render?: (
    value: any,
    onChange: (val: any) => void,
    error?: string
  ) => React.ReactNode;
}

export interface FormBuilderProps {
  fields: FormField[];
  onSubmit: (values: Record<string, any>) => void | Promise<void>;
  onChange?: (values: Record<string, any>) => void;

  columns?: 1 | 2;
  gap?: "sm" | "md" | "lg";

  submitLabel?: string;
  cancelLabel?: string;
  onCancel?: () => void;
  resetLabel?: string;
  showReset?: boolean;

  loading?: boolean;
  disabled?: boolean;

  accentColor?: string;
  variant?: "default" | "card" | "minimal";
  className?: string;

  steps?: { label: string; fields: string[] }[];
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

const gapMap = { sm: "gap-3", md: "gap-5", lg: "gap-7" } as const;

function getDefaults(fields: FormField[]): Record<string, any> {
  const vals: Record<string, any> = {};
  for (const f of fields) {
    if (f.type === "heading" || f.type === "divider") continue;
    if (f.defaultValue !== undefined) {
      vals[f.name] = f.defaultValue;
    } else if (f.type === "checkbox" || f.type === "toggle") {
      vals[f.name] = false;
    } else if (f.type === "multiselect") {
      vals[f.name] = [];
    } else {
      vals[f.name] = "";
    }
  }
  return vals;
}

function validateField(
  field: FormField,
  value: any,
  allValues: Record<string, any>
): string | null {
  if (field.type === "heading" || field.type === "divider") return null;

  if (field.required) {
    if (
      value === undefined ||
      value === null ||
      value === "" ||
      (Array.isArray(value) && value.length === 0)
    ) {
      return "This field is required";
    }
  }

  const r = field.rules;
  if (!r) return null;

  if (r.minLength !== undefined && typeof value === "string" && value.length < r.minLength) {
    return `Must be at least ${r.minLength} characters`;
  }
  if (r.maxLength !== undefined && typeof value === "string" && value.length > r.maxLength) {
    return `Must be at most ${r.maxLength} characters`;
  }
  if (r.min !== undefined && typeof value === "number" && value < r.min) {
    return `Must be at least ${r.min}`;
  }
  if (r.max !== undefined && typeof value === "number" && value > r.max) {
    return `Must be at most ${r.max}`;
  }
  if (r.pattern && typeof value === "string" && value && !r.pattern.value.test(value)) {
    return r.pattern.message;
  }
  if (r.custom) {
    return r.custom(value, allValues);
  }

  return null;
}

function isFieldVisible(
  field: FormField,
  values: Record<string, any>
): boolean {
  if (!field.showWhen) return true;
  const depVal = values[field.showWhen.field];
  if (field.showWhen.notEmpty) {
    return depVal !== undefined && depVal !== null && depVal !== "" && depVal !== false;
  }
  return depVal === field.showWhen.value;
}

// ─── Component ───────────────────────────────────────────────────────────────

export function FormBuilder({
  fields,
  onSubmit,
  onChange,
  columns = 2,
  gap = "md",
  submitLabel = "Submit",
  cancelLabel = "Cancel",
  onCancel,
  resetLabel = "Reset",
  showReset = false,
  loading = false,
  disabled = false,
  accentColor = "#6366f1",
  variant = "default",
  className,
  steps,
}: FormBuilderProps) {
  const defaults = useMemo(() => getDefaults(fields), [fields]);
  const [values, setValues] = useState<Record<string, any>>(defaults);
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [currentStep, setCurrentStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const isLoading = loading || submitting;

  // Accent color as CSS variable
  const accentStyle = {
    "--fb-accent": accentColor,
    "--fb-accent-20": accentColor + "33",
  } as React.CSSProperties;

  const setValue = useCallback(
    (name: string, val: any) => {
      setValues((prev) => {
        const next = { ...prev, [name]: val };
        onChange?.(next);
        return next;
      });
    },
    [onChange]
  );

  const handleBlur = useCallback(
    (field: FormField) => {
      setTouched((prev) => ({ ...prev, [field.name]: true }));
      const err = validateField(field, values[field.name], values);
      setErrors((prev) => ({ ...prev, [field.name]: err }));
    },
    [values]
  );

  const visibleFields = useMemo(
    () => fields.filter((f) => isFieldVisible(f, values)),
    [fields, values]
  );

  const currentStepFields = useMemo(() => {
    if (!steps) return visibleFields;
    const stepFieldNames = steps[currentStep]?.fields ?? [];
    return visibleFields.filter((f) => stepFieldNames.includes(f.name));
  }, [steps, currentStep, visibleFields]);

  const validateAll = useCallback(
    (fieldsToValidate: FormField[]): boolean => {
      const newErrors: Record<string, string | null> = {};
      const newTouched: Record<string, boolean> = {};
      let firstErrorName: string | null = null;

      for (const f of fieldsToValidate) {
        if (!isFieldVisible(f, values)) continue;
        newTouched[f.name] = true;
        const err = validateField(f, values[f.name], values);
        newErrors[f.name] = err;
        if (err && !firstErrorName) firstErrorName = f.name;
      }

      setErrors((prev) => ({ ...prev, ...newErrors }));
      setTouched((prev) => ({ ...prev, ...newTouched }));

      if (firstErrorName && formRef.current) {
        const el = formRef.current.querySelector(
          `[data-field="${firstErrorName}"]`
        ) as HTMLElement | null;
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
        const input = el?.querySelector("input,textarea,select") as HTMLElement | null;
        input?.focus();
      }

      return !firstErrorName;
    },
    [values]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateAll(visibleFields)) return;

      // Build submit values (exclude hidden fields)
      const submitValues: Record<string, any> = {};
      for (const f of visibleFields) {
        if (f.type === "heading" || f.type === "divider") continue;
        submitValues[f.name] = values[f.name];
      }

      setSubmitting(true);
      try {
        await onSubmit(submitValues);
      } finally {
        setSubmitting(false);
      }
    },
    [onSubmit, validateAll, values, visibleFields]
  );

  const handleNext = useCallback(() => {
    if (!steps) return;
    const stepFieldNames = steps[currentStep]?.fields ?? [];
    const stepFields = fields.filter(
      (f) => stepFieldNames.includes(f.name) && isFieldVisible(f, values)
    );
    if (validateAll(stepFields)) {
      setCurrentStep((s) => Math.min(s + 1, steps.length - 1));
    }
  }, [steps, currentStep, fields, values, validateAll]);

  const handlePrev = useCallback(() => {
    setCurrentStep((s) => Math.max(s - 1, 0));
  }, []);

  const handleReset = useCallback(() => {
    setValues(defaults);
    setErrors({});
    setTouched({});
    setCurrentStep(0);
  }, [defaults]);

  const isLastStep = !steps || currentStep === steps.length - 1;

  // ─── Render helpers ──────────────────────────────────────────────────────

  const labelClasses = "block text-[13px] font-medium text-gray-700 dark:text-gray-300 mb-1.5";

  const inputBase = cn(
    "h-10 w-full rounded-lg px-3 text-[14px] transition-colors outline-none",
    "bg-white dark:bg-gray-900",
    "placeholder:text-gray-400 dark:placeholder:text-gray-500",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variant === "minimal"
      ? "border-0 border-b-2 border-gray-200 dark:border-gray-700 rounded-none px-0"
      : "border border-gray-200 dark:border-gray-700"
  );

  const inputFocus = cn(
    variant === "minimal"
      ? "focus:border-[var(--fb-accent)]"
      : "focus:border-[var(--fb-accent)] focus:ring-1 focus:ring-[var(--fb-accent-20)]"
  );

  const inputError = cn(
    variant === "minimal"
      ? "border-red-400 dark:border-red-400"
      : "border-red-400 dark:border-red-400"
  );

  function renderLabel(field: FormField) {
    if (!field.label) return null;
    return (
      <label className={labelClasses} htmlFor={field.name}>
        {field.label}
        {field.required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
    );
  }

  function renderError(field: FormField) {
    const err = touched[field.name] ? errors[field.name] : null;
    return (
      <div
        className={cn(
          "overflow-hidden transition-all duration-200",
          err ? "max-h-6 opacity-100 mt-1" : "max-h-0 opacity-0"
        )}
      >
        <p className="text-[12px] text-red-500">{err}</p>
      </div>
    );
  }

  const hasError = (name: string) => touched[name] && !!errors[name];

  function renderField(field: FormField) {
    const val = values[field.name];
    const fieldDisabled = disabled || field.disabled || isLoading;
    const errCls = hasError(field.name) ? inputError : "";

    switch (field.type) {
      case "heading":
        return (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {field.content || field.label}
            </h3>
            {field.description && (
              <p className="text-[13px] text-gray-500 dark:text-gray-400 mt-0.5">
                {field.description}
              </p>
            )}
          </div>
        );

      case "divider":
        return <hr className="border-gray-200 dark:border-gray-700" />;

      case "text":
      case "email":
      case "tel":
      case "url":
      case "number":
      case "date":
        return (
          <div>
            {renderLabel(field)}
            <input
              id={field.name}
              type={field.type}
              value={val ?? ""}
              placeholder={field.placeholder}
              disabled={fieldDisabled}
              className={cn(inputBase, inputFocus, errCls)}
              onChange={(e) =>
                setValue(
                  field.name,
                  field.type === "number" ? (e.target.value === "" ? "" : Number(e.target.value)) : e.target.value
                )
              }
              onBlur={() => handleBlur(field)}
            />
            {renderError(field)}
          </div>
        );

      case "password":
        return <PasswordField field={field} val={val} fieldDisabled={fieldDisabled} />;

      case "textarea":
        return (
          <div>
            {renderLabel(field)}
            <textarea
              id={field.name}
              value={val ?? ""}
              placeholder={field.placeholder}
              disabled={fieldDisabled}
              rows={field.rows ?? 4}
              className={cn(
                inputBase,
                inputFocus,
                errCls,
                "h-auto py-2 resize-none"
              )}
              onChange={(e) => setValue(field.name, e.target.value)}
              onBlur={() => handleBlur(field)}
            />
            {field.rules?.maxLength && (
              <p className="text-[11px] text-gray-400 mt-1 text-right">
                {(val as string)?.length ?? 0}/{field.rules.maxLength}
              </p>
            )}
            {renderError(field)}
          </div>
        );

      case "select":
        return (
          <div>
            {renderLabel(field)}
            <div className="relative">
              <select
                id={field.name}
                value={val ?? ""}
                disabled={fieldDisabled}
                className={cn(
                  inputBase,
                  inputFocus,
                  errCls,
                  "appearance-none pr-9 cursor-pointer"
                )}
                onChange={(e) => setValue(field.name, e.target.value)}
                onBlur={() => handleBlur(field)}
              >
                <option value="">
                  {field.placeholder ?? "Select..."}
                </option>
                {field.options?.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
            {renderError(field)}
          </div>
        );

      case "multiselect":
        return (
          <div>
            {renderLabel(field)}
            <MultiselectField
              field={field}
              val={val as string[]}
              setValue={setValue}
              handleBlur={handleBlur}
              fieldDisabled={fieldDisabled}
              errCls={errCls}
              inputBase={inputBase}
              inputFocus={inputFocus}
            />
            {renderError(field)}
          </div>
        );

      case "checkbox":
        return (
          <div className="flex items-center gap-2.5 h-10">
            <input
              id={field.name}
              type="checkbox"
              checked={!!val}
              disabled={fieldDisabled}
              className="w-4 h-4 rounded border-gray-300 dark:border-gray-600 accent-[var(--fb-accent)] cursor-pointer"
              onChange={(e) => setValue(field.name, e.target.checked)}
              onBlur={() => handleBlur(field)}
            />
            <label
              htmlFor={field.name}
              className="text-[14px] text-gray-700 dark:text-gray-300 cursor-pointer select-none"
            >
              {field.label}
              {field.required && <span className="text-red-400 ml-0.5">*</span>}
            </label>
            {renderError(field)}
          </div>
        );

      case "radio":
        return (
          <div>
            {renderLabel(field)}
            <div
              className={cn(
                "flex",
                (field.options?.length ?? 0) <= 3
                  ? "flex-row gap-4"
                  : "flex-col gap-2"
              )}
            >
              {field.options?.map((o) => (
                <label
                  key={o.value}
                  className="flex items-center gap-2 cursor-pointer text-[14px] text-gray-700 dark:text-gray-300"
                >
                  <input
                    type="radio"
                    name={field.name}
                    value={o.value}
                    checked={val === o.value}
                    disabled={fieldDisabled}
                    className="w-4 h-4 accent-[var(--fb-accent)]"
                    onChange={() => setValue(field.name, o.value)}
                    onBlur={() => handleBlur(field)}
                  />
                  {o.label}
                </label>
              ))}
            </div>
            {renderError(field)}
          </div>
        );

      case "toggle":
        return (
          <div className="flex items-center justify-between h-10">
            <label
              htmlFor={field.name}
              className="text-[14px] text-gray-700 dark:text-gray-300 cursor-pointer select-none"
            >
              {field.label}
              {field.required && <span className="text-red-400 ml-0.5">*</span>}
            </label>
            <button
              id={field.name}
              type="button"
              role="switch"
              aria-checked={!!val}
              disabled={fieldDisabled}
              className={cn(
                "relative w-11 h-6 rounded-full transition-colors duration-200 cursor-pointer",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                val
                  ? "bg-[var(--fb-accent)]"
                  : "bg-gray-300 dark:bg-gray-600"
              )}
              onClick={() => setValue(field.name, !val)}
              onBlur={() => handleBlur(field)}
            >
              <span
                className={cn(
                  "absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-200",
                  val && "translate-x-5"
                )}
              />
            </button>
          </div>
        );

      case "file":
        return (
          <div>
            {renderLabel(field)}
            <FileField
              field={field}
              val={val}
              setValue={setValue}
              handleBlur={handleBlur}
              fieldDisabled={fieldDisabled}
              errCls={errCls}
            />
            {renderError(field)}
          </div>
        );

      case "custom":
        return field.render?.(
          val,
          (v) => setValue(field.name, v),
          touched[field.name] ? (errors[field.name] ?? undefined) : undefined
        ) ?? null;

      default:
        return null;
    }
  }

  // Sub-components defined inside to access closure vars

  function PasswordField({
    field,
    val,
    fieldDisabled,
  }: {
    field: FormField;
    val: any;
    fieldDisabled: boolean;
  }) {
    const [show, setShow] = useState(false);
    return (
      <div>
        {renderLabel(field)}
        <div className="relative">
          <input
            id={field.name}
            type={show ? "text" : "password"}
            value={val ?? ""}
            placeholder={field.placeholder}
            disabled={fieldDisabled}
            className={cn(
              inputBase,
              inputFocus,
              hasError(field.name) ? inputError : "",
              "pr-10"
            )}
            onChange={(e) => setValue(field.name, e.target.value)}
            onBlur={() => handleBlur(field)}
          />
          <button
            type="button"
            tabIndex={-1}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            onClick={() => setShow(!show)}
          >
            {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>
        {renderError(field)}
      </div>
    );
  }

  // ─── Step indicator ────────────────────────────────────────────────────

  function StepIndicator() {
    if (!steps) return null;
    return (
      <div className="flex items-center justify-center mb-8">
        {steps.map((step, i) => {
          const isCompleted = i < currentStep;
          const isCurrent = i === currentStep;
          return (
            <Fragment key={i}>
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-semibold transition-colors",
                    isCompleted && "bg-emerald-500 text-white",
                    isCurrent && "bg-[var(--fb-accent)] text-white",
                    !isCompleted && !isCurrent && "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                  )}
                >
                  {isCompleted ? <Check className="w-4 h-4" /> : i + 1}
                </div>
                <span
                  className={cn(
                    "text-[11px] mt-1.5 font-medium whitespace-nowrap",
                    isCurrent
                      ? "text-gray-900 dark:text-gray-100"
                      : "text-gray-400 dark:text-gray-500"
                  )}
                >
                  {step.label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div
                  className={cn(
                    "h-0.5 w-12 sm:w-20 mx-2 mt-[-18px] rounded-full",
                    i < currentStep
                      ? "bg-emerald-500"
                      : "bg-gray-200 dark:bg-gray-700"
                  )}
                />
              )}
            </Fragment>
          );
        })}
      </div>
    );
  }

  // ─── Main render ───────────────────────────────────────────────────────

  const fieldsToRender = steps ? currentStepFields : visibleFields;

  const formContent = (
    <>
      <StepIndicator />
      <div
        className={cn(
          "grid",
          columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1",
          gapMap[gap]
        )}
      >
        {fields.map((field) => {
          const visible = fieldsToRender.includes(field);
          const isFullWidth =
            field.colSpan === 2 ||
            field.type === "heading" ||
            field.type === "divider";

          return (
            <div
              key={field.name}
              data-field={field.name}
              className={cn(
                "transition-all duration-300",
                isFullWidth && columns === 2 && "sm:col-span-2",
                visible
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden m-0 p-0"
              )}
              style={visible ? undefined : { margin: 0, padding: 0, gap: 0 }}
            >
              {visible && renderField(field)}
            </div>
          );
        })}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
        {showReset && (
          <button
            type="button"
            disabled={isLoading}
            className="px-4 h-10 text-[14px] text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors disabled:opacity-50"
            onClick={handleReset}
          >
            {resetLabel}
          </button>
        )}

        {onCancel && (
          <button
            type="button"
            disabled={isLoading}
            className="px-5 h-10 rounded-lg border border-gray-200 dark:border-gray-700 text-[14px] font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50"
            onClick={onCancel}
          >
            {cancelLabel}
          </button>
        )}

        {steps && currentStep > 0 && (
          <button
            type="button"
            disabled={isLoading}
            className="px-5 h-10 rounded-lg border border-gray-200 dark:border-gray-700 text-[14px] font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors disabled:opacity-50 flex items-center gap-1.5"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
        )}

        {!isLastStep ? (
          <button
            type="button"
            className="px-5 h-10 rounded-lg text-[14px] font-medium text-white transition-colors flex items-center gap-1.5"
            style={{ backgroundColor: accentColor }}
            onClick={handleNext}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={isLoading || disabled}
            className="px-6 h-10 rounded-lg text-[14px] font-medium text-white transition-colors disabled:opacity-50 flex items-center gap-2"
            style={{ backgroundColor: accentColor }}
          >
            {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
            {submitLabel}
          </button>
        )}
      </div>
    </>
  );

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={cn(
        variant === "card" &&
          "bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 p-6 sm:p-8",
        className
      )}
      style={accentStyle}
      noValidate
    >
      {formContent}
    </form>
  );
}

// ─── Extracted sub-components ─────────────────────────────────────────────────

function MultiselectField({
  field,
  val,
  setValue,
  handleBlur,
  fieldDisabled,
  errCls,
  inputBase,
  inputFocus,
}: {
  field: FormField;
  val: string[];
  setValue: (name: string, val: any) => void;
  handleBlur: (field: FormField) => void;
  fieldDisabled: boolean;
  errCls: string;
  inputBase: string;
  inputFocus: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const selected = val ?? [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        handleBlur(field);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [field, handleBlur]);

  const toggle = (v: string) => {
    const next = selected.includes(v)
      ? selected.filter((s) => s !== v)
      : [...selected, v];
    setValue(field.name, next);
  };

  const remove = (v: string) => {
    setValue(field.name, selected.filter((s) => s !== v));
  };

  return (
    <div ref={ref} className="relative">
      <div
        className={cn(
          inputBase,
          inputFocus,
          errCls,
          "flex items-center flex-wrap gap-1.5 cursor-pointer min-h-[40px] h-auto py-1.5 pr-9"
        )}
        onClick={() => !fieldDisabled && setOpen(!open)}
      >
        {selected.length === 0 && (
          <span className="text-gray-400 dark:text-gray-500 text-[14px]">
            {field.placeholder ?? "Select..."}
          </span>
        )}
        {selected.map((v) => {
          const label = field.options?.find((o) => o.value === v)?.label ?? v;
          return (
            <span
              key={v}
              className="inline-flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-[12px] font-medium text-gray-700 dark:text-gray-300 rounded-md px-2 py-0.5"
            >
              {label}
              <button
                type="button"
                className="hover:text-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  remove(v);
                }}
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          );
        })}
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
      </div>
      {open && (
        <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-1 max-h-48 overflow-y-auto">
          {field.options?.map((o) => (
            <button
              key={o.value}
              type="button"
              className={cn(
                "w-full flex items-center gap-2.5 px-3 py-2 text-[14px] text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",
                selected.includes(o.value) && "text-[var(--fb-accent)] font-medium"
              )}
              onClick={() => toggle(o.value)}
            >
              <div
                className={cn(
                  "w-4 h-4 rounded border flex items-center justify-center transition-colors",
                  selected.includes(o.value)
                    ? "bg-[var(--fb-accent)] border-[var(--fb-accent)]"
                    : "border-gray-300 dark:border-gray-600"
                )}
              >
                {selected.includes(o.value) && (
                  <Check className="w-3 h-3 text-white" />
                )}
              </div>
              {o.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function FileField({
  field,
  val,
  setValue,
  handleBlur,
  fieldDisabled,
  errCls,
}: {
  field: FormField;
  val: any;
  setValue: (name: string, val: any) => void;
  handleBlur: (field: FormField) => void;
  fieldDisabled: boolean;
  errCls: string;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = useState(false);
  const file = val as File | null;

  return (
    <div
      className={cn(
        "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
        dragOver
          ? "border-[var(--fb-accent)] bg-[var(--fb-accent-20)]"
          : errCls
            ? "border-red-400"
            : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600",
        fieldDisabled && "opacity-50 cursor-not-allowed"
      )}
      onClick={() => !fieldDisabled && inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setDragOver(false);
        if (e.dataTransfer.files?.[0]) {
          setValue(field.name, e.dataTransfer.files[0]);
          handleBlur(field);
        }
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept={field.accept}
        className="hidden"
        onChange={(e) => {
          if (e.target.files?.[0]) {
            setValue(field.name, e.target.files[0]);
            handleBlur(field);
          }
        }}
      />
      <Upload className="w-6 h-6 text-gray-400 mx-auto mb-2" />
      {file ? (
        <p className="text-[14px] text-gray-700 dark:text-gray-300 font-medium">
          {file.name}
        </p>
      ) : (
        <p className="text-[13px] text-gray-500">
          Click or drag file here
        </p>
      )}
    </div>
  );
}
