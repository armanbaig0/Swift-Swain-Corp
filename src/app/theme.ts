'use client'
import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f97316', // orange-500
      dark: '#ea580c', // orange-600
      light: '#fb923c', // orange-400
    },
    secondary: {
      main: '#cbd5e1', // slate-300
      dark: '#94a3b8', // slate-400
      light: '#e2e8f0', // slate-200
    },
    background: {
      default: '#0b1220', // deep navy
      paper: '#1e293b', // slate-800
    },
    text: {
      primary: '#f1f5f9', // slate-100
      secondary: '#94a3b8', // slate-400
    },
  },
  typography: {
    fontFamily: 'Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial',
    h1: {
      fontWeight: 800,
      fontSize: '3.5rem',
      '@media (min-width:600px)': {
        fontSize: '4rem',
      },
      '@media (min-width:900px)': {
        fontSize: '5rem',
      },
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontWeight: 700,
      fontSize: '1.5rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'radial-gradient(1200px 600px at 80% -10%, rgba(255,255,255,0.12), transparent 60%), radial-gradient(1000px 500px at -10% 10%, rgba(255,255,255,0.08), transparent 50%), linear-gradient(135deg, #0f172a 0%, #111827 45%, #0b1220 100%)',
          minHeight: '100vh',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#1e293b',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#475569',
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#64748b',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '12px',
          fontWeight: 600,
        },
        contained: {
          background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
          boxShadow: '0 10px 25px rgba(249, 115, 22, 0.25)',
          '&:hover': {
            background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)',
            boxShadow: '0 15px 30px rgba(249, 115, 22, 0.35)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(30, 41, 59, 0.6)',
          border: '1px solid rgba(71, 85, 105, 0.5)',
          borderRadius: '16px',
          backdropFilter: 'blur(8px)',
          '&:hover': {
            borderColor: 'rgba(249, 115, 22, 0.5)',
            boxShadow: '0 10px 25px rgba(249, 115, 22, 0.25)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: '12px',
            background: 'rgba(30, 41, 59, 0.7)',
            '& fieldset': {
              borderColor: 'rgba(71, 85, 105, 0.6)',
            },
            '&:hover fieldset': {
              borderColor: 'rgba(71, 85, 105, 0.8)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#f97316',
              borderWidth: '2px',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: '9999px',
        },
        filled: {
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(71, 85, 105, 0.6)',
          color: '#e2e8f0',
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.1)',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          background: 'rgba(30, 41, 59, 0.7)',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(71, 85, 105, 0.6)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(71, 85, 105, 0.8)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#f97316',
            borderWidth: '2px',
          },
        },
      },
    },
  },
})
