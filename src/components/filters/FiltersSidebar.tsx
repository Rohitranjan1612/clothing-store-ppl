"use client";

import { useFilters } from "@/hooks/useFilters";
import { BRANDS, SIZES, CATEGORIES, COLORS } from "@/constants/filters";
import PriceRange from "./PriceRange";

export default function FiltersSidebar() {
  const { params, toggleFilter, setSingleFilter } = useFilters();

  const activeBrands = params.getAll("brand");
  const activeSizes = params.getAll("size");
  const activeCategory = params.get("category");
  const minPrice = params.get("minPrice") || "";
  const maxPrice = params.get("maxPrice") || "";

  return (
    <aside className="bg-white border rounded-xl p-6 space-y-8 w-64">
      <h3 className="font-semibold text-lg">Filter</h3>
      {/* Brand */}
      <div>
        <p className="font-medium mb-3">Brand</p>
        <div className="space-y-2 text-sm">
          {BRANDS.map((brand) => (
            <label key={brand} className="flex gap-2 items-center">
              <input
                type="checkbox"
                checked={activeBrands.includes(brand)}
                onChange={() => toggleFilter("brand", brand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>
      {/* Price Range */}
      <div>
        <p className="font-medium mb-3">Price</p>
        <PriceRange />
      </div>
      {/* Category */}
      <div>
        <p className="font-medium mb-3">Category</p>
        <div className="space-y-2 text-sm">
          {CATEGORIES.map((cat) => (
            <label key={cat} className="flex gap-2 items-center">
              <input
                type="radio"
                name="category"
                checked={activeCategory === cat}
                onChange={() => setSingleFilter("category", cat)}
              />
              {cat}
            </label>
          ))}
        </div>
      </div>
      {/* Size */}
      <div>
        <p className="font-medium mb-3">Size</p>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((size) => (
            <button
              key={size}
              onClick={() => toggleFilter("size", size)}
              className={`border px-3 py-1 rounded text-sm ${
                activeSizes.includes(size)
                  ? "bg-teal-500 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      {/* Color */}
      <div>
        <p className="font-medium mb-3">Color</p>
        <div className="flex flex-wrap gap-3">
          {COLORS.map((color) => (
            <button
              key={color}
              onClick={() => toggleFilter("color", color)}
              className="w-6 h-6 rounded-full border"
              style={{ background: color }}
            />
          ))}
        </div>
      </div>

      {/* In Stock */}
      <div>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={params.get("inStock") === "true"}
            onChange={() =>
              setSingleFilter(
                "inStock",
                params.get("inStock") === "true" ? undefined : "true"
              )
            }
          />
          In Stock Only
        </label>
      </div>
    </aside>
  );
}
