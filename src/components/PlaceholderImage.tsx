import * as React from "react";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PlaceholderImageProps {
  /** Intended alt text — also displayed as the on-block caption. */
  alt: string;
  className?: string;
  /** Aspect ratio utility, e.g. "aspect-[4/5]". */
  aspect?: string;
}

/**
 * Styled placeholder block standing in for real photography.
 * Shows the intended alt text so layout + intent are clear before assets arrive.
 * Swap for <Image /> from next/image once photos are supplied.
 */
export function PlaceholderImage({
  alt,
  className,
  aspect = "aspect-[4/5]",
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative flex items-center justify-center overflow-hidden rounded-2xl border border-bone/10 bg-gradient-to-br from-ink-700 via-ink-800 to-ink",
        aspect,
        className
      )}
    >
      {/* subtle grain / vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:linear-gradient(45deg,#fff_1px,transparent_1px)] [background-size:6px_6px]" />
      <div className="relative z-10 flex max-w-[80%] flex-col items-center gap-3 text-center">
        <ImageIcon className="h-7 w-7 text-brass/70" strokeWidth={1.25} />
        <span className="text-xs uppercase tracking-[0.2em] text-bone-faint">
          Photo
        </span>
        <span className="text-sm text-bone-muted">{alt}</span>
      </div>
    </div>
  );
}
