import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './user/userLogin/UserLogin';
import AdminLogin from './admin/adminLogin/AdminLogin';
import UserSignup from './user/userSignup/UserSignup';
import CityList from './user/citylist/CityList';
import Cart from './user/cart/Cart';
import Search from './user/search/Search';
import AddEvent from './user/addevent/AddEvent';
import AdminAddEvent from './admin/addevent/AddEvent'
import AdminHome from './admin/adminhome/AdminHome';
import AdminEditEvent from './admin/editevent/EditEvent'

function App() {
  let cookie = document.cookie;
  cookie = cookie.split("=");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={cookie.length===1?<UserLogin/>:<CityList/>} />
          <Route path='/admin' element={<AdminLogin/>} />
          <Route path='/signup' element={<UserSignup/>}/>
          <Route path='/' element={<CityList/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/search/:str' element={<Search/>}/>
          <Route path="/addevent/:prodid" element={<AddEvent />}/>
          <Route path='/admin/home' element={<AdminHome/>}/>
          <Route path='/admin/addevent' element={<AdminAddEvent/>}/>
          <Route path='/admin/editevent' element={<AdminEditEvent/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
