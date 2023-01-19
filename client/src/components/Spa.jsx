const Spa = () => {
  return (
    <div>
      <section>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Document</title>
              <img class="object-fill w-full" src="https://images.unsplash.com/photo-1524901548305-08eeddc35080?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="breathe header photo" />
      </section>


      <section className="flex justify-center bg-black w-full pt-4">
        <form className="w-full max-w-sm mb-10">
          <h1 className="text-white">MAKE A RESERVATION</h1>
          <div className="flex items-center border-b border-[rgba(207,181,59)] py-2">
            <div class="inline-block relative w-64 mr-4">
              <select class="block appearance-none w-full bg-black text-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>Services</option>
                <option>Massage</option>
                <option>Manicure</option>
                <option>Pedicure</option>
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

      <section className="bg-[rgba(207,181,59)] text-white mt-10 p-4 pb-10">
        <h1 className="text-[48px] font-amita font-bold mt-10 pl-10">
          The Oasis
              </h1>
              <p class="font-semibold">Forget your troubles with one of our many relaxing spa services at The Oasis, located within our hotel. The challenges you face in everyday life can cause tension all throughout your body. Unnecessary stress can be detrimental to your physical and mental wellbeing. You deserve a day of luxury. That’s why our spa offers a plethora of packages. Our specially trained staff is here to serve you.</p>
        <div className="flex flex-wrap justify-around mt-10 rounded">
          <div>
            <img
              src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="massage"
              className="max-w-[450px] border-solid border-4 border-white mb-4"
            />
            <h2 className="text-[24px] text-center underline">
              Massages
            </h2>
            <p className="max-w-[450px]">
                    Reduce stress, anxiety/depression, and relieve muscle pain with one of our massage services. We offer Swedish, reflexology, and everything in between. Add CBD to any session of your choice for some added healing. Your body will be glowing with gratitude!
                          
                <ul class="mt-6 list-none">
                            <li><p class="font-extrabold">Menu:</p></li>
                            <li>Deep Tissue - 60 mins, 90 mins - $110, $130</li>
                            <li>Swedish - 60 mins, 90 mins - $90, $130</li>
                            <li>CBD - 60 mins, 90 mins - $110, $165</li>
                            <li>Hot Stone - 60 mins, 90 mins - $110, $165</li>
                            <li>Couples - 60 mins, 90 mins - $130, $185</li>
                            <li>Reflexology - 60 mins, 90 mins - $140, $230</li>
                            
                    </ul>
                                                    
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="mani"
              className="max-w-[450px] border-solid border-4 border-white mb-4"
            />
            <h2 className="text-[24px] text-center underline">
              Manicures
            </h2>
            <p className="max-w-[450px]">
                     Not only do we offer a go-to signature manicure/pedicure combo, but we also do trendy nail art. Add sparkles, flowers, logos, or whatever it is that your heart desires. Take your pick of gel, dip, or shellac. All manicures come with cuticle care, reshaping of the nail, a hand massage with lotion, and a hot towel.
              <ul class="mt-6 list-none">
                            <li><p class="font-extrabold">Menu:</p></li>
                            <li>Signature Mani/Pedi Combo - $73</li>
                            <li>Signature Manicure - $34</li>
                            <li>Gel Manicure - $44</li>
                            <li>Shellac Manicure - $49</li>
                            <li>Dip Manicure - $55</li>
             
            </ul>           
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Pedicures"
              className="mt-8 max-w-[450px] border-solid border-4 border-white"
            />
            <h2 className="text-[24px] text-center underline">
              Pedicures
            </h2>
            <p className="max-w-[450px]">
                    All of our pedicure services include a soak, nail and cuticle care, exfoliation, and 5-10 minutes of a light massage. The Spa Pedicure comes with callus removal and a paraffin hot wax wrap, and the Luxe Pedicure package has it all -with essential oils and a foot mask that will leave your feet unbelievably smooth!
                          
              <ul class="mt-6 list-none">
                              <li><p class="font-extrabold">Menu:</p></li>
                              <li>Signature Pedicure - $39</li>
                              <li>Gentleman Pedicure - $32</li>
                              <li>Shellac Pedicure - $57</li>
                              <li>Spa Pedicure - $54</li>
                              <li>Luxe Pedicure - $58</li>
                              <li>CBD Pedicure - $63</li>
            </ul>
            </p>
            </div>      
        </div>
      </section>

      
    </div>
  );
};

export default Spa;
