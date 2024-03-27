import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiChartBar,HiOutlineLogout
} from 'react-icons/hi'
import { FaUsers } from "react-icons/fa";

export const DASHBOARD_SIDEBAR_LINKS= [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Menu',
		path: '/Products',
		icon: <HiOutlineCube />
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/orders',
		icon: <HiOutlineShoppingCart />
	},{
		key: 'members',
		label: 'Members',
		path: '/members',
		icon: <FaUsers />
},
	{
		key: 'analytics',
		label: 'Analytics',
		path: '/orders',
		icon: <HiChartBar />
},
	{key: 'logout',
		label: 'Logout',
		path: '/',
		icon: <HiOutlineLogout />
}]


