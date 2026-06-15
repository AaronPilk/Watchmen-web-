import { Mail, MapPin, Instagram } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/forms/ContactForm";
import { contact } from "@/content/home";
import { site } from "@/content/site";

export function Contact() {
  return (
    <Section id="contact" className="bg-ink-800">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow={contact.eyebrow}>
            {contact.headline}
          </SectionHeading>
          <Reveal delay={0.05}>
            <p className="body-copy mt-6 max-w-prose text-lg">{contact.body}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="mt-10 space-y-5">
              <li className="flex items-center gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brass/10 text-brass">
                  <Mail className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="text-bone transition-colors hover:text-brass"
                >
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brass/10 text-brass">
                  <MapPin className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="text-bone">{site.location}</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brass/10 text-brass">
                  <Instagram className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <a
                  href={site.social.instagram}
                  target={site.social.instagram !== "#" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-bone transition-colors hover:text-brass"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
