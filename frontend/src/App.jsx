import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Routes, Router, Route } from "react-router-dom";
import AddItem from "./Components/AddItem";
import OrderDetails from "./Components/OrderDetails";
import Charts from "./Components/Charts";


function App() {
  return <div>
 
     
 
 <BrowserRouter>
         
        <Routes>
          <Route path="/add-item" element={<AddItem />}></Route>
          <Route path="/order-details" element={<OrderDetails />}></Route>
          <Route path="/chart" element={<Charts />}></Route>
           
        </Routes>
      </BrowserRouter>
  </div>;
}

export default App;
