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

    if (filters?.brand?.length) {
      products = products.filter((p) => filters.brand!.includes(p.brand));
    }

    if (filters?.search) {
      const search = filters.search.toLowerCase();
      products = products.filter((p) => p.name.toLowerCase().includes(search));
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
};
