import { useState, type ReactNode } from "react";
import { HelpCircle, X } from "lucide-react";

export interface HelpSection {
  title: string;
  content: ReactNode;
  icon?: ReactNode;
}

export interface HelpModalProps {
  title: string;
  description?: string;
  sections: HelpSection[];
  accentColor?: string;
}

export const HelpModal = ({ title, description, sections, accentColor = "#d97706" }: HelpModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="p-1.5 text-gray-400 rounded-full transition-colors"
        style={{ ["--accent" as string]: accentColor }}
        onMouseEnter={(e) => { e.currentTarget.style.color = accentColor; e.currentTarget.style.backgroundColor = `${accentColor}12`; }}
        onMouseLeave={(e) => { e.currentTarget.style.color = ""; e.currentTarget.style.backgroundColor = ""; }}
        title="Ver ayuda"
        aria-label="Ver ayuda"
      >
        <HelpCircle className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[80vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5" style={{ color: accentColor }} />
                <h3 className="text-base font-semibold text-gray-900">{title}</h3>
              </div>
              <button type="button" onClick={() => setIsOpen(false)} className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {description && (
                <p className="text-sm text-gray-600 border-l-4 pl-3 py-1 rounded-r" style={{ borderColor: accentColor, backgroundColor: `${accentColor}12` }}>{description}</p>
              )}

              {sections.length > 1 && (
                <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2">
                  {sections.map((section, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveSection(index)}
                      className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition-all ${
                        activeSection === index
                          ? "font-medium"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                      style={activeSection === index ? { backgroundColor: `${accentColor}20`, color: accentColor } : undefined}
                    >
                      {section.icon}
                      {section.title}
                    </button>
                  ))}
                </div>
              )}

              <div className="min-h-[200px]">
                {sections.length === 1 ? (
                  <div>
                    <h3 className="text-base font-medium text-gray-800 mb-3 flex items-center gap-2">
                      {sections[0].icon}
                      {sections[0].title}
                    </h3>
                    <div className="text-sm text-gray-600 space-y-2">{sections[0].content}</div>
                  </div>
                ) : (
                  <div className="text-sm text-gray-600 space-y-2">{sections[activeSection]?.content}</div>
                )}
              </div>

              {sections.length > 1 && (
                <div className="flex justify-center gap-1 pt-2 border-t border-gray-100">
                  {sections.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActiveSection(index)}
                      className={`w-2 h-2 rounded-full transition-all ${activeSection === index ? "w-4" : "bg-gray-300 hover:bg-gray-400"}`}
                      style={activeSection === index ? { backgroundColor: accentColor } : undefined}
                      aria-label={`Ir a sección ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const HelpList = ({ items, accentColor = "#d97706" }: { items: string[]; accentColor?: string }) => (
  <ul className="space-y-1.5 list-none">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-2">
        <span className="mt-0.5" style={{ color: accentColor }}>•</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

export const HelpParagraph = ({ children }: { children: ReactNode }) => (
  <p className="leading-relaxed">{children}</p>
);

export const HelpHighlight = ({ children, accentColor = "#d97706" }: { children: ReactNode; accentColor?: string }) => (
  <span className="px-1.5 py-0.5 rounded text-xs font-medium" style={{ backgroundColor: `${accentColor}20`, color: accentColor }}>{children}</span>
);

export const HelpKeyboard = ({ keys }: { keys: string }) => (
  <kbd className="bg-gray-100 border border-gray-300 rounded px-1.5 py-0.5 text-xs font-mono">{keys}</kbd>
);
