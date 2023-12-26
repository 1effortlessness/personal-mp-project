import MedicineBgView, { DescCard } from "../MedicineBgView/index";
import { View } from "@tarojs/components";
import { Button } from "@antmjs/vantui";

/** @description 接受药品转增 */
const AcceptConversionMedicine = () => {
  return (
    <MedicineBgView className="pb-[48px]">
      <DescCard title="" className="mt-[608px] flex flex-col items-center">
        XXX医生给您赠送一支
        <View>地舒单抗注射液（鲁可欣®）</View>
      </DescCard>

      <DescCard title={"领药说明"} className="mt-[40px]">
        <View className="mt-4 text-[28px] opacity-70">
          <View>1.登录后，获得一张未激活状态的领药权益兑换券。</View>
          <View className="mt-1">
            2.因为药品的特殊性，所以兑换领药权益前，需要上传骨质疏松症的病例照片，经后台审核后，激活权益兑换券。
          </View>
          <View className="mt-1">
            3.凭借药品兑换二维码，在活动指定药店核销兑换药品.
          </View>
        </View>
      </DescCard>
      <View className="w-full my-[48px] px-[64px]">
        <Button type="primary" block>
          登陆领药
        </Button>
      </View>
    </MedicineBgView>
  );
};

export default AcceptConversionMedicine;
