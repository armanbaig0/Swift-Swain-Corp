import {
  Box,
  Container,
  Typography,
  Button,
  Card
} from '@mui/material'

export default function ContactSection({ onQuoteOpen }) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }} id="contact">
      <Card sx={{ 
        background: 'linear-gradient(135deg, rgba(249, 115, 22, 0.2) 0%, rgba(249, 115, 22, 0.1) 100%)',
        border: '1px solid rgba(249, 115, 22, 0.3)',
        borderRadius: '24px',
        p: 4
      }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: 'space-between',
          gap: 3
        }}>
          <Box>
            <Typography variant="h3" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
              Need help finding a part?
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.primary' }}>
              Tell us your vehicle and we'll match the right components.
            </Typography>
          </Box>
          <Button 
            variant="contained" 
            size="large"
            onClick={onQuoteOpen}
            sx={{
              py: 1.5,
              px: 3,
              borderRadius: '12px',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-200%',
                left: '-200%',
                width: '200%',
                height: '200%',
                transform: 'rotate(25deg)',
                background: 'linear-gradient(120deg, transparent 40%, rgba(255,255,255,0.25) 50%, transparent 60%)',
                transition: '0.8s',
              },
              '&:hover::before': {
                top: '-100%',
                left: '-20%',
              },
            }}
          >
            Request a Quote
          </Button>
        </Box>
      </Card>
    </Container>
  )
}