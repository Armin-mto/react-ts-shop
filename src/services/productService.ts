
import type { Category, Product } from "../types/product";
import { products } from "../data/products";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProducts(): Promise<Product[]> {
  await delay(500);
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  await delay(300);
  return products.find((product) => product.id === id);
}

export async function getFilteredProducts(
  category: Category | "all",
  search: string,
): Promise<Product[]> {
  await delay(300);
  return products.filter((product) => {
    const matchesCategory = category === "all" || product.category === category;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}
