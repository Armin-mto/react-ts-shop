import { useState, useEffect } from "react";
import type { Product, Category } from "../../types/product";
import { getFilteredProducts } from "../../services/productService";
import ProductCard from "./ProductCard";
import ProductFilters from "./ProductFilters";
import useDebounce from "../../hooks/useDebounce";

type ProductListState =
  | { status: "loading" }
  | { status: "error"; error: string }
  | { status: "success"; data: Product[] };

function ProductList() {
  const [state, setState] = useState<ProductListState>({ status: "loading" });
  const [category, setCategory] = useState<Category | "all">("all");
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    setState({ status: "loading" });
    getFilteredProducts(category, debouncedSearch)
      .then((data) => setState({ status: "success", data }))
      .catch(() =>
        setState({ status: "error", error: "خطا در دریافت محصولات" }),
      );
  }, [category, debouncedSearch]);

  return (
    <div>
      <ProductFilters
        category={category}
        onCategoryChange={setCategory}
        search={search}
        onSearchChange={setSearch}
      />
      {state.status === 'loading' && <p>در حال بارگذاری</p>}
      {state.status === 'error' && <p>{state.error}</p>}
      {state.status === 'success' && (
        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
          {state.data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList;