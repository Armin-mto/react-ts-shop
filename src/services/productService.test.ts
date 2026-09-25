import { describe, expect, it } from "vitest";
import { getProducts, getProductById } from "./productService";

describe("productServices", () => {
  it("returns all products", async () => {
    const result = await getProducts();
    expect(result).toHaveLength(16);
  });
  it("returns the correct product by id", async () => {
    const result = await getProductById("p1");
    expect(result?.name).toBe("هدفون بی‌سیم");
  });
});
