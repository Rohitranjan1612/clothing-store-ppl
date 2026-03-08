"use client"

import { useRef, useEffect } from "react"
import { useInfiniteProducts } from "@/hooks/useInfiniteProducts"
import ProductGrid from "@/components/ProductGrid"

export default function ProductsPage() {

  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = useInfiniteProducts()

  const loaderRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage()
        }
      },
      { threshold: 1 }
    )

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }

    return () => observer.disconnect()

  }, [hasNextPage, fetchNextPage])

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">

      <ProductGrid />

      <div ref={loaderRef} className="h-20 flex items-center justify-center">

        {isFetchingNextPage && "Loading more..."}

      </div>

    </main>
  )
}