# Design System: Alabaster Sanctuary



## 1. Overview & Creative North Star

**The Creative North Star: "The Clinical Atelier"**



This design system transcends the standard "medical" interface by blending high-end editorial sophistication with clinical precision. We move away from the rigid, boxed-in layouts of traditional healthcare and toward an expansive, airy experience that feels like a private sanctuary.



The system utilizes **intentional asymmetry** and **expansive white space** to evoke a sense of calm and luxury. By prioritizing "breathability" over information density, we signal to the user that their time and well-being are the ultimate priorities. We reject the "template" look by layering soft, bone-toned surfaces over pure white backgrounds, creating a sense of architectural depth that feels curated, not coded.



---



## 2. Color Philosophy

The palette is a study in tonal restraint. We use high-contrast charcoal for authority and warm gold for guided actions, grounded by a foundation of "Alabaster" neutrals.



### The "No-Line" Rule

**Borders are strictly prohibited for sectioning.** To separate content, designers must use:

1. **Background Shifts:** Transitioning from `surface` (#fbf9f6) to `surface-container-low` (#f5f3f0).

2. **Vertical Space:** Utilizing the higher end of our Spacing Scale (e.g., `spacing-16` or `spacing-20`) to define conceptual boundaries.



### Surface Hierarchy & Nesting

Treat the UI as physical layers of fine vellum paper.

* **Base Layer:** `surface` (#fbf9f6) for the main canvas.

* **Secondary Layer:** `surface-container-lowest` (#ffffff) for elevated cards or interactive zones.

* **Depth Layer:** `surface-container-high` (#eae8e5) for inset components like search bars or footer areas.



### The "Glass & Gold" Rule

To add a "soul" to the digital interface:

* **Glassmorphism:** Use semi-transparent variants of `surface_container_lowest` with a `backdrop-blur` of 20px for navigation bars and floating modals.

* **Signature Gradients:** Primary CTAs should not be flat. Use a subtle linear gradient from `primary` (#745a27) to `primary_container` (#c9a96e) at a 135-degree angle to mimic the sheen of brushed gold.



---



## 3. Typography

Our typography is a dialogue between the heritage of the serif and the modern clarity of the sans-serif.



* **The Authority (Noto Serif):** Used for `display` and `headline` tiers. These should be set with slightly tighter letter-spacing (-0.02em) to feel like a premium fashion masthead.

* **The Precision (Inter):** Used for `title`, `body`, and `labels`. Inter provides a clinical legibility that balances the romanticism of the serif.

* **Tonal Contrast:** Use `on_surface` (#1b1c1a) for headlines to ensure maximum impact, and `secondary` (#5f5f59) for body text to reduce eye strain and create a softer, more "welcoming" reading experience.



---



## 4. Elevation & Depth

In this design system, shadows are felt, not seen.



* **Tonal Layering:** Avoid shadows for standard cards. Instead, place a `surface_container_lowest` (#ffffff) card on a `surface` (#fbf9f6) background. The 1% shift in value is enough for the sophisticated eye.

* **Ambient Shadows:** For floating elements (Modals/Poppers), use a multi-layered shadow:

* `box-shadow: 0 10px 40px rgba(27, 28, 26, 0.05);` (Using a tinted version of `on_surface`).

* **The Ghost Border:** If a form input requires a boundary, use `outline_variant` (#d0c5b5) at **20% opacity**. Never use a 100% opaque border.



---



## 5. Components



### Buttons (The Golden Touch)

* **Primary:** Gradient fill (Gold), white text, `ROUND_FOUR` (0.5rem) corner radius. High-tracking (0.05em) for labels.

* **Secondary:** Ghost style. No fill, `outline` color for text, and a `Ghost Border` that only appears on hover.

* **Tertiary:** Underlined text using `primary` color, no container.



### Input Fields

* **Style:** Minimalist. Only a bottom-border using `outline_variant` at 40% opacity.

* **State:** On focus, the bottom border transitions to `primary` (Gold) with a subtle 2px thickness.



### Cards & Lists

* **Rule:** No dividers.

* **Implementation:** Use `surface_container_low` (#f5f3f0) as a background for list items, with a `spacing-2` gap between them to let the background "bleed" through as the separator.



### Signature Component: The "Sanctuary" Gallery

* For treatment photos or aesthetic results, use asymmetric margins (e.g., left-aligned image with 15% right-side padding) and overlapping `headline-md` text to create an editorial, magazine-like feel.



---



## 6. Do’s and Don’ts



### Do:

* **Do** embrace extreme white space. If a section feels "empty," it’s likely working.

* **Do** use `Noto Serif` for numbers (e.g., pricing or step counters) to make them feel artisanal.

* **Do** use organic, high-resolution imagery with soft, natural lighting.



### Don’t:

* **Don't** use pure black (#000000). Always use `on_surface` (#1b1c1a).

* **Don't** use standard "Blue" for success states. Use a muted teal or rely on the `primary` gold for "completed" actions.

* **Don't** use 1px solid dividers to separate content. Use a background color shift or 32px+ of vertical space.

* **Don't** use sharp 90-degree corners. Always adhere to the `ROUND_FOUR` (0.5rem) soft radius to maintain the "welcoming" attribute.