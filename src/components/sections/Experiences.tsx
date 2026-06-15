import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Icon } from "@/components/Icon";
import { experiences } from "@/content/home";

export function Experiences() {
  return (
    <Section id="experiences" className="bg-ink-800">
      <div className="max-w-3xl">
        <SectionHeading eyebrow={experiences.eyebrow}>
          {experiences.headline}
        </SectionHeading>
      </div>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {experiences.cards.map((card, i) => (
          <Reveal as="li" key={card.title} delay={i * 0.07}>
            <div className="group h-full rounded-2xl border border-bone/10 bg-ink p-6 transition-colors duration-300 hover:border-brass/40">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brass/10 text-brass transition-transform duration-300 group-hover:scale-110">
                <Icon name={card.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-serif text-xl uppercase tracking-wide text-bone">
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-muted">
                {card.body}
              </p>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
