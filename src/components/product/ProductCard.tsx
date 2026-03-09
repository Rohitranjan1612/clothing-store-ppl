import { Product } from "@/types/product";
import Link from "next/link";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="bg-white rounded-xl border hover:shadow-lg transition">
      <div className="relative">
        <Link href={`/products/${product.id}`}>
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-[320px] object-cover rounded-t-xl"
          />
        </Link>
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-teal-500 text-white text-xs px-2 py-1 rounded">
            New Arrival
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-500">{product.brand}</p>
        <h3 className="font-medium text-gray-900">{product.name}</h3>
        <p className="mt-1 font-semibold text-lg">${product.price}</p>
        <p className="text-xs text-red-500">{product.stockCount} items left</p>
      </div>
    </div>
  );
}
