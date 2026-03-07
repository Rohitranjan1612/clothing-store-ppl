import { create } from "zustand"

type CartItem = {
  productId: string
  size: string
  quantity: number
}

type CartState = {
  items: CartItem[]

  addItem: (item: CartItem) => void

  removeItem: (productId: string) => void

  updateQuantity: (
    productId: string,
    quantity: number
  ) => void
}

export const useCartStore = create<CartState>((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => ({
      items: [...state.items, item]
    })),

  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter(
        (i) => i.productId !== productId
      )
    })),

  updateQuantity: (productId, quantity) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.productId === productId
          ? { ...i, quantity }
          : i
      )
    }))
}))