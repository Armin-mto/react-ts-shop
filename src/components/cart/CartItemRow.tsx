import type { CartItem } from "../../types/cart";
import { useCart } from "../../context/CartContext";

interface CartItemRowProps {
  item: CartItem;
}

function CartItemRow({ item }: CartItemRowProps) {
  const { dispatch } = useCart();

  return (
    <div className="flex items-center gap-4 border-b py-2">
      <img
        src={item.product.imageUrl}
        alt={item.product.name}
        className="h-16 w-16 object-cover"
      />
      <div className="flex-1">
        <p className="font-semibold">{item.product.name}</p>
        <p className="text-sm text-gray-600">${item.product.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          disabled={item.quantity === 1}
          onClick={() =>
            dispatch({
              type: "UPDATE_QUANTITY",
              productId: item.product.id,
              quantity: item.quantity - 1,
            })
          }
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() =>
            dispatch({
              type: "UPDATE_QUANTITY",
              productId: item.product.id,
              quantity: item.quantity + 1,
            })
          }
        >
          +
        </button>
      </div>
      <button
        onClick={() =>
          dispatch({ type: "REMOVE_ITEM", productId: item.product.id })
        }
      >
        حذف
      </button>
    </div>
  );
}

export default CartItemRow;