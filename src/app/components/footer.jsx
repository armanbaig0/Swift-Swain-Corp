import { Box, Container, Typography, Button } from '@mui/material'

export default function Footer() {
  return (
    <Box sx={{ borderTop: '1px solid rgba(71, 85, 105, 0.4)', mt: 5 }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: 'space-between',
          gap: 2,
          color: 'text.secondary'
        }}>
          <Typography variant="body2">
            © {new Date().getFullYear()} APEX AUTO FIRM
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button href="#top" color="inherit" size="small">Back to top</Button>
            <Button href="#catalog" color="inherit" size="small">Catalog</Button>
            <Button href="#about" color="inherit" size="small">About</Button>
            <Button href="#contact" color="inherit" size="small">Contact</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}