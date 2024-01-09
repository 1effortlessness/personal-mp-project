import request from "src/utils/request";

export const getShopStatistics = () => {
  return request({
    method: "get",
    url: "/pharmacy/shop",
    data: {}
  });
};

export const getDispensingList = () => {
  return request({
    method: "get",
    url: "/pharmacy/dispensingList",
    data: {}
  });
};

export const dispensingConfirm = (id) => {
  return request({
    method: "get",
    url: "/pharmacy/dispensingConfirm",
    data: { id }
  });
};

export const getShopList = (params) => {
  return request({
    method: "get",
    url: "/shop/list",
    data: params
  });
};
