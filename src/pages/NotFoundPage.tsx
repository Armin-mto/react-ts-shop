import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">صفحه پیدا نشد</h1>
      <Link to="/">برگشت به خانه</Link>
    </div>
  );
}

export default NotFoundPage;
