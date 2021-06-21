import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ICartCounter } from "./components/common/types";
function Header({cartCounter} : ICartCounter): JSX.Element {
  return (
    <header className="header">
      <h3 className="company-name">Shopfit</h3>
      <nav className="header-nav">
      <Link to='/'>Home</Link>
        <a
          href="http://placecorgi.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Welcome Shopper
        </a>
        <a
          href="http://placecorgi.com"
          target="_blank"
          rel="noreferrer noopener"
        >
          Sign In
        </a>
        <Link to="/cart" className="to-cart">
          <ShoppingCartOutlined className="hamburger" />
          <span className="cart-counter">{cartCounter}</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
