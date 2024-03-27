import { useState, useEffect } from 'react';
import axios from 'axios';
 

function OrderDetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/order/orders')
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  }, []);
let number=1
  return (
    <div className="App">
      <h1>Order Data</h1>
      {data.length > 0 ? (
        <ul>
          {data.map((order) => (
            <li key={order._id}>
              <p>Table number: {number++}</p>
              <p>Order ID: {order._id}</p>
              <p>Customer ID: {order.customerId}</p>
              <p>Status: {order.status}</p>
              {/* <p>Created At: {order.createdAt}</p> */}
              <p>Items:</p>
              <ul>
                {order.items.map((item, index) => (
                  <li key={index}>
                    Item ID: {item.itemId}
                    <br />
                    Quantity: {item.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default OrderDetails;