"use client";

import { useRef, useEffect, useMemo } from "react";
import { useInfiniteProducts } from "@/hooks/useInfiniteProducts";
import ProductGrid from "@/components/product/ProductGrid";
import FiltersSidebar from "@/components/filters/FiltersSidebar";
import HeroBanner from "@/components/layout/HeroBanner";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductsPage() {
  const params = useSearchParams();
  const router = useRouter();
  const filters = useMemo(
    () => ({
      search: params.get("search") || undefined,
      brand: params.getAll("brand") || undefined,
      size: params.getAll("size") || undefined,
      category: params.get("category") || undefined,
      colors: params.getAll("color") || undefined,
      inStock: params.get("inStock") === "true",
      minPrice: params.get("minPrice")
        ? Number(params.get("minPrice"))
        : undefined,
      maxPrice: params.get("maxPrice")
        ? Number(params.get("maxPrice"))
        : undefined,
    }),
    [params]
  );

  const { fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteProducts(filters);

  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  return (
    <main>
      <HeroBanner />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex gap-10">
          <div className="hidden lg:block w-64">
            <FiltersSidebar />
          </div>
          <div className="flex-1">
            <ProductGrid />
            <div
              ref={loaderRef}
              className="h-20 flex justify-center items-center"
            >
              {isFetchingNextPage && "Loading more..."}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
