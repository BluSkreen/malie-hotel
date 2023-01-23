import React, { PureComponent } from "react";
import ReactWeather, { useOpenWeather } from "react-open-weather";

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
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "e757412b6a4d63da3a66b29d23f46628",
    lat: "20.746143",
    lon: "-156.457644",
    lang: "en",
    unit: "imperial", // values are (metric, standard, imperial)
  });

  const customStyles = {
    fontFamily: "Poppins, sans-serif",
    gradientStart: "#00070a",
    gradientMid: "#666b6d",
    gradientEnd: "#000507",
    locationFontColor: "#FFF",
    todayTempFontColor: "#FFF",
    todayDateFontColor: "#B5DEF4",
    todayRangeFontColor: "#B5DEF4",
    todayDescFontColor: "#B5DEF4",
    todayInfoFontColor: "#B5DEF4",
    todayIconColor: "#d2b947",
    forecastBackgroundColor: "#faf7eb",
    forecastSeparatorColor: "#DDD",
    forecastDateColor: "#777",
    forecastDescColor: "#777",
    forecastRangeColor: "#777",
    forecastIconColor: "#d2b947",
  };

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
      name: "Monday",
      Target: 4000,
      Actual: 2400,
    },
    {
      name: "Tuesday",
      Target: 3000,
      Actual: 1398,
    },
    {
      name: "Wednesday",
      Target: 2000,
      Actual: 9800,
    },
    {
      name: "Thursday",
      Target: 2780,
      Actual: 3908,
    },
    {
      name: "Friday",
      Target: 1890,
      Actual: 4800,
    },
    {
      name: "Saturday",
      Target: 2390,
      Actual: 3800,
    },
    {
      name: "Sunday",
      Target: 3490,
      Actual: 4300,
    },
  ];
  return (
    <div className="py-10 bg-black text-center">
      <div>
        <h1 className="text-[#d2b947] font-economica font-bold text-[50px] mb-10 ">
          Admin Dashboard
        </h1>
      </div>
      {/* <div>
                <input
                    className="border-[rgba(207,181,59)]"
                    type="date"
                    id="start"
                    name="trip-start"
                    onChange={onStartDateChange}
                    value={startDate}
                    // min="2018-01-01"
                    // max="2018-12-31"
                />
            </div> */}
      <div className="flex justify-around flex-wrap">
        <div className="max-w-[900px]">
          <h1 className="text-[30px] font-poppins  text-[#faf7eb] ">
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
            <XAxis dataKey="name" stroke="#faf7eb" />
            <YAxis stroke="#faf7eb" />
            <Tooltip />
            <Legend />
            <Bar dataKey="Available" fill="#d2b947" />
            <Bar dataKey="Booked" fill="#B5DEF4" />
          </BarChart>
        </div>
        <div>
          <h1 className="text-[30px] font-poppins  text-[#faf7eb]">
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
            <XAxis dataKey="name" stroke="#faf7eb" />
            <YAxis stroke="#faf7eb" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Target"
              stroke="#d2b947"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="Actual" stroke="#B5DEF4" />
          </LineChart>
        </div>
        <div className="w-[800px] h-[500px] pt-10">
          <ReactWeather
            theme={customStyles}
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Maui, HI"
            unitsLabels={{ temperature: "F", windSpeed: "MPH" }}
            showForecast
          />
        </div>
      </div>
    </div>
  );
};

export default Admin;
