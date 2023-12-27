import { View } from "@tarojs/components";
import PageWithTabBar from "@/components/PageWithTabBar";
import NoPermissionGetMedicine from "./components/NoPermissionGetMedicine";
import ApplyMedicine from "./components/ApplyMedicine";
import ConversionPatient from "./components/ConversionPatient";
import AcceptConversionMedicine from "./components/AcceptConversionMedicine";
import CancelConversionMedicine from "./components/CancelConversionMedicine";

definePageConfig({
  navigationBarTitleText: "领药"
});

const Medicine = () => {
  return (
    <PageWithTabBar>
      <NoPermissionGetMedicine />
    </PageWithTabBar>
  );
};

export default Medicine;
