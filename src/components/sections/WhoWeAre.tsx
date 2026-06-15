import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { whoWeAre } from "@/content/home";

export function WhoWeAre() {
  return (
    <Section id="about">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow={whoWeAre.eyebrow}>
            {whoWeAre.headline}
          </SectionHeading>
          <div className="mt-6 max-w-prose space-y-6">
            {whoWeAre.paragraphs.map((p, i) => (
              <Reveal as="p" key={i} delay={i * 0.08} className="body-copy text-lg">
                {p}
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal>
          <PlaceholderImage alt={whoWeAre.imageAlt} aspect="aspect-[4/5]" />
        </Reveal>
      </div>
    </Section>
  );
}
