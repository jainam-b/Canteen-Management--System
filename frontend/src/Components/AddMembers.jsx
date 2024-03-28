import React from 'react'
import "./AddMembers.css";

export default function Modal1 ({closeModal}) {
    return (
      <div className='modalBackground'>
          <div className='modalContainer'>
              <div className='titlecloseBtn flex justify-end'>
              <button onClick={() => closeModal(false)} > X </button>
              </div>
              <div className='title'>
                  <h1 className='font-bold'>Add New Member</h1>
              </div>
              <div className='body'>
                  <input type="text" placeholder="First Name" className="p-2 border rounded-md"/>
                  <input type="text" placeholder=" Last Name" className="p-2 border rounded-md"/>
                  <input type="text" placeholder="Username" className="p-2 border rounded-md"/>
                  <input type="text" placeholder="Email Address" className="p-2 border rounded-md"/>
              </div>
              <div className='footer flex justify-center' >
                  <button className='flex  bg-green-300'> Add Member</button>
              </div>
          </div>
      </div>
    )
  }
  
