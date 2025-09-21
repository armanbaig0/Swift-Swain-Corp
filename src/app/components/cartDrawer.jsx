import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Button,
  useTheme
} from '@mui/material'
import { Close, Add, Remove } from '@mui/icons-material'
import ProductIcon from './ProductIcon'

export default function CartDrawer({ 
  open, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart, 
  subtotal,
  onProceedToQuote 
}) {
  const theme = useTheme()

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: { xs: '100%', sm: 400 },
          maxWidth: '100vw',
          background: theme.palette.background.default,
          borderLeft: `1px solid ${theme.palette.divider}`
        }
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2.5, borderBottom: `1px solid ${theme.palette.divider}` }}>
          <Typography variant="h6">Your Cart</Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>

        <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
          {cartItems.length === 0 ? (
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'text.secondary', mb: 1 }}>
                Your cart is empty
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Browse our catalog and add some parts!
              </Typography>
            </Box>
          ) : (
            <Box sx={{ p: 1 }}>
              {cartItems.map(([id, { product, qty }]) => (
                <Box key={id} sx={{ p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box sx={{ 
                      width: 64, 
                      height: 64, 
                      borderRadius: '8px',
                      background: 'rgba(30, 41, 59, 0.7)',
                      border: '1px solid rgba(71, 85, 105, 0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <ProductIcon type={product.icon} size={40} />
                    </Box>
                    <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                      <Typography variant="subtitle2" noWrap>
                        {product.name}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {product.brand} • {product.category}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'primary.main', fontWeight: 600, mt: 0.5 }}>
                        ${product.price.toFixed(2)}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <IconButton 
                          size="small" 
                          onClick={() => onUpdateQuantity(id, -1)}
                          sx={{ 
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: `1px solid ${theme.palette.divider}`
                          }}
                        >
                          <Remove fontSize="small" />
                        </IconButton>
                        <Typography variant="body2" sx={{ minWidth: 20, textAlign: 'center' }}>
                          {qty}
                        </Typography>
                        <IconButton 
                          size="small" 
                          onClick={() => onUpdateQuantity(id, 1)}
                          sx={{ 
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: `1px solid ${theme.palette.divider}`
                          }}
                        >
                          <Add fontSize="small" />
                        </IconButton>
                      </Box>
                      <IconButton 
                        size="small" 
                        onClick={() => onRemoveItem(id)}
                        sx={{ color: 'text.secondary' }}
                      >
                        <Close fontSize="small" />
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>

        {cartItems.length > 0 && (
          <Box sx={{ p: 2.5, borderTop: `1px solid ${theme.palette.divider}` }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography variant="body1">Subtotal</Typography>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                ${subtotal.toFixed(2)}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={onProceedToQuote}
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
                Proceed to Quote
              </Button>
              <Button
                variant="outlined"
                onClick={onClearCart}
                sx={{ 
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderColor: 'rgba(71, 85, 105, 0.6)'
                }}
              >
                Clear
              </Button>
            </Box>
          </Box>
        )}
      </Box>
    </Drawer>
  )
}