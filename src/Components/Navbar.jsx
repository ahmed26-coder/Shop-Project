import { IoMdHeartEmpty } from "react-icons/io";
import { RiShoppingCart2Line } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import Avatar from "./Avatar";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuOpen && !event.target.closest(".menu-container")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menuOpen]);

  return (
    <div className="relative z-10">
      <div className="bg-black py-1">
        <p className="text-white text-center text-sm sm:text-base">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!  
          <a className="font-bold ml-2 underline hover:text-blue-400" href="#">ShopNow</a>
        </p>
      </div>

      <div className="flex justify-between items-center mx-5 sm:mx-10 md:mx-20 mt-5 relative">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Exclusive</h1>

        <div className="hidden md:flex gap-10 text-lg font-bold absolute left-1/2 transform -translate-x-1/2">
        <NavLink 
  to="/" 
  className={({ isActive }) => 
    `cursor-pointer transition duration-200 hover:border-blue-500 ${isActive ? "font-bold underline" : ""}`
  }
>
  Home
</NavLink>
<NavLink 
  to="/contact" 
  className={({ isActive }) => 
    `cursor-pointer transition duration-200 hover:border-blue-500 ${isActive ? "font-bold underline" : ""}`
  }
>
  Contact
</NavLink>
<NavLink 
  to="/about" 
  className={({ isActive }) => 
    `cursor-pointer transition duration-200 hover:border-blue-500 ${isActive ? "font-bold underline" : ""}`
  }
>
  About
</NavLink>
<NavLink 
  to="/signup" 
  className={({ isActive }) => 
    `cursor-pointer transition duration-200 hover:border-blue-500 ${isActive ? "font-bold underline" : ""}`
  }
>
  Sign Up
</NavLink>

        </div>

        <div className="relative flex items-center gap-4 sm:gap-6 md:gap-7">
          <div className="relative w-full sm:w-auto">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="bg-gray-200 rounded-lg p-2 text-sm pl-10 pr-3 focus:ring-2 focus:ring-blue-400 outline-none w-full"
            />
            <svg 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m0 0a7 7 0 1 0-9.9-9.9 7 7 0 0 0 9.9 9.9z" />
            </svg>
          </div>
          <div className="flex items-center gap-4 sm:gap-7 text-2xl">
            <div className="hidden md:block">
              <IoMdHeartEmpty className="cursor-pointer hover:text-red-500" />
            </div>
            <div className="hidden md:block">
              <RiShoppingCart2Line className="cursor-pointer hover:text-blue-500" />
            </div>
            <Avatar />
            <div className="md:hidden text-2xl cursor-pointer menu-container" onClick={() => setMenuOpen(!menuOpen)}>
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white/0 bg-opacity-75 backdrop-blur-md shadow-md flex flex-col items-center py-4 space-y-3 z-30 menu-container">
          <NavLink to="/" className="text-lg" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/contact" className="text-lg" onClick={() => setMenuOpen(false)}>Contact</NavLink>
          <NavLink to="/about" className="text-lg" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/signup" className="text-lg" onClick={() => setMenuOpen(false)}>Sign Up</NavLink>
        </div>
      )}

      <div className="border border-gray-400 mt-5"></div>
    </div>
  );
}

export default Navbar;
