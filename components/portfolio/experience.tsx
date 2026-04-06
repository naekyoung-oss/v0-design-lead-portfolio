"use client"

import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import RemoveIcon from "@mui/icons-material/Remove"
import { useState } from "react"

const MONO = "'Courier New', monospace"

interface Role {
  title: string
  company: string
  period: string
  location: string
  description: string
  achievements?: string[]
  tags?: string[]
}

const roles: Role[] = [
  {
    title: "VP Lead Experience Designer, CIB XD Core",
    company: "J.P. Morgan",
    period: "2023 — Now",
    location: "London, UK",
    description:
      "Lead design discovery and experimental projects for CIB and firm-wide business stakeholders. Focus on proposing innovative approaches tailored to the specific problems stakeholders face.",
    achievements: [
      "Standing Settlement Instructions (SSIs) Standardisation — Created and tested a standardised SSIs template published by Financial Markets Standards Board (FMSB)",
      "Workforce Activity Data Utility (WADU 2.0) Conceptual Designs",
      "Manager Zone (a firmwide HR tool powered by WADU) Conceptual Designs",
    ],
    tags: ["Design Strategy", "Financial Services", "Innovation"],
  },
  {
    title: "VP Lead Product Designer, CIB Payments",
    company: "J.P. Morgan",
    period: "2022 — 2023",
    location: "London, UK",
    description:
      "Led product design for CIB Payments, delivering user-centred design solutions for complex financial payment systems.",
    tags: ["Product Design", "Payments", "Enterprise UX"],
  },
  {
    title: "Product Design Manager / Design Lead",
    company: "HSBC",
    period: "2020 — 2022",
    location: "London, UK",
    description:
      "Oversaw iterative design processes, maintained quality and consistency. Managed and mentored designers across China, India, Poland, and the UK.",
    achievements: [
      "5.1 million customers registered or migrated to new mobile banking app — average registration time reduced from 15 mins to 2.7 mins",
      "Online ID verification: average time reduced from 1–2 days (at branch) to less than 5 mins (online)",
      "Led user authentication experience design using QR codes, push auth, biometrics, and secure codes",
    ],
    tags: ["Design Management", "Mobile Banking", "Identity Verification"],
  },
  {
    title: "User Experience Manager",
    company: "Tungsten Network",
    period: "2012 — 2020",
    location: "London, UK",
    description:
      "Led and managed the redesign of a web client portal, incorporating a new design system. Directed collaboration with an external design agency and managed contract designers.",
    achievements: [
      "Client portal transformation with new information architecture, branding, and design system",
      "Customer onboarding conversion rate increased from 21% to 64% within three months",
    ],
    tags: ["Design Systems", "Portal Design", "Onboarding"],
  },
  {
    title: "User Research Manager (Lifestyle Entertainment)",
    company: "Philips Consumer Lifestyle",
    period: "2010 — 2012",
    location: "Hong Kong SAR",
    description:
      "Led comprehensive research for SimplyShare, wake-up alarms, music players, and car infotainment systems. Provided key insights for product vision and strategy.",
    tags: ["User Research", "Consumer Electronics", "Product Strategy"],
  },
  {
    title: "UX Design Specialist / Senior UX Designer",
    company: "Samsung Electronics",
    period: "2007 — 2009",
    location: "Seoul, South Korea",
    description:
      "Selected as UX Specialist for Samsung's first multidisciplinary innovation lab. Led localisation projects for TouchWiz 1.0, Samsung's first mobile touch interface.",
    tags: ["Mobile UX", "Innovation Lab", "Localisation"],
  },
  {
    title: "User Experience Designer",
    company: "SK Telecom",
    period: "2003 — 2006",
    location: "Seoul, South Korea",
    description:
      "Designed operating system and native app user interfaces for SKY-brand mobile devices and Digital Multimedia Broadcasting (DMB) devices.",
    tags: ["Mobile OS", "UI Design", "Telecommunications"],
  },
]

