import React, { PureComponent } from "react";
import {
    LineChart,
    Line,
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const Admin = () => {
    const roomData = [
        {
            name: "Choice King",
            Available: 20,
            Booked: 8,
        },
        {
            name: "Choice Queen",
            Available: 20,
            Booked: 12,
        },
        {
            name: "Deluxe King",
            Available: 20,
            Booked: 3,
        },
        {
            name: "Deluxe Queen",
            Available: 20,
            Booked: 10,
        },
        {
            name: "Executive King",
            Available: 20,
            Booked: 4,
        },
        {
            name: "Executive Queen",
            Available: 20,
            Booked: 1,
        },
    ];

    const salesData = [
        {
            name: "Page A",
            Target: 4000,
            Actual: 2400,
        },
        {
            name: "Page B",
            Target: 3000,
            Actual: 1398,
        },
        {
            name: "Page C",
            Target: 2000,
            Actual: 9800,
        },
        {
            name: "Page D",
            Target: 2780,
            Actual: 3908,
        },
        {
            name: "Page E",
            Target: 1890,
            Actual: 4800,
        },
        {
            name: "Page F",
            Target: 2390,
            Actual: 3800,
        },
        {
            name: "Page G",
            Target: 3490,
            Actual: 4300,
        },
    ];
    return (
        <div className="py-10 bg-black text-center">
            <div>
                <h1 className="text-[#d2b947] font-poppins font-bold text-[40px] mb-10">
                    Admin Dashboard
                </h1>
            </div>
            <div className="flex justify-around">
                <div className="max-w-[900px]">
                    <h1 className="text-[30px] font-poppins  text-[#f0e8c2] ">
                        Room Occupancy
                    </h1>
                    <BarChart
                        width={850}
                        height={400}
                        data={roomData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" stroke="#f0e8c2" />
                        <YAxis stroke="#f0e8c2" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Available" fill="#665919" />
                        <Bar dataKey="Booked" fill="#e6d899" />
                    </BarChart>
                </div>
                <div>
                    <h1 className="text-[30px] font-poppins  text-[#f0e8c2]">
                        Daily Sales
                    </h1>
                    <LineChart
                        width={800}
                        height={400}
                        data={salesData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="Target"
                            stroke="#8884d8"
                            activeDot={{ r: 8 }}
                        />
                        <Line
                            type="monotone"
                            dataKey="Actual"
                            stroke="#82ca9d"
                        />
                    </LineChart>
                </div>
            </div>
        </div>
    );
};

export default Admin;
