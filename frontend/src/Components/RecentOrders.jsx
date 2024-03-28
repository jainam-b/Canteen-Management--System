import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useProductContext } from './ViewDetailModal/DetailContext';
import ViewDetailModal from './ViewDetailModal/ViewDetailModal';

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const { setProductDetails } = useProductContext(); // Access setProductDetails from ProductContext

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:3001/menu/itemnames');
      const sortedOrders = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      const latestOrders = sortedOrders.slice(0, 5);
      setOrders(latestOrders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleViewDetails = async (orderId) => {
    setOpenModal(true);
    try {
      const response = await axios.get(`http://localhost:3001/api/order/${orderId}`);
      setProductDetails(response.data); // Update productDetails in ProductContext with selected order details
    } catch (error) {
      console.error('Error fetching order details:', error);
    }
  };

  return (
    <div className="container mx-auto py-2 px-4 flex-100%"> 
      <div className="bg-white p-4">
        <h4 className="text-2xl font-bold">Orders</h4>
        <br />
        <hr/>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="border-b">
                <th className="px-4 py-2 text-left">Order ID</th>
                <th className="px-4 py-2 text-left">Date & Time</th>
                <th className="px-4 py-2 text-left">Customer Name</th>
                <th className="px-4 py-2 text-left">Order Status</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.orderId} className="hover:bg-gray-100">
                  <td className="border-t text-blue-600">{order.orderId}</td>
                  <td className="border-t">{new Date(order.createdAt).toLocaleString()}</td>
                  <td className="border-t">{order.user}</td>
                  <td className="border-t">
                    <div className={`text-${order.status === 'completed' ? 'green' : 'red'}-500`}>{order.status}</div>
                  </td>
                  <td className="border-t">{order.totalPrice}</td>
                  <td className="border-t">
                    <button onClick={() => handleViewDetails(order.orderId)} className="bg-green-500 hover:bg-green-600 mt-2 text-white py-1 px-3 rounded-md">
                      View Details 
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {openModal && <ViewDetailModal closeModal={() => setOpenModal(false)} />}
    </div>
  );
};

export default RecentOrders;
