# Nordstar Construction — Website Template

Premium one-page homepage template for **Nordstar Construction**, a custom residential and commercial general contractor in **British Columbia**. Built for internal demos and iteration before final content and CMS integration.

## Tech stack

| Layer | Choice |
|--------|--------|
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| UI | React 19 |
| Styling | Tailwind CSS v4 |
| Motion | [`motion`](https://motion.dev/) (subtle scroll + load animations) |
| Images | `next/image` + remote [Unsplash](https://unsplash.com/) URLs (swap later) |

## Project structure

```
app/
  layout.tsx          # Root layout, fonts, metadata
  page.tsx            # Composes sections (single scroll page)
  globals.css         # Design tokens, smooth scroll, base styles

components/
  layout/
    Header.tsx        # Sticky nav, mobile menu
    Footer.tsx
  sections/
    HeroSection.tsx
    AboutSection.tsx
    ServicesSection.tsx
    ProjectsSection.tsx
    PartnersSection.tsx
    ContactSection.tsx
  ui/
    Button.tsx
    Container.tsx
    Reveal.tsx        # Motion wrapper (fade-up, in-view)
    Section.tsx       # Vertical rhythm wrapper

data/
  site.ts             # Nav, company, footer, contact placeholders
  services.ts         # Service cards (title, copy, image URL)
  projects.ts         # Gallery items + category (residential | commercial)
  partners.ts         # Partner strip (names; replace with logo assets later)
```

## Page sections (order)

1. **Header** — Fixed top, logo, anchor links, hamburger on small screens  
2. **Hero** — Full-viewport image, headline, subhead, primary + secondary CTAs  
3. **About** — Editorial split: statement + body copy (transparency, trust, craft)  
4. **Services** — Image-forward panels (residential and commercial)  
5. **Projects** — Filterable grid (Residential / Commercial / All), hover captions  
6. **Partners** — “Trusted by” strip (placeholder labels; swap for SVG/PNG logos)  
7. **Contact** — Dark band, CTA, optional form + contact placeholders  
8. **Footer** — Links, copyright, contact snippet  

## Design direction

- **Tone:** High-end, minimal, architectural — not generic “template yellow hard hat.”  
- **Palette:** White, off-white (`stone-50`), charcoal (`#1c1917` / stone-900), black accents.  
- **Accent:** Teal + emerald hints (inspired by logo geometry); use sparingly on logo mark, links, focus.  
- **Type:** `DM Sans` (UI) + `Instrument Serif` (display headlines) via `next/font/google`.  
- **Motion:** Fade-up, slight stagger, `once: true` — no heavy parallax.  

## Content & images

- **Copy** in `data/*.ts` is **placeholder** for stakeholder review.  
- **Photos** are **Unsplash** URLs in data files — suitable for demos; replace with owned photography or licensed assets for production.  
- **Attribution:** Unsplash photos are used under the [Unsplash License](https://unsplash.com/license); attribute in production if your policy requires it.

### Where stock images are defined

| Area | File | Field(s) |
|------|------|----------|
| Hero background | `data/site.ts` | `site.hero.imageSrc` |
| Service panels (×2) | `data/services.ts` | each `imageSrc` |
| Project masonry (×9) | `data/projects.ts` | each `imageSrc` |

`next.config.ts` allows `images.unsplash.com` for `next/image` optimization. To add another host, extend `images.remotePatterns`.  

### Swapping images later

1. **Option A — Local files:** Add files under `public/images/...` and set `src` to `/images/...` in data (use `string` paths; `next/image` works with local paths).  
2. **Option B — CMS:** Replace static imports or fetch in server components; keep the same shape (`{ src, alt, width?, height? }`).  
3. **Option C — Another CDN:** Add the host to `images.remotePatterns` in `next.config.ts`.  

### Partner logos

`data/partners.ts` currently uses **text placeholders** (ICBA, BC Housing, etc.). Replace with:

```tsx
// Example future shape
{ name: "ICBA", logoSrc: "/images/partners/icba.svg", href: "https://..." }
```

and render `<Image src={logoSrc} alt={name} ... />` in `PartnersSection`.

## Scripts

```bash
npm run dev    # Local development
npm run build  # Production build
npm run start  # Run production server
npm run lint   # ESLint
```

## Next steps (not in this template)

- [ ] Final brand copy and legal review  
- [ ] Real project gallery + case studies  
- [ ] High-res logo (SVG) and favicon  
- [ ] Contact form backend (e.g. API route + email or CRM)  
- [ ] CMS (Sanity, Contentful, etc.) mapping to `data/*` shapes  
- [ ] Analytics, SEO meta, Open Graph images  
- [ ] `sitemap.xml` / `robots.txt` if multi-page later  

## License

Private project for Nordstar Construction; template code is yours to modify.
