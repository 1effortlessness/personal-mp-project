import request from "src/utils/request";

export const getWriteoffList = (params) => {
  return request({
    method: "get",
    url: "/writeoff/list",
    data: { ...params }
  });
};
