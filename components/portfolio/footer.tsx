import { Box, Container, Typography } from "@mui/material"

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid",
        borderColor: "divider",
        paddingX: 3,
        paddingY: 2,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: "serif",
            fontSize: "14px",
          }}
        >
          Naekyoung Kwak
        </Typography>
        <Typography
          variant="caption"
          sx={{
            color: "text.secondary",
          }}
        >
          Designed & built with care
        </Typography>
      </Container>
    </Box>
  )
}
