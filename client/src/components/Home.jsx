import { lux } from "../assets";

const Home = () => {
  return (
    <div>
      <section>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>

        <video
          className="relative z-[-1] w-auto min-w-full max-w-none"
          muted
          autoplay="autoplay"
          loop
        >
          <source src={lux} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="flex justify-center bg-black w-full pt-4">
        <form className="w-full max-w-sm mb-10">
          <h1 className="text-white">MAKE A RESERVATION</h1>
          <div className="flex items-center border-b border-[rgba(207,181,59)] py-2">
            <div class="inline-block relative w-64 mr-4">
              <select class="block appearance-none w-full bg-black text-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Number of Rooms</option>
                <option>1 Room</option>
                <option>2 Rooms</option>
                <option>3 Rooms</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
            </div>
            <button
              className="flex-shrink-0 bg-gray-400 hover:bg-teal-700 border-[rgba(207,181,59)] hover:border-teal-700 text-sm border-4 text-black py-1 px-2 rounded"
              type="button"
            >
              Check Availability
            </button>
          </div>
        </form>
      </section>

      <section className="p-4 mt-10">
        <h1 className="text-[48px] font-amita font-bold pl-10">Come Stay with Us</h1>
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

      <section className=" bg-black text-[30px]">
        <h1 className=" text-[48px] p-4 mt-10 text-[rgba(207,181,59)] font-amita font-bold pl-10">
          Activities & Events
        </h1>
        {/* <div className="flex">
          <div className="   bg-black text-white p-8 border-solid border-4 border-[rgba(207,181,59)]">
            <img
              src="https://images.unsplash.com/photo-1662515049537-5c4442e107d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGJlYWNoJTIwZ29sZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt="golf"
              className=" max-w-[500px]  border-solid border-[rgba(207,181,59)] border-4 rounded"
            />
            <p className="pt-6 font-amita">18 Hole Professional Course</p>
          </div>
          <div className="   bg-black text-white p-8 border-solid border-4 border-[rgba(207,181,59)]">
            <img
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              className=" max-w-[500px]  border-solid border-[rgba(207,181,59)] border-4 rounded"
            />
            <p className="pt-6 font-amita">World Class Spa Experience</p>
          </div>
          <div className="   bg-black text-white p-8 border-solid border-4 border-[rgba(207,181,59)]">
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