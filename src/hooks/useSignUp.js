import apis from "src/apis";
import utils from "src/utils";
import { useRequest } from "taro-hooks";

export const useSignUp = (role) => {
  const { run: patientSignUp } = useRequest(apis.user.patientSignUp, {
    manual: true,
    onSuccess() {
      utils.navigator.gotoLogin(role);
    }
  });

  const { run: medicineProxySignUp } = useRequest(
    apis.user.medicineProxySignUp,
    {
      manual: true,
      onSuccess() {
        utils.navigator.gotoLogin(role);
      }
    }
  );

  return { patientSignUp, medicineProxySignUp };
};
