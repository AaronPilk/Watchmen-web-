import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

/** Standard section shell with generous vertical rhythm + container. */
export function Section({ id, className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-24 sm:py-32 lg:py-40", className)}
    >
      <div className="container">{children}</div>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("eyebrow", className)}>{children}</p>;
}

interface SectionHeadingProps {
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}

/** Eyebrow + serif display headline, revealed together. */
export function SectionHeading({
  eyebrow,
  children,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow ? <Eyebrow className="mb-4">{eyebrow}</Eyebrow> : null}
      <h2 className="display-heading text-3xl text-bone sm:text-4xl lg:text-5xl">
        {children}
      </h2>
    </Reveal>
  );
}
