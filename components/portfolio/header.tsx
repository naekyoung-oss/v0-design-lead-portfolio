"use client"

import { useContext, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Typography,
  Drawer,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"
import WbSunnyIcon from "@mui/icons-material/WbSunny"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import { ColorModeContext } from "@/components/theme-provider"
import { MONO } from "@/components/portfolio/styles"

const navLinks = [
  { label: "About", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Experiments", href: "/experiments" },
  { label: "Contact", href: "/contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const pathname = usePathname()
  const { toggleColorMode, mode } = useContext(ColorModeContext)

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  const isDark = mode === "dark"

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "background.default",
        color: "text.primary",
        borderBottom: "3px solid",
        borderColor: "primary.main",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1440px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: { xs: 2, md: 4 },
          minHeight: { xs: "56px", md: "64px" },
        }}
      >
        {/* Monogram / Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              fontFamily: MONO,
              fontWeight: 700,
              fontSize: "18px",
              letterSpacing: "0.08em",
              color: "primary.main",
              lineHeight: 1,
              userSelect: "none",
            }}
          >
            NK
          </Typography>
        </Link>

        {/* Desktop nav */}
        {!isMobile && (
          <Box
            component="nav"
            sx={{ display: "flex", alignItems: "center", gap: 0 }}
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                  <Box
                    sx={{
                      px: 2,
                      py: 1,
                      fontFamily: MONO,
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: active ? "primary.contrastText" : "text.secondary",
                      backgroundColor: active ? "primary.main" : "transparent",
                      borderLeft: active ? "none" : "1px solid transparent",
                      cursor: "pointer",
                      transition: "background-color 0.15s, color 0.15s",
                      "&:hover": {
                        backgroundColor: active ? "primary.main" : "action.hover",
                        color: active ? "primary.contrastText" : "text.primary",
                      },
                    }}
                  >
                    {link.label}
                  </Box>
                </Link>
              )
            })}

            {/* Theme toggle */}
            <IconButton
              onClick={toggleColorMode}
              size="small"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              sx={{
                ml: 2,
                borderRadius: 0,
                padding: "6px",
                color: "primary.main",
                "&:hover": {
                  backgroundColor: "action.hover",
                },
              }}
            >
              {isDark ? (
                <WbSunnyIcon sx={{ fontSize: 16 }} />
              ) : (
                <DarkModeIcon sx={{ fontSize: 16 }} />
              )}
            </IconButton>
          </Box>
        )}

        {/* Mobile: theme toggle + hamburger */}
        {isMobile && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              onClick={toggleColorMode}
              size="small"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
              sx={{
                borderRadius: 0,
                padding: "6px",
                color: "primary.main",
              }}
            >
              {isDark ? (
                <WbSunnyIcon sx={{ fontSize: 16 }} />
              ) : (
                <DarkModeIcon sx={{ fontSize: 16 }} />
              )}
            </IconButton>
            <IconButton
              edge="end"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              sx={{
                border: "2px solid",
                borderColor: "divider",
                borderRadius: 0,
                padding: "6px",
                color: "text.primary",
              }}
            >
              {mobileOpen ? (
                <CloseIcon sx={{ fontSize: 18 }} />
              ) : (
                <MenuIcon sx={{ fontSize: 18 }} />
              )}
            </IconButton>
          </Box>
        )}
      </Toolbar>

      {/* Mobile full-screen drawer */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            top: "59px",
            backgroundColor: "background.default",
            borderBottom: "3px solid",
            borderColor: "primary.main",
            boxShadow: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 0,
          }}
          role="presentation"
        >
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    px: 4,
                    py: 2.5,
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    fontFamily: MONO,
                    fontSize: "13px",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: active ? "primary.contrastText" : "text.primary",
                    backgroundColor: active ? "primary.main" : "transparent",
                    "&:hover": {
                      backgroundColor: active ? "primary.main" : "action.hover",
                    },
                  }}
                >
                  {link.label}
                </Box>
              </Link>
            )
          })}
        </Box>
      </Drawer>
    </AppBar>
  )
}
