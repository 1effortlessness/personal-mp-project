import PageWithTabBar from "@/components/PageWithTabBar";
import NoPermissionGetMedicine from "./components/NoPermissionGetMedicine";
import DoctorMedicineOperation from "./components/DoctorMedicineOperation";
import ConversionPatient from "./components/ConversionPatient";
import AcceptConversionMedicine from "./components/AcceptConversionMedicine";
import CancelConversionMedicine from "./components/CancelConversionMedicine";
import PatientMedicineOperation from "./components/PatientMedicineOperation";
import ColdChainInformedConsentDialog from "./components/ColdChainInformedConsentDialog";
import ApplyMedicineReview from "./components/ApplyMedicineReview";
import { useSelector } from "react-redux";
import { userSelector } from "src/store/modules/user";
import { useDidShow } from "@tarojs/taro";
import utils from "src/utils";
import { useCallback } from "react";

// eslint-disable-next-line no-undef
definePageConfig({
  navigationBarTitleText: "领药",
  enableShareAppMessage: true
});

const Medicine = () => {
  const currentRole = useSelector(userSelector.currentRole);
  const isLogin = useSelector(userSelector.isLogin);
  const Comp = useCallback(
    (props) => {
      if (currentRole === "doctor")
        return <DoctorMedicineOperation {...props} />;
      if (currentRole === "patient")
        return <PatientMedicineOperation {...props} />;

      return <NoPermissionGetMedicine />;
    },
    [currentRole]
  );
  return (
    <PageWithTabBar>
      <Comp />
      {/* <ColdChainInformedConsentDialog /> */}
    </PageWithTabBar>
  );
};

export default Medicine;
