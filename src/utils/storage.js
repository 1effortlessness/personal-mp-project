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

export const setToken = (token) => {
  return Taro.setStorage({
    key: config.tokenKey,
    data: token
  });
};
