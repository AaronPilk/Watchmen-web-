"use client";

import * as React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

/**
 * Flagship scroll-driven showcase.
 * A timepiece assembles itself — case, bezel, dial, indices, hands, crown,
 * strap — as the user scrolls a tall pinned section. Pure SVG so it stays
 * razor-sharp and light. The finished watch reads 6:00 — a nod to "Got Your Six."
 *
 * Honors prefers-reduced-motion by rendering the fully assembled watch with
 * no scroll dependency.
 */

const CX = 200;
const CY = 240;

const steps = [
  { n: "01", title: "The Case", note: "Where it all begins — a frame built to last." },
  { n: "02", title: "The Dial", note: "A face you can read in any light." },
  { n: "03", title: "The Indices", note: "Every hour accounted for. Nothing missed." },
  { n: "04", title: "The Hands", note: "Pointed at your six — the angle you can't watch alone." },
  { n: "05", title: "The Strap", note: "Finished to be worn for a lifetime." },
];

export function WatchBuild() {
  const reduce = useReducedMotion();
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={ref}
      aria-label="The making of a timepiece"
      className="relative h-[320vh] bg-ink"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vmin] w-[60vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass/10 blur-[120px]" />

        <div className="container grid w-full items-center gap-10 lg:grid-cols-2">
          {/* Copy / build legend */}
          <div className="order-2 lg:order-1">
            <p className="eyebrow mb-4">The Craft</p>
            <h2 className="display-heading text-3xl text-bone sm:text-4xl lg:text-5xl">
              Built Piece By Piece.
            </h2>
            <p className="body-copy mt-5 max-w-md">
              Brotherhood isn&apos;t assembled in a day. It&apos;s machined slowly,
              part by part, until it can be trusted with your time. Scroll, and
              watch it come together.
            </p>

            <ol className="mt-10 space-y-5">
              {steps.map((step, i) => (
                <StepItem
                  key={step.n}
                  step={step}
                  index={i}
                  total={steps.length}
                  progress={scrollYProgress}
                  reduce={!!reduce}
                />
              ))}
            </ol>
          </div>

          {/* The watch */}
          <div className="order-1 flex items-center justify-center lg:order-2">
            <WatchSvg progress={scrollYProgress} reduce={!!reduce} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Build-legend item ---------- */

function StepItem({
  step,
  index,
  total,
  progress,
  reduce,
}: {
  step: { n: string; title: string; note: string };
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const slice = 1 / total;
  const start = index * slice;
  const end = start + slice;
  const opacity = useTransform(
    progress,
    [start - 0.04, start, end, end + 0.04],
    [0.32, 1, 1, 0.32]
  );

  return (
    <motion.li
      style={reduce ? undefined : { opacity }}
      className="flex gap-4"
    >
      <span className="font-serif text-sm text-brass">{step.n}</span>
      <div>
        <h3 className="font-serif text-xl uppercase tracking-display text-bone">
          {step.title}
        </h3>
        <p className="mt-1 text-sm text-bone-muted">{step.note}</p>
      </div>
    </motion.li>
  );
}

/* ---------- The SVG watch ---------- */

function WatchSvg({
  progress,
  reduce,
}: {
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  // Each part's reveal window across scroll progress 0..1
  const caseDraw = useTransform(progress, [0.0, 0.18], [0, 1]);
  const caseOpacity = useTransform(progress, [0.0, 0.06], [0, 1]);

  const bezelOpacity = useTransform(progress, [0.16, 0.26], [0, 1]);
  const bezelScale = useTransform(progress, [0.16, 0.26], [0.6, 1]);

  const dialOpacity = useTransform(progress, [0.26, 0.38], [0, 1]);
  const dialScale = useTransform(progress, [0.26, 0.38], [0.55, 1]);

  const indicesOpacity = useTransform(progress, [0.38, 0.5], [0, 1]);
  const indicesScale = useTransform(progress, [0.38, 0.5], [0.85, 1]);

  const sixOpacity = useTransform(progress, [0.48, 0.56], [0, 1]);
  const sixScale = useTransform(progress, [0.48, 0.56], [0.3, 1]);

  const hourLen = useTransform(progress, [0.56, 0.68], [0, 1]);
  const minuteLen = useTransform(progress, [0.66, 0.78], [0, 1]);
  const capOpacity = useTransform(progress, [0.76, 0.82], [0, 1]);

  const crownOpacity = useTransform(progress, [0.78, 0.86], [0, 1]);
  const crownX = useTransform(progress, [0.78, 0.86], [14, 0]);

  const strapOpacity = useTransform(progress, [0.84, 0.96], [0, 1]);
  const strapTopY = useTransform(progress, [0.84, 0.96], [-34, 0]);
  const strapBotY = useTransform(progress, [0.84, 0.96], [34, 0]);

  // Static styles when reduced motion is requested
  const s = (motionStyle: object) => (reduce ? undefined : motionStyle);

  return (
    <svg
      viewBox="0 0 400 520"
      className="h-[68vh] max-h-[620px] w-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
      role="img"
      aria-label="An illustrated wristwatch assembling itself: case, dial, indices, hands, crown, and strap, finishing at six o'clock."
    >
      <defs>
        <linearGradient id="brushed" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#cdac82" />
          <stop offset="45%" stopColor="#9a7a52" />
          <stop offset="55%" stopColor="#b8956a" />
          <stop offset="100%" stopColor="#7a5f3e" />
        </linearGradient>
        <radialGradient id="dialFace" cx="50%" cy="42%" r="70%">
          <stop offset="0%" stopColor="#1a1a1d" />
          <stop offset="70%" stopColor="#121214" />
          <stop offset="100%" stopColor="#09090a" />
        </radialGradient>
        <linearGradient id="strapGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#26262b" />
          <stop offset="100%" stopColor="#141416" />
        </linearGradient>
      </defs>

      {/* ---- Straps (behind case) ---- */}
      <motion.g style={s({ opacity: strapOpacity, y: strapTopY })}>
        <path
          d="M150 150 L138 40 Q138 22 156 22 L244 22 Q262 22 262 40 L250 150 Z"
          fill="url(#strapGrad)"
          stroke="#2e2e34"
          strokeWidth="1.5"
        />
        <line x1="158" y1="50" x2="242" y2="50" stroke="#b8956a" strokeWidth="1" strokeDasharray="3 4" opacity="0.5" />
      </motion.g>
      <motion.g style={s({ opacity: strapOpacity, y: strapBotY })}>
        <path
          d="M150 330 L138 440 Q138 458 156 458 L244 458 Q262 458 262 440 L250 330 Z"
          fill="url(#strapGrad)"
          stroke="#2e2e34"
          strokeWidth="1.5"
        />
        <line x1="158" y1="430" x2="242" y2="430" stroke="#b8956a" strokeWidth="1" strokeDasharray="3 4" opacity="0.5" />
      </motion.g>

      {/* ---- Crown (3 o'clock) ---- */}
      <motion.g style={s({ opacity: crownOpacity, x: crownX })}>
        <rect x="320" y="230" width="18" height="20" rx="3" fill="url(#brushed)" />
        <line x1="324" y1="234" x2="324" y2="246" stroke="#7a5f3e" strokeWidth="1" />
        <line x1="330" y1="234" x2="330" y2="246" stroke="#7a5f3e" strokeWidth="1" />
      </motion.g>

      {/* ---- Outer case (draws itself) ---- */}
      <motion.circle
        cx={CX}
        cy={CY}
        r="124"
        fill="none"
        stroke="url(#brushed)"
        strokeWidth="10"
        strokeLinecap="round"
        style={s({ opacity: caseOpacity, pathLength: caseDraw, rotate: -90, transformOrigin: `${CX}px ${CY}px` })}
        pathLength={reduce ? 1 : undefined}
      />

      {/* ---- Bezel ---- */}
      <motion.circle
        cx={CX}
        cy={CY}
        r="112"
        fill="none"
        stroke="#26262b"
        strokeWidth="6"
        style={s({ opacity: bezelOpacity, scale: bezelScale, transformOrigin: `${CX}px ${CY}px` })}
      />

      {/* ---- Dial face ---- */}
      <motion.circle
        cx={CX}
        cy={CY}
        r="104"
        fill="url(#dialFace)"
        stroke="#1f1f23"
        strokeWidth="1"
        style={s({ opacity: dialOpacity, scale: dialScale, transformOrigin: `${CX}px ${CY}px` })}
      />

      {/* ---- Hour indices ---- */}
      <motion.g
        style={s({ opacity: indicesOpacity, scale: indicesScale, transformOrigin: `${CX}px ${CY}px` })}
      >
        {Array.from({ length: 12 }).map((_, i) => {
          if (i === 6) return null; // six gets its own emphasized marker
          const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
          const r1 = 92;
          const r2 = i % 3 === 0 ? 78 : 84;
          return (
            <line
              key={i}
              x1={CX + Math.cos(angle) * r1}
              y1={CY + Math.sin(angle) * r1}
              x2={CX + Math.cos(angle) * r2}
              y2={CY + Math.sin(angle) * r2}
              stroke="#b9b4aa"
              strokeWidth={i % 3 === 0 ? 3 : 1.5}
              strokeLinecap="round"
            />
          );
        })}
      </motion.g>

      {/* ---- Emphasized 6 o'clock marker ---- */}
      <motion.g
        style={s({ opacity: sixOpacity, scale: sixScale, transformOrigin: `${CX}px ${CY + 84}px` })}
      >
        <line x1={CX} y1={CY + 92} x2={CX} y2={CY + 72} stroke="#cdac82" strokeWidth="5" strokeLinecap="round" />
        <text
          x={CX}
          y={CY + 66}
          textAnchor="middle"
          fill="#cdac82"
          fontSize="16"
          fontFamily="Georgia, serif"
          fontStyle="italic"
        >
          6
        </text>
      </motion.g>

      {/* ---- Hands (extend from center) ---- */}
      <motion.line
        x1={CX}
        y1={CY}
        x2={CX}
        y2={CY + 70}
        stroke="#f4f1ea"
        strokeWidth="5"
        strokeLinecap="round"
        style={s({ pathLength: hourLen, opacity: hourLen })}
        pathLength={reduce ? 1 : undefined}
      />
      <motion.line
        x1={CX}
        y1={CY}
        x2={CX}
        y2={CY - 96}
        stroke="#f4f1ea"
        strokeWidth="3"
        strokeLinecap="round"
        style={s({ pathLength: minuteLen, opacity: minuteLen })}
        pathLength={reduce ? 1 : undefined}
      />
      <motion.circle
        cx={CX}
        cy={CY}
        r="6"
        fill="#cdac82"
        style={s({ opacity: capOpacity })}
      />
    </svg>
  );
}
