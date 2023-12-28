import { View, Text } from "@tarojs/components";
import { Button } from "@antmjs/vantui";
import MedicineBgView, { DescCard } from "../MedicineBgView";
import { useCallback } from "react";

/** @description 审核失败/成功/驳回 */
const ApplyMedicineReviewFail = () => {
  return (
    <MedicineBgView>
      <View className="pt-[608px] pb-[48px]">
        <DescCard title="领药说明">
          <View className="mt-4">
            您是齐鲁制药本次鲁可欣赠药活动名单上的医护人员，可以免费获赠一支鲁可欣给患有骨质疏松症的亲属朋友或自己使用。
          </View>

          <View className="mt-4">
            *鲁可欣的兑换权益请
            <Text className="text-[#00D1FF]">查看权益页</Text>
          </View>
        </DescCard>

        <DescCard title="温馨提示" className="mt-[40px]">
          <View className="mt-4">
            因为药品的特殊性，需要上传骨质疏松症的病例照片，经后台审核后，可获取一张药品兑换二维码，在活动指定药店核销兑换药品。{" "}
          </View>
        </DescCard>

        <View className="flex flex-col items-center my-[48px]">
          <Text className="text-white text-base font-medium">
            抱歉您的申请材料：未通过审核，请您重新提交
          </Text>
        </View>

        <View className="grid grid-cols-2 gap-8">
          <Button className="px-[64px]" type="primary" round block plain>
            领药说明
          </Button>

          <Button className="px-[64px]" type="primary" round block>
            重新提交材料
          </Button>
        </View>
      </View>
    </MedicineBgView>
  );
};

export default ApplyMedicineReviewFail;
