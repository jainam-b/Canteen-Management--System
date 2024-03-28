import React from "react";
import DashboardStatsGrid from './DashboardStatsGrid'
import RecentOrders from './RecentOrders'
import BuyerProfilePieChart from './BuyerProfilePieChart'
import TransactionChart from './TransactionChart'
import { Outlet } from "react-router-dom"
import Sidebar from "../Components/shared/Sidebar"
import Header from "../Components/shared/Header"

export default function Dashboard(){
    return(
		<div className="flex flex-row bg-neutral-100 h-screen overflow-hidden">
		<Sidebar />
		<div className="flex-1 overflow-y-auto">
		  <Header />
		  <div className="p-1">
			  
			<Outlet />
		  
		</div>
	  
        <div className="flex flex-col gap-4">
			<DashboardStatsGrid />
            <div className="flex flex-row gap-2 w-full">
				<TransactionChart />
				<BuyerProfilePieChart />    
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentOrders />
			</div>
			
		</div>
		</div>
		</div>
    )
}



