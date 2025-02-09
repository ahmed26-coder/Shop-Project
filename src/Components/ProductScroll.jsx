import { useRef, useState } from "react";
import { FaArrowRight, FaHeart, FaEye, FaTimes } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";
import home3 from "../assets/home3.png";
import home4 from "../assets/home4.png";

const ProductScroll = () => {
  const scrollRef = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const openImagePopup = (product) => {
    setSelectedProduct(product);
  };

  const closeImagePopup = () => {
    setSelectedProduct(null);
  };

  const products = [
    { id: 1, img: home1, name: "HAVIT HV-G92 Gamepad", price: "$120", oldPrice: "$160" },
    { id: 2, img: home2, name: "AK-900 Wired Keyboard", price: "$960", oldPrice: "$1160" },
    { id: 3, img: home3, name: "IPS LCD Gaming Monitor", price: "$370", oldPrice: "$400" },
    { id: 4, img: home4, name: "S-Series Comfort Chair", price: "$375", oldPrice: "$400" },
    { id: 5, img: home1, name: "HAVIT HV-G92 Gamepad", price: "$120", oldPrice: "$160" },
    { id: 6, img: home2, name: "AK-900 Wired Keyboard", price: "$960", oldPrice: "$1160" },
    { id: 7, img: home3, name: "IPS LCD Gaming Monitor", price: "$370", oldPrice: "$400" },
    { id: 8, img: home4, name: "S-Series Comfort Chair", price: "$375", oldPrice: "$400" },
  ];

  return (
    <div className="relative mt-10 flex items-center justify-center">
      <button className="absolute left-5 p-3 bg-gray-100 rounded-full shadow-lg hover:bg-gray-200 z-10" onClick={() => scroll("left")}>
        <FaArrowRight size={24} className="rotate-180" />
      </button>
      <div ref={scrollRef} className="flex overflow-x-scroll scrollbar-hide scroll-smooth w-[85%] gap-6"
  style={{
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  }}
>
        {products.map((product) => (
          <article key={product.id} className="relative w-[300px] group p-3">
            <div className="relative bg-gray-200 rounded-lg overflow-hidden">
              <img src={product.img} alt={product.name} className="w-full h-[250px] object-cover" />
              <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 cursor-pointer">
                  <FaHeart className="text-red-500" />
                </button>
                <button onClick={() => openImagePopup(product)} className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 cursor-pointer">
                  <FaEye className="text-gray-700" />
                </button>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-black text-white text-center py-2 opacity-0 group-hover:opacity-100 transition duration-300">
                Add to Cart
              </div>
            </div>
            <h3 className="text-lg font-bold mt-3 text-center w-[250px]">{product.name}</h3>
            <div className="flex justify-center items-center gap-15 mt-2">
              <p className="text-red-500 text-lg font-semibold">{product.price}</p>
              <p className="text-gray-400 line-through text-sm">{product.oldPrice}</p>
            </div>
            <div className="flex justify-center gap-1 text-amber-300 mt-3">
              {[...Array(5)].map((_, index) => <IoIosStar key={index} />)}
            </div>

          </article>
        ))}
      </div>
      <button className="absolute right-5 p-3 bg-gray-100 rounded-full shadow-lg hover:bg-gray-200 z-10" onClick={() => scroll("right")}>
        <FaArrowRight size={24} />
      </button>
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg relative w-[50%]">
            <button className="absolute top-3 right-3 text-gray-700 text-2xl hover:text-red-500 cursor-pointer" onClick={closeImagePopup}>
              <FaTimes />
            </button>
            <img src={selectedProduct.img} alt={selectedProduct.name} className="w-full h-[500px] object-cover rounded-lg" />
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductScroll;
