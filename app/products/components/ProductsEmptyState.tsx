'use client';

import { Box, Typography, Button, Paper } from '@mui/material';
import { SearchOff as SearchOffIcon } from '@mui/icons-material';

interface ProductsEmptyStateProps {
  onClearFilters?: () => void;
}

/**
 * Products Empty State Component
 * 
 * Displayed when no products match the current filters.
 * Provides clear guidance and actions.
 */
export default function ProductsEmptyState({ 
  onClearFilters 
}: ProductsEmptyStateProps) {
  return (
    <Paper 
      elevation={0}
      sx={{ 
        p: 6, 
        textAlign: 'center',
        bgcolor: 'grey.50',
        borderRadius: 2,
      }}
    >
      <SearchOffIcon 
        sx={{ 
          fontSize: 64, 
          color: 'text.secondary', 
          mb: 2,
          opacity: 0.6,
        }} 
      />
      
      <Typography variant="h5" gutterBottom fontWeight="medium">
        No Products Found
      </Typography>
      
      <Typography 
        variant="body1" 
        color="text.secondary" 
        sx={{ mb: 4, maxWidth: 400, mx: 'auto' }}
      >
        We couldn't find any products matching your current filters.
        Try adjusting your search criteria or browse our full catalog.
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
        {onClearFilters && (
          <Button variant="contained" onClick={onClearFilters}>
            Clear All Filters
          </Button>
        )}
        <Button variant="outlined" href="/products">
          Browse All Products
        </Button>
      </Box>
    </Paper>
  );
}