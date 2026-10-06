import { useCart } from "../hooks/useCart";
import CartItemRow from "../components/cart/CartItemRow";
import CartSummary from "../components/cart/CartSummary";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-semibold">سبد خرید</h1>
        <p className="mt-4 text-gray-600">سبد خریدت خالیه.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">سبد خرید</h1>
      <div className="mt-4">
        {cart.items.map((item) => (
          <CartItemRow key={item.product.id} item={item} />
        ))}
      </div>
      <CartSummary items={cart.items} />
      <Link to="/checkout">ادامه</Link>
    </div>
  );
}

export default CartPage;
