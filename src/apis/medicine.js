import request from "src/utils/request";

/**
 * @description 药代接受医生的代操作
 */
export const acceptDoctorContracts = (token) => {
  return request(
    {
      method: "post",
      url: "/doctor/proxy",
      data: {}
    },
    {
      Authorization: "Bearer " + token
    }
  );
};

/**
 * @description 药代接受患者的代操作
 */
export const acceptPatientContracts = (token) => {
  return request(
    {
      method: "post",
      url: "/patient/proxy",
      data: {}
    },
    {
      Authorization: "Bearer " + token
    }
  );
};

// 获取卡券
export const getCoupon = (role) => {
  return request({
    method: "get",
    url: role === "doctor" ? "/doctor/coupon" : "/patient/coupon",
    data: {}
  });
};
