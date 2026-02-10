'use client';

import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { Sort as SortIcon } from '@mui/icons-material';

interface ProductSortProps {
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Customer Rating' },
  { value: 'newest', label: 'Newest Arrivals' },
  { value: 'discount', label: 'Best Discount' },
];

/**
 * ProductSort Component
 * 
 * Dropdown component for sorting products.
 * Provides various sorting options for product listings.
 * 
 * @param sortBy - Current sort option
 * @param onSortChange - Callback when sort option changes
 */
export default function ProductSort({ sortBy, onSortChange }: ProductSortProps) {
  const handleChange = (event: SelectChangeEvent) => {
    onSortChange(event.target.value);
  };

  return (
    <FormControl sx={{ minWidth: 200 }} size="small">
      <InputLabel id="sort-select-label" sx={{ display: 'flex', alignItems: 'center' }}>
        <SortIcon sx={{ mr: 1, fontSize: 18 }} />
        Sort By
      </InputLabel>
      <Select
        labelId="sort-select-label"
        value={sortBy}
        label="Sort By"
        onChange={handleChange}
        startAdornment={<SortIcon sx={{ mr: 1, fontSize: 18 }} />}
      >
        {sortOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}