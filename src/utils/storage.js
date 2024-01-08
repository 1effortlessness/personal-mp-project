import config from "@/config";
import Taro from "@tarojs/taro";

export const getToken = async () => {
  try {
    const res = await Taro.getStorage({
      key: config.tokenKey
    });
    return res.data || "";
  } catch (e) {
    return "";
  }
};

export const setToken = (token, role) => {
  setTokenRole(role);
  return Taro.setStorage({
    key: config.tokenKey,
    data: token
  });
};

export const getTokenRole = async () => {
  try {
    const res = await Taro.getStorage({
      key: config.roleKey
    });
    return res.data || "";
  } catch (e) {
    return "";
  }
};

export const setTokenRole = (role) => {
  return Taro.setStorage({
    key: config.roleKey,
    data: role
  });
};

export const clearAuth = () => {
  return Taro.clearStorage();
};
