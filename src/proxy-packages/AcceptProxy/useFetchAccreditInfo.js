import apis from "src/apis";
import { useRequest } from "taro-hooks";
import { useDispatch } from "react-redux";
import {
  setProxyAccountInfo,
  setProxyFromRole
} from "src/store/modules/medicineProxy";

export const useFetchAccreditInfo = () => {
  const dispatch = useDispatch();
  return useRequest(apis.medicine.acceptProxy, {
    manual: true,
    onSuccess(res, [role]) {
      dispatch(setProxyAccountInfo(res.result));
      dispatch(setProxyFromRole(role));
    }
  });
};
