import { View, Text } from "@tarojs/components";
import { Button } from "@antmjs/vantui";
import MedicineBgView, { DescCard } from "../MedicineBgView";

/**
 *
 * @description 申请领药-有资格 or 取消授权
 */
const ApplyMedicine = () => {
  return (
    <MedicineBgView>
      <DescCard title="领药说明" className="mt-[608px]">
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
          因为药品的特殊性，需要上传骨质疏松症的病例照片，经后台审核后，可获取一张药品兑换二维码，在活动指定药店核销兑换药品。
        </View>
      </DescCard>

      <View className="px-[64px] grid grid-cols-2 w-full gap-6 mt-[48px]">
        <Button type="primary" block>
          自用领药申请
        </Button>
        <Button type="primary" block>
          转赠他人
        </Button>
      </View>

      <View className="w-full my-[48px] px-[64px]">
        <Button type="primary" block>
          授权他人代操作
        </Button>
      </View>

      <View className="w-full my-[48px] px-[64px] flex items-center flex-col">
        <Text className="mb-5 text-white text-base">
          你已授权王五账号代操作
        </Text>
        <Button type="primary" plain round block>
          取消授权
        </Button>
      </View>
    </MedicineBgView>
  );
};

export default ApplyMedicine;
