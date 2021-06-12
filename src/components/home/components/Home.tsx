import React from 'react'
import {Link} from 'react-router-dom';


const Home:React.FC = ()=>{
    return(
        <div className='home-container'>
            This is Home
<Link to='/cart'>go to cart</Link>
        </div>
    )
}

export default Home


