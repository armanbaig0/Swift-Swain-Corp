'use client';

import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box, Button, Link } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Image from "next/image";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


function Header() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => setAnchorEl(event.currentTarget);
  const handleCloseMenu = () => setAnchorEl(null);

  const navLinks = [
    { label: 'Home', href: 'https://www.ebay.com/str/swiftswaincorp' },
    { label: 'Help', href: 'https://www.ebay.com/cnt/intermediatedFAQ?requested=swiftswain' },
    { label: 'Feedback', href: 'https://www.ebay.com/str/swiftswaincorp?_tab=feedback' },
    { label: 'Follow Us', href: 'https://ebay.us/m/LUhWNF' },
    { label: "See What's New", href: 'https://www.ebay.com/sch/i.html?store_name=swiftswaincorp&_ssn=swiftswain&LH_PrefLoc=3&_stpos=64062&_fcid=1&_oac=1' }
  ];

  return (
    <AppBar position="static" sx={{ px: 2, mt: 2, backgroundColor: { xs: "#1D76BB", sm: "#ec7611" } }}>
      <Toolbar>

        {/* Mobile Menu */}
        <Box sx={{ display: { xs: 'flex', md: 'none', }, ml: -3, mr: 3, }}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            {navLinks.map((link) => (
              <MenuItem
                key={link.label}
                onClick={handleCloseMenu}
                sx={{
                  "&:hover": {
                    backgroundColor: "#1D76BB",
                    color: "#fff",
                    borderRadius : 2,
                    px: 2
                  },
                }}
                >
                <Link href={link.href} underline="none" color="inherit" target="_blank">
                  {link.label}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Logo / Brand */}
        <Box sx={{ mr: 1 }}>
          <Image
            src="/images/logo.webp" // public/images/logo.png
            alt="Swift Swain Corp Logo"
            width={40}
            height={40}
          />
        </Box>
        <Typography
          variant="h6"
          noWrap
          sx={{ flexGrow: 1, fontWeight: 'bold' }}
        >
          Swift Swain Corp
        </Typography>

        {/* Desktop Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              underline="none"
              color="inherit"
              target="_blank"
              sx={{
                  "&:hover": {
                    backgroundColor: "#1D76BB",
                    color: "#fff",
                    borderRadius : 2
                  },
              }}
            >
              <Button sx={{ color: '#fff' }}>{link.label}</Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
