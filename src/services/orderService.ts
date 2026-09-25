import type { CartItem } from "../types/cart";
import type { Order, ShippingAddress } from "../types/order";

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function placeOrder(
  items: CartItem[],
  shippingAddress: ShippingAddress,
): Promise<Order> {
  await delay(500);

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return {
    id: crypto.randomUUID(),
    items,
    shippingAddress,
    total,
    status: "confirmed",
    createdAt: new Date().toISOString(),
  };
}
