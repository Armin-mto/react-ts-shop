export type Category = "clothing" | "electronics" | "toys" | "home" | "books";

export interface Product {
  category: Category;
  price: number;
  description: string;
  name: string;
  id: string;
  stock: number;
  imageUrl: string;
  rating?: number;
}
