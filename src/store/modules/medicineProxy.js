import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  proxyAccount: {
    mobile: "",
    password: ""
  },
  proxyFromRole: undefined
};

const proxySlice = createSlice({
  name: "tabbar",
  initialState,
  reducers: {
    setProxyAccountInfo: (state, { payload }) => {
      state.proxyAccount = payload;
    },
    setProxyFromRole: (state, { payload }) => {
      state.proxyFromRole = payload;
    }
  }
});

export const { setProxyAccountInfo, setProxyFromRole } = proxySlice.actions;
export const proxySelector = {
  proxyAccountInfo: (state) => state.medicineProxy.proxyAccount,
  proxyFromRole: (state) => state.medicineProxy.proxyFromRole
};
export default proxySlice.reducer;
