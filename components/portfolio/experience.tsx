"use client"

import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

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
    period: "May 2023 - Present",
    location: "London, UK",
    description:
      "Lead design discovery and experimental projects for CIB and firm-wide business stakeholders. Focus on proposing innovative approaches tailored to the specific problems stakeholders face.",
    achievements: [
      "Standing Settlement Instructions (SSIs) Standardisation - Created and tested a standardised SSIs template published by Financial Markets Standards Board (FMSB)",
      "Workforce Activity Data Utility (WADU 2.0) Conceptual Designs",
      "Manager Zone (a firmwide HR tool powered by WADU) Conceptual Designs",
    ],
    tags: ["Design Strategy", "Financial Services", "Innovation"],
  },
  {
    title: "VP Lead Product Designer, CIB Payments",
    company: "J.P. Morgan",
    period: "Oct 2022 - Apr 2023",
    location: "London, UK",
    description:
      "Led product design for CIB Payments, delivering user-centred design solutions for complex financial payment systems.",
    tags: ["Product Design", "Payments", "Enterprise UX"],
  },
  {
    title: "Product Design Manager / Design Lead",
    company: "HSBC",
    period: "Mar 2020 - Oct 2022",
    location: "London, UK",
    description:
      "Oversaw iterative design processes, maintained quality and consistency. Managed and mentored designers across China, India, Poland, and the UK.",
    achievements: [
      "5.1 million customers registered or migrated to new mobile banking app. Average registration time reduced from 15 mins to 2.7 mins",
      "Online ID verification: average time reduced from 1-2 days (at branch) to less than 5 mins (online)",
      "Led user authentication experience design using QR codes, push auth, biometrics, and secure codes",
    ],
    tags: ["Design Management", "Mobile Banking", "Identity Verification"],
  },
  {
    title: "User Experience Manager",
    company: "Tungsten Network",
    period: "Nov 2012 - Mar 2020",
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
    period: "Oct 2010 - Jan 2012",
    location: "Hong Kong SAR",
    description:
      "Led comprehensive research for SimplyShare, wake-up alarms, music players, and car infotainment systems. Provided key insights for product vision and strategy.",
    tags: ["User Research", "Consumer Electronics", "Product Strategy"],
  },
  {
    title: "UX Design Specialist / Senior UX Designer",
    company: "Samsung Electronics",
    period: "Jun 2007 - May 2009",
    location: "Seoul, South Korea",
    description:
      "Selected as UX Specialist for Samsung's first multidisciplinary innovation lab. Led localisation projects for TouchWiz 1.0, Samsung's first mobile touch interface.",
    tags: ["Mobile UX", "Innovation Lab", "Localisation"],
  },
  {
    title: "User Experience Designer",
    company: "SK Telecom",
    period: "Oct 2003 - May 2006",
    location: "Seoul, South Korea",
    description:
      "Designed operating system and native app user interfaces for SKY-brand mobile devices and Digital Multimedia Broadcasting (DMB) devices.",
    tags: ["Mobile OS", "UI Design", "Telecommunications"],
  },
]

export function Experience() {
  return (
    <Box
      component="section"
      id="experience"
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
            Experience
          </Typography>
          <Box
            sx={{
              height: "1px",
              width: "48px",
              backgroundColor: "primary.main",
            }}
          />
        </Box>

        <Box>
          {roles.map((role, index) => (
            <Accordion
              key={`${role.company}-${role.period}`}
              sx={{
                border: "none",
                borderBottom: "1px solid",
                borderColor: "divider",
                "&:before": { display: "none" },
                "&.Mui-expanded": {
                  margin: 0,
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  paddingX: 1,
                  paddingY: 2,
                  "&:hover": {
                    backgroundColor: "action.hover",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    width: "100%",
                    gap: 2,
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: "serif",
                        fontSize: { xs: "18px", md: "20px" },
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {role.company}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        marginTop: 0.5,
                        color: "text.secondary",
                      }}
                    >
                      {role.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      whiteSpace: "nowrap",
                      marginTop: { xs: 0.5, sm: 0.5 },
                    }}
                  >
                    {role.period}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  paddingX: 1,
                  paddingY: 2,
                  backgroundColor: "background.paper",
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      marginBottom: 1,
                    }}
                  >
                    {role.location}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: { xs: "16px", lg: "18px" },
                      lineHeight: 1.8,
                      color: "text.secondary",
                      marginBottom: 2,
                    }}
                  >
                    {role.description}
                  </Typography>

                  {role.achievements && role.achievements.length > 0 && (
                    <Box sx={{ marginTop: 2, marginBottom: 2 }}>
                      {role.achievements.map((achievement, i) => (
                        <Box
                          key={i}
                          sx={{
                            display: "flex",
                            gap: 2,
                            marginBottom: 1,
                          }}
                        >
                          <Box
                            sx={{
                              width: 6,
                              height: 6,
                              borderRadius: "50%",
                              backgroundColor: "primary.main",
                              marginTop: 1,
                              flexShrink: 0,
                            }}
                          />
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: { xs: "16px", lg: "18px" },
                              lineHeight: 1.8,
                              color: "text.secondary",
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
                        <Chip
                          key={tag}
                          label={tag}
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
                  )}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
