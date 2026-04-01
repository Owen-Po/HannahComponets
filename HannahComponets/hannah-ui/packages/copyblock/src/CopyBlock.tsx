import { useState, useCallback, useRef } from "react";
import { Clipboard, Check } from "lucide-react";
import { cn } from "@hannah-ui/core";

export interface CopyBlockProps {
  /** The text to display and copy */
  content: string;
  /** Language label shown as a pill (e.g. "bash", "tsx", "url") */
  language?: string;
  /** Visual variant */
  variant?: "code" | "terminal" | "inline";
  /** Show line numbers */
  showLineNumbers?: boolean;
  /** Max height in px — enables vertical scroll */
  maxHeight?: number;
  /** Title / filename shown as a tab header */
  title?: string;
  /** Accent color for highlights */
  accentColor?: string;
  /** Tooltip text after copying */
  copiedMessage?: string;
  /** Tooltip text before copying */
  copyLabel?: string;
  /** Additional class names */
  className?: string;
}

export function CopyBlock({
  content,
  language,
  variant = "code",
  showLineNumbers = false,
  maxHeight,
  title,
  accentColor = "#7c6aff",
  copiedMessage = "Copied!",
  copyLabel = "Copy",
  className,
}: CopyBlockProps) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = content;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    }
  }, [content]);

  const lines = content.split("\n");

  const isTerminal = variant === "terminal";
  const isInline = variant === "inline";

  // ── Wrapper classes ──────────────────────────────────────────
  const wrapperClasses = cn(
    "group relative w-full overflow-hidden text-sm",
    // Code
    variant === "code" && [
      "rounded-xl border border-gray-200 bg-gray-50",
      "dark:border-gray-800 dark:bg-gray-900",
    ],
    // Terminal
    isTerminal && [
      "rounded-xl border border-gray-800 bg-gray-950",
    ],
    // Inline
    isInline && [
      "inline-flex items-center rounded-lg border border-gray-200 bg-gray-100",
      "dark:border-gray-700 dark:bg-gray-800",
    ],
    className,
  );

  // ── Title bar ────────────────────────────────────────────────
  const titleBar = title ? (
    <div
      className={cn(
        "flex items-center gap-2 border-b px-4 py-2 text-xs font-medium select-none",
        variant === "code" && "border-gray-200 bg-gray-100/60 text-gray-600 dark:border-gray-800 dark:bg-gray-800/50 dark:text-gray-400",
        isTerminal && "border-gray-800 bg-gray-900 text-gray-400",
      )}
    >
      {isTerminal && (
        <span className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="h-3 w-3 rounded-full bg-green-500/80" />
        </span>
      )}
      <span>{title}</span>
    </div>
  ) : null;

  // ── Language pill ────────────────────────────────────────────
  const languagePill = language && !isInline ? (
    <span
      className={cn(
        "absolute left-3 top-2 z-10 rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider select-none",
        variant === "code" && "bg-gray-200/80 text-gray-500 dark:bg-gray-700/80 dark:text-gray-400",
        isTerminal && "bg-gray-800 text-gray-500",
      )}
      style={language ? { borderBottom: `2px solid ${accentColor}` } : undefined}
    >
      {language}
    </span>
  ) : null;

  // ── Copy button ──────────────────────────────────────────────
  const copyButton = (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? copiedMessage : copyLabel}
      className={cn(
        "absolute z-10 flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all duration-200",
        "opacity-0 group-hover:opacity-100 focus-visible:opacity-100",
        copied && "opacity-100",
        isInline
          ? "relative right-0 top-0 shrink-0 opacity-100"
          : "right-3 top-2",
        // Colors per variant
        variant === "code" && [
          "bg-white/80 text-gray-600 shadow-sm backdrop-blur-sm",
          "hover:bg-white hover:text-gray-900",
          "dark:bg-gray-800/80 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200",
        ],
        isTerminal && [
          "bg-gray-800/80 text-gray-400 backdrop-blur-sm",
          "hover:bg-gray-700 hover:text-gray-200",
        ],
        isInline && [
          "bg-transparent text-gray-500 hover:text-gray-900",
          "dark:text-gray-400 dark:hover:text-gray-200",
        ],
      )}
      style={copied ? { color: accentColor } : undefined}
    >
      {copied ? (
        <>
          <Check size={14} strokeWidth={2.5} />
          <span>{copiedMessage}</span>
        </>
      ) : (
        <>
          <Clipboard size={14} />
          {!isInline && <span>{copyLabel}</span>}
        </>
      )}
    </button>
  );

  // ── Inline variant ───────────────────────────────────────────
  if (isInline) {
    return (
      <span className={wrapperClasses}>
        <code className="flex-1 truncate px-3 py-2 font-mono text-xs text-gray-700 dark:text-gray-300">
          {content}
        </code>
        {copyButton}
      </span>
    );
  }

  // ── Code / Terminal body ─────────────────────────────────────
  const body = (
    <div
      className="overflow-x-auto overflow-y-auto"
      style={maxHeight ? { maxHeight } : undefined}
    >
      <pre
        className={cn(
          "p-4 font-mono text-[13px] leading-relaxed",
          language && !title && "pt-9",
          variant === "code" && "text-gray-800 dark:text-gray-200",
          isTerminal && "text-gray-100",
        )}
      >
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              {showLineNumbers && (
                <span
                  className={cn(
                    "mr-6 inline-block w-6 shrink-0 text-right select-none",
                    variant === "code" && "text-gray-400 dark:text-gray-600",
                    isTerminal && "text-gray-600",
                  )}
                >
                  {i + 1}
                </span>
              )}
              {isTerminal && (
                <span className="mr-2 select-none text-green-400">$</span>
              )}
              <span className="flex-1 whitespace-pre">{line}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );

  return (
    <div className={wrapperClasses}>
      {languagePill && !title && languagePill}
      {titleBar}
      {languagePill && title && languagePill}
      {copyButton}
      {body}
    </div>
  );
}
