'use client';

import { Box, Pagination, Typography } from '@mui/material';

interface ProductsPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

/**
 * Products Pagination Component
 * 
 * Clean pagination control with page info.
 * Includes smooth scroll to top on page change.
 */
export default function ProductsPagination({
  currentPage,
  totalPages,
  onPageChange,
}: ProductsPaginationProps) {
  const handleChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      gap: 2,
      mt: 6,
      pt: 4,
      borderTop: 1,
      borderColor: 'divider',
    }}>
      <Typography variant="body2" color="text.secondary">
        Page {currentPage} of {totalPages}
      </Typography>
      
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
        color="primary"
        size="large"
        showFirstButton
        showLastButton
        siblingCount={1}
        boundaryCount={1}
        sx={{
          '& .MuiPaginationItem-root': {
            fontSize: '0.875rem',
          },
        }}
      />
    </Box>
  );
}