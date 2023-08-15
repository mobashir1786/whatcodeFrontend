import React from 'react';
import './admincard.css';
import { Link } from 'react-router-dom';

const Admincard = (props) => {
  console.log(props);
  return (
    <div className='admincard'>
      <div className="admineventname acc">{props.eventname}</div>
      <div className="adminevemtdate acc">{props.eventdate}</div>
      <div className="admineventlocation acc">{props.eventlocation}</div>
      <div className="adminavailablehall acc">
        <span className='ah'>H1:{props.h1}</span>
        <span className='ah'>H2:{props.h2}</span>
        <span className='ah'>H3:{props.h3}</span></div>
      <div className="adminviewable acc">{props.viewable?"Visible for User":"Not Visible"}</div>
      <Link to={`/editEventBy/${props.id}`} style={{display:props.edit}}>Edit</Link>
    </div>
  )
}

export default Admincard
