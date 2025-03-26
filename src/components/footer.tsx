import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">

       
        <div className="relative border border-gray-600 rounded-lg p-6 flex flex-col items-center justify-center text-center order-1 md:order-2">
         
          <div className="absolute -top-9 flex justify-center">
            <img
              src="https://res.cloudinary.com/dasqrolmh/image/upload/v1742957749/Logo_cvoqiq.png"
              alt="Deep Net Soft Logo"
              className="w-30 h-20"
            />
          </div>

     
          <div className="mt-16">
            <h2 className="text-lg font-semibold">
              <span className="text-blue-500 ">DEEP</span>{" "}
              <span className="text-white">NET</span>{" "}
              <span className="text-gray-400">SOFT</span>
            </h2>
            <div className="flex space-x-4 text-gray-400 text-sm mt-3">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

     
        <div className="border border-gray-600 rounded-lg p-6 flex flex-col items-center justify-center text-center text-gray-300 order-2 md:order-1">
          <h4 className="text-blue-500 font-semibold text-sm mb-2 uppercase">Connect With Us</h4>
          <div className="flex items-center space-x-3">
            <Phone size={16} className="text-yellow-500" />
            <span>+91 9567843340</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail size={16} className="text-yellow-500" />
            <span>info@deepnetsoft.com</span>
          </div>
        </div>

       
        <div className="border border-gray-600 rounded-lg p-6 flex flex-col items-center justify-center text-center text-gray-300 order-3">
          <h4 className="text-blue-500 font-semibold text-sm mb-2 uppercase">Find Us</h4>
          <div className="flex items-center space-x-3">
            <MapPin size={16} className="text-yellow-500" />
            <span>
              First Floor, Geo Infopark, <br />
              Infopark EXPY, Kakkanad
            </span>
          </div>
        </div>
      </div>

      
      <div className="text-center text-gray-500 mt-10 text-xs border-t border-gray-800 pt-4">
        <p>
          © 2024 Deep Net Soft. All rights reserved.
          <span className="block md:inline ml-2">
            <a href="#" className="hover:text-white mr-2">Terms & Conditions</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
