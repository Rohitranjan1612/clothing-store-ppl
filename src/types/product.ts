export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  images: string[];
  sizes: Size[];
  colors: string[];
  isNew: boolean;
  inStock: boolean;
  stockCount: number;
  rating: number;
  reviewCount: number;
};

export type Size = "XS" | "S" | "M" | "L" | "XL" | "XXL";

export type ProductFilters = {
  brand?: string[];
  minPrice?: number;
  maxPrice?: number;
  sizes?: Size[];
  colors?: string[];
  search?: string;
  category?: string;
  inStock?: boolean;
};

export type PaginatedProducts = {
  products: Product[];
  page: number;
  hasMore: boolean;
};
