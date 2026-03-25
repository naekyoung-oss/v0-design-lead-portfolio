"use client"

import { Box, Container, Grid, Typography, Chip } from "@mui/material"

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
      {/* Hero section */}
      <Box
        component="section"
        sx={{
          marginTop: "80px",
          paddingX: 2,
          paddingTop: 6,
          paddingBottom: 2,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="flex-end">
            <Grid item xs={12} lg={6}>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  marginBottom: 1,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "text.secondary",
                }}
              >
                About
              </Typography>
              <Box
                sx={{
                  height: "1px",
                  width: "48px",
                  backgroundColor: "primary.main",
                  marginBottom: 3,
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "serif",
                  fontSize: { xs: "32px", md: "44px", lg: "60px" },
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginTop: 2,
                  marginBottom: 2,
                }}
              >
                Naekyoung Kwak
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* About section (merged from about.tsx) */}
      <Box
        component="section"
        id="about"
        sx={{
          paddingX: 3,
          paddingY: { xs: 4, lg: 6 },
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8} columns={5}>
            {/* Left: bio text */}
            <Grid item xs={5} lg={3}>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "16px", lg: "18px" },
                    lineHeight: 1.8,
                    color: "text.secondary",
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
            </Grid>

            {/* Right: capabilities */}
            <Grid item xs={5} lg={2}>
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  marginBottom: 2,
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                  color: "text.secondary",
                }}
              >
                Core Capabilities
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {capabilities.map((skill) => (
                  <Chip
                    key={skill}
                    label={skill}
                    size="small"
                    sx={{
                      borderRadius: "8px",
                      backgroundColor: "action.selected",
                      color: "text.primary",
                      fontWeight: 500,
                      "&:hover": { backgroundColor: "action.focus" },
                    }}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}
