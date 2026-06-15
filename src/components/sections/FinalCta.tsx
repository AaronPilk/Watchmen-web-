import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ui/button";
import { finalCta } from "@/content/home";

export function FinalCta() {
  return (
    <Section id="apply-cta" className="relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[40vmin] w-[40vmin] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brass/10 blur-[120px]" />
      <div className="relative mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="display-heading text-4xl text-bone sm:text-5xl lg:text-6xl">
            {finalCta.headline}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="body-copy mx-auto mt-6 max-w-xl text-lg">
            {finalCta.body}
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <ButtonLink href={finalCta.ctaHref} size="lg" className="mt-10">
            {finalCta.ctaLabel}
          </ButtonLink>
          <p className="mx-auto mt-4 max-w-md text-xs text-bone-faint">
            {finalCta.microcopy}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
