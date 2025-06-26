'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Typography, Paper, useTheme, useMediaQuery } from '@mui/material';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      component="section"
      id="about"
      sx={{
        bgcolor: '#c7dcee',
        py: 10,
        px: 4,
        width: '100%',
      }}
    >
      {/* Main Title and Description */}
      <Box sx={{ maxWidth: '1000px', mx: 'auto', mb: 8, textAlign: 'center' }}>
        <Typography
          variant="h4"
          sx={{ color: '#374151', fontWeight: 700, mb: 2 }}
        >
          About CurrentEdge
        </Typography>
        <Typography
          sx={{
            color: '#374151',
            fontSize: '1rem',
            maxWidth: '800px',
            mx: 'auto',
            lineHeight: 1.8,
          }}
        >
          We are a dedicated team of professionals passionate about leveraging
          technology and strategy to solve complex business challenges.
        </Typography>
      </Box>

      {/* Enhanced Container */}
      <Box
        sx={{
          maxWidth: '1440px',
          mx: 'auto',
          p: 4,
          bgcolor: '#f9fafb',
          borderRadius: 4,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'flex-start',
            gap: 6,
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              px: 2,
            }}
          >
            <Paper
              elevation={3}
              sx={{
                width: isMobile ? '100%' : '600px',
                height: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#ffffff',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/aboutus.png"
                alt="About CurrentEdge"
                width={600}
                height={400}
                style={{
                  borderRadius: '12px',
                  objectFit: 'cover',
                  width: '100%',
                  height: 'auto',
                }}
              />
            </Paper>
          </Box>

          {/* Mission and Vision */}
          <Box sx={{ flex: 1.5, px: 2 }}>
            <Box mb={4}>
              <Typography
                variant="h6"
                sx={{ color: '#cc9b2c', fontWeight: 600, mb: 1 }}
              >
                Our Mission
              </Typography>
              <Typography sx={{ color: '#374151', lineHeight: 1.8 }}>
                At CURRENTEDGE SYSTEMS PVT LTD, our mission is to innovate and deliver cutting-edge
                solutions across diverse sectors including water treatment, electric vehicle charging
                infrastructure, packaging, printing, and inspection services. Guided by our unwavering
                commitment to quality, sustainability, and customer satisfaction, we strive to enhance
                the art of living by promoting environmentally responsible technologies and efficient
                operational practices. We dedicate ourselves to continuous improvement, fostering
                long-term partnerships, and creating value for our clients, communities, and the
                environment.
              </Typography>
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{ color: '#cc9b2c', fontWeight: 600, mb: 1 }}
              >
                Our Vision
              </Typography>
              <Typography sx={{ color: '#374151', lineHeight: 1.8 }}>
                To be a leading force in business transformation, recognized for our expertise,
                commitment to client success, and ethical practices. We aim to shape the future of
                industries through cutting-edge technology and forward-thinking strategies.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
