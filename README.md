# The Watchmen — Marketing Site

The public marketing site for **The Watchmen** (brand: *Got Your 6* / GY6), a private, invite-only brotherhood for men in the Tampa Bay / St. Petersburg, FL area.

Its job: tell the story, convert prospective members to **Apply Now**, promote the iOS app to members, and capture contact-form messages. No paywall, no e-commerce — pure brand + lead capture.

> The private member experience lives in the separate iOS app at https://watchmen-six.vercel.app.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS** (dark theme tokens)
- **Cormorant Garamond** (display serif) + **Inter** (body) via `next/font`
- **framer-motion** for scroll reveals + the scroll-driven watch-assembly showcase
- **Resend** for contact + application email delivery
- **lucide-react** icons
- No CMS — content is typed objects in `src/content/*.ts`

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in your Resend key
npm run dev                  # http://localhost:3000
```

## Scripts

| Command            | Purpose                          |
| ------------------ | -------------------------------- |
| `npm run dev`      | Local dev server                 |
| `npm run build`    | Production build                 |
| `npm run start`    | Serve the production build       |
| `npm run lint`     | Next lint                        |
| `npm run typecheck`| `tsc --noEmit`                   |

## Editing content

All copy lives in typed objects — **no CMS**:

- `src/content/site.ts` — brand, nav, footer, contact details, social URLs
- `src/content/home.ts` — every home-page section
- `src/content/story.ts` — the `/story` long-form page

Editing copy = editing TypeScript. Faster than wiring a CMS for a small static brand site.

## Photography

Real photos are not wired in yet. `<PlaceholderImage>` renders a styled block showing the intended `alt` text so layout is correct before assets arrive. To swap in a real photo, replace the `<PlaceholderImage>` usage with `next/image`'s `<Image>` and add the host to `images.remotePatterns` in `next.config.mjs`.

## Email (Resend)

Contact and application forms post to Next.js **Server Actions** (`src/app/actions/`) that send via Resend.

Environment variables (see `.env.example`):

| Var                     | Example                              |
| ----------------------- | ------------------------------------ |
| `RESEND_API_KEY`        | `re_...`                             |
| `RESEND_FROM_EMAIL`     | `The Watchmen <noreply@gy6.me>`      |
| `RESEND_TO_EMAIL`       | `hello@thewatchmen.com`              |
| `RESEND_APPLY_CC_EMAIL` | `dustin@gy6.me`                      |
| `NEXT_PUBLIC_SITE_URL`  | `https://gy6.me`                     |

- Spam: hidden honeypot field + in-memory per-IP rate limit (5/hour) in `src/lib/rate-limit.ts`. Swap for `@upstash/ratelimit` if you need durability across serverless instances.
- If `RESEND_API_KEY` is absent, the build still succeeds; forms return a friendly "not configured" message.

## Deploy (Vercel)

1. Import the repo into Vercel.
2. Add the env vars above (Production + Preview).
3. Add domains `gy6.me` (apex) and `www.gy6.me`, then repoint DNS.
4. The OG image (`/opengraph-image`), favicon (`/icon`), `sitemap.xml`, and `robots.txt` are generated automatically.

## Still to wire (waiting on inputs)

- Real photography assets
- Instagram / Facebook / YouTube URLs (currently `#` placeholders in `site.ts`)
- App Store / TestFlight URL — the app CTA points to `/apply` until the app is approved
- Final confirmation of the Resend sending domain

---
Website design by [Skyway.Media](https://skyway.media).
