"use client";

import { useFilters } from "@/hooks/useFilters";

const MIN = 0;
const MAX = 500;

export default function PriceRange() {
  const { params, setSingleFilter } = useFilters();
  const minPrice = Number(params.get("minPrice") ?? MIN);
  const maxPrice = Number(params.get("maxPrice") ?? MAX);

  const handleMin = (value: number) => {
    if (value >= maxPrice) return;
    setSingleFilter("minPrice", String(value));
  };

  const handleMax = (value: number) => {
    if (value <= minPrice) return;
    setSingleFilter("maxPrice", String(value));
  };
  const minPercent = ((minPrice - MIN) / (MAX - MIN)) * 100;
  const maxPercent = ((maxPrice - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="space-y-3">
      <div className="relative h-6">
        <div className="absolute w-full h-1 bg-gray-200 top-1/2 -translate-y-1/2 rounded" />
        <div
          className="absolute h-1 bg-teal-500 top-1/2 -translate-y-1/2 rounded"
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={minPrice}
          onChange={(e) => handleMin(Number(e.target.value))}
          className="absolute w-full appearance-none bg-transparent pointer-events-none"
          style={{ zIndex: 3 }}
        />
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={maxPrice}
          onChange={(e) => handleMax(Number(e.target.value))}
          className="absolute w-full appearance-none bg-transparent"
          style={{ zIndex: 4 }}
        />
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <span>${minPrice}</span>
        <span>${maxPrice}</span>
      </div>
    </div>
  );
}
