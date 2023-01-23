import { lux } from "../assets";
import React, { useState } from "react";
// import DateRangePicker from "flowbite-datepicker/DateRangePicker";
import { useMutation, useQuery } from "@apollo/client";
import {} from "../utils/mutations";

const Home = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const dateBtn = document.getElementById("dateBtn");
  const onStartDateChange = (e) => {
    const startDateInput = e.target.value;
    // console.log(passwordInput);
    setStartDate(startDateInput);
  };

  const onEndDateChange = (e) => {
    const endDateInput = e.target.value;
    // console.log(userNameInput);
    setEndDate(endDateInput);
  };
  function handleFormSubmit(event) {
    event.preventDefault();
    const startDateControl = document.getElementById("start").value.toString();
    const endDateControl = document.getElementById("end").value.toString();
    console.log(startDateControl);
    const startD = startDateControl.replace(
      /(\d\d\d\d)-(\d\d)-(\d\d)/,
      "[$1,$2,$3]"
    );
    const endD = endDateControl.replace(
      /(\d\d\d\d)-(\d\d)-(\d\d)/,
      "[$1,$2,$3]"
    );

    // console.log(startD);
    // console.log(typeof startD);
    var startD2 = JSON.stringify(startD);
    var endD2 = JSON.stringify(endD);
    // var startType = JSON.parse(startD2);
    // console.log(typeof startType);
    console.log(startD2);
    console.log(endD2);
  }

  // console.log(startDateControl, +" : " + endDateControl);

  // const dateRangePickerEl = document.getElementById('dateRangePickerId');
  // new DateRangePicker(dateRangePickerEl, {
  //   autohide: true,
  // });

  // const startEl = document.getElementById('start')

  // const endEl = document.getElementById('end')

  // startEl.addEventListener("changeDate", (e) => {
  //   console.log("start", e.detail.date)
  // })

  // endEl.addEventListener("changeDate", (e) => {
  //   console.log("end", e.detail.date)
  // })

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
                value={startDate}
                // min="2018-01-01"
                // max="2018-12-31"
              />

              <input
                type="date"
                id="end"
                name="trip-end"
                onchange={onEndDateChange}
                value={endDate}
                // min="2018-01-01"
                // max="2018-12-31"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>

            <button
              className="flex-shrink-0 bg-gray-400 hover:bg-teal-700 border-[rgba(207,181,59)] hover:border-teal-700 text-sm border-4 text-black py-1 px-2 rounded"
              type="submit"
            >
              Check Availability
            </button>
          </div>
        </form>
      </section>
      {/* come stay with us */}
      <section className="p-4 mt-10">
        <h1 className="text-[48px] font-amita font-bold pl-10">
          Come Stay with Us
        </h1>
        <div className="flex flex-wrap justify-around mt-6 mb-6">
          <p className="max-w-[680px] text-[18px] mt-[70px]">
            Inspired by both the beauty of the landscape and the energy of the
            city, The Ritz-Carlton, Denver welcomes guests with its own
            interpretation of modern luxury. Here, guests can retreat to some of
            Denver’s most spacious accommodations while enjoying views of the
            skyline or Rocky Mountains. Other amenities are equally rooted in
            the region, including luxury spa rituals, elevated steakhouse dining
            at ELWAY'S Downtown and 13,000 sq ft of event space. Inspired by
            both the beauty of the landscape and the energy of the city, The
            Ritz-Carlton, Denver welcomes guests with its own interpretation of
            modern luxury. Here, guests can retreat to some of Denver’s most
            spacious accommodations while enjoying views of the skyline or Rocky
            Mountains. Other amenities are equally rooted in the region,
            including luxury spa rituals, elevated steakhouse dining at ELWAY'S
            Downtown and 13,000 sq ft of event space.
          </p>
          <img
            src="https://images.unsplash.com/reserve/8T8J12VQxyqCiQFGa2ct_bahamas-atlantis.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyb3BpY2FsJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="hotel"
            className="border-solid border-[rgba(207,181,59)] border-4 rounded max-w-[700px] "
          />
        </div>
      </section>
      {/* about our rooms */}
      <section className="bg-[rgba(207,181,59)] text-white mt-10 p-4 pb-10">
        <h1 className="text-[48px] font-amita font-bold mt-10 pl-10">
          About Our Rooms
        </h1>
        <div className="flex flex-wrap justify-around mt-10 rounded">
          <div>
            <img
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt="hotel room"
              className="max-w-[450px] border-solid border-4 border-white mb-4"
            />
            <h2 className="text-[24px] text-center underline">
              Choice Guest Room
            </h2>
            <p className="max-w-[450px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              esse eos eius quod maxime, repellat facere quos reiciendis
              consequatur est cum voluptatibus quidem. At nobis nostrum ipsum,
              quisquam non officiis.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1612320743558-020669ff20e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="hotel room"
              className="max-w-[450px] border-solid border-4 border-white mb-4"
            />
            <h2 className="text-[24px] text-center underline">
              Deluxe Guest Room
            </h2>
            <p className="max-w-[450px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              esse eos eius quod maxime, repellat facere quos reiciendis
              consequatur est cum voluptatibus quidem. At nobis nostrum ipsum,
              quisquam non officiis.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="hotel room"
              className="max-w-[450px] border-solid border-4 border-white mb-4"
            />
            <h2 className="text-[24px] text-center underline">
              Executive Guest Room
            </h2>
            <p className="max-w-[450px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              esse eos eius quod maxime, repellat facere quos reiciendis
              consequatur est cum voluptatibus quidem. At nobis nostrum ipsum,
              quisquam non officiis.
            </p>
          </div>
        </div>
      </section>
      {/* activites */}
      <section className=" bg-grey-900 text-[30px]">
        <h1 className=" text-[48px] p-4 pt-10 text-[rgba(207,181,59)] font-amita font-bold pl-10">
          Activities & Events
        </h1>

        <div className="flex flex-wrap justify-around mt-10 rounded">
          <div class="flex justify-center mb-8 mt-2 border-solid border-[rgba(207,181,59)] border-4 rounded max-w-[700px]">
            <div class="rounded-lg shadow-lg bg-black max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded-t-lg"
                  src={require("../assets/golfImgLink.jpg")}
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="text-[rgba(207,181,59)] text-xl font-medium mb-2">
                  Golf in places so beautiful that you will never want to leave!
                </h5>
                <button
                  type="button"
                  class="w-full inline-block px-6 py-2 border-2 border-[rgba(207,181,59)] text-white font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Click here to swing like a Pro!
                </button>
              </div>
            </div>
          </div>
                  {/* Swing like a pro in a true paradise setting! */}

          <div class="flex justify-center mb-8 mt-2 border-solid border-[rgba(207,181,59)] border-4 rounded max-w-[700px]">
            <div class="rounded-lg shadow-lg bg-black max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded-t-lg"
                  src={require("../assets/spaImgLink.jpg")}
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="text-[rgba(207,181,59)] text-xl font-medium mb-2">
                  After one day with us you will feel like royalty!
                </h5>
                <button
                  type="button"
                  class="w-full inline-block px-6 py-2 border-2 border-[rgba(207,181,59)] text-white font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Click here to let your worries melt away in our luxurious spa.
                </button>
              </div>
            </div>
          </div>

          <div class="flex justify-center mb-8 mt-2 border-solid border-[rgba(207,181,59)] border-4 rounded max-w-[700px]">
            <div class="rounded-lg shadow-lg bg-black max-w-sm">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded-t-lg"
                  src={require("../assets/foodImgLink.jpg")}
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="text-[rgba(207,181,59)] text-xl font-medium mb-2">
                  Every flavor imaginable from every corner of the world.
                </h5>
                <button
                  type="button"
                  class="w-full inline-block px-6 py-2 border-2 border-[rgba(207,181,59)] text-white font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Click here to feast like a king in our award-winning restaurants.
                </button>
              </div>
            </div>
          </div>

          <div class="overflow-hidden text-gray-700">
  <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
    <div class="flex flex-wrap -m-1 md:-m-2">
      <div class="flex flex-wrap w-1/2">
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={require("../assets/music1.jpg")}></img>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={require("../assets/music2.jpg")}></img>
        </div>
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={require("../assets/music3.jpg")}></img>
        </div>
      </div>
      <div class="flex flex-wrap w-1/2">
        <div class="w-full p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={require("../assets/music4.jpg")}></img>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={require("../assets/music5.jpg")}></img>
        </div>
        <div class="w-1/2 p-1 md:p-2">
          <img alt="gallery" class="block object-cover object-center w-full h-full rounded-lg"
            src={require("../assets/music6.jpg")}></img>
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>
    </div>
  );
};

{
  /* 
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
    </div> */
}
{
  /* <div className="flex">
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
</div> */
}
export default Home;