function RoleAccordion({
  role,
  index,
}: {
  role: Role
  index: number
}) {
  const [expanded, setExpanded] = useState(false)
  const num = String(index + 1).padStart(2, "0")

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      disableGutters
      sx={{
        backgroundColor: "transparent",
        border: "none",
        borderBottom: "1px solid",
        borderColor: "divider",
        "&:before": { display: "none" },
        "&.Mui-expanded": { margin: 0 },
        "&:hover": { backgroundColor: "action.hover" },
        transition: "background-color 0.15s",
      }}
    >
      <AccordionSummary
        expandIcon={
          expanded ? (
            <RemoveIcon sx={{ fontSize: 18, color: "primary.main" }} />
          ) : (
            <AddIcon sx={{ fontSize: 18, color: "text.secondary" }} />
          )
        }
        sx={{
          px: { xs: 3, md: 6 },
          py: { xs: 2, md: 3 },
          "& .MuiAccordionSummary-content": { margin: 0, width: "100%" },
          "& .MuiAccordionSummary-expandIconWrapper": { ml: 2 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "auto 1fr auto" },
            gap: { xs: 1, sm: 3 },
            alignItems: "center",
            width: "100%",
          }}
        >
          {/* Index */}
          <Typography
            sx={{
              fontFamily: MONO,
              fontSize: "11px",
              letterSpacing: "0.12em",
              color: "primary.main",
              lineHeight: 1,
            }}
          >
            {num}
          </Typography>

          {/* Company + Title */}
          <Box>
            <Typography
              sx={{
                fontSize: { xs: "18px", md: "22px" },
                fontWeight: 800,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                textTransform: "uppercase",
                color: "text.primary",
              }}
            >
              {role.company}
            </Typography>
            <Typography
              sx={{
                fontFamily: MONO,
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "text.secondary",
                mt: 0.5,
              }}
            >
              {role.title}
            </Typography>
          </Box>

          {/* Period */}
          <Typography
            sx={{
              fontFamily: MONO,
              fontSize: "12px",
              letterSpacing: "0.08em",
              color: "text.secondary",
              whiteSpace: "nowrap",
              display: { xs: "none", sm: "block" },
            }}
          >
            {role.period}
          </Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          px: { xs: 3, md: 6 },
          pb: { xs: 3, md: 4 },
          pt: 0,
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "auto 1fr" },
            gap: { xs: 3, md: 0 },
          }}
        >
          {/* Left: location + period */}
          <Box
            sx={{
              pt: { xs: 0, md: 3 },
              pr: { md: 6 },
              minWidth: { md: "180px" },
            }}
          >
            <Typography
              sx={{
                fontFamily: MONO,
                fontSize: "11px",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "primary.main",
                mb: 0.5,
              }}
            >
              {role.period}
            </Typography>
            <Typography
              sx={{
                fontFamily: MONO,
                fontSize: "11px",
                letterSpacing: "0.08em",
                color: "text.secondary",
              }}
            >
              {role.location}
            </Typography>
          </Box>

          {/* Right: description + achievements + tags */}
          <Box sx={{ pt: { xs: 0, md: 3 } }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "15px", md: "16px" },
                lineHeight: 1.75,
                color: "text.secondary",
                mb: 3,
              }}
            >
              {role.description}
            </Typography>

            {role.achievements && role.achievements.length > 0 && (
              <Box sx={{ mb: 3 }}>
                {role.achievements.map((achievement, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      gap: 2,
                      mb: 1.5,
                      borderLeft: "3px solid",
                      borderColor: "primary.main",
                      pl: 2,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "14px",
                        lineHeight: 1.65,
                        color: "text.primary",
                      }}
                    >
                      {achievement}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}

            {role.tags && role.tags.length > 0 && (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {role.tags.map((tag) => (
                  <Box
                    key={tag}
                    sx={{
                      border: "1px solid",
                      borderColor: "divider",
                      px: 1.5,
                      py: 0.5,
                      fontFamily: MONO,
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "text.secondary",
                    }}
                  >
                    {tag}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export function Experience() {
  return (
    <Box
      component="section"
      id="experience"
      sx={{
        marginTop: { xs: "59px", md: "67px" },
      }}
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
          — 02 —
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
          Experience
        </Typography>
      </Box>

      {/* Roles list */}
      <Container maxWidth={false} disableGutters>
        {roles.map((role, index) => (
          <RoleAccordion key={`${role.company}-${role.period}`} role={role} index={index} />
        ))}
      </Container>
    </Box>
  )
}
