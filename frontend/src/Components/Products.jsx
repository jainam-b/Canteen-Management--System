import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from './Productform'
import { Outlet } from "react-router-dom"
import Sidebar from './shared/Sidebar'
import Header from './shared/Header'

const ProductTable = () => {
    const [allItems, setAllItems] = useState([])
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        fetchAllItems()
    }, [])

    const fetchAllItems = async () => {
        try {
            const response = await axios.get('http://localhost:3001/menu/get-items')
            setAllItems(response.data.items) // Assuming the array is nested inside an object as "items"
        } catch (error) {
            console.error('Error fetching items:', error)
        }
    }
    return (
            <div className="flex flex-row bg-neutral-100 h-screen overflow-hidden">
                <Sidebar />
                <div className="flex-1 overflow-y-auto">
		            <Header />
		          <div className="p-1">	  
			        < Outlet />
		          </div>
            <div className="p-4 bg-white shadow-md rounded-md">
                <div className="flex items-center justify-between mb-2">
                    <h1 className="text-2xl font-bold">Products</h1>
                    <div className="flex items-center">
                        <button
                            className="bg-black text-white px-4 py-2 rounded "
                            onClick={() => {
                                setOpenModal(true)
                            }}
                        >
                            + Add Product
                        </button>
                        {openModal && <Modal closeModal={setOpenModal} />}
                    </div>
                </div>

                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr>
                            {['Image', 'Product Name', 'Description', 'Price', 'Category'].map((header, index) => (
                                <th key={index} className="py-2 px-4 border-b">
                                    {header}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {allItems.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border-b">
                                    <img src={item.image} alt={item.name} className="w-8 h-8" />
                                </td>
                                <td className="py-2 px-4 border-b">{item.name}</td>
                                <td className="py-2 px-4 border-b">{item.description}</td>
                                <td className="py-2 px-4 border-b">{item.price}</td>
                                <td className="py-2 px-4 border-b">{item.category}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            </div>
            </div>
            // </div>
    )
}

export default ProductTable

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
