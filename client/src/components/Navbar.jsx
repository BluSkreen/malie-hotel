import { useState } from "react";
import { Link } from "react-router-dom"
import { close, logo, menu, } from "../assets";
import {  Modal } from "../components"

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [signIn, setSignIn] = useState(false)
    const handleOnClose = () => setSignIn(false)
  
    return (
      <nav className="w-fill flex  justify-between items-center navbar z-[5] bg-black py-2  text-[rgba(207,181,59)] font-amita ">
         <Modal onClose={handleOnClose} visible={signIn}/>
         <Link
              className={`font-skranji  cursor-pointer text-[20px] text-white mr-10`}
              aria-current="page"
              to="/"
            >
              
            
        <img src={logo} alt="hoobank" className="w-[280px] h-[80px] " />
        </Link>
        {/* <h1 className="text-white font-rubik text-[40px]">Erich Ebbinghaus</h1> */}
  
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[5]">
          <li>
            <Link
              className={` cursor-pointer text-[20px] text-[rgba(207,181,59)]  mr-10`}
              aria-current="page"
              to="/about"
            >
              Reservations
            </Link>
          </li>
         
          <li>
            <Link
              className={` cursor-pointer text-[20px] text-[rgba(207,181,59)]  mr-10`}
              aria-current="page"
              to="/contact"
            >
              Spa
            </Link>
          </li>
          <li>
            <Link
              className={` cursor-pointer text-[20px] text-[rgba(207,181,59)]  mr-10`}
              aria-current="page"
              to="/resume"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
            onClick={() => setSignIn(true)}
              className={` cursor-pointer text-[20px] text-[rgba(207,181,59)]  mr-10`}
              aria-current="page"
              // to="/portfolio"
            >
              Sign In
            </Link>
          </li>
        </ul>
  
        <div className="sm:hidden flex flex-1 justify-end items-center mr-10">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px]
            object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute top-40 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              <li>
                <Link
                  className={` cursor-pointer text-[20px] text-[rgba(207,181,59)] mr-10`}
                  aria-current="page"
                  to="/"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  className={` cursor-pointer text-[20px] text-[rgba(207,181,59)] mr-10`}
                  aria-current="page"
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className={` cursor-pointer text-[20px] text-[rgba(207,181,59)] mr-10`}
                  aria-current="page"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  className={` cursor-pointer text-[20px] text-[rgba(207,181,59)] mr-10`}
                  aria-current="page"
                  to="/resume"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>
         
        </div>
      </nav>
    );
  };

  export default Navbar;