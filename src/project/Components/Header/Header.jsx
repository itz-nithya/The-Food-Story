import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from "../assets/images/foodstry-1-removebg-edited.png";
import { useState } from 'react';
import { Card } from '../Card/Card.jsx';
import { Collections } from '../Collection/Collections.jsx';
import { Locality } from '../Locality/Locality.jsx';
import { Section5 } from '../Section5/Section5.jsx';
import { Section6 } from '../Section6/Section6.jsx';
import { Footer } from '../Footer/Footer.jsx';
import Signup from '../Signup/Signup.jsx';
import Login from '../Login/Login.jsx';

export function Header() {
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
      <div className="Header">
        <nav className="navbar fixed-top responsive">
          <div className="container-fluid">
            <button className="navbar-toggler bg-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon bg-white"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Zomato</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item mb-3">
                    <NavLink to="/investorrelations" className="underline" style={({ isActive }) => ({
                      color: isActive ? 'greenyellow' : 'black'
                    })}>Investor Relations</NavLink>
                  </li>
                  <li className="nav-item mb-3">
                    <NavLink to="/addrestaurant" className="underline" style={({ isActive }) => ({
                      color: isActive ? 'greenyellow' : 'black'
                    })}>Add Restaurant</NavLink>
                  </li>
                  <li className="nav-item mb-3">
                    <NavLink to="/login" className="underline" style={({ isActive }) => ({
                      color: isActive ? 'greenyellow' : 'black'
                    })} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Login</NavLink>
                  </li>
                  <li className="nav-item mb-3">
                  <span><span onClick={openPopup} style={{cursor:"pointer"}}>Sign Up</span>
                    <Signup isOpen={isPopupOpen} onClose={closePopup} /></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <div className='menu'>
          <span className='gettheapp'><NavLink to="/gettheapp" className="underline" style={({ isActive }) => ({
            color: isActive ? 'greenyellow' : 'white'
          })}>GettheApp</NavLink></span>
          <div className='Right'>
            <span><NavLink to="/investorrelations" className="underline" style={({ isActive }) => ({
              color: isActive ? 'greenyellow' : 'white'
            })}>Investor Relations</NavLink></span>
            <span><NavLink to="/addrestaurant" className="underline" style={({ isActive }) => ({
              color: isActive ? 'greenyellow' : 'white'
            })}>Add Restaurant</NavLink></span>
            <span><span onClick={() => setLoginOpen(true)} style={{cursor:"pointer"}}>Login</span>
            <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} /></span>
    <span><span onClick={openPopup} style={{cursor:"pointer"}}>Sign Up</span>
    
            <Signup isOpen={isPopupOpen} onClose={closePopup} /></span>
          </div>
        </div>
        </div>


        <div className='logo'>
          <img src={logo} />
          <h1 className='pt-0'>Discover the best foods & drinks in chennai</h1>
          <div className="location-tracker">

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
        </div>
      
      <Card />
      <Collections />
      <Locality />
      <Section5 />
      <Section6 />
      <Footer/>

    </>
  )
}
