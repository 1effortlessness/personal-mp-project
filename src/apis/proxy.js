import request from "src/utils/request";

export const getFollowDoctorList = () => {
  return request({
    method: "get",
    url: "/medical/followList",
    data: {}
  });
};

export const followDoctor = (values) => {
  return request({
    method: "post",
    url: "/medical/follow",
    data: values
  });
};
