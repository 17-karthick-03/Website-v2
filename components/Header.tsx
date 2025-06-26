'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';
import Image from 'next/image';

const productLinks = [
  { label: 'View All Products', href: '/#products' },
  { label: 'Packaging Solutions', href: '/products/packaging-machines' },
  { label: 'Printing Solutions', href: '/products/printing-solutions' },
  { label: 'Inspection Solutions', href: '/products/inspection-solutions' },
  { label: 'Tea & Coffee Vending Machines', href: '/products/tea-coffee-vending' },
  { label: 'Water Treatment Plants', href: '/products/water-treatment' },
  { label: 'Display and Advertisement Solutions', href: '/products/display-advertising' },
];

const Header = () => {
  const [anchorElProducts, setAnchorElProducts] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleProductsClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElProducts(event.currentTarget);
  };

  const handleCloseProducts = () => {
    setAnchorElProducts(null);
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: '#c7dcee',
        color: '#1f2937',
        px: { xs: 2, md: 6 },
        py: 1.5,
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', gap: 2, minHeight: '70px' }}>
        {/* Logo and Brand */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Image src="/logo.webp" alt="Logo" width={60} height={60} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1f2937', fontSize: '1.25rem' }}>
              CurrentEdge
            </Typography>
            <Typography variant="caption" sx={{ color: '#cc9b2c', fontSize: '0.875rem' }}>
              Driving innovation, delivering excellence.
            </Typography>
          </Box>
        </Box>

        {/* Desktop Menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
          <Button
            component="a"
            href="/#"
            sx={{ color: '#1f2937', fontWeight: 500, fontSize: '1rem', '&:hover': { color: '#cc9b2c', background: 'transparent' } }}
          >
            Home
          </Button>
          <Button
            component="a"
            href="/#about"
            sx={{ color: '#1f2937', fontWeight: 500, fontSize: '1rem', '&:hover': { color: '#cc9b2c', background: 'transparent' } }}
          >
            About Us
          </Button>
          <Button
            onClick={handleProductsClick}
            endIcon={<ArrowDropDownIcon />}
            sx={{ color: '#1f2937', fontWeight: 500, fontSize: '1rem', '&:hover': { color: '#cc9b2c', background: 'transparent' } }}
          >
            Products
          </Button>
          <Menu
            anchorEl={anchorElProducts}
            open={Boolean(anchorElProducts)}
            onClose={handleCloseProducts}
            PaperProps={{ sx: { minWidth: 250 } }}
          >
            {productLinks.map(({ label, href }) => (
              <MenuItem
                key={label}
                component={href.startsWith('#') ? 'a' : Link}
                href={href}
                onClick={handleCloseProducts}
                sx={{ '&:hover': { color: '#cc9b2c' } }}
              >
                {label}
              </MenuItem>
            ))}
          </Menu>
          <Button
            component="a"
            href="/#services"
            sx={{ color: '#1f2937', fontWeight: 500, fontSize: '1rem', '&:hover': { color: '#cc9b2c', background: 'transparent' } }}
          >
            Services
          </Button>
        </Box>

        {/* Mobile Menu Icon */}
        <IconButton
          edge="end"
          color="inherit"
          onClick={toggleDrawer}
          sx={{ display: { xs: 'flex', md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 260 }} role="presentation" onClick={toggleDrawer}>
          <List>
            <ListItem component="a" href="#">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem component="a" href="#about">
              <ListItemText primary="About Us" />
            </ListItem>
            <Divider />
            {productLinks.map(({ label, href }) => (
              <ListItem
                key={label}
                component={href.startsWith('#') ? 'a' : Link}
                href={href}
                sx={{ '&:hover .MuiListItemText-root': { color: '#cc9b2c' } }}
              >
                <ListItemText primary={label} />
              </ListItem>
            ))}
            <Divider />
            <ListItem component="a" href="#services">
              <ListItemText primary="Services" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
