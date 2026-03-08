"use client"
import { useProductStore } from "@/store/productStore"
import ProductCard from "./ProductCard"

export default function ProductGrid() {
  const ids = useProductStore((s) => s.ids)
  const entities = useProductStore((s) => s.entities)
  if (!ids.length) {
    return (
      <div className="text-center py-20 text-gray-500">
        No products found
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {ids.map((id) => (
        <ProductCard
          key={id}
          product={entities[id]}
        />
      ))}
    </div>
  )
}