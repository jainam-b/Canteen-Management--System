import React from "react";
import DashboardStatsGrid from './DashboardStatsGrid'
import RecentOrders from './RecentOrders'
import BuyerProfilePieChart from './BuyerProfilePieChart'
import TransactionChart from './TransactionChart'
export default function Dashboard(){
    return(
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
    )
}



