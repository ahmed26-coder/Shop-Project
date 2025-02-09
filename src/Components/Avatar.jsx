import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { LuShoppingBag } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";

function Avatar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <RxAvatar  
        className="w-8 h-8 rounded-full cursor-pointer" 
        onClick={() => setMenuOpen(!menuOpen)} 
      />
      {menuOpen && (
        <div className="absolute right-0 mt-2 w-50 shadow-lg rounded-lg p-2">
          <ul className="text-black bg-white/5 backdrop-blur-md rounded-2xl">
            <li className="p-2 hover:bg-black text-sm cursor-pointer flex items-center hover:rounded-t-2xl hover:text-white">
              <MdOutlineSupervisedUserCircle className=" text-3xl" /> Manage My Account
            </li>
            <li className="p-2 hover:bg-black text-sm cursor-pointer flex items-center hover:text-white">
              <LuShoppingBag className=" text-2xl" /> My Order
            </li>
            <li className="p-2 hover:bg-black text-sm cursor-pointer flex items-center hover:text-white">
              <IoIosCloseCircleOutline className=" text-2xl" /> My Cancellations
            </li>
            <li className="p-2 hover:bg-black text-sm cursor-pointer flex items-center hover:text-white">
              <FaRegStar className=" text-2xl" /> My Reviews
            </li>
            <li className="p-2 hover:bg-black text-sm cursor-pointer flex items-center hover:rounded-b-2xl hover:text-white">
              <CiLogin className=" text-2xl" />
              <Link to="/Login">Log in</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Avatar;
