import React from 'react';
import './adminlogin.css';
import Navbar from '../../user/navbar/Navbar';
import axios from 'axios';


const AdminLogin = () => {
  const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        console.log(email, password);

        axios.post("https://whatcode-backend.vercel.app/adminlogin", { email: email, password: password })
            .then(res => {
                console.log(res)
                if (res.data.key === 1) {
                    document.cookie = "token=" + res.data.token + "; expires=" + Date.now() + 1 * 24 * 60 * 60 * 1000;
                    window.location.href = 'http://localhost:3000/admin/home'
                } else {
                    alert(res.data.message);
                }
            }).catch(e => {
                console.log(e);
            })
          }
  return (
    <div className='adminlogin'>
      <Navbar/>
      <h1>Welcome Admin ! Login Here</h1>
      <form className="userloginrightbox" onSubmit={handleSubmit}>
            <input placeholder='Username or Email' type="email"/>
            <input placeholder='Password' type="password"/>
            <label>Forget Password?</label>
            <button type="submit" >Login</button>
      </form>
    </div>
  )
}

export default AdminLogin
