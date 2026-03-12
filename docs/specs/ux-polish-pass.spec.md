# Feature: UX Polish Pass

## Overview

Comprehensive UX improvements to the Keep Ads landing page targeting three pillars: mobile experience (hero visual restoration, touch targets, responsive marquee), animation/motion refinement (active nav indicator, reduced-motion accessibility, form loading states), and navigation flow (back-to-top button, form success auto-scroll). These changes improve conversion potential for all visitors by ensuring trust signals are visible on mobile, interactions feel polished, and accessibility standards are met.

## Target Users

- **Mobile visitors** arriving from paid traffic campaigns (majority of traffic)
- **Desktop prospects** researching agencies
- **Accessibility users** with `prefers-reduced-motion` enabled

## User Value

- Mobile visitors currently lose hero trust signals (ROAS proof, leads count cards) entirely, reducing social proof at the critical first impression
- No loading feedback on form submission causes confusion and potential double-submits
- Missing reduced-motion support excludes motion-sensitive users
- No active nav indicator makes wayfinding difficult on a long single-page site

---

## Functional Requirements

### Mobile Experience

**FR-MOB-001**: Hero Visual on Mobile
While the viewport width is at or below 1023px, the system shall display the hero image (`Hero.webp`) and floating stat cards (ROAS, leads) stacked below the hero text content instead of hiding them.

**FR-MOB-002**: Mobile Hero Layout
While the viewport width is at or below 767px, the system shall render the hero image at full container width with floating cards repositioned inline (stacked vertically or in a 2-column mini-grid) below the image rather than using absolute positioning.

**FR-MOB-003**: Touch Target Minimum Size
The system shall ensure all interactive elements (buttons, links, form inputs, FAQ toggles, WhatsApp float) have a minimum touch target size of 44px height on all viewports.

**FR-MOB-004**: Responsive Marquee Speed
While the viewport width is at or below 767px, the system shall reduce the client logo marquee animation duration proportionally (e.g., 20s instead of 30s) to maintain consistent perceived scroll speed on smaller screens.

**FR-MOB-005**: Marquee Pause on Hover
While the user hovers over the client logo marquee on desktop, the system shall pause the scrolling animation so users can read client names.

### Animation & Motion

**FR-ANI-001**: Active Navigation Section Indicator
While the user scrolls through the page, the system shall highlight the nav link corresponding to the currently visible section using a green underline indicator (matching the existing hover style), tracked via IntersectionObserver.

**FR-ANI-002**: Active Indicator on Mobile Menu
While the mobile menu is open, the system shall also apply the active section indicator to the corresponding link in the slide-out menu.

**FR-ANI-003**: Reduced Motion Support
Where the user's OS has `prefers-reduced-motion: reduce` enabled, the system shall:
- Disable all CSS `@keyframes` animations (floating cards, marquee, grain)
- Remove `translateY` transforms from reveal animations (elements appear instantly with `opacity` fade only, duration reduced to 0.2s)
- Disable scroll progress bar animation (bar updates in discrete steps or is hidden)
- Keep functional transitions (FAQ expand/collapse, navbar scroll state) but reduce their duration to 0.15s

**FR-ANI-004**: Form Loading State
When the user submits the contact form, the system shall:
- Disable the submit button immediately
- Replace button text with a loading spinner and "Enviando..." label
- Prevent additional form submissions until response completes

**FR-ANI-005**: Form Success Auto-Scroll
When the form submission succeeds, the system shall:
- Swap to the success message state
- Smoothly scroll the success message into view if it is outside the current viewport

**FR-ANI-006**: Form Error Recovery
When the form submission fails (network error or non-2xx response), the system shall:
- Re-enable the submit button
- Restore original button text
- Display an inline error message: "Erro ao enviar. Tente novamente."

### Navigation & Flow

**FR-NAV-001**: Back-to-Top Button
While the user has scrolled past the hero section (scrollY > window.innerHeight), the system shall display a fixed "back to top" button in the bottom-right area of the viewport (above the WhatsApp float button).

**FR-NAV-002**: Back-to-Top Behavior
When the user clicks the back-to-top button, the system shall smooth-scroll to the top of the page.

**FR-NAV-003**: Back-to-Top Visibility Transition
When the back-to-top button appears or disappears, the system shall use a fade + translateY transition (0.3s) rather than an abrupt show/hide.

