"use client"

import { Box, Container, Typography } from "@mui/material"
import { MONO, sectionLabelSx } from "./styles"

export function About() {
  const capabilities = [
    "AI Enabled Ways of Working",
    "Vibe Coding",
    "Rapid Experimentation",
    "Concept Development",
    "Information Architecture",
    "Design Strategy",
    "Cross-functional Collaboration",
    "Agile & Lean Design Process",
  ]

  return (
    <>
      {/* Hero */}
      <Box
        component="section"
        sx={{
          marginTop: { xs: "59px", md: "67px" },
          borderBottom: "2px solid",
          borderColor: "divider",
        }}
      >
        <Container maxWidth={false} disableGutters>
          {/* Meta row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: { xs: 3, md: 6 },
              py: 2,
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          >
            <Typography sx={sectionLabelSx}>
              — 01 — Design Lead
            </Typography>
            <Typography
              sx={{
                fontFamily: MONO,
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "text.secondary",
              }}
            >
              London, UK · J. P. Morgan and Chase
            </Typography>
          </Box>

          {/* Name display */}
          <Box
            sx={{
              px: { xs: 3, md: 6 },
              pt: { xs: 4, md: 6 },
              pb: { xs: 4, md: 6 },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "clamp(56px, 12vw, 120px)" },
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 0.9,
                textTransform: "uppercase",
                color: "text.primary",
                mb: 0,
              }}
            >
              Naekyoung
            </Typography>
            <Box sx={{ display: "flex", alignItems: "flex-end", gap: { xs: 2, md: 4 } }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "clamp(56px, 12vw, 120px)" },
                  fontWeight: 900,
                  letterSpacing: "-0.04em",
                  lineHeight: 0.9,
                  textTransform: "uppercase",
                  color: "primary.main",
                }}
              >
                Kwak.
              </Typography>
              <Typography
                sx={{
                  fontFamily: MONO,
                  fontSize: { xs: "11px", md: "12px" },
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "text.secondary",
                  pb: { xs: 1, md: 2 },
                  mb: 0,
                }}
              >
                VP Lead
                <br />
                Experience Designer
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* About section */}
      <Box
        component="section"
        id="about"
        sx={{ borderBottom: "2px solid", borderColor: "divider" }}
      >
        <Container maxWidth={false} disableGutters>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", lg: "1fr 1px 1fr" },
              minHeight: { lg: "280px" },
            }}
          >
            {/* Bio */}
            <Box
              sx={{
                px: { xs: 3, md: 6 },
                py: { xs: 5, md: 6 },
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography sx={{ ...sectionLabelSx, mb: 2 }}>
                About
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", md: "18px" },
                  lineHeight: 1.75,
                  color: "text.secondary",
                  maxWidth: "60ch",
                }}
              >
                I am passionate about building innovative solutions that elevate
                the customer and user experience. I currently lead a small (but
                impactful) design team shaping the future state of a firmwide data
                ecosystem. We are actively defining new ways of working through AI
                enablement and running practical experiments—continuously learning
                and improving wherever possible.
              </Typography>
            </Box>

            {/* Divider */}
            <Box sx={{ backgroundColor: "divider", display: { xs: "none", lg: "block" } }} />

            {/* Capabilities */}
            <Box
              sx={{
                px: { xs: 3, md: 6 },
                py: { xs: 5, md: 6 },
                borderTop: { xs: "1px solid", lg: "none" },
                borderColor: "divider",
              }}
            >
              <Typography sx={{ ...sectionLabelSx, mb: 3 }}>
                Core Capabilities
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 0,
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                {capabilities.map((skill, i) => (
                  <Box
                    key={skill}
                    sx={{
                      px: 2,
                      py: 1.5,
                      borderRight: i % 2 === 0 ? "1px solid" : "none",
                      borderBottom:
                        i < capabilities.length - 2 ? "1px solid" : "none",
                      borderColor: "divider",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "text.primary",
                      lineHeight: 1.4,
                    }}
                  >
                    {skill}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}
