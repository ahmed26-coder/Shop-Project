import apple from "../assets/apple14pro.png";
import CountdownTimer from "../Components/CountdownTimer";
import CountdownTimr from "../Components/CountdownTimr";
import { FaApple } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import ProductScroll from "../Components/ProductScroll";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { FaTv } from "react-icons/fa";
import { BsSmartwatch } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { IoHeadset } from "react-icons/io5";
import { LuGamepad } from "react-icons/lu";
import aaa1 from "../assets/aaa1.png";
import aaa2 from "../assets/aaa2.png";
import aaa3 from "../assets/aaa3.png";
import aaa4 from "../assets/aaa4.png";
import { IoIosStar } from "react-icons/io";
import sss from "../assets/ssss.png";
import xxx1 from "../assets/xxx1.png";
import xxx2 from "../assets/xxx3.png";
import xxx3 from "../assets/xxx4.png";
import xxx4 from "../assets/xxx5.png";
import xxx5 from "../assets/xxx6.png";
import xxx6 from "../assets/xxx7.png";
import xxx7 from "../assets/xxx8.png";
import zzz1 from "../assets/zzz1.png";
import zzz2 from "../assets/zzz2.png";
import zzz3 from "../assets/zzz3.png";
import zzz4 from "../assets/zzz4.png";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";

