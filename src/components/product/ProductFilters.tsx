import type { ChangeEvent } from "react";
import type { Category } from "../../types/product";

interface ProductFiltersProps {
  category: Category | "all";
  onCategoryChange: (category: Category | "all") => void;
  search: string;
  onSearchChange: (search: string) => void;
}

function ProductFilters({
  category,
  onCategoryChange,
  search,
  onSearchChange
}: ProductFiltersProps) {
  return (
    <div className="flex gap-4 p-4">
      <input
        type="text"
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onSearchChange(e.target.value)
        }
        placeholder="جستجو..."
        className="border rounded p-2"
      />
      <select
        value={category}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          onCategoryChange(e.target.value as Category | "all")
        }
      >
        <option value="all">همه</option>
        <option value="electronics">الکترونیک</option>
        <option value="clothing">پوشاک</option>
        <option value="books">کتاب</option>
        <option value="home">خانه</option>
        <option value="toys">اسباب‌بازی</option>
      </select>
    </div>
  );
}

export default ProductFilters;