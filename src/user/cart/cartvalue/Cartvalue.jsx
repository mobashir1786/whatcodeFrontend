import React, { useState } from 'react';
import './cartvalue.css';
import axios from 'axios';

const Cartvalue = (props) => {
    console.log(props.cartValue);
    let subtotal=0
    for(let i=0;i<props.cartValue.length;i++){
        subtotal=subtotal+((props.cartValue[i].hallQuantity.h1)*55000)+((props.cartValue[i].hallQuantity.h2)*35000)+((props.cartValue[i].hallQuantity.h3)*25000)
    }
    let tax=((subtotal/100)*10);
    let total=subtotal+tax;
    // total=subtotal+((subtotal/100)*10);
    // console.log(subtotal,total);
    const handleorder=()=>{
        let cookie = document.cookie;
        // console.log(cookie);
        cookie = cookie.split("=");
        cookie = cookie[1];
        axios.post("https://whatcode-backend.vercel.app/placeorder",{token:cookie})
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
        
        alert(`Thankyou to Place your order`)
        window.location.reload()
    }
  return (
    <div className='cartvalue'>
        {
            props.cartValue.map((n)=>(
                <div className="cartevents" key={n._id}>
                    <div className="carteventName">{n.location}</div>
                    <div className="carteventQuantity">
                        <div className='h1 carthall'>H1-Quantity:{n.hallQuantity.h1}</div>
                        <div className="h2 carthall">H2-Quantity:{n.hallQuantity.h2}</div>
                        <div className="h3 carthall">H3-Quantity:{n.hallQuantity.h3}</div>
                    </div>
                    <div className="carteventPrice">
                        <div className='h1 carthall'>H1-Price:{55000*n.hallQuantity.h1}</div>
                        <div className="h2 carthall">H2-Price:{35000*n.hallQuantity.h2}</div>
                        <div className="h3 carthall">H3-Price:{25000*n.hallQuantity.h3}</div>
                    </div>
                </div>
            ))
        }
      <div className="totalcartvalue">
        <div className="cartstatement">We levy a 50% Advance on all our Stall sales. The rest 50% shall be credited post the event</div>
        <div className="subtotalamount cartvaluecommon">
            <div className="subtotal">SubTotal</div>
            <div className="amount">{subtotal}</div>
        </div>
        <div className="subtotalamount cartvaluecommon">
            <div className="subtotal">Tax</div>
            <div className="amount">{tax}</div>
        </div>
        <div className="final cartvaluecommon">
            <div className="finaltotal ">Total</div>
            <div className="finalamount">{total}</div>
        </div>
        <button onClick={handleorder}>Pay Now </button>
      </div>
    </div>
  )
}

export default Cartvalue
