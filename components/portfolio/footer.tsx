import { Box, Container, Typography } from "@mui/material"
import { MONO } from "./styles"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "3px solid",
        borderColor: "primary.main",
        backgroundColor: "background.paper",
      }}
    >
      <Container maxWidth={false} disableGutters>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            px: { xs: 3, md: 6 },
            py: 3,
            gap: 1,
          }}
        >
          <Typography
            sx={{
              fontFamily: MONO,
              fontSize: "12px",
              letterSpacing: "0.10em",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "text.primary",
            }}
          >
            Naekyoung Kwak
          </Typography>

          <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
            <Typography
              sx={{
                fontFamily: MONO,
                fontSize: "10px",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "text.secondary",
              }}
            >
              VP Lead Experience Designer
            </Typography>
            <Typography
              sx={{
                fontFamily: MONO,
                fontSize: "10px",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "text.secondary",
              }}
            >
              © {year}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
