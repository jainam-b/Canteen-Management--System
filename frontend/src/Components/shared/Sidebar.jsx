import React from 'react'
import { FcComboChart } from "react-icons/fc";
import { DASHBOARD_SIDEBAR_LINKS } from '../../Lib/const/Sidebar_menu';
import classNames from 'classnames'
import {Link, useLocation } from 'react-router-dom'

const linkClass ='flex items-center gap-2 font-light px-3 py-2 hover:bg-stone-50 hover:no-underline active:bg-neutral-600 rounded text-base'


export default function Sidebar() {
  return (
    <div className=' bg-orange-500 w-100px h-900px p-4 flex flex-col text-black bold rounded-r-lg items-center'>
        <div className=' flex items-center gap-2  px-1 py-1.5'>
            <FcComboChart  fontSize={35}/>
            <br />
            <a href="/" className='text-Black-800 text-lg font-size-35 font-semibold'> Dashboard</a>
        </div>
        <div className='flex-1 py-6 flex flex-col gap-3 text-black-900 rounded'>
          {DASHBOARD_SIDEBAR_LINKS.map((item)=>(
            <SidebarLink key={item.key} item={item} />
          ))}
        </div>
    </div>
  )
}
 

function SidebarLink({item}) {
  const {pathname}=useLocation()

  return(
    <Link to={item.path} className= {classNames(pathname === Link.path ? 'bg-white-700 text-black' : 'text-black-400',linkClass)}>
    <span className='text-xl'>{item.icon}</span>
    {item.label}
    </Link>
  )
}
