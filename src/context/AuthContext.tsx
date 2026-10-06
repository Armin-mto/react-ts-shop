import type React from "react";
import type { AuthState, User } from "../types/user";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type PropsWithChildren,
} from "react";
import { loadFromStorage, saveToStorage } from "../hooks/useLocalStorage";

type AuthAction = { type: "LOGIN"; user: User } | { type: "LOGOUT" };

function authReducer(_state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "LOGIN":
      return { user: action.user, isAuthenticated: true };

    case "LOGOUT":
      return { user: null, isAuthenticated: false };
  }
}

interface AuthContextValue {
  auth: AuthState;
  dispatch: React.Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: PropsWithChildren) {
  const [auth, dispatch] = useReducer(
    authReducer,
    { user: null, isAuthenticated: false },
    (init) => loadFromStorage("auth", init),
  );

  useEffect(() => {
    saveToStorage("auth", auth);
  }, [auth]);

  return (
    <AuthContext.Provider value={{ auth, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
