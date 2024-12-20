import { useState } from 'react';
import './Login.css';
import india from "../assets/images/flag.jpg"

const Login = ({ isOpen, onClose }) => {
    const [number, setNumber] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Logged in!'); 
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2 className='mb-4'>Login</h2>
                <form onSubmit={handleSubmit}>
                    
                    <div class="form-control input-container" type="number">
                        <div className='india'><img src={india}/></div>
                        
                       <div><select class="country-code">
                            <option value="+91">+91</option>
                            <option value="+44">(+44)</option>
                            <option value="+1">(+1)</option>

                        </select></div><span style={{ fontSize: "25px" }}>|</span>
<div>                   <input
                            type="tel"
                            class="phone-number"
                            placeholder="Phone"
                            id="number"
                            value={number}
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        /></div></div>
                        <div className='form-btn'>
                        <button type="button" class="btn btn-danger mb-3 mt-4 p-3 button">Send One Time Password</button>
                        <div>or</div>
                        <button type="button" class="btn btn-light mt-4 p-3 email"><i class="fa-solid fa-envelope me-3"style={{color:"red"}}></i>Continue with Email</button>
                        <button type="button" class="btn btn-light mb-3 mt-4 p-3 email"><i class="fa-brands fa-google me-3"></i>Sign in with Google</button></div>
                        <span>New to Zomato? <span style={{color:"red"}}>Create account</span></span>


                    
                </form>
            </div>
        </div>
    );
};

export default Login;