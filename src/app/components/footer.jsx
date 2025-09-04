'use client';

import { Container, Grid, Typography, Link, Box, Divider } from '@mui/material';

function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#ec7611', color: '#fff', mt: 4, py: 4, }}>
      <Container maxWidth="lg">
        <Grid container spacing={12}>

          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              SWIFT SWAIN CORP
            </Typography>
            <Divider sx={{mt : -1, borderBottomWidth : 1, borderColor : "black"}} />
            <Typography variant="h10">
              Swift Swain Corp Based in United States, 
              Member since Aug 13, 2011
            </Typography>
          </Grid>

          {/* Categories */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Top Categories
            </Typography>
            <Divider sx={{mt : -1, borderBottomWidth : 1, borderColor : "black"}} />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="https://www.ebay.com/sch/i.html?store_name=swiftswaincorp&_ssn=swiftswain" target="_blank" color="inherit" underline="hover">
                See All Products
              </Link>
              <Link href="https://www.ebay.com/sch/6000/i.html?store_name=swiftswaincorp&_ssn=swiftswain" target="_blank" color="inherit" underline="hover">
                eBay Motors
              </Link>
              <Link href="https://www.ebay.com/sch/33640/i.html?store_name=swiftswaincorp&_ssn=swiftswain" target="_blank" color="inherit" underline="hover">
                Car & Truck Bumpers
              </Link>
              <Link href="https://www.ebay.com/sch/33645/i.html?store_name=swiftswaincorp&_ssn=swiftswain" target="_blank" color="inherit" underline="hover">
                Car & Truck Grilles
              </Link>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Newsletter
            </Typography>
            <Divider sx={{mt : -1, borderBottomWidth : 1, borderColor : "black"}} />
            <Typography variant="body2">
              Sign up to our newsletter for special deals.
            </Typography>
            <Link
              href="https://my.ebay.com/ws/eBayISAPI.dll?AcceptSavedSeller&sellerid=elizabetoyeyem_0"
              target="_blank"
              underline="none"
              sx={{
                display: 'inline-block',
                mt: 2,
                px: 3,
                py: 1,
                backgroundColor: '#1D76BB',
                color: '#fff',
                borderRadius: 1,
                fontWeight: 'bold',
                '&:hover': { backgroundColor: '#fff', color: '#1D76BB' }
              }}
            >
              SUBMIT
            </Link>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', mt: 4, pt: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            © Swift Swain Corp. All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
