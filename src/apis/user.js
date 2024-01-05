import Taro from "@tarojs/taro";
import request from "src/utils/request";

// 患者注册
export const patientSignUp = (values) => {
  return request({
    method: "post",
    url: "/doctor/patient",
    data: values
  });
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
 * @description 患者通过微信获取的phoneCode登录
 * @param {string} phoneCode 微信电话code， 后端解密
 */
export const patientWxPhoneSignIn = (phoneCode) => {
  return request({
    method: "post",
    url: "/login/patient",
    data: { mobile: phoneCode }
  });
};

/**
 * @description 医生通过微信获取的phoneCode登录
 * @param {string} phoneCode 微信电话code， 后端解密
 */
export const doctorWxPhoneSignIn = (phoneCode) => {
  return request({
    method: "post",
    url: "/login/doctor",
    data: { mobile: "17628381307" }
  });
};

/**
 * @description 药代通过微信获取的phoneCode登录
 * @param {string} phoneCode 微信电话code， 后端解密
 */
export const medicineProxyWxPhoneSignIn = (phoneCode) => {
  return request({
    method: "post",
    url: "/login/medical",
    data: { mobile: "17628381307" }
  });
};

/**
 * @description 工作人员账号密码登录
 * @param {object} values
 * @param {string} values.name 账号
 * @param {string} values.password 密码
 * @returns
 */
export const workerLoginByPassword = (values) => {
  return request({
    method: "post",
    url: "/login/pharmacy",
    data: values
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
 * @description 获取医生的基本信息
 * @method GET
 * @returns
 */
export const getDoctorBasicInfo = () => {
  return request({
    method: "get",
    url: "/doctor/me",
    data: {}
  });
};

/**
 * @description 获取药店工作人员的基本信息
 * @method GET
 * @returns
 */
export const getWorkerBasicInfo = () => {
  return request({
    method: "get",
    url: "/pharmacy/me",
    data: {}
  });
};

/**
 * @description 获取药代的基本信息
 * @method GET
 * @returns
 */
export const getProxyBasicInfo = () => {
  return request({
    method: "get",
    url: "/medical/me",
    data: {}
  });
};

/**
 * @description 获取患者的基本信息
 * @method GET
 * @returns
 */
export const getPatientBasicInfo = () => {
  return request({
    method: "get",
    url: "/patient/me",
    data: {}
  });
};
