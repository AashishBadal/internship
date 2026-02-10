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
} from '@mui/material';
import { FavoriteBorder, ShoppingCart } from '@mui/icons-material';

interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rating: number;
  discount?: number;
  onAddToCart?: (id: number) => void;
  onToggleFavorite?: (id: number) => void;
}

/**
 * ProductCard Component
 * 
 * Displays product information in a card format.
 * Modular and reusable across different product listings.
 * 
 * @param id - Product identifier
 * @param name - Product name
 * @param description - Short product description
 * @param price - Product price
 * @param image - Product image URL
 * @param rating - Product rating (0-5)
 * @param discount - Optional discount percentage
 * @param onAddToCart - Callback for adding to cart
 * @param onToggleFavorite - Callback for toggling favorite status
 */
export default function ProductCard({
  id,
  name,
  description,
  price,
  image,
  rating,
  discount,
  onAddToCart,
  onToggleFavorite,
}: ProductCardProps) {
  const discountedPrice = discount ? price * (1 - discount / 100) : price;

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': { transform: 'translateY(-4px)' },
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
          sx={{ objectFit: 'cover' }}
        />
        {discount && (
          <Box
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              bgcolor: 'error.main',
              color: 'white',
              px: 1,
              py: 0.5,
              borderRadius: 1,
              fontSize: '0.75rem',
              fontWeight: 'bold',
            }}
          >
            -{discount}%
          </Box>
        )}
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h2" noWrap>
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating value={rating} precision={0.5} size="small" readOnly />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({rating.toFixed(1)})
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Typography variant="h6" color="primary">
            ${discountedPrice.toFixed(2)}
          </Typography>
          {discount && (
            <Typography
              variant="body2"
              color="text.disabled"
              sx={{ textDecoration: 'line-through' }}
            >
              ${price.toFixed(2)}
            </Typography>
          )}
        </Box>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Button
          variant="contained"
          startIcon={<ShoppingCart />}
          onClick={() => onAddToCart?.(id)}
          fullWidth
          sx={{ mr: 1 }}
        >
          Add to Cart
        </Button>
        <IconButton
          aria-label="add to favorites"
          onClick={() => onToggleFavorite?.(id)}
          size="small"
        >
          <FavoriteBorder />
        </IconButton>
      </CardActions>
    </Card>
  );
}