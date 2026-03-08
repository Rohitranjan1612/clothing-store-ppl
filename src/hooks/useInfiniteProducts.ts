"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { productService } from "@/services/productService";
import { useProductStore } from "@/store/productStore";
import { ProductFilters, PaginatedProducts } from "@/types/product";

export function useInfiniteProducts(filters?: ProductFilters) {
  const addProducts = useProductStore((s) => s.addProducts);

  return useInfiniteQuery<
    PaginatedProducts,
    Error,
    PaginatedProducts,
    [string, ProductFilters?],
    number
  >({
    queryKey: ["products", filters],
    initialPageParam: 0,
    queryFn: async ({ pageParam = 0 }) => {
      const data = await productService.getProducts(pageParam, filters);
      addProducts(data.products);
      return data;
    },
    getNextPageParam: (lastPage) =>
      lastPage.hasMore ? lastPage.page + 1 : undefined,
  });
}
