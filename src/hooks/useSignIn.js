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

export const useSignIn = (role) => {
  const dispatch = useDispatch();
  const { gotoMedicineTab } = useSwitchTab();

  // 医生基本信息获取
  const { run: getDoctorBasicInfo } = useRequest(apis.user.getDoctorBasicInfo, {
    manual: true,
    onSuccess(res) {
      dispatch(setDoctorBasicInfo(res.result));
      gotoMedicineTab();
    }
  });

  // 患者基本信息获取
  const { run: getPatientBasicInfo } = useRequest(
    apis.user.getPatientBasicInfo,
    {
      manual: true,
      onSuccess(res) {
        dispatch(setPatientBasicInfo(res.result));
        gotoMedicineTab();
      }
    }
  );

  // 药店工作人员基本信息获取
  const { run: getWorkerBasicInfo } = useRequest(apis.user.getWorkerBasicInfo, {
    manual: true,
    onSuccess(res) {
      dispatch(setWorkerBasicInfo(res.result));
      gotoMedicineTab();
    }
  });

  // 药代基本信息获取
  const { run: getProxyBasicInfo } = useRequest(apis.user.getProxyBasicInfo, {
    manual: true,
    onSuccess(res) {
      dispatch(setProxyBasicInfo(res.result));
      gotoMedicineTab();
    }
  });

  // 医生快捷登录
  const { run: doctorSignIn } = useRequest(apis.user.doctorWxPhoneSignIn, {
    manual: true,
    onSuccess(res) {
      utils.storage.setToken(res.result);
      getDoctorBasicInfo();
    }
  });

  // 患者快捷登录
  const { run: patientWxPhoneSignIn } = useRequest(
    apis.user.patientWxPhoneSignIn,
    {
      manual: true,
      onSuccess(res) {
        utils.storage.setToken(res.result);
        getPatientBasicInfo();
      }
    }
  );

  // 药代快捷登录
  const { run: medicineProxyWxPhoneSignIn } = useRequest(
    apis.user.medicineProxyWxPhoneSignIn,
    {
      manual: true,
      onSuccess(res) {
        utils.storage.setToken(res.result);
        getProxyBasicInfo();
      }
    }
  );

  // 药代快捷登录
  const { run: workerLoginByPassword } = useRequest(
    apis.user.workerLoginByPassword,
    {
      manual: true,
      onSuccess(res) {
        utils.storage.setToken(res.result);
        getWorkerBasicInfo();
      }
    }
  );

  // 医生代管密码登录
  const { run: doctorLoginByPassword } = useRequest(
    apis.user.doctorLoginByPassword,
    {
      manual: true,
      onSuccess(res) {
        utils.storage.setToken(res.result);
        getDoctorBasicInfo();
      }
    }
  );

  // 患者快捷登录
  const { run: patientLoginByPassword } = useRequest(
    apis.user.patientLoginByPassword,
    {
      manual: true,
      onSuccess(res) {
        utils.storage.setToken(res.result);
        getPatientBasicInfo();
      }
    }
  );

  const wxLoginHandler = () => {
    // 医生快捷登录
    if (role === "doctor") {
      console.log("doctor");
      doctorSignIn("pending phone code");
    }

    // 患者快捷登录
    if (role === "patient") {
      patientWxPhoneSignIn("pending phone code");
    }

    if (role === "proxy") {
      medicineProxyWxPhoneSignIn("pending phone code");
    }
  };

  const workerLoginHandler = (accountInfo) => {
    workerLoginByPassword(accountInfo);
  };

  return {
    wxLoginHandler,
    workerLoginHandler,
    doctorLoginByPassword,
    patientLoginByPassword
  };
};
