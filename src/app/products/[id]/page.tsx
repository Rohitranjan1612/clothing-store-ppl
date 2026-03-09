"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { productService } from "@/services/productService";
import { useCartStore } from "@/store/cartStore";

export default function ProductPage() {
  const params = useParams();
  const id = params.id as string;
  const [activeImage, setActiveImage] = useState(0);
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const addToCart = useCartStore((s) => s.addItem);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await productService.getProductById(id);
        setProduct(data);
      } catch {
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-20 text-center">
        Loading product...
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="max-w-6xl mx-auto py-20 text-center text-red-500">
        {error}
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }
    addToCart({
      productId: product.id,
      size: selectedSize,
      quantity: 1,
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
      {/* Image */}
      <div className="space-y-4">
        {/* Main Image */}
        <img
          src={product.images[activeImage]}
          alt={product.name}
          className="w-full rounded-lg"
        />

        {/* Thumbnails */}
        <div className="flex gap-3">
          {product.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`border rounded overflow-hidden ${
                activeImage === index ? "border-black" : "border-gray-200"
              }`}
            >
              <img src={img} alt="" className="w-16 h-16 object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">{product.name}</h1>

        <p className="text-gray-500">{product.brand}</p>

        <div className="text-xl font-bold">${product.price}</div>

        {/* Sizes */}
        <div>
          <p className="font-medium mb-2">Select Size</p>

          <div className="flex gap-2 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`border px-3 py-1 rounded ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAddToCart}
          className="bg-black text-white px-6 py-3 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
