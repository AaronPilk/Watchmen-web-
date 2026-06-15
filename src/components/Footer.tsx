import Link from "next/link";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { site, footerColumns } from "@/content/site";
import { Wordmark } from "./Wordmark";

const socials = [
  { label: "Instagram", href: site.social.instagram, Icon: Instagram },
  { label: "Facebook", href: site.social.facebook, Icon: Facebook },
  { label: "YouTube", href: site.social.youtube, Icon: Youtube },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-bone/10 bg-ink-800">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Wordmark showTagline />
            <p className="mt-6 max-w-xs text-sm text-bone-faint">
              A private brotherhood in Tampa Bay for men who refuse to do life
              alone.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href !== "#" ? "_blank" : undefined}
                  rel={href !== "#" ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-bone/15 text-bone-muted transition-colors hover:border-brass hover:text-brass"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <FooterColumn
            title={footerColumns.explore.title}
            links={footerColumns.explore.links}
          />

          {/* Connect */}
          <FooterColumn
            title={footerColumns.connect.title}
            links={footerColumns.connect.links}
          />

          {/* Scripture */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brass">
              Scripture
            </h3>
            <p className="font-serif text-lg italic leading-relaxed text-bone/80">
              “{site.scripture.text}”
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.15em] text-bone-faint">
              {site.scripture.ref}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-bone/10 pt-8 text-xs text-bone-faint sm:flex-row">
          <p>© {year} The Watchman. All Rights Reserved.</p>
          <p>
            Website Design by{" "}
            <a
              href={site.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone-muted transition-colors hover:text-brass"
            >
              {site.credit.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brass">
        {title}
      </h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-bone-muted transition-colors hover:text-brass"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
