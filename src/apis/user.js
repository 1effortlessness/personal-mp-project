import request from "src/utils/request";

// 患者注册
export const patientSignUp = (values, token) => {
  return request(
    {
      method: "post",
      url: "/doctor/patient",
      data: values
    },
    {
      Authorization: "Bearer " + token
    }
  );
};

/**
 * @description 药代注册
 * @param {object} values
 * @param {string} values.name 姓名
 * @param {string} values.mobile 电话
 * @param {string} values.companyCode 邀请码
 * @returns
 */
export const medicineProxySignUp = (values) => {
  return request({
    method: "post",
    url: "/login/medical/register",
    data: values
  });
};

/**
 * @description 药店工作人员登录
 * @param {object} values
 * @param {string} values.mobile 电话
 * @param {string} values.password 密码
 */
export const pharmacyWorkerLogin = async (values) => {
  return request({
    method: "post",
    url: "/login/pharmacy",
    data: values
  });
};

/**
 * @description 通过微信获取的phoneCode登录
 * @param {string} phoneCode 微信电话code， 后端解密
 */
export const wxPhoneCodeLogin = (role, phoneCode) => {
  let url = "/login/patient";
  if (role === "patient") {
    url = "/login/patient";
  }

  if (role === "doctor") {
    url = "/login/doctor";
  }

  if (role === "proxy") {
    url = "/login/medical";
  }
  return request({
    method: "post",
    url,
    data: { mobile: phoneCode }
  });
};

/**
 * @description 通过账号密码登录
 * @param {string} role
 * @param {object} accountInfo
 * @param {string} accountInfo.mobile 账号
 * @param {string} accountInfo.password 密码
 * @returns
 */
export const byPasswordLogin = (role, accountInfo) => {
  let url = "/login/pharmacy";
  if (role === "worker") {
    url = "/login/pharmacy";
  }

  if (role === "doctor") {
    url = "/login/doctor/password";
  }

  if (role === "patient") {
    url = "/login/patient/password";
  }
  return request({
    method: "post",
    url,
    data:
      role === "worker"
        ? { name: accountInfo.mobile, password: accountInfo.password }
        : accountInfo
  });
};

/**
 * @description 代托管医生临时密码登录
 * @param {object} values
 * @param {string} values.mobile 手机号
 * @param {string} values.password 密码
 * @returns
 */
export const doctorLoginByPassword = (values) => {
  return request({
    method: "post",
    url: "/login/doctor/password",
    data: values
  });
};

/**
 * @description 患者临时密码登录
 * @param {object} values
 * @param {string} values.mobile 手机号
 * @param {string} values.password 密码
 * @returns
 */
export const patientLoginByPassword = (values) => {
  return request({
    method: "post",
    url: "/login/patient/password",
    data: values
  });
};

/**
 * @description 获取用户的Me接口信息
 * @method GET
 * @returns
 */
export const getUserMeInfo = (role) => {
  let url = "/pharmacy/me";

  if (role === "patient") {
    url = "/patient/me";
  }

  if (role === "doctor") {
    url = "/doctor/me";
  }

  if (role === "proxy") {
    url = "/medical/me";
  }

  if (role === "worker") {
    url = "/pharmacy/me";
  }
  return request({
    method: "get",
    url,
    data: {}
  });
};
