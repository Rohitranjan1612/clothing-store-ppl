"use client";

import { useRouter, useSearchParams } from "next/navigation";
import debounce from "lodash.debounce";
import { useMemo } from "react";

export function useSearch() {
  const router = useRouter();
  const params = useSearchParams();

  const updateSearch = useMemo(
    () =>
      debounce((value: string) => {
        const newParams = new URLSearchParams(params.toString());

        if (value) {
          newParams.set("search", value);
        } else {
          newParams.delete("search");
        }

        router.push(`/products?${newParams.toString()}`);
      }, 400),
    [params, router]
  );

  return updateSearch;
}