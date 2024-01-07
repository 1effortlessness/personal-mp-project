import PageWithTabBar from "@/components/PageWithTabBar";
import NoPermissionGetMedicine from "./components/NoPermissionGetMedicine";
import DoctorMedicineOperation from "./components/DoctorMedicineOperation";
import PatientMedicineOperation from "./components/PatientMedicineOperation";
import { useSelector } from "react-redux";
import { userSelector } from "src/store/modules/user";
import { useCallback } from "react";
import SelectSignInRole from "src/components/SelectSignInRole";
import Taro from "@tarojs/taro";
import shareImage from "src/assets/images/shareImage.png";
import ApplyMedicineReviewResult from "./components/ApplyMedicineReviewResult";
// eslint-disable-next-line no-undef
definePageConfig({
  navigationBarTitleText: "领药",
  enableShareAppMessage: true
});

const Medicine = () => {
  // 分享参数设置
  Taro.useShareAppMessage((res) => {
    let title = "活动转赠";
    let path = "proxy-packages/AcceptProxy/index?token=test&fromRole=doctor";

    if (res?.target?.id === "代操作") {
      title = "活动授权代操作";
      path = "proxy-packages/AcceptProxy/index?token=test&fromRole=doctor";
    }

    if (res?.target?.id === "转赠") {
      title = "活动转赠";
      path =
        "patient-packages/AcceptGiftMedicine/index?token=test&fromRole=doctor";
    }
    return {
      title,
      path,
      imageUrl: shareImage
    };
  });
  const currentRole = useSelector(userSelector.currentRole);
  const isLogin = useSelector(userSelector.isLogin);
  const DisplayComp = useCallback(() => {
    return <ApplyMedicineReviewResult />;
    if (!isLogin) {
      return <SelectSignInRole />;
    }
    if (currentRole === "doctor") return <DoctorMedicineOperation />;
    if (currentRole === "patient") return <PatientMedicineOperation />;

    return <NoPermissionGetMedicine />;
  }, [currentRole, isLogin]);
  return (
    <PageWithTabBar>
      <DisplayComp />
      {/* <ColdChainInformedConsentDialog /> */}
    </PageWithTabBar>
  );
};

export default Medicine;
