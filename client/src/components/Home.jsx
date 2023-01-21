import { lux } from "../assets";
import React, { useState } from "react";
import { useDateContext } from "../utils/DateContext";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { checkDEV } from "@apollo/client/utilities/globals";

const Home = () => {
  const navigate = useNavigate();
  const {startDateStr,
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

  function checkDates() {
    if (startDateStr !== "" && endDateStr !== "") {
      //   <Navigate to="/rooms" replace={true} />;
      navigate("/rooms");
    } else {
      alert("please check dates input");
      return false;
    }
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    const startDateControl = document.getElementById("start").value
    const endDateControl = document.getElementById("end").value

      setStartDateStr(startDateControl);
      setEndDateStr(endDateControl);
        setStartDateArr([
            parseInt(startDateControl.split("-")[0]),
            parseInt(startDateControl.split("-")[1]),
            parseInt(startDateControl.split("-")[2])
        ])
        setEndDateArr([
            parseInt(endDateControl.split("-")[0]),
            parseInt(endDateControl.split("-")[1]),
            parseInt(endDateControl.split("-")[2])
        ])
      checkDates();
      // console.log(startDateArr);
      // console.log(endDateArr);

  }
  return (
    <div>
      <section>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>

        <video
          className="relative z-[-1] w-auto min-w-full max-w-none"
          muted
          autoPlay="autoPlay"
          loop
        >
          <source src={lux} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="flex justify-center bg-black w-full pt-4">
        <form className="w-full max-w-sm mb-10" onSubmit={handleFormSubmit}>
          <h1 className="text-white">MAKE A RESERVATION</h1>
          <div className="flex items-center border-b border-yellow-500 py-2">
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

            <button
              className="flex-shrink-0 bg-[#d2b947] hover:bg-[#dcc970] border-[rgba(207,181,59)]  text-sm border-4 text-black py-1 px-2 rounded"
              type="submit"
            >
              Check Availability
            </button>
          </div>
        </form>
      </section>

      <section className="p-4 mt-10">
        <h1 className="text-[48px] font-amita font-bold pl-10 drop-shadow-[2px_2px_.5px_#d2b947]">
          Come Stay with Us
        </h1>
        <div className="flex flex-wrap justify-around mt-6 mb-6">
          <p className="max-w-[680px] text-[18px] mt-[70px] font-poppins">
          Enjoy a desirable location next to Ala Moana Center, the world's largest open-air shopping mall. Stay just steps from Hawaii's most prestigious shopping venue showcasing fashion brands, premier department stores, and specialty retailers that include Louis Vuitton, Nordstrom and Williams-Sonoma. TripAdvisor reviewers rate the Melie among the top 20 hotels in Hawaii for travelers. Guests have access to complimentary Wi-Fi, a 24/7 business center, and extensive meeting and banquet facilities. The hotel's deluxe accommodations and superb location, just a 5-minute walk from the Hawaii Convention Center, are preferred by conference attendees. The Malie is 1.5 miles from Waikiki Beach, 2.5 miles from downtown Honolulu's financial center and government offices, and a quick 8 miles from Honolulu International Airport.
          </p>
          <img
            src="https://images.unsplash.com/reserve/8T8J12VQxyqCiQFGa2ct_bahamas-atlantis.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyb3BpY2FsJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="hotel"
            className="border-solid border-[rgba(207,181,59)] border-4 rounded max-w-[700px] drop-shadow-[4px_4px_10px_rgba(0,0,0)]"
          />
        </div>
      </section>

      <section className="bg-[rgba(207,181,59)] text-white mt-10 p-4 pb-10">
        <h1 className="text-[48px] font-amita font-bold mt-10 pl-10 drop-shadow-[2px_2px_.5px_black]">
          About Our Rooms
        </h1>
        <div className="flex flex-wrap justify-around mt-10 rounded drop-shadow-[4px_4px_10px_rgba(0,0,0)] font-poppins">
          <div>
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="hotel room"
              className="max-w-[450px] border-solid border-4 border-white mb-4"
            />
            <h2 className="text-[24px] text-center underline py-4 font-bold">
              Choice Guest Room
            </h2>
            <p className="max-w-[450px]">
            Suitable for short or longer stays, the Choice Guest Rooms are perfect for couples wanting a comfortable base to explore Hawaii. All rooms come with the choice of a king bed, or two queen beds. All rooms also include air conditioning, coffee maker, daily housekeeping, microwave oven and LCD TV with cable channels. And just in case you need to check in with the office or family, there's also complimentary WiFi access so you can stay connected.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1612320743558-020669ff20e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="hotel room"
              className="max-w-[450px] border-solid border-4 border-white mb-4"
            />
            <h2 className="text-[24px] text-center underline py-4 font-bold">
              Deluxe Guest Room
            </h2>
            <p className="max-w-[450px]">
            Open spacious contemporary studio-style suite offering either a King bed or two Queen beds, with a kitchenette, dining table and a lanai (balcony) that provides  sweeping views of either the Yacht Harbor and Pacific Ocean or colorful city, majestic mountains and Pacific Ocean. All rooms also include air conditioning, coffee maker, daily housekeeping, microwave oven and LCD TV with cable channels. And just in case you need to check in with the office or family, there's also complimentary WiFi access so you can stay connected.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="hotel room"
              className="max-w-[450px] border-solid border-4 border-white mb-4"
            />
            <h2 className="text-[24px] text-center underline py-4 font-bold">
              Executive Guest Room
            </h2>
            <p className="max-w-[450px] pb-10">
            These rooms are highly sought after, offering sweeping views of the wide blue Pacific, a balcony that offers the perfect vantage point to drink them all in, and spacious surrounds that can easily accommodate up to four people, complete with a luxurious king bed or two queen beds. All rooms feature a bar fridge and tea/coffee making facilities and complimentary in-room entertainment options provided by either WiFi or cable television.
            </p>
          </div>
        </div>
      </section>

      <section className=" bg-grey-900 text-[30px]">
        <h1 className=" text-[48px] p-4 pt-10 text-[rgba(207,181,59)] font-amita font-bold pl-10 drop-shadow-[2px_2px_.5px_white]">
          Activities & Events
        </h1>
        {/* 
        <div date-rangepicker className="flex items-center" id="dateRangePickerId">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  id="start"
                  name="start"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date start"
                />
              </div>
              <span className="mx-4 text-gray-500">to</span>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  id="end"
                  name="end"
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date end"
                />
              </div>
            </div> */}
        {/* <div className="flex">
          <div className="   bg-grey-900 text-white p-8 border-solid border-4 border-[rgba(207,181,59)]">
            <img
              src="https://images.unsplash.com/photo-1662515049537-5c4442e107d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGJlYWNoJTIwZ29sZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="golf"
              className=" max-w-[500px]  border-solid border-[rgba(207,181,59)] border-4 rounded"
            />
            <p className="pt-6 font-amita">18 Hole Professional Course</p>
          </div>
          <div className="   bg-grey-900 text-white p-8 border-solid border-4 border-[rgba(207,181,59)]">
            <img
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              className=" max-w-[500px]  border-solid border-[rgba(207,181,59)] border-4 rounded"
            />
            <p className="pt-6 font-amita">World Class Spa Experience</p>
          </div>
          <div className="   bg-grey-900 text-white p-8 border-solid border-4 border-[rgba(207,181,59)]">
            <img
              src="https://images.unsplash.com/photo-1638693940422-b676efe57668?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRyb3BpY2FsJTIwd2VkZGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              className=" max-w-[500px]  border-solid border-[rgba(207,181,59)] border-4 rounded"
            />
            <p className="pt-6 font-amita">
              Breathtaking Wedding Accomodations
            </p>
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default Home;
