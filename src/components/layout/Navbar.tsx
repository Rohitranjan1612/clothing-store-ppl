"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { Heart, ShoppingCart, User, LogOut } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import CartDrawer from "@/components/cart/CartDrawer";
import NavbarSearch from "./NavbarSearch";

export default function Navbar() {
  const [cartOpen, setCartOpen] = useState(false);
  const cartItems = useCartStore((s) => s.items);
  const loadCart = useCartStore((s) => s.loadCart);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    router.push("/login");
  };
  useEffect(() => {
    loadCart();
  }, []);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/products" className="text-teal-600 font-semibold text-xl">
          Stella
        </Link>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-10">
          <Suspense
            fallback={
              <div className="w-full border rounded-xl px-4 py-2 text-sm bg-gray-50" />
            }
          >
            <NavbarSearch />
          </Suspense>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Wishlist */}
          {/* <button className="hover:text-teal-600 transition">
            <Heart size={20} />
          </button> */}

          {/* Cart */}
          <button
            className="relative hover:text-teal-600 transition"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingCart size={20} />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 rounded-full">
                {totalItems}
              </span>
            )}
          </button>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="hover:text-teal-600 transition"
            >
              <User size={20} />
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-40 bg-white border rounded-lg shadow-lg">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full px-4 py-2 text-sm hover:bg-gray-100"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </header>
  );
}
