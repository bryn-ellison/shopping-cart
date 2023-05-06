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
      <h3>{cartItem[0].productName}</h3>
      <p>£{price}</p>
      <div className="quantity-container">
        <button onClick={() => removeFromCart(getProduct())}>-</button>
        <p>{quantity}</p>
        <button onClick={() => addToCart(getProduct())}>+</button>
      </div>
    </div>
  );
}

export default CartCard;
