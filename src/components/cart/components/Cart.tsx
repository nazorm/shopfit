import React from "react";
import { Link } from "react-router-dom";
import "../../home/components/scss/styles.scss";
import { ICartProps } from "./types";

function Cart({ cartProducts, handleRemovefromCart }: ICartProps): JSX.Element {
  const style = {
    backgroundColor: "red",
    color: "white",
  };

  const { id, title, price, description, image } = cartProducts;
  if (!id) {
    return <p></p>;
  }
  return (
      <React.Fragment>     
    <div className="product-card">
    <Link to="/">go to home</Link>
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
          onClick={() => handleRemovefromCart(id)}
          style={style}
        >
          Remove
        </button>
      </div>
    </div>
    </React.Fragment>
  );
}

export default Cart;
