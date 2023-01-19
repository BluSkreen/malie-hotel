import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ROOMS } from "../utils/queries";

const Rooms = () => {
  const [choiceKing, setChoiceKing] = useState(true);
  const [choiceQueen, setChoiceQueen] = useState(true);
  const [deluxeKing, setDeluxeKing] = useState(true);
  const [deluxeQueen, setDeluxeQueen] = useState(true);
  const [executiveKing, setExecutiveKing] = useState(true);
  const [executiveQueen, setExecutiveQueen] = useState(true);

    // if local storage has values for the query 
        // then useQuery(the dates)
        // change useState for each type of Rooms
        // 
    const 

  return (
    <div className="bg-[rgba(207,181,59)] w-full overflow-hidden">
      <form className=" bg-black p-4 m-4 rounded-xl shadow-lg shadow-black">
        <div className="flex justify-around pt-4">
          <div className="inline-block relative w-64 ">
            <select className="block appearance-none  bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Number of Beds</option>
              <option>1 King</option>
              <option>2 Queens</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                classname="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          <div className="inline-block relative w-64">
            <select className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>Number of Beds</option>
              <option>1 King</option>
              <option>2 Queens</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                classname="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <button
            className="   bg-[rgba(207,181,59)] hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded max-w-[180px] mb-4"
            type="button"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mb-2 flex p-1 justify-around items-center flex-wrap ">
        {choiceKing ? (
          <div className="  justify-center  text-center m-10  bg-black p-4 rounded-xl shadow-lg shadow-black">
            <img
              src={
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              }
              alt="hotel room"
              className="w-[500px]  border-2 border-[rgba(207,181,59)] mb-6"
            />
            <h1 className="text-white text-[24px] mb-3 font-poppins font-bold  ">
              Choice Guest Room
            </h1>
            <h2 className="text-white text-[18px] mb-3 font-poppins   ">
              One King Bed
            </h2>
            <button
              className=" content-center bg-[rgba(207,181,59)] hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded max-w-[180px] mb-4"
              type="button"
            >
              Book from $375
            </button>
          </div>
        ) : (
          <></>
        )}
        {deluxeKing ? (
          <div className=" text-center m-10  bg-black p-4 rounded-xl shadow-lg shadow-black">
            <img
              src={
                "https://images.unsplash.com/photo-1612320743558-020669ff20e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              }
              alt="hotel room"
              className="w-[500px]  border-2 border-[rgba(207,181,59)] mb-6"
            />
            <h1 className="text-white text-[24px] mb-3 font-poppins font-bold  ">
              Deluxe Guest Room
            </h1>
            <h2 className="text-white text-[18px] mb-3 font-poppins   ">
              One King Bed
            </h2>
            <button
              className=" content-center bg-[rgba(207,181,59)] hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded max-w-[180px] mb-4"
              type="button"
            >
              Book from $590
            </button>
          </div>
        ) : (
          <></>
        )}
        {executiveKing ? (
          <div className=" text-center m-10  bg-black p-4 rounded-xl shadow-lg shadow-black">
            <img
              src={
                "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              }
              alt="hotel room"
              className="w-[500px]  border-2 border-[rgba(207,181,59)] mb-6"
            />
            <h1 className="text-white text-[24px] mb-3 font-poppins font-bold  ">
              Executive Guest Room
            </h1>
            <h2 className="text-white text-[18px] mb-3 font-poppins   ">
              One King Bed
            </h2>
            <button
              className=" content-center bg-[rgba(207,181,59)] hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded max-w-[180px] mb-4"
              type="button"
            >
              Book from $800
            </button>
          </div>
        ) : (
          <></>
        )}
        {choiceQueen ? (
          <div className=" text-center m-10  bg-black p-4 rounded-xl shadow-lg shadow-black">
            <img
              src={
                "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              }
              alt="hotel room"
              className="w-[500px]  border-2 border-[rgba(207,181,59)] mb-6"
            />
            <h1 className="text-white text-[24px] mb-3 font-poppins font-bold  ">
              Choice Guest Room
            </h1>
            <h2 className="text-white text-[18px] mb-3 font-poppins   ">
              Two Queen Beds
            </h2>
            <button
              className=" content-center bg-[rgba(207,181,59)] hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded max-w-[180px] mb-4"
              type="button"
            >
              Book from $375
            </button>
          </div>
        ) : (
          <></>
        )}
        {deluxeQueen ? (
          <div className=" text-center m-10  bg-black p-4 rounded-xl shadow-lg shadow-black">
            <img
              src={
                "https://images.unsplash.com/photo-1612320743558-020669ff20e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              }
              alt="hotel room"
              className="w-[500px]  border-2 border-[rgba(207,181,59)] mb-6"
            />
            <h1 className="text-white text-[24px] mb-3 font-poppins font-bold  ">
              Deluxe Guest Room
            </h1>
            <h2 className="text-white text-[18px] mb-3 font-poppins   ">
              Two Queen Beds
            </h2>
            <button
              className=" content-center bg-[rgba(207,181,59)] hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded max-w-[180px] mb-4"
              type="button"
            >
              Book from $590
            </button>
          </div>
        ) : (
          <></>
        )}
        {executiveQueen ? (
          <div className=" text-center m-10  bg-black p-4 rounded-xl shadow-lg shadow-black">
            <img
              src={
                "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              }
              alt="hotel room"
              className="w-[500px]  border-2 border-[rgba(207,181,59)] mb-6"
            />
            <h1 className="text-white text-[24px] mb-3 font-poppins font-bold  ">
              Executive Guest Room
            </h1>
            <h2 className="text-white text-[18px] mb-3 font-poppins   ">
              Two Queen Beds
            </h2>
            <button
              className=" content-center bg-[rgba(207,181,59)] hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded max-w-[180px] mb-4"
              type="button"
            >
              Book from $800
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Rooms;
