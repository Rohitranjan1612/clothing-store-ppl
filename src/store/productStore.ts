import { create } from "zustand";
import { Product } from "@/types/product";

type ProductState = {
  entities: Record<string, Product>;
  ids: string[];

  addProducts: (products: Product[]) => void;
};

export const useProductStore = create<ProductState>((set) => ({
  entities: {},
  ids: [],

  addProducts: (products) =>
    set((state) => {
      const newEntities = { ...state.entities };
      const newIds = [...state.ids];

      products.forEach((p) => {
        if (!newEntities[p.id]) {
          newIds.push(p.id);
        }

        newEntities[p.id] = p;
      });

      return {
        entities: newEntities,
        ids: newIds,
      };
    }),
}));
