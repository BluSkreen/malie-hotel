import { close, logo, menu, } from "../assets";

const Modal = ({ visible, onClose }) => {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black text-white bg-opacity-30 backdrop-blur-sm flex justify-center items-center font-poppins">
     <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-md space-y-8 bg-black p-6 rounded">
        <img
          src={close}
          alt="menu"
          className="w-[28px] h-[28px]
          object-contain cursor-pointer"
          onClick={onClose}
        />
          <div className="">
            <img
              className="mx-auto h-12 w-auto w-[250px] h-[80px] "
              src={logo}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
            
            </p>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {/* <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                /> */}
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  {/* Remember me */}
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  {/* Forgot your password? */}
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[rgba(207,181,59)] py-2 px-4 text-sm font-medium text-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                </span>
                Sign in
              </button>
            </div>
            <p className="text-center
            ">Not a member?</p>
            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-[rgba(207,181,59)] py-2 px-4 text-sm font-medium text-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" /> */}
                </span>
                Create an Account!
              </button>
            </div>
          </form>
        </div>
      </div>
                
             
         
    </div>
  );
};

export default Modal;
