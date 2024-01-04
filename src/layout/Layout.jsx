import { Link } from "react-router-dom";
//Icons
import { PiShoppingCartSimpleBold } from "react-icons/pi";

import { useCart } from "../context/CartContext";

function Layout({ children }) {
    const [state] = useCart()
  return (
    <>
      <header>
        <Link to="/products">LOGO</Link>
        <Link to="/checkout">
          <PiShoppingCartSimpleBold />
          {!!state.itemsCounter && <span>{state.itemsCounter}</span>}
        </Link>
      </header>
      {children}
      <footer>Developed by mohammad with ❤</footer>
    </>
  );
}

export default Layout;
