import { useState } from "react";
import logo from "../assets/images/foodstry-1-removebg-edited.png"
import "./GetTheApp.css"
import Login from "../Login/Login.jsx"
import Signup from "../Signup/Signup.jsx"
import { Section5 } from "../Section5/Section5.jsx";
import { Footer } from "../Footer/Footer.jsx";
export function GetTheApp() {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isLoginOpen, setLoginOpen] = useState(false);

   
    const openPopup = () => setPopupOpen(true);
    const closePopup = () => setPopupOpen(false);
    return (
        <>
                     
                        <div className="zomato-logo">
                           <div><img src={logo} alt="Zomato" width="150" height="60" /></div>
                         
                        
                            <div><span><span onClick={() => setLoginOpen(true)} style={{ cursor: "pointer" }}>Login</span>
                                <Login isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} /></span></div>
                            <div><span><span onClick={openPopup} style={{ cursor: "pointer" }}>Sign Up</span>

                                <Signup isOpen={isPopupOpen} onClose={closePopup} /></span></div></div>
                    <Section5/>
                    <Footer/>
        </>
    )

}