"use client";

import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { Heart, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  const cartItems = useCartStore((s) => s.items);

  return (
    <header className="border-b bg-white sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/products"
          className="text-xl font-semibold text-teal-600"
        >
          Stella
        </Link>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-xl mx-8">

          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Wishlist */}
          <button className="relative">
            <Heart className="w-5 h-5 text-gray-600" />
          </button>

          {/* Cart */}
          <button className="relative">
            <ShoppingCart className="w-5 h-5 text-gray-600" />

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {cartItems.length}
              </span>
            )}
          </button>

          {/* User */}
          <button>
            <User className="w-5 h-5 text-gray-600" />
          </button>

        </div>
      </div>
    </header>
  );
}