import { useState, type FormEvent, type ChangeEvent } from "react";
import { useAuth } from "../../context/AuthContext";
import { fakeLogin } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { dispatch } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const user = await fakeLogin(email, password);
      dispatch({ type: "LOGIN", user });
      navigate('/account')
    } catch {
      setError("رمز عبور یا نام کاربری اشتباه است");
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
        <button type="submit">ورود</button>
      </form>
    </div>
  );
}
