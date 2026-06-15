import { Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ButtonLink } from "@/components/ui/button";
import { membership } from "@/content/home";

export function Membership() {
  return (
    <Section id="membership">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow={membership.eyebrow}>
            {membership.headline}
          </SectionHeading>
          <Reveal delay={0.05}>
            <p className="body-copy mt-6 max-w-prose text-lg">{membership.lead}</p>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {membership.features.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-bone/10 bg-ink-800 p-5">
                  <span className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-brass/15 text-brass">
                    <Check className="h-4 w-4" strokeWidth={2.5} />
                  </span>
                  <h3 className="font-serif text-lg uppercase tracking-wide text-bone">
                    {f.title}
                  </h3>
                  <p className="mt-1 text-sm text-bone-muted">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <ButtonLink href="/apply" className="mt-10">
              Start Your Application
            </ButtonLink>
          </Reveal>
        </div>

        <Reveal>
          <PlaceholderImage alt={membership.imageAlt} aspect="aspect-[4/5]" />
        </Reveal>
      </div>
    </Section>
  );
}
