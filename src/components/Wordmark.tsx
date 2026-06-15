import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Text wordmark with a small brass "6 o'clock" clock mark — nods to
 * "Got Your Six." Swap the mark for a real logo SVG when one is supplied.
 */
export function Wordmark({
  className,
  showTagline = false,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="The Watchmen — home"
    >
      <svg
        viewBox="0 0 40 40"
        className="h-8 w-8 shrink-0"
        aria-hidden="true"
        fill="none"
      >
        <circle cx="20" cy="20" r="18" stroke="#b8956a" strokeWidth="1.5" />
        {/* hour ticks */}
        <g stroke="#b8956a" strokeWidth="1.5" strokeLinecap="round">
          <line x1="20" y1="4" x2="20" y2="8" />
          <line x1="36" y1="20" x2="32" y2="20" />
          <line x1="4" y1="20" x2="8" y2="20" />
        </g>
        {/* 6 o'clock tick — emphasized */}
        <line
          x1="20"
          y1="32"
          x2="20"
          y2="37"
          stroke="#cdac82"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        {/* hands pointing toward six */}
        <line x1="20" y1="20" x2="20" y2="29" stroke="#f4f1ea" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="20" y1="20" x2="26" y2="20" stroke="#f4f1ea" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="20" r="1.6" fill="#cdac82" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-lg uppercase tracking-display text-bone transition-colors group-hover:text-brass-light">
          The Watchmen
        </span>
        {showTagline ? (
          <span className="mt-1 font-serif text-sm italic text-brass">
            Got Your Six
          </span>
        ) : null}
      </span>
    </Link>
  );
}
