import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDateContext } from "../utils/DateContext";
import { useLazyQuery, useQuery, useMutation } from "@apollo/client";
import { QUERY_ROOMS, QUERY_CHECKOUT } from "../utils/queries";
import { loadStripe } from "@stripe/stripe-js";

const Rooms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  // make useState true on load
  // allow checkout
  const navigate = useNavigate();
  const {
    startDateStr,
    setStartDateStr,
    endDateStr,
    setEndDateStr,
    startDateArr,
    setStartDateArr,
    endDateArr,
    setEndDateArr,
    onStartDateChange,
    onEndDateChange,
    // handleFormSubmit,
  } = useDateContext();

  const [choiceKing, setChoiceKing] = useState(true);
  const [choiceQueen, setChoiceQueen] = useState(true);
  const [deluxeKing, setDeluxeKing] = useState(true);
  const [deluxeQueen, setDeluxeQueen] = useState(true);
  const [executiveKing, setExecutiveKing] = useState(true);
  const [executiveQueen, setExecutiveQueen] = useState(true);

  const {
    loading: loadingRooms,
    error: errorRooms,
    data: dataRooms,
    refetch,
  } = useQuery(QUERY_ROOMS, {
    variables: { startDate: startDateArr, endDate: endDateArr },
  });

  // console.log(data);

  function handleFormSubmit(event) {
    event.preventDefault();
    const startDateControl = document.getElementById("start").value.toString();
    const endDateControl = document.getElementById("end").value.toString();

    setStartDateStr(startDateControl);
    setStartDateArr([
      parseInt(startDateControl.split("-")[0]),
      parseInt(startDateControl.split("-")[1]),
      parseInt(startDateControl.split("-")[2]),
    ]);
    setEndDateStr(endDateControl);
    setEndDateArr([
      parseInt(endDateControl.split("-")[0]),
      parseInt(endDateControl.split("-")[1]),
      parseInt(endDateControl.split("-")[2]),
    ]);
    // console.log(startDateArr);
    // console.log(endDateArr);

    refetch({ startDate: startDateArr, endDate: endDateArr });
    console.log(dataRooms);
  }

  useEffect(() => {
    setChoiceKing(dataRooms?.filterRooms.choiceKing);
    setChoiceQueen(dataRooms?.filterRooms.choiceQueen);
    setDeluxeKing(dataRooms?.filterRooms.deluxeKing);
    setDeluxeQueen(dataRooms?.filterRooms.deluxeQueen);
    setExecutiveKing(dataRooms?.filterRooms.executiveKing);
    setExecutiveQueen(dataRooms?.filterRooms.executiveQueen);
    // console.log(data)
  }, [dataRooms]);
  // if local storage has values for the query
  // then useQuery(the dates)
  // change useState for each type of Rooms
  //
  // const

  const room = 203;
  const description = "delux";
  const cost = 3000;
  const stripePromise = loadStripe(
    "pk_test_51MS6bZCzq6l4n83nCqy7oVDR7LifHKUuEYQRG4Ja0gUiIU0KthzJeD7nr090nmAgHs9hkhAK0Dkks06gI4TC00rs00nuv84CYX"
  );
  // console.log(stripePromise);
  const [getCheckout, { data: checkoutData }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    console.log("----------------");
    console.log(checkoutData);
    console.log("----------------");
    if (checkoutData) {
      console.log("if data");
      console.log(checkoutData);
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: checkoutData.checkout.session });
      });
    }
  }, [checkoutData]);
  // console.log("data");
  function submitCheckout(e) {
    // const roomId = [];
    console.log("----------------");
    console.log(checkoutData);
    console.log("----------------");
    console.log("ss");
    // e.preventDefault();
    console.log(e);
    e.preventDefault();
    console.log(e.target.value);
    // if variable are good then get checkout
    console.log("dddd");
    const targetRoom = dataRooms.filterRooms.availableRooms.filter((item) => {
      return item.title == e.target.value;
    });
    console.log(targetRoom);

    // AUTHENTICATE USER BEFORE SENDING TO CHECKOUT -----------------------TODO
    // console.log(dataRooms.filterRooms.availableRooms[e.target.value]);
    //getCheckout({
    //variables: { room: targetRoom[0].roomNumber, cost: targetRoom[0].cost, description: target[0].desc },
    //});
    console.log({ checkoutData });
    console.log("!!!!!!!!!!!!");
    console.log(checkoutData);
    console.log(getCheckout);
  }
  return (
    <div className="bg-white w-full overflow-hidden">
      <form
        className=" bg-black p-4 m-4 rounded-xl shadow-lg shadow-black"
        onSubmit={handleFormSubmit}
      >
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
          <div className="inline-block relative w-64 mr-4">
            <input
              type="date"
              id="start"
              name="trip-start"
              onChange={onStartDateChange}
              value={startDateStr}
              // min="2018-01-01"
              // max="2018-12-31"
            />

            <input
              type="date"
              id="end"
              name="trip-end"
              onChange={onEndDateChange}
              value={endDateStr}
              // min="2018-01-01"
              // max="2018-12-31"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
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
            type="submit"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mb-2 flex p-1 justify-around items-center flex-wrap ">
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
            value={"choiceKing"}
            onClick={choiceKing ? submitCheckout : undefined}
            disabled={!choiceKing}
          >
            {choiceKing ? "Book from $375" : "Unavailable"}
          </button>
        </div>
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
            value={"deluxeKing"}
            onClick={deluxeKing ? submitCheckout : undefined}
            disabled={!deluxeKing}
          >
            {deluxeKing ? "Book from $590" : "Unavailable"}
          </button>
        </div>
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
            value={"executiveKing"}
            onClick={executiveKing ? submitCheckout : undefined}
            disabled={!executiveKing}
          >
            {executiveKing ? "Book from $800" : "Unavailable"}
          </button>
        </div>
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
            value={"choiceQueen"}
            onClick={choiceQueen ? submitCheckout : undefined}
            disabled={!choiceQueen}
          >
            {choiceQueen ? "Book from $375" : "Unavailable"}
          </button>
        </div>
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
            value={"deluxeQueen"}
            onClick={deluxeQueen ? submitCheckout : undefined}
            disabled={!deluxeQueen}
          >
            {deluxeQueen ? "Book from $590" : "Unavailable"}
          </button>
        </div>
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
            value={"executiveQueen"}
            onClick={executiveQueen ? submitCheckout : undefined}
            disabled={!executiveQueen}
          >
            {executiveQueen ? "Book from $800" : "Unavailable"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
