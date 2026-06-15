"use client";

import * as React from "react";
import {
  useInView,
  useReducedMotion,
  animate,
} from "framer-motion";
import { stats } from "@/content/home";

export function Stats() {
  return (
    <section className="border-y border-bone/10 bg-ink">
      <div className="container grid gap-10 py-16 sm:grid-cols-3 sm:py-20">
        {stats.items.map((stat) => (
          <Stat key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const reduce = useReducedMotion();

  // If the value is a number (optionally with a trailing symbol like "+"),
  // count up to it. Otherwise just render the string.
  const match = value.match(/^(\d+)(\D*)$/);
  const [display, setDisplay] = React.useState(
    match && !reduce ? `0${match[2]}` : value
  );

  React.useEffect(() => {
    if (!inView || !match || reduce) return;
    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(`${Math.round(v)}${suffix}`),
    });
    return () => controls.stop();
  }, [inView, match, reduce]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-5xl text-brass sm:text-6xl">{display}</p>
      <p className="mt-3 text-xs uppercase tracking-[0.25em] text-bone-muted">
        {label}
      </p>
    </div>
  );
}
