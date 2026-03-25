"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import CloseIcon from "@mui/icons-material/Close"

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

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        color: "#000",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "flex-end",
          padding: "8px 24px",
        }}
      >
        {/* Desktop nav */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 1 }} aria-label="Main navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link key={link.href} href={link.href}>
                  <Button
                    disableRipple={!active}
                    sx={{
                      fontSize: "13px",
                      letterSpacing: "0.05em",
                      textTransform: "capitalize",
                      borderRadius: "100px",
                      paddingX: 2,
                      paddingY: 0.75,
                      backgroundColor: active ? "secondary.light" : "transparent",
                      color: active ? "secondary.dark" : "text.secondary",
                      fontWeight: active ? 600 : 400,
                      "&:hover": {
                        backgroundColor: active ? "secondary.light" : "action.hover",
                        color: active ? "secondary.dark" : "text.primary",
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                </Link>
              )
            })}
          </Box>
        )}

        {/* Mobile toggle */}
        {isMobile && (
          <IconButton
            edge="end"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            color="inherit"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        )}
      </Toolbar>

      {/* Mobile drawer */}
      <Drawer
        anchor="top"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            top: "64px",
            backgroundColor: "rgba(255, 255, 255, 0.95)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            padding: 3,
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
              >
                <Button
                  fullWidth
                  sx={{
                    justifyContent: "flex-start",
                    borderRadius: "100px",
                    paddingX: 2,
                    paddingY: 1,
                    textTransform: "capitalize",
                    backgroundColor: active ? "secondary.light" : "transparent",
                    color: active ? "secondary.dark" : "text.secondary",
                    fontWeight: active ? 600 : 400,
                    "&:hover": {
                      backgroundColor: active ? "secondary.light" : "action.hover",
                      color: active ? "secondary.dark" : "text.primary",
                    },
                  }}
                >
                  {link.label}
                </Button>
              </Link>
            )
          })}
        </Box>
      </Drawer>
    </AppBar>
  )
}
