import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { benefits } from "@/content/home";

export function Benefits() {
  return (
    <Section id="benefits" className="bg-ink-800">
      <div className="max-w-3xl">
        <SectionHeading eyebrow={benefits.eyebrow}>
          {benefits.headline}
        </SectionHeading>
      </div>

      <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {benefits.items.map((item, i) => (
          <Reveal as="li" key={item.label} delay={(i % 4) * 0.05}>
            <div className="flex h-full items-center gap-4 rounded-xl border border-bone/10 bg-ink p-5 transition-colors duration-300 hover:border-brass/40">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brass/10 text-brass">
                <Icon name={item.icon} className="h-5 w-5" />
              </span>
              <span className="text-sm font-medium text-bone">{item.label}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
