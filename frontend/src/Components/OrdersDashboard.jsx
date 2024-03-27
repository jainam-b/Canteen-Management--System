import React from 'react';

const OrdersDashboard = () => {
  return (
    <div className="p-2 bg-gray-100">
      <div className="mb-4">
        <div className="flex space-x-2 flex justify-center">
        <h1 className="text-2xl line-height: 3rem font-bold mr-2 text-center ">Orders</h1>
          <input type="text" placeholder="Search by Order Number" className="p-2 border rounded" />
          <input type="text" placeholder="Search by Mobile Number" className="p-2 border rounded" />
          <input type="text" placeholder="Search by Order Status" className="p-2 border rounded" />
          <button className='bg-blue-500 text-white p-2 rounded'>Search</button>
        </div>
      </div>


      <div className='grid grid-cols-4 gap-4 mb-6'>
        {['Total', 'Completed', 'Pending', 'Processing'].map((status, index) => (
          <div key={index} 
               className={`p-6 rounded shadow-lg bg-gradient-to-br 
                          ${status === 'Total' ? 'from-blue-400 to-blue-500' : 
                           status === 'Completed' ? 'from-red-400 to-red-500' :
                           status === 'Pending' ? 'from-orange-400 to-orange-500':
                           status === "Processing"? "from-purple-400 to-purple-500": ''}`}>
            <h3>{status}</h3>
            {index * 5420}
          </div>
        ))}
      </div>
      {/* Graph Section */}
    </div>
  );
};

export default OrdersDashboard;
