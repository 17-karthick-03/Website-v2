import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const backgroundImages = [
  '/coffee.jpg',
  '/display.jpg',
  '/inspection.jpg',
  '/packagingmachine.jpg',
  '/printing.jpg',
  '/watertreatment.jpg'
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % backgroundImages.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
        height: '100vh',
        backgroundColor: '#c7dcee',
        backgroundImage: `url(${backgroundImages[currentIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
        textAlign: 'center',
        color: '#374151', // dark slate for text
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 'bold',
          maxWidth: '1200px',
          mb: 2,
          fontSize: { xs: '2rem', md: '3rem' },
        }}
      >
        Unlock Your Business Potential with{' '}
        <Box
          component="span"
          sx={{ color: '#cc9b2c', fontWeight: 'bold' }}
        >
          CurrentEdge
        </Box>
      </Typography>

      <Typography
        variant="h6"
        component="p"
        sx={{
          maxWidth: '1000px',
          color: '#64748b',
          mb: 4,
          fontSize: { xs: '1rem', md: '1.25rem' },
        }}
      >
        Your Success Starts Here&mdash;Premium Products, Unmatched Service
      </Typography>

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#cc9b2c',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          fontWeight: 'bold',
          textTransform: 'none',
          px: 3,
          py: 1.5,
          '&:hover': {
            backgroundColor: '#b38623',
            boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
          },
        }}
      >
        Photo Gallery
      </Button>
    </Box>
  );
};

export default Hero;