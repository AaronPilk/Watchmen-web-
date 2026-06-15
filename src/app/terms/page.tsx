import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing the use of The Watchmen marketing website.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" updated="June 2026">
      <p className="text-bone-muted">
        These terms govern your use of this marketing website. Member conduct
        and the full membership terms live inside the Watchman app.
      </p>

      <LegalSection heading="Use of this site">
        <p>
          This website is provided for informational purposes — to tell the
          story of The Watchmen and to let prospective members apply. You agree
          to use it lawfully and not to misuse the contact or application forms.
        </p>
      </LegalSection>

      <LegalSection heading="Applications">
        <p>
          Submitting an application does not guarantee membership. Membership is
          free and every applicant is personally reviewed by our advisory team,
          which may approve or decline any application at its discretion.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual property">
        <p>
          The Watchmen name, “Got Your Six,” logos, and site content are the
          property of The Watchmen and may not be copied or reused without
          permission.
        </p>
      </LegalSection>

      <LegalSection heading="No warranties">
        <p>
          This site is provided “as is.” We work to keep information accurate
          and current but make no warranties about its completeness or
          availability.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about these terms? Reach us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
