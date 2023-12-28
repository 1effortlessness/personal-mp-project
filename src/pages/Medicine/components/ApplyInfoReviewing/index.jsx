import { Text, View } from "@tarojs/components";
import { Button } from "@antmjs/vantui";
import MedicineBgView, { DescCard } from "../MedicineBgView";

/**
 *
 * @description 申请资料审核中
 */
const ApplyInfoReviewing = () => {
  return (
    <MedicineBgView>
      <DescCard title="" className="mt-[702px] flex justify-center">
        <Text className="text-3xl w-full text-center">
          您已经上传材料，请耐心等待审核
        </Text>
      </DescCard>

      <View className="w-full mt-[68px]">
        <Button block type="primary">
          查看申请
        </Button>
      </View>
    </MedicineBgView>
  );
};

export default ApplyInfoReviewing;
