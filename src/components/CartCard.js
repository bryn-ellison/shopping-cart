import plantImage from "../images/plant.webp";

function CartCard({ cartItem, cartItems, addToCart, removeFromCart }) {
  const price =
    cartItem.reduce((acc, item) => acc + item.price, 0) /
    (100).toLocaleString(("en-GB", { style: "currency", currency: "GBP" }));
  const quantity = cartItem.length;
  const getProduct = () => {
    const cartArray = [...cartItems];
    return cartArray.find(
      (product) => product.productName === cartItem[0].productName
    );
  };

  return (
    <div className="cart-card">
      <img src={plantImage} alt="a plant" height={150} width={150}></img>
      <div className="cartcard-info-wrapper">
        <h3>{cartItem[0].productName}</h3>
        <p>£{price}</p>
        <div className="quantity-container">
          <button onClick={() => removeFromCart(getProduct())}>-</button>
          <p>{quantity}</p>
          <button onClick={() => addToCart(getProduct())}>+</button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
