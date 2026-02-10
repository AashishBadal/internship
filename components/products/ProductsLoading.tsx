'use client';

import { Grid, Skeleton, Box, Container } from '@mui/material';

/**
 * ProductsLoading Component
 * 
 * Loading skeleton for products page.
 * Provides visual feedback while products are being fetched.
 */
export default function ProductsLoading() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Breadcrumbs Skeleton */}
      <Skeleton width={200} height={24} sx={{ mb: 3 }} />
      
      {/* Header Skeleton */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Skeleton width={200} height={40} />
        <Skeleton width={150} height={40} />
      </Box>

      <Grid container spacing={3}>
        {/* Filters Skeleton */}
        <Grid item xs={12} md={3}>
          <Skeleton variant="rectangular" height={400} sx={{ borderRadius: 1 }} />
        </Grid>

        {/* Products Grid Skeleton */}
        <Grid item xs={12} md={9}>
          <Grid container spacing={3}>
            {Array.from({ length: 6 }).map((_, index) => (
              <Grid item key={index} xs={12} sm={6} lg={4}>
                <Skeleton variant="rectangular" height={400} sx={{ borderRadius: 1 }} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}