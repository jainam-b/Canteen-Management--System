
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
                <th className="px-4 py-2 text-left">Actions</th>
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
                <td className="border-t">
                <div className="flex space-x-2">
                    <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-md">
                    Order History
                    </button>
                  </div>
                  </td>
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




