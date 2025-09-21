import {
  Drawer,
  Box,
  TextField,
  List,
  ListItemButton,
  ListItemText,
  Badge
} from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'

export default function MobileNav({ 
  open, 
  onClose, 
  searchQuery, 
  setSearchQuery,
  onCartOpen,
  onQuoteOpen,
  cartItemCount 
}) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(8px)'
        }
      }}
    >
      <Box sx={{ p: 2 }}>
        <TextField
          fullWidth
          placeholder="Search parts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          size="small"
          sx={{ mb: 2 }}
        />
        <List>
          <ListItemButton href="#catalog" onClick={onClose}>
            <ListItemText primary="Catalog" />
          </ListItemButton>
          <ListItemButton href="#about" onClick={onClose}>
            <ListItemText primary="About" />
          </ListItemButton>
          <ListItemButton href="#contact" onClick={onClose}>
            <ListItemText primary="Contact" />
          </ListItemButton>
          <ListItemButton onClick={() => { onQuoteOpen(); onClose(); }}>
            <ListItemText primary="Request Quote" />
          </ListItemButton>
          {/* <ListItemButton onClick={() => { onCartOpen(); onClose(); }}>
            <ListItemText primary="Cart" />
            <Badge badgeContent={cartItemCount} color="primary">
              <ShoppingCart />
            </Badge>
          </ListItemButton> */}
        </List>
      </Box>
    </Drawer>
  )
}