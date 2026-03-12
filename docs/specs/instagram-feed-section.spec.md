# Feature: Instagram Feed Section

## Overview

A new section displaying the 6 most recent Instagram posts from @keepads.performance in a visually appealing grid, placed between the Cases/Resultados section and the Team section. The feed uses static/hardcoded images (downloaded manually from Instagram) with no API calls, no third-party services, and zero runtime dependencies. The section adapts the visual style from the Zen project: Instagram-gradient profile circle, @username header, 3x2 image grid with hover effects, and a "Ver mais no Instagram" CTA. This serves as social proof, showing the agency's active content presence and driving Instagram followers.

## Target Users

- **All site visitors** who scroll past the results section and want to see the agency's real-world content
- **Prospects evaluating the agency** who check social presence as a trust signal

## User Value

- Reinforces credibility by showing active, professional social media presence
- Drives Instagram follower growth from site traffic
- Provides visual variety between the text-heavy Cases section and the Team section
- Zero LGPD concerns since no third-party scripts or cookies are loaded

---

## Functional Requirements

### Section Layout

**FR-IG-001**: Section Placement
The system shall render an Instagram feed section between the Cases (#resultados) section and the Team (#time) section, with a white (#FFFFFF) background.

**FR-IG-002**: Section Header
The system shall display a section header with:
- A section tag labeled "Instagram"
- An H2 heading: "Siga a Keep Ads no Instagram"
- The standard green underline decoration under the H2

**FR-IG-003**: Profile Header Row
The system shall display a profile header row containing:
- A circular avatar with Instagram gradient border (`linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)`) wrapping the Keep Ads K icon
- The username "@keepads.performance" as a link to the Instagram profile
- A tagline below the username: "Performance & estrategia em trafego pago"
- A "Seguir no Instagram" button (outline style with Instagram icon) aligned to the right on desktop, below on mobile

**FR-IG-004**: Post Grid
The system shall display 6 Instagram post images in a responsive grid:
- Desktop: 3 columns x 2 rows
- Mobile (767px and below): 2 columns x 3 rows
- Minimal gap between images (2px) for the classic Instagram grid look
- Each image renders as a square (1:1 aspect ratio) using `padding-bottom: 100%` + `object-fit: cover`

**FR-IG-005**: Post Images
The system shall load post images from local files stored in an `instagram/` directory within the project. Images shall be manually downloaded from Instagram and named descriptively (e.g., `post-1.jpg`, `post-2.jpg`, etc.).

**FR-IG-006**: CTA Button
The system shall display a centered "Ver mais no Instagram" button below the grid, styled as an outline button with the Instagram SVG icon, linking to `https://www.instagram.com/keepads.performance/` in a new tab.

### Interactions

**FR-IG-007**: Post Hover Effect
When the user hovers over a post image on desktop, the system shall:
- Scale the image slightly (`scale(1.05)`)
- Dim the image brightness (`brightness(0.75)`)
- Show a centered Instagram icon overlay with fade-in transition

**FR-IG-008**: Post Click
When the user clicks any post image, the system shall open the Keep Ads Instagram profile (`https://www.instagram.com/keepads.performance/`) in a new browser tab.

**FR-IG-009**: Scroll Reveal Animation
The system shall apply the existing `.reveal` scroll animation (fade-in + translateY) to:
- The section header
- The profile header row
- Each grid item (with staggered delays: `.reveal-delay-1` through `.reveal-delay-3`)
- The CTA button

### Data & Maintenance

**FR-IG-010**: Static Data Architecture
The system shall store all Instagram content as static HTML elements and local image files. No API calls, no JavaScript data fetching, and no third-party embeds shall be used.

**FR-IG-011**: Manual Update Process
When the user wants to update the feed, they shall:
1. Download new images from Instagram
2. Replace files in the `instagram/` directory
3. Update the `alt` attributes in the HTML if captions change

---

## Non-Functional Requirements

### Performance
- Images shall use `loading="lazy"` to defer offscreen loading
- Images shall be optimized (WebP preferred, JPEG acceptable) and no larger than 800x800px
- No external scripts or stylesheets shall be loaded for this section
- Total section image payload should be under 500KB (6 images at ~80KB each)

### Accessibility
- All post images shall have descriptive `alt` text
- The Instagram profile link shall have `rel="noopener noreferrer"` for security
- Hover effects are decorative and shall not be required for functionality
- The grid shall maintain logical reading order for screen readers

### Responsiveness
- Grid transitions from 3 columns (desktop) to 2 columns (mobile at 767px)
- Profile header row stacks vertically on mobile
- CTA button is full-width on mobile

### Maintainability
- Image directory (`instagram/`) is clearly separated from other assets
- HTML structure is self-documenting with descriptive class names
- No JavaScript required for the section (CSS-only hover effects)

---

## Acceptance Criteria

### AC-001: Section Renders in Correct Position
Given the page has loaded
When the user scrolls past the Cases section
Then the Instagram section appears before the Team section
And the section has a white background

### AC-002: Profile Header Displays Correctly
Given the Instagram section is visible
When the user views the profile header
Then they see a circular K icon with Instagram gradient border
And the username "@keepads.performance" links to the Instagram profile
And the tagline text is visible below the username
And a "Seguir no Instagram" outline button is visible

### AC-003: Grid Shows 6 Images
Given a desktop viewport (1024px+)
When the user views the Instagram grid
Then 6 images are displayed in a 3-column x 2-row grid
And each image is square (1:1 aspect ratio)
And images are separated by minimal gaps (2px)

### AC-004: Mobile Grid Layout
Given a mobile viewport (375px)
When the user views the Instagram grid
Then images are displayed in a 2-column x 3-row grid
And each image maintains its 1:1 aspect ratio

### AC-005: Hover Effect Works
Given the user is on desktop
When they hover over a post image
Then the image scales up slightly and dims
And an Instagram icon overlay fades in at center

### AC-006: Post Click Opens Instagram
Given any post image in the grid
When the user clicks on it
Then the Instagram profile opens in a new tab
And the current page remains open

### AC-007: CTA Button Works
Given the "Ver mais no Instagram" button is visible
When the user clicks it
Then the Instagram profile opens in a new tab

### AC-008: Lazy Loading Works
Given the Instagram section is below the fold
When the page initially loads
Then the Instagram images are NOT loaded until the user scrolls near the section

### AC-009: Scroll Animations Fire
Given the user scrolls toward the Instagram section
When the section enters the viewport
Then the header, profile row, grid items, and CTA all animate in with staggered delays

### AC-010: Section Renders on Mobile Without Overflow
Given a viewport width of 375px
When the Instagram section renders
Then no horizontal scrollbar appears
And all content fits within the viewport width

---

## Error Handling

| Error Condition | Behavior | User Message |
|-----------------|----------|--------------|
| Image file missing/broken | Show alt text, no broken image icon | (alt text displayed) |
| Image fails to load | CSS background fallback (light gray) | (none, graceful degradation) |
| Instagram profile URL unreachable | Link still opens in new tab; user sees Instagram's error page | (handled by Instagram) |

---

## Implementation TODO

### Assets

- [ ] Create `instagram/` directory in project root
- [ ] Download 6 recent Instagram posts from @keepads.performance
- [ ] Optimize images: resize to 800x800px max, convert to WebP or compress JPEG
- [ ] Name files descriptively: `post-1.webp` through `post-6.webp`

### HTML (`index.html`)

- [ ] Add new `<section class="instagram" id="instagram">` between Cases (#resultados) and Team (#time)
- [ ] Add section header with `.section-tag` ("Instagram") and H2 ("Siga a Keep Ads no Instagram")
- [ ] Add profile header row: Instagram gradient circle + K icon, @username link, tagline, follow button
- [ ] Add 6-image grid with `<a>` wrappers linking to Instagram profile
- [ ] Each grid item: `<a>` with `<img>` inside + hover overlay `<div>` with Instagram SVG icon
- [ ] Add CTA button: "Ver mais no Instagram" with Instagram SVG icon
- [ ] Apply `.reveal` classes with staggered delays to all section elements

### CSS (`styles.css`)

- [ ] Add `.instagram` section styles: white background, standard section padding
- [ ] Add `.ig-profile-header`: flex row layout, responsive stacking
- [ ] Add `.ig-avatar`: 56px circle with Instagram gradient border (2px), inner circle for K icon
- [ ] Add `.ig-username`: link style matching nav links
- [ ] Add `.ig-follow-btn`: outline button with border, Instagram icon, hover state
- [ ] Add `.ig-grid`: CSS Grid, 3 columns desktop, 2 columns mobile, 2px gap
- [ ] Add `.ig-post`: square aspect ratio (padding-bottom: 100%), relative positioning, overflow hidden
- [ ] Add `.ig-post img`: absolute fill, object-fit cover
- [ ] Add `.ig-post:hover img`: scale(1.05), brightness(0.75), transition 0.5s
- [ ] Add `.ig-post-overlay`: centered Instagram icon, opacity 0 by default, opacity 1 on hover
- [ ] Add `.ig-cta`: centered outline button, matching follow button style
- [ ] Add tablet/mobile breakpoints for profile header stacking, grid column change, CTA full-width
- [ ] Add `@media (prefers-reduced-motion: reduce)` rules: disable hover scale, disable reveal transforms

### JavaScript (`script.js`)

- [ ] No JavaScript needed for this section (hover effects are CSS-only)
- [ ] Existing IntersectionObserver for `.reveal` will automatically handle scroll animations

### Testing

- [ ] Test grid layout on desktop (1440px, 1024px), tablet (768px), mobile (375px, 390px)
- [ ] Test hover effects on desktop browsers (Chrome, Safari, Firefox, Edge)
- [ ] Verify lazy loading: check Network tab, confirm images load only near viewport
- [ ] Verify scroll animations fire with proper stagger
- [ ] Verify all links open Instagram in new tab
- [ ] Test with `prefers-reduced-motion: reduce` enabled
- [ ] Verify no horizontal overflow on mobile
- [ ] Validate HTML: check all `alt` texts, `rel` attributes, semantic structure

---

## Out of Scope

- Dynamic/live Instagram feed fetching (no API integration)
- Displaying post captions, likes, or comments
- Reels/video support (images only)
- Lightbox/modal for post previews
- Instagram API token management
- Follower/post count stats display

## Resolved Decisions

- **Data source**: Static hardcoded images (same approach as Zen project), no API
- **Visual style**: Adapted from Zen project (Instagram gradient avatar, grid with hover overlay)
- **Background**: White (#FFFFFF) to contrast with Cases section's off-white
- **Post click behavior**: Opens Instagram profile in new tab (not individual post URL)
- **Grid layout**: 3x2 desktop, 2x3 mobile
- **Image directory**: `instagram/` in project root
- **No third-party dependencies**: Zero LGPD/cookie concerns
