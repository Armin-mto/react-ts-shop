import type { User } from "../types/user";

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fakeLogin(
  email: string,
  password: string,
): Promise<User> {
  await delay(500);
  if (email === "test@example.com" && password === "123456") {
    return { id: "1", name: "armin", email: email };
  } else {
    throw new Error("نام کاربری یا رمز اشتباه است");
  }
}
