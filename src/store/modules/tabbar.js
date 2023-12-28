import { createSlice } from "@reduxjs/toolkit";
import Taro from "@tarojs/taro";

const initialState = {
  activePage: "/pages/index/index"
};

const tabbarSlice = createSlice({
  name: "tabbar",
  initialState,
  reducers: {
    updateActivePage: (state, action) => {
      state.activePage = action.payload;
      Taro.switchTab({
        url: action.payload
      });
    }
  }
});

export const { updateActivePage } = tabbarSlice.actions;
export const tabbarSelector = {
  activePage: (state) => state.tabbar.activePage
};
export default tabbarSlice.reducer;
