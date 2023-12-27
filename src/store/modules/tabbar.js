import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activePage: "/pages/index/index"
};

const tabbarSlice = createSlice({
  name: "tabbar",
  initialState,
  reducers: {
    updateActivePage: (state, action) => {
      state.activePage = action.payload;
    }
  }
});

export const { updateActivePage } = tabbarSlice.actions;
export const tabbarSelector = {
  activePage: (state) => state.tabbar.activePage
};
export default tabbarSlice.reducer;
