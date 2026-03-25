import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Chip,
} from "@mui/material"
import BookIcon from "@mui/icons-material/Book"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

const publications = [
  {
    title: "Days in London",
    subtitle: "Travel Photo Essay",
    year: "2008",
    description:
      "Travel photo essay about London, written in Korean and published in South Korea. Achieved sales of over 14,000 copies and was selected as the best in travel writing in 2008.",
    language: "Korean",
  },
  {
    title: "Lomography Seoul Guide",
    subtitle: "Co-author & Editor",
    year: "2013",
    description:
      "Co-authored and edited the Seoul Edition in collaboration with the Lomography Publication team in Vienna.",
    language: "English",
  },
]

const education = [
  {
    degree: "MA, Enabling Innovation",
    school: "City University London",
    year: "2009 - 2010",
    distinction: "Merit",
  },
  {
    degree: "BS, Product User Interface",
    school: "Handong Global University",
    year: "1997 - 2002",
    distinction: "Distinction",
  },
  {
    degree: "BA, Visual Information Design",
    school: "Handong Global University",
    year: "1997 - 2002",
    distinction: "Distinction",
  },
]

export function Publications() {
  return (
    <Box
      component="section"
      id="publications"
      sx={{
        paddingX: 3,
        paddingY: { xs: 6, lg: 8 },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={8}>
          {/* Publications */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ marginBottom: 4 }}>
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
                Publications
              </Typography>
              <Box
                sx={{
                  height: "1px",
                  width: "48px",
                  backgroundColor: "primary.main",
                }}
              />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {publications.map((pub) => (
                <Card
                  key={pub.title}
                  sx={{
                    border: "1px solid",
                    borderColor: "divider",
                    borderRadius: 2,
                    transition: "box-shadow 0.2s",
                    "&:hover": {
                      boxShadow: 2,
                    },
                  }}
                >
                  <CardContent sx={{ display: "flex", gap: 3 }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 40,
                        height: 40,
                        borderRadius: 1,
                        backgroundColor: "action.hover",
                        flexShrink: 0,
                      }}
                    >
                      <BookIcon sx={{ color: "primary.main" }} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <Typography
                          variant="subtitle2"
                          sx={{ fontFamily: "serif" }}
                        >
                          {pub.title}
                        </Typography>
                        <OpenInNewIcon sx={{ fontSize: "14px", opacity: 0 }} />
                      </Box>
                      <Typography variant="caption" color="text.secondary">
                        {pub.subtitle} &middot; {pub.year}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ marginTop: 1, lineHeight: 1.6, color: "text.secondary" }}
                      >
                        {pub.description}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Grid>

          {/* Education */}
          <Grid item xs={12} lg={6}>
            <Box sx={{ marginBottom: 4 }}>
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
                Education
              </Typography>
              <Box
                sx={{
                  height: "1px",
                  width: "48px",
                  backgroundColor: "primary.main",
                }}
              />
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {education.map((edu) => (
                <Box
                  key={edu.degree}
                  sx={{
                    paddingLeft: 2,
                    borderLeft: "2px solid",
                    borderColor: "divider",
                    transition: "border-color 0.2s",
                    "&:hover": {
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ fontFamily: "serif" }}
                  >
                    {edu.degree}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: 0.5 }}>
                    {edu.school}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginTop: 1 }}>
                    <Typography variant="caption" color="text.secondary">
                      {edu.year}
                    </Typography>
                    <Chip
                      label={edu.distinction}
                      size="small"
                      variant="filled"
                      sx={{
                        backgroundColor: "primary.light",
                        color: "primary.main",
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>

            {/* Certifications */}
            <Box sx={{ marginTop: 8 }}>
              <Box sx={{ marginBottom: 3 }}>
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
                  Certifications
                </Typography>
                <Box
                  sx={{
                    height: "1px",
                    width: "48px",
                    backgroundColor: "primary.main",
                  }}
                />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <Card sx={{ border: "1px solid", borderColor: "divider" }}>
                  <CardContent sx={{ paddingY: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      Customer Led Change: Design Thinking
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: "block", marginTop: 0.5 }}>
                      Stanford Online · 2021
                    </Typography>
                  </CardContent>
                </Card>
                <Card sx={{ border: "1px solid", borderColor: "divider" }}>
                  <CardContent sx={{ paddingY: 2 }}>
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>
                      Coding - HTML, CSS and Javascript
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: "block", marginTop: 0.5 }}>
                      University of the Arts London · 2020
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
