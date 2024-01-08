import Taro from "@tarojs/taro";
import config from "src/config/index";
import utils from ".";

const request_data = {
  platform: "wap",
  rent_mode: 2
};

const request = async (
  options = {
    method: "GET",
    data: {}
  },
  header = {}
) => {
  const token = await utils.storage.getToken();
  return Taro.request({
    url: config.baseUrl + "/api" + options.url,
    data: {
      ...options.data
    },
    header: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
      ...header
    },
    method: options.method.toUpperCase()
  }).then((res) => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (data.code != 200) {
        Taro.showToast({
          title: `${res.data.message}` || res.data.code,
          icon: "none",
          mask: true
        });
        return Promise.reject(`${res.data.message}` || res.data.code);
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  });
};

export default request;
