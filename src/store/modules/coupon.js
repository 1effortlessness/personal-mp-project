import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  couponData: {}
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    setCouponData: (state, action) => {
      state.couponData = action.payload;
    }
  }
});

export const { setCouponData } = couponSlice.actions;
export const couponSelector = {
  couponData: (state) => state.coupon.couponData
};
export default couponSlice.reducer;
