import { Link } from "react-router-dom";
import cartIcon from "../images/cart-icon.png";

export const Header = ({ numCartItems, toggleCart }) => {
  const showCounter = () => {
    if (numCartItems > 0) {
      return <div className="cart-counter">{numCartItems}</div>;
    } else {
      return;
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <h1>PlantShop.</h1>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <div className="cart-icon-container">
          <button id="cart-header-button" onClick={() => toggleCart()}>
            <img
              src={cartIcon}
              alt="shopping cart"
              height={50}
              width={50}
            ></img>
            {showCounter()}
          </button>
        </div>
      </nav>
    </div>
  );
};
