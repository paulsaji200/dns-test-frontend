import { Link } from "react-router-dom";

const MenuHeader = () => {
  return (
    <div
      className="relative bg-cover bg-top h-[40vh] flex flex-col items-center justify-center text-center px-4"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dasqrolmh/image/upload/v1742906056/f81b6208cb3da0f5ecc0f0d109ca4bd0_br9oto.jpg")',
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(0,0,0,0.7)",
      }}
    >
   
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4">
        <Link to="/create-menu">
          <button className="bg-white text-black px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold hover:bg-gray-200 transition duration-300">
            Create Menu
          </button>
        </Link>
      </div>

  
      <h1 className="text-3xl sm:text-5xl font-extrabold text-red-600 relative tracking-wider inline-block">
        <span className="absolute -left-0.5 -top-0.5 text-white drop-shadow-lg">
          MENU
        </span>
        MENU
      </h1>

      
      <p className="font-pixel text-[#b0b0b0] text-sm sm:text-base tracking-tight leading-snug w-full text-center">
  Please take a look at our menu featuring food, drinks, and brunch.<br />
  If you'd like to place an order, use the "Order Online" button located below the menu.
</p>
    </div>
  );
};

export default MenuHeader;
