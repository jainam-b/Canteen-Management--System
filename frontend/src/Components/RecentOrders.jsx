
import React from "react";
// import OrdersDashboard from './OrdersDashboard'
const RecentOrders = () => {
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
                <th className="px-4 py-2 text-left">Order Number</th>
                <th className="px-4 py-2 text-left">Order Date</th>
                <th className="px-4 py-2 text-left">Customer Name</th>
                <th className="px-4 py-2 text-left">Order Status</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Payment Mode</th>
                <th className="px-4 py-2 text-left">Payment Status</th>
                {/* <th className="px-4 py-2 text-left">Actions</th> */}
              </tr>
            </thead>

            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="border-t text-blue-600">616507F62657E</td>
                <td className="border-t">12-10-2021 (10:55 AM)</td>
                <td className="border-t">Jeremy Keith</td>
                <td className="border-t">
                  <div className="text-red-500">Unreachable</div>
                </td>
                <td className="border-t">1,240</td>
                <td className="border-t">
                  <div className="text-blue-600">BKASH</div>
                </td>
                <td className="border-t">Paid</td>
                {/* <td className="border-t">
                  <div className="flex space-x-2">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-md">
                      Details
                    </button>
                    <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-md">
                      Send SMS
                    </button>
                    <button className="bg-gray-400 hover:bg-gray-500 text-white py-1 px-3 rounded-md">
                      Order History
                    </button>
                  </div>
                </td> */}
              </tr>
              {/* <!--- Add more rows based on the sample above --> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecentOrders;




// import React from 'react'

// import { format } from 'date-fns'
// import { Link } from 'react-router-dom'
// import { getOrderStatus } from '../Lib/helpers/index'

// const recentOrderData = [
// 	{
// 		id: '1',
// 		product_id: '4324',
// 		customer_id: '23143',
// 		customer_name: 'Shirley A. Lape',
// 		order_date: '2022-05-17T03:24:00',
// 		order_total: '$435.50',
// 		current_order_status: 'PLACED',
// 		shipment_address: 'Cottage Grove, OR 97424'
// 	},
// 	{
// 		id: '7',
// 		product_id: '7453',
// 		customer_id: '96453',
// 		customer_name: 'Ryan Carroll',
// 		order_date: '2022-05-14T05:24:00',
// 		order_total: '$96.35',
// 		current_order_status: 'CONFIRMED',
// 		shipment_address: 'Los Angeles, CA 90017'
// 	},
// 	{
// 		id: '2',
// 		product_id: '5434',
// 		customer_id: '65345',
// 		customer_name: 'Mason Nash',
// 		order_date: '2022-05-17T07:14:00',
// 		order_total: '$836.44',
// 		current_order_status: 'SHIPPED',
// 		shipment_address: 'Westminster, CA 92683'
// 	},
// 	{
// 		id: '3',
// 		product_id: '9854',
// 		customer_id: '87832',
// 		customer_name: 'Luke Parkin',
// 		order_date: '2022-05-16T12:40:00',
// 		order_total: '$334.50',
// 		current_order_status: 'SHIPPED',
// 		shipment_address: 'San Mateo, CA 94403'
// 	},
// 	{
// 		id: '4',
// 		product_id: '8763',
// 		customer_id: '09832',
// 		customer_name: 'Anthony Fry',
// 		order_date: '2022-05-14T03:24:00',
// 		order_total: '$876.00',
// 		current_order_status: 'OUT_FOR_DELIVERY',
// 		shipment_address: 'San Mateo, CA 94403'
// 	},
// 	{
// 		id: '5',
// 		product_id: '5627',
// 		customer_id: '97632',
// 		customer_name: 'Ryan Carroll',
// 		order_date: '2022-05-14T05:24:00',
// 		order_total: '$96.35',
// 		current_order_status: 'DELIVERED',
// 		shipment_address: 'Los Angeles, CA 90017'
// 	}
// ]

// export default function RecentOrders() {
//     return (
//         <div className="bg-white h-[18rem] w-[15rem] px-2 pt-3 pb-2 rounded-sm border border-gray-200 flex-1 items-center ">
//             <strong className="text-gray-700 font-medium">Recent Orders</strong>
//             <div className="border-x border-gray-600 rounded-sm mt-4 w-[90%]">
//                 <table className="w-full text-gray-700">
//                     <thead>
//                         <tr>
//                             <th>ID</th>
//                             <th>Product ID</th>
//                             <th>Customer Name</th>
//                             <th>Order Date</th>
//                             <th>Order Total</th>
//                             <th>Shipping Address</th>
//                             <th>Order Status</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {recentOrderData.map((order) => (
//                             <tr key={order.id}>
//                                 <td>
//                                     <Link to={`/order/${order.id}`}>#{order.id}</Link>
//                                 </td>
//                                 <td>
//                                     <Link to={`/product/${order.product_id}`}>#{order.product_id}</Link>
//                                 </td>
//                                 <td>
//                                     <Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
//                                 </td>
//                                 <td>{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
//                                 <td>{order.order_total} </td>
//                                 <td>{order.shipment_address}</td>
//                                 <td>{getOrderStatus(order.current_order_status)}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     )
// }
