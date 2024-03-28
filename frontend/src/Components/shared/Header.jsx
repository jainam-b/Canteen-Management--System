import React, { Fragment } from 'react'
import { HiOutlineBell, HiOutlineChatAlt,HiOutlineSearch} from 'react-icons/hi'
import { Popover,Transition,Menu } from '@headlessui/react'
import classNames from 'classnames'

export default function Header() {
  return (
    <div className='bg-white h-14 px-5 flex justify-between items-center w-100% '>
      <div className=' relative'>
        <p className='font-bold font-style-poppins '>Hello,</p>
      </div>
      <div className="relative ">
				<HiOutlineSearch fontSize={20} className="text-gray-400 absolute top-1/2 left-3 -translate-y-1/2" />
				<input type="text" placeholder="Search..." className="text-sm focus:outline-none active:outline-none border rounded-full border-gray-300 w-[24rem] h-10 pl-9 pr-4 rounded-sm"/>
			</div>
      <div className='relative flex items-center'>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                      <div className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}>
                        <span className='sr-only'>Kartik</span>
                      </div>
                  </Menu.Button>
                </div>
                <Transition
						as={Fragment}
						enter="transition ease-out duration-100"
						enterFrom="transform opacity-0 scale-95"
						enterTo="transform opacity-100 scale-100"
						leave="transition ease-in duration-75"
						leaveFrom="transform opacity-100 scale-100"
						leaveTo="transform opacity-0 scale-95"
					>
						<Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
							<Menu.Item>
								{({ active }) => (
									<div
										onClick={() => navigate('/profile')}className={classNames(active && 'bg-gray-100','active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200')}>
										<a href="/yourprofile">Your Profile</a>
									</div>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<div
										className={classNames(active && 'bg-gray-100','active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200')}>
										Sign out
									</div>
								)}
							</Menu.Item>
						</Menu.Items>
					</Transition>
            </Menu>  
      </div>
    </div>
  )
}

              