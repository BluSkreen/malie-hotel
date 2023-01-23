import { lux } from "../assets";
import React, { useEffect, useReducer, useState } from "react";
import { useDateContext } from "../utils/DateContext";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { checkDEV } from "@apollo/client/utilities/globals";
import Auth from "../utils/auth.js";

const Home = () => {
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

  let userToken;

  useEffect(() => {
      if(Auth.loggedIn()){
          userToken = Auth.getProfile();
          if (userToken.data.isAdmin){
              navigate("/admin");
          }
      }
    
  }, [])

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
    const startDateControl = document.getElementById("start").value;
    const endDateControl = document.getElementById("end").value;

    setStartDateStr(startDateControl);
    setEndDateStr(endDateControl);
    setStartDateArr([
      parseInt(startDateControl.split("-")[0]),
      parseInt(startDateControl.split("-")[1]),
      parseInt(startDateControl.split("-")[2]),
    ]);
    setEndDateArr([
      parseInt(endDateControl.split("-")[0]),
      parseInt(endDateControl.split("-")[1]),
      parseInt(endDateControl.split("-")[2]),
    ]);
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

      <section className="flex justify-center bg-black w-full pt-4 border-t-2 border-[#d2b947]">
        <form className="w-full max-w-sm mb-10" onSubmit={handleFormSubmit}>
          <h1 className="text-white">MAKE A RESERVATION</h1>
          <div className="flex items-center border-[rgba(207,181,59)] border-y py-2">
            <div className="inline-block relative w-64 mr-4">
              <input
                className="border-[rgba(207,181,59)]"
                type="date"
                id="start"
                name="trip-start"
                onChange={onStartDateChange}
                value={startDateStr}
                // min="2018-01-01"
                // max="2018-12-31"
              />

              <input
                className="border-[rgba(207,181,59)]"
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
              className="flex-shrink-0 bg-[#d2b947] hover:bg-[#dcc970] border-[rgba(207,181,59)]  text-sm border-4 text-black py-1 px-2 rounded hover:transition ease-in-out delay-150  duration-300"
              type="submit"
            >
              Check Availability
            </button>
          </div>
        </form>
      </section>

            <section className=" bg-[#faf7eb] border-8 border-[#d2b947] flex flex-wrap justify-between ">
                <div className=" mb-10 w-1/2 ">
                    <h1 className="text-[48px] font-economica font-bold  drop-shadow-[2px_2px_.5px_#d2b947] p-10">
                        Come Stay with Us
                    </h1>

          <p className=" text-[20px] font-economica font-bold bg-[#faf7eb] max-w-[700px] mx-auto text-center">
            Enjoy a desirable location next to Ala Moana Center, the world's
            largest open-air shopping mall. Stay just steps from Hawaii's most
            prestigious shopping venue showcasing fashion brands, premier
            department stores, and specialty retailers that include Louis
            Vuitton, Nordstrom and Williams-Sonoma. TripAdvisor reviewers rate
            the Melie among the top 20 hotels in Hawaii for travelers. Guests
            have access to complimentary Wi-Fi, a 24/7 business center, and
            extensive meeting and banquet facilities. The hotel's deluxe
            accommodations and superb location, just a 5-minute walk from the
            Hawaii Convention Center, are preferred by conference attendees. The
            Malie is 1.5 miles from Waikiki Beach, 2.5 miles from downtown
            Honolulu's financial center and government offices, and a quick 8
            miles from Honolulu International Airport.
          </p>
        </div>
        <div className=" ">
          <img
            src="https://images.unsplash.com/reserve/8T8J12VQxyqCiQFGa2ct_bahamas-atlantis.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHRyb3BpY2FsJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="hotel"
            className="  "
          />
        </div>
      </section>

            <section className="bg-[url('https://images.unsplash.com/photo-1641598471501-61a78df0edec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGJsYWNrJTIwZ29sZCUyMHBhdHRlcm58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60')] text-[#d2b947] p-10 border-b-4 border-[#d2b947]">
                <h1 className="text-[48px] font-economica font-bold mt-10  text-[#d2b947]">
                    About Our Rooms
                </h1>
                <div className="flex flex-wrap justify-around p-10 rounded drop-shadow-[4px_4px_10px_rgba(0,0,0)] font-economica font-bold">
                    <div className="pt-10 bg-black p-10 border-[#665919] border-2">
                        <img
                            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzb3J0JTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                            alt="hotel room"
                            className="max-w-[450px] border-solid border-2 border-[#665919] mb-4"
                        />

                        <h2 className="text-[34px] text-center underline py-4 font-bold ">
                            Choice Guest Room
                        </h2>
                        <p className="max-w-[450px] text-[20px] text-center">
                            Suitable for short or longer stays, the Choice Guest
                            Rooms are perfect for couples wanting a comfortable
                            base to explore Hawaii. All rooms come with the
                            choice of a king bed, or two queen beds. All rooms
                            also include air conditioning, coffee maker, daily
                            housekeeping, microwave oven and LCD TV with cable
                            channels. And just in case you need to check in with
                            the office or family, there's also complimentary
                            WiFi access so you can stay connected.
                        </p>
                    </div>
                    <div className="pt-10 bg-black p-10 border border-[#665919] border-2">
                        <img
                            src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                            alt="hotel room"
                            className="max-w-[450px] border-solid border-2 border-[#665919] mb-4"
                        />
                        <h2 className="text-[34px] text-center underline py-4 font-bold">
                            Deluxe Guest Room
                        </h2>
                        <p className="max-w-[450px] text-[20px] text-center">
                            Open spacious contemporary studio-style suite
                            offering either a King bed or two Queen beds, with a
                            kitchenette, dining table and a lanai (balcony) that
                            provides sweeping views of either the Yacht Harbor
                            and Pacific Ocean or colorful city, majestic
                            mountains and Pacific Ocean. All rooms also include
                            air conditioning, coffee maker, daily housekeeping,
                            microwave oven and LCD TV with cable channels. And
                            just in case you need to check in with the office or
                            family, there's also complimentary WiFi access so
                            you can stay connected.
                        </p>
                    </div>
                    <div className="pt-10 bg-black p-10 border border-[#665919] border-2">
                        <img
                            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                            alt="hotel room"
                            className="max-w-[450px] border-solid border-2 border-[#665919] mb-4"
                        />
                        <h2 className="text-[34px] text-center underline py-4 font-bold">
                            Executive Guest Room
                        </h2>
                        <p className="max-w-[450px] pb-10 text-[20px] text-center">
                            These rooms are highly sought after, offering
                            sweeping views of the wide blue Pacific, a balcony
                            that offers the perfect vantage point to drink them
                            all in, and spacious surrounds that can easily
                            accommodate up to four people, complete with a
                            luxurious king bed or two queen beds. All rooms
                            feature a bar fridge and tea/coffee making
                            facilities and complimentary in-room entertainment
                            options provided by either WiFi or cable television.
                        </p>
                    </div>
                </div>
            </section>

            <section className=" bg-black text-[30px]">
                <h1 className=" text-[48px] p-4 pt-10 text-[rgba(207,181,59)] font-economica font-bold pl-10 drop-shadow-[2px_2px_.5px_white]">
                    Activities & Events
                </h1>
            </section>

            <section className="border-y-8 border-[#d2b947]">
            <iframe width="100%" height="712" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1201&amp;height=712&amp;hl=en&amp;q=%20kihei+(The%20Malie%20Hotel)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>


            </section>
        </div>
    );
};

export default Home;
