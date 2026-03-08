import { Product } from "@/types/product";
import { BRANDS, CATEGORIES, SIZES, COLORS } from "@/constants/filters";

const getRandom = <T>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
const getRandomSizes = () => SIZES.filter(() => Math.random() > 0.5);
const getRandomColors = () => COLORS.filter(() => Math.random() > 0.6);
export const mockProducts: Product[] = Array.from({ length: 40 }, (_, i) => {
  const price = Math.floor(Math.random() * 200) + 20;
  return {
    id: String(i + 1),
    name: `${getRandom(CATEGORIES)} ${i + 1}`,
    brand: getRandom(BRANDS),
    category: getRandom(CATEGORIES),
    price,
    originalPrice:
      Math.random() > 0.6 ? price + Math.floor(Math.random() * 40) : undefined,
    images: [`https://picsum.photos/400/500?random=${i + 1}`],
    sizes: getRandomSizes(),
    colors: getRandomColors(),
    isNew: Math.random() > 0.7,
    inStock: Math.random() > 0.1,
    stockCount: Math.floor(Math.random() * 30),
    rating: Number((Math.random() * 5).toFixed(1)),
    reviewCount: Math.floor(Math.random() * 200),
  };
});
