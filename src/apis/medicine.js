import request from "src/utils/request";

/**
 * @description 药代接受代操作
 */
export const acceptProxy = (role, token) => {
  let url = "";
  if (role === "doctor") {
    url = "/doctor/proxy";
  }

  if (role === "patient") {
    url = "/patient/proxy";
  }
  return request(
    {
      method: "post",
      url,
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

// 取消代操作
export const cancelProxy = (role) => {
  return request({
    method: "post",
    url: role === "doctor" ? "/doctor/cancelProxy" : "/patient/cancelProxy",
    data: {}
  });
};

// 取消转赠
export const cancelGift = () => {
  return request({
    method: "post",
    url: "/doctor/cancelPatient",
    data: {}
  });
};

// 申请药品材料提交
export const submitMedicineMaterials = (role, materials) => {
  let url = "/patient/apply";

  if (role === "patient") {
    url = "/patient/apply";
  }

  if (role === "doctor") {
    url = "/doctor/apply";
  }
  return request({
    method: "post",
    url,
    data: materials
  });
};

// 获取申请药品材料的审批信息

export const getApplyMedicineMaterialsReview = (role) => {
  let url = "/patient/application";

  if (role === "patient") {
    url = "/patient/application";
  }

  if (role === "doctor") {
    url = "/doctor/application";
  }
  return request({
    method: "post",
    url,
    data: {}
  });
};
