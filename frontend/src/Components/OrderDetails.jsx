// // import { useState, useEffect } from 'react';
// // import axios from 'axios';
 

// // function OrderDetails() {
// //   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:3001/order/orders')
// //       .then(function (response) {
// //         setData(response.data);
// //       })
// //       .catch(function (error) {
// //         console.error('Error fetching data:', error);
// //       });
// //   }, []);
// // let number=1
// //   return (
// //     <div className="App">
// //       <h1>Order Data</h1>
// //       {data.length > 0 ? (
// //         <ul>
// //           {data.map((order) => (
// //             <li key={order._id}>
// //               <p>Table number: {number++}</p>
// //               <p>Order ID: {order._id}</p>
// //               <p>Customer ID: {order.customerId}</p>
// //               <p>Status: {order.status}</p>
// //               <p>Created At: {order.createdAt}</p>
// //               <p>Items:</p>
// //               <ul>
// //                 {order.items.map((item, index) => (
// //                   <li key={index}>
// //                     Item ID: {item.itemId}
// //                     <br />
// //                     Quantity: {item.quantity}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </li>
// //           ))}
// //         </ul>
// //       ) : (
// //         <p>Loading...</p>
// //       )}
// //     </div>
// //   );
// // }

// // export default OrderDetails;


// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';

// const OrderDetails = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // Connect to the Socket.io server
//     const socket = io('http://localhost:3000');

//     socket.on('connect', () => {
//         console.log('Connected to Socket.io server');
//       });

//     // Listen for 'newOrder' event
//     socket.on('newOrder', (order) => {
//       // Update orders state with the new order
//     //   setOrders(prevOrders => [...prevOrders, order]);
//       const order=setOrders("placed");
//     });

//     // Clean up the socket connection when the component unmounts
//     return () => socket.disconnect();
//   }, []); // Run this effect only once on component mount

//   return (
//     <div>
//       <h1>OrderDetails</h1>
//       <div>
//         <h2>New Orders</h2>
//         <ul>
//           {orders.map((order, index) => (
//             <li key={index}>
//               <p>Order ID: {order._id}</p>
//               <p>Customer Name: {order.customerName}</p>
//               <p>Total Amount: {order.totalAmount}</p>
//               <p>Order Date: {order.orderDate}</p>
//               {/* Add more order details as needed */}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };



