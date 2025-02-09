import { Link } from "react-router-dom"
import login from "../assets/ligin.png"
import { FcGoogle } from "react-icons/fc";

function SignUp() {
  return (
    <div className="flex flex-col md:flex-row items-center md:gap-30 px-5 md:px-0">
      <img className="w-full md:w-auto -ml-6 mt-5 mb-15 md:rounded-r-3xl md:rounded-md" src={login} alt="error" />
      <div className="mt-10 md:mt-50 w-full md:w-auto text-center md:text-left">
        <h1 className="text-3xl md:text-5xl">Create an account</h1>
        <p className="text-base md:text-lg mt-3 ml-1">Enter your details below</p>
        <div className="grid grid-cols-1 gap-5 mt-5 ml-3">
          <input type="text" placeholder="Name" className="border-b-2 border-gray-500 pl-1 py-2 w-full" />
          <input type="email&number" placeholder="Email or Phone" className="border-b-2 border-gray-500 pl-1 py-2 w-full" />
          <input type="password" placeholder="Password" className="border-b-2 border-gray-500 pl-1 py-2 w-full" />
        </div>
        <div className="grid grid-cols-1 gap-5">
          <button className="mt-5 bg-red-400 py-2 text-white text-lg rounded-lg w-full hover:bg-red-500">
            <Link to="/">Create Account</Link>
          </button>
          <button className="flex items-center justify-center border-2 border-gray-400 py-2 px-4 text-lg w-full rounded-sm mb-10 hover:bg-black hover:text-white">
            <FcGoogle className="text-2xl mr-2" /> Sign up with Google
          </button>
        </div>
        <small className="text-base md:text-lg flex justify-center">Already have an account? 
          <Link to="/Login" className="underline ml-1 hover:text-red-400"> Log in</Link>
        </small>
      </div>
    </div>
  )
}

export default SignUp;