function Home() {
  const products = [
    {
      id: 1,
      img: aaa1,
      name: "The north coat",
      price: "$260",
      oldPrice: "$360"
    },
    {
      id: 2,
      img: aaa2,
      name: "Gucci duffle bag",
      price: "$960",
      oldPrice: "$1160"
    },
    {
      id: 3,
      img: aaa3,
      name: "RGB liquid CPU Cooler",
      price: "$160",
      oldPrice: "$170"
    },
    {
      id: 4,
      img: aaa4,
      name: "Small BookSelf",
      price: "$360",
      oldPrice: "$400"
    }
  ];

  const DataCard = [
    { id: 1, img: xxx1, name: "Breed Dry Dog Food", price: "$100" },
    { id: 2, img: xxx3, name: "CANON EOS DSLR Camera", price: "$360" },
    { id: 3, img: aaa2, name: "ASUS FHD Gaming Laptop", price: "$700" },
    { id: 4, img: xxx4, name: "Curology Product Set ", price: "$500" },
    { id: 5, img: xxx5, name: "Kids Electric Car", price: "$960" },
    { id: 6, img: xxx6, name: "Jr. Zoom Soccer Cleats", price: "$1160" },
    { id: 7, img: xxx7, name: "GP11 Shooter USB Gamepad", price: "$660" },
    { id: 8, img: xxx2, name: "Quilted Satin Jacket", price: "$660" }
  ];

  return (
    <>
       <div className="flex flex-col md:flex-row gap-10 ml-5 md:ml-20 mt-5 mb-20">
      <div>
        <p className="flex items-center">
          Woman&#39;s Fashion <IoIosArrowForward className="ml-10" />
        </p>
        <p className="flex pt-3 items-center">
          Men&#39;s Fashion <IoIosArrowForward className="ml-16" />
        </p>
        <p className="pt-3">Electronics</p>
        <p className="pt-3">Home & Lifestyle</p>
        <p className="pt-3">Medicine</p>
        <p className="pt-3">Sports & Outdoor</p>
        <p className="pt-3">Baby&#39;s & Toys</p>
        <p className="pt-3">Groceries & Pets</p>
        <p className="pt-3">Health & Beauty</p>
      </div>
      <div className="border-2 border-gray-400 hidden md:block"></div>
      <div className="bg-black text-white flex flex-col md:flex-row gap-10 md:gap-40 items-center md:items-start">
        <div className="ml-5 md:ml-20 mt-10 text-center md:text-left">
          <p className="flex items-center justify-center md:justify-start">
            <FaApple className="text-4xl mr-2" /> iPhone 14 Series
          </p>
          <h1 className="text-4xl md:text-6xl w-full md:w-80 mt-5">Up to 10% off Voucher</h1>
          <button className="mt-8 flex items-center justify-center md:justify-start border-b-2 pb-1 text-lg">
            Shop Now <IoMdArrowForward className="mt-1 ml-1" />
          </button>
        </div>
        <img className="w-full sm:w-3/4 md:w-auto mt-5 md:mt-0" src={apple} alt="error" />
      </div>
    </div>


      <div className="flex gap-3 ml-5 md:ml-20 mt-10">
        <div className="w-4 h-10 bg-red-500 rounded-2xl"></div>
        <p className="text-red-400 font-bold mt-2">Today&#39;s</p>
      </div>
      <div className="mt-10 md:mt-20 ml-5 md:ml-20 flex flex-col md:flex-row gap-5 md:gap-50">
        <h1 className="text-3xl font-bold">Flash Sales</h1>
        <CountdownTimer />
      </div>
      <div>
        <ProductScroll />
      </div>
      <button className="bg-red-400 text-white text-lg py-2 mt-[5vw] px-5 rounded-md md:mt-15 block mx-auto hover:bg-red-500">
        <Link to="/Wishlist">View All Products</Link>
      </button>
      <div className="flex gap-3 ml-5 md:ml-20 mt-10 my-[5vw]">
        <div className="w-4 h-10 bg-red-500 rounded-2xl"></div>
        <p className="text-red-500 font-bold">Categories</p>
      </div>
      <div className="flex flex-wrap justify-center mt-[5vw] md:justify-start gap-5 md:gap-20 mx-5 md:mx-20 md:mt-20">
        {[
          { icon: HiOutlineDevicePhoneMobile, label: "Phones" },
          { icon: FaTv, label: "Computers" },
          { icon: BsSmartwatch, label: "SmartWatch" },
          { icon: FaCamera, label: "Camera" },
          { icon: IoHeadset, label: "HeadPhones" },
          { icon: LuGamepad, label: "Games" },
        ].map((item, index) => (
          <div key={index} className="border-2 border-gray-500 rounded-sm text-lg w-[150px] h-[100px] hover:border-red-500 hover:bg-red-500 hover:text-white flex flex-col items-center justify-center">
            <item.icon className="text-2xl" />
            <p className="text-center pt-2">{item.label}</p>
          </div>
        ))}
      </div>



      <div className="flex gap-3 ml-5 md:ml-20 mt-10">
        <div className="w-4 h-10 bg-red-500 rounded-2xl"></div>
        <p className="text-red-400 font-bold mt-2">This Month</p>
      </div>
      <div className="mt-10 mx-5 md:mx-20 flex flex-col md:flex-row justify-between gap-5">
        <h1 className="text-3xl md:text-4xl">Best Selling Products</h1>
        <button className="bg-red-400 text-lg text-white py-2 px-8 rounded-sm hover:bg-red-500">
          <Link to="/Wishlist">View All</Link>
        </button>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start gap-5 md:gap-15 mt-10 mx-5 md:mx-20 mb-10">
        {products.map((item) => (
          <article
            key={item.id}
            className="relative group p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 w-full sm:w-1/2 md:w-1/4 lg:w-1/5"
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition duration-300">
                Add to Cart
              </div>
            </div>
            <h4 className="text-2xl mt-2">{item.name}</h4>
            <div className="flex gap-5 md:gap-20 ml-4 mt-2">
              <p className="text-red-500 font-bold">{item.price}</p>
              <p className="text-gray-500">
                <del>{item.oldPrice}</del>
              </p>
            </div>
            <div className="flex gap-2 mt-2 text-amber-300">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>
          </article>
        ))}
      </div>




      <div className="bg-black flex flex-col md:flex-row gap-10 md:gap-20 px-5 md:px-20 mx-4 md:mx-15 items-center md:items-start">
      <div className="text-center md:text-left">
        <h4 className="text-green-500 pt-10 font-bold mb-3 md:mb-5">Categories</h4>
        <h1 className="text-white text-4xl md:text-6xl w-full md:w-120">
          Enhance Your Music Experience
        </h1>
        <CountdownTimr />
        <button className="bg-green-400 text-white text-xl md:text-2xl py-2 px-6 md:px-8 rounded-md mt-5 mb-10">
          Buy Now!
        </button>
      </div>
      <img className="w-[80%] md:w-[40%] ml-0 md:ml-40" src={sss} alt="error" />
    </div>



    
    <div className="flex gap-3 ml-5 md:ml-20 mt-10">
        <div className="w-4 h-10 bg-red-500 rounded-2xl"></div>
        <p className="text-red-400 font-bold mt-2">Our Products</p>
      </div>
      <div>
        <h1 className="text-4xl ml-5 md:ml-20 mt-5 font-bold">Explore Our Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 mx-5 md:mx-20 mb-10">
        {DataCard.map((item) => (
          <article
            key={item.id}
            className="relative group p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="relative">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition duration-300">
                Add to Cart
              </div>
            </div>
            <h4 className="text-lg mt-2">{item.name}</h4>
            <div className="flex gap-5 ml-4 mt-2">
              <p className="text-red-500 font-bold">{item.price}</p>
            </div>
            <div className="flex gap-2 mt-2 text-amber-300">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>
          </article>
        ))}
      </div>
      <div className="flex justify-center mt-10 md:mt-20">
        <button className="bg-red-400 text-white py-2 px-8 rounded-md hover:bg-red-500">
          <Link to="/Wishlist">View All Products</Link>
        </button>
      </div>



       <div className="flex gap-3 ml-5 md:ml-20 mt-10">
        <div className="w-4 h-10 bg-red-500 rounded-2xl"></div>
        <p className="text-red-400 font-bold mt-2">Featured</p>
      </div>
      <h1 className="text-4xl font-bold mt-4 ml-5 md:ml-20">New Arrival</h1>
      <div className="flex flex-col md:flex-row gap-10 mt-10 mx-5 md:mx-20 mb-20">
        <div className="bg-black text-white p-5 md:w-[450px]">
          <img className="w-full" src={zzz1} alt="error" />
          <div className="mt-3">
            <h5 className="text-lg">PlayStation 5</h5>
            <small className="block">Black and White version of the PS5 coming out on sale.</small>
            <button className="underline hover:text-blue-400 mt-2">Shop Now</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <div className="relative">
            <img className="w-full h-auto object-cover" src={zzz2} alt="error" />
            <div className="absolute bottom-5 left-5 text-white">
              <h5 className="text-lg">Women&#39;s Collections</h5>
              <small className="block">Featured woman collections that give you another vibe.</small>
              <button className="underline hover:text-blue-400 mt-2">Shop Now</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-black text-white p-5">
              <img className="w-full" src={zzz3} alt="error" />
              <div className="mt-3">
                <h5 className="text-lg">Women&#39;s Collections</h5>
                <small className="block">Featured woman collections that give you another vibe.</small>
                <button className="underline hover:text-blue-400 mt-2">Shop Now</button>
              </div>
            </div>
            <div className="bg-black text-white p-5">
              <img className="w-full" src={zzz4} alt="error" />
              <div className="mt-3">
                <h5 className="text-lg">Women&#39;s Collections</h5>
                <small className="block">Featured woman collections that give you another vibe.</small>
                <button className="underline hover:text-blue-400 mt-2">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="flex flex-wrap justify-center gap-10 my-15">
        <div className="text-center">
          <img className="w-16 mx-auto" src={about1} alt="error" />
          <h2 className="pt-3 text-lg font-bold">FREE AND FAST DELIVERY</h2>
          <h5 className="text-sm text-gray-500">Free delivery for all orders over $140</h5>
        </div>
        <div className="text-center">
          <img className="w-16 mx-auto" src={about2} alt="error" />
          <h2 className="pt-3 text-lg font-bold">24/7 CUSTOMER SERVICE</h2>
          <h5 className="text-sm text-gray-500">Friendly 24/7 customer support</h5>
        </div>
        <div className="text-center">
          <img className="w-16 mx-auto" src={about3} alt="error" />
          <h2 className="pt-3 text-lg font-bold">MONEY BACK GUARANTEE</h2>
          <h5 className="text-sm text-gray-500">We return money within 30 days</h5>
        </div>
      </div>
    </>
  );
}

export default Home;
