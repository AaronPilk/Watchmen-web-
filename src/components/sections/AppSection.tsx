import { Check, Apple } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ButtonLink } from "@/components/ui/button";
import { app } from "@/content/home";

export function AppSection() {
  return (
    <Section id="app">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <PlaceholderImage
            alt={app.imageAlt}
            aspect="aspect-[4/5]"
          />
        </Reveal>

        <div>
          <SectionHeading eyebrow={app.eyebrow}>{app.headline}</SectionHeading>
          <Reveal delay={0.05}>
            <p className="body-copy mt-6 max-w-prose text-lg">{app.body}</p>
          </Reveal>

          <ul className="mt-8 space-y-3">
            {app.features.map((f, i) => (
              <Reveal as="li" key={f} delay={i * 0.05} className="flex items-start gap-3">
                <Check className="mt-1 h-4 w-4 shrink-0 text-brass" strokeWidth={2.5} />
                <span className="text-bone-muted">{f}</span>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.1}>
            <ButtonLink href={app.ctaHref} className="mt-10">
              <Apple className="h-4 w-4" />
              Download on the App Store
            </ButtonLink>
            <p className="mt-3 text-xs text-bone-faint">
              The Watchman app is in App Store review. Apply now and we&apos;ll
              get you access the moment it goes live.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
