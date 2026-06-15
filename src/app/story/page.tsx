import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Section";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ButtonLink } from "@/components/ui/button";
import { story } from "@/content/story";

export const metadata: Metadata = {
  title: "The Story",
  description:
    "How The Watchmen began — a few men in Tampa Bay who refused to do life alone, and the brotherhood that grew from one dinner table.",
};

export default function StoryPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        {/* Intro */}
        <section className="container pb-16">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <Eyebrow className="mb-4">{story.eyebrow}</Eyebrow>
              <h1 className="display-heading text-4xl text-bone sm:text-5xl lg:text-6xl">
                {story.title}
              </h1>
              <p className="pull-quote mx-auto mt-8 max-w-2xl text-2xl sm:text-3xl">
                {story.lead}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="container pb-16">
          <Reveal className="mx-auto max-w-4xl">
            <PlaceholderImage
              alt="A founder speaking to a gathering of Watchmen members"
              aspect="aspect-[16/9]"
            />
          </Reveal>
        </section>

        {/* Body */}
        <section className="container pb-28">
          <div className="mx-auto max-w-prose space-y-16">
            {story.sections.map((s) => (
              <Reveal key={s.heading} as="div">
                <h2 className="display-heading text-2xl text-bone sm:text-3xl">
                  {s.heading}
                </h2>
                <div className="mt-5 space-y-5">
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="body-copy text-lg">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}

            <Reveal className="border-t border-bone/10 pt-12 text-center">
              <ButtonLink href={story.ctaHref} size="lg">
                {story.ctaLabel}
              </ButtonLink>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