---

## Non-Functional Requirements

### Performance
- All changes must use vanilla CSS and JS only (no new libraries)
- No new DOM elements beyond: 1 back-to-top button element
- IntersectionObserver for active nav tracking must not cause jank (use `threshold: [0, 0.5]` with passive observation)
- Reduced-motion media query must be CSS-only (no JS detection needed for visual changes)
- Touch target sizing adjustments must not cause layout shifts (use `min-height` / padding, not explicit `height`)

### Accessibility
- Back-to-top button must have `aria-label="Voltar ao topo"`
- Active nav link must receive `aria-current="true"` attribute
- Loading spinner must be accompanied by `aria-busy="true"` on the form
- All new interactive elements must be keyboard-focusable with visible focus outlines
- Reduced-motion support is a **must-have**, not optional

### Compatibility
- Must work in Chrome, Safari, Firefox, Edge (latest 2 versions)
- `prefers-reduced-motion` is supported in all modern browsers
- IntersectionObserver is already used in the codebase (no polyfill needed)

---

## Acceptance Criteria

### AC-001: Hero Visible on Mobile
Given a viewport width of 375px (iPhone SE)
When the page loads
Then the hero image is visible below the hero text
And the floating stat cards (ROAS, leads) are visible below the image
And no horizontal overflow is introduced

### AC-002: Hero Visible on Tablet
Given a viewport width of 768px (iPad portrait)
When the page loads
Then the hero image and floating cards are visible in a layout appropriate for the width
And the hero section is not excessively tall

### AC-003: Touch Targets Adequate
Given any interactive element on the page
When viewed on a mobile viewport
Then the element's tappable area is at least 44px in height

### AC-004: Marquee Speed on Mobile
Given a viewport width of 375px
When the client logo marquee is animating
Then the perceived scroll speed is similar to the desktop experience (not too fast)

### AC-005: Active Nav on Scroll
Given the user is on desktop and scrolls to the "Metodologia" section
When the section is predominantly visible in the viewport
Then the "Metodologia" nav link displays a green underline
And no other nav link has the active underline

### AC-006: Active Nav on Section Change
Given the "Metodologia" nav link is active
When the user scrolls down to the "Resultados" section
Then the active indicator moves to "Resultados"
And "Metodologia" loses its active state

### AC-007: Active Nav in Mobile Menu
Given the user is on mobile and opens the hamburger menu
When the "Resultados" section is currently in view
Then the "Resultados" link in the mobile menu shows the active indicator

### AC-008: Reduced Motion Enabled
Given the user has `prefers-reduced-motion: reduce` enabled in OS settings
When the page loads
Then floating card animations are stopped
And the marquee is paused (or moves in discrete steps)
And reveal animations show elements immediately with a brief opacity fade
And no translateY motion is applied to reveals

### AC-009: Form Loading State
Given the user fills out all required fields
When they click "Enviar mensagem"
Then the button becomes disabled immediately
And the button text changes to a spinner + "Enviando..."
And clicking the button again has no effect

### AC-010: Form Success with Scroll
Given the form submission succeeds
When the success message renders
Then the page smoothly scrolls so the success message is visible in the viewport

### AC-011: Form Error Recovery
Given the form submission fails (network error)
When the error is detected
Then the submit button re-enables
And the original button text is restored
And an error message "Erro ao enviar. Tente novamente." appears below the form

### AC-012: Back-to-Top Appears
Given the user has scrolled past the hero section
When the scroll position exceeds the hero section height
Then a circular back-to-top button fades in at the bottom-right of the viewport
And it is positioned above the WhatsApp float button

### AC-013: Back-to-Top Works
Given the back-to-top button is visible
When the user clicks it
Then the page smoothly scrolls to the top
And the button fades out after reaching the top

### AC-014: Back-to-Top Keyboard Accessible
Given the back-to-top button is visible
When the user tabs to it and presses Enter
Then the page scrolls to the top
And the button has a visible focus ring

---

## Error Handling

