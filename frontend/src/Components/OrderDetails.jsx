import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet } from "react-router-dom"
import Sidebar from './shared/Sidebar'
import Header from './shared/Header'

const RecentOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:3001/menu/itemnames');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  // Function to group orders by orderId
  const groupOrdersByOrderId = () => {
    const groupedOrders = {};
    orders.forEach(order => {
      if (!groupedOrders[order.orderId]) {
        groupedOrders[order.orderId] = [order];
      } else {
        groupedOrders[order.orderId].push(order);
      }
    });
    return groupedOrders;
  };

  const handleStatus = async (statusType) => {
    console.log(statusType);
    try {
      const response = await axios.get(`http://localhost:3001/api/filter/${statusType}`);
      setOrders(response.data)
      console.log(response.data);
      // Handle the response data as needed
    } catch (error) {
      console.error(`Error fetching ${statusType} orders:`, error);
    }
  };

  // Function to handle status button click
  const handleChangeStatus = async (orderId) => {
   console.log(orderId);
    try {
      const response = await axios.put(`http://localhost:3001/order/orders/${orderId}`, {
        status: 'completed'
      });
      const updatedOrder = response.data;
      // Update the orders state to reflect the updated order
      setOrders(prevOrders => {
        return prevOrders.map(order => {
          if (order.orderId === updatedOrder.orderId) {
            return updatedOrder;
          }
          return order;
        });
      });
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  return (
    <div className="flex flex-row bg-neutral-100 h-screen overflow-hidden">
    <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Header />
     <div className="p-1">	  
      < Outlet />
    </div>
    <div>
      <td className="border-t">
        <div className='ml-2'>
          <div className="flex space-x-2 mr-4">
            <button onClick={() => handleStatus('pending')} className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md">
              Pending
            </button>
            <button onClick={() => handleStatus('completed')} className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-md">
              Completed
            </button>
            <button onClick={()=>{fetchOrders()}} className="bg-gray-400 hover:bg-gray-500 text-white py-1 px-3 rounded-md">
                      All Orders
                    </button>
          </div>
        </div>
      </td>

      {/* order components  */}
      <div className="container mx-auto py-2 px-4 flex-100%">
        <div className="bg-white p-4">
          <h4 className="text-2xl font-bold">Orders</h4>
          <br />
          <hr />
          <div className="overflow-x-auto">
            {Object.entries(groupOrdersByOrderId()).map(([orderId, orderGroup]) => (
              <div key={orderId}>
                <h5 className="text-xl font-bold mt-4">Order Number: {orderId}</h5>
                <table className="table-auto w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-2 text-left">Item Name</th>
                      <th className="px-4 py-2 text-left">Quantity</th>
                      <th className="px-4 py-2 text-left">Price</th>
                      <th className="px-4 py-2 text-left">Status</th>
                      <td className="border-t">
                            <button onClick={() => handleChangeStatus(orderId)} className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md">
                              Change Status 
                            </button>
                          </td>
                    </tr>
                  </thead>
                  <tbody>
                    {orderGroup.map(order => (
                      order.items.map(item => (
                        <tr key={`${orderId}-${item.name}`} className="hover:bg-gray-100">
                          <td className="border-t" style={{ width: '200px' }}>{item.name}</td>
                          <td className="border-t">{item.quantity}</td>
                          <td className="border-t">{item.price}</td>
                          <td className="border-t">{order.status}</td>
                        
                        </tr>
                      ))
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default RecentOrders;
