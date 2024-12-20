import './App.css';

import { BrowserRouter, Route, Routes} from "react-router-dom"
import { Header } from './project/Components/Header/Header';
import { GetTheApp } from './project/Components/GetTheApp/GetTheApp';
import AddRestaurant from './project/Components/AddRestaurant/AddRestaurant';
import OrderOnline from './project/Components/OrderOnline/OrderOnline';
import { Dining } from './project/Components/Dinning/Dinning';
import { Events } from './project/Components/Events/Events';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Header/>}></Route>
            <Route path="/gettheapp" element={<GetTheApp/>}></Route>
            {/* <Route path="/investorrelations" element={<InvestorR />}></Route> */}
            <Route path="/addrestaurant" element={<AddRestaurant/>}></Route>
            <Route path="/orderonline" element={<OrderOnline />}></Route>
            <Route path="/dinning" element={<Dining />}></Route>
            <Route path="/events" element={<Events/>}></Route>
          </Routes>
         </BrowserRouter>

      </header>
    </div>
  );
}

export default App;
