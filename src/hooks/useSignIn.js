import apis from "src/apis";
import { useSwitchTab } from "src/components/CustomTabBar/useSwitchTab";
import utils from "src/utils";
import { useRequest } from "taro-hooks";
import { useDispatch } from "react-redux";
import {
  setDoctorBasicInfo,
  setPatientBasicInfo,
  setProxyBasicInfo,
  setWorkerBasicInfo
} from "src/store/modules/user";

export const useSignIn = () => {
  const dispatch = useDispatch();
  const { gotoMedicineTab } = useSwitchTab();

  // 获取用户基本信息
  const { run: getUserMeInfo } = useRequest(apis.user.getUserMeInfo, {
    manual: true,
    onSuccess(res, [_role, autoJump]) {
      if (_role === "doctor") {
        dispatch(setDoctorBasicInfo(res.result));
      }

      if (_role === "patient") {
        dispatch(setPatientBasicInfo(res.result));
      }

      if (_role === "proxy") {
        dispatch(setProxyBasicInfo(res.result));
      }

      if (_role === "worker") {
        dispatch(setWorkerBasicInfo(res.result));
      }
      if (autoJump !== "close") {
        gotoMedicineTab();
      }
    }
  });

  // 微信PhoneCode 快捷登录
  const { run: wxPhoneCodeLogin } = useRequest(apis.user.wxPhoneCodeLogin, {
    manual: true,
    onSuccess(res, [role]) {
      utils.storage.setToken(res.result, role);
      getUserMeInfo(role);
    }
  });

  // 通过密码登录
  const { run: byPasswordLogin } = useRequest(apis.user.byPasswordLogin, {
    manual: true,
    onSuccess(res, [role]) {
      utils.storage.setToken(res.result, role);
      getUserMeInfo(role);
    }
  });

  return {
    wxPhoneCodeLogin,
    getUserMeInfo,
    byPasswordLogin
  };
};
