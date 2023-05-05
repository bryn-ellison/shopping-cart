import CartCard from "./CartCard";

function Cart({ cartItems }) {
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
  return (
    <div className="Cart">
      <h1>Your cart</h1>
      <div className="cart-container">
        {sortedCart.map((cartItem) => {
          return <CartCard cartItem={cartItem} />;
        })}
      </div>
    </div>
  );
}

export default Cart;
