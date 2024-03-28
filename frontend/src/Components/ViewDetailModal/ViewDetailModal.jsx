import React from 'react';
import { useProductContext } from '../ViewDetailModal/DetailContext';
import "./ViewDetail.css";

export default function ViewDetailModal({ closeModal }) {
  const { productDetails } = useProductContext(); // Access productDetails from ProductContext

  return (
    <div className='modalBackground2'>
      <div className='modalContainer2'>
        <div className='titlecloseBtn2 justify-end'>
          <button onClick={() => closeModal(false)}> X </button>
        </div>
        <div className='title'>
          <h1>Order Details</h1>
          <hr />
          <br />
        </div>
        <div className='body'>
          {productDetails && ( // Check if productDetails is available
            <>
              {/* <p>Order ID: {productDetails._id}</p> */}
              {/* <p>User: {productDetails.user}</p> */}
              <p>Order Status: {productDetails.status}</p>
              <p>Total Price: {productDetails.totalPrice}</p>
              <p>Items:</p>
              <ul>
                {productDetails.items.map((item, index) => (
                  <li key={index}>
                    <p>Product Name: {item.itemId.name}</p>
                    <p>Price: {item.itemId.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </li>
                ))}
              </ul>
              <hr />
            </>
          )}
        </div>
        <div className='footer justify-end'>
           
        </div>
      </div>
    </div>
  );
}
