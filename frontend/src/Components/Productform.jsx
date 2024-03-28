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
                <input type="text" placeholder="Product Name" className="p-2 border rounded-md"/>
                <input type="text" placeholder="Description" className="p-2 border rounded-md"/>
                
                <input type="text" placeholder="Image URL" className="p-2 border rounded-md"/>
                <select placeholder="Category" className='p-2 border rounded-md'>
                <option>Category 1</option>
                <option>Category 2</option>
                <option>Category 3</option>
                <option>Category 4</option>
                </select>
                <input type='number' placeholder='Sale Price' className='col-span-full p-2 border rounded-md'/>
            </div>
            <div className='footer justify-end'>
                <button>Add Product</button>
            </div>
        </div>
    </div>
  )
}
