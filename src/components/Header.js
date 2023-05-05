import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>PlantShop</h1>
      </Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};
