'use client';

import { Box, Typography, Breadcrumbs, Link, TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import ProductSort from '@/components/products/ProductSort';
import { ProductFilter } from '@/types/product';

interface ProductsHeaderProps {
  totalProducts: number;
  filters: ProductFilter;
  onFilterChange: (filters: Partial<ProductFilter>) => void;
}

/**
 * Products Header Component
 * 
 * Contains breadcrumbs, page title, search, and sorting controls.
 * Clean and organized header section for products page.
 */
export default function ProductsHeader({
  totalProducts,
  filters,
  onFilterChange,
}: ProductsHeaderProps) {
  return (
    <Box sx={{ mb: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
        <Link color="inherit" href="/" underline="hover">
          Home
        </Link>
        <Typography color="text.primary">Products</Typography>
      </Breadcrumbs>

      {/* Title and Controls Row */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'stretch', sm: 'center' },
        gap: 2,
      }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom={false}>
            All Products
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {totalProducts} products found
          </Typography>
        </Box>

        <Box sx={{ 
          display: 'flex', 
          gap: 2,
          flexDirection: { xs: 'column', sm: 'row' },
          width: { xs: '100%', sm: 'auto' },
        }}>
          {/* Search Input */}
          <TextField
            placeholder="Search products..."
            value={filters.search || ''}
            onChange={(e) => onFilterChange({ search: e.target.value })}
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ 
              minWidth: { xs: '100%', sm: 200 },
              '& .MuiOutlinedInput-root': { height: 40 }
            }}
          />

          {/* Sort Dropdown */}
          <ProductSort
            sortBy={filters.sortBy || 'featured'}
            onSortChange={(sortBy) => onFilterChange({ sortBy })}
          />
        </Box>
      </Box>
    </Box>
  );
}