import { Box, Typography } from "@mui/material"
import { sectionLabelSx } from "./styles"

interface SectionHeaderProps {
  index: string
  title: string
}

export function SectionHeader({ index, title }: SectionHeaderProps) {
  return (
    <Box
      sx={{
        px: { xs: 3, md: 6 },
        py: { xs: 3, md: 4 },
        borderBottom: "3px solid",
        borderColor: "primary.main",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography sx={sectionLabelSx}>{index}</Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "32px", md: "48px" },
          fontWeight: 900,
          letterSpacing: "-0.03em",
          textTransform: "uppercase",
          color: "text.primary",
        }}
      >
        {title}
      </Typography>
    </Box>
  )
}
