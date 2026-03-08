"use client";

import { useRef, useEffect } from "react";
import { useInfiniteProducts } from "@/hooks/useInfiniteProducts";
import ProductGrid from "@/components/product/ProductGrid";
import FiltersSidebar from "@/components/filters/FiltersSidebar";
import HeroBanner from "@/components/layout/HeroBanner";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const { fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteProducts();

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

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
          {/* Sidebar */}
          <div className="hidden lg:block w-64">
            <FiltersSidebar />
          </div>

          {/* Product Grid */}
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
