import { configureStore } from "@reduxjs/toolkit";
import auth from "./modules/auth";
import tabbar from "./modules/tabbar";
import user from "./modules/user";
import medicineProxy from "./modules/medicineProxy";
// redux root file
const store = configureStore({
  reducer: {
    auth,
    tabbar,
    user,
    medicineProxy
  }
});
export default store;
