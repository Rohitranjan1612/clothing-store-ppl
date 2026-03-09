import { mockProducts } from "@/data/mockProducts";
import { PaginatedProducts, ProductFilters } from "@/types/product";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

const PAGE_SIZE = 12;

export const productService = {
  async getProducts(
    page: number,
    filters?: ProductFilters
  ): Promise<PaginatedProducts> {
    await delay(800);

    let products = [...mockProducts];
    // Brand
    if (filters?.brand?.length) {
      products = products.filter((p) => filters.brand?.includes(p.brand));
    }
    // Search
    if (filters?.search) {
      const search = filters.search.toLowerCase();
      products = products.filter((p) => p.name.toLowerCase().includes(search));
    }
    // Category
    if (filters?.category) {
      products = products.filter((p) => p.category === filters.category);
    }
    // Size
    if (filters?.sizes?.length) {
      products = products.filter((p) =>
        p.sizes.some((s) => filters.sizes!.includes(s))
      );
    }
    // Color
    if (filters?.colors?.length) {
      products = products.filter((p) =>
        p.colors?.some((c) => filters.colors!.includes(c))
      );
    }
    // In Stock
    if (filters?.inStock) {
      products = products.filter((p) => p.inStock);
    }
    // Min Price
    if (filters?.minPrice !== undefined) {
      products = products.filter((p) => p.price >= filters?.minPrice!);
    }
    // Max Price
    if (filters?.maxPrice !== undefined) {
      products = products.filter((p) => p.price <= filters?.maxPrice!);
    }

    const start = page * PAGE_SIZE;
    const end = start + PAGE_SIZE;

    const paginated = products.slice(start, end);

    return {
      products: paginated,
      page,
      hasMore: end < products.length,
    };
  },
  async getProductById(id: string) {
    await delay(400);
    const product = mockProducts.find((p) => p.id === id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  }
};
