import React from "react";
import "../../home/components/styles.scss";
import { ICartProps } from "../types";

function Cart({ cartProducts, handleRemovefromCart }: ICartProps): JSX.Element {
  const { id, title, price, description, image } = cartProducts;

  const style = {
    backgroundColor: "red",
    color: "white",
  };

  if (!id) {
    return <p></p>;
  }
  return (
    <React.Fragment>
      <div className="product-card product-card__cart">
        <div key={id}>
          <img
            src={image}
            className="product-image product-image__cart"
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
