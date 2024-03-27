import React,{useState,useEffect} from 'react'
import { IoBagHandle, IoPeople, IoCart } from 'react-icons/io5'
import axios from "axios";


export default function DashboardStatsGrid() {

    const [orderCount, setOrderCount] = useState(null);
    const [UsersCount, setUsersCount] = useState(null);
    const [totalSales, setTotalSales] = useState(null);

    useEffect(() => {
      fetchOrderCount();
      fetchTotalSales();
      fetchUsersCount();
    }, []);
  
    const fetchOrderCount = async () => {
      try {
        const response = await axios.get("http://localhost:3001/order/count"); // Assuming your backend API is served at /api
        setOrderCount(response.data.count);
      } catch (error) {
        console.error("Error fetching order count:", error);
      }
    };
    const fetchUsersCount = async () => {
      try {
        const response = await axios.get("http://localhost:3001/user/count"); // Assuming your backend API is served at /api
        setUsersCount(response.data.count);
      } catch (error) {
        console.error("Error fetching order count:", error);
      }
    };
    const fetchTotalSales = async () => {
      try {
        const response = await axios.get("http://localhost:3001/order/total-price"); // Assuming your backend API is served at /api
        setTotalSales(response.data.totalPrice);
        console.log(response.data.totalPrice);
      } catch (error) {
        console.error("Error fetching order count:", error);
      }
    };
  return (
    <div className="flex gap-4">
    <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-500">
            <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Sales</span>
            <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">{totalSales}</strong>
                {/* <span className="text-sm text-green-500 pl-2">+343</span> */}
            </div>
        </div>
    </BoxWrapper>
    <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
            <IoCart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Today's Orders</span>
            <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold"> {orderCount}</strong>
            </div>
        </div>
    </BoxWrapper>
    <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
            <IoPeople className="text-2xl text-white" />
        </div>
        <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Customers</span>
            <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">{UsersCount}</strong>
                {/* <span className="text-sm text-red-500 pl-2">-30</span> */}
            </div>
        </div>
    </BoxWrapper>
    <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
            <IoCart className="text-2xl text-white" />
        </div>
        <div className="pl-4">
            <span className="text-sm text-gray-500 font-light">Total Orders</span>
            <div className="flex items-center">
                <strong className="text-xl text-gray-700 font-semibold">{orderCount}</strong>
                <span className="text-sm text-green-500 pl-2">+43</span>
            </div>
        </div>
    </BoxWrapper>
</div>
</div>
)
}

function BoxWrapper({ children }) {
    return <div className="bg-white rounded-sm p-4 flex-auto border border-gray-200 flex items-center">{children}</div>;
  }
  



