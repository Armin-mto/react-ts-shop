import type { Product } from "../types/product";
import type { Cart } from "../types/cart";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type PropsWithChildren,
} from "react";
import { loadFromStorage, saveToStorage } from "../hooks/useLocalStorage";

type CartAction =
  | { type: "ADD_ITEM"; product: Product }
  | { type: "REMOVE_ITEM"; productId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; quantity: number }
  | { type: "CLEAR_CART" };

function cartReducer(state: Cart, action: CartAction): Cart {
  switch (action.type) {
    case "CLEAR_CART":
      return { items: [], updatedAt: new Date().toISOString() };

    case "REMOVE_ITEM":
      return {
        items: state.items.filter(
          (item) => item.product.id !== action.productId,
        ),
        updatedAt: new Date().toISOString()
      };

    case "UPDATE_QUANTITY":
      return {
        items: state.items.map((item) =>
          item.product.id === action.productId
            ? { ...item, quantity: action.quantity }
            : item,
        ),
        updatedAt: new Date().toISOString(),
      };

    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.product.id === action.product.id,
      );

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.product.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
          updatedAt: new Date().toISOString(),
        };
      }

      return {
        items: [...state.items, { product: action.product, quantity: 1 }],
        updatedAt: new Date().toISOString(),
      };
    }
  }
}

interface CartContextValue {
  cart: Cart;
  dispatch: React.Dispatch<CartAction>;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: PropsWithChildren) {
  const [cart, dispatch] = useReducer(
    cartReducer,
    { items: [], updatedAt: new Date().toISOString() },
    (init) => loadFromStorage("cart", init),
  );

  useEffect(() => {
    saveToStorage("cart", cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
