import { describe, expect, it } from "vitest";
import { fakeLogin } from "./authService";

describe("authService", () => {
  it("login successful", async () => {
    const result = await fakeLogin("test@example.com", "123456");
    expect(result.email).toBe("test@example.com");
  });
  it("password is wrong", async () => {
    const result = fakeLogin("wrong@example.com", "wrong");
    await expect(result).rejects.toThrow()
  })
});
