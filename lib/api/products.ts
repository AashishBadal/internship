import { ProductFilter, ProductsResponse } from '@/types/product';

const MOCK_PRODUCTS = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  description: `High-quality product ${i + 1} with amazing features`,
  price: Math.floor(Math.random() * 500) + 50,
  originalPrice: Math.floor(Math.random() * 600) + 100,
  image: `https://picsum.photos/seed/product${i}/400/300`,
  category: ['Electronics', 'Fashion', 'Home', 'Books'][i % 4],
  rating: Math.random() * 2 + 3,
  reviews: Math.floor(Math.random() * 200),
  inStock: Math.random() > 0.2,
  discount: Math.random() > 0.5 ? Math.floor(Math.random() * 50) + 10 : undefined,
}));

export async function fetchProducts(filters: ProductFilter): Promise<ProductsResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));

  let filteredProducts = [...MOCK_PRODUCTS];

  // Apply filters
  if (filters.category) {
    filteredProducts = filteredProducts.filter(p => p.category === filters.category);
  }
  
  if (filters.minPrice !== undefined && filters.maxPrice !== undefined) {
    filteredProducts = filteredProducts.filter(p => 
      p.price >= filters.minPrice! && p.price <= filters.maxPrice!
    );
  }
  
  if (filters.inStock) {
    filteredProducts = filteredProducts.filter(p => p.inStock);
  }
  
  if (filters.search) {
    filteredProducts = filteredProducts.filter(p =>
      p.name.toLowerCase().includes(filters.search!.toLowerCase()) ||
      p.description.toLowerCase().includes(filters.search!.toLowerCase())
    );
  }

  // Apply sorting
  if (filters.sortBy) {
    switch (filters.sortBy) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
    }
  }

  // Paginate
  const page = filters.page || 1;
  const limit = filters.limit || 12;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  return {
    products: paginatedProducts,
    pagination: {
      page,
      limit,
      total: filteredProducts.length,
      pages: Math.ceil(filteredProducts.length / limit),
    },
  };
}