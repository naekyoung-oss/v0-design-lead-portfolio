'use client'

import * as React from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material'

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  mode: 'dark' as 'dark' | 'light',
})

const MONO = "'Courier New', 'Lucida Console', monospace"
const SANS = '"Inter", "Helvetica Neue", "Arial", sans-serif'

function buildTheme(mode: 'dark' | 'light') {
  const isDark = mode === 'dark'
  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? '#e8ff3d' : '#1a1aff',
        contrastText: isDark ? '#0a0a0a' : '#ffffff',
      },
      secondary: {
        main: isDark ? '#888888' : '#555555',
        contrastText: isDark ? '#f0ede8' : '#0a0a0a',
      },
      background: {
        default: isDark ? '#0a0a0a' : '#f0ede8',
        paper: isDark ? '#111111' : '#ffffff',
      },
      text: {
        primary: isDark ? '#f0ede8' : '#0a0a0a',
        secondary: isDark ? '#888888' : '#555555',
      },
      divider: isDark ? '#2a2a2a' : '#0a0a0a',
      action: {
        hover: isDark ? 'rgba(232,255,61,0.06)' : 'rgba(26,26,255,0.05)',
        selected: isDark ? 'rgba(232,255,61,0.14)' : 'rgba(26,26,255,0.10)',
        focus: isDark ? 'rgba(232,255,61,0.20)' : 'rgba(26,26,255,0.15)',
      },
    },
    shape: {
      borderRadius: 0,
    },
    typography: {
      fontFamily: SANS,
      h1: { fontFamily: SANS, fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 0.92 },
      h2: { fontFamily: SANS, fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 0.95 },
      h3: { fontFamily: SANS, fontWeight: 800, letterSpacing: '-0.025em' },
      h4: { fontFamily: SANS, fontWeight: 800, letterSpacing: '-0.02em' },
      h5: { fontFamily: SANS, fontWeight: 700, letterSpacing: '-0.01em' },
      h6: { fontFamily: SANS, fontWeight: 700 },
      caption: { fontFamily: MONO, fontSize: '11px', letterSpacing: '0.12em' },
      overline: { fontFamily: MONO, letterSpacing: '0.18em' },
      subtitle2: { fontFamily: MONO, fontSize: '12px', letterSpacing: '0.06em' },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          'html, body': {
            backgroundColor: isDark ? '#0a0a0a' : '#f0ede8',
          },
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            borderRadius: '0 !important',
            boxShadow: 'none',
            backgroundImage: 'none',
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 0, textTransform: 'uppercase', letterSpacing: '0.1em' },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: { borderRadius: 0 },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: { borderRadius: 0, boxShadow: 'none', backgroundImage: 'none' },
        },
      },
      MuiDrawer: {
        styleOverrides: {
          paper: { borderRadius: 0 },
        },
      },
    },
  })
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = React.useState<'dark' | 'light'>('dark')

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark')),
      mode,
    }),
    [mode]
  )

  const theme = React.useMemo(() => buildTheme(mode), [mode])

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  )
}
