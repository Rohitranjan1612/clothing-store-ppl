"use client";

import { useSearch } from "@/hooks/useSearch";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function NavbarSearch() {
  const updateSearch = useSearch();
  const params = useSearchParams();

  const [value, setValue] = useState(
    params.get("search") || ""
  );
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);

    updateSearch(val);
  };

  return (
    <input
      value={value}
      onChange={handleChange}
      placeholder="What are you looking for?"
      className="w-full border rounded-xl px-4 py-2 text-sm bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
    />
  );
}