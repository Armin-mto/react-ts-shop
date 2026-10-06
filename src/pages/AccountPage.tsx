import { useAuth } from "../hooks/useAuth";

function AccountPage() {
  const auth = useAuth();

  if (!auth.auth.user) {
    return <p className="text-4xl font-medium">در حال بارگذاری...</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">حساب کاربری</h1>
      <h3 className="text-2xl font-semibold">{auth.auth.user.name}</h3>
      <button onClick={() => auth.dispatch({ type: "LOGOUT" })}>خروج</button>
    </div>
  );
}

export default AccountPage;
