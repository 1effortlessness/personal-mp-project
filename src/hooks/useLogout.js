import { useDispatch } from "react-redux";
import { useSwitchTab } from "src/components/CustomTabBar/useSwitchTab";
import { logout } from "src/store/modules/user";
import utils from "src/utils";

export const useLogout = () => {
  const dispatch = useDispatch();
  const { gotoHomeTab } = useSwitchTab();
  const logoutHandler = () => {
    dispatch(logout());
    utils.storage.clearAuth();
    gotoHomeTab();
  };

  return { logoutHandler };
};
