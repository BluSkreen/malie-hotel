import React from "react";
// import localImage from "../assets/oceanBanner";

const Food = () => {
  return (
    <div>
      {/* intro photo */}
      <section>
        <img
          src={require("../assets/oceanBanner.jpg")}
          class="max-w-full h-auto"
          alt="..."
        />
      </section>

      {/* about section */}
      <section className="p-4 bg-[rgba(207,181,59)]">
        <h1 className="text-[48px] font-amita font-bold pl-10 pt-4 drop-shadow-[2px_2px_.5px_white]">
          Culinary Craftsmanship
        </h1>
        <div className="flex flex-wrap justify-around mt-6 mb-6">
          <p className="max-w-[800px] text-[25px] mt-[100px] italic font-serif">
            Culinary Craftsmanship At Malie, we believe food is a celebration of
            place, passion, and craftsmanship. Our expert culinary team combines
            locally sourced ingredients—including organic produce grown on our
            own grounds—with inventive takes on the traditional flavors of
            Malieian cuisine to create unforgettable dining experiences rooted
            in the very essence of the Malieian land we call home.
          </p>
          <img
            src="https://images.unsplash.com/photo-1588123190131-1c3fac394f4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZWF0aW5nJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="Pink Socks"
            className="border-solid border-black border-4 rounded max-w-[700px] max-w-sm h-auto transition-shadow ease-in-out duration-300 shadow-none shadow-black shadow-2xl"
          />
        </div>
      </section>

      {/* photo gallery */}
      <section class="bg-black overflow-hidden text-gray-700 ">
        <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32 mb-10 mt-10">
          <div class="flex flex-wrap -m-1 md:-m-2">
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                {" "}
                <div class="relative overflow-hidden">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="https://images.unsplash.com/photo-1571152557337-9ab79fd76eb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dHJvcGljYWwlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  ></img>
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70"></div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                {" "}
                <div class="relative overflow-hidden">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="https://images.unsplash.com/photo-1523371054106-bbf80586c38c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJvcGljYWwlMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  ></img>
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70"></div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                {" "}
                <div class="relative overflow-hidden">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="https://images.unsplash.com/photo-1527786747587-f712769de1e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyb3BpY2FsJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  ></img>
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70"></div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                {" "}
                <div class="relative overflow-hidden">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="https://images.unsplash.com/photo-1660144769509-5139d22dc2ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRyb3BpY2FsJTIwZGluaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  ></img>
                  <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70"></div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                {" "}
                <div class="relative overflow-hidden">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="https://images.unsplash.com/photo-1547558840-8ad6c8e662a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dGFzdHklMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  ></img>
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70"></div>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-1/3">
              <div class="w-full p-1 md:p-2">
                {" "}
                <div class="relative overflow-hidden">
                  <img
                    alt="gallery"
                    class="block object-cover object-center w-full h-full rounded-lg"
                    src="https://images.unsplash.com/photo-1584894781998-6b11134ed209?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRhc3R5JTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  ></img>
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* carousel */}
      <section>
        <div
          id="carouselDarkVariant"
          class="carousel slide carousel-fade carousel-dark relative"
          data-bs-ride="carousel"
        >
          {/* <!-- Indicators --> */}
          <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="1"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="2"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="3"
              aria-label="Slide 1"
            ></button>
            <button
              data-bs-target="#carouselDarkVariant"
              data-bs-slide-to="4"
              aria-label="Slide 1"
            ></button>
          </div>
          {/* <!-- Inner --> */}
          <div class="carousel-inner relative w-full overflow-hidden">
            {/* <!-- Single item --> */}
            <div class="carousel-item active relative float-left w-full">
              <img
                src={require("../assets/food1Medium.jpg")}
                class="block w-full"
                alt="Motorbike Smoke"
              />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="font-serif text-[48px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  -Mark Twain
                </h5>
                <p class="text-[38px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  “The only way to keep your health is to eat what you don’t
                  want, drink what you don’t like, and do what you’d rather
                  not.”
                </p>
              </div>
            </div>
            {/* <!-- Single item --> */}
            <div class="carousel-item relative float-left w-full">
              <img
                src={require("../assets/food2Medium.jpg")}
                class="block w-full"
                alt="Mountaintop"
              />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="font-serif text-[48px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  - Homer Simpson
                </h5>
                <p class="text-[38px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  “I am going on a diet. From this day forward, I pledge there
                  will be no pork chop too succulent! No donut too tasty!"
                </p>
              </div>
            </div>
            {/* <!-- Single item --> */}
            <div class="carousel-item relative float-left w-full">
              <img
                src={require("../assets/food3Medium.jpg")}
                class="block w-full"
                alt="Woman Reading a Book"
              />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="font-serif text-[48px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  - Peter Griffin
                </h5>
                <p class="text-[38px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  "Well last night me and Brian got drunk and ate the turkey,
                  but before you get mad we also ate the salad."
                </p>
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src={require("../assets/food4Medium.jpg")}
                class="block w-full"
                alt="Woman Reading a Book"
              />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="font-serif text-[48px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  - Jimmy Fallon
                </h5>
                <p class="text-[38px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  "Thank you, horseradish, for being neither a radish nor a
                  horse. What you are is a liar food."
                </p>
              </div>
            </div>
            <div class="carousel-item relative float-left w-full">
              <img
                src={require("../assets/food5Medium.jpg")}
                class="block w-full"
                alt="Woman Reading a Book"
              />
              <div class="carousel-caption hidden md:block absolute text-center">
                <h5 class="font-serif text-[48px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  - Julia Childs
                </h5>
                <p class="text-[38px] hover:opacity-50 transition duration-300 ease-in-out hover:text-white">
                  “A party without cake is just a meeting.”
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Inner --> */}
          {/* <!-- Controls --> */}
          <button
            class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselDarkVariant"
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
            data-bs-target="#carouselDarkVariant"
            data-bs-slide="next"
          >
            <span
              class="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* select dining options */}
      <section className="bg-black">
        <div className="mb-2 flex p-1 justify-around items-center flex-wrap">
          {/* card 1 */}
          <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-[rgba(207,181,59)] max-w-sm border-4 border-white mb-6">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded-t-lg"
                  src={require("../assets/smallFood1.jpg")}
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  World class Burger's from every corner of the World!
                </h5>
                <p class="text-gray-700 text-base mb-4 font-serif	">
                  Indulge in the ultimate burger experience with our
                  handcrafted, decadent burgers. Made with only the freshest,
                  highest-quality ingredients and cooked to perfection, each
                  bite is a burst of flavor and texture. Treat yourself to the
                  best burger you've ever had, and come back for more.
                </p>
                <a
                  href="https://www.mcdonalds.com/us/en-us.html"
                  target="_blank"
                  class="inline-block px-6 py-2.5 bg-gray-800 text-white
                  font-medium text-xs leading-tight uppercase rounded-full
                  shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900
                  focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-gray-900 active:shadow-lg transition duration-150
                  ease-in-out"
                >
                  {" "}
                  Place your Order Now
                </a>
              </div>
            </div>
          </div>
          {/* card 2 */}
          <div class="flex justify-center">
            <div class="rounded-lg shadow-lg bg-[rgba(207,181,59)] max-w-sm border-4 border-white mb-6">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded-t-lg"
                  src={require("../assets/smallFood2.jpg")}
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  Tacos that will blow your mind!
                </h5>
                <p class="text-gray-700 text-base mb-4 font-serif	">
                  Savor the rich, bold flavors of our expertly crafted tacos.
                  Made with only the freshest, premium ingredients, each bite is
                  a symphony of taste and texture. Our tacos are sure to
                  tantalize your taste buds, and are the perfect meal for any
                  occasion. Treat yourself to the ultimate taco experience, and
                  come back for more.
                </p>
                <a
                  href="https://www.tacobell.com/"
                  target="_blank"
                  class="inline-block px-6 py-2.5 bg-gray-800 text-white
                  font-medium text-xs leading-tight uppercase rounded-full
                  shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900
                  focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-gray-900 active:shadow-lg transition duration-150
                  ease-in-out"
                >
                  {" "}
                  Place your Order Now
                </a>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div class="flex justify-center ">
            <div class="rounded-lg shadow-lg bg-[rgba(207,181,59)] max-w-sm mb-20 mt-20 border-4 border-white mb-6">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <img
                  class="rounded-t-lg"
                  src={require("../assets/smallFood3.jpg")}
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  Sushi fit for a Samuria!
                </h5>
                <p class="text-gray-700 text-base mb-4">
                  Indulge in the art of sushi with our expertly crafted rolls.
                  Made with only the freshest, premium ingredients, each bite is
                  a balance of flavors and texture. Whether you're a sushi
                  connoisseur or a first-time sushi eater, our sushi rolls are
                  sure to delight your taste buds. Treat yourself to the
                  ultimate sushi experience, and come back for more.
                </p>
                <a
                  href="https://tokyojoes.com/"
                  target="_blank"
                  class="inline-block px-6 py-2.5 bg-gray-800 text-white
                  font-medium text-xs leading-tight uppercase rounded-full
                  shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900
                  focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-gray-900 active:shadow-lg transition duration-150
                  ease-in-out"
                >
                  {" "}
                  Place your Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Food;

