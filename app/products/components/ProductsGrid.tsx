'use client';

import { Grid } from '@mui/material';
import ProductCard from '@/components/products/ProductCard';
import ProductCardSkeleton from '@/components/products/ProductCardSkeleton';
import { Product } from '@/types/product';

interface ProductsGridProps {
  products: Product[];
  loading?: boolean;
  skeletonCount?: number;
}

/**
 * Products Grid Component
 * 
 * Responsive grid layout for displaying product cards.
 * Handles loading states and empty states.
 */
export default function ProductsGrid({ 
  products, 
  loading = false, 
  skeletonCount = 6 
}: ProductsGridProps) {
  
  const handleAddToCart = (productId: number) => {
    console.log('Add to cart:', productId);
    // Implement cart logic
  };

  const handleToggleFavorite = (productId: number) => {
    console.log('Toggle favorite:', productId);
    // Implement favorite logic
  };

  if (loading) {
    return (
      <Grid container spacing={3}>
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <Grid item key={`skeleton-${index}`} xs={12} sm={6} lg={4}>
            <ProductCardSkeleton />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} lg={4}>
          <ProductCard
            {...product}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
          />
        </Grid>
      ))}
    </Grid>
  );
}