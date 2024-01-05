import apis from "src/apis";
import utils from "src/utils";
import { useRequest } from "taro-hooks";

export const useSignUp = (role) => {
  const { run } = useRequest(
    role === "patient"
      ? apis.user.patientSignUp
      : apis.user.medicineProxySignUp,
    {
      manual: true,
      onSuccess() {
        utils.navigator.gotoLogin(role);
      }
    }
  );

  return { signUpHandler: run };
};
