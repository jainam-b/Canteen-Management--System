import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/shared/Layout';
import Dashboard from './Components/Dashboard';
import ProductPage from './Components/Products';
import OrderDetails from './Components/OrderDetails';
import TeamMembers from './Components/Members';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import AdminProfile from './Components/yourprofile';
import { ProductProvider } from './Components/ViewDetailModal/DetailContext';
import { AuthProvider } from './Components/Login/AuthContext';

function App() {
    return (
        <ProductProvider>
            <AuthProvider>
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
            </AuthProvider>
        </ProductProvider>
    );
}

export default App;