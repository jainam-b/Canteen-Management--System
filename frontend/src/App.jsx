import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard';
import "./App.css";
import ProductPage from "./Components/Products";
import OrderDetails from "./Components/OrderDetails";
import TeamMembers from "./Components/Members";
import Login from "./Components/Login";
import Signup from "./Components/signup";
import AdminProfile from './Components/yourprofile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<OrderDetails />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/members" element={<TeamMembers />} />
        <Route path="/yourprofile" element={<AdminProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
