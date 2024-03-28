import React from 'react'
import "./AddMembers.css";

export default function Modal1 ({closeModal}) {
    return (
      <div className='modalBackground1'>
          <div className='modalContainer1'>
              <div className='titlecloseBtn1 flex justify-end'>
              <button onClick={() => closeModal(false)} > X </button>
              </div>
              <div className='title1'>
                  <h1 className='font-bold'>Add New Member</h1>
              </div>
              <div className='body1'>
                  <input type="text" placeholder="First Name" className="p-2 border rounded-md"/>
                  <input type="text" placeholder=" Last Name" className="p-2 border rounded-md"/>
                  <input type="text" placeholder="Username" className="p-2 border rounded-md"/>
                  <input type="text" placeholder="Email Address" className="p-2 border rounded-md"/>
              </div>
              <div className='footer1 flex justify-center' >
                  <button className='flex  bg-green-300'> Add Member</button>
              </div>
          </div>
      </div>
    )
  }
  
