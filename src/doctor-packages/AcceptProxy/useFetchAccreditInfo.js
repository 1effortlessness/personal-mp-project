import Taro, { useLoad } from "@tarojs/taro";
import { useState } from "react";
import apis from "src/apis";
import { useRequest } from "taro-hooks";
import { useDispatch } from "react-redux";
import {
  setProxyAccountInfo,
  setProxyFromRole
} from "src/store/modules/medicineProxy";

export const useFetchAccreditInfo = () => {
  const dispatch = useDispatch();
  const [fromRole, setFromRole] = useState();

  const { run: doctor } = useRequest(apis.medicine.acceptDoctorContracts, {
    manual: true,
    onSuccess(res) {
      dispatch(setProxyAccountInfo(res.result));
      dispatch(setProxyFromRole("doctor"));
    }
  });
  const { run: patient } = useRequest(apis.medicine.acceptPatientContracts, {
    manual: true,
    onSuccess(res) {
      dispatch(setProxyAccountInfo(res.result));
      dispatch(setProxyFromRole("patient"));
    }
  });

  useLoad((params) => {
    if (!params?.token || !params?.fromRole) {
      Taro.showToast({ title: "必要信息不明确， 请检查入口携带信息" });
      return;
    }

    setFromRole(params?.fromRole);
    if (params.fromRole === "patient") {
      patient(params.token);
      return;
    }
    if (params.fromRole === "doctor") {
      doctor(params.token);
      return;
    }
  });

  return { fromRole };
};
