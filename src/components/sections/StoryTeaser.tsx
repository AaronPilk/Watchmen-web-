import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { storyTeaser } from "@/content/home";

export function StoryTeaser() {
  return (
    <Section id="story" className="bg-ink-800">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <PlaceholderImage alt={storyTeaser.imageAlt} aspect="aspect-[5/4]" />
        </Reveal>
        <div>
          <SectionHeading eyebrow={storyTeaser.eyebrow}>
            {storyTeaser.headline}
          </SectionHeading>
          <div className="mt-6 max-w-prose space-y-6">
            {storyTeaser.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 0.08} className="body-copy text-lg">
                {p}
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <Link
              href={storyTeaser.ctaHref}
              className="group mt-8 inline-flex items-center gap-2 font-serif text-lg uppercase tracking-display text-brass transition-colors hover:text-brass-light"
            >
              {storyTeaser.ctaLabel}
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