// // <div class="grid grid-cols-3 gap-4">
//   <div class="mb-4">
//   <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
//     <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" class="max-w-xs" alt="Louvre" />
//     <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-50 transition duration-300 ease-in-out bg-indigo-700"></div>
//   </div>
// </div>
// <div class="mb-4">
//   <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
//     <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" class="max-w-xs" alt="Louvre" />
//     <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-20 transition duration-300 ease-in-out bg-purple-700"></div>
//   </div>
// </div>
// <div class="mb-4">
//   <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
//     <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" class="max-w-xs" alt="Louvre" />
//     <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-70 transition duration-300 ease-in-out bg-green-700"></div>
//   </div>
// </div>
// </div>
// <div class="grid grid-cols-3 gap-4">
// <div class="mb-4 md:mb-0">
//   <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
//     <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" class="max-w-xs" alt="Louvre" />
//     <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-30 transition duration-300 ease-in-out bg-red-700"></div>
//   </div>
// </div>
// <div class="mb-4 md:mb-0">
//   <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
//     <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" class="max-w-xs" alt="Louvre" />
//     <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-40 transition duration-300 ease-in-out bg-white"></div>
//   </div>
// </div>
// <div class="mb-4 md:mb-0">
//   <div class="relative overflow-hidden bg-no-repeat bg-cover max-w-xs">
//     <img src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp" class="max-w-xs" alt="Louvre" />
//     <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-60 transition duration-300 ease-in-out bg-blue-400"></div>
//   </div>
// </div>
// </div>
