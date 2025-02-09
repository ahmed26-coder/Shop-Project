import imgfooter from "../assets/Frame 719.png"
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { Mail } from "lucide-react";

function Footer() {
  return (
    <>
      <div className="bg-black text-white px-10 py-10 flex flex-wrap justify-between gap-10 md:flex-nowrap md:px-20 md:pl-40">
        <div className="w-full md:w-auto">
          <h1 className="text-2xl">Exclusive</h1>
          <h5 className="pt-3">Subscribe</h5>
          <p className="pt-3">Get 10% off your first order</p>
          <div className="relative w-full max-w-sm mt-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-3 pr-10 py-2 text-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        <div className="w-full md:w-auto">
          <h4 className="text-2xl">Support</h4>
          <p className="pt-4">111 Bijoy sarani, Dhaka,</p>
          <p>DH 1515, Bangladesh.</p>
          <p className="pt-3">exclusive@gmail.com</p>
          <p className="pt-3">+88015-88888-9999</p>
        </div>
        <div className="w-full md:w-auto">
          <h4 className="text-2xl">Account</h4>
          <p className="pt-4">My Account</p>
          <p className="pt-3">Login / Register</p>
          <p className="pt-3">Cart</p>
          <p className="pt-3">Wishlist</p>
          <p className="pt-3">Shop</p>
        </div>
        <div className="w-full md:w-auto">
          <h4 className="text-2xl">Quick Link</h4>
          <p className="pt-4">Privacy Policy</p>
          <p className="pt-3">Terms Of Use</p>
          <p className="pt-3">FAQ</p>
          <p className="pt-3">Contact</p>
        </div>
        <div className="w-full md:w-auto text-center md:text-left">
          <h4 className="text-2xl">Download App</h4>
          <small className="pt-4 block">Save $3 with App New User Only</small>
          <img className="mt-2 mx-auto md:mx-0" src={imgfooter} alt="error" />
          <div className="flex justify-center md:justify-start gap-5 mt-3 text-2xl">
            <FaLinkedinIn />
            <FaInstagram />
            <FaFacebookF />
            <FaGithub className="text-black bg-white rounded-full" />
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600"></div>
      <div className="bg-black py-1 flex justify-center">
        <small className="text-gray-500">&copy; Copyright Rimel 2022. All rights reserved</small>
      </div>
    </>
  )
}

export default Footer;
