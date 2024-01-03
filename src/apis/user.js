const { default: request } = require("src/utils/request");

export const patientSignUp = (values) => {
  request({
    method: "post",
    url: "/doctor/patient",
    data: values
  });
};
