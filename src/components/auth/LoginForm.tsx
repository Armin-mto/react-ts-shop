import { useState, type FormEvent, type ChangeEvent } from "react";
import { useAuth } from "../../hooks/useAuth";
import { fakeLogin } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const user = await fakeLogin(email, password);
      dispatch({ type: "LOGIN", user });
      navigate("/account");
    } catch {
      setError("رمز عبور یا نام کاربری اشتباه است");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex gap-4 p-4">
      <form onSubmit={handleSubmit}>
        <input
          placeholder=" ایمیل"
          type="text"
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          className="border rounded p-2"
        />
        <input
          placeholder="رمز عبور"
          type="password"
          value={password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPassword(e.target.value);
          }}
          className="border rounded p-2"
        />
        {error && <p>{error}</p>}
        <button
          disabled={isSubmitting}
          type="submit"
          className="rounded bg-blue-600 py-2 px-4 text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "در حال ورود" : "ورود"}
        </button>
      </form>
    </div>
  );
}
