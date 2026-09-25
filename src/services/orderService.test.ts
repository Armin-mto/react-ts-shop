import { describe, expect, it } from "vitest";
import { placeOrder } from "./orderService";
import type { CartItem } from "../types/cart";
import type { ShippingAddress } from "../types/order";

describe("orderService", () => {
  it("calculates the correct total", async () => {
    const items: CartItem[] = [
      {
        product: {
          id: "p1",
          name: "هدفون",
          description: "هدفون تستی",
          price: 100,
          category: "electronics",
          imageUrl: "https://placehold.co/400x400",
          stock: 10,
        },
        quantity: 2,
      },
    ];

    const shippingAddress: ShippingAddress = {
      fullName: "آرمین",
      street: "خیابان تست",
      city: "تهران",
      postalCode: "123456",
      country: "ایران",
    };

    const result = await placeOrder(items, shippingAddress);

    expect(result.total).toBe(200);
  });
});
