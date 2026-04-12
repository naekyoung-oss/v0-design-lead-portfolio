export const MONO = "'Courier New', monospace"

// Monospace section label: "— 01 —", "About", "Core Capabilities", etc.
export const sectionLabelSx = {
  fontFamily: MONO,
  fontSize: "11px",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "text.secondary",
} as const

// Outlined tag chip (category / discipline tags)
export const tagChipSx = {
  border: "1px solid",
  borderColor: "divider",
  px: 1.5,
  py: 0.5,
  fontFamily: MONO,
  fontSize: "10px",
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: "text.secondary",
} as const

// Filled capability chip
export const capabilityChipSx = {
  backgroundColor: "action.selected",
  px: 1.5,
  py: 0.5,
  fontFamily: MONO,
  fontSize: "10px",
  letterSpacing: "0.10em",
  textTransform: "uppercase" as const,
  color: "text.primary",
  fontWeight: 600,
} as const

// Row hover transition (accordion items, project rows, contact links)
export const hoverRowSx = {
  transition: "background-color 0.15s",
  "&:hover": { backgroundColor: "action.hover" },
} as const

// Standard body copy
export const bodyTextSx = {
  fontSize: { xs: "15px", md: "16px" },
  lineHeight: 1.75,
  color: "text.secondary",
} as const
