# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page for **Keep Ads**, a paid traffic (tráfego pago) agency based in Volta Redonda/RJ, Brazil. The site targets local businesses and e-commerces seeking performance marketing services. All content is in Brazilian Portuguese.

## Architecture

Static one-page site with three core files:
- `index.html` — semantic HTML5 with 11 sections (hero, benefits, audience, methodology, cases, differentials, team, FAQ, contact form, WhatsApp float, footer)
- `styles.css` — light mode design system using CSS custom properties, responsive at 1023px (tablet) and 767px (mobile)
- `script.js` — vanilla JS using IntersectionObserver for scroll animations, FAQ accordion, stat counters, form validation, smooth scroll

No build tools, no frameworks, no package manager. Open `index.html` directly in a browser to preview.

## Design System

- **Palette**: white background (#FFFFFF), warm off-white sections (#FAFBFC), brand green accent (#1DB886) with glow variants, dark team section (#0F1419)
- **Typography**: Baloo 2 (display/headings, 700-800 weight, matches logo personality) + Source Sans 3 (body, 400-600 weight) via Google Fonts. Local font files also available in `Fontes/`
- **Motion**: custom cubic-bezier curves (ease-out for deceleration, ease-spring for elastic bounce), IntersectionObserver reveal animations, floating card animations, CSS marquee for client logos
- **Layout**: 1140px max container, CSS Grid for section layouts, clamp-based responsive sizing

## Key Brand Details

- Agency: **Keep Ads**
- Founder: **Kelven Pimenta** (Head de Performance)
- Location: Volta Redonda/RJ
- Positioning: "engenharia de vendas" (sales engineering) applied to paid traffic

## Asset Directories

- `Logos/` — horizontal and vertical logo variants (PNG)
- `Icone - K/` — K icon variants (PNG)
- `fotos/` — hero image (Hero.webp), team/founder photos, background images
- `clientes/` — client logos (Vincol, Royal Supermercados, Superaço, Zen, Mória Móveis, Galpão, Povão)
- `Fontes/` — local font files (Baloo, Source Sans 3) — bundled but not currently used (Google Fonts preferred)

## Specification Documents

- `PRD.md` — product requirements (personas, scope, functional requirements, success metrics)
- `design.md` — visual design spec (grid, palette, typography, components, responsive behavior)
- `COPYWRITE.md` — full copywriting content for all 9 sections
- `LP KEEPADS.md` — competitive reference analysis with screenshots of other agency landing pages

## Integration Points (Commented in Code)

- **Meta Pixel**: `fbq()` initialization placeholder in HTML head
- **Google Analytics 4**: `gtag()` configuration placeholder in HTML head
- **Form webhook**: `fetch()` to `YOUR_WEBHOOK_URL` placeholder in script.js
- **WhatsApp**: `wa.me` link with pre-filled message

## Conventions

- CSS uses `--` prefixed custom properties organized into: core palette, accent system, text hierarchy, layout tokens, motion specs
- Scroll-triggered animations use `.reveal` class toggled to `.reveal.visible` via IntersectionObserver
- FAQ uses max-height animation pattern with `.active` class and `aria-expanded` attributes
- Navbar gets `.scrolled` class via scroll listener with requestAnimationFrame throttling
- Form validation iterates `[required]` fields; success state swaps form visibility
