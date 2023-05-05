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

  const addToCart = (item) => {
    setCartItems((prevArray) => [...prevArray, item]);
  };

  return (
    <BrowserRouter>
      <Header />
      <Cart cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
