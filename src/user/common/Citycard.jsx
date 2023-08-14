import React from 'react';
import './citycard.css'
import building from "../../assets/building.png"
import { Link } from 'react-router-dom';

const Citycard = (props) => {
  return (
    <div className='citycard'>
      <div className="cityname">
        <img src={ building} alt="building" />
        <span>{props.location}</span>
      </div>
      <div className="eventdate">{props.date}</div>
      <Link to={`/addevent/${props.prodid}`} className="booknow">Book Now <span>&gt;</span></Link>
    </div>
  )
}

export default Citycard;
