import { Box, Container, Typography } from "@mui/material"
import { Linkedin } from "lucide-react"
import { MONO } from "./styles"
import { SectionHeader } from "./section-header"

const testimonials = [
  {
    quote:
      "Naekyoung was tremendous at guiding the design team and it was great to see her progress to the position Product Design Lead whilst we worked together, which she fully deserved to recognise her impact. She made a fantastic impression in ensuring the development team had everything they needed to be able to deliver great experiences to our customers through co-ordinating the designers and their work. Additional to this Naekyoung brings brilliant ideas to enhance the customer experience within journeys, from the conception of run ahead work right through to minor tweaks later such as defects raised. I'm sure Naekyoung will have a considerable influence on colleagues & end users wherever she goes for a long time to come, and make a great success of it.",
    author: "Christopher Byrne",
    relationship: "Product Manager at HSBC",
    initial: "CB",
    linkedin: "https://www.linkedin.com/in/christopher-byrne-a31524104/",
  },
  {
    quote:
      "Naekyoung is the manager I looked upto in many ways. She brought in lot of best practices and streamlined working into our team which helped us to create best in class designs. She have this ability to guard the team from external factors without compromising on deliverables required to business. She is very good people manager and always encouraged team to deliver best. She got deep understanding of all design facets. She is strong adviser of end user experience along with well balanced stakeholder requirements. Overall she is a pleasure to work with and an asset to any team.",
    author: "Ramalakshmi Dwadasi",
    relationship: "Direct Report at HSBC",
    initial: "RD",
    linkedin: "https://www.linkedin.com/in/ramalakshmi-dwadasi-516116196/",
  },
]

export function Testimonials() {
  return (
    <Box component="section" sx={{ borderBottom: "1px solid", borderColor: "divider" }}>
      <SectionHeader title="Recommendations" />

      <Container maxWidth={false} disableGutters>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" } }}>
          {testimonials.map((t, i) => (
            <Box
              key={t.author}
              sx={{
                px: { xs: 3, md: 6 },
                py: { xs: 5, md: 7 },
                borderRight: { md: i === 0 ? "1px solid" : "none" },
                borderBottom: { xs: i === 0 ? "1px solid" : "none", md: "none" },
                borderColor: "divider",
                display: "flex",
                flexDirection: "column",
                gap: 4,
              }}
            >
              <Typography sx={{ fontFamily: MONO, fontSize: { xs: "60px", md: "80px" }, lineHeight: 0.8, color: "primary.main", fontWeight: 900, userSelect: "none" }}>
                "
              </Typography>

              <Typography variant="body1" sx={{ fontSize: { xs: "16px", md: "17px" }, lineHeight: 1.8, color: "text.secondary", flex: 1 }}>
                {t.quote}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 2, pt: 2, borderTop: "1px solid", borderColor: "divider" }}>
                <Box sx={{ flex: 1 }}>
                  <Typography sx={{ fontSize: "14px", fontWeight: 700, letterSpacing: "-0.01em", color: "text.primary" }}>
                    {t.author}
                  </Typography>
                  <Typography sx={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.10em", textTransform: "uppercase", color: "text.secondary", mt: 0.25 }}>
                    {t.relationship}
                  </Typography>
                </Box>
                {t.linkedin && (
                  <Box
                    component="a"
                    href={t.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "primary.main",
                      textDecoration: "none",
                      transition: "opacity 0.15s",
                      "&:hover": {
                        opacity: 0.7,
                      },
                    }}
                  >
                    <Linkedin size={20} />
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
