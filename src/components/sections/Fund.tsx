import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { fund } from "@/content/home";

export function Fund() {
  return (
    <Section id="fund">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading eyebrow={fund.eyebrow} align="center">
          {fund.headline}
        </SectionHeading>
        <div className="mt-6 space-y-6">
          {fund.paragraphs.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 0.08} className="body-copy text-lg">
              {p}
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.15}>
          <p className="pull-quote mt-10 text-2xl sm:text-3xl">
            “{fund.quote}”
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
