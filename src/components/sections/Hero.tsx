"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { hero } from "@/content/home";
import { ButtonLink } from "@/components/ui/button";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* Hero image placeholder background */}
      <div
        role="img"
        aria-label="Watchmen members gathered at an event in Tampa Bay, warmly graded black and white"
        className="absolute inset-0 bg-gradient-to-b from-ink-700 via-ink-800 to-ink"
      >
        <div className="absolute inset-0 opacity-[0.05] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:22px_22px]" />
        {/* warm vignette + bottom fade so text stays legible */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(184,149,106,0.10),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="container relative z-10 py-32 text-center"
      >
        <motion.p variants={item} className="eyebrow mb-6">
          {hero.eyebrow}
        </motion.p>

        <motion.h1
          variants={item}
          className="display-heading text-[clamp(3rem,12vw,9rem)] text-bone"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-2 font-serif text-2xl italic text-brass sm:text-3xl"
        >
          {hero.subhead}
        </motion.p>

        <motion.p
          variants={item}
          className="body-copy mx-auto mt-8 max-w-2xl text-base sm:text-lg"
        >
          {hero.body}
        </motion.p>

        <motion.div variants={item} className="mt-10">
          <ButtonLink href="/apply" size="lg">
            Apply Now
          </ButtonLink>
        </motion.div>

        {/* Pills */}
        <motion.ul
          variants={item}
          className="mx-auto mt-14 flex max-w-2xl flex-wrap items-center justify-center gap-x-2 gap-y-3 text-xs uppercase tracking-[0.2em] text-bone-muted"
        >
          {hero.pills.map((pill, i) => (
            <li key={pill} className="flex items-center gap-2">
              {i > 0 ? (
                <span className="h-1 w-1 rounded-full bg-brass/50" aria-hidden />
              ) : null}
              <span className="px-1">{pill}</span>
            </li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-brass/70"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-6 w-6" />
      </motion.div>
    </section>
  );
}
