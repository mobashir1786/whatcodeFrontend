import React from 'react'
import './sidebar.css';
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <hr />
      <Link to="/admin/addevent">Add Event</Link>
       <hr />
      <Link to="/admin/editevent">Edit Event</Link>
       <hr />
      <Link to="/admin/home">Event Data</Link>
       <hr />
    </div>
  )
}

export default Sidebar
