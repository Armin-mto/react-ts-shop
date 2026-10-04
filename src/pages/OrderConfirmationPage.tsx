import { Link } from "react-router-dom";

function OrderConfirmationPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">تایید سفارش</h1>
      <p>سفارش با موفقیت ثبت شد</p>
      <Link to="/products">محصولات</Link>
    </div>
  );
}

export default OrderConfirmationPage;
