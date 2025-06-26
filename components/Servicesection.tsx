'use client';

import React from 'react';
import {
  Box,
  Typography,
  Paper,
  useTheme,
  useMediaQuery,
  CssBaseline,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import ShieldIcon from '@mui/icons-material/Shield';

const services = [
  {
    icon: <BuildIcon sx={{ color: '#cc9b2c', fontSize: 40 }} />,
    title: 'Installation',
    description:
      'We are responsible for installation, Training and Support Services.',
  },
  {
    icon: <SettingsIcon sx={{ color: '#cc9b2c', fontSize: 40 }} />,
    title: 'Spare Parts',
    description:
      'We supply original Spare parts with best quality in minimum period of time.',
  },
  {
    icon: <ShieldIcon sx={{ color: '#cc9b2c', fontSize: 40 }} />,
    title: 'AMC Services',
    description:
      'We do Annual Maintenance services to ensure 100% uptime for our products.',
  },
];

const ServiceCard = ({ icon, title, description }: any) => (
  <Paper
    elevation={5}
    sx={{
      p: 4,
      minWidth: 260,
      maxWidth: 300,
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: 4,
      transition: 'transform 0.25s ease',
      transformOrigin: 'center top',
      '&:hover': {
        transform: 'scale(1.02)',
      },
      backgroundColor: '#ffffff',
      scrollSnapAlign: 'start',
    }}
  >
    <Box mb={2}>{icon}</Box>
    <Typography
      variant="h6"
      component="h3"
      sx={{ fontWeight: 600, color: '#374151', mb: 1 }}
    >
      {title}
    </Typography>
    <Typography
      variant="body2"
      align="center"
      sx={{ color: '#374151', lineHeight: 1.6 }}
    >
      {description}
    </Typography>
  </Paper>
);

const ServicesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <>
      <CssBaseline />
      <Box
        component="section"
        sx={{
          bgcolor: '#c7dcee',
          py: 10,
          px: 2,
          width: '100%',
          maxWidth: '100vw',
          overflowX: 'hidden',
          scrollPaddingTop: '100px',
        }}
      >
        <Box
          sx={{
            maxWidth: '1440px',
            mx: 'auto',
            textAlign: 'center',
            px: isMobile ? 1 : 4,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 700, color: '#374151', mb: 1 }}
          >
            Services
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: '#374151', mb: 8, maxWidth: 700, mx: 'auto' }}
          >
            Beyond the Sale: Expert Care to Keep Your Machinery Running Strong.
          </Typography>

          <Box
            sx={{
              display: 'flex',
              gap: 3,
              justifyContent: isMobile ? 'flex-start' : 'center',
              overflowX: 'auto',
              maxWidth: '100vw',
              px: 1,
              pb: 2,
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'thin',
              scrollbarColor: '#cc9b2c #e1e5ec',
              '&::-webkit-scrollbar': {
                height: '8px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#e1e5ec',
                borderRadius: '8px',
              },
              '&::-webkit-scrollbar-thumb': {
                background: 'linear-gradient(90deg, #cc9b2c, #e0bb59)',
                borderRadius: '8px',
                border: '2px solid #e1e5ec',
              },
              '&::-webkit-scrollbar-thumb:hover': {
                background: 'linear-gradient(90deg, #cc9b2c, #f1c86a)',
              },
            }}
          >
            {services.map(({ icon, title, description }) => (
              <ServiceCard
                key={title}
                icon={icon}
                title={title}
                description={description}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ServicesSection;