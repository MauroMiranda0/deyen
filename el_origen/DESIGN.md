---
name: El Origen
colors:
  surface: '#131316'
  surface-dim: '#131316'
  surface-bright: '#39393c'
  surface-container-lowest: '#0e0e11'
  surface-container-low: '#1b1b1e'
  surface-container: '#1f1f22'
  surface-container-high: '#2a2a2d'
  surface-container-highest: '#353438'
  on-surface: '#e4e1e6'
  on-surface-variant: '#d1c5b8'
  inverse-surface: '#e4e1e6'
  inverse-on-surface: '#303033'
  outline: '#998f83'
  outline-variant: '#4d463c'
  surface-tint: '#e0c298'
  primary: '#e2c399'
  on-primary: '#402d0f'
  primary-container: '#c5a880'
  on-primary-container: '#513d1d'
  inverse-primary: '#725b38'
  secondary: '#e9c349'
  on-secondary: '#3c2f00'
  secondary-container: '#af8d11'
  on-secondary-container: '#342800'
  tertiary: '#c8c7ce'
  on-tertiary: '#2f3035'
  tertiary-container: '#acacb2'
  on-tertiary-container: '#3f4045'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#fedeb2'
  primary-fixed-dim: '#e0c298'
  on-primary-fixed: '#281800'
  on-primary-fixed-variant: '#584323'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#e3e2e8'
  tertiary-fixed-dim: '#c6c6cc'
  on-tertiary-fixed: '#1a1b20'
  on-tertiary-fixed-variant: '#46464c'
  background: '#131316'
  on-background: '#e4e1e6'
  surface-variant: '#353438'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: 0em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 22px
    fontWeight: '400'
    lineHeight: 30px
  body-lg:
    fontFamily: Literata
    fontSize: 19px
    fontWeight: '400'
    lineHeight: 32px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Literata
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0.005em
  body-sm:
    fontFamily: Literata
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.06em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.08em
  label-sm:
    fontFamily: Inter
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.12em
spacing:
  gutter: 1.5rem
  gutter-desktop: 2.5rem
  margin: 1.25rem
  margin-tablet: 2.5rem
  margin-desktop: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.75rem
  space-xl: 3rem
---

## Brand & Style

This design system crafts an immersive digital sanctum for prestigious literature, drawing directly from the heritage of historic publishing houses, archival folios, and high-end artisanal bookmaking. 

The aesthetic marries editorial restraint, luxury minimalism, and archival precision. Interfaces reject aggressive micro-animations, neon accents, or utilitarian SaaS sterility in favor of quiet authority, generous typographic cadence, and deliberate composition. The visual voice evokes tactile parchment, hot-stamped gold leaf, and bindery cloth, calibrated for the modern digital reader and literary connoisseur.

Interactions are measured, silent, and contemplative. The UI steps back to foreground the written word, treating each volume, essay, and manuscript with museum-grade reverence while delivering uncompromising clarity across e-commerce flows and long-form reading environments.

## Colors

The palette is rooted in archival depth:

- **Neutral / Obsidian Surface (`#0F0F12`)**: The dominant canvas background, reflecting dark bookcloth, inkwells, and shadowed study rooms. It provides an immersive, low-strain backdrop that highlights typography and book jackets.
- **Primary / Antique Bronze (`#C5A880`)**: Used for key interactions, metadata tags, focused borders, subtle dividing rules, and high-prestige actions.
- **Secondary / Gilded Gold (`#D4AF37`)**: Reserved strictly for singular moments of prestige—limited edition insignias, foil stamps, verified author marks, and active state highlights.
- **Tertiary / Slate Graphite (`#2A2B30`)**: Forms structural containers, inset borders, reader control rails, and neutral secondary surfaces.
- **Parchment Cream (`#F9F7F2`)**: Applied as the primary text color on dark surfaces to ensure high-legibility without harsh optical contrast. In reading modes, it can invert to serve as the long-form archival paper canvas with ink-slate text.
- **Muted Rules & Hairlines (`rgba(197, 168, 128, 0.2)`)**: Delimits sections and metadata lines with crisp, razor-thin borders reminiscent of vintage printing press register lines.

## Typography

The typographic hierarchy orchestrates a dual rhythm: the expressive, classical drama of serif typography paired with crisp, functional technical labeling.

- **Headlines & Titles (`Playfair Display`)**: Employs high-contrast transitions and editorial stature. Used across monograph titles, editorial section anchors, and dramatic pulls. Display styles lean into subtle negative tracking to tighten headlines into composed, architectural blocks.
- **Reading Body (`Literata`)**: Engineered specifically for continuous, fatigue-free long-form reading. Features generous x-height, organic stroke modulations, and relaxed leading (`1.6x` to `1.7x`) that allows prose to breathe like printed paper.
- **Labels, Navigation & Metadata (`Inter`)**: Set with increased letter-spacing (`0.06em` - `0.12em`) and uppercase styling for catalogs, ISBN tags, page counters, and table controls. This maintains high scannability and prevents functional UI from competing with literary text.

