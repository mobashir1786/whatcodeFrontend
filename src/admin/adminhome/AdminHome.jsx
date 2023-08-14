import React,{useState,useEffect} from 'react';
import './adminhome.css';
import Navbar from '../../user/navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import axios from 'axios';
import Admincard from '../admincard/Admincard';


const AdminHome = () => {
    const [event,setEvent]=useState([]);
  useEffect(() => {
    axios.get('https://whatcode-backend.vercel.app/getevents/admin')
      .then((res) => {
        const data = res.data.output;
        console.log(data);
        setEvent(data);
      });
  }, []);
  console.log(event);
  return (
    <div className='adminhome'>
      <Navbar/>
      <div className="admincontent">
        <Sidebar/>
        <div className="eventList">
        {
            event.map((n)=>(
                <Admincard key={n._id} eventname={n.eventName} eventdate={n.date} eventlocation={n.location} h1={n.capacity.h1} h2={n.capacity.h2} h3={n.capacity.h3} viewable={n.location}/>
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default AdminHome
