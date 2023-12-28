import PageWithTabBar from "@/components/PageWithTabBar";
import NoPermissionGetMedicine from "./components/NoPermissionGetMedicine";
import ApplyMedicine from "./components/ApplyMedicine";
import ConversionPatient from "./components/ConversionPatient";
import AcceptConversionMedicine from "./components/AcceptConversionMedicine";
import CancelConversionMedicine from "./components/CancelConversionMedicine";
import GiftPatient from "./components/GiftPatient";
import ColdChainInformedConsentDialog from "./components/ColdChainInformedConsentDialog";

definePageConfig({
  navigationBarTitleText: "领药"
});

const Medicine = () => {
  return (
    <PageWithTabBar>
      <GiftPatient />
      <ColdChainInformedConsentDialog />
    </PageWithTabBar>
  );
};

export default Medicine;
