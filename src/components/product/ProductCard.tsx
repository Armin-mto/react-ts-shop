import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import type { MouseEvent } from "react";
import { useCart } from "../../hooks/useCart";

interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart();

  function handleAddToCart(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "ADD_ITEM", product });
  }

  return (
    <Link to={`/products/${product.id}`} className="border rounded p-4 block">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="h-40 w-full object-cover"
      />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="mt-2 font-bold">{product.price}</p>
      <button onClick={handleAddToCart} className="mt-2 w-full rounded bg-blue-600 py-1 text-white">
        افزودن به سبد
      </button>
    </Link>
  );
}

export default ProductCard;
