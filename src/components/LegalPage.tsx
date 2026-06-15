import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-32">
        <section className="container pb-28">
          <div className="mx-auto max-w-prose">
            <h1 className="display-heading text-4xl text-bone sm:text-5xl">
              {title}
            </h1>
            <p className="mt-3 text-xs uppercase tracking-[0.15em] text-bone-faint">
              Last updated {updated}
            </p>
            <div className="legal mt-10 space-y-8">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 font-serif text-xl uppercase tracking-wide text-bone">
        {heading}
      </h2>
      <div className="space-y-4 text-bone-muted [&_a]:text-brass [&_a:hover]:underline">
        {children}
      </div>
    </section>
  );
}
