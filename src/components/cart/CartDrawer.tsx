"use client";

import { useCartStore } from "@/store/cartStore";
import { mockProducts } from "@/data/mockProducts";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function CartDrawer({ open, onClose }: Props) {
  const { items, removeItem, updateQuantity } = useCartStore();

  const cartProducts = items.map((item) => {
    const product = mockProducts.find((p) => p.id === item.productId);

    return {
      ...item,
      product,
    };
  });

  const total = cartProducts.reduce((sum, item) => {
    if (!item.product) return sum;
    return sum + item.product.price * item.quantity;
  }, 0);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="ml-auto w-[400px] bg-white h-full shadow-xl p-6 relative">

        <h2 className="text-xl font-semibold mb-6">Your Cart</h2>

        {cartProducts.length === 0 && (
          <p className="text-gray-500">Cart is empty</p>
        )}

        <div className="space-y-4">

          {cartProducts.map((item) => {
            if (!item.product) return null;

            return (
              <div
                key={`${item.productId}-${item.size}`}
                className="flex gap-4 border-b pb-4"
              >

                <img
                  src={item.product.images[0]}
                  className="w-16 h-20 object-cover rounded"
                />

                <div className="flex-1">

                  <p className="font-medium">
                    {item.product.name}
                  </p>

                  <p className="text-sm text-gray-500">
                    Size: {item.size}
                  </p>

                  <p className="font-semibold">
                    ${item.product.price}
                  </p>

                  <div className="flex items-center gap-2 mt-2">

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.size,
                          Math.max(1, item.quantity - 1)
                        )
                      }
                      className="border px-2"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.productId,
                          item.size,
                          item.quantity + 1
                        )
                      }
                      className="border px-2"
                    >
                      +
                    </button>

                    <button
                      onClick={() =>
                        removeItem(item.productId, item.size)
                      }
                      className="ml-auto text-red-500 text-sm"
                    >
                      Remove
                    </button>

                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total */}
        <div className="absolute bottom-0 left-0 w-full border-t p-6">

          <div className="flex justify-between font-semibold text-lg">
            <span>Total</span>
            <span>${total}</span>
          </div>

        </div>

      </div>
    </div>
  );
}