// eslint-disable-next-line no-undef
export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/Medicine/index",
    "pages/Certificate/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  subpackages: [
    {
      root: "doctor-packages",
      name: "doctor",
      pages: [
        "PatientSignUp/index",
        "ApplyMedicineInfo/index",
        "SignIn/index",
        "CertificateCode/index",
      ],
    },
  ],
  tabBar: {
    custom: true,
    list: [
      {
        text: "领药",
        pagePath: "pages/Medicine/index",
      },
      {
        text: "首页",
        pagePath: "pages/index/index",
      },
      {
        text: "兑换券",
        pagePath: "pages/Certificate/index",
      },
    ],
  },
});
