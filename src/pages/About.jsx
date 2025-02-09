import aboutimg from "../assets/aboutimg.png";
import aboutbag from "../assets/aboutbag.png";
import aboutmoney from "../assets/aboutmoney.png";
import aboutshop from "../assets/aboutshop.png";
import bagmoney from "../assets/bagmoney.png";
import peeple1 from "../assets/peeple1.png";
import peeple2 from "../assets/peeple2.png";
import peeple3 from "../assets/peeple3.png";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";

function About() {
  return (
    <>
      <div className="flex flex-col lg:flex-row mt-10 items-center lg:items-start">
        <div className="lg:ml-40 lg:mr-30 mt-10 lg:mt-40 px-5 text-center lg:text-left">
          <h1 className="text-4xl font-bold pb-3">Our Story</h1>
          <p className="text-base text-gray-700">
            Launched in 2015, Exclusive is South Asia&#39;s premier online shopping marketplace with an active presence in Bangladesh.
            Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
          </p>
          <p className="text-base pt-5 text-gray-700">
            Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer.
          </p>
        </div>
        <img className="w-full rounded-3xl lg:w-auto lg:rounded-l-3xl lg:-mr-6 my-[5vw]" src={aboutimg} alt="Our Story" />
      </div>
      
      <div className="mt-20 flex flex-wrap justify-center gap-6 px-5">
        {[{ img: aboutshop, count: "10.5k", text: "Sellers active on our site" },
          { img: aboutmoney, count: "33k", text: "Monthly Product Sale" },
          { img: aboutbag, count: "45.5k", text: "Customers active on our site" },
          { img: bagmoney, count: "25k", text: "Annual gross sale on our site" }].map((item, index) => (
            <div key={index} className="border-2 border-gray-400 rounded-sm hover:bg-red-500 hover:text-white w-40 sm:w-50 h-35 flex flex-col items-center p-4 hover:border-red-500 hover:shadow-lg hover:shadow-gray-400">
              <img className="w-[25%] mx-auto" src={item.img} alt="Icon" />
              <h2 className="text-2xl font-bold text-center mt-2">{item.count}</h2>
              <small className="pt-2 text-center">{item.text}</small>
            </div>
        ))}
      </div>
      
      <div className="flex overflow-x-scroll my-[5vw] scrollbar-hide scroll-smooth w-[85%] gap-6 px-5 mx-auto">
        {[{ img: peeple1, name: "Tom Cruise", role: "Founder & Chairman" },
          { img: peeple2, name: "Emma Watson", role: "Managing Director" },
          { img: peeple3, name: "Will Smith", role: "Product Designer" }].map((person, index) => (
            <div key={index} className="min-w-[250px] bg-white rounded-lg p-4 text-center">
              <img src={person.img} alt={person.name} />
              <h3 className="text-xl font-bold mt-4">{person.name}</h3>
              <p className="text-gray-500">{person.role}</p>
              <div className="flex gap-5 mt-3 text-2xl justify-center">
                <FaTwitter />
                <FaInstagram />
                <FaLinkedinIn />
              </div>
            </div>
        ))}
      </div>
      
      <div className="flex flex-wrap justify-center gap-10 my-10 px-5 text-center">
        {[{ img: about1, title: "FREE AND FAST DELIVERY", desc: "Free delivery for all orders over $140" },
          { img: about2, title: "24/7 CUSTOMER SERVICE", desc: "Friendly 24/7 customer support" },
          { img: about3, title: "MONEY BACK GUARANTEE", desc: "We return money within 30 days" }].map((service, index) => (
            <div key={index} className="w-full sm:w-1/3">
              <img className="w-[25%] mx-auto" src={service.img} alt={service.title} />
              <h2 className="text-lg font-bold pt-3">{service.title}</h2>
              <h5 className="text-sm text-gray-500">{service.desc}</h5>
            </div>
        ))}
      </div>
    </>
  );
}

export default About;
