import React, { useState } from 'react';
import "../Header/Header.css";
import "./OrderOnline.css"
import "../GetTheApp/GetTheApp.jsx"
import logo from "../assets/images/foodstry-1-removebg-edited.png"
import Signup from '../Signup/Signup.jsx';
import Login from '../Login/Login.jsx';
import { NavLink } from 'react-router-dom';

const OrderOnline = () => {
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const openPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);


  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          setError(null);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };




  return (
    <>
     <div className="zomato-logo">
                           <div><img src={logo} alt="Zomato" width="150" height="60" /></div>
                           <div className="location-tracker-2">

        <div className='btn btn-light' style={{ color: "#888787" }} onClick={getLocation}><i class="pe-2 fa-solid fa-location-dot location"></i>Chennai </div>
        <div class="dropdown location-drop">
          <button class="btn btn-light dropdown-toggle drop-button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          </button>
          <ul class="dropdown-menu dropdown">
            <li><button class="dropdown-item" type="button">Action</button></li>
            <li><button class="dropdown-item" type="button">Another action</button></li>
            <li><button class="dropdown-item" type="button">Something else here</button></li>
          </ul><span style={{ fontSize: "25px" }}>|</span>
          <span className='searchbox'><i class="ps-3 pe-3 fa-solid fa-magnifying-glass" style={{ fontSize: "20px" }}></i>
            <input type="search" className='search-field' placeholder='Search for restaurant, cuisine or a dish' /></span>

        </div>

        {location && (
          <p>
            Latitude: {location.latitude}, Longitude: {location.longitude}
          </p>
        )}
        {error && <p className="error">{error}</p>}
      </div>
                         
                        
                            <div><span><span onClick={() => setLoginOpen(true)} style={{ cursor: "pointer" }}>Login</span>
                                <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} /></span></div>
                            <div><span><span onClick={openPopup} style={{ cursor: "pointer" }}>Sign Up</span>

                                <Signup isOpen={isPopupOpen} onClose={closePopup} /></span></div></div>
                   <div className='mt-4 ps-5'>
                   <NavLink to="/home" className="underline" style={({ isActive }) => ({
                      color: isActive ? 'greenyellow' : 'black'
                    })}> Home / </NavLink>
                                        <NavLink to="/home" className="underline" style={({ isActive }) => ({
                      color: isActive ? 'greenyellow' : 'black'
                    })}> India / </NavLink>
                                        <NavLink to="/home" className="underline" style={({ isActive }) => ({
                      color: isActive ? 'greenyellow' : 'black'
                    })}> Chennai</NavLink>
                   </div>  
                   <div className='nav-bar'>
                    <div className='dining'>
                    <i class="fa-solid fa-utensils icon"></i> <span> Dining Out</span>
                    </div>
                    <div className='dining'><i class="fa-solid fa-motorcycle icon"></i><span> Delivery</span></div>
                    
                    <div className='dining'><i class="fa-solid fa-champagne-glasses icon"></i><span> Nightlife</span></div>
                    </div> 
                    <hr/>
                    <div className='mt-4 button-parent'>
                    <button className='btn btn-light filter'>Filter</button>
                    <button className='btn btn-light filter'>Pure Veg</button>
                    <button className='btn btn-light filter'>Cuisines</button>
                    </div>
                    <div className='main'>
                      <h2 className='mt-4 ms-5'>Inspiration for your first order</h2>
                      <div className='parent'>
                      <div></div>
                    </div>
                    </div>
                    
                                

      

    </>
  );
};

export default OrderOnline;