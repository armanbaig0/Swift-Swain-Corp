import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Chip,
  Card,
  CardContent,
  useTheme
} from '@mui/material'
import { ArrowForward, RequestQuote } from '@mui/icons-material'
import ProductIcon from './ProductIcon'

export default function HeroSection({ onQuoteOpen }) {
  const theme = useTheme()

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>

      <Box
        component="img"
        src="/images/Apex-Firm-2.jpg"
        alt="Car parts"
        sx={{
          width: "100%",
          // height: { xs: 300, md: "100%" },
          objectFit: "cover",
          //boxShadow: "0 8px 24px rgba(148, 163, 184, 0.35)"
        }}
        mt={-4}
        mb={4}
      />

      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Chip
            icon={<Box sx={{ width: 8, height: 8, borderRadius: '50%', background: theme.palette.primary.main }} />}
            label="Trusted quality parts"
            variant="outlined"
            sx={{ mb: 2, background: 'rgba(255, 255, 255, 0.05)' }}
          />
          <Typography variant="h1" component="h1" gutterBottom sx={{ lineHeight: 1.1 }}>
            Premium Auto Spare Parts
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', mb: 4, maxWidth: '600px' }}>
            Drive with confidence – premium auto spare parts that keep your car running like new
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              href="#catalog"
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
              Explore Catalog
            </Button>
            {/* <Button 
              variant="outlined" 
              size="large"
              endIcon={<RequestQuote />}
              onClick={onQuoteOpen}
              sx={{
                py: 1.5,
                px: 3,
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderColor: 'rgba(71, 85, 105, 0.5)',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.15)',
                }
              }}
            >
              Request a Quote
            </Button> */}
          </Box>
          <Box sx={{ display: 'flex', gap: 3, color: 'text.secondary' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: theme.palette.primary.main }} />
              Fast dispatch
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: theme.palette.primary.main }} />
              2-year warranty
            </Box>
          </Box>
        </Grid>

        {/* <Card sx={{
          background: 'linear-gradient(145deg, rgba(203,213,225,0.9), rgba(148,163,184,0.85))',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 24px rgba(148, 163, 184, 0.35)',
          borderRadius: '24px'
        }}>
          <CardContent>
            <Typography variant="body2" sx={{ color: '#475569' }}>
              Explore the range and build your order. Clean metallic cards with bold orange actions make browsing a breeze.
            </Typography>
          </CardContent>
        </Card> */}
      </Grid>
    </Container>
  )
}