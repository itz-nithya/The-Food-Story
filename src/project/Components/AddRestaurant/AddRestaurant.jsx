import { useState } from "react";
import "./AddRestaurant.css"
import Login from "../Login/Login.jsx";
function AddRestaurant(){

    const [isLoginOpen, setLoginOpen] = useState(false);
    return(
        <>
        <div className="bg-img">
        <span><button onClick={() => setLoginOpen(true)} style={{cursor:"pointer"}} className="login">Login</button>
        <Login  isOpen={isLoginOpen} onClose={() => setLoginOpen(false)}/></span>
             <h1 className="text-center heading">Partner with TFS <br/> and grow your business</h1>
             <h4 className="text-center sub-txt">0% commission for the 1st month for few restaurant partners in selected cities</h4>
             <div className="reg-div"><button className="btn btn-primary p-2 register">Resgister your restaurant</button></div>
<div className="box-parent">
    <div className="white-box">
        <h4 className="ps-4 pt-3">Get Started - It only takes 10 minutes</h4>
        <span className="ps-4 pt-3 box-txt">Please be ready with the following for a smooth registration</span>
        <div className="ps-4 pt-2"><i class="fa-solid fa-circle-check"></i> PAN card</div>
        <div className="ps-4 pt-2"><i class="fa-solid fa-circle-check"></i> GST number, if applicable </div>
        <div className="ps-5">Require a GST ? apply here</div>
        <div className="ps-4 pt-2"><i class="fa-solid fa-circle-check"></i> Bank account details</div>
        </div>
        </div>
        </div>
        </>
    )

}
export default AddRestaurant;