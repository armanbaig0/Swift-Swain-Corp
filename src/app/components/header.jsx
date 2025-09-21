import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  TextField,
  InputAdornment,
  Badge,
  Box,
  Typography,
  useTheme,
  useMediaQuery
} from '@mui/material'
import Image from 'next/image'
import {
  Menu as MenuIcon,
  Search,
  ShoppingCart,
  Settings,
} from '@mui/icons-material'

export default function Header({
  searchQuery,
  setSearchQuery,
  onMobileMenuOpen,
  onCartOpen,
  onQuoteOpen,
  cartItemCount
}) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <AppBar
      position="sticky"
      sx={{
        background: 'rgba(30, 41, 59, 0.8)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(71, 85, 105, 0.4)'
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          onClick={onMobileMenuOpen}
          sx={{ mr: 2, display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Box sx={{ display: 'flex', alignItems: 'center', mr: 3 }}>
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: '12px',
              background: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: 1,
              boxShadow: '0 10px 25px rgba(249, 115, 22, 0.25)'
            }}
          >
            <Settings sx={{ fontSize: 20, color: 'white' }} />
            {/* <Image src={'/images/Apex Logo.png'}></Image> */}
          </Box>
          <Box>
            <Typography variant="h6" component="div" sx={{ fontWeight: 800, fontSize: '1.1rem' }}>
              <i>Apex Auto Firm</i>
            </Typography>
          </Box>
        </Box>

        <Box sx={{ flexGrow: 1, maxWidth: 600, mx: 3, display: { xs: 'none', md: 'block' } }}>
          <TextField
            fullWidth
            placeholder="Search parts (e.g. bumpers, grilles, lights)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
            size="small"
          />
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
          <Button color="inherit" href="#catalog">Catalog</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#contact">Contact</Button>
          <Button
            variant="contained"
            sx={{ ml: 1 }}
            onClick={onQuoteOpen}
          >
            Request Quote
          </Button>
          {/* <IconButton
            color="inherit"
            onClick={onCartOpen}
            sx={{ ml: 1 }}
          >
            <Badge badgeContent={cartItemCount} color="primary">
              <ShoppingCart />
            </Badge>
          </IconButton> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}