import { create } from "zustand";

type CartItem = {
  productId: string;
  size: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
};

export const useCartStore = create<CartState>((set, get) => ({
  items: JSON.parse(localStorage.getItem("cart") || "[]"),
  addItem: (item) =>
    set((state) => {
      const existing = state.items.find(
        (i) => i.productId === item.productId && i.size === item.size
      );
      let newItems;
      if (existing) {
        newItems = state.items.map((i) =>
          i.productId === item.productId && i.size === item.size
            ? {
                ...i,
                quantity: i.quantity + item.quantity,
              }
            : i
        );
      } else {
        newItems = [...state.items, item];
      }
      localStorage.setItem("cart", JSON.stringify(newItems));
      return { items: newItems };
    }),
  removeItem: (productId, size) =>
    set((state) => {
      const newItems = state.items.filter(
        (i) => !(i.productId === productId && i.size === size)
      );
      localStorage.setItem("cart", JSON.stringify(newItems));
      return { items: newItems };
    }),
  updateQuantity: (productId, size, quantity) =>
    set((state) => {
      const newItems = state.items.map((i) =>
        i.productId === productId && i.size === size ? { ...i, quantity } : i
      );
      localStorage.setItem("cart", JSON.stringify(newItems));
      return { items: newItems };
    }),
}));
