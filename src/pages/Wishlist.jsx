import { MdStarRate } from "react-icons/md";
import fff1 from "../assets/fff1.png";
import fff2 from "../assets/fff2.png";
import fff3 from "../assets/fff3.png";
import xxx1 from "../assets/xxx1.png";
import xxx2 from "../assets/xxx3.png";
import xxx3 from "../assets/xxx4.png";
import xxx4 from "../assets/xxx5.png";
import xxx5 from "../assets/xxx6.png";
import xxx6 from "../assets/xxx7.png";
import xxx7 from "../assets/xxx8.png";
import aaa2 from "../assets/aaa2.png";

function Wishlist() {
  const DataProduct = [
    { id: 1, img: fff1, name: "HAVIT HV-G92 Gamepad", price: "$120" },
    { id: 2, img: fff2, name: "AK-900 Wired Keyboard", price: "$960" },
    { id: 3, img: fff3, name: "IPS LCD Gaming Monitor", price: "$370" },
    { id: 5, img: xxx1, name: "Breed Dry Dog Food", price: "$100" },
    { id: 6, img: xxx3, name: "CANON EOS DSLR Camera", price: "$360" },
    { id: 7, img: aaa2, name: "ASUS FHD Gaming Laptop", price: "$700" },
    { id: 8, img: xxx4, name: "Curology Product Set ", price: "$500" },
    { id: 9, img: xxx5, name: "Kids Electric Car", price: "$960" },
    { id: 10, img: xxx6, name: "Jr. Zoom Soccer Cleats", price: "$1160" },
    { id: 11, img: xxx7, name: "GP11 Shooter USB Gamepad", price: "$660" },
    { id: 12, img: xxx2, name: "Quilted Satin Jacket", price: "$660" }
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between mx-5 md:mx-25 items-center md:items-start">
        <div className="flex gap-3 items-center">
          <div className="w-4 h-10 bg-red-500 rounded-2xl"></div>
          <p className="text-red-500 font-bold">Just For You</p>
        </div>
        <button className="text-lg border-2 rounded-md h-[45px] px-8 hover:bg-black hover:text-white mt-4 md:mt-0">
          See All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-5 md:mx-20 my-10">
        {DataProduct.map((item) => (
          <article key={item.id} className="text-center bg-white p-5 shadow-md rounded-lg">
            <img className="mx-auto w-full h-40 object-contain" src={item.img} alt={item.name} />
            <h3 className="mt-2 font-semibold">{item.name}</h3>
            <p className="text-red-500 font-bold">{item.price}</p>
            <div className="flex justify-center gap-1 text-amber-300">
              {[...Array(5)].map((_, i) => (
                <MdStarRate key={i} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}

export default Wishlist;
