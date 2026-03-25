import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  Link as MuiLink,
} from "@mui/material"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"

export function Contact() {
  const contactItems = [
    {
      icon: LinkedInIcon,
      title: "LinkedIn",
      subtitle: "linkedin.com/in/nkwak",
      href: "https://www.linkedin.com/in/nkwak",
    },
    {
      icon: EmailIcon,
      title: "Email",
      subtitle: "Get in touch",
      href: "mailto:hello@nkwak.com",
    },
    {
      icon: LocationOnIcon,
      title: "Location",
      subtitle: "London, United Kingdom",
      href: null,
    },
  ]

  return (
    <Box
      component="section"
      id="contact"
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
            Contact
          </Typography>
          <Box
            sx={{
              height: "1px",
              width: "48px",
              backgroundColor: "primary.main",
            }}
          />
        </Box>

        <Grid container spacing={8}>
          <Grid item xs={12} lg={6}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "serif",
                fontSize: { xs: "28px", md: "32px" },
                letterSpacing: "-0.01em",
                marginBottom: 2,
              }}
            >
              Let's discuss a project or just say hello.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                lineHeight: 1.8,
                color: "text.secondary",
              }}
            >
              I'm always open to exploring new opportunities and collaborations.
              Whether you're looking for a design leader or want to chat about
              user experience, feel free to reach out.
            </Typography>
          </Grid>

          <Grid item xs={12} lg={6}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {contactItems.map((item) => {
                const IconComponent = item.icon
                const isLink = item.href && item.href.startsWith("http")

                const content = (
                  <Card
                    sx={{
                      border: "1px solid",
                      borderColor: "divider",
                      borderRadius: 3,
                      transition: "background-color 0.2s",
                      "&:hover": {
                        backgroundColor: "action.hover",
                      },
                    }}
                  >
                    <CardContent
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 48,
                          height: 48,
                          borderRadius: 1,
                          backgroundColor: "action.hover",
                        }}
                      >
                        <IconComponent sx={{ color: "text.primary" }} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle2">
                          {item.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {item.subtitle}
                        </Typography>
                      </Box>
                    </CardContent>
                  </Card>
                )

                if (isLink) {
                  return (
                    <MuiLink
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      underline="none"
                    >
                      {content}
                    </MuiLink>
                  )
                } else if (item.href) {
                  return (
                    <MuiLink key={item.title} href={item.href} underline="none">
                      {content}
                    </MuiLink>
                  )
                }
                return <Box key={item.title}>{content}</Box>
              })}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
