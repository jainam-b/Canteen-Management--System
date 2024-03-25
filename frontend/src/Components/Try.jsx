import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import axios from 'axios';

const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];

export default function BuyerProfilePieChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/order/categories');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
        const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <div className="w-[25rem] h-[20rem] bg-white p-2 rounded-sm border border-gray-200 flex flex-col">
            <strong className="text-gray-700 font-medium">Customer Orders by Category</strong>
            <div className="mt-1 w-full flex-1 text-xs">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={300}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="45%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={95}
                            fill="#8884d8"
                            dataKey="totalOrders" // Assuming your API returns data with a "totalOrders" property for each category
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
