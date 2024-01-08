// @ts-nocheck
import Taro from "@tarojs/taro";

export const goBack = () => {
  Taro.navigateBack();
};

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

export const gotoSignUp = (role, token) => {
  route("SignUp", {
    redirect: false,
    params: { role, token },
    packages: "doctor"
  });
};

export const gotoApplyMedicineInfo = () => {
  route("ApplyMedicineInfo", {
    redirect: false,
    packages: "doctor"
  });
};

export const gotoProxyGetAccount = (role) => {
  route("ProxyGetAccountInfo", {
    redirect: false,
    packages: "proxy",
    params: { role }
  });
};

export const gotoApplyMedicineMaterialsReview = (role, mode) => {
  route("ApplyMedicineMaterialsReview", {
    redirect: false,
    packages: "doctor",
    params: { role, mode }
  });
};

export const gotoReceivedDrugList = () => {
  route("ReceivedDrugList", {
    redirect: false,
    packages: "admin"
  });
};

export const gotoDrugReceivedDetail = () => {
  return route("DrugReceivedDetail", {
    redirect: false,
    packages: "admin"
  });
};

export const gotoFollowDoctorList = () => {
  return route("FollowDoctorList", {
    redirect: false,
    packages: "proxy"
  });
};

export const gotoFollowDoctor = () => {
  return route("FollowDoctor", {
    redirect: false,
    packages: "proxy"
  });
};
