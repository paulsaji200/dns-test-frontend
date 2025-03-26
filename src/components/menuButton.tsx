import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import api from "../utils/axios";
import { setMenuData } from "../redux/menuSlice";

interface MenuItem {
  _id?: string;
  name: string;
  description: string;
  price: string;
}

interface Menu {
  _id: string;
  name: string;
  items: MenuItem[];
}

const MenuTabs = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMenus = async () => {
      try {
     const response = await api.get<Menu[]>("menus");


        if (response.data.length > 0) {
          setMenus(response.data);
          setActiveTab(response.data[0].name);
          dispatch(setMenuData({ menuName: response.data[0].name, items: response.data[0].items }));
        }
      } catch (error) {
        console.error("Failed to fetch menus:", error);
      }
    };

    fetchMenus();
  }, [dispatch]);

  const handleTabClick = (menu: Menu) => {
    setActiveTab(menu.name);
    dispatch(setMenuData({ menuName: menu.name, items: menu.items }));
  };

  return (
    <div
      className="relative py-4 w-full"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dasqrolmh/image/upload/v1742906046/d875fd6fec8f3801ba095cc39be0e4b1_gyhwgb.png")',
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

    
      <div className="relative z-10 flex flex-wrap justify-center gap-3 md:gap-6 px-4">
        {menus.length === 0 ? (
          <p className="text-gray-400">No menus found.</p>
        ) : (
          menus.map((menu) => (
            <span
            key={menu._id}
            onClick={() => handleTabClick(menu)}
            className={`cursor-pointer border border-blue-600 px-3 md:px-5 py-2 text-sm md:text-base
              ${
                activeTab === menu.name
                  ? "bg-blue-500 text-white font-bold border-blue-600"
                  : "bg-black text-white border-blue-600 hover:bg-blue-400 hover:text-white transition"
              }
            `}
          >
            {menu.name}
          </span>
          
          ))
        )}
      </div>
    </div>
  );
};

export default MenuTabs;
