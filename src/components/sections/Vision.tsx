import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { vision } from "@/content/home";

export function Vision() {
  return (
    <Section id="vision">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <SectionHeading eyebrow={vision.eyebrow}>{vision.headline}</SectionHeading>
        <div className="max-w-prose space-y-6">
          {vision.paragraphs.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 0.08} className="body-copy text-lg">
              {p}
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
