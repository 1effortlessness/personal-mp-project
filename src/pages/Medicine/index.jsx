import shareImage from "src/assets/images/shareImage.png";
import PageWithTabBar from "@/components/PageWithTabBar";
import NoPermissionGetMedicine from "./components/NoPermissionGetMedicine";
import DoctorMedicineOperation from "./components/DoctorMedicineOperation";
import PatientMedicineOperation from "./components/PatientMedicineOperation";
import { useSelector } from "react-redux";
import { userSelector } from "src/store/modules/user";
import { useCallback } from "react";
import SelectSignInRole from "src/components/SelectSignInRole";
import Taro from "@tarojs/taro";
import ApplyMedicineReviewResult from "./components/ApplyMedicineReviewResult";
import utils from "src/utils";
// eslint-disable-next-line no-undef
definePageConfig({
  navigationBarTitleText: "领药",
  enableShareAppMessage: true
});

const Medicine = () => {
  // 分享参数设置
  Taro.useShareAppMessage(async (res) => {
    const token = await utils.storage.getToken();
    const tokenRole = await utils.storage.getTokenRole();
    let title = "活动转赠";
    let path = `patient-packages/AcceptGiftMedicine/index?token=${token}&fromRole=${tokenRole}`;
    if (res?.target?.id === "代操作") {
      title = "活动授权代操作";
      path = `proxy-packages/AcceptProxy/index?token=${token}&fromRole=${tokenRole}`;
    }

    if (res?.target?.id === "转赠") {
      title = "活动转赠";
      path = `patient-packages/AcceptGiftMedicine/index?token=${token}&fromRole=${tokenRole}`;
    }
    return {
      title,
      path,
      imageUrl: shareImage
    };
  });

  const currentRole = useSelector(userSelector.currentRole);
  const currentRoleBasicInfo = useSelector(userSelector.currentRoleBasicInfo);
  const materialsReviewInfo = useSelector(userSelector.materialsReviewInfo);
  const isLogin = useSelector(userSelector.isLogin);
  const DisplayComp = useCallback(() => {
    if (!isLogin) return <SelectSignInRole />;
    if (!currentRoleBasicInfo?.enabled) return <NoPermissionGetMedicine />;
    if (materialsReviewInfo) return <ApplyMedicineReviewResult />;
    if (currentRole === "doctor") return <DoctorMedicineOperation />;
    if (currentRole === "patient") return <PatientMedicineOperation />;

    return <NoPermissionGetMedicine />;
  }, [
    currentRole,
    currentRoleBasicInfo?.enabled,
    isLogin,
    materialsReviewInfo
  ]);
  return (
    <PageWithTabBar>
      <DisplayComp />
      {/* <ColdChainInformedConsentDialog /> */}
    </PageWithTabBar>
  );
};

export default Medicine;
