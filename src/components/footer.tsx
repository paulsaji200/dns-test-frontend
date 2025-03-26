import { MapPin, Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">

        {/* Left Section */}
        <div className="border border-gray-600 rounded-lg p-6 flex flex-col items-start space-y-3 text-gray-300">
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

        {/* Middle Section (Modified to match the reference) */}
        <div className="relative border border-gray-600 rounded-lg p-6 flex flex-col items-center space-y-3 text-center">
          {/* Logo Positioned Half Inside & Half Outside */}
          <div className="absolute -top-9 flex justify-center">
            <img
              src="https://res.cloudinary.com/dasqrolmh/image/upload/v1742957749/Logo_cvoqiq.png"
              alt="Deep Net Soft Logo"
              className="w-30 h-20"
            />
          </div>

          {/* Text Section */}
          <div className="mt-30">
            <h2 className="text-lg font-semibold pt-6">
              <span className="text-blue-500 ">DEEP</span>{" "}
              <span className="text-white">NET</span>{" "}
              <span className="text-gray-400">SOFT</span>
            </h2>
            <div className="pr-6 flex space-x-4 text-gray-400 pl-7 text-sm mt-3">
              <FaFacebookF className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="border border-gray-600 rounded-lg p-6 flex flex-col items-start space-y-3 text-gray-300">
          <h4 className="text-blue-500 font-semibold text-sm mb-2 uppercase">Find Us</h4>
          <div className="flex items-start space-x-3">
            <MapPin size={16} className="text-yellow-500" />
            <span>
              First Floor, Geo Infopark, <br />
              Infopark EXPY, Kakkanad
            </span>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
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
