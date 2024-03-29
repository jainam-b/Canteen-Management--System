import React, { useState, useEffect } from 'react';
import Modal1 from './AddMembers';
import { Outlet } from 'react-router-dom';
import Sidebar from './shared/Sidebar';
import Header from './shared/Header';
import axios from 'axios';

const TeamMember = () => {
  const [openModal, setOpenModal] = useState(false);
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user/users');
        setTeamMembers(response.data);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="flex flex-row bg-neutral-100 h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        <Header />
        <div className="p-1">
          <Outlet />
        </div>
        <div className="p-4 bg-white shadow rounded-md">
          <div className="flex items-center justify-between mb-2">
            <button className="bg-black text-white px-4 py-2 rounded" onClick={() => setOpenModal(true)}>
              + Add member
            </button>
            {openModal && <Modal1 closeModal={setOpenModal} />}
          </div>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                {['Name', 'Email', 'Phone number', 'Status'].map((header, index) => (
                  <th key={index} className="py-2 px-4 border-b">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {teamMembers.map((member) => (
                <tr key={member._id} className="hover:bg-gray-100">
                  <td className="py-2  px-5 border-b flex items-center">
                     
                    {member.username}
                  </td>
                  <td className="py-2 px-4 border-b">{member.email}</td>
                  <td className="py-2 px-4 border-b">{member.phone}</td>
                  <td className="py-2 px-4 border-b flex items-center">
                    <span className="bg-green-500 text-white rounded px-3 py-1">Active</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
