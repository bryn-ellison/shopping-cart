import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Contact from "./components/Contact";
import { Header } from "./components/Header";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const numCartItems = cartItems.length;

  const toggleCart = () => {
    if (showCart === false) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  };

  const addToCart = (item) => {
    setCartItems((prevArray) => [...prevArray, item]);
  };

  const removeFromCart = (item) => {
    const newArr = [...cartItems];
    let index = newArr.findIndex((product) => product.id === item.id);
    if (index >= 0) {
      newArr.splice(index, 1);
    } else {
      return;
    }
    setCartItems(newArr);
  };

  return (
    <BrowserRouter>
      <Header numCartItems={numCartItems} toggleCart={toggleCart} />
      {showCart ? (
        <Cart
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          toggleCart={toggleCart}
        />
      ) : null}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
