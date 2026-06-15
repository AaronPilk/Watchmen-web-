/**
 * Site-wide content: nav, brand, footer, contact details.
 * Editing copy = editing this file. No CMS by design.
 */

export const site = {
  name: "The Watchmen",
  tagline: "Got Your Six.",
  description:
    "A private, invite-only brotherhood for men in Tampa Bay who refuse to do life alone.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://gy6.me",
  location: "St. Petersburg, Florida",
  email: "hello@thewatchmen.com",
  appUrl: "https://watchmen-six.vercel.app",
  scripture: {
    ref: "Ecclesiastes 4:10",
    text: "If either of them falls down, one can help the other up.",
  },
  social: {
    // Placeholders — replace with real URLs when provided.
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
  credit: {
    label: "Skyway.Media",
    url: "https://skyway.media",
  },
} as const;

// Top nav links (in order). Hash links smooth-scroll to home sections.
export const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Membership", href: "/#membership" },
  { label: "The Story", href: "/#story" },
  { label: "App", href: "/#app" },
  { label: "Contact", href: "/#contact" },
] as const;

export const footerColumns = {
  explore: {
    title: "Explore",
    links: [
      { label: "About", href: "/#about" },
      { label: "Experiences", href: "/#experiences" },
      { label: "The Story", href: "/story" },
      { label: "Membership", href: "/#membership" },
    ],
  },
  connect: {
    title: "Connect",
    links: [
      { label: "App", href: "/#app" },
      { label: "Contact", href: "/#contact" },
      { label: "Apply Now", href: "/apply" },
    ],
  },
} as const;
