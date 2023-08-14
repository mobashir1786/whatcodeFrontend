import React from 'react';
import axios from 'axios';
import './usersignup.css';
import Navbar from '../navbar/Navbar';
import wave from '../../assets/wave.png';
import { Link } from 'react-router-dom';

const UserSignup = () => {
  const handleSubmit = (event) => {
        event.preventDefault();
        const firstName = event.target[0].value;
        const lastName = event.target[1].value;
        const number = event.target[2].value;
        if(number.toString().length != 10){
           alert("Number should be 10 digint.")
          return;
        }
        const email = event.target[3].value;
        const password = event.target[4].value;

        // console.log(firstname,lastnane, number, email, password);
        axios.post("https://whatcode-backend.vercel.app/signup", { firstName: firstName,lastName:lastName, number: number, email: email, password: password })
            .then(res => {
                console.log(res)
                document.cookie = "token="+res.data.token+"; expires="+Date.now() + 1 * 24 * 60 * 60 * 1000;
                window.location.href = 'http://localhost:3000/'
            }).catch(e => {
                console.log(e);
            })
    }
  return (
    <div className='signup'>
      <Navbar/>
      <h1>Create your Ace Account!</h1>
      <form onSubmit={handleSubmit} className='signupbox'>
        <div className="signupname">
          <input placeholder='First Name' type="text" required/>
          <input placeholder='Last Name'  type="text" required/>
        </div>
        <input placeholder='Mobile Number'  type="number" required/>
        <input placeholder='Email'  type="email" required/>
        <input placeholder='Password'  type="password" required/>
        <label>Term and Condition</label>
      <button type="submit" >Agree & Sign-up</button>
      <Link to="/login" className='gotologin'>
              <div className='signupwith'>
                <hr className='leftline'/><span>Alredy Have Account</span><hr className='rightline'/>
                </div>
            </Link>
      </form>
      <div className="wave">
        <img src={wave} alt="wave" />
      </div>
    </div>
  )
}

export default UserSignup

