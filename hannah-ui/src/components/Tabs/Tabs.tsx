import { type FC, type HTMLAttributes, type ReactNode, useState } from "react";
import { cn } from "../../utils/cn";

export interface TabItem {
  key: string;
  label: ReactNode;
  icon?: ReactNode;
  disabled?: boolean;
  badge?: ReactNode;
  content?: ReactNode;
}

export interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  tabs: TabItem[];
  defaultKey?: string;
  activeKey?: string;
  onChange?: (key: string) => void;
  variant?: "underline" | "pill" | "boxed";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const Tabs: FC<TabsProps> = ({
  tabs,
  defaultKey,
  activeKey: controlledKey,
  onChange,
  variant = "underline",
  size = "md",
  fullWidth = false,
  className,
  ...props
}) => {
  const [internalKey, setInternalKey] = useState(defaultKey ?? tabs[0]?.key ?? "");
  const active = controlledKey ?? internalKey;

  const handleChange = (key: string) => {
    setInternalKey(key);
    onChange?.(key);
  };

  const textSize = size === "sm" ? "text-xs" : size === "lg" ? "text-base" : "text-sm";
  const padSize  = size === "sm" ? "px-3 py-1.5" : size === "lg" ? "px-5 py-3" : "px-4 py-2";

  const activeTab = tabs.find((t) => t.key === active);

  return (
    <div className={cn("flex flex-col", className)} {...props}>
      {/* Tab list */}
      <div
        role="tablist"
        className={cn(
          "flex",
          fullWidth && "w-full",
          variant === "underline" && "border-b border-gray-200 dark:border-gray-700 gap-1",
          variant === "pill"      && "gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit",
          variant === "boxed"     && "border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden divide-x divide-gray-200 dark:divide-gray-700",
        )}
      >
        {tabs.map((tab) => {
          const isActive = tab.key === active;
          return (
            <button
              key={tab.key}
              role="tab"
              aria-selected={isActive}
              disabled={tab.disabled}
              onClick={() => !tab.disabled && handleChange(tab.key)}
              className={cn(
                "inline-flex items-center gap-1.5 font-medium select-none transition-all duration-150",
                "disabled:pointer-events-none disabled:opacity-40",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-700",
                textSize,
                padSize,
                fullWidth && "flex-1 justify-center",

                variant === "underline" && [
                  "relative rounded-t-lg",
                  isActive
                    ? "text-blue-600 dark:text-blue-400 after:absolute after:-bottom-px after:left-0 after:right-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:rounded-full"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800",
                ],

                variant === "pill" && [
                  "rounded-lg",
                  isActive
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",
                ],

                variant === "boxed" && [
                  isActive
                    ? "bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800",
                ],
              )}
            >
              {tab.icon && (
                <span className="shrink-0 inline-flex" aria-hidden>{tab.icon}</span>
              )}
              {tab.label}
              {tab.badge && <span className="shrink-0">{tab.badge}</span>}
            </button>
          );
        })}
      </div>

      {/* Tab panel */}
      {activeTab?.content !== undefined && (
        <div role="tabpanel" className="pt-4">
          {activeTab.content}
        </div>
      )}
    </div>
  );
};

Tabs.displayName = "Tabs";
