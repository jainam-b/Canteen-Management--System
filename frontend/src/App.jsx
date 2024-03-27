import React from "react";
import { BrowserRouter,Routes, Router, Route } from "react-router-dom";
// import AddItem from "./Components/AddItem";
// import Charts from "./Components/Charts";
import Layout from './Components/shared/Layout';
import Dashboard from './Components/Dashboard';
import "./App.css";
import ProductPage from "./Components/Products";
import Try from "./Components/Try";
import OrderDetails from "./Components/OrderDetails";
import TeamMembers from "./Components/Members"
// import Login from "./Components/Login/Login";
// import Signup from "./Components/Signup/Signup";




function App(){
  return(

    <BrowserRouter>
      <Routes>
          <Route path='try' element={<Try/>} />
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard />} />
          <Route path='orders' element={<OrderDetails  />} />
          <Route path='products' element={<ProductPage  />} />
          <Route path='members' element={<TeamMembers  />} />

        {/* <Route path='Login' element={<Login  />} />
        <Route path='Signup' element={<Signup  />} /> */}
        </Route>
    </Routes>
  </BrowserRouter>
  )
}
    
    



//  <BrowserRouter>

//         <Routes>
//           <Route path="/add-item" element={<AddItem />}></Route>
//           {/* <Route path="/order-details" element={<OrderDetails />}></Route> */}
//           <Route path="/chart" element={<Charts />}></Route>
           
//         </Routes>
//       </BrowserRouter>

export default App;