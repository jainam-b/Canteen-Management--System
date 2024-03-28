import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  return (
    <div>
      <td className="border-t ">
        <div className='ml-2'>
      <div className="flex space-x-2 mr-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3  rounded-md">
        Pending
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-md">
        Completed
        </button>
        {/* <button className="bg-gray-400 hover:bg-gray-500 text-white py-1 px-3 rounded-md">
          Order History
        </button> */}
      </div>
      </div>
    </td>

    {/* order componets  */}
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
      </div></div>
  );
};

export default RecentOrders;
