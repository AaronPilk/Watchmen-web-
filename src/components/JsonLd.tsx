import { site } from "@/content/site";

export function OrganizationJsonLd() {
  const sameAs = [site.social.instagram, site.social.facebook, site.social.youtube].filter(
    (url) => url && url !== "#"
  );

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    logo: `${site.url}/icon`,
    description: site.description,
    ...(sameAs.length ? { sameAs } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: "St. Petersburg",
      addressRegion: "FL",
      addressCountry: "US",
    },
    email: site.email,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
