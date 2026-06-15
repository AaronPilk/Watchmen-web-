import type { Metadata } from "next";
import { inter, cormorant } from "@/lib/fonts";
import { site } from "@/content/site";
import { OrganizationJsonLd } from "@/components/JsonLd";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "The Watchmen — Brotherhood for Men Who Refuse to Do Life Alone",
    template: "%s — The Watchmen",
  },
  description:
    "The Watchmen is a private, invite-only brotherhood for men in Tampa Bay — built on real friendships, leadership, and legacy. Membership is free. Brotherhood is earned.",
  keywords: [
    "brotherhood",
    "Tampa Bay",
    "St. Petersburg",
    "men's community",
    "Got Your 6",
    "The Watchmen",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: "The Watchmen — Brotherhood for Men Who Refuse to Do Life Alone",
    description:
      "A private, invite-only brotherhood for men in Tampa Bay. Membership is free. Brotherhood is earned.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Watchmen",
    description:
      "A private, invite-only brotherhood for men in Tampa Bay. Membership is free. Brotherhood is earned.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}
