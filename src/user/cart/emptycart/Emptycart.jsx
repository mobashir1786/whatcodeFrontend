import React from 'react';
import './emptycart.css';
import emptycart from "../../../assets/emptycart.png"
import { Link } from 'react-router-dom';

const Emptycart = () => {
  return (
    <div className='emptycart'>
      <img src={emptycart} alt="emptycart" />
      <Link to="/">&lt;&lt;go to home</Link>
    </div>
  )
}

export default Emptycart
