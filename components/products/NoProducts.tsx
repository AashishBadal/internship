'use client';

import { Box, Typography, Button } from '@mui/material';
import { SearchOff as SearchOffIcon } from '@mui/icons-material';

interface NoProductsProps {
  onClearFilters?: () => void;
}

/**
 * NoProducts Component
 * 
 * Displayed when no products match the current filters.
 * Provides option to clear filters.
 * 
 * @param onClearFilters - Callback to clear all filters
 */
export default function NoProducts({ onClearFilters }: NoProductsProps) {
  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <SearchOffIcon sx={{ fontSize: 80, color: 'text.secondary', mb: 2 }} />
      <Typography variant="h5" gutterBottom>
        No Products Found
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        We couldn't find any products matching your filters.
        Try adjusting your search criteria.
      </Typography>
      {onClearFilters && (
        <Button variant="contained" onClick={onClearFilters}>
          Clear All Filters
        </Button>
      )}
    </Box>
  );
}