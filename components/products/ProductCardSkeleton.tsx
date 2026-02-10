'use client';

import { Card, Skeleton, Box } from '@mui/material';

/**
 * Product Card Skeleton Component
 * 
 * Loading skeleton for product cards.
 * Maintains consistent layout with actual product cards.
 */
export default function ProductCardSkeleton() {
  return (
    <Card sx={{ height: '100%', p: 2 }}>
      <Skeleton 
        variant="rectangular" 
        height={200} 
        sx={{ borderRadius: 1, mb: 2 }}
      />
      
      <Skeleton width="60%" height={24} sx={{ mb: 1 }} />
      <Skeleton width="40%" height={20} sx={{ mb: 2 }} />
      
      <Box sx={{ mb: 2 }}>
        <Skeleton width="80%" height={16} sx={{ mb: 0.5 }} />
        <Skeleton width="90%" height={16} />
      </Box>
      
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Skeleton variant="circular" width={20} height={20} sx={{ mr: 0.5 }} />
        <Skeleton variant="circular" width={20} height={20} sx={{ mr: 0.5 }} />
        <Skeleton variant="circular" width={20} height={20} sx={{ mr: 0.5 }} />
        <Skeleton variant="circular" width={20} height={20} sx={{ mr: 0.5 }} />
        <Skeleton variant="circular" width={20} height={20} sx={{ mr: 1 }} />
        <Skeleton width={60} height={20} />
      </Box>
      
      <Skeleton width="40%" height={32} />
    </Card>
  );
}