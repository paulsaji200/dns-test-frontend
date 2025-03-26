import { useState } from "react";
import { Menu } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-8 py-4">
      <div className="flex justify-between items-center">
        
        <div className="flex items-center space-x-4">
          <div className="w-30 h-10 rounded-lg overflow-hidden">
            <img
              src="https://res.cloudinary.com/dasqrolmh/image/upload/v1742906043/6860545013e0a63ba8cb7e94004971f7_zvlcad.png"
              alt="Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6">
        <span className="text-sm uppercase hover:text-blue-500 cursor-pointer">Home</span>
          <span className="text-sm uppercase hover:text-blue-500 cursor-pointer">Menu</span>
          <span className="text-sm uppercase hover:text-blue-500 cursor-pointer">Make a Reservation</span>
          <span className="text-sm uppercase hover:text-blue-500 cursor-pointer">Contact Us</span>
          
        </div>

       
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <Menu className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>


      {isOpen && (
        <div className="flex flex-col mt-4 space-y-4 md:hidden">
          <span className="text-sm uppercase hover:text-blue-500 cursor-pointer">Menu</span>
          <span className="text-sm uppercase hover:text-blue-500 cursor-pointer">Make a Reservation</span>
          <span className="text-sm uppercase hover:text-blue-500 cursor-pointer">Contact Us</span>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;

