'use client';

import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';

interface NavigationProps {
  mobile?: boolean;
  onClose?: () => void;
}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Categories', href: '/categories' },
  { label: 'Deals', href: '/deals' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

/**
 * Navigation Component
 * 
 * Reusable navigation component for both desktop and mobile views.
 * 
 * @param mobile - If true, renders mobile-optimized navigation
 * @param onClose - Callback for closing mobile drawer
 */
export default function Navigation({ mobile = false, onClose }: NavigationProps) {
  const handleClick = () => {
    if (mobile && onClose) {
      onClose();
    }
  };

  const NavigationContent = (
    <Box sx={{ width: 250 }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              href={item.href}
              onClick={handleClick}
              sx={{ px: 3 }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  if (mobile) {
    return NavigationContent;
  }

  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          style={{ textDecoration: 'none' }}
        >
          <Box
            sx={{
              px: 2,
              py: 1,
              color: 'text.primary',
              '&:hover': { color: 'primary.main' },
            }}
          >
            {item.label}
          </Box>
        </Link>
      ))}
    </Box>
  );
}