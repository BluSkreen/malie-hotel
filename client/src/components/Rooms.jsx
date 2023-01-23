import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDateContext } from "../utils/DateContext";
import { useLazyQuery, useQuery, useMutation } from "@apollo/client";
import { QUERY_ROOMS, QUERY_CHECKOUT } from "../utils/queries";
import { loadStripe } from "@stripe/stripe-js";
import { words } from "../assets";

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
    const [deluxKing, setDeluxKing] = useState(true);
    const [deluxQueen, setDeluxQueen] = useState(true);
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
        const startDateControl = document
            .getElementById("start")
            .value.toString();
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
        setDeluxKing(dataRooms?.filterRooms.deluxeKing);
        setDeluxQueen(dataRooms?.filterRooms.deluxeQueen);
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

    console.log(stripePromise);
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
    })
      console.log(targetRoom);

        const startDateControl = document
            .getElementById("start")
            .value.toString();
        const endDateControl = document.getElementById("end").value.toString();
      var startDateConversion = new Date(startDateControl);
    var endDateConversion = new Date(endDateControl);
    if (
      startDateConversion > endDateConversion ||
      startDateConversion < Date.now()
    ) {
      console.log("bad");
    } else {
      console.log("good");
    }

      // AUTHENTICATE USER BEFORE SENDING TO CHECKOUT -----------------------TODO
    

    console.log(startDateArr);
    console.log(endDateArr);
    console.log(targetRoom[0]);
    console.log("dataRooms");
    console.log(dataRooms.filterRooms.availableRooms[e.target.value]);
    getCheckout({
        variables: { roomNumber: targetRoom[0].roomNumber, startDate: startDateArr, endDate: endDateArr, description: targetRoom[0].desc, cost: targetRoom[0].price },
    });
    

    console.log({ checkoutData });
    console.log("!!!!!!!!!!!!");
    console.log(checkoutData);
    console.log(getCheckout);
  }
    return (
        <div className="bg-[#faf7eb] w-full overflow-hidden">
            <form
                className=" bg-black  m-4 border-4 border-[#d2b947] flex flex-wrap justify-between
                "
                onSubmit={handleFormSubmit}
            >
                <div className="text-white font-economica font-bold pl-8 pt-4">
                    <h3 className="text-[40px] text-[#faf7eb]">
                        Select a Room
                    </h3>
                    <p className="text-[24px] text-[#d2b947] pb-2">
                        Your stay at The Malie Hotel includes:
                    </p>
                    <ul className="flex pb-4 text-[#faf7eb]">
                        <li className="pr-4">✓ Free WiFi</li>
                        <li className="pr-4">✓ Non-Smoking Rooms</li>

                        <li className="pr-4">✓ Pet-Friendly Rooms</li>
                    </ul>
                </div>
                <div className="flex pt-12 pl-8">
                    <div className=" w-300px h-20px mr-4 flex pb-4">
                        <div>
                            <h4 className="text-[#d2b947] font-economica text-[18px]">
                                Check in:
                            </h4>
                            <input
                                className="h-[35px] border-[rgba(207,181,59)] bg-[#faf7eb]"
                                type="date"
                                id="start"
                                name="trip-start"
                                onChange={onStartDateChange}
                                value={startDateStr}
                                // min="2018-01-01"
                                // max="2018-12-31"
                            />
                        </div>
                        <div>
                            <h4 className="text-[#d2b947] font-economica text-[18px]">
                                Check Out:
                            </h4>
                            <input
                                className="h-[35px] border-[rgba(207,181,59)] bg-[#faf7eb]"
                                type="date"
                                id="end"
                                name="trip-end"
                                onChange={onEndDateChange}
                                value={endDateStr}
                                // min="2018-01-01"
                                // max="2018-12-31"
                            />
                        </div>
                        {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div> */}
                        <div>
                            <h4 className="text-black text-[18px]">"</h4>
                            <button
                                className="bg-[rgba(207,181,59)]  text-black font-bold px-4 rounded max-w-[180px] h-[35px] ml-1 hover:bg-[#dcc970] focus:outline-none focus:ring-2 focus:ring-[rgba(207,181,59)] focus:ring-offset-2"
                                type="submit"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div className="text-white font-economica pr-32 pl-8">
                    <h3 className="pl-10 text-[24px] pt-2 text-[#d2b947]">
                        Ask us about
                    </h3>
                    <img src={words} alt="logo" className="w-[200px]" />
                    <h3 className="pl-7 text-[24px] text-[#d2b947]">
                        Rewards Program
                    </h3>
                </div>
            </form>

            <div className="mb-2 flex p-1 justify-around items-center flex-wrap bg-[url('https://images.unsplash.com/photo-1641598471501-61a78df0edec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJsYWNrJTIwZ29sZCUyMHBhdHRlcm58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60')] border-t-8 border-[#d2b947]">
                <div className="  justify-center  text-center m-10  bg-black p-4 rounded shadow-lg shadow-black border-solid border-2 border-[#665919]">
                    <img
                        src={
                            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        }
                        alt="hotel room"
                        className="w-[500px]  border-2 border-[rgba(207,181,59)] mb-6"
                    />
                    <h1 className="text-[#d2b947] text-[32px] mb-2 font-economica font-bold  ">
                        Choice Guest Room
                    </h1>
                    <h2 className="text-[#faf7eb] text-[24px] mb-4 font-economica   ">
                        One King Bed
                    </h2>
                    <button
                        className=" content-center bg-[rgba(207,181,59)] hover:bg-[#dcc970] focus:outline-none focus:ring-2 focus:ring-[rgba(207,181,59)] focus:ring-offset-2 text-black font-bold py-2 px-4 rounded max-w-[180px] mb-4"
                        type="button"
                        value={"choiceKing"}
                        onClick={choiceKing ? submitCheckout : undefined}
                        disabled={!choiceKing}
                    >
                        {choiceKing ? "Book from $375" : "Unavailable"}
                    </button>
                </div>
                <div className=" text-center m-10  bg-black p-4 rounded shadow-lg shadow-black border-solid border-2 border-[#665919]">
                    <img
                        src={
                            "https://images.unsplash.com/photo-1612320743558-020669ff20e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                        }
                        alt="hotel room"
                        className="w-[500px]  border-2 border-[rgba(207,181,59)] mb-6"
                    />
                    <h1 className="text-[#d2b947] text-[32px] mb-2 font-economica font-bold  ">
                        Deluxe Guest Room
                    </h1>
                    <h2 className="text-[#faf7eb] text-[24px] mb-4 font-economica   ">
                        One King Bed
                    </h2>
                    <button
                        className=" content-center bg-[rgba(207,181,59)] hover:bg-[#dcc970] focus:outline-none focus:ring-2 focus:ring-[rgba(207,181,59)] focus:ring-offset-2 text-black font-bold py-2 px-4 rounded max-w-[180px] mb-4"
                        type="button"
                        value={"deluxeKing"}
                        onClick={deluxKing ? submitCheckout : undefined}
                        disabled={!deluxKing}
                    >
                        {deluxKing ? "Book from $590" : "Unavailable"}
                    </button>
                </div>
                <div className=" text-center m-10  bg-black p-4 rounded shadow-lg shadow-black border-solid border-2 border-[#665919]">
                    <img
                        src={
                            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                        }
                        alt="hotel room"
                        className="w-[500px]  border-2 border-[rgba(207,181,59)] mb-6"
                    />
                    <h1 className="text-[#d2b947] text-[32px] mb-2 font-economica font-bold  ">
                        Executive Guest Room
                    </h1>
                    <h2 className="text-[#faf7eb] text-[24px] mb-4 font-economica   ">
                        One King Bed
                    </h2>
                    <button
                        className=" content-center bg-[rgba(207,181,59)] hover:bg-[#dcc970] focus:outline-none focus:ring-2 focus:ring-[rgba(207,181,59)] focus:ring-offset-2 text-black font-bold py-2 px-4 rounded max-w-[180px] mb-4"
                        type="button"
                        value={"executiveKing"}
                        onClick={executiveKing ? submitCheckout : undefined}
                        disabled={!executiveKing}
                    >
                        {executiveKing ? "Book from $800" : "Unavailable"}
                    </button>
                </div>
                <div className=" text-center m-10  bg-black p-4 rounded shadow-lg shadow-black border-solid border-2 border-[#665919]">
                    <img
                        src={
                            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                        }
                        alt="hotel room"
                        className="w-[500px]  border-2 border-[rgba(207,181,59)] mb-6"
                    />
                    <h1 className="text-[#d2b947] text-[32px] mb-2 font-economica font-bold  ">
                        Choice Guest Room
                    </h1>
                    <h2 className="text-[#faf7eb] text-[24px] mb-4 font-economica   ">
                        Two Queen Beds
                    </h2>
                    <button
                        className=" content-center bg-[rgba(207,181,59)] hover:bg-[#dcc970] focus:outline-none focus:ring-2 focus:ring-[rgba(207,181,59)] focus:ring-offset-2 text-black font-bold py-2 px-4 rounded max-w-[180px] mb-4"
                        type="button"
                        value={"choiceQueen"}
                        onClick={choiceQueen ? submitCheckout : undefined}
                        disabled={!choiceQueen}
                    >
                        {choiceQueen ? "Book from $375" : "Unavailable"}
                    </button>
                </div>
                <div className=" text-center m-10  bg-black p-4 rounded shadow-lg shadow-black border-solid border-2 border-[#665919]">
                    <img
                        src={
                            "https://images.unsplash.com/photo-1612320743558-020669ff20e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                        }
                        alt="hotel room"
                        className="w-[500px]  border-2 border-[rgba(207,181,59)] mb-6"
                    />
                    <h1 className="text-[#d2b947] text-[32px] mb-2 font-economica font-bold  ">
                        Deluxe Guest Room
                    </h1>
                    <h2 className="text-[#faf7eb] text-[24px] mb-4 font-economica   ">
                        Two Queen Beds
                    </h2>
                    <button
                        className=" content-center bg-[rgba(207,181,59)] hover:bg-[#dcc970] focus:outline-none focus:ring-2 focus:ring-[rgba(207,181,59)] focus:ring-offset-2 text-black font-bold py-2 px-4 rounded max-w-[180px] mb-4"
                        type="button"
                        value={"deluxeQueen"}
                        onClick={deluxQueen ? submitCheckout : undefined}
                        disabled={!deluxQueen}
                    >
                        {deluxQueen ? "Book from $590" : "Unavailable"}
                    </button>
                </div>
                <div className=" text-center m-10  bg-black p-4 rounded shadow-lg shadow-black border-solid border-2 border-[#665919]">
                    <img
                        src={
                            "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                        }
                        alt="hotel room"
                        className="w-[500px]  border-2 border-[rgba(207,181,59)] mb-6"
                    />
                    <h1 className="text-[#d2b947] text-[32px] mb-2 font-economica font-bold  ">
                        Executive Guest Room
                    </h1>
                    <h2 className="text-[#faf7eb] text-[24px] mb-4 font-economica   ">
                        Two Queen Beds
                    </h2>
                    <button
                        className=" content-center bg-[rgba(207,181,59)] hover:bg-[#dcc970] focus:outline-none focus:ring-2 focus:ring-[rgba(207,181,59)] focus:ring-offset-2 text-black font-bold py-2 px-4 rounded max-w-[180px] mb-4"
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
