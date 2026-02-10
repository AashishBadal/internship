'use client';

import { Box, Typography, Button } from '@mui/material';
import { FilterList as FilterListIcon } from '@mui/icons-material';
import ProductFilters from '@/components/products/ProductFilters';
import { ProductFilter } from '@/types/product';

interface ProductsSidebarProps {
  filters: ProductFilter;
  onFilterChange: (filters: Partial<ProductFilter>) => void;
  onClearFilters: () => void;
}

/**
 * Products Sidebar Component
 * 
 * Fixed sidebar containing all filter controls.
 * Stays visible on scroll for better UX.
 */
export default function ProductsSidebar({
  filters,
  onFilterChange,
  onClearFilters,
}: ProductsSidebarProps) {
  const hasActiveFilters = 
    filters.category || 
    filters.minPrice > 0 || 
    filters.maxPrice < 1000 || 
    filters.inStock;

  return (
    <Box sx={{ 
      position: 'sticky', 
      top: 100,
      height: 'fit-content',
    }}>
      {/* Sidebar Header */}
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        mb: 3,
        pb: 2,
        borderBottom: 1,
        borderColor: 'divider',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <FilterListIcon />
          <Typography variant="h6">Filters</Typography>
        </Box>
        {hasActiveFilters && (
          <Button 
            size="small" 
            onClick={onClearFilters}
            variant="text"
            color="primary"
          >
            Clear All
          </Button>
        )}
      </Box>

      {/* Filter Components */}
      <ProductFilters
        filters={filters}
        onFilterChange={onFilterChange}
      />
    </Box>
  );
}