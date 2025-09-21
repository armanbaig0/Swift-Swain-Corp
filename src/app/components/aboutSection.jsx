import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme
} from '@mui/material'

export default function AboutSection() {
  const theme = useTheme()

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }} id="about">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ 
            background: 'linear-gradient(145deg, rgba(203,213,225,0.9), rgba(148,163,184,0.85))',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 24px rgba(148, 163, 184, 0.35)',
            borderRadius: '24px'
          }}>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h3" component="h3" sx={{ color: '#1e293b', fontWeight: 700, mb: 2 }}>
                Built for performance
              </Typography>
              <Typography variant="body1" sx={{ color: '#475569', mb: 3 }}>
                This template helps you showcase parts clearly, with quick filters and fast actions. The metallic silver look pairs with bold orange highlights for a modern, energetic feel.
              </Typography>
              <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0, '& li': { display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1, color: '#475569' } }}>
                <Box component="li">
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: theme.palette.primary.main, mt: 1, flexShrink: 0 }} />
                  Responsive layout that adapts to all devices
                </Box>
                <Box component="li">
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: theme.palette.primary.main, mt: 1, flexShrink: 0 }} />
                  Quick view modals and a working mini-cart
                </Box>
                <Box component="li">
                  <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: theme.palette.primary.main, mt: 1, flexShrink: 0 }} />
                  Clean product cards with ratings
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h3" component="h3" sx={{ fontWeight: 700, mb: 2 }}>
              Fast setup
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
              Use this as a starting point and make it your own—add categories, brands, and parts as needed.
            </Typography>
            <Grid container spacing={2}>
              {[
                { label: 'Primary', value: 'Orange', color: theme.palette.primary.main },
                { label: 'Secondary', value: 'Silver', color: theme.palette.secondary.main },
                { label: 'Accent', value: 'Metallic shine', color: theme.palette.text.primary },
                { label: 'Surface', value: 'Dark base', color: theme.palette.text.primary }
              ].map((item, index) => (
                <Grid item xs={6} key={index}>
                  <Box sx={{ 
                    p: 2, 
                    borderRadius: '12px', 
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(71, 85, 105, 0.5)'
                  }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {item.label}
                    </Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: item.color, mt: 0.5 }}>
                      {item.value}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}