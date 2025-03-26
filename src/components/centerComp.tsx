import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface MenuItem {
  _id?: string;
  name: string;
  description: string;
  price: string;
}

const CenterComp = () => {
  const menuName = useSelector((state: RootState) => state.menu.menuName) || "MENU"; // Get menu name
  const items = useSelector((state: RootState) => state.menu.items) || [];

  return (
    <div className="relative z-10 w-full bg-black bg-opacity-80 border border-gray-600 p-6 md:p-10 overflow-visible">
     
      <img
        src="https://res.cloudinary.com/dasqrolmh/image/upload/v1742908492/09e436820849a421ec0b1fe5126bf9b5_sjxzso.png"
        alt="Drink Left"
        className="absolute w-20 top-[-20px] left-[-10px] md:w-32 md:left-[-50px] md:top-[-120px] lg:w-44 lg:left-[-100px] lg:top-[-180px] z-20"
      />

    
      <img
        src="https://res.cloudinary.com/dasqrolmh/image/upload/v1742908493/f07a69022d4c64e313237eadaceb997f_rt4t7w.png"
        alt="Drink Right"
        className="absolute w-20 bottom-[-10px] right-[-5px] md:w-28 md:right-[-30px] md:bottom-[-40px] lg:w-36 lg:right-[-80px] lg:bottom-[-60px] z-20"
      />


      <h2 className="text-center text-2xl md:text-3xl font-bold text-red-300 mb-6 tracking-wide">
        <span className="border-t-2 border-gray-500 px-4">{menuName.toUpperCase()}</span>
      </h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-400">No items added yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 text-lg">
          {items.map((item: MenuItem, index: number) => (
            <div key={index} className="mb-4">
              
              <div className="flex items-center justify-between text-base md:text-lg">
                <span className="font-bold tracking-wide">{item.name.toUpperCase()}</span>
                <div className="flex-grow border-b border-gray-500 mx-2"></div>
                <span className="font-bold">${item.price}</span>
              </div>
         
              <p className="text-gray-400 italic text-sm md:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CenterComp;
