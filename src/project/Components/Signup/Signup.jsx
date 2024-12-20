import { useState } from 'react';
import './Signup.css';

const Signup = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form submitted!');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2 className='mb-4'>Signup</h2>

                
                <form onSubmit={handleSubmit}>
                <div class="form-floating mb-4 pt-1">
                    <input type="text"
                        class="form-control"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        placeholder="Full Name" />
                    <label for="username" >Full Name</label>
                </div>
                <div class="form-floating mb-4 pt-1">
                    <input type="email" class="form-control pb-4"placeholder="Email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label for="floatingInput">Email</label>
                </div>
                <div class="form-check">
  <input class="form-check-input mb-4" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label mb-4" style={{fontSize:"13px"}} for="flexCheckDefault">
    I agree to Zomato's <span style={{color:"red"}}>Term's of Service, Privacy policy and Content Policies</span>
  </label>
</div>
<div class="d-grid gap-2 col-12 mx-auto">
  <button class="btn btn-secondary p-2 mb-3" type="button">Create account</button>
 
</div>
<button type="button" class="btn btn-light mb-3 mt-4 p-2 email"><i class="fa-brands fa-google me-3"></i>Sign in with Google</button>
<span>Already have an account? <span style={{color:"red"}}>Login</span></span>
                   
                </form>
            </div>
        </div>
    );
};

export default Signup;