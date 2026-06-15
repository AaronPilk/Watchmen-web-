import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Section";
import { ApplyForm } from "@/components/forms/ApplyForm";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply to The Watchmen — a private, invite-only brotherhood in Tampa Bay. Membership is free; every applicant is personally vetted.",
};

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="pt-32">
        <section className="container pb-28">
          <div className="mx-auto max-w-2xl">
            <Reveal className="text-center">
              <Eyebrow className="mb-4">Membership Application</Eyebrow>
              <h1 className="display-heading text-4xl text-bone sm:text-5xl">
                Apply To The Brotherhood
              </h1>
              <p className="body-copy mx-auto mt-6 max-w-xl text-lg">
                Membership is free — but earned. Tell us a little about yourself.
                Every application is read and personally reviewed by our advisory
                team. No payment, no winding a clock, no hoops. Just honesty.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="mt-12">
              <ApplyForm />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
