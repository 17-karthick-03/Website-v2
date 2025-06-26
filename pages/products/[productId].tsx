'use client';

import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { products, type SubProduct } from '../../lib/products-data';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Divider,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MovieIcon from '@mui/icons-material/Movie';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import Chatbot from '../../components/Chatbot';

export default function ProductDetailPage() {
  const router = useRouter();
  const { productId } = router.query;

  if (!productId || typeof productId !== 'string') return null;
  const product = products.find(p => p.id === productId);
  if (!product) {
    return (
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header />
        <Container sx={{ flexGrow: 1, py: 10, textAlign: 'center' }}>
          <Typography variant="h4" color="error" gutterBottom>
            Product not found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            The product you are looking for does not exist.
          </Typography>
          <Button
            variant="contained"
            href="/#products"
            startIcon={<ArrowBackIcon />}
            sx={{
              mt: 4,
              backgroundColor: '#cc9b2c',
              '&:hover': { backgroundColor: '#b38c22' },
            }}
          >
            Back to Products
          </Button>
        </Container>
        <Footer />
      </Box>
    );
  }

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box flexGrow={1} bgcolor="#c7dcee">
        <Box component="section">
          <Container>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 4,
                flexWrap: 'wrap',
                gap: 2,
              }}
            >
              <Button
                variant="outlined"
                href="/#products"
                startIcon={<ArrowBackIcon />}
                sx={{
                  borderColor: '#cc9b2c',
                  color: '#cc9b2c',
                  '&:hover': { borderColor: '#b38c22', color: '#b38c22' },
                }}
              >
                Back
              </Button>
              <Typography
                variant="h3"
                fontWeight={700}
                textAlign="center"
                sx={{ flexGrow: 1, color: '#1f2937' }}
              >
                {product.title}
              </Typography>
            </Box>

            {product.subProducts?.length ? (
              <Box
                display="flex"
                flexWrap="wrap"
                gap={3}
                sx={{ mb: 6 }}
              >
                {product.subProducts.map((subProduct: SubProduct) => (
                  <Box
                    key={subProduct.id}
                    sx={{
                      width: {
                        xs: '48%',
                        sm: '30%',
                        md: '18%',
                      },
                      minWidth: 120,
                    }}
                  >
                    <Paper elevation={2} sx={{ p: 2, textAlign: 'center', cursor: 'pointer' }}>
                      <Box sx={{ position: 'relative', width: '100%', height: 80, mb: 1 }}>
                        <Image
                          src={subProduct.imageSrc}
                          alt={subProduct.imageAlt}
                          fill
                          style={{ objectFit: 'cover', borderRadius: 6 }}
                          data-ai-hint={subProduct.aiHint}
                        />
                      </Box>
                      <Typography
                        variant="body2"
                        fontWeight={600}
                        noWrap
                        sx={{ color: '#1f2937' }}
                      >
                        {subProduct.name}
                      </Typography>
                    </Paper>
                  </Box>
                ))}
              </Box>
            ) : (
              <Box sx={{ mb: 6 }}>
                <Typography
                  variant="h5"
                  fontWeight={700}
                  gutterBottom
                  sx={{ color: '#1f2937' }}
                >
                  Models & Specifications
                </Typography>
                <Typography color="text.secondary">
                  No specific models or variations listed for this product category yet.
                  More details coming soon!
                </Typography>
              </Box>
            )}

            <Divider sx={{ my: 6 }} />

            <Typography
              variant="h5"
              fontWeight={600}
              gutterBottom
              sx={{ color: '#1f2937' }}
            >
              Learn More
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                mb: 6,
              }}
            >
              {product.categoryVideoPlaceholderUrl && (
                <Box flex={1}>
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#cc9b2c',
                      mb: 2,
                    }}
                  >
                    <MovieIcon sx={{ mr: 1 }} /> Product Category Overview
                  </Typography>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      paddingTop: '56.25%',
                      borderRadius: 2,
                      overflow: 'hidden',
                      boxShadow: 2,
                      border: '1px solid #ccc',
                    }}
                  >
                    <Image
                      src={product.categoryVideoPlaceholderUrl}
                      alt={`Overview video for ${product.title}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      data-ai-hint={product.categoryVideoAiHint || 'product overview'}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        bgcolor: 'rgba(0,0,0,0.3)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <svg
                        className="w-16 h-16 text-white/80"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    Watch our video to get a better understanding of {product.title}.
                  </Typography>
                </Box>
              )}

              <Box flex={1} display="flex">
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    width: '100%',
                    maxWidth: 380,
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight={600}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#cc9b2c',
                      mb: 2,
                    }}
                  >
                    <DescriptionIcon sx={{ mr: 1 }} /> Product Brochure
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 3 }}>
                    Download our comprehensive brochure for detailed specifications,
                    features, and benefits of our {product.title}.
                  </Typography>
                  <Button
                    variant="outlined"
                    href={product.brochureUrl || '/brochure-placeholder.pdf'}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderColor: '#cc9b2c',
                      color: '#cc9b2c',
                      '&:hover': {
                        borderColor: '#b38c22',
                        color: '#b38c22',
                      },
                    }}
                  >
                    View Brochure
                  </Button>

                  <Button
                    variant="contained"
                    href={product.brochureUrl || '/brochure-placeholder.pdf'}
                    download
                    startIcon={<DownloadIcon />}
                    sx={{
                      mt: 2,
                      backgroundColor: '#cc9b2c',
                      '&:hover': { backgroundColor: '#b38c22' },
                    }}
                  >
                    Download Brochure
                  </Button>
                </Paper>
              </Box>
            </Box>

            <Divider sx={{ my: 6 }} />

            <Typography variant="body1" color="text.secondary" align="center">
              For pricing or to discuss your specific needs for {product.title}, please
              contact our sales team. We are here to help you find the perfect solution.
            </Typography>
          </Container>
        </Box>
      </Box>
      <Chatbot/>
      <Footer />
    </Box>
    );
}
