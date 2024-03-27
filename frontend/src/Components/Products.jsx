// import React from "react";
// import OrdersDashboard from './OrdersDashboard'
// const ProductPage = () => {
//   return (
//       <div className="container mx-auto py-4 px-6">
//         <div><OrdersDashboard/></div>
//       <div className="bg-white p-6">
//       <h1 className="text-2xl font-bold">Orders</h1>
//     <hr/>
//         <div className="overflow-x-auto">
//           <table className="table-auto w-full">
//             <thead>
//               <tr className="border-b">
//                 <th className="px-4 py-2 text-left">Order Number</th>
//                 <th className="px-4 py-2 text-left">Order Date</th>
//                 <th className="px-4 py-2 text-left">Customer Name</th>
//                 <th className="px-4 py-2 text-left">Order Status</th>
//                 <th className="px-4 py-2 text-left">Price</th>
//                 <th className="px-4 py-2 text-left">Payment Mode</th>
//                 <th className="px-4 py-2 text-left">Payment Status</th>
//                 <th className="px-4 py-2 text-left">Actions</th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr className="hover:bg-gray-100">
//                 <td className="border-t text-blue-600">616507F62657E</td>
//                 <td className="border-t">12-10-2021 (10:55 AM)</td>
//                 <td className="border-t">Jeremy Keith</td>
//                 <td className="border-t">
//                   <div className="text-red-500">Unreachable</div>
//                 </td>
//                 <td className="border-t">1,240</td>
//                 <td className="border-t">
//                   <div className="text-blue-600">BKASH</div>
//                 </td>
//                 <td className="border-t">Paid</td>
//                 <td className="border-t">
//                   <div className="flex space-x-2">
//                     <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md">
//                       Details
//                     </button>
//                     <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-md">
//                       Send SMS
//                     </button>
//                     <button className="bg-gray-400 hover:bg-gray-500 text-white py-1 px-3 rounded-md">
//                       Order History
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//               {/* <!--- Add more rows based on the sample above --> */}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;









// Actual Product Page

import React from 'react';

const ProductTable = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <div className="flex items-center justify-between mb-2">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex items-center">
          {/* <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Export</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Import</button> */}
          <button className="bg-black text-white px-4 py-2 rounded">+ Add Product</button>
        </div>
      </div>

      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">All Products</button>
          <button className="bg-white text-black px-4 py-2 rounded mr-2">Active</button>
          {/* <button className="bg-white text-black px-4 py-2 rounded mr-2">Inactive</button> */}
          <button className="bg-white text-black px-4 py-2 rounded">Out of Stock</button>
        </div>
        {/* <div className="flex items-center">
          <span className="mr-2">1824 Products</span>
          <select className="border p-2 rounded mr-2">
            <option>Show 10</option> */}
            {/* Add more options as needed */}
          {/* </select>
          <input 
            type="search" 
            placeholder="Search Products" 
            className="p-2 border rounded"
          />
        </div> */}
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            {['Product Name', 'Image', 'Sale Price', 'Status', 'Inventory', 'Actions'].map((header, index) => (
              <th key={index} className="py-2 px-4 border-b">{header}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {/* Map through products and render rows */}
          {/* This is a sample row */}
          <tr className="hover:bg-gray-100">
            {/* Product name */}
            <td className="py-2 px-4 border-b">Fashion ka Fatka Haramaini Round Neck Black Embroidery</td>

            {/* Image */}
            <td className="py-2 px-4 border-b">
              {/* Replace with actual image URL */}
              <img src="/path/to/image" alt="" className="w-8 h-8" />
            </td>

            {/* Sale Price */}
            <td className="py-2 px-4 border-b">AED 214.00</td>

            {/* Status */}
            <td className="py-2 px-4 border-b flex items-center">
              <span className="bg-green-500 text-white rounded px-3 py-1">Active</span>
            </td>

            {/* Inventory */}
            <td className="py-2 px-4 border-b text-center ">12</td>

            {/* Actions */}
            <td className="py-2 px-4 border-b">
              {/* Replace with actual actions */}
              <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
            </td>
           </tr>
        </tbody>
       </table>
    </div>
  );
};

export default ProductTable;
