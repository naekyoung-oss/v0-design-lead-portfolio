import { Box, Container, Typography } from "@mui/material"
import { MONO } from "./styles"
import { SectionHeader } from "./section-header"

const testimonials = [
  {
    quote:
      "Naekyoung was tremendous at guiding the design team and it was great to see her progress to the position Product Design Lead whilst we worked together, which she fully deserved to recognise her impact. She made a fantastic impression in ensuring the development team had everything they needed to be able to deliver great experiences to our customers.",
    author: "Christopher Byrne",
    relationship: "Colleague at HSBC",
    initial: "CB",
  },
  {
    quote:
      "Naekyoung is an excellent manager. She always kept the team morale up, and I believe she is the best manager I ever had. Her ability to work through the crisis and develop new ways to achieve the targets and solve the problem were always inspiring. She is innovative, organized as well as helpful and is always open to ideas and suggestions.",
    author: "Talha Naik",
    relationship: "Direct Report at HSBC",
    initial: "TN",
  },
]

export function Testimonials() {
  return (
    <Box component="section" sx={{ borderBottom: "1px solid", borderColor: "divider" }}>
      <SectionHeader index="— 04 —" title="Recommendations" />

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
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    border: "2px solid",
                    borderColor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Typography sx={{ fontFamily: MONO, fontSize: "11px", fontWeight: 700, color: "primary.main", letterSpacing: "0.06em" }}>
                    {t.initial}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "14px", fontWeight: 700, letterSpacing: "-0.01em", color: "text.primary" }}>
                    {t.author}
                  </Typography>
                  <Typography sx={{ fontFamily: MONO, fontSize: "10px", letterSpacing: "0.10em", textTransform: "uppercase", color: "text.secondary", mt: 0.25 }}>
                    {t.relationship}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
