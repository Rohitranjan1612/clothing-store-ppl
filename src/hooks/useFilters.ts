"use client";

import { useSearchParams, useRouter } from "next/navigation";

export function useFilters() {
  const params = useSearchParams();
  const router = useRouter();

  const toggleFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(params.toString());

    const existing = newParams.getAll(key);

    if (existing.includes(value)) {
      const filtered = existing.filter((v) => v !== value);
      newParams.delete(key);
      filtered.forEach((v) => newParams.append(key, v));
    } else {
      newParams.append(key, value);
    }

    router.push(`/products?${newParams.toString()}`);
  };

  const setSingleFilter = (key: string, value?: string) => {
    const newParams = new URLSearchParams(params.toString());

    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }

    router.push(`/products?${newParams.toString()}`);
  };

  return {
    params,
    toggleFilter,
    setSingleFilter,
  };
}