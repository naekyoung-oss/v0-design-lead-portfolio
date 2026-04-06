import {
  Box,
  Container,
  Typography,
  Link as MuiLink,
} from "@mui/material"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const MONO = "'Courier New', monospace"

export function Contact() {
  const contactItems = [
    {
      icon: LinkedInIcon,
      label: "LinkedIn",
      value: "linkedin.com/in/nkwak",
      href: "https://www.linkedin.com/in/nkwak",
      external: true,
    },
    {
      icon: EmailIcon,
      label: "Email",
      value: "hello@nkwak.com",
      href: "mailto:hello@nkwak.com",
      external: false,
    },
    {
      icon: LocationOnIcon,
      label: "Location",
      value: "London, United Kingdom",
      href: null,
      external: false,
    },
  ]

  return (
    <Box
      component="section"
      id="contact"
      sx={{ marginTop: { xs: "59px", md: "67px" } }}
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
          — 05 —
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
          Contact
        </Typography>
      </Box>

      <Container maxWidth={false} disableGutters>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1fr 1px 1fr" },
          }}
        >
          {/* Left: CTA */}
          <Box
            sx={{
              px: { xs: 3, md: 6 },
              py: { xs: 6, md: 8 },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "28px", md: "36px", lg: "44px" },
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                textTransform: "uppercase",
                color: "text.primary",
                mb: 3,
              }}
            >
              Let's discuss
              <br />
              a project.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "15px", md: "16px" },
                lineHeight: 1.75,
                color: "text.secondary",
                maxWidth: "48ch",
              }}
            >
              I'm always open to exploring new opportunities and collaborations.
              Whether you're looking for a design leader or want to chat about
              user experience, feel free to reach out.
            </Typography>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              backgroundColor: "divider",
              display: { xs: "none", lg: "block" },
            }}
          />

          {/* Right: contact links */}
          <Box
            sx={{
              px: { xs: 3, md: 6 },
              py: { xs: 4, md: 8 },
              borderTop: { xs: "1px solid", lg: "none" },
              borderColor: "divider",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 0,
            }}
          >
            {contactItems.map((item, i) => {
              const IconComponent = item.icon
              const inner = (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 0,
                    py: 3,
                    borderBottom: i < contactItems.length - 1 ? "1px solid" : "none",
                    borderColor: "divider",
                    transition: "background-color 0.15s",
                    cursor: item.href ? "pointer" : "default",
                    "&:hover": item.href
                      ? { backgroundColor: "action.hover" }
                      : {},
                    mx: -0,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2.5 }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        border: "2px solid",
                        borderColor: "divider",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <IconComponent sx={{ fontSize: 18, color: "text.secondary" }} />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: MONO,
                          fontSize: "10px",
                          letterSpacing: "0.14em",
                          textTransform: "uppercase",
                          color: "text.secondary",
                          mb: 0.25,
                        }}
                      >
                        {item.label}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "15px",
                          fontWeight: 600,
                          letterSpacing: "-0.01em",
                          color: "text.primary",
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  </Box>
                  {item.href && (
                    <ArrowForwardIcon
                      sx={{ fontSize: 18, color: "primary.main" }}
                    />
                  )}
                </Box>
              )

              if (item.href && item.external) {
                return (
                  <MuiLink
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    color="inherit"
                  >
                    {inner}
                  </MuiLink>
                )
              } else if (item.href) {
                return (
                  <MuiLink key={item.label} href={item.href} underline="none" color="inherit">
                    {inner}
                  </MuiLink>
                )
              }
              return <Box key={item.label}>{inner}</Box>
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