| Error Condition | Behavior | User Message |
|-----------------|----------|--------------|
| Form submission network error | Re-enable button, show error | "Erro ao enviar. Tente novamente." |
| Form submission non-2xx response | Re-enable button, show error | "Erro ao enviar. Tente novamente." |
| IntersectionObserver not supported | Skip active nav feature silently | (none, graceful degradation) |
| `prefers-reduced-motion` not supported | Animations run normally | (none, browser limitation) |

---

## Implementation TODO

### CSS (`styles.css`)

- [ ] Remove `display: none` for `.hero-visual` at tablet/mobile breakpoints
- [ ] Add responsive hero layout: stack image + cards vertically on mobile
- [ ] Reposition floating cards to inline layout (grid or flex) at mobile breakpoint
- [ ] Size hero image responsively (`width: 100%; height: auto; border-radius`)
- [ ] Audit and increase `min-height`/`padding` on all buttons, links, FAQ toggles to 44px touch targets
- [ ] Add `@media (max-width: 767px)` rule for marquee animation duration (20s)
- [ ] Add marquee pause-on-hover: `.logo-marquee:hover` sets `animation-play-state: paused`
- [ ] Add `.nav-link.active` style: green underline matching hover state
- [ ] Add `@media (prefers-reduced-motion: reduce)` block:
  - Disable `@keyframes` (animation: none)
  - Set `.reveal` transitions to `opacity 0.2s` only (no transform)
  - Pause marquee animation
  - Reduce FAQ/navbar transition durations to 0.15s
- [ ] Style `.btn-loading` state: disabled appearance, spinner
- [ ] Style `.form-error-message` for submission failure feedback
- [ ] Style `.back-to-top` button: fixed position, circular, fade/slide transition
- [ ] Position `.back-to-top` above WhatsApp float (adjust `bottom` values)

### HTML (`index.html`)

- [ ] Add back-to-top button element after WhatsApp float: `<button class="back-to-top" id="backToTop" aria-label="Voltar ao topo">` with up-arrow SVG icon
- [ ] Add `<div class="form-error-message" role="alert">` after form for error state
- [ ] Ensure submit button has a `<span>` wrapper for text swap capability

### JavaScript (`script.js`)

- [ ] Add IntersectionObserver for section tracking (active nav):
  - Observe all sections with `id` matching nav `href` anchors
  - On intersect, add `.active` class to corresponding nav link, remove from others
  - Set `aria-current="true"` on active link
- [ ] Add form loading state logic:
  - On submit: disable button, swap text to spinner + "Enviando...", set `aria-busy="true"` on form
  - On success: show success state, scroll into view with `scrollIntoView({ behavior: 'smooth', block: 'center' })`
  - On error: re-enable button, restore text, show error message, remove `aria-busy`
- [ ] Add back-to-top button logic:
  - Show/hide based on scroll position vs hero section height
  - Add click handler for smooth scroll to top
  - Use `requestAnimationFrame` throttle (same pattern as navbar scroll)
- [ ] Add mobile marquee speed adjustment (if CSS-only approach insufficient)

### Testing

- [ ] Test hero layout on iPhone SE (375px), iPhone 14 (390px), iPad (768px), iPad landscape (1024px)
- [ ] Test touch targets: verify 44px minimum on all interactive elements via DevTools
- [ ] Test active nav: scroll through all sections, verify correct link highlights
- [ ] Test reduced motion: enable in OS settings, verify all animations are disabled/simplified
- [ ] Test form loading: submit form, verify button state change, test with slow network (DevTools throttle)
- [ ] Test form error: disconnect network, submit form, verify error message and recovery
- [ ] Test back-to-top: scroll past hero, verify button appears, click it, verify smooth scroll
- [ ] Test keyboard nav: tab to back-to-top button, press Enter, verify functionality
- [ ] Cross-browser: test in Chrome, Safari, Firefox, Edge

---

## Out of Scope

- Hash-based URL history management (updating `#section` in address bar on scroll)
- Scroll progress bar redesign (current implementation stays as-is)
- FAQ animation engine change (`max-height` pattern remains)
- Hero animation threshold tuning (current `0.12` threshold stays)
- Mobile menu keyboard trap / focus management (future a11y enhancement)
- Landscape mode specific layouts

## Resolved Decisions

- **Back-to-top button color**: Brand green (#1DB886) to match CTAs and accent system
- **Marquee hover behavior**: Pause on hover (desktop) for accessibility and usability
