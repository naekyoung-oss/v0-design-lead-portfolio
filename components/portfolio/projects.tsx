"use client"

import { Box, Container, Typography, Chip } from "@mui/material"

interface Project {
  title: string
  company: string
  description: string
  capabilities: string[]
  tags: string[]
}

const projects: Project[] = [
  {
    title: "SSI Standardisation",
    company: "J.P. Morgan",
    description:
      "Ran design discovery to frame a firm-wide problem around inconsistent settlement instruction formats. Facilitated stakeholder workshops across operations and technology, mapped end-to-end processing flows, and designed a standardised template grounded in ISO 20022 taxonomy -- now published as an industry standard by FMSB.",
    capabilities: ["Design Discovery", "Stakeholder Facilitation", "Service Design", "Complex Flow Mapping"],
    tags: ["CIB", "Operational Tooling", "Industry Standards"],
  },
  {
    title: "WADU 2.0 & Manager Zone",
    company: "J.P. Morgan",
    description:
      "Led conceptual design for two firm-wide tools: a workforce activity data utility and an HR management dashboard. Conducted problem-framing sessions with business stakeholders, developed concept prototypes, and presented experimental design approaches to senior leadership.",
    capabilities: ["Concept Design", "Problem Framing", "Rapid Prototyping", "Executive Storytelling"],
    tags: ["CIB", "Workforce Analytics", "HR Tooling"],
  },
  {
    title: "Mobile Banking Registration",
    company: "HSBC",
    description:
      "Owned end-to-end design of the new digital banking registration experience for web and mobile. Conducted user research across India, Malaysia, Singapore, and the UK, created interaction flows that met diverse regulatory requirements per market, and built a pattern library adopted by regional teams.",
    capabilities: ["End-to-end Ownership", "Regulatory UX", "Cross-market Research", "Pattern Libraries"],
    tags: ["Mobile Banking", "Global Launch", "Onboarding"],
  },
  {
    title: "Online ID Verification & Authentication",
    company: "HSBC",
    description:
      "Designed identity verification and multi-factor authentication flows for mobile -- including QR-code login, push authentication, biometrics, and secure codes. Ran usability testing across four countries, iterated on accessibility edge cases, and partnered with engineering on camera-based document capture.",
    capabilities: ["Identity & Auth Design", "Usability Testing", "Accessibility", "Cross-functional Collaboration"],
    tags: ["Security", "Mobile App", "Multi-market"],
  },
]

export function Projects() {
  return (
    <Box
      component="section"
      id="projects"
      sx={{
        marginTop: "80px",
        paddingX: 3,
        paddingY: { xs: 6, lg: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ marginBottom: 6 }}>
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
            Selected Projects
          </Typography>
          <Box
            sx={{
              height: "1px",
              width: "48px",
              backgroundColor: "primary.main",
            }}
          />
        </Box>

        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 4 }}>
          {projects.map((project) => (
            <Box
              key={project.title}
              sx={{
                border: "1px solid",
                borderColor: "divider",
                borderRadius: 3,
                padding: 4,
                transition: "box-shadow 0.2s",
                "&:hover": { boxShadow: 3 },
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "text.secondary",
                  marginBottom: 0.5,
                }}
              >
                {project.company}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "serif",
                  fontSize: { xs: "20px", md: "22px" },
                  letterSpacing: "-0.01em",
                  marginBottom: 2,
                }}
              >
                {project.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", lg: "18px" },
                  lineHeight: 1.8,
                  color: "text.secondary",
                  marginBottom: 3,
                }}
              >
                {project.description}
              </Typography>

              <Typography
                variant="caption"
                sx={{
                  display: "block",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "text.secondary",
                  marginBottom: 1,
                }}
              >
                Skills Applied
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, marginBottom: 2 }}>
                {project.capabilities.map((cap) => (
                  <Chip
                    key={cap}
                    label={cap}
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

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {project.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant="outlined"
                    sx={{ borderRadius: "8px", color: "text.secondary" }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
