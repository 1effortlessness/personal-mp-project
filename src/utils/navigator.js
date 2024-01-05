// @ts-nocheck
import Taro from "@tarojs/taro";

const route = (name, { redirect, packages, params }) => {
  const prefixPath = packages ? `${packages}-packages` : "pages";
  const suffixPath = "index";
  const url = `/${prefixPath}/${name}/${suffixPath}`;
  const method = redirect ? Taro.redirectTo : Taro.navigateTo;
  let query = params ? queryStringify(params) : "";
  if (query) {
    query = `?${query}`;
  }
  method({
    url: `${url}${query}`
  });
};

const queryStringify = (params) => {
  const query = Object.keys(params).reduce((acc, key) => {
    const value = params[key];
    if (typeof value === "string" || typeof value === "number") {
      return `${acc}${key}=${value}&`;
    }
    return acc;
  }, "");
  // remove the '&' in trail
  return query.slice(0, -1);
};

const login = () => {
  route("Login", { redirect: true });
};

export const gotoLogin = (role) => {
  route("SignIn", { redirect: false, params: { role }, packages: "doctor" });
};

export const gotoPasswordSignIn = (role) => {
  route("ByPasswordSignIn", {
    redirect: false,
    params: { role },
    packages: "doctor"
  });
};

export const gotoSelectSignInRole = () => {
  route("SelectSignInRole", {
    redirect: false,
    packages: "doctor"
  });
};

export const gotoSignUp = (role) => {
  route("SignUp", {
    redirect: false,
    params: { role },
    packages: "doctor"
  });
};

export const gotoApplyMedicineInfo = () => {
  route("ApplyMedicineInfo", {
    redirect: false,
    packages: "doctor"
  });
};

export const goBack = () => {
  Taro.navigateBack();
};
