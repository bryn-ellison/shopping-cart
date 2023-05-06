import CartCard from "./CartCard";

function Cart({ cartItems, addToCart, removeFromCart }) {
  const displayCart = () => {
    let newCartArray = [...cartItems];
    const groupByKey = (list, key) =>
      list.reduce(
        (hash, obj) => ({
          ...hash,
          [obj[key]]: (hash[obj[key]] || []).concat(obj),
        }),
        {}
      );
    const sorted = groupByKey(newCartArray, "id");
    const sortedArr = Object.entries(sorted);
    let finalArr = [];
    sortedArr.forEach((array) => finalArr.push(array[1]));
    return finalArr;
  };
  const sortedCart = displayCart();

  const getTotalPrice = () => {
    const newArr = [...cartItems];
    let total = 0;
    newArr.forEach((item) => (total += item.price));
    const returnTotal = total / 100;
    return returnTotal.toLocaleString("en-GB", {
      style: "currency",
      currency: "GBP",
    });
  };
  const total = getTotalPrice();

  return (
    <div className="Cart">
      <h1>Your cart</h1>
      <div className="cart-container">
        {sortedCart.map((cartItem, i) => {
          return (
            <CartCard
              key={i}
              cartItem={cartItem}
              cartItems={cartItems}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          );
        })}
        <h3>Total: {total}</h3>
      </div>
    </div>
  );
}

export default Cart;
