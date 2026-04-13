"use client"

import { Box, Container, Typography } from "@mui/material"

const MONO = "'Courier New', monospace"

export function Experiments() {
  return (
    <Box
      component="section"
      id="experiments"
      sx={{ marginTop: { xs: "59px", md: "67px" } }}
    >
      {/* Section header */}
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
        <Typography
          sx={{
            fontFamily: MONO,
            fontSize: "11px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "text.secondary",
          }}
        >
          — 04 —
        </Typography>
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
          Experiments
        </Typography>
      </Box>

      <Container maxWidth={false} disableGutters>
        <Box
          sx={{
            px: { xs: 3, md: 6 },
            py: { xs: 6, md: 8 },
            minHeight: "40vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: 800,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "text.primary",
              mb: 2,
            }}
          >
            Coming Soon
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "15px", md: "16px" },
              lineHeight: 1.75,
              color: "text.secondary",
              maxWidth: "48ch",
            }}
          >
            A collection of design explorations, prototypes, and experimental projects will be shared here.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
