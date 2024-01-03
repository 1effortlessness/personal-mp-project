import { useDispatch } from "react-redux";
import { updateActivePage } from "@/store/modules/tabbar";

export const useSwitchTab = () => {
  const dispatch = useDispatch();
  const gotoHomeTab = () => {
    dispatch(updateActivePage("/pages/index/index"));
  };

  const gotoMedicineTab = () => {
    dispatch(updateActivePage("/pages/Medicine/index"));
  };
  const gotoMyTab = () => {
    dispatch(updateActivePage("/pages/My/index"));
  };
  const gotoCertificateTab = () => {
    dispatch(updateActivePage("/pages/Certificate/index"));
  };

  return {
    gotoHomeTab,
    gotoMedicineTab,
    gotoMyTab,
    gotoCertificateTab
  };
};