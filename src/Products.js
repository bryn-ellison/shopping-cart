import { useState } from "react";
import { productData } from "./productData";
import { ProductCard } from "./ProductCard";

function Products() {
  const [products, setProducts] = useState(productData);

  return (
    <div className="App">
      <h1>Products</h1>
      <div className="product-container">
        {products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
}

export default Products;
