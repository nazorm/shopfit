import React from "react";
import "./styles.scss";
import { IProductCardProps } from "./type";

const Home = ({ productcard, handleCart, disabled }: IProductCardProps) => {
  const { id, title, price, description, image } = productcard;
  if (!id) {
    return <p></p>;
  }
  const productCard = (
    <div className="product-card">
      <div key={id}>
        <img
          src={image}
          className="product-image"
          alt="product"
          height="200px"
        />
        <h4 className="product-name">{title}</h4>
        <div className="description-container">
          <p className="description">{description}</p>
        </div>

        <h4 className="product-price">$ {price}</h4>
        <button
          className="handlecart-btn"
          onClick={() => handleCart(id)}
          disabled={disabled.includes(id)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
  return <section>{productCard}</section>;
};

export default Home;
