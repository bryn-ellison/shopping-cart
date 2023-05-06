function CartCard({ cartItem }) {
  const price =
    cartItem.reduce((acc, item) => acc + item.price, 0) /
    (100).toLocaleString(("en-GB", { style: "currency", currency: "GBP" }));
  const quantity = cartItem.length;
  return (
    <div className="cart-card">
      <h3>{cartItem[0].productName}</h3>
      <p>£{price}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
}

export default CartCard;
