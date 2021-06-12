import React from "react";
import { Link } from "react-router-dom";
import './scss/styles.scss'

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Link to="/cart">go to cart</Link>
      <div>
        
      </div>
    </div>
  );
};

export default Home;
