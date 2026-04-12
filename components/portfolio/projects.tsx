"use client"

import { Box, Container, Typography } from "@mui/material"
import { MONO, tagChipSx, capabilityChipSx, hoverRowSx, bodyTextSx } from "./styles"
import { SectionHeader } from "./section-header"

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
    company: "J. P. Morgan and Chase",
    description:
      "Ran design discovery to frame a firm-wide problem around inconsistent settlement instruction formats. Facilitated stakeholder workshops across operations and technology, mapped end-to-end processing flows, and designed a standardised template grounded in ISO 20022 taxonomy — now published as an industry standard by FMSB.",
    capabilities: ["Design Discovery", "Stakeholder Facilitation", "Service Design", "Complex Flow Mapping"],
    tags: ["CIB", "Operational Tooling", "Industry Standards"],
  },
  {
    title: "WADU 2.0 & Manager Zone",
    company: "J. P. Morgan and Chase",
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
      "Designed identity verification and multi-factor authentication flows for mobile — including QR-code login, push authentication, biometrics, and secure codes. Ran usability testing across four countries, iterated on accessibility edge cases, and partnered with engineering on camera-based document capture.",
    capabilities: ["Identity & Auth Design", "Usability Testing", "Accessibility", "Cross-functional Collaboration"],
    tags: ["Security", "Mobile App", "Multi-market"],
  },
]

export function Projects() {
  return (
    <Box component="section" id="projects" sx={{ marginTop: { xs: "59px", md: "67px" } }}>
      <SectionHeader index="— 03 —" title="Selected Work" />

      <Container maxWidth={false} disableGutters>
        {projects.map((project, index) => {
          const num = String(index + 1).padStart(2, "0")
          return (
            <Box
              key={project.title}
              sx={{
                borderBottom: "1px solid",
                borderColor: "divider",
                ...hoverRowSx,
              }}
            >
              <Box
                sx={{
                  px: { xs: 3, md: 6 },
                  py: { xs: 4, md: 5 },
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "auto 1fr auto" },
                  gap: { xs: 3, md: 6 },
                  alignItems: "start",
                }}
              >
                {/* Number */}
                <Box sx={{ pt: { xs: 0, md: "6px" } }}>
                  <Typography sx={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.12em", color: "primary.main", lineHeight: 1 }}>
                    {num}
                  </Typography>
                </Box>

                {/* Main content */}
                <Box>
                  <Typography sx={{ fontFamily: MONO, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", color: "text.secondary", mb: 1 }}>
                    {project.company}
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontSize: { xs: "22px", md: "28px" }, fontWeight: 800, letterSpacing: "-0.025em", textTransform: "uppercase", color: "text.primary", mb: 2.5, lineHeight: 1.05 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography variant="body1" sx={{ ...bodyTextSx, mb: 3, maxWidth: "72ch" }}>
                    {project.description}
                  </Typography>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                    {project.capabilities.map((cap) => (
                      <Box key={cap} sx={capabilityChipSx}>{cap}</Box>
                    ))}
                  </Box>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {project.tags.map((tag) => (
                      <Box key={tag} sx={tagChipSx}>{tag}</Box>
                    ))}
                  </Box>
                </Box>

                {/* Arrow */}
                <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", pt: "6px" }}>
                  <Typography sx={{ fontFamily: MONO, fontSize: "20px", color: "primary.main", lineHeight: 1 }}>
                    →
                  </Typography>
                </Box>
              </Box>
            </Box>
          )
        })}
      </Container>
    </Box>
  )
}
