import React, { useEffect, useState } from 'react';
import './cart.css'
import Navbar1 from '../navbar/Navbar1';
import Cartvalue from './cartvalue/Cartvalue';
import Emptycart from './emptycart/Emptycart';
import cart from "../../assets/cart.png";
import axios from 'axios';

const Cart = () => {
  let cookie = document.cookie;
  cookie = cookie.split("=");

  const [cartValue,setCartValue]=useState([])
  useEffect(() => {
   axios.post("https://whatcode-backend.vercel.app/fetchCart", { token:cookie })
            .then(res => {
                // console.log(res)
                setCartValue(res.data.fullCartDetails);
            }).catch(e => {
                console.log(e);
            })
  }, []);
  // console.log(cartValue);
  return (
    <div className='cart'>
      <Navbar1 displaycity="" displaycart="hidden"/>
      <div className="checkout">
        <span>Shipping-Bag Checkout</span>
        <img src={cart} alt="cart" />
        </div>
      {cartValue.length!==0?<Cartvalue cartValue={cartValue}/>:<Emptycart/>}
    </div>
  )
}

export default Cart
