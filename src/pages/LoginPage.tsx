import { Link } from "react-router-dom";
import LoginForm from "../components/auth/LoginForm";
import { useAuth } from "../hooks/useAuth";

function LoginPage() {
  const auth = useAuth();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">ورود</h1>
      {auth.auth.isAuthenticated ? (
        <p>
          شما وارد شده‌اید — <Link to="/account">رفتن به حساب کاربری</Link>
        </p>
      ) : (
        <LoginForm />
      )}
    </div>
  );
}

export default LoginPage;
