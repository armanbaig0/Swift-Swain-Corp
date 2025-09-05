'use client';

import { Container, Grid, Typography, Link, Box, Divider } from '@mui/material';

function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: '#ec7611', 
        color: '#fff', 
        mt: 4,
        p:1  
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={12}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                textTransform: 'uppercase',
                borderBottom: '1px solid #474747',
                pb: 1,
                mb: 2
              }}
            >
              Swift Swain Corp
            </Typography>
            <Typography variant="body2" >
              Swift Swain Corp Based in United States, Member <br /> since: Aug 13, 2011
            </Typography>
          </Grid>

          {/* Categories */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                textTransform: 'uppercase',
                borderBottom: '1px solid #474747',
                pb: 1,
                mb: 2
              }}
            >
              Top Categories
            </Typography>
            <Box component="ul" sx={{ listStyle: 'disc', p: 0, m: 0 }}>
              {[
                { text: 'See All Products', href: 'https://www.ebay.com/sch/i.html?store_name=swiftswaincorp&_ssn=swiftswain&LH_PrefLoc=3&_oac=1&_stpos=64062&_fcid=1' },
                { text: 'eBay Motors', href: 'https://www.ebay.com/sch/6000/i.html?store_name=swiftswaincorp&_ssn=swiftswain&LH_PrefLoc=3&_oac=1&_stpos=64062&_fcid=1' },
                { text: 'Car & Truck Bumpers & Reinforcements', href: 'https://www.ebay.com/sch/33640/i.html?store_name=swiftswaincorp&_ssn=swiftswain&LH_PrefLoc=3&_oac=1&_stpos=64062&_fcid=1' },
                { text: 'Car & Truck Grilles', href: 'https://www.ebay.com/sch/33645/i.html?store_name=swiftswaincorp&_ssn=swiftswain&LH_PrefLoc=3&_oac=1&_stpos=64062&_fcid=1' },
                { text: 'Bumpers & Reinforcements', href: 'https://www.ebay.com/sch/262146/i.html?store_name=swiftswaincorp&_ssn=swiftswain&LH_PrefLoc=3&_oac=1&_stpos=64062&_fcid=1' },
                { text: 'Car & Truck Fog Light Assemblies', href: 'https://www.ebay.com/sch/33709/i.html?store_name=swiftswaincorp&_ssn=swiftswain&LH_PrefLoc=3&_stpos=64062&_fcid=1&_oac=1' },
                { text: 'Car & Truck Splash Guards & Mud Flaps', href: 'https://www.ebay.com/sch/33710/i.html?store_name=swiftswaincorp&_ssn=swiftswain&LH_PrefLoc=3&_stpos=64062&_fcid=1&_oac=1' }
              ].map((item, index) => (
                <Box component="li" key={index}>
                  <Link 
                    href={item.href}
                    target="_blank"
                    color="inherit"
                    underline="none"
                    sx={{ 
                      fontSize: '14px',
                      textTransform: 'uppercase',
                      color: '#fff',
                      '&:hover': { 
                        color: '#1D76BB',
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    {item.text}
                  </Link>
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography 
              variant="h6" 
              gutterBottom 
              sx={{ 
                textTransform: 'uppercase',
                borderBottom: '1px solid #474747',
                pb: 1,
                mb: 2
              }}
            >
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
              Sign up to our newsletter for special deals
            </Typography>
            <Link
              href="https://my.ebay.com/ws/eBayISAPI.dll?AcceptSavedSeller&rt=nc&guest=1&ssPageName=STRK%3AMEFS%3AADDSTR&sellerid=elizabetoyeyem_0&AcceptSavedSeller="
              target="_blank"
              underline="none"
              sx={{
                display: 'inline-block',
                mt: 2,
                px: 3,
                py: 1.5,
                backgroundColor: '#1D76BB',
                color: '#fff',
                borderRadius: '2px',
                fontSize: '14px',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                '&:hover': { 
                  backgroundColor: '#fff', 
                  color: '#1D76BB' 
                }
              }}
            >
              Submit
            </Link>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box 
          sx={{ 
            borderTop: '1px dotted #333', 
            mt: 4, 
            pt: 2, 
            textAlign: 'center' 
          }}
        >
          <Typography variant="body3" sx={{fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif'}}>
            Copyright © Swift Swain Corp. All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;