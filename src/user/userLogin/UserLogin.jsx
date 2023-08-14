import React from 'react';
import Navbar from '../navbar/Navbar';
import './userlogin.css';
import login from '../../assets/login.png';
import axios from 'axios';
import google from '../../assets/google.png';
import facebook from '../../assets/facebook.png';
import wave from '../../assets/wave.png';
import { Link } from 'react-router-dom';

const UserLogin = () => {
      const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        console.log(email, password);

        axios.post("https://whatcode-backend.vercel.app/login", { email: email, password: password })
            .then(res => {
                console.log(res)
                if (res.data.key === 1) {
                    document.cookie = "token=" + res.data.token + "; expires=" + Date.now() + 1 * 24 * 60 * 60 * 1000;
                    window.location.href = 'https://whatcode-frontend.vercel.app/'
                } else {
                    alert(res.data.message);
                }
            }).catch(e => {
                console.log(e);
            })
    }
  return (
    <div className='userlogin'>
      <Navbar/>
      <div className='navbox'>
      <div className="userloginbox">
        <div className="userloginleftbox">
        <img src={login} alt="login" />
      </div>
      <form className="userloginrightbox" onSubmit={handleSubmit}>
        <h1>Login Here !</h1>
            <input placeholder='Username or Email' type="email"/>
            <input placeholder='Password' type="password"/>
            <label>Forget Password?</label>
            <button type="submit" >Login</button>
            <Link to="/signup" className='gotosignup'>
              <div className='signupwith'>
                <hr className='leftline'/><span>or Signup With</span><hr className='rightline'/>
              </div>
              <div className="signuplogo">
                <img src={google} alt="logo" />
                <img src={facebook} alt="logo" />
              </div>
            </Link>
      </form>
      </div>
      <div className="wave">
        <img src={wave} alt="wave" />
      </div>
      </div>
    </div>
  )
}

export default UserLogin
