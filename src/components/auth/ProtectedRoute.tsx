import type { PropsWithChildren } from "react";
import { useAuth } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const auth = useAuth();
  if (auth.auth.isAuthenticated === false) {
    return <Navigate to="/login" />;
  }

  return children;
}
