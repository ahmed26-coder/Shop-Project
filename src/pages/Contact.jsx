import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

function Contact() {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:ml-20 my-10 px-5 md:px-0">
      <div className="shadow-gray-200 shadow-lg pt-8 px-10 w-full md:w-auto">
        <div>
          <h4 className="flex items-center text-2xl mb-4">
            <div className="w-10 h-10 bg-red-500 flex justify-center pt-2 rounded-full mr-2">
              <FiPhone className="text-2xl text-white" />
            </div>
            Call To Us
          </h4>
          <p className="text-sm">We are available 24/7, 7 days a week.</p>
          <p className="text-sm pt-3">Phone: +8801611112222</p>
        </div>
        <div className="border-2 border-gray-200 my-5"></div>
        <div>
          <h4 className="flex items-center">
            <div className="w-10 h-10 bg-red-500 flex justify-center pt-2 rounded-full mr-2">
              <MdOutlineMailOutline className="text-2xl text-white" />
            </div>
            Write To Us
          </h4>
          <p className="text-sm pt-5">Fill out our form and we will contact</p>
          <p className="text-sm">you within 24 hours.</p>
          <p className="text-sm pt-3">Emails: customer@exclusive.com</p>
          <p className="text-sm pt-3">Emails: support@exclusive.com</p>
        </div>
      </div>

      <form action="" className="w-full">
        <div className="shadow-lg shadow-gray-200 px-8 py-5">
          <div className="flex flex-col md:flex-row gap-5 md:gap-10">
            <input className="bg-gray-100 pl-2 py-2 px-5 rounded-lg w-full md:w-auto" type="text" placeholder="Your Name" />
            <input className="bg-gray-100 pl-2 py-2 px-5 rounded-lg w-full md:w-auto" type="email" placeholder="Your Email" />
            <input className="bg-gray-100 pl-2 py-2 px-5 rounded-lg w-full md:w-auto" type="number" placeholder="Your Phone" />
          </div>
          <div className="grid grid-cols-1 gap-5 mt-5">
            <textarea className="bg-gray-100 pt-5 pl-3 rounded-lg w-full" placeholder="Message" rows="12"></textarea>
            <button className="bg-red-400 py-2 text-white text-lg rounded-sm px-8 w-full md:w-auto">Send Message</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
