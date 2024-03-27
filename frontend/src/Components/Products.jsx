








// Actual Product Page

import React from 'react';

const ProductTable = () => {
  const [allItems, setAllItems] = useState([]);


  useEffect(() => {
    fetchAllItems();
  }, []);

  const fetchAllItems = async () => {
    try {
      const response = await axios.get("http://localhost:3001/menu/get-items");
      setAllItems(response.data.items); // Assuming the array is nested inside an object as "items"
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  ;

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

      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            {["Image",'Product Name', 'Description', 'Price', 'Category'].map((header, index) => (
              <th key={index} className="py-2 px-4 border-b">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
  {allItems.map(item => (
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
  );
};

export default ProductTable;
