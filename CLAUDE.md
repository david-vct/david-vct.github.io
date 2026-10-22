# CLAUDE.md

See README.md for the layout of the code.

- Each styled page keeps its components, layout and stylesheet in its own folder. `src/cv-academic/` belongs to `/cv/academic/` only: never import its components or `styles.css` from another page, and never restyle another page to match it.
- Shared code carries no styling: `src/data/`, `src/assets/`, `src/lib/`, and `src/layouts/Base.astro` (metadata only, no CSS import).
- The home page (`src/pages/index.astro`) is the portfolio. Everything specific to it lives in `src/home/`, under the same rule as `src/cv-academic/`.
- Portfolio colours are defined only in `src/home/theme.css`: never hard-code a colour elsewhere in `src/home/`.
