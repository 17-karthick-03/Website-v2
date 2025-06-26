import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Divider from '@mui/material/Divider';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#c7dcee',
        color: '#374151',
        px: { xs: 2, md: 8 },
        py: 4,
        borderTop: '2px solid #cc9b2c',
      }}
    >
      <Box
        display="grid"
        gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }}
        gap={3}
        justifyContent="center"
        alignItems="flex-start"
      >
        {/* Our Location */}
        <Box sx={{ borderRight: { md: '1px solid #374151' }, pr: { md: 4 } }}>
          <Box display="flex" alignItems="center" mb={1}>
            <LocationOnIcon sx={{ mr: 1, color: '#cc9b2c' }} />
            <Typography variant="subtitle1" fontWeight="bold">
              <Link href="https://maps.app.goo.gl/2CKGGBXnDDZcvBZX9" color="inherit" underline="hover">
                Our Location
              </Link>
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ whiteSpace: 'pre-line', mb: 2 }}>
            Currentedge System Pvt Ltd{'\n'}
            No 136, New Borewell,{'\n'}
            Konena Agrahara{'\n'}
            Bangalore 560017
          </Typography>
        </Box>

        {/* Connect With Us */}
        <Box sx={{ borderRight: { md: '1px solid #374151' }, px: { md: 4 } }}>
          <Typography variant="subtitle1" gutterBottom fontWeight="bold">
            Connect With Us
          </Typography>
          <Box display="flex" alignItems="center" mb={1}>
            <PhoneIcon sx={{ mr: 1, color: '#cc9b2c' }} fontSize="small" />
            <Link href="tel:+917022697827" color="inherit" underline="hover">
              +91 7022697827
            </Link>
          </Box>
          <Box display="flex" alignItems="center" mb={2}>
            <EmailIcon sx={{ mr: 1, color: '#cc9b2c' }} fontSize="small" />
            <Link href="mailto:info@currentedge.in" color="inherit" underline="hover">
              info@currentedge.in
            </Link>
          </Box>
          <Box>
            <IconButton
              component="a"
              href="https://wa.me/917022697827"
              target="_blank"
              rel="noopener"
              aria-label="WhatsApp"
              sx={{ color: '#cc9b2c' }}
            >
              <WhatsAppIcon />
            </IconButton>
            <IconButton
              component="a"
              href="https://www.instagram.com/currentedgesystemspvt?igsh=YzBpMWl4dm5sY2k1"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
              sx={{ color: '#cc9b2c' }}
            >
              <InstagramIcon />
            </IconButton>
          </Box>
        </Box>

        {/* Working Hours */}
        <Box sx={{ pl: { md: 4 } }}>
          <Typography variant="subtitle1" gutterBottom fontWeight="bold">
            Working Hours
          </Typography>
          <Typography variant="body2">
            Monday – Friday: 9:00 AM – 6:00 PM
            <br />
            Saturday, Sunday: Holiday
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2, borderColor: '#374151' }} />

      <Box textAlign="center">
        <Typography variant="caption" sx={{ color: '#374151' }}>
          © {new Date().getFullYear()} CurrentEdge. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
