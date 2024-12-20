import './Collections.css';
import img1 from "../assets/images/newopened.jpg";
import img2 from "../assets/images/insta-trending.jpg";
import img3 from "../assets/images/southindian.jpg";
import img4 from "../assets/images/seaview.jpg";
export function Collections() {
    return (
        <>
            <div className='parent'>
                <h1 className='flex-start'>Collections</h1>

                <div>Explore curated lists of top restaurants, cafes, pubs and bars in Chennai, based on trends
                    <span className="text">All collections in Chennai<div class="btn-group dropend">
                        <button type="button" class="btn btn-light dropdown-toggle"
                     data-bs-toggle="dropdown" aria-expanded="false">
                    </button></div></span>
                </div>
            </div>
           
            <div className='container'>
                <div className='row imgparent'>
                <div className='col-md-3 img'>
                    <img src={img1}/>
                    <div className='text-2'><div>Newly Opened Places</div>
                    <div style={{fontSize:"15px"}}>17 Places<div class="btn-group dropend">
                        <button type="button" class="btn dropdown-toggle slide"
                     data-bs-toggle="dropdown" aria-expanded="false">
                    </button></div></div>
                </div>
                </div>
                <div className='img'>
                    <img src={img2}/>
                    <div className='text-2'><div>Top Trending Spots</div>
                    <div style={{fontSize:"15px"}}>39 Places<div class="btn-group dropend">
                        <button type="button" class="btn dropdown-toggle slide"
                     data-bs-toggle="dropdown" aria-expanded="false">
                    </button></div></div>
                </div>
                </div> <div className='img'>
                    <img src={img3}/>
                    <div className='text-2'><div>South Indian Special</div>
                    <div style={{fontSize:"15px"}}>17 Places<div class="btn-group dropend">
                        <button type="button" class="btn dropdown-toggle slide"
                     data-bs-toggle="dropdown" aria-expanded="false">
                    </button></div></div>
                </div>
                </div> <div className='img'>
                    <img src={img4}/>
                    <div className='text-2'><div>Sea View Dinning</div>
                    <div style={{fontSize:"15px"}}>37 Places<div class="btn-group dropend">
                        <button type="button" class="btn dropdown-toggle slide"
                     data-bs-toggle="dropdown" aria-expanded="false">
                    </button></div></div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}