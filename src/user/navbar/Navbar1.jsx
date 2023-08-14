import React from 'react';
import './navbar1.css';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';

const Navbar1 = (props) => {
  return (
    <div className='navbar'>
      <img src={logo} alt="logo" />
      <div className="navbarButtons">
        <Link to="/" className='navbarButtonscity' style={{visibility:props.displaycity}}>Select City</Link>
        <Link to="/cart" className='navbarButtonsCart' style={{visibility:props.displaycart}}>Go to Cart</Link>
      </div>
    </div>
  )
}

export default Navbar1;
