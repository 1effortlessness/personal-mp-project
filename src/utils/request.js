import Taro from "@tarojs/taro";
import config from "src/config/index";

const request_data = {
  platform: "wap",
  rent_mode: 2
};

const request = (
  options = {
    method: "GET",
    data: {}
  }
) => {
  return Taro.request({
    url: config.baseUrl + options.url,
    data: {
      ...request_data,
      ...options.data
    },
    header: {
      "Content-Type": "application/json"
    },
    method: options.method.toUpperCase()
  }).then((res) => {
    const { statusCode, data } = res;
    if (statusCode >= 200 && statusCode < 300) {
      if (data.code != 200) {
        Taro.showToast({
          title: `${res.data.error.message}~` || res.data.error.code,
          icon: "none",
          mask: true
        });
      }
      return data;
    } else {
      throw new Error(`网络请求错误，状态码${statusCode}`);
    }
  });
};

export default request;
