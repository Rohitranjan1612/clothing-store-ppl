import { Product } from "@/types/product"

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded p-4">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-64 object-cover rounded"
      />

      <div className="mt-3">
        <p className="text-sm text-gray-500">
          {product.brand}
        </p>

        <h3 className="font-semibold">
          {product.name}
        </h3>

        <p className="font-bold">${product.price}</p>

        <p className="text-xs text-gray-400">
          {product.stockCount} items left
        </p>
      </div>
    </div>
  )
}