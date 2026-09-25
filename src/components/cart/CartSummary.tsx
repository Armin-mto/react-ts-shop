import type { CartItem } from "../../types/cart";

interface CartSummaryProps {
  items: CartItem[];
}

function CartSummary({ items }: CartSummaryProps) {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <div className="border-t pt-4">
      <p className="text-lg font-bold">جمع کل: ${total.toFixed(2)}</p>
    </div>
  );
}

export default CartSummary;
