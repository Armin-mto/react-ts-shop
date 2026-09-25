import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../types/product";
import { getProductById } from "../services/productService";

type ProductDetailState =
  | { status: "loading" }
  | { status: "not-found" }
  | { status: "success"; data: Product };

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [state, setState] = useState<ProductDetailState>({ status: "loading" });

  useEffect(() => {
    getProductById(id!).then((data) => {
      if (data) {
        setState({ status: "success", data });
      } else {
        setState({ status: "not-found" });
      }
    });
  }, [id]);

  if (state.status === "loading") {
    return <p>در حال بارگذاری</p>;
  }

  if (state.status === "not-found") {
    return <p>محصول پیدا نشد</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">{state.data.name}</h1>
      <p className="text-gray-600">{state.data.description}</p>
      <p className="mt-2 font-bold">${state.data.price}</p>
    </div>
  );
}

export default ProductDetailPage;
