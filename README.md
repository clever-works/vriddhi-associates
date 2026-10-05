# Vriddhi Associates — Website

A static, animated, accessible website for **Vriddhi Associates** (Real Estate | Branding & Marketing | Business Solutions), built with **Next.js 14 (App Router)**, **Tailwind CSS**, and **Framer Motion**.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build the static site

```bash
npm run build
```

This project is configured for static export (`output: "export"`). The static site is generated into `out/` — upload that folder to any static host (Netlify, Vercel, GitHub Pages, hostinger, etc).

> Building requires internet access on first run so Next.js can fetch the Google Fonts (Plus Jakarta Sans, Inter) used in `app/layout.tsx`.

## What's inside

- **Hero** — animated ascending "growth line" echoing the arrow in the logo, staggered headline reveal.
- **About** — company story, vision, mission, and core values.
- **Services** — three pillar cards (Real Estate, Branding & Marketing, Business Solutions), each with its full sub-service list.
- **Testimonials** — an animated marquee of client quotes with star ratings, for social proof.
- **Why Choose Us** — animated checklist grid.
- **Process** — the 4-step engagement process with an animated connecting line.
- **Industries We Support** — an animated chip cloud.
- **Contact** — an accessible form (Name, Mobile, Email, Service Required, Message), wired to Netlify Forms.
- **Floating contact widget** — a persistent WhatsApp + Call button in the corner, plus a "back to top" button that appears once you've scrolled.

## SEO

- Full metadata in `app/layout.tsx`: title template, meta description, keywords, canonical URL, Open Graph tags, and a Twitter card image.
- `app/sitemap.ts` and `app/robots.ts` generate a real `sitemap.xml` and `robots.txt` at build time (both work with static export).
- `components/json-ld.tsx` injects `ProfessionalService` structured data (schema.org) so Google can show rich results — services offered, location, and contact info.
- Generated icons in `public/`: `favicon.ico`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`, and `og-image.jpg` (1200×630 social share card), all derived from your logo.

**Before going live**, update the placeholder domain `https://www.vriddhiassociates.com` in `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, and `components/json-ld.tsx` to your real domain, and fill in the real phone number in `components/json-ld.tsx` and `components/floating-contact.tsx`.

## Accessibility

- Skip-to-content link, semantic landmarks (`header`, `nav`, `main`, `footer`).
- Visible keyboard focus rings on every interactive element.
- `prefers-reduced-motion` respected globally.
- Form fields have associated `<label>`s.
- Navy/gold/cream palette meets WCAG AA contrast for body text.

## Design tokens

| Role | Value |
|---|---|
| Background (dark) | `#14213D` navy |
| Background (light) | `#FAFAF7` cream |
| Accent | `#C9A227` gold |
| Muted text | `#5B6472` slate |
| Display type | Plus Jakarta Sans |
| Body type | Inter |

## Before going live

- Replace the placeholder phone number `+91 XXXXX XXXXX` in `components/contact.tsx` and `components/footer.tsx` with the real number.
- Deploy to Netlify — the contact form is already wired for **Netlify Forms** (see below), no extra account or API key needed.
- The logo lives at `public/logo.png`. Swap in a transparent-background version if you have one, for cleaner placement on the dark footer.

## Contact form (Netlify Forms)

The form in `components/contact.tsx` is pre-configured for Netlify Forms:

- `data-netlify="true"` on the `<form>` tells Netlify's build bot to register it
- a hidden `form-name` input matches the form's `name="contact"`
- a hidden honeypot field (`bot-field`) filters out basic spam bots
- on submit, the form POSTs to `/` and shows a success or error state without a page reload

**Setup — nothing to configure ahead of time:**

1. Push this project to GitHub/GitLab/Bitbucket (or drag-and-drop the `out/` folder) and connect it as a new site on [netlify.com](https://app.netlify.com).
2. Build command: `npm run build`. Publish directory: `out`.
3. Deploy. Netlify scans the built HTML during deploy and automatically detects the `contact` form — no dashboard setup required.
4. Submit a test message from the live site. It'll show up under **Site configuration → Forms** in your Netlify dashboard.
5. To get an email each time someone submits: in the dashboard go to **Forms → Form notifications → Add notification → Email notification**, and enter the address that should receive them (e.g. `info@vriddhiassociates.com`).

Free tier: 100 submissions/month per site, no separate sign-up beyond your Netlify account.

If you ever move hosting off Netlify, swap the `handleSubmit` function for a Formspree or EmailJS endpoint — same `fetch` pattern, different URL.
