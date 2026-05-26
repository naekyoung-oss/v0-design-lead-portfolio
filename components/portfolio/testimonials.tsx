import { Box, Container, Typography, IconButton } from "@mui/material"
import LinkedInIcon from "@mui/icons-material/LinkedIn"

const MONO = "'Courier New', monospace"

const testimonials = [
  {
    quote:
      "Naekyoung was tremendous at guiding the design team, and it was great to see her progress to the position of Product Design Lead whilst we worked together, which she fully deserved to recognise her impact. She made a fantastic impression in ensuring the development team had everything they needed to deliver great experiences to our customers through coordinating the designers and their work. Additionally, Naekyoung brings brilliant ideas to enhance the customer experience within journeys, from the conception of run-ahead work right through to minor tweaks later, such as defects raised. I'm sure Naekyoung will have a considerable influence on colleagues and end users wherever she goes for a long time to come and make a great success of it.",
    author: "Christopher Byrne",
    linkedIn: "https://www.linkedin.com/in/christopher-byrne-a31524104/",
  },
  {
    quote:
      "Naekyoung is the manager I looked up to in many ways. She brought in a lot of best practices and streamlined working into our team, which helped us create best-in-class designs. She has this ability to guard the team from external factors without compromising on deliverables required by the business. She is a very good people manager and always encouraged the team to deliver their best. She has a deep understanding of all design facets. She is a strong advocate of end-user experience along with well-balanced stakeholder requirements. Overall, she is a pleasure to work with and an asset to any team.",
    author: "Ramalakshmi Dwadasi",
    linkedIn: "https://www.linkedin.com/in/ramalakshmi-dwadasi-516116196/",
  },
]

export function Testimonials() {
  return (
    <Box
      component="section"
      sx={{ borderBottom: "1px solid", borderColor: "divider" }}
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
          Recommendations
        </Typography>
      </Box>

      <Container maxWidth={false} disableGutters>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
          }}
        >
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
              {/* Large accent quote mark */}
              <Typography
                sx={{
                  fontFamily: MONO,
                  fontSize: { xs: "60px", md: "80px" },
                  lineHeight: 0.8,
                  color: "primary.main",
                  fontWeight: 900,
                  userSelect: "none",
                }}
              >
                "
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "16px", md: "17px" },
                  lineHeight: 1.8,
                  color: "text.secondary",
                  flex: 1,
                }}
              >
                {t.quote}
              </Typography>

              {/* Author row */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  pt: 2,
                  borderTop: "1px solid",
                  borderColor: "divider",
                }}
              >
                {/* LinkedIn icon */}
                <IconButton
                  component="a"
                  href={t.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.author}'s LinkedIn profile`}
                  sx={{
                    width: 40,
                    height: 40,
                    border: "2px solid",
                    borderColor: "primary.main",
                    borderRadius: 0,
                    color: "primary.main",
                    flexShrink: 0,
                    "&:hover": {
                      backgroundColor: "action.hover",
                    },
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 700,
                      letterSpacing: "-0.01em",
                      color: "text.primary",
                    }}
                  >
                    {t.author}
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
