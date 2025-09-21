'use client'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from '../app/theme'
import SmoothScroll from '../app/components/smoothScroll'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Apex Auto Firm</title>
        <meta name="description" content="Premium Auto Spare Parts" />
      </head>
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SmoothScroll>
          {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  )
}