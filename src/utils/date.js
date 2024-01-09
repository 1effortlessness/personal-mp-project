const dayjs = require("dayjs");

export const dateFormat = (date, template = "YYYY.MM.DD") => {
  return date ? dayjs(date).format(template) : "";
};
