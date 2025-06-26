'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { Box, Typography, Button, IconButton, useMediaQuery } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { useRouter } from 'next/router';

const products = [
  { title: 'Inspection Solutions', description: 'Protecting Your Product Integrity, One Scan at a Time.', image: '/images/inspection.jpg', link: '/products/inspection-solutions' },
  { title: 'Tea & Coffee Vending Machines', description: 'Brewing Convenience, Sip by Sip.', image: '/images/coffee.jpg', link: '/products/tea-coffee-vending' },
  { title: 'Water Treatment Plants', description: 'Pure Solutions for Clean, Safe Water.', image: '/images/watertreatment.jpg', link: '/products/water-treatment' },
  { title: 'Packaging Machines', description: 'Packaging precision at every step.', image: '/images/packagingmachine.jpg', link: '/products/packaging-machines' },
  { title: 'Printing Solutions', description: 'Bringing ideas to life with color.', image: '/images/printing.jpg', link: '/products/printing-solutions' },
  { title: 'Display & Advertising', description: 'Engage your audience effectively.', image: '/images/display.jpg', link: '/products/display-advertising' },
];

const ProductSection = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const router = useRouter();

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  }, []);

  useEffect(() => {
    if (isHovered || isMobile) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext, isHovered, isMobile]);

  const MIN_SWIPE_DISTANCE = 50;
  const onTouchStart = (e) => setTouchStartX(e.targetTouches[0].clientX);
  const onTouchMove = (e) => setTouchEndX(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    if (distance > MIN_SWIPE_DISTANCE) handleNext();
    else if (distance < -MIN_SWIPE_DISTANCE) handlePrevious();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const getVisibleProducts = () => {
    if (isMobile) {
      return [products[currentIndex]];
    } else {
      return [
        products[currentIndex % products.length],
        products[(currentIndex + 1) % products.length],
        products[(currentIndex + 2) % products.length],
      ];
    }
  };

  const visibleProducts = getVisibleProducts();

  return (
    <Box
      sx={{
        py: 8,
        px: 2,
        textAlign: 'center',
        backgroundColor: '#c4d9ef',
        position: 'relative',
      }}
    >
      <Typography variant="h4" fontWeight={600} gutterBottom>
        Product Section
      </Typography>
      <Typography sx={{ maxWidth: 480, mx: 'auto', mb: 4, color: '#4b667f' }}>
        Explore our innovative range of products designed for excellence and reliability.
      </Typography>

      <IconButton
        onClick={handlePrevious}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 8,
          transform: 'translateY(-50%)',
          zIndex: 2,
          backgroundColor: '#ffffffcc',
          display: 'flex',
        }}
      >
        <ChevronLeft />
      </IconButton>

      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 8,
          transform: 'translateY(-50%)',
          zIndex: 2,
          backgroundColor: '#ffffffcc',
          display: 'flex',
        }}
      >
        <ChevronRight />
      </IconButton>

      <Box
        sx={{
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'center',
          gap: isMobile ? 2 : 3,
          flexWrap: 'nowrap',
          px: isMobile ? 2 : 0,
          overflowX: isMobile ? 'scroll' : 'visible',
          scrollSnapType: isMobile ? 'x mandatory' : 'none',
          WebkitOverflowScrolling: 'touch',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {visibleProducts.map((product, i) => (
          <Box
            key={i}
            sx={{
              flex: '0 0 auto',
              scrollSnapAlign: isMobile ? 'center' : 'none',
              backgroundColor: 'white',
              borderRadius: 2,
              overflow: 'hidden',
              width: isMobile ? '90%' : 300,
              mx: isMobile ? 'auto' : 2,
              boxShadow: '0 10px 24px rgba(0,0,0,0.1)',
              border: '1px solid #ddd',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': !isMobile && {
                transform: 'scale(1.05)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              },
            }}
          >
            <Box
              component="img"
              src={product.image}
              alt={product.title}
              sx={{
                width: '100%',
                height: { xs: 200, sm: 220 },
                objectFit: 'cover',
              }}
            />
            <Box sx={{ p: 2 }}>
              <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                {product.title}
              </Typography>
              <Typography sx={{ color: '#4b667f', mb: 2, fontSize: '0.9rem' }}>
                {product.description}
              </Typography>
              <Button
                variant="contained"
                onClick={() => router.push(product.link)}
                sx={{
                  backgroundColor: '#cc9b2c',
                  '&:hover': { backgroundColor: '#b38c22' },
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                Explore
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
        {products.map((_, i) => (
          <Box
            key={i}
            onClick={() => setCurrentIndex(i)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor: i === currentIndex ? '#cc9b2c' : '#a0aec0',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ProductSection;
