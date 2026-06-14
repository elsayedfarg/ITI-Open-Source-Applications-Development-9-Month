---
name: Clinical Precision
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#c0c1ff'
  on-secondary: '#1000a9'
  secondary-container: '#3131c0'
  on-secondary-container: '#b0b2ff'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#e29100'
  on-tertiary-container: '#523200'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 0.25rem
  sm: 0.5rem
  md: 1rem
  lg: 1.5rem
  xl: 2.5rem
  gutter: 1.5rem
  margin-mobile: 1rem
  margin-desktop: 2rem
---

## Brand & Style
The design system is built for high-stakes healthcare environments that demand efficiency without the sterile coldness of traditional medical software. The brand personality is **sophisticated, trustworthy, and calm**. It balances the rigor of clinical data with a modern SaaS aesthetic, prioritizing clarity and ease of use for practitioners and administrators.

The visual style is **Corporate / Modern** with a focus on **Tonal Minimalism**. It utilizes a deep charcoal and slate palette to reduce eye strain during long shifts, creating a focused "dark mode" environment. High-contrast typography and vibrant emerald accents guide the eye toward critical actions and statuses, ensuring the interface feels like a high-performance tool rather than a generic utility.

## Colors
The palette shifts away from "Hospital Blue" in favor of a professional **Dark Slate and Charcoal** foundation.

*   **Primary (Emerald):** Used exclusively for success states, primary actions, and "confirmed" appointment statuses. It represents growth and health.
*   **Secondary (Indigo):** Used for interactive elements like links, selection states, and secondary buttons to provide a professional, tech-forward contrast.
*   **Neutral (Slate/Charcoal):** A range of deep grays defines the hierarchy. The background is a solid `#0F172A`, with surfaces stepping up to `#1E293B`.
*   **Accents:** A warm Amber is reserved for "Pending" or "Urgent" status indicators to ensure they are noticed without triggering the alarm of a red error state.

## Typography
We use **Manrope** for its excellent legibility and modern, balanced proportions. It feels technical yet approachable. For data-heavy elements like timestamps, ID numbers, and status badges, we introduce **JetBrains Mono** to provide a distinct "data" feel that is easy to scan in tabular formats.

*   **Headlines:** Use tight letter-spacing and heavy weights to create strong visual anchors for page titles.
*   **Body:** Standardized on a 16px base for comfort.
*   **Labels:** All labels and "Meta" information use the monospaced font to differentiate static descriptors from dynamic patient data.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid** model. Navigation and sidebars are fixed-width to ensure tool consistency, while the main content area (dashboards/tables) is fluid to maximize data density.

*   **Grid:** A 12-column grid is used for desktop dashboards.
*   **Spacing Rhythm:** Based on a 4px baseline. Components use `1rem` (16px) as the standard internal padding.
*   **Breakpoints:**
    *   *Mobile (<768px):* Single column, 1rem side margins, hidden sidebars behind a hamburger menu.
    *   *Tablet (768px - 1280px):* Narrowed sidebar (icon only), 2-column dashboard cards.
    *   *Desktop (>1280px):* Full sidebar, multi-column layouts, 2rem side margins.

## Elevation & Depth
In this dark-themed design system, depth is communicated through **Tonal Layering** and **Subtle Inner Glows** rather than heavy drop shadows.

*   **Level 0 (Background):** `#0F172A` - The base canvas.
*   **Level 1 (Surface):** `#1E293B` - Cards, table headers, and sidebar.
*   **Level 2 (Popovers/Modals):** `#334155` - Used for elements that sit above the UI. These receive a soft, 20% opacity black shadow with a 1px top border of `#475569` to simulate a "rim light."
*   **Interactive State:** Elements like buttons use a 1px solid border at 10% opacity of the primary color to create a "glass-like" edge.

## Shapes
We use a **Soft** shape language. This ensures the UI feels modern and accessible without becoming overly "bubbly" or "toy-like," which would undermine the clinical seriousness of the product.

*   **Components:** Buttons and input fields use `0.25rem` (4px).
*   **Containers:** Dashboard cards and modals use `0.75rem` (12px).
*   **Badges:** Status badges use a full pill-shape to distinguish them from interactive buttons.

## Components
Consistent patterns for clinical data entry and review:

*   **Buttons:** Primary buttons are solid Emerald with white text. Secondary buttons are Ghost-style with Indigo outlines. Action buttons are compact with a 40px minimum touch target.
*   **Tables:** The core of the system. Use a "Zebra" striping approach but with tonal shifts (`#1E293B` vs `#0F172A`). Headers use the Monospaced label font. Rows have a hover state that highlights in `#334155`.
*   **Status Badges:** Subtle background tints (e.g., Emerald at 10% opacity) with high-contrast text. Used for "Confirmed," "Checked-in," or "Cancelled."
*   **Input Fields:** Dark backgrounds (`#0F172A`) with 1px Slate borders. On focus, the border transitions to Indigo with a subtle outer glow.
*   **Cards:** Dashboard widgets use a 1px border (`#334155`) instead of a shadow. This keeps the interface crisp and high-contrast.
*   **Calendar/Timeline:** A custom component showing daily appointments. Uses vertical blocks where the height represents duration and the color-coded left border represents the department or urgency.