import PageWithTabBar from "@/components/PageWithTabBar";
import { Button } from "@antmjs/vantui";
import { View, Text, Image } from "@tarojs/components";
import classNames from "classnames";
import { useMemo } from "react";
// https://github.com/PsChina/wx-base64-qrcode 文档地址
import QR from "wx-base64-qrcode";
import { useSelector } from "react-redux";
import { couponSelector } from "src/store/modules/coupon";

const CertificateCode = () => {
  const couponData = useSelector(couponSelector.couponData);
  const base64Data = useMemo(() => {
    return QR.createQrCodeImg(couponData?.id ?? "any str code", 312);
  }, [couponData?.id]); // base64的数据
  return (
    <PageWithTabBar className="p-[40px]">
      <View className="bg-white p-[40px] shadow-lg rounded-[20px]">
        {/* head */}
        <View className="flex items-center gap-[10px]">
          <View className="h-[88px] w-[88px] bg-emerald-400 rounded-full" />
          <Text className="text-primary text-xl font-extrabold ">
            地舒单抗注射液 (鲁可欣@) 兑换券
          </Text>
        </View>
        <View className="flex items-center flex-col mt-[10px]">
          {/* 二维码 */}
          <Image src={base64Data} className="w-[312px] h-[312px]" />
          {/* tip */}
          <Text className="text-red mt-[10px] text-sm">
            *请您先联系药店预约，再去领药
          </Text>
        </View>

        <Divider className="my-[24px]" />

        {/* basic info */}
        <View className="flex flex-col gap-2">
          <DescCell label="代领人" value="朱领领" />
          <DescCell label="使用期限" value="2023.08.08 至 2024.01.10" />
          <DescCell
            label="注意事项"
            value="请携带委托书、身份证原件去药店领药"
          />
        </View>
      </View>
      <View className="mt-[48px]">
        <Button round type="primary" block>
          查找药房
        </Button>
      </View>
    </PageWithTabBar>
  );
};

const DescCell = ({ label, value }) => {
  return (
    <View className="flex items-center">
      <View className="w-[132px] flex-shrink-0 text-sm font-bold">{label}</View>

      <View className="flex-grow text-sm font-medium">{value}</View>
    </View>
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
