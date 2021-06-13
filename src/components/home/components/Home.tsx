import React from "react";
// import { Link } from "react-router-dom";
import './scss/styles.scss'
import { IProductCardProps } from "./type";


const Home= ({productcard}: IProductCardProps) => {
const {id, title, price, description, image} = productcard
  return (
    <div className="product-card">
      {/* <Link to="/cart">go to cart</Link> */}
      <div key={id}>
        <img src={image} className = 'product-image' alt='product' height='200px'/>
        <h4 className='product-name'>{title}</h4>
        <p className='description'>{description}</p>
        <h4 className='product-price'>${" "}{price}</h4>
        <button className='addtocart-btn'>Add to Cart</button>
      </div>
    </div>
  );
};

export default Home;
