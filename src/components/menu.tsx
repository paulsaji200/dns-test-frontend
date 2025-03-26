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

     
      <h1 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4 tracking-wider">MENU</h1>

      
      <p className="text-xs sm:text-base text-gray-300 max-w-2xl px-2 sm:px-4">
        Please take a look at our menu featuring our delicious food, drinks, and brunch. If you'd like to place an
        order, click the "Order Online" button located below the menu.
      </p>
    </div>
  );
};

export default MenuHeader;
