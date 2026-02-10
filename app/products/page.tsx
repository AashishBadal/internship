'use client';

import { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import ProductsHeader from './components/ProductsHeader';
import ProductsSidebar from './components/ProductsSidebar';
import ProductsGrid from './components/ProductsGrid';
import ProductsPagination from './components/ProductsPagination';
import ProductsEmptyState from './components/ProductsEmptyState';
import { Product, ProductFilter } from '@/types/product';
import { fetchProducts } from '@/lib/api/products';

/**
 * Products Page Component
 * 
 * Main container for products listing with filters, sorting, and pagination.
 * Uses flexbox for side-by-side layout.
 */
export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [filters, setFilters] = useState<ProductFilter>({
    category: '',
    minPrice: 0,
    maxPrice: 1000,
    inStock: false,
    sortBy: 'featured',
    search: '',
  });

  // Fetch products when filters or page change
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const result = await fetchProducts({ ...filters, page });
        setProducts(result.products);
        setTotalPages(result.pagination.pages);
        setTotalProducts(result.pagination.total);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [filters, page]);

  const handleFilterChange = (newFilters: Partial<ProductFilter>) => {
    setFilters({ ...filters, ...newFilters });
    setPage(1); // Reset to first page when filters change
  };

  const handleClearFilters = () => {
    setFilters({
      category: '',
      minPrice: 0,
      maxPrice: 1000,
      inStock: false,
      sortBy: 'featured',
      search: '',
    });
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header Section */}
      <ProductsHeader
        totalProducts={totalProducts}
        filters={filters}
        onFilterChange={handleFilterChange}
      />

      {/* Main Content with Side-by-side Layout */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        gap: 3,
        alignItems: 'flex-start'
      }}>
        {/* Filters Sidebar */}
        <Box sx={{ 
          width: { xs: '100%', md: 280 },
          flexShrink: 0,
          position: { md: 'sticky' },
          top: { md: 100 }
        }}>
          <ProductsSidebar
            filters={filters}
            onFilterChange={handleFilterChange}
            onClearFilters={handleClearFilters}
          />
        </Box>

        {/* Products Content Area */}
        <Box sx={{ 
          flex: 1,
          minWidth: 0, // Prevents overflow
          width: '100%'
        }}>
          {products.length > 0 ? (
            <>
              <ProductsGrid 
                products={products} 
                loading={loading}
              />
              {totalPages > 1 && (
                <ProductsPagination
                  currentPage={page}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          ) : (
            <ProductsEmptyState onClearFilters={handleClearFilters} />
          )}
        </Box>
      </Box>
    </Container>
  );
}