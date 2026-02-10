'use client';

import {
  Box,
  Typography,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import { ProductFilter } from '@/types/product';

interface ProductFiltersProps {
  filters: ProductFilter;
  onFilterChange: (filters: Partial<ProductFilter>) => void;
}

const categories = [
  { name: 'Electronics', count: 42 },
  { name: 'Fashion', count: 38 },
  { name: 'Home & Garden', count: 25 },
  { name: 'Books', count: 19 },
  { name: 'Sports', count: 15 },
  { name: 'Beauty', count: 22 },
];

/**
 * ProductFilters Component
 * 
 * Organized filter controls in expandable accordions.
 * Clean and consistent design.
 */
export default function ProductFilters({
  filters,
  onFilterChange,
}: ProductFiltersProps) {

  const handlePriceChange = (_event: Event, newValue: number | number[]) => {
    const [min, max] = newValue as [number, number];
    onFilterChange({ minPrice: min, maxPrice: max });
  };

  const handleCategoryChange = (category: string) => {
    const newCategory = filters.category === category ? '' : category;
    onFilterChange({ category: newCategory });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {/* Price Range Filter */}
      <Accordion defaultExpanded elevation={0} sx={{ border: 1, borderColor: 'divider' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="medium">Price Range</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Slider
            value={[filters.minPrice, filters.maxPrice]}
            onChange={handlePriceChange}
            min={0}
            max={1000}
            step={10}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => `$${value}`}
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="caption" color="text.secondary">
              ${filters.minPrice}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              ${filters.maxPrice}
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>

      <Divider />

      {/* Categories Filter */}
      <Accordion defaultExpanded elevation={0} sx={{ border: 1, borderColor: 'divider' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="medium">Categories</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            {categories.map((category) => (
              <FormControlLabel
                key={category.name}
                control={
                  <Checkbox
                    checked={filters.category === category.name}
                    onChange={() => handleCategoryChange(category.name)}
                    size="small"
                  />
                }
                label={
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Typography variant="body2">{category.name}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {category.count}
                    </Typography>
                  </Box>
                }
                sx={{ mb: 0.5 }}
              />
            ))}
          </FormGroup>
        </AccordionDetails>
      </Accordion>

      <Divider />

      {/* Availability Filter */}
      <Accordion elevation={0} sx={{ border: 1, borderColor: 'divider' }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography fontWeight="medium">Availability</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.inStock}
                  onChange={(e) => onFilterChange({ inStock: e.target.checked })}
                  size="small"
                />
              }
              label={
                <Typography variant="body2">In Stock Only</Typography>
              }
            />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}