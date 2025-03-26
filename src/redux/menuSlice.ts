import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MenuItem {
  _id?: string;
  name: string;
  description: string;
  price: string;
}

interface MenuState {
  menuName: string;  
  items: MenuItem[];
}

const initialState: MenuState = {
  menuName: "", 
  items: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuData: (state, action: PayloadAction<{ menuName: string; items: MenuItem[] }>) => {
      state.menuName = action.payload.menuName; 
      state.items = action.payload.items; 
    },
  },
});

export const { setMenuData } = menuSlice.actions;
export default menuSlice.reducer;
