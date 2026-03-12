# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for **Keep Ads**, a paid traffic (tráfego pago) agency based in Volta Redonda/RJ, Brazil. The site targets local businesses and e-commerces seeking performance marketing services. All content is in Brazilian Portuguese.

## Architecture

Next.js 16 app with Tailwind CSS v4, Framer Motion, and static export. Deployed via Vercel.

- `src/app/` — Next.js App Router (layout, page, globals.css)
- `src/components/sections/` — page sections (Hero, Benefits, Audience, Method, ClientLogos, Differentials, Team, Backstage, Testimonials, FAQ, Contact, Instagram)
- `src/components/layout/` — layout components (Navbar, Footer, ScrollProgress, BackToTop, WhatsAppFloat)
- `src/components/ui/` — reusable UI (Button, SectionHeader)
- `src/components/animations/` — animation utilities (RevealOnScroll, StaggerContainer, CounterAnimation)
- `src/lib/constants.ts` — shared constants
- `public/` — static assets (clients, photos, logos, fonts, icons, instagram)

### Key Dependencies

- **Next.js 16** with Turbopack
- **Tailwind CSS v4** with `@theme inline` for design tokens
- **Framer Motion** for scroll animations and stagger reveals
- **Lucide React** for icons
- **clsx + tailwind-merge** for className composition

### Commands

- `pnpm dev` — start dev server
- `pnpm build` — production build (static export)
- `pnpm start` — serve production build

## Design System

Defined in `src/app/globals.css` via `@theme inline`:

- **Palette**: white surface (#FFFFFF), warm sections (#F8FAFB), brand green (#1DB886) with light/dark/glow variants, dark surface (#0B1015)
- **Typography**: Baloo 2 (display/headings, 700-800 weight) + Source Sans 3 (body, 400-600 weight). Local font files in `public/fonts/`
- **Motion**: ease-out `cubic-bezier(0.22, 1, 0.36, 1)`, ease-spring `cubic-bezier(0.34, 1.56, 0.64, 1)`. Framer Motion stagger reveals with IntersectionObserver viewport triggers.
- **Layout**: 1140px max container, Tailwind responsive at md (768px) and lg (1024px), clamp-based sizing

## Key Brand Details

- Agency: **Keep Ads**
- Founder: **Kelven Pimenta** (Head de Performance)
- Location: Volta Redonda/RJ
- Positioning: "engenharia de vendas" (sales engineering) applied to paid traffic

## Asset Directories

All assets live in `public/`:
- `public/logos/` — horizontal and vertical logo variants (PNG)
- `public/icons/` — K icon variants (PNG)
- `public/photos/` — hero image (Hero.webp), team/founder photos
- `public/clients/` — 15 client logos (WebP/PNG)
- `public/fonts/` — Baloo 2 (TTF) + Source Sans 3 (WOFF2)
- `public/instagram/` — Instagram feed images

## Documentation

Project docs live in `docs/`:
- `docs/PRD.md` — product requirements
- `docs/design.md` — visual design spec
- `docs/COPYWRITE.md` — copywriting content
- `docs/LP KEEPADS.md` — competitive reference analysis
- `docs/specs/` — feature specifications

## Integration Points

- **WhatsApp**: `wa.me` link with pre-filled message (WhatsAppFloat component)
- **Form webhook**: placeholder URL in Contact component
- **Meta Pixel / GA4**: to be configured in layout.tsx
