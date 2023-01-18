import React from "react";

const GolfCourse = () => {
  return (
    <section className="bg-[rgba(207,181,59)] text-white mt-10 p-4 pb-10">
      <h1 className="text-[48px] font-amita font-bold mt-10 pl-10">
        About Our Rooms
      </h1>
      <div
        id="carouselExampleIndicators"
        class="carousel slide relative"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner relative w-full overflow-hidden">
          <div class="carousel-item active float-left w-full">
            <img
              src={require("../assets/golfCourse1Medium.jpg")}
              class="block w-full object-fit: contain"
              alt="Wild Landscape"
            />
          </div>
          <div class="carousel-item float-left w-full">
            <img
              src={require("../assets/golfCourse2Medium.jpg")}
              class="block w-full object-fit: contain"
              alt="Camera"
            />
          </div>
          <div class="carousel-item float-left w-full">
            <img
              src={require("../assets/golfCourse3Medium.jpg")}
              class="block w-full object-fit: cover;
              height: 600px;"
              alt="Exotic Fruits"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            class="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      {" "}
    </section>

    //   <section className="bg-[rgba(207,181,59)] text-white mt-10 p-4 pb-10">
    //   <h1 className="text-[48px] font-amita font-bold mt-10 pl-10">
    //     About Our Rooms
    //   </h1>
    //   <div className="flex flex-wrap justify-around mt-10 rounded">
    //     <div>
    //       <img
    //         src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
    //         alt="hotel room"
    //         className="max-w-[450px] border-solid border-4 border-white mb-4"
    //       />
    //       <h2 className="text-[24px] text-center underline">
    //         Choice Guest Room
    //       </h2>
    //       <p className="max-w-[450px]">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
    //         esse eos eius quod maxime, repellat facere quos reiciendis
    //         consequatur est cum voluptatibus quidem. At nobis nostrum ipsum,
    //         quisquam non officiis.
    //       </p>
    //     </div>
    //     <div>
    //       <img
    //         src="https://images.unsplash.com/photo-1612320743558-020669ff20e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    //         alt="hotel room"
    //         className="max-w-[450px] border-solid border-4 border-white mb-4"
    //       />
    //       <h2 className="text-[24px] text-center underline">
    //         Deluxe Guest Room
    //       </h2>
    //       <p className="max-w-[450px]">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
    //         esse eos eius quod maxime, repellat facere quos reiciendis
    //         consequatur est cum voluptatibus quidem. At nobis nostrum ipsum,
    //         quisquam non officiis.
    //       </p>
    //     </div>
    //     <div>
    //       <img
    //         src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
    //         alt="hotel room"
    //         className="max-w-[450px] border-solid border-4 border-white mb-4"
    //       />
    //       <h2 className="text-[24px] text-center underline">
    //         Executive Guest Room
    //       </h2>
    //       <p className="max-w-[450px]">
    //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
    //         esse eos eius quod maxime, repellat facere quos reiciendis
    //         consequatur est cum voluptatibus quidem. At nobis nostrum ipsum,
    //         quisquam non officiis.
    //       </p>
    //     </div>
    //   </div>
    // </section>
  );
};

export default GolfCourse;
