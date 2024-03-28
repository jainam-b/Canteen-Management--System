import React from 'react'
import "./Productform.css";

export default function Modal ({closeModal}) {
  return (
    <div className='modalBackground'>
        <div className='modalContainer'>
            <div className='titlecloseBtn justify-end'>
            <button onClick={() => closeModal(false)}> X </button>
            </div>
            <div className='title'>
                <h1>Add New Product</h1> <hr />
                <br />
            </div>
            <div className='body'>
                 Product Name: <input type="text" placeholder="Product Name" className="p-2 border rounded-md"/><br />
                 Product Description: <input type="text" placeholder="Description" className="p-2 border rounded-md mt-3"/><br />
                 Product Image: <input type="text" placeholder="Image URL" className="p-2 border rounded-md mt-4"/> <br />
                Category: <select placeholder="Category" className='p-2 border rounded-md mt-3'>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
                <option>Category 4</option>
                </select> <br />
                Sale Price: <input type='number' placeholder='Sale Price' className='col-span-full p-2 border rounded-md mt-3'/>
            </div>
            <div className='footer justify-end'>
                <button>Add Product</button>
            </div>
        </div>
    </div>
  )
}
