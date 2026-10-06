import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex flex-wrap gap-4 p-4 border-b">
      <Link to="/">خانه</Link>
      <Link to="/products">محصولات</Link>
      <Link to="/cart">سبد خرید</Link>
      <Link to="/login">ورود</Link>
    </header>
  );
}

export default Header;