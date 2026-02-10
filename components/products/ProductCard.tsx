'use client';

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Rating,
  IconButton,
  Chip,
  Tooltip,
} from '@mui/material';
import {
  FavoriteBorder,
  Favorite,
  ShoppingCart,
  LocalShipping,
} from '@mui/icons-material';
import { useState } from 'react';
import Link from 'next/link';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  discount?: number;
  tags?: string[];
  onAddToCart?: (id: number) => void;
  onToggleFavorite?: (id: number) => void;
}

/**
 * Enhanced ProductCard Component
 * 
 * Displays product information with additional features:
 * - Discount badges
 * - Stock status
 * - Rating and reviews
 * - Quick actions
 * - Category tags
 */
export default function ProductCard({
  id,
  name,
  description,
  price,
  originalPrice,
  image,
  category,
  rating,
  reviews,
  inStock,
  discount,
  tags,
  onAddToCart,
  onToggleFavorite,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const finalPrice = discount ? price * (1 - discount / 100) : price;
  const savings = originalPrice ? originalPrice - finalPrice : 0;

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite?.(id);
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
        },
        position: 'relative',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <Box sx={{ position: 'absolute', top: 12, left: 12, zIndex: 1 }}>
        {discount && (
          <Chip
            label={`${discount}% OFF`}
            color="error"
            size="small"
            sx={{ fontWeight: 'bold', mr: 1 }}
          />
        )}
        {tags?.includes('New') && (
          <Chip label="NEW" color="success" size="small" sx={{ fontWeight: 'bold' }} />
        )}
      </Box>

      {/* Favorite Button */}
      <IconButton
        sx={{
          position: 'absolute',
          top: 12,
          right: 12,
          zIndex: 1,
          bgcolor: 'background.paper',
          '&:hover': { bgcolor: 'background.paper' },
        }}
        onClick={handleFavoriteClick}
      >
        {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
      </IconButton>

      {/* Product Image */}
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          height="220"
          image={image}
          alt={name}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.5s',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
        {!inStock && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: 'rgba(255,255,255,0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 'bold' }}>
              Out of Stock
            </Typography>
          </Box>
        )}
      </Box>

      {/* Product Content */}
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ display: 'block', mb: 0.5 }}
        >
          {category}
        </Typography>
        
        <Link href={`/products/${id}`} style={{ textDecoration: 'none' }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              mb: 1,
              color: 'text.primary',
              '&:hover': { color: 'primary.main' },
              fontWeight: 600,
              height: '2.5em',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {name}
          </Typography>
        </Link>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            mb: 2,
            height: '3em',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          {description}
        </Typography>

        {/* Rating */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Rating value={rating} precision={0.1} size="small" readOnly />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({reviews} reviews)
          </Typography>
        </Box>

        {/* Price */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
            ${finalPrice.toFixed(2)}
          </Typography>
          {originalPrice && (
            <Typography
              variant="body2"
              color="text.disabled"
              sx={{ textDecoration: 'line-through' }}
            >
              ${originalPrice.toFixed(2)}
            </Typography>
          )}
          {savings > 0 && (
            <Typography variant="caption" color="success.main" sx={{ fontWeight: 'bold' }}>
              Save ${savings.toFixed(2)}
            </Typography>
          )}
        </Box>

        {/* Shipping Info */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <LocalShipping fontSize="small" color="action" />
          <Typography variant="caption" color="text.secondary">
            Free shipping
          </Typography>
        </Box>
      </CardContent>

      {/* Actions */}
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Button
          variant="contained"
          startIcon={<ShoppingCart />}
          onClick={() => onAddToCart?.(id)}
          disabled={!inStock}
          fullWidth
          size="medium"
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardActions>
    </Card>
  );
}