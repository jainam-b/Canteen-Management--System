import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import "./App.css";
import ProductPage from "./Components/Products";
import OrderDetails from "./Components/OrderDetails";
import TeamMembers from "./Components/Members"
// import Login from "./Components/Login/Login";
// import Signup from "./Components/Signup/Signup";
// import { ModalProvider } from "./Components/Context/ModalContext";
import AdminProfile from './Components/yourprofile'



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
          <Route path='yourprofile' element={<AdminProfile  />} />

        {/* <Route path='Login' element={<Login  />} />
        <Route path='Signup' element={<Signup  />} /> */}
        </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
