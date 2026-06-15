import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/LegalPage";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How The Watchmen handles information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" updated="June 2026">
      <p className="text-bone-muted">
        This policy covers{" "}
        <a href={site.url} className="text-brass hover:underline">
          this marketing website
        </a>
        . The Watchman member app has its own separate policy.
      </p>

      <LegalSection heading="What we collect">
        <p>
          We only collect the information you choose to give us through our
          contact and application forms — typically your name, email address,
          phone number, city, and the message or application details you submit.
        </p>
      </LegalSection>

      <LegalSection heading="How we use it">
        <p>
          We use your information solely to respond to your message, review your
          application, and communicate with you about membership in The
          Watchmen. We do not sell, rent, or trade your information to anyone.
        </p>
      </LegalSection>

      <LegalSection heading="How it's handled">
        <p>
          Form submissions are delivered to us by email through our email
          provider. We retain submissions only as long as needed to follow up
          with you and to keep our membership records.
        </p>
      </LegalSection>

      <LegalSection heading="Your choices">
        <p>
          You can request that we delete the information you submitted at any
          time by emailing{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about this policy? Reach us at{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
