import React from 'react';
import { Outlet } from "react-router-dom"
import Sidebar from './shared/Sidebar'
import Header from './shared/Header'

const AdminProfile = () => {
  return (
    <div className="flex flex-row bg-neutral-100 h-screen overflow-hidden">
    <Sidebar />
    <div className="flex-1 overflow-y-auto">
      <Header />
    <div className="p-1">	  
  < Outlet />
  </div>
    <div className="p-8 bg-white shadow-lg max-w-3xl mx-auto rounded-md">
      <h2 className="text-2xl font-bold mb-6">Admin Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Admin123"/>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="admin@example.com"/>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
            Confirm Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="confirm-password" type="password" placeholder="******************"/>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Save Changes
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AdminProfile;
