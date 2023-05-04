import plantImage from "./images/plant.webp";

export const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={plantImage}
        alt={product.productName}
        height={300}
        width={300}
      ></img>
      <h3>{product.productName}</h3>
      <h4>£{product.price}</h4>
      <p>{product.desc}</p>
    </div>
  );
};
