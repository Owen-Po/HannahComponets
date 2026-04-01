import React, { useEffect, useRef, useState, useCallback, useMemo } from "react";
import { Search } from "lucide-react";
import { cn } from "../../utils/cn";

/* ─────────────────────────────────────────
   Types
───────────────────────────────────────── */

export interface Command {
  id: string;
  label: string;
  icon?: React.ElementType;
  description?: string;
  shortcut?: string;
  onSelect: () => void;
}

export interface CommandGroup {
  label: string;
  commands: Command[];
}

export interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  groups: CommandGroup[];
  accentColor?: string;
  placeholder?: string;
  emptyMessage?: string;
  className?: string;
}

/* ─────────────────────────────────────────
   Helpers
───────────────────────────────────────── */

function fuzzyMatch(text: string, query: string): boolean {
  const lower = text.toLowerCase();
  const q = query.toLowerCase();
  let qi = 0;
  for (let i = 0; i < lower.length && qi < q.length; i++) {
    if (lower[i] === q[qi]) qi++;
  }
  return qi === q.length;
}

function filterGroups(groups: CommandGroup[], query: string): CommandGroup[] {
  if (!query.trim()) return groups;
  return groups
    .map((group) => ({
      ...group,
      commands: group.commands.filter(
        (cmd) =>
          fuzzyMatch(cmd.label, query) ||
          (cmd.description && fuzzyMatch(cmd.description, query))
      ),
    }))
    .filter((group) => group.commands.length > 0);
}

function flatCommands(groups: CommandGroup[]): Command[] {
  return groups.flatMap((g) => g.commands);
}

/* ─────────────────────────────────────────
   Component
───────────────────────────────────────── */

export function CommandPalette({
  isOpen,
  onClose,
  groups,
  accentColor = "#7c6aff",
  placeholder = "Type a command or search...",
  emptyMessage = "No results found.",
  className,
}: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => filterGroups(groups, query), [groups, query]);
  const flat = useMemo(() => flatCommands(filtered), [filtered]);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setActiveIndex(0);
      // Small delay so the DOM is painted before focus
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [isOpen]);

  // Clamp active index when results change
  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, Math.max(flat.length - 1, 0)));
  }, [flat.length]);

  // Scroll active item into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${activeIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const selectItem = useCallback(
    (cmd: Command) => {
      cmd.onSelect();
      onClose();
    },
    [onClose]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((i) => (i + 1) % Math.max(flat.length, 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((i) => (i - 1 + flat.length) % Math.max(flat.length, 1));
          break;
        case "Enter":
          e.preventDefault();
          if (flat[activeIndex]) selectItem(flat[activeIndex]);
          break;
        case "Escape":
          e.preventDefault();
          onClose();
          break;
      }
    },
    [flat, activeIndex, selectItem, onClose]
  );

  if (!isOpen) return null;

  let itemCounter = -1;

  return (
    /* Backdrop */
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-start justify-center pt-[15vh]",
        "bg-black/40 backdrop-blur-sm",
        "animate-in fade-in duration-150",
        className
      )}
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      {/* Panel */}
      <div
        className={cn(
          "w-full max-w-xl overflow-hidden rounded-2xl border",
          "border-gray-200/60 dark:border-gray-700/60",
          "bg-white/80 dark:bg-gray-900/80",
          "backdrop-blur-xl",
          "shadow-2xl shadow-black/20",
          "animate-in fade-in slide-in-from-top-4 duration-200"
        )}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-gray-200/60 dark:border-gray-700/60 px-4">
          <Search className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActiveIndex(0);
            }}
            placeholder={placeholder}
            className={cn(
              "flex-1 bg-transparent py-4 text-sm outline-none",
              "text-gray-900 dark:text-gray-100",
              "placeholder:text-gray-400 dark:placeholder:text-gray-500"
            )}
            aria-label="Search commands"
            autoComplete="off"
            spellCheck={false}
          />
          <kbd
            className={cn(
              "hidden sm:inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[11px] font-medium",
              "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500",
              "border border-gray-200/80 dark:border-gray-700/80"
            )}
          >
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div
          ref={listRef}
          className="max-h-[360px] overflow-y-auto overscroll-contain p-2"
          role="listbox"
        >
          {flat.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-sm text-gray-400 dark:text-gray-500">
              <Search className="mb-2 h-8 w-8 opacity-40" />
              {emptyMessage}
            </div>
          ) : (
            filtered.map((group) => (
              <div key={group.label} className="mb-1 last:mb-0">
                <div className="px-2 pb-1 pt-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  {group.label}
                </div>
                {group.commands.map((cmd) => {
                  itemCounter++;
                  const idx = itemCounter;
                  const isActive = idx === activeIndex;
                  const Icon = cmd.icon;

                  return (
                    <button
                      key={cmd.id}
                      data-index={idx}
                      role="option"
                      aria-selected={isActive}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                        "outline-none",
                        isActive
                          ? "text-gray-900 dark:text-gray-100"
                          : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                      )}
                      style={
                        isActive
                          ? { backgroundColor: `${accentColor}14` }
                          : undefined
                      }
                      onClick={() => selectItem(cmd)}
                      onMouseEnter={() => setActiveIndex(idx)}
                    >
                      {Icon && (
                        <div
                          className={cn(
                            "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors",
                            isActive
                              ? "text-white"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                          )}
                          style={
                            isActive
                              ? { backgroundColor: accentColor }
                              : undefined
                          }
                        >
                          <Icon className="h-4 w-4" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="truncate font-medium">{cmd.label}</div>
                        {cmd.description && (
                          <div className="truncate text-xs text-gray-400 dark:text-gray-500">
                            {cmd.description}
                          </div>
                        )}
                      </div>
                      {cmd.shortcut && (
                        <kbd
                          className={cn(
                            "ml-auto hidden shrink-0 sm:inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-[11px] font-medium",
                            "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500",
                            "border border-gray-200/80 dark:border-gray-700/80"
                          )}
                        >
                          {cmd.shortcut}
                        </kbd>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div
          className={cn(
            "flex items-center gap-4 border-t border-gray-200/60 dark:border-gray-700/60 px-4 py-2",
            "text-[11px] text-gray-400 dark:text-gray-500"
          )}
        >
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-gray-200/80 dark:border-gray-700/80 bg-gray-100 dark:bg-gray-800 px-1 py-0.5 font-medium">↑↓</kbd>
            Navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-gray-200/80 dark:border-gray-700/80 bg-gray-100 dark:bg-gray-800 px-1 py-0.5 font-medium">↵</kbd>
            Select
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-gray-200/80 dark:border-gray-700/80 bg-gray-100 dark:bg-gray-800 px-1 py-0.5 font-medium">esc</kbd>
            Close
          </span>
        </div>
      </div>
    </div>
  );
}
