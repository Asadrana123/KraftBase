# Collectedge — Marketing Landing Page

A responsive React landing page for **Collectedge**, a debt-collection / lending SaaS product. Built with Vite for fast dev and builds, with hand-coded SVG charts and gauges instead of a charting library.

## Tech Stack

- **React 19** + **Vite 8**
- **@phosphor-icons/react** for iconography
- Plain CSS (component-scoped `.css` files, CSS variables for design tokens)
- **Oxlint** for linting

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

### Other scripts

| Command           | Description                     |
| ------------------ | -------------------------------- |
| `npm run dev`       | Start the dev server with HMR   |
| `npm run build`     | Production build to `dist/`     |
| `npm run preview`   | Preview the production build    |
| `npm run lint`      | Run Oxlint                      |

## Project Structure

```
src/
├── App.jsx                 # Page composition (assembles all sections)
├── main.jsx                # React entry point
├── index.css                # Global reset + design tokens import
├── styles/tokens.css        # CSS variable design tokens
├── data/                     # Static content (copy, stats, nav links, etc.)
└── components/
    ├── Navbar/               # Sticky pill navbar with mobile menu
    ├── Hero/                 # Hero section, headline, CTAs, floating cards
    ├── Features/             # Two-column "For Lenders" feature grid
    ├── DataInsights/         # "For Agencies" data/analytics section
    ├── Agencies/             # Agency partner section
    ├── Testimonials/         # Customer testimonials
    ├── Footer/                # Site footer
    └── common/                # Shared building blocks
        ├── Avatar.jsx         # Photo or initials avatar
        ├── Button.jsx         # Primary/outline button with arrow icon
        ├── BarChart.jsx       # Lightweight SVG/CSS bar chart
        └── GaugeRing.jsx      # Animated circular progress gauge
```

## Key Components

- **`Hero`** — Centered headline with an animated cursor/underline accent, avatar stack with social proof, and four floating cards (`FloatingCards.jsx`) that showcase product data (operational health gauge, AFL services stats, interactions chart, contact card). Floating cards are hidden below `992px`.
- **`Features`** — Two-column layout (divided by a vertical rule) pairing feature copy with a visual: a stacked "contacts" list (`ContactsVisual`) and a hub-and-node diagram (`NodesVisual`), both in `FeatureVisuals.jsx`.
- **`DataInsights`** — Reuses the `Features` grid layout to present an analytics dashboard card (`AnalyticsVisual`: bar chart + gauge) and an agency showcase card (`AgencyVisual`) from `DataVisuals.jsx`.
- **`BarChart`** / **`GaugeRing`** — Reusable, prop-driven data visuals (no charting library) built with plain SVG/CSS and subtle mount animations.

## Styling Notes

- Design tokens (colors, spacing, font sizes, easing) live in `styles/tokens.css` and are consumed via `var(--…)` across every component's CSS file.
- Each component folder has a co-located `.css` file — no CSS-in-JS.
- Motion is kept subtle (staggered fade/slide-ins, hover lifts, a floating animation on the hero cards) and is disabled site-wide under `prefers-reduced-motion: reduce`.
- Layout is responsive with breakpoints at `1240px`, `1080px`, `992px`, `900px`, and `640px`; floating decorative cards are hidden on tablet/mobile in favor of a simpler stacked layout.

## Data

Section copy and static content (nav links, hero stats, feature card text, testimonials, etc.) are kept separate from markup in `src/data/*.js`, so copy can be edited without touching component code.