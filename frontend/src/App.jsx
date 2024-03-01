import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter , Routes, Router, Route } from "react-router-dom";
import AddItem from "./Components/AddItem";
import OrderDetails from "./Components/OrderDetails";

function App() {
  return <div>
 <BrowserRouter>
         
        <Routes>
          <Route path="/add-item" element={<AddItem />}></Route>
          <Route path="/order-details" element={<OrderDetails />}></Route>
          {/* <Route path="/" element={<Landing />}></Route>
          <Route path="/dashboard" element={ <Suspense fallback={"loading ..."}> <Dashboard /></Suspense>}></Route>
          <Route path="/" element={ <Suspense fallback={"loading ..."}> <Landing /></Suspense>}></Route> */}
        </Routes>
      </BrowserRouter>
  </div>;
}

export default App;
