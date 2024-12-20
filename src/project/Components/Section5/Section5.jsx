import "./Section5.css";
import img from "../assets/images/phoneimg.avif"
import googleplay from "../assets/images/btn-3-removebg-preview.png"
export function Section5() {
    return (
        <>
            <div className="container-fluid parent">
                <div className="row">
                    <div className="col-md-6 mt-5 left">
                        <img src={img} />
                    </div>
                    <div className="col-md-6 mt-5 right">
                        <div><h1>Get the TFS app</h1>
                        </div>
                        <div className="mt-3">We will send you a link, open it on your phone to download the app</div>
                        <div className="mt-2 radio">
                            <div class="form-check me-5">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                <label class="form-check-label" for="flexRadioDefault2">
                                    Email
                                </label>
                            </div><div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1">
                                    Phone
                                </label>
                            </div>

                        </div>

                        <div class="form-floating mt-3 email-id">
                            <input type="email" class="form-control" id="floatingInput" placeholder="Email" />
                            <label for="floatingInput">Email</label>
                            <button type="button" class="btn btn-danger w-50">Share App Link</button>
                        </div>
                        <div className="mt-3">Google Play</div>
                        <div className="google">
                            <img src={googleplay}/> 
                         </div>

                    </div>                                                                                                                                                                                                                                                                                                                                                                                    
                </div>
            </div>
        </>
    )
}