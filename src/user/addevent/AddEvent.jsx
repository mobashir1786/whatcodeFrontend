import React, { useState, useEffect} from 'react';
import './addevent.css';
import { useParams } from 'react-router-dom';
import Navbar1 from '../navbar/Navbar1';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddEvent = () => {
    const params = useParams();
    const eventid = params.prodid;

    let cookie = document.cookie;
    cookie = cookie.split("=");

    const [data, setData]=useState([{capacity:{h1:0,h2:0,h3:0}}]);
    const [h1,setH1]=useState(0);
    const [h2,setH2]=useState(0);
    const [h3,setH3]=useState(0);
    useEffect(() => {
    axios.get("https://whatcode-backend.vercel.app/geteventByid/"+eventid)
            .then(res => {
                const datas=res.data.output
                setData(datas)
            }).catch(e => {
                console.log(e);
            })
  }, []);
//   console.log(data[0]);
  let h1max = data[0].capacity.h1;
  let h2max = data[0].capacity.h2;
  let h3max = data[0].capacity.h3;
    const incBtn=(h)=>{
        if(h === "h1"){
            if(h1<h1max){
                setH1(h1+1);
            }else{
                alert(`only ${h1max} availabe Now`)
            }
        }
        if(h === "h2"){
            if(h2<h2max){
                setH2(h2+1);
            }else{
                alert(`only ${h2max} availabe Now`)
            }
            
        }
        if(h === "h3"){
            if(h3<h3max){
                setH3(h3+1);
            }else{
                alert(`only ${h3max} availabe Now`)
            }
            
        }
    }
    const decBtn=(h)=>{
        if(h === "h1"){
            if(h1>0){
                setH1(h1-1);
            }else{
                alert(`can't go down`)
            }
        }
        if(h === "h2"){
            if(h2>0){
                setH2(h2-1);
            }else{
                alert(`can't go down`)
            }
            
        }
        if(h === "h3"){
            if(h3>0){
                setH3(h3-1);
            }else{
                alert(`can't go down`)
            }
            
        }
    }

const handleAddtoCart=()=>{
    axios.post("https://reflect-backend-p9344y5gu-mobashir1786.vercel.app/addtocart", { prod_id:eventid,token:cookie,hallQuantity:{h1:h1,h2:h2,h3:h3} })
            .then(res => {
                // console.log(res)
            }).catch(e => {
                console.log(e);
            })
    setH1(0);setH2(0);setH3(0);

}
  return (
    <div className='addevent'>
        <Navbar1 displaycity="" displaycart=""/>
        <div className="availablehall">
                <div className="hall hall1">
                    Available: {h1max}
                </div>
                <div className="hall hall2">
                    Available: {h2max}
                </div>
                <div className="hall hall3">
                    Available: {h3max}
                </div>
        </div>
        <div className="colorcode">
            <h3>Color Code</h3>
            <div className="h">
                <div className="h">
                    <span className='h1'>H1- </span><span className='hc green'></span>
                </div>
                <div className="h">
                    <span className='h2'>H2- </span><span className='hc orange'></span>
                </div>
                <div className="h">
                    <span className='h3'>H3- </span><span className='hc brown'></span>
                </div>
            </div>
        </div>
        <div className="hallbooking">
            <div className="h1 hallsqmt">
                <div className="hc green"></div>
                <div className="price">55000</div>
                <div className="sqmt">32 sq.mt.</div>
            </div>
            <div className="hallbookingBtn">
                <button className='btn' onClick={()=>{incBtn('h1')}}>+</button>
                <div className='count'>{h1}</div>
                <button className='btn' onClick={()=>{decBtn('h1')}}>-</button>
            </div>
        </div>
        {/* <hr /> */}
        <div className="hallbooking">
            <div className="h2 hallsqmt">
                <div className="hc orange"></div>
                <div className="price">35000</div>
                <div className="sqmt">26 sq.mt.</div>
            </div>
            <div className="hallbookingBtn">
                <button className='btn' onClick={()=>{incBtn('h2')}}>+</button>
                <div className='count'>{h2}</div>
                <button className='btn' onClick={()=>{decBtn('h2')}}>-</button>
            </div>
        </div>
        {/* <hr /> */}
        <div className="hallbooking h3last">
            <div className="h3 hallsqmt">
                <div className="hc brown"></div>
                <div className="price">25000</div>
                <div className="sqmt">18 sq.mt.</div>
            </div>
            <div className="hallbookingBtn">
                <button className='btn' onClick={()=>{incBtn('h3')}}>+</button>
                <div className='count'>{h3}</div>
                <button className='btn' onClick={()=>{decBtn('h3')}}>-</button>
            </div>
        </div>
        {(h1!==0 || h2!==0 || h3!==0?<button onClick={handleAddtoCart} className='addtocartbtn'>Add to Cart</button>:null)}
        <div className="gobackBtn">
            <Link to="/">&lt;&lt; Back to city</Link>
        </div>
    </div>
  )
}

export default AddEvent
