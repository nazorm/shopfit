import React from "react";
import { ICartegoryImagesProps } from "./types";
import { categories } from "./categories";
import {Link} from 'react-router-dom'


const Landing = (): JSX.Element => {
  const { hats, kiddies, men, turtleneck, vintage, women } = categories;

  return (
      <React.Fragment>
    <section className="landing-container">
      <div className="category">
        <img src={women} className="category-image" alt="category" height='150px' />
        <button className='btn btn--category'>Shop</button>
      </div>
      <div className="category">
        <img src={men} className="category-image" alt="category" height='150px' />
        <button className='btn btn--category'>Shop</button>
      </div>
      <div className="category">
        <img src={kiddies} className="category-image" alt="category" height='150px' />
        <button className='btn btn--category'>Shop</button>
      </div>
      <div className="category">
        <img src={hats} className="category-image" alt="category" height='150px' />
        <button className='btn btn--category'>Shop</button>
      </div>
      <div className="category">
        <img src={turtleneck} className="category-image" alt="category" height='150px' />
        <button className='btn btn--category'>Shop</button>
      </div>
      <div className="category">
        <img src={vintage} className="category-image" alt="category" height='150px' />
        <button className='btn btn--category'>Shop</button>
      </div>
    </section>
    <button className='btn'>
        <Link to='/home'>
            Shop
        </Link>
    </button>
    </React.Fragment>
  );
};

export default Landing;
