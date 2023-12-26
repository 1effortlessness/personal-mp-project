import { View, Image, Text } from "@tarojs/components";
import 鲁可欣兑换券logo from "@/assets/images/鲁可欣兑换券logo.png";
import 已过期 from "@/assets/images/过期.png";
import 已兑换 from "@/assets/images/已兑换.png";
import 兑换券bg from "@/assets/images/兑换券bg.png";
import { Button } from "@antmjs/vantui";
import classNames from "classnames";
import { useMemo } from "react";
import Taro from "@tarojs/taro";

const CertificateCard = ({ used, expired, cardConfig, ...viewProps }) => {
  const isGray = useMemo(() => {
    return used || expired;
  }, [used, expired]);

  // Taro.showTabBar();
  return (
    <View
      {...viewProps}
      style={{
        backgroundImage: `url(${兑换券bg})`,
        filter: isGray ? "grayscale(100%)" : "",
      }}
      className={classNames(
        "w-[662px] h-[384px] rounded-[20px] bg-cover",
        viewProps.className
      )}
    >
      {/* <CustomTabBar /> */}
      {/* title */}
      <View className="text-[34px] font-extrabold px-[48px] py-[24px] text-white">
        地舒单抗注射液 (鲁可欣@) 兑换券
      </View>
      {/* body */}
      <View className="p-[48px] pb-[18px] rounded-b-[20px] relative">
        {/* absolute组件 */}
        <Image
          src={鲁可欣兑换券logo}
          className="absolute top-[36px] right-[48px] w-[184px] h-[66px]"
        />
        {/* 过期标识 */}
        {expired && (
          <View className=" bg-white rounded-full absolute top-[84px] z-10 right-[13px] w-[108px] h-[132px]">
            <Image src={已过期} className="w-[108px] h-[132px]" />
          </View>
        )}
        {/* 兑换标识 */}
        {used && (
          <View className=" bg-white rounded-full absolute top-[84px] z-10 right-[13px] w-[108px] h-[132px]">
            <Image src={已兑换} className="w-[108px] h-[132px]" />
          </View>
        )}
        {/* absolute组件 */}
        <InfoCell label="兑换券数量" value={1} />
        <InfoCell className="mt-1" label="兑换券数量" value={1} />
        <InfoCell className="mt-1" label="兑换券数量" value={1} />

        <CardDivider />
        <View className="flex items-center mt-[16px]">
          <Text className=" text-red font-bold text-[26px]">
            *请您先去药店预约，再去领药
          </Text>
          <Button size="small" type="primary">
            去使用
          </Button>
        </View>
      </View>
    </View>
  );
};

const InfoCell = ({ label, value, ...viewProps }) => {
  return (
    <View
      {...viewProps}
      className={classNames(
        "flex w-full items-center text-nomal",
        viewProps.className
      )}
    >
      <View className="w-[160px] text-[26px] font-bold flex-shrink-0">
        {label}
      </View>
      <View className="flex-grow text-[26px] font-medium">{value}</View>
    </View>
  );
};

const CardDivider = () => {
  return <View className="border border-dashed border-gray mt-[32px]"></View>;
};

export default CertificateCard;
