# DEVI CONSULTANCY — Developer & Agent Guidelines

Guidelines for building, developing, and deploying the DEVI CONSULTANCY website.

---

## Architecture & Code Structure

- **Framework**: React 19 + TanStack Start (SSR enabled) with Vite & Nitro.
- **Components**:
  - `src/components/site/`: Main marketing pages, navigation, hero, services, projects, achievements, testimonials, contact, and footer.
  - `src/components/ui/`: Reusable UI elements (dialogs, buttons, tooltips).
  - `src/components/site/data.ts`: Central data source for all 10 business sections, contact information, navigation links, and project portfolios.
- **Styling**: Tailwind CSS v4 entry configured via `src/styles.css` with CSS variables for the color palette (`--navy`, `--brand`, `--navy-deep`).
- **Brand Colors**:
  - Navy: `#0b1c38` / `oklch(0.20 0.05 255)`
  - Brand Cyan: `#00a3e0` / `var(--brand)`

---

## Development Principles

1. **Data Integrity**: Preserve official company information, metrics, and text content across all 10 business sections.
2. **Responsive Design**: Ensure fluid responsiveness across all screens (12", 13", 14", 15", 16", 17" inches and mobile/tablet devices).
3. **Smooth Performance**: Keep animations hardware-accelerated via CSS transforms and native browser scrolling.
4. **Testing**: Keep routing and unit tests passing via `npm test`.
