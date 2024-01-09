// eslint-disable-next-line no-undef
export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/Medicine/index",
    "pages/Certificate/index",
    "pages/My/index",
    "pages/WorkSpace/index",
    "pages/Writeoff/index"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black"
  },
  subpackages: [
    {
      root: "common-packages",
      name: "common",
      pages: ["SignIn/index"]
    },
    {
      root: "doctor-packages",
      name: "doctor",
      pages: [
        "ByPasswordSignIn/index",
        "SignUp/index",
        "ApplyMedicineInfo/index",
        "CertificateCode/index",
        "ShopSearch/index",
        "ApplyInfoSubmitSuccess/index",
        "ApplyMedicineMaterialsReview/index"
      ]
    },
    {
      root: "admin-packages",
      name: "admin",
      pages: [
        // "AdminIndex/index",
        // "AdminMy/index",
        "ReceivedDrugList/index",
        "DrugReceivedDetail/index",
        "WriteOffForm/index"
      ]
    },
    {
      root: "proxy-packages",
      name: "proxy",
      pages: [
        "ProxyGetAccountInfo/index",
        "AcceptProxy/index",
        "FollowDoctorList/index",
        "FollowDoctor/index"
      ]
    },
    {
      root: "patient-packages",
      name: "patient",
      pages: ["AcceptGiftMedicine/index"]
    }
  ],
  tabBar: {
    custom: true,
    list: [
      {
        text: "领药",
        pagePath: "pages/Medicine/index"
      },
      {
        text: "首页",
        pagePath: "pages/index/index"
      },
      {
        text: "兑换券",
        pagePath: "pages/Certificate/index"
      },
      {
        text: "我的",
        pagePath: "pages/My/index"
      },
      {
        text: "工作台",
        pagePath: "pages/WorkSpace/index"
      },
      {
        text: "核销记录",
        pagePath: "pages/Writeoff/index"
      }
    ]
  }
});
