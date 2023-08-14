import React, { useState ,useEffect} from 'react'
import './citylist.css';
import Navbar1 from '../navbar/Navbar1';
import location from "../../assets/location.png";
import search from '../../assets/search.png'
import { Link } from 'react-router-dom';
import Citycard from '../common/Citycard';
import phone from '../../assets/phone.png';
import axios from 'axios';

const CityList = () => {
  const [event,setEvent]=useState([]);
  useEffect(() => {
    axios.get('https://whatcode-backend.vercel.app/getevents')
      .then((res) => {
        const data = res.data.output;
        setEvent(data);
      });
  }, []);
  function handlerToSearch(){
    let str = document.getElementById("searchText").value;
    console.log(str);
    window.location.href = "http://localhost:3000/search/"+str
  }
  function contactHandler(){
    alert("Team Will Contact You Soon! Thank You")
  }
  // console.log(event);
  return (
    <div className='cityList'>
      <Navbar1 displaycity="hidden" displaycart="block"/>
      <div className="selectLocation">
        <h1>Select Your Location <img src={location} alt="location" /></h1>
      </div>
      <div className="citysearch">
        <input type="text" placeholder='Search' id='searchText'/>
        <Link onClick={handlerToSearch}><img className='citysearchButton' src={search} alt="search" /></Link>
      </div>
      <div className="cityesName">
        {event.map((n)=><Citycard key={n._id} prodid={n._id} location={n.location} date={n.date} />)}
      </div>
      <div className="citynotfound">
        <h1>Not Found The City you were looking for? 😒</h1>
        <Link onClick={contactHandler}><span>Contact Sales</span> <img src={phone} alt="phone" /></Link>
      </div>
    </div>
  )
}

export default CityList
