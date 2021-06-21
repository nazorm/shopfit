import React from "react";
import { categories } from "./categories";
import {Link} from 'react-router-dom'
import './styles.scss'


const Landing = (): JSX.Element => {
  const { hats, kiddies, men, turtleneck, vintage, women } = categories;

  return (
      <section className='landing-container'>
    <section className="landingcategories-container">
      <div className="category">
        <img src={women} className="category-image" alt="category" height='150px' />
        <label className='landing-label'>Women</label>
        <button className='btn btn--category'>Shop Now</button>
      </div>
      <div className="category">
        <img src={men} className="category-image" alt="category" height='150px' />
        <label className='landing-label'>Men</label>
        <button className='btn btn--category'>Shop Now</button>
      </div>
      <div className="category">
        <img src={kiddies} className="category-image" alt="category" height='150px' />
        <label className='landing-label'>Kiddies</label>
        <button className='btn btn--category'>Shop Now</button>
      </div>
      <div className="category">
        <img src={hats} className="category-image" alt="category" height='150px' />
        <label className='landing-label'>Hats</label>
        <button className='btn btn--category'>Shop Now</button>
      </div>
     
      <div className="category">
        <img src={turtleneck} className="category-image" alt="category" height='150px' />
        <label className='landing-label'>Turtle Neck</label>
        <button className='btn btn--category'>Shop Now</button>
      </div>
      <div className="category">
        <img src={vintage} className="category-image" alt="category" height='150px' />
        <label className='landing-label'>Vintage</label>
        <button className='btn btn--category'>Shop Now</button>
      </div>
    </section>
    <Link to='/home' className='btn-link'>
    <button className='btn btn--link'>
    
            Shop Now
        
    </button>
    </Link>
    </section>
  );
};

export default Landing;
