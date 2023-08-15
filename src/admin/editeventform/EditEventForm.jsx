import React from 'react'
import './editeventform.css'
import { useParams } from 'react-router-dom'
import Navbar from '../../user/navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';
import axios from 'axios';


const EditEventForm = () => {
  let eventId = useParams().eventid;
  // console.log(eventid);
  const handleSubmit = (event) => {
        event.preventDefault();
        const eventName = event.target[0].value;
        const location = event.target[1].value;
        const h1 = event.target[2].value;
        const h2 = event.target[3].value;
        const h3 = event.target[4].value;
        let capacity = {h1, h2, h3};
        const date = event.target[5].value;
        const detail = event.target[6].value;
        const viewable = event.target[7].value;

        if(detail.toString().length === 0 || detail.toString() === ""){
           alert("Please fill description also.")
          return;
        }
        axios.post("https://whatcode-backend.vercel.app/updateeventByid", { eventId, eventName, location, capacity, date, detail, viewable})
            .then(res => {
                console.log(res);
                alert("Event Successfully Updated");
                window.location.href = "https://whatcode-frontend.vercel.app/admin/home"
            }).catch(e => {
                console.log(e);
            })
    }

  return (
    <div className='adminhome'>
      <Navbar/>
      <div className="admincontent">
        <Sidebar/>
        <div className="eventList">
          <form onSubmit={handleSubmit} className='signupbox'>
            <div className="nameOfEvent nameofevenetCommon">
              <label>Name of Event:</label>
              <input type="text" required placeholder='Event Name'/>
            </div>
            <div className="locationOfEvent nameofevenetCommon">
              <label>Location of Event:</label>
              <input type="text" required placeholder='Event Location'/>
            </div>
            <div className="capacityOfEvent nameofevenetCommon">
              <label>Capacity of Event:</label>
              <div className='capacityOfEventHall'>
                H1:<input type="text" required placeholder='quantity'/>
                H2:<input type="text" required placeholder='quantity'/>
                H3:<input type="text" required placeholder='quantity'/>
              </div>
            </div>
            <div className="dateOfEvent nameofevenetCommon">
              <label>Date of Event</label>
              <input type="date" required placeholder='Event Date'/>
            </div>
            <div className="descriptionOfEvent nameofevenetCommon">
              <label>Description of Event:</label>
              <textarea required cols="30" rows="8" placeholder='Event Description'></textarea>
            </div>
            <div className="visiblityOfEvent nameofevenetCommon">
              <label>Visiblity:</label>
              <div>
                <input type="radio" name="viewable" value={1} required/>
                <label >Yes</label>
              </div>
              <div>
                <input type="radio" name="viewable" value={0} required/>
                <label >No</label>
              </div>
            </div>
            <button type='submit'>Update</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditEventForm
