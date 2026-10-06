import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ShippingAddress } from "../../types/order";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { placeOrder } from "../../services/orderService";

export default function CheckoutForm() {
  const [address, setAddress] = useState<ShippingAddress>({
    fullName: "",
    street: "",
    city: "",
    postalCode: "",
    country: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { cart, dispatch } = useCart();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const isInvalid = Object.values(address).some((value) => value === "");

    if (isInvalid) {
      setError("همه مقادیر را پر کنید");
      return;
    } else {
      setIsSubmitting(true);
      try {
        await placeOrder(cart.items, address);
        dispatch({ type: "CLEAR_CART" });
        navigate("/order-confirmation");
      } catch {
        setError("مجدد امتحان کنید");
      } finally {
        setIsSubmitting(false);
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-3 p-4">
      <input
        name="fullName"
        value={address.fullName}
        onChange={handleChange}
        placeholder="نام کامل"
        className="border rounded p-2"
      />
      <input
        name="street"
        value={address.street}
        onChange={handleChange}
        placeholder="آدرس"
        className="border rounded p-2"
      />
      <input
        name="city"
        value={address.city}
        onChange={handleChange}
        placeholder="شهر"
        className="border rounded p-2"
      />
      <input
        name="postalCode"
        value={address.postalCode}
        onChange={handleChange}
        placeholder="کدپستی"
        className="border rounded p-2"
      />
      <input
        name="country"
        value={address.country}
        onChange={handleChange}
        placeholder="کشور"
        className="border rounded p-2"
      />
      {error && <p className="text-red-600">{error}</p>}
      <button
        disabled={isSubmitting}
        type="submit"
        className="rounded bg-blue-600 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "در حال ثبت" : "ثبت سفارش"}
      </button>
    </form>
  );
}
