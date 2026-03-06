import { Product } from "@/types/product"

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Soft Cotton Shirt",
    brand: "Uniqlo",
    category: "Shirts",
    price: 40,
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
    ],
    sizes: ["S", "M", "L"],
    colors: ["#000000", "#ffffff"],
    isNew: true,
    inStock: true,
    stockCount: 12,
    rating: 4.4,
    reviewCount: 88
  },
  {
    id: "2",
    name: "Classic Long Sleeve",
    brand: "Nike",
    category: "T-Shirts",
    price: 35,
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["#1f2937"],
    isNew: false,
    inStock: true,
    stockCount: 22,
    rating: 4.6,
    reviewCount: 120
  }
]