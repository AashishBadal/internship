'use client';

import { Grid, Container, Typography, Box, Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import ProductCard from '@/components/products/ProductCard';
import HeroBanner from '@/components/ui/HeroBanner';

const featuredProducts = [
  {
    id: 1,
    name: 'Wireless Bluetooth Headphones',
    description: 'Noise-cancelling headphones with premium sound quality',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    rating: 4.5,
    discount: 15,
  },
  {
    id: 2,
    name: 'Smart Watch Series 5',
    description: 'Advanced fitness tracking and notifications',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Laptop Stand Pro',
    description: 'Ergonomic aluminum laptop stand',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853',
    rating: 4.3,
    discount: 10,
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    description: 'RGB mechanical keyboard with blue switches',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a',
    rating: 4.6,
  },
];

/**
 * Home Page Component
 * 
 * Main landing page showcasing featured products and promotions.
 * Implements responsive grid layout for product display.
 */
export default function HomePage() {
  const handleAddToCart = (productId: number) => {
    console.log('Add to cart:', productId);
    // Implement cart logic
  };

  const handleToggleFavorite = (productId: number) => {
    console.log('Toggle favorite:', productId);
    // Implement favorite logic
  };

  return (
    <>
      <HeroBanner
        title="Summer Sale"
        subtitle="Up to 50% off on selected items"
        imageUrl="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da"
        ctaText="Shop Now"
        ctaLink="/products"
      />

      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Featured Products
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Discover our most popular items
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductCard
                {...product}
                onAddToCart={handleAddToCart}
                onToggleFavorite={handleToggleFavorite}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            size="large"
            endIcon={<ArrowForward />}
            href="/products"
          >
            View All Products
          </Button>
        </Box>
      </Container>
    </>
  );
}