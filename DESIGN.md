# DESIGN.md — Naekyoung Kwak Portfolio

Design specification for the portfolio site. Documents the visual language, component patterns, and layout conventions used throughout the UI.

---

## Aesthetic

**Swiss Brutalist** — strict grid, raw edges, no decorative radius, high contrast. Two modes that each have their own accent identity rather than being simple light/dark inversions.

---

## Color Tokens

### Dark mode (default)

| Token | Value | Usage |
|---|---|---|
| `background.default` | `#0a0a0a` | Page background |
| `background.paper` | `#111111` | Card / footer surface |
| `text.primary` | `#f0ede8` | Headlines, body |
| `text.secondary` | `#888888` | Labels, captions, meta |
| `primary.main` | `#e8ff3d` | Accent — borders, active states, icons |
| `primary.contrastText` | `#0a0a0a` | Text on primary background |
| `divider` | `#2a2a2a` | All border lines |
| `action.hover` | `rgba(232,255,61,0.06)` | Row / item hover |
| `action.selected` | `rgba(232,255,61,0.14)` | Selected / filled tag background |

### Light mode

| Token | Value | Usage |
|---|---|---|
| `background.default` | `#f0ede8` | Warm off-white page background |
| `background.paper` | `#ffffff` | Card / footer surface |
| `text.primary` | `#0a0a0a` | Headlines, body |
| `text.secondary` | `#555555` | Labels, captions, meta |
| `primary.main` | `#1a1aff` | Accent — borders, active states, icons |
| `primary.contrastText` | `#ffffff` | Text on primary background |
| `divider` | `#0a0a0a` | All border lines (heavier than dark) |
| `action.hover` | `rgba(26,26,255,0.05)` | Row / item hover |
| `action.selected` | `rgba(26,26,255,0.10)` | Selected / filled tag background |

---

## Typography

| Role | Typeface | Weight | Size | Letter-spacing |
|---|---|---|---|---|
| Display / h1 | Inter | 900 | `clamp(56px, 12vw, 120px)` | `-0.04em` |
| Section heading / h3 | Inter | 900 | `32px` → `48px` | `-0.03em` |
| Sub-heading / h4 | Inter | 800–900 | `28px` → `44px` | `-0.03em` |
| Company name in list | Inter | 800 | `18px` → `22px` | `-0.02em` |
| Project title | Inter | 800 | `22px` → `28px` | `-0.025em` |
| Body copy | Inter | 400 | `15px` → `18px` | default |
| All labels, tags, meta | `'Courier New', monospace` | 700 | `10px`–`12px` | `0.08em`–`0.18em` |
| Logo monogram (NK) | `'Courier New', monospace` | 700 | `18px` | `0.08em` |

All headings are `text-transform: uppercase`. Body copy is mixed case.

---

## Spacing & Layout

- **Max content width:** `1440px` (full-bleed sections, content constrained by padding)
- **Horizontal padding:** `px: { xs: 3, md: 6 }` → `24px` / `48px`
- **Header height:** `56px` (mobile) / `64px` (desktop)
- **Top offset for pages:** `59px` (mobile) / `67px` (desktop) to clear fixed header

---

## Border Radius

`0` everywhere — enforced globally in the MUI theme (`shape.borderRadius: 0`).

---

## Border Weights & Roles

| Weight | Role |
|---|---|
| `3px solid primary.main` | Header bottom, footer top, section headers |
| `2px solid` | Header nav active indicator (button outline), contact icon boxes, testimonial avatar boxes |
| `1px solid divider` | Row separators, grid dividers, tags, accordion items |

---

## Header

- Fixed, full-width AppBar, `elevation: 0`
- `3px solid primary.main` bottom border
- **Logo:** monospace "NK" in `primary.main`, links to `/`
- **Desktop nav:** uppercase monospace labels (`11px`, `0.14em` tracking). Active item: `primary.main` background fill, `primary.contrastText` text. Inactive: `text.secondary`, hover dims to `text.primary`.
- **Theme toggle:** square icon button, `2px solid primary.main`, `borderRadius: 0`
- **Mobile:** hamburger + theme toggle. Navigation opens as a top-anchored Drawer with `3px solid primary.main` bottom border.

---

## Section Header Pattern

Every page/section opens with a ruled header row:

```
[— 0N —]          [SECTION TITLE]
```

- Left: monospace section number label (`text.secondary`)
- Right: h3 uppercase headline (`fontWeight: 900`)
- Bottom border: `3px solid primary.main`

---

## Pages & Sections

### About (Home `/`)

1. **Hero** — meta row (`— 01 — Design Lead` / `London, UK · J.P. Morgan`) above the display name. Name renders in two lines: `NAEKYOUNG` (text.primary) and `KWAK.` (primary.main) with a monospace role subtitle aligned to baseline.
2. **Bio + Capabilities** — two-column grid (`lg: 1fr 1px 1fr`). Left: paragraph body. Right: 2-column tag grid with `1px` cell borders.
3. **Recommendations** — two-column grid. Each card: large accent `"` quote mark in `primary.main`, body quote, author row with square initial badge (`2px solid primary.main`).

### Experience `/experience`

- Full-width accordion list of roles
- Each row: `[00]` index (primary.main) · Company name (uppercase bold) · role title (mono) · period (right-aligned, mono)
- Expanded state: left column = period + location; right column = description, achievement list (left `3px solid primary.main` border), tag chips

### Selected Work `/projects`

- Full-width list, each item hover-highlightable
- `[00]` index · company label (mono) · project title (uppercase bold) · description · capability chips (filled, `action.selected`) · category tags (outlined, `divider`)
- `→` arrow in `primary.main` floats right on desktop

### Experiments `/experiments`

- Placeholder: heading + "Coming soon." in muted text

### Contact `/contact`

- Two-column grid (`lg: 1fr 1px 1fr`)
- Left: large CTA headline + body copy
- Right: stacked contact items — each with a `40×40` square icon box (`2px solid divider`), label (mono, secondary), value (semi-bold), and `→` arrow icon (primary.main)

---

## Footer

- `3px solid primary.main` top border, `background.paper` surface
- Two-column flex row: name (mono bold, uppercase) / role + year (mono, secondary, uppercase)

---

## Interaction Patterns

- **Row hover:** `backgroundColor: action.hover` with `transition: background-color 0.15s`
- **Accordion expand/collapse:** `+` / `−` icons in `primary.main` / `text.secondary`
- **Nav active fill:** full background swap to `primary.main`
- **No shadows** anywhere — elevation is expressed through borders only

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js (App Router) |
| Component library | MUI v5 |
| Styling | MUI `sx` prop (primary) + Tailwind CSS (utility fallback) |
| Typography | Inter (Google Fonts, weights 400/500/700/800/900) |
| Theming | Custom MUI theme via `createTheme`, toggled via React context |
| Icons | MUI Icons (`@mui/icons-material`) |
