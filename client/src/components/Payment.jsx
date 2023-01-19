const Payment = () => {
  return (
    <div className="flex justify-center px-[100px] pt-10 font-poppins">
      <div className=" ">
        <h2 className="text-[30px] font-bold">Payment and Guest Details</h2>
        <hr />
        <div className="flex justify-between pl-6 text-[28px] pt-4">
            <h3>Total for Stay</h3>
            <h3>$1000.00</h3>
        </div>
        <div className="flex justify-between pl-6 text-[16px]">
            <h3>Total room Charge</h3>
            <h3>$800.00</h3>
        </div>
        <div className="flex justify-between pl-6 text-[16px]">
            <h3>Total fees</h3>
            <h3>$150.00</h3>
        </div>
        <div className="flex justify-between pl-6 text-[16px] pb-4">
            <h3>Total taxes</h3>
            <h3>$50.00</h3>
        </div>
        <hr />
        
        <h2 className="text-[24px] font-bold pt-6">Payment</h2>
        <hr />
        <form action="" className="pt-4 pl-[50px]">
          <div>
            <div>
              <h3 className="font-bold ">Card number</h3>
              <input
                class="appearance-none min-w-[400px] block text-gray-700 border-2 border-gray-400 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder=""
              />
            </div>
            <div>
              <div className="inline-block relative  ">
                <h3 className="font-bold">Month</h3>
                <select className="block appearance-none min-w-[200px] bg-white border border-gray-500 hover:border-gray-500 px-2 py-2 pr-2  shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option></option>
                  <option>01 Jan</option>
                  <option>02 Feb</option>
                  <option>03 Mar</option>
                  <option>04 Apr</option>
                  <option>05 May</option>
                  <option>06 Jun</option>
                  <option>07 Jul</option>
                  <option>08 Aug</option>
                  <option>09 Sep</option>
                  <option>10 Oct</option>
                  <option>11 Nov</option>
                  <option>12 Dec</option>
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

              <div className="inline-block relative w-64 ">
                <h3 className="font-bold">Year</h3>
                <select className="block appearance-none min-w-[200px] bg-white border border-gray-500 hover:border-gray-500 px-4 py-2 pr-8  shadow leading-tight focus:outline-none focus:shadow-outline">
                  <option></option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                  <option>2026</option>
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                  <option>2031</option>
                  <option>2032</option>
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
          </div>
        </form>
        <div>
          <h2 className="text-[24px] font-bold mt-6">Guest Information</h2>
          <hr />
        </div>
        <div className="pl-[50px]">
          <h3 className="font-bold pt-4">First Name</h3>
          <input
            class="appearance-none min-w-[400px] block text-gray-700 border-2 border-gray-400 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder=""
          />
          <h3 className="font-bold pt-1">Last Name</h3>
          <input
            class="appearance-none min-w-[400px] block text-gray-700 border-2 border-gray-400 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder=""
          />
          <h3 className="font-bold pt-1">Email</h3>
          <input
            class="appearance-none min-w-[400px] block text-gray-700 border-2 border-gray-400 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder=""
          />
          <h3 className="font-bold pt-1">Phone</h3>
          <input
            class="appearance-none min-w-[400px] block text-gray-700 border-2 border-gray-400 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder=""
          />
           <h3 className="font-bold pt-1">Address</h3>
          <input
            class="appearance-none min-w-[400px] block text-gray-700 border-2 border-gray-400 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder=""
          />
           <h3 className="font-bold pt-1">Address 2</h3>
          <input
            class="appearance-none min-w-[400px] block text-gray-700 border-2 border-gray-400 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="optional"
          />
           <h3 className="font-bold pt-1">City</h3>
          <input
            class="appearance-none min-w-[400px] block text-gray-700 border-2 border-gray-400 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder=""
          />
           <h3 className="font-bold pt-1">State</h3>
          <input
            class="appearance-none min-w-[400px] block text-gray-700 border-2 border-gray-400 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder=""
          />
           <h3 className="font-bold pt-1">Zip</h3>
          <input
            class="appearance-none min-w-[400px] block text-gray-700 border-2 border-gray-400 py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder=""
          />
          <div className="ml-[100px] pt-2">
           <button
              className="  bg-[rgba(207,181,59)] hover:bg-cyan-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded max-w-[180px] mb-4 pt-4"
              type="button"
            >
              Book Reservation
            </button>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Payment;