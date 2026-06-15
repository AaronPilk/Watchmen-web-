import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ButtonLink } from "@/components/ui/button";
import { gotYour6 } from "@/content/home";

export function GotYour6() {
  return (
    <Section id="gotyour6" className="bg-ink-800">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Reversed: photo first */}
        <Reveal className="lg:order-1">
          <PlaceholderImage alt={gotYour6.imageAlt} aspect="aspect-[4/5]" />
        </Reveal>
        <div className="lg:order-2">
          <SectionHeading eyebrow={gotYour6.eyebrow}>
            {gotYour6.headline}
          </SectionHeading>
          <div className="mt-6 max-w-prose space-y-6">
            {gotYour6.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 0.08} className="body-copy text-lg">
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <blockquote className="mt-8 border-l-2 border-brass pl-5">
              <p className="pull-quote text-2xl sm:text-3xl">
                “{gotYour6.quote}”
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.15}>
            <ButtonLink href="/apply" variant="outline" className="mt-8">
              Apply Now
            </ButtonLink>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