## Layout & Spacing

The layout adopts an asymmetrical, editorial broadsheet philosophy built on a 12-column grid. Generous negative space anchors compositions, treating the digital screen as an open salon table.

- **Breakpoints**: Mobile (up to 767px, 4 columns), Tablet (768px - 1199px, 8 columns), Desktop (1200px and above, 12 columns).
- **Desktop Grid**: Max-width container capped at 1440px for store and administration layouts, and constrained to a focused 720px single-column reading well for manuscripts and essays to maintain optimal line lengths (60–75 characters per line).
- **Margins & Gutters**: Ample margins (`margin-desktop: 4rem`) create a gallery-like framing, allowing book jackets and chapter headings to command focus. Gutters expand on large displays to establish clear breathing room between cover art, synopsis, and purchasing triggers.

## Elevation & Depth

This system avoids synthetic floating drop-shadows or high-diffusion blurs. Instead, depth is structured through architectural layering, planar framing, and foil-edged hairlines:

1. **Base Ground (`#0F0F12`)**: The foundational canvas.
2. **Raised Surfaces & Shelves (`#17171C`)**: Used for product showcase podiums, reading drawers, and CMS panels. Outlined with a 1px continuous border of `#2A2B30`.
3. **Foil Edge Effect**: Focused states, active book cards, and luxury modals replace ambient shadows with a crisp double hairline: an outer 1px border of `#2A2B30` paired with an inner 1px inset border of `rgba(197, 168, 128, 0.45)`.
4. **Overlay Modals & Overviews**: Solid `#0F0F12` layers with a 1px Antique Bronze (`#C5A880`) border. Backdrop dimming uses an opaque deep charcoal overlay (`rgba(10, 10, 12, 0.85)`), creating a shuttered gallery effect.

## Shapes

The shape grammar is purely sharp (`0`).

Inspired by crisp guillotine book trimming, hardbound cloth corners, and hot-metal typesetting slugs, all containers, buttons, cards, dialogs, and inputs feature strict 90-degree right angles.

- **Cards & Plates**: Square corners emphasize structural permanence and architectural weight.
- **Cover Visuals**: Book covers maintain sharp edges with a subtle 1px simulated linen-crease along the spine edge.
- **Buttons & Tags**: Exact rectangular boundaries, conveying purpose, dignity, and deliberate structure.

## Components

### Buttons & Actions
- **Primary Button**: Solid Antique Bronze (`#C5A880`) background with Obsidian (`#0F0F12`) text. Set in `Inter` semi-bold, all-caps, with `letter-spacing: 0.1em`. Hover transitions subtly lighten the tone to `#D4AF37` with no physical displacement.
- **Secondary Button**: Obsidian surface with a 1px `#C5A880` hairline border and Parchment Cream text.
- **Ghost Action**: Text-only, underlined with a 1px bronze rule offset by 4px.

### Book Showcase & Foil Accent Cards
- **Showcase Plinth**: High-relief editorial display featuring book cover art paired with catalog numbers (e.g., `VOL. 04 / ED. I`).
- **Product & Anthology Cards**: Dark slate surface (`#17171C`) framed with a 1px `#2A2B30` border. On hover, the border seamlessly transitions to Antique Bronze (`#C5A880`) while revealing a discreet gold leaf corner tick (`#D4AF37`) at the top right.

### Checkout Flow (PayPal & Estafeta Integrations)
- **Courier Selection (Estafeta)**: Rectangular radio cards displaying delivery windows, tracking tier badges, and Estafeta service markers framed in dark graphite hairlines.
- **Payment Tiers**: Clean, distraction-free container holding single-click PayPal integration modules alongside custom luxury card inputs. Input fields feature quiet background fills (`#17171C`) with 1px borders that glow into Antique Bronze upon focus.

### In-Browser Reader Controls
- **Reading Canopy**: Minimal floating head and foot rails that automatically fade during reading activity. Contains typographic control toggles: Parchment (`#F9F7F2`) vs. Obsidian (`#0F0F12`) palette switchers, font scaling (A- / A+), and chapter jump popovers.
- **Progress Spine**: A 2px high hairline tracker in muted bronze running continuously along the top viewport edge.

### Editorial CMS Admin Dashboard
- **Content Studio**: A distraction-free markdown and rich-text editing environment framed by compact slate toolbars.
- **Inventory & Order Ledger**: Tabular data set in `Inter` label tokens, separated by horizontal rules (`rgba(197, 168, 128, 0.15)`), providing clear status badges for manuscript proofs, print editions, and dispatch fulfillment.