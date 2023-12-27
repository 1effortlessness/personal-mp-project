import {Text, View} from "@tarojs/components";
import {Button} from "@antmjs/vantui";
import MedicineBgView, {DescCard} from "../MedicineBgView";

/**
 *
 * @description 申请领药-授赠患者
 */
const GiftPatient = () => {
  return (
    <MedicineBgView>
      <DescCard title="领药说明" className="mt-[608px]">
        <View className="mt-4">
          张XX医生给您赠送一支地舒单抗注射液（鲁可欣®）
        </View>

        <View className="mt-4">
          *鲁可欣的兑换权益请
          <Text className="text-[#00D1FF]"> 查看权益页</Text>
        </View>
      </DescCard>

      <DescCard title="温馨提示" className="mt-[40px]">
        <View className="mt-4">
          因为药品的特殊性，需要上传骨质疏松症的病例照片，经后台审核后，可获取一张药品兑换二维码，在活动指定药店核销兑换药品。
        </View>
      </DescCard>

      <View className="w-full mt-[48px]">
        <Button type="primary" block>
          申请领药
        </Button>
      </View>
      <View className="w-full my-[48px]">
        <Button type="primary" block>
          授权他人代操作
        </Button>
      </View>
    </MedicineBgView>
  );
};

export default GiftPatient;
