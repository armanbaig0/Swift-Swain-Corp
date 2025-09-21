import {
  Modal,
  Paper,
  Box,
  Typography,
  Grid,
  IconButton,
  Button,
  Chip,
  Rating,
  useTheme
} from '@mui/material'
import { Close, Add } from '@mui/icons-material'
import ProductIcon from './ProductIcon'
import Image from 'next/image'

export default function QuickViewModal({ open, product, onClose, onAddToCart }) {
  const theme = useTheme()

  if (!product) return null

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Paper
        sx={{
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          borderRadius: '16px',
          background: theme.palette.background.paper,
          border: `1px solid ${theme.palette.divider}`
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2.5, borderBottom: `1px solid ${theme.palette.divider}` }}>
          <Typography variant="h5" component="h4">
            {product.name}
          </Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>
        <Box sx={{ p: 3 }}>
          <Grid container spacing={3}>

            <Grid item xs={12} sm={6}>
  <Box sx={{ 
    aspectRatio: '16/9',
    borderRadius: '12px',
    background: 'rgba(30, 41, 59, 0.7)',
    border: '1px solid rgba(71, 85, 105, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    position: 'relative'
  }}>
    {product.icon.startsWith('/images') ? (
      <Image
        src={product.icon}
        alt={product.name}
        fill
        style={{ objectFit: "contain", borderRadius: "8px" }}
      />
    ) : (
      <ProductIcon type={product.icon} size={120} />
    )}
  </Box>
</Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                {product.brand}
              </Typography>
              <Typography variant="h4" component="h5" sx={{ fontWeight: 700, mb: 1 }}>
                {product.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Rating 
                  value={product.rating} 
                  precision={0.1} 
                  readOnly 
                  size="small"
                  sx={{ color: '#fbbf24' }}
                />
                <Chip 
                  label={product.category} 
                  size="small"
                  variant="outlined"
                  sx={{ ml: 1 }}
                />
              </Box>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: 800, 
                  color: 'primary.main',
                  mb: 2
                }}
              >
                ${product.price.toFixed(2)}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
                {product.desc}
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<Add />}
                  onClick={() => onAddToCart(product.id)}
                  sx={{
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
                  Add to Cart
                </Button>
                <Button
                  variant="outlined"
                  onClick={onClose}
                  sx={{ 
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(71, 85, 105, 0.6)'
                  }}
                >
                  Close
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Modal>
  )
}