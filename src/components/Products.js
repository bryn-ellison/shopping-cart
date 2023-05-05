import { useState } from "react";
import { productData } from "../data/productData";
import { ProductCard } from "./ProductCard";

function Products({ addToCart }) {
  const [products, setProducts] = useState(productData);

  return (
    <div className="App">
      <h1>Products</h1>
      <div className="product-container">
        {products.map((product) => {
          return (
            <ProductCard
              product={product}
              key={product.id}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Products;
