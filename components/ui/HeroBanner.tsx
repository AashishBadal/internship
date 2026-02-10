'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
}

/**
 * HeroBanner Component
 * 
 * Reusable hero banner component for promotional sections.
 * 
 * @param title - Main banner title
 * @param subtitle - Banner subtitle
 * @param imageUrl - Background image URL
 * @param ctaText - Call-to-action button text
 * @param ctaLink - Call-to-action link
 */
export default function HeroBanner({
  title,
  subtitle,
  imageUrl,
  ctaText,
  ctaLink,
}: HeroBannerProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: 300, md: 400 },
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
      />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ maxWidth: 600 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              color: 'white',
              fontWeight: 700,
              mb: 2,
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              color: 'white',
              mb: 4,
              opacity: 0.9,
            }}
          >
            {subtitle}
          </Typography>
          <Button
            component={Link}
            href={ctaLink}
            variant="contained"
            size="large"
            sx={{
              bgcolor: 'primary.main',
              '&:hover': { bgcolor: 'primary.dark' },
            }}
          >
            {ctaText}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}