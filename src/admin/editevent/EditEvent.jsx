import React,{useState,useEffect} from 'react';
import Navbar from '../../user/navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import axios from 'axios';
import Admincard from '../admincard/Admincard';

const EditEvent = () => {
      const [event,setEvent]=useState([]);
  useEffect(() => {
    axios.get('https://whatcode-backend.vercel.app/getevents/admin')
      .then((res) => {
        const data = res.data.output;
        console.log(data);
        setEvent(data);
      });
  }, []);
  return (
    <div className='adminhome'>
      <Navbar/>
      <div className="admincontent">
        <Sidebar/>
        <div className="eventList">
        {
            event.map((n)=>(
                <Admincard edit="inline" key={n._id} id={n._id} eventname={n.eventName} eventdate={n.date} eventlocation={n.location} h1={n.capacity.h1} h2={n.capacity.h2} h3={n.capacity.h3} viewable={n.viewable}/>
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default EditEvent
