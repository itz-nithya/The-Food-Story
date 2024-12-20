import './Card.css';
import foodimg from"../assets/images/orderonline.jpg";
import dinningimg from "../assets/images/dinning.jpg";
import liveimg from "../assets/images/events.jpg";
import { useNavigate } from 'react-router-dom';


export function Card(){
        const navigate = useNavigate();

  const orderonline = () => {
    navigate('/orderonline');
  };
  const dinning = () => {
        navigate('/dinning');
      };
      const events = () => {
        navigate('/events');
      };
        
  return(
        <>
        <div className="container">
        <div className="row card-parent">
        <div className="col-md-4 card">
            
                <img src={foodimg}
                      onClick={orderonline}
                     style={{ cusor:'prointer'}}/>
                <h1>Order Online</h1>
                <span>Stay home and order to your home step</span>
            

        </div>
        <div className="col-md-4 card">
            
                <img src={dinningimg}
                onClick={dinning}
                style={{ cusor:'prointer'}}/>
                <h1>Dinning</h1>
                <span>View the city's favourite dinning venues</span>
    

        </div>
        <div className="col-md-4 card">
            
                <img src={liveimg}
                onClick={events}
                style={{ cusor:'prointer'}}/>

                <h1>Live Events</h1>
                <span>Discover india's best events & concert's</span>
            

        </div>
        </div>
        </div>

        </>
    )
}