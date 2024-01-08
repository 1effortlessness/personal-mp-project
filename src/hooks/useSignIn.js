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

export const useSignIn = (isInit = false) => {
  const dispatch = useDispatch();
  const { gotoMedicineTab, gotoWorkSpaceTab, gotoMyTab } = useSwitchTab();

  // 医生/患者 获取申请记录
  const { run: getApplyMedicineMaterialsReview } = useRequest(
    apis.medicine.getApplyMedicineMaterialsReview,
    {
      manual: true
    }
  );

  // 获取用户基本信息
  const { run: getUserMeInfo } = useRequest(apis.user.getUserMeInfo, {
    manual: true,
    async onSuccess(res, [_role]) {
      if (_role === "doctor") {
        dispatch(setDoctorBasicInfo(res.result));
        getApplyMedicineMaterialsReview(_role);
        !isInit && gotoMedicineTab();
      }

      if (_role === "patient") {
        dispatch(setPatientBasicInfo(res.result));
        getApplyMedicineMaterialsReview(_role);
        !isInit && gotoMedicineTab();
      }

      if (_role === "proxy") {
        dispatch(setProxyBasicInfo(res.result));
        !isInit && gotoMyTab();
      }

      if (_role === "worker") {
        dispatch(setWorkerBasicInfo(res.result));
        !isInit && gotoWorkSpaceTab();
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
