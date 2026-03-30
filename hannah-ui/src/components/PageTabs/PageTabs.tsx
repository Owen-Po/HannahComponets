export interface PageTab {
  id: string;
  label: string;
  count?: number;
  disabled?: boolean;
}

export interface PageTabsProps {
  tabs: PageTab[];
  activeTab: string;
  onChange: (tabId: string) => void;
  accentColor?: string;
  className?: string;
}

export const PageTabs = ({ tabs, activeTab, onChange, accentColor = "#d97706", className = "" }: PageTabsProps) => (
  <div className={`border-b border-gray-200 ${className}`}>
    <nav className="flex gap-0 -mb-px" role="tablist">
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            disabled={tab.disabled}
            onClick={() => onChange(tab.id)}
            className={`relative px-4 py-2.5 text-sm font-medium transition-colors whitespace-nowrap ${
              isActive
                ? "border-b-2"
                : "text-gray-500 hover:text-gray-700 border-b-2 border-transparent"
            } ${tab.disabled ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
            style={isActive ? { color: accentColor, borderBottomColor: accentColor } : undefined}
          >
            {tab.label}
            {tab.count !== undefined && (
              <span
                className={`ml-2 inline-flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full text-xs font-bold ${
                  isActive
                    ? ""
                    : "bg-gray-100 text-gray-600"
                }`}
                style={isActive ? { backgroundColor: `${accentColor}20`, color: accentColor } : undefined}
              >
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  </div>
);
