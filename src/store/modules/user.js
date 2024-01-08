import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basicInfo: {
    doctor: {},
    patient: {},
    worker: {},
    proxy: {}
  },

  isLogin: false,
  currentRole: "doctor",
  reviewStatus: undefined,
  materialsReviewInfo: undefined
};

const userSlice = createSlice({
  name: "tabbar",
  initialState,
  reducers: {
    setDoctorBasicInfo: (state, { payload }) => {
      state.basicInfo.doctor = payload;
      state.currentRole = "doctor";
      state.isLogin = true;
    },
    setPatientBasicInfo: (state, { payload }) => {
      state.basicInfo.patient = payload;
      state.currentRole = "patient";
      state.isLogin = true;
    },
    setWorkerBasicInfo: (state, { payload }) => {
      state.basicInfo.worker = payload;
      state.currentRole = "worker";
      state.isLogin = true;
    },
    setProxyBasicInfo: (state, { payload }) => {
      state.basicInfo.proxy = payload;
      state.currentRole = "proxy";
      state.isLogin = true;
    },

    setMaterialsReviewInfo: (state, { payload }) => {
      state.materialsReviewInfo = payload;
    },
    logout: () => {
      return initialState;
    }
  }
});

export const {
  setDoctorBasicInfo,
  setPatientBasicInfo,
  setWorkerBasicInfo,
  setProxyBasicInfo,
  logout
} = userSlice.actions;
export const userSelector = {
  doctor: (state) => state.user.basicInfo.doctor,
  currentRole: (state) => state.user.currentRole,
  isLogin: (state) => state.user.isLogin,
  currentRoleBasicInfo: (state) => {
    return state.user.basicInfo[state.user.currentRole];
  },
  materialsReviewInfo: (state) => state.user.materialsReviewInfo
};
export default userSlice.reducer;
