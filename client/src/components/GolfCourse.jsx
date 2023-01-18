import React from "react";

const GolfCourse = () => {
  return (
    <div>
      {/* section for photo carousel */}
      <section className="bg-[rgba(207,181,59)] text-white mt-5 p-4 pb-10">
        <h1 className="text-[48px] font-amita font-bold mt-5 pl-10">
          Golfing at your Dream Resort
        </h1>
        <div
          id="carouselExampleIndicators"
          class="carousel slide relative"
          data-bs-ride="carousel"
        >
          {/* buttons for carousel */}
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
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
          </div>
          {/* photos for carousel */}
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
            <div class="carousel-item float-left w-full">
              <img
                src={require("../assets/golfCourse4Medium.jpg")}
                class="block w-full object-fit: contain"
                alt="Mountains"
              />
            </div>
            <div class="carousel-item float-left w-full">
              <img
                src={require("../assets/golfCourse5Medium.jpg")}
                class="block w-full object-fit: contain"
                alt="Beach"
              />
            </div>
          </div>
          {/* button functionality */}
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
        </div>{" "}
      </section>

      {/* section for about */}
      <section className="p-4 mt-10">
        <h1 className="text-[48px] font-amita font-bold pl-10">
          THE GOLF TRIP OF A LIFETIME
        </h1>
        <div className="flex flex-wrap justify-around mt-6 mb-6">
          <p className="max-w-[800px] text-[25px] mt-[100px]">
            Malie Golf Club is a world-class experience that you have to play to
            believe. Perched above the World's most magnificent beaches, The
            Resort at Malie enjoys nearly 300 days of sun each year, making it
            an unbeatable destination for year-round adventures. Beyond the
            course, an iconic pool, world-class spa and ocean-view dining offer
            endless recreation for golf and travel enthusiasts alike.
          </p>
          <img
            src="https://images.unsplash.com/photo-1519682271141-57c25ad60410?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGFyZWFsJTIwZ29sZiUyMGNvdXJzZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Pink Socks"
            className="border-solid border-[rgba(207,181,59)] border-4 rounded max-w-[700px] "
          />
        </div>
      </section>

      {/* section for gallery */}
      <section class="overflow-hidden bg-black pb-20 pt-10 text-gray-700">
        <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/2">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://plus.unsplash.com/premium_photo-1661774316407-56209baefa8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z29sZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                ></img>
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1500932334442-8761ee4810a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z29sZnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                ></img>
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1509586721451-a990371f8243?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXJlYWwlMjBnb2xmJTIwY291cnNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                ></img>
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://images.unsplash.com/photo-1629673120178-53a664eec9e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGdvbGZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                ></img>
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                ></img>
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block object-cover object-center w-full h-full rounded-lg"
                  src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GolfCourse;
