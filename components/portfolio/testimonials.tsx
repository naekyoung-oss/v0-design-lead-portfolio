import { Box, Container, Grid, Card, CardContent, Typography, Avatar } from "@mui/material"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"

const testimonials = [
  {
    quote:
      "Naekyoung was tremendous at guiding the design team and it was great to see her progress to the position Product Design Lead whilst we worked together, which she fully deserved to recognise her impact. She made a fantastic impression in ensuring the development team had everything they needed to be able to deliver great experiences to our customers.",
    author: "Christopher Byrne",
    relationship: "Colleague at HSBC",
  },
  {
    quote:
      "Naekyoung is an excellent manager. She always kept the team morale up, and I believe she is the best manager I ever had. Her ability to work through the crisis and develop new ways to achieve the targets and solve the problem were always inspiring. She is innovative, organized as well as helpful and is always open to ideas and suggestions.",
    author: "Talha Naik",
    relationship: "Direct Report at HSBC",
  },
]

export function Testimonials() {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.02)",
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
            Recommendations
          </Typography>
          <Box
            sx={{
              height: "1px",
              width: "48px",
              backgroundColor: "primary.main",
            }}
          />
        </Box>

        <Grid container spacing={3}>
          {testimonials.map((t) => (
            <Grid item xs={12} md={6} key={t.author}>
              <Card
                sx={{
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 3,
                  height: "100%",
                }}
              >
                <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  <FormatQuoteIcon
                    sx={{
                      fontSize: 32,
                      opacity: 0.1,
                      color: "primary.main",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontStyle: "italic",
                      lineHeight: 1.8,
                      color: "text.secondary",
                    }}
                  >
                    "{t.quote}"
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      marginTop: "auto",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 40,
                        height: 40,
                        backgroundColor: "action.hover",
                        color: "text.primary",
                        fontFamily: "serif",
                        fontSize: "16px",
                      }}
                    >
                      {t.author.charAt(0)}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2">{t.author}</Typography>
                      <Typography variant="caption" color="text.secondary">
                        {t.relationship}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
