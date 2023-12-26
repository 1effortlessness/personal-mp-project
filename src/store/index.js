import { configureStore } from "@reduxjs/toolkit";
import auth from "./modules/auth";
import tabbar from "./modules/tabbar";
// redux root file
const store = configureStore({
  reducer: {
    auth,
    tabbar,
  },
});
export default store;
