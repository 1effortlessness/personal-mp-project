import { View, Text } from "@tarojs/components";
import classNames from "classnames";

/**
 *
 * @typedef {Object}
 * @property {string} [title] - 标题
 * @property {string} [titleDesc] - 标题后括号的内容
 * @property {import("react").ReactNode} [extra] - 右上角内容
 * @returns
 */
const InfoCard = ({ children, title, extra, titleDesc, ...viewProps }) => {
  return (
    <View
      className={classNames(
        "bg-white p-[36px] rounded-[20px]",
        viewProps.className
      )}
    >
      {/* head */}
      <View className="flex justify-between items-center pb-[20px]">
        {/* title */}
        {(titleDesc || title) && (
          <View className="flex items-center">
            <Text className="text-primary text-[30px] font-extrabold">
              {title}
            </Text>
            <Text className=" text-[30px] text-[rgba(182, 193, 206, 0.50)]">
              {titleDesc ? `（${titleDesc}）` : ""}
            </Text>
          </View>
        )}

        {/* extra */}
        <View>{extra}</View>
      </View>
      {/* body */}
      {children}
    </View>
  );
};

export default InfoCard;