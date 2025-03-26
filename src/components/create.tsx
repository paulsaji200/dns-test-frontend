import { useState, useEffect } from "react";
import axios from "axios";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface Menu {
  _id: string;
  name: string;
  description: string;
  items: MenuItem[];
}

const MenuManagement = () => {
  const [menus, setMenus] = useState<Menu[]>([]);
  const [menuName, setMenuName] = useState<string>("");
  const [menuDescription, setMenuDescription] = useState<string>("");
  const [newItem, setNewItem] = useState<MenuItem>({ name: "", description: "", price: "" });
  const [selectedMenuId, setSelectedMenuId] = useState<string | null>(null);
  const [message, setMessage] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  
  useEffect(() => {
    fetchMenus();
  }, []);

  const fetchMenus = async () => {
    try {
      const response = await axios.get<Menu[]>("http://localhost:5000/api/menus");
      
      console.log()
      setMenus(response.data);
    } catch (error) {
      console.error("Failed to fetch menus", error);
    }
  };

  const handleCreateMenu = async () => {
    if (!menuName.trim() || !menuDescription.trim()) {
      setMessage("❌ Menu name and description are required!");
      return;
    }

    try {
      const response = await axios.post<Menu>("http://localhost:5000/api/menus", {
        name: menuName,
        description: menuDescription,
      });

      setMenus([...menus, response.data]);
      setMenuName("");
      setMenuDescription("");
      setMessage("✅ Menu created successfully!");
    } catch (error) {
      setMessage("❌ Failed to create menu.");
      console.error(error);
    }
  };

 
  const openAddItemModal = (menuId: string) => {
    setSelectedMenuId(menuId);
    setShowModal(true);
  };

 
  const addItemToMenu = async () => {
    if (!newItem.name.trim() || !newItem.description.trim() || !newItem.price.trim()) {
      setMessage(" All item fields are required!");
      return;
    }

    if (!selectedMenuId) return;

    try {
      const response = await axios.post<{ data: { items: MenuItem[] } }>(
        `http://localhost:5000/api/menus/addItem?id=${selectedMenuId}`,
        newItem
      );

      setMenus(
        menus.map((menu) =>
          menu._id === selectedMenuId ? { ...menu, items: response.data.data.items } : menu
        )
      );

      setNewItem({ name: "", description: "", price: "" });
      setShowModal(false);
      setMessage("✅ Item added successfully!");
    } catch (error) {
      setMessage("❌ Failed to add item.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-black text-white">
      <h2 className="text-2xl font-bold mb-4">Create a New Menu</h2>
      
      {/* Success/Error Message */}
      {message && <div className="mb-4 p-2 bg-gray-800 text-green-400 rounded">{message}</div>}

      {/* Menu Creation Form */}
      <div className="space-y-4 bg-gray-900 p-4 rounded mb-6">
        <input
          type="text"
          placeholder="Menu Name"
          value={menuName}
          onChange={(e) => setMenuName(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />
        <textarea
          placeholder="Menu Description"
          value={menuDescription}
          onChange={(e) => setMenuDescription(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 border border-gray-600"
        />
        <button
          onClick={handleCreateMenu}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
        >
          Create Menu
        </button>
      </div>

     
      <h2 className="text-xl font-bold mt-6">Existing Menus</h2>
      {menus.length === 0 ? (
        <p className="text-gray-400">No menus created yet.</p>
      ) : (
        menus.map((menu) => (
          <div key={menu._id} className="bg-gray-800 p-4 rounded mb-6">
            <h3 className="text-lg font-semibold">{menu.name}</h3>
            <p className="text-gray-400">{menu.description}</p>

            
            <ul className="mt-2 space-y-2">
              {menu.items.length === 0 ? (
                <p className="text-gray-400">No items added yet.</p>
              ) : (
                menu.items.map((item, index) => (
                  <li key={index} className="bg-gray-700 p-2 rounded">
                    <span className="font-bold">{item.name}</span> - {item.description} (${item.price})
                  </li>
                ))
              )}
            </ul>

        
            <button
              onClick={() => openAddItemModal(menu._id)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full mt-2"
            >
              + Add Item
            </button>
          </div>
        ))
      )}

      
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Add Item</h3>

            <input
              type="text"
              placeholder="Item Name"
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 mb-2"
            />
            <textarea
              placeholder="Item Description"
              value={newItem.description}
              onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 mb-2"
            />
            <input
              type="number"
              placeholder="Item Price"
              value={newItem.price}
              onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
              className="w-full p-2 rounded bg-gray-800 border border-gray-600 mb-4"
            />

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={addItemToMenu}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuManagement;
