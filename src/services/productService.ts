import { Product } from "@/types/product"
import { mockProducts } from "@/data/mockProducts"

const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

export const productService = {
  async getProducts(): Promise<Product[]> {
    await delay(800)

    // simulate occasional failure
    if (Math.random() < 0.1) {
      throw new Error("Failed to fetch products")
    }

    return mockProducts
  },

  async getProductById(id: string): Promise<Product> {
    await delay(500)

    const product = mockProducts.find((p) => p.id === id)

    if (!product) {
      throw new Error("Product not found")
    }

    return product
  }
}