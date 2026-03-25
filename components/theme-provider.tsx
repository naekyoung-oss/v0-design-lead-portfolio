'use client'

import * as React from 'react'
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material'

const theme = createTheme({
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"Playfair Display", serif' },
    h2: { fontFamily: '"Playfair Display", serif' },
    h3: { fontFamily: '"Playfair Display", serif' },
    h4: { fontFamily: '"Playfair Display", serif' },
    h5: { fontFamily: '"Playfair Display", serif' },
    h6: { fontFamily: '"Playfair Display", serif' },
  },
  palette: {
    primary: {
      main: '#6442d6',
      light: '#9f86ff',
      dark: '#1e0060',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#5d5d74',
      light: '#dcdaf5',
      dark: '#21182b',
      contrastText: '#ffffff',
    },
    error: {
      main: '#ff6240',
      contrastText: '#490909',
    },
    background: {
      default: '#fefbff',
      paper: '#fefbff',
    },
    text: {
      primary: '#1c1b1d',
      secondary: '#4d4256',
    },
    divider: '#787579',
    action: {
      selected: '#e8e0e8',
      focus: '#dcdaf5',
    },
  },
  shape: {
    borderRadius: 8,
  },
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  )
}
