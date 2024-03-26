// import { useState, useEffect } from 'react';
// import axios from 'axios';
 

// function OrderDetails() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Connect to the Socket.io server
//     const socket = io('http://localhost:3000');

//     socket.on('connect', () => {
//         console.log('Connected to Socket.io server');
//       });
//   }, []);
// let number=1
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



