import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const HeroBanner = () => (
  <Box
    sx={{
      backgroundImage: 'url(./public/images/hero-image.jpg)',
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
    }}
  >
    <Container>
      <Typography variant="h2">Welcome to Our Website</Typography>
      <Typography variant="h5">Your success is our priority</Typography>
    </Container>
  </Box>
);

export default HeroBanner;
