import PageWithTabBar from "@/components/PageWithTabBar";
import { View, Text } from "@tarojs/components";
import classNames from "classnames";

const CertificateCode = () => {
  return (
    <PageWithTabBar className="p-[40px]">
      <View className="bg-white p-[40px] shadow-lg rounded-[20px]">
        {/* head */}
        <View className="flex items-center gap-[10px]">
          <View className="h-[88px] w-[88px] bg-emerald-400 rounded-full" />
          <Text className="text-primary text-[30px] font-extrabold ">
            地舒单抗注射液 (鲁可欣@) 兑换券
          </Text>
        </View>
        <View className="flex items-center flex-col mt-[10px]">
          {/* 二维码 */}
          <View className="w-[312px] h-[312px] bg-red"></View>

          <Text className="text-red mt-[10px] text-[26px]">
            *请您先联系药店预约，再去领药
          </Text>
        </View>

        <Divider className="my-[24px]" />
      </View>
    </PageWithTabBar>
  );
};

const Divider = ({ ...viewProps }) => {
  const circleCls = "rounded-full h-[42px] w-[42px] bg-under absolute";
  return (
    <View
      {...viewProps}
      className={classNames(
        viewProps.className,
        "full border-gray border border-dashed relative"
      )}
    >
      <View className={classNames(circleCls, "top-[-21px] left-[-60px]")} />
      <View className={classNames(circleCls, "top-[-21px]  right-[-60px]")} />
    </View>
  );
};

export default CertificateCode;
