import { logo } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-black text-white font-poppins pt-10 ">
            <div className="flex flex-col items-center justify-center">
                <div>
                    <p className="font-economica text-[32px] pb-2 text-[rgba(207,181,59)] ">
                        222 Malie Way | Maui, HI 96729 | 808.123.9876
                    </p>
                </div>
                <div>
                    <img
                        src={logo}
                        alt="logo"
                        className="max-w-[200px] items-center pb-2"
                    />
                </div>
                <ul className="list-none sm:flex hidden justify-end items-center flex-1 z-[5]">
                    <li>
                        <Link
                            className={` cursor-pointer text-[18px] text-[rgba(207,181,59)] mr-10 hover:text-[#faf7ab] focus:text-[#faf7ab] 
                            hover:transition ease-in-out delay-150  duration-300`}
                            aria-current="page"
                            to="/golfCourse"
                        >
                            Golf
                        </Link>
                    </li>

          <li>
            <Link
              className={` cursor-pointer text-[18px] text-[rgba(207,181,59)]  mr-10 hover:text-[#faf7ab] focus:text-[#faf7ab] 
              hover:transition ease-in-out delay-150  duration-300`}
              aria-current="page"
              to="/contact"
            >
              Relax
            </Link>
          </li>
          <li>
            <Link
              className={` cursor-pointer text-[18px] text-[rgba(207,181,59)]  mr-10 hover:text-[#faf7ab] focus:text-[#faf7ab] 
              hover:transition ease-in-out delay-150  duration-300`}
              aria-current="page"
              to="/rooms"
            >
              Stay
            </Link>
          </li>
          <li>
            <Link
              to="/food"
              className={` cursor-pointer text-[18px] text-[rgba(207,181,59)]  mr-10 hover:text-[#faf7ab] focus:text-[#faf7ab] 
              hover:transition ease-in-out delay-150  duration-300`}
              aria-current="page"
            >
              Eat
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="flex justify-around py-10 text-center text-[rgba(207,181,59)]">
          <div className="">
            <p className="underline">CAREERS</p>
            <div className="text-[12px]">
              <p>Career Portal </p>
              <p>Tech Blog </p>
            </div>
          </div>
          <div>
            <p className="underline">COMPANY</p>
            <div className="text-[12px]">
              <p>Siddharth Desai </p>
              <p>Jason Duran </p>
              <p>Darin Palombo </p>
              <p>Ryan Larson</p>
              <p>Nicolette Boggs</p>
              <p>Erich Ebbinghaus</p>
            </div>
          </div>
          <div>
            <p className="underline">LEGAL</p>
            <div className="text-[12px]">
              <p>Privacy </p>
              <p>Terms</p>
              <p>Cookie Policy</p>
              <p>Intellectual Property</p>
            </div>
          </div>
          <div>
            <p className="underline">SOCIAL</p>
            <div className="text-[12px]">
              <p>
                {" "}
                <a href="https://github.com/SHD327"> Sid's GitHub</a>{" "}
              </p>
              <p>
                {" "}
                <a href="https://github.com/BluSkreen"> Jason's GitHub</a>{" "}
              </p>
              <p>
                {" "}
                <a href="https://github.com/Darin1027">Darin's GitHub</a>{" "}
              </p>
              <p>
                {" "}
                <a href="https://github.com/larsonrj"> Ryan's GitHub </a>
              </p>
              <p>
                {" "}
                <a href="https://github.com/NicoletteBoggs">
                  {" "}
                  Nicolette's GitHub{" "}
                </a>
              </p>
              <p>
                {" "}
                <a href="https://github.com/eebbinghaus"> Erich's GitHub </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
